---
title: "Portfolio AI – RAG-Powered Personal Portfolio"
slug: "portfolio-ai"
tags: ["AI", "RAG", "Next.js", "FastAPI", "pgvector", "TypeScript", "Python"]
stack: ["Next.js 14", "TypeScript", "TailwindCSS", "FastAPI", "pgvector", "PostgreSQL", "OpenAI", "Python"]
summary: "This portfolio site, featuring an embedded RAG-powered chatbot that answers questions about my background, skills, and projects. Custom ingestion pipeline, pgvector retrieval, GPT-4.1-mini generation with anti-hallucination guardrails, and SSE streaming."
github: "https://github.com/Dante9988/portfolio"
demo: "https://anvar.dev"
role: "Full-Stack Engineer"
period: "2024 – Present"
---

# Portfolio AI – RAG-Powered Personal Portfolio

## Overview

My personal portfolio site features an embedded AI chatbot ("Anvar AI") that answers questions about my background, skills, and projects using retrieval-augmented generation. All answers are grounded in my actual resume and curated project data — hallucinations are significantly reduced through RAG, structured context retrieval, and constrained prompts.

## Architecture

### Frontend (Next.js 14)
- App Router with TypeScript and TailwindCSS
- Pages: Home, Projects, Experience, Contact, Resume
- Floating chat widget on every page with streaming responses
- Citations displayed under each AI response

### Backend (FastAPI + OpenAI)
- FastAPI server with streaming SSE chat endpoint
- Custom RAG pipeline: chunking, embedding, cosine similarity retrieval
- pgvector (PostgreSQL) as the vector store
- OpenAI-compatible API for embeddings and chat completion — backend can be pointed at Azure OpenAI, Ollama, or any compatible provider without code changes

### RAG Pipeline
- **Ingestion**: resume, project markdown files, and about content are chunked (800 chars, 120 overlap), embedded via text-embedding-3-small, and upserted into pgvector with deterministic IDs for idempotent re-runs
- **Retrieval**: cosine similarity search with IVFFlat ANN index, top-5 chunks returned with metadata
- **Generation**: GPT-4.1-mini with a strict system prompt containing 8 anti-hallucination rules, 6-turn conversation history, and numbered context blocks
- **Streaming**: SSE events deliver citations first, then tokens one at a time for a typewriter effect

## Key Highlights
- Anti-hallucination guardrails: model only uses retrieved context, never invents employers or projects
- Citations in every response with source metadata
- Streaming typewriter effect for AI responses
- Configurable LLM backend (OpenAI, Azure, Ollama) via environment variable
- One-command setup with docker-compose
