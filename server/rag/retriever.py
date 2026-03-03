import os
import json
import hashlib
import psycopg2
from typing import List, Dict, Any

from server.config import get_settings
from server.db import get_connection, init_db


def chunk_text(text: str, chunk_size: int, overlap: int) -> List[str]:
    """Split text into overlapping chunks by character count."""
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunk = text[start:end]
        if chunk.strip():
            chunks.append(chunk)
        if end >= len(text):
            break
        start = end - overlap
    return chunks


def get_embeddings(texts: List[str], settings) -> List[List[float]]:
    """Get embeddings from OpenAI-compatible API."""
    from openai import OpenAI

    client = OpenAI(
        api_key=settings.openai_api_key,
        base_url=settings.openai_base_url,
    )

    response = client.embeddings.create(
        model=settings.embedding_model,
        input=texts,
    )
    return [item.embedding for item in response.data]


def make_chunk_id(source: str, chunk_index: int) -> str:
    key = f"{source}::{chunk_index}"
    return hashlib.sha256(key.encode()).hexdigest()[:32]


def upsert_chunks(conn, chunks_data: List[Dict[str, Any]]):
    """Idempotent upsert of chunks into postgres."""
    cur = conn.cursor()
    for item in chunks_data:
        cur.execute(
            """
            INSERT INTO portfolio_chunks
                (chunk_id, source, title, doc_type, url, chunk_index, content, embedding)
            VALUES (%s, %s, %s, %s, %s, %s, %s, %s::vector)
            ON CONFLICT (chunk_id) DO UPDATE SET
                source = EXCLUDED.source,
                title = EXCLUDED.title,
                doc_type = EXCLUDED.doc_type,
                url = EXCLUDED.url,
                chunk_index = EXCLUDED.chunk_index,
                content = EXCLUDED.content,
                embedding = EXCLUDED.embedding
            """,
            (
                item["chunk_id"],
                item["source"],
                item["title"],
                item["doc_type"],
                item.get("url", ""),
                item["chunk_index"],
                item["content"],
                json.dumps(item["embedding"]),
            ),
        )
    conn.commit()
    cur.close()


def retrieve_chunks(query_embedding: List[float], top_k: int = 5) -> List[Dict[str, Any]]:
    """Retrieve top-k most similar chunks using cosine distance."""
    conn = get_connection()
    cur = conn.cursor()
    cur.execute(
        """
        SELECT chunk_id, source, title, doc_type, url, chunk_index, content,
               1 - (embedding <=> %s::vector) AS similarity
        FROM portfolio_chunks
        ORDER BY embedding <=> %s::vector
        LIMIT %s
        """,
        (json.dumps(query_embedding), json.dumps(query_embedding), top_k),
    )
    rows = cur.fetchall()
    cur.close()
    conn.close()

    return [
        {
            "chunk_id": row[0],
            "source": row[1],
            "title": row[2],
            "doc_type": row[3],
            "url": row[4],
            "chunk_index": row[5],
            "content": row[6],
            "similarity": float(row[7]),
        }
        for row in rows
    ]
