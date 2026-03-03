#!/usr/bin/env python3
"""
Ingestion pipeline for portfolio RAG system.
Reads /data/*.txt and /data/*.md files, chunks them, embeds them, and upserts into pgvector.

Usage:
    python -m server.scripts.ingest
    # or from repo root:
    python server/scripts/ingest.py
"""

import os
import sys
import hashlib

# Make sure server package is importable
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", ".."))

from server.config import get_settings
from server.db import init_db, get_connection
from server.rag.retriever import chunk_text, get_embeddings, make_chunk_id, upsert_chunks

import re


def parse_frontmatter(text: str) -> tuple[dict, str]:
    """Parse YAML-style frontmatter from markdown files."""
    if not text.startswith("---"):
        return {}, text

    end = text.find("---", 3)
    if end == -1:
        return {}, text

    frontmatter_raw = text[3:end].strip()
    body = text[end + 3:].strip()

    meta = {}
    for line in frontmatter_raw.splitlines():
        if ":" in line:
            key, _, value = line.partition(":")
            value = value.strip().strip('"')
            if value.startswith("[") and value.endswith("]"):
                value = [v.strip().strip('"') for v in value[1:-1].split(",")]
            meta[key.strip()] = value

    return meta, body


def load_documents(data_dir: str) -> list[dict]:
    """Load all data files and return structured document objects."""
    documents = []

    # Load resume.txt
    resume_path = os.path.join(data_dir, "resume.txt")
    if os.path.exists(resume_path):
        with open(resume_path, "r", encoding="utf-8") as f:
            content = f.read()
        documents.append(
            {
                "source": "resume.txt",
                "title": "Resume – Anvar Baltakhojayev",
                "doc_type": "resume",
                "url": "/resume",
                "content": content,
            }
        )
        print(f"  Loaded resume.txt ({len(content)} chars)")

    # Load about.md
    about_path = os.path.join(data_dir, "about.md")
    if os.path.exists(about_path):
        with open(about_path, "r", encoding="utf-8") as f:
            content = f.read()
        meta, body = parse_frontmatter(content)
        documents.append(
            {
                "source": "about.md",
                "title": "About Anvar Baltakhojayev",
                "doc_type": "about",
                "url": "/",
                "content": body or content,
            }
        )
        print(f"  Loaded about.md ({len(content)} chars)")

    # Load project markdown files
    projects_dir = os.path.join(data_dir, "projects")
    if os.path.isdir(projects_dir):
        for filename in sorted(os.listdir(projects_dir)):
            if filename.endswith(".md"):
                filepath = os.path.join(projects_dir, filename)
                with open(filepath, "r", encoding="utf-8") as f:
                    content = f.read()
                meta, body = parse_frontmatter(content)
                title = meta.get("title", filename.replace(".md", "").replace("-", " ").title())
                slug = meta.get("slug", filename.replace(".md", ""))
                documents.append(
                    {
                        "source": filename,
                        "title": title,
                        "doc_type": "project",
                        "url": f"/projects/{slug}",
                        "content": body or content,
                    }
                )
                print(f"  Loaded {filename} ({len(content)} chars)")

    return documents


def ingest(batch_size: int = 20):
    settings = get_settings()
    data_dir = os.path.abspath(settings.data_dir)

    print(f"\n=== Anvar Portfolio Ingestion Pipeline ===")
    print(f"Data directory: {data_dir}")
    print(f"Chunk size: {settings.chunk_size} chars | Overlap: {settings.chunk_overlap} chars")
    print(f"Embedding model: {settings.embedding_model}")
    print(f"Database: {settings.database_url}\n")

    # Initialize database schema
    print("Initializing database...")
    init_db()
    print("  Database schema ready.\n")

    # Load documents
    print("Loading documents...")
    documents = load_documents(data_dir)
    print(f"  Loaded {len(documents)} document(s).\n")

    if not documents:
        print("No documents found! Make sure /data/ directory has resume.txt, about.md, and projects/*.md")
        return

    # Chunk all documents
    print("Chunking documents...")
    all_chunk_items = []
    for doc in documents:
        chunks = chunk_text(doc["content"], settings.chunk_size, settings.chunk_overlap)
        for i, chunk_text_content in enumerate(chunks):
            chunk_id = make_chunk_id(doc["source"], i)
            all_chunk_items.append(
                {
                    "chunk_id": chunk_id,
                    "source": doc["source"],
                    "title": doc["title"],
                    "doc_type": doc["doc_type"],
                    "url": doc.get("url", ""),
                    "chunk_index": i,
                    "content": chunk_text_content,
                }
            )
        print(f"  {doc['source']}: {len(chunks)} chunk(s)")

    print(f"\n  Total chunks: {len(all_chunk_items)}\n")

    # Embed in batches
    print(f"Generating embeddings (batch size={batch_size})...")
    conn = get_connection()

    for batch_start in range(0, len(all_chunk_items), batch_size):
        batch = all_chunk_items[batch_start : batch_start + batch_size]
        texts = [item["content"] for item in batch]

        print(f"  Embedding batch {batch_start // batch_size + 1}/{(len(all_chunk_items) + batch_size - 1) // batch_size}...", end=" ")
        embeddings = get_embeddings(texts, settings)
        for item, embedding in zip(batch, embeddings):
            item["embedding"] = embedding
        print(f"done. Upserting...")

        upsert_chunks(conn, batch)

    conn.close()
    print(f"\n=== Ingestion complete! {len(all_chunk_items)} chunks upserted into pgvector. ===\n")


if __name__ == "__main__":
    ingest()
