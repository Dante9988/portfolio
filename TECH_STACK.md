# Tech Stack

A full-stack AI-powered developer portfolio built as a monorepo with a Next.js frontend and a Python FastAPI backend, connected by a RAG (Retrieval-Augmented Generation) pipeline backed by PostgreSQL + pgvector.

---

## Architecture Overview

```
Browser
  │
  ▼
Next.js 14  (port 3000)
  │  App Router pages (SSR + static)
  │  ChatWidget.tsx (client, SSE streaming)
  │  /api/chat route (server-side proxy)
  │
  ▼  HTTP / SSE
FastAPI  (port 8000)
  │  POST /api/chat
  │  POST /api/chat/stream
  │
  ├──▶  OpenAI API
  │       text-embedding-3-small  (query embedding)
  │       gpt-4.1-mini            (chat completions, streamed)
  │
  └──▶  PostgreSQL 16 + pgvector
          portfolio_chunks table
          1536-dim IVFFlat index
          cosine similarity retrieval
```

---

## Frontend

### Next.js 14 (App Router)

The entire UI is built with Next.js using the App Router introduced in Next.js 13+. Pages default to React Server Components, which means data is fetched on the server and only the rendered HTML is sent to the browser — no client-side JavaScript overhead for static content.

- **`app/layout.tsx`** — Root layout, renders `<Navbar>` and `<ChatWidget>` on every page.
- **`app/page.tsx`** — Homepage: hero, stats, tech stack grid, featured projects, chat CTA.
- **`app/projects/page.tsx`** — Server component that reads all `data/projects/*.md` files at request time and renders a project grid.
- **`app/projects/[slug]/page.tsx`** — Dynamic route with `generateStaticParams` for static generation; renders full project detail from markdown.
- **`app/experience/page.tsx`** — Work history timeline, hardcoded data.
- **`app/resume/page.tsx`** — Resume download link + inline preview.
- **`app/contact/page.tsx`** — Contact form (currently mocked, no email service wired).
- **`app/api/chat/route.ts`** — Next.js API Route that acts as a server-side proxy to the FastAPI backend, forwarding `stream`/non-stream requests and piping the SSE response back to the browser.

### React 18

React 18 is used as the rendering engine. Most components are server components but `ChatWidget.tsx` is a client component (marked `"use client"`) because it needs browser APIs (`useState`, `useRef`, `fetch`, `AbortController`).

### TypeScript 5

All frontend code is written in TypeScript. Types are declared for API response shapes (chat message, citation), component props, and project frontmatter.

### Tailwind CSS 3

Utility-first CSS framework used for all styling. The entire dark theme is implemented using Tailwind classes alongside CSS custom properties defined in `globals.css`.

- **`@tailwindcss/typography`** — Used on the project detail pages to apply the `prose` class and get well-formatted markdown output (headings, lists, code blocks, etc.).
- **Custom component classes** — Reusable classes (`.card`, `.tag`, `.btn-primary`, `.btn-secondary`) are defined once in `globals.css` using `@apply` so they can be used across all pages.
- **Fonts** — `Inter` (sans-serif body text) and `JetBrains Mono` (code/mono text) are loaded from Google Fonts via `next/font`.

### gray-matter

Used in the projects server components to parse YAML frontmatter from `.md` files. Each project file has frontmatter fields:

```yaml
---
title: "Project Name"
slug: project-slug
tags: [solidity, react, typescript]
stack: [Next.js, Hardhat, ethers.js]
github: https://github.com/...
demo: https://...
role: "Lead Developer"
period: "2023–2024"
---
```

`gray-matter` separates the frontmatter object from the markdown body so both can be used independently.

### marked

Converts markdown body text into HTML for the project detail pages (`app/projects/[slug]/page.tsx`). The output is rendered with `dangerouslySetInnerHTML` inside a Tailwind `prose` container.

### lucide-react

Icon library used throughout the UI (external link icons, GitHub icons, hamburger menu, send arrow in the chat widget, etc.).

---

## Backend

### FastAPI

Python async web framework. The server exposes three endpoints:

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Liveness probe — returns `{"status": "ok"}` |
| `POST` | `/api/chat` | Non-streaming RAG response — returns `{answer, citations[]}` |
| `POST` | `/api/chat/stream` | Streaming RAG response via Server-Sent Events |

Both chat endpoints accept the same request body:

```json
{
  "message": "What projects have you worked on?",
  "history": [{ "role": "user", "content": "..." }],
  "stream": false
}
```

FastAPI's auto-generated interactive API docs are available at `http://localhost:8000/docs`.

### Uvicorn

ASGI server used to run the FastAPI application. Configured with `--reload` for development and multiple workers in production.

### Pydantic / pydantic-settings

- **Pydantic v2** — Used for request/response model validation. Chat request and citation response shapes are defined as Pydantic models so FastAPI validates all input/output automatically.
- **pydantic-settings** — Loads and validates all environment variables from `.env` into a typed `Settings` class in `server/config.py`. Handles Railway's `postgres://` → `postgresql://` URL prefix normalization automatically.

### OpenAI Python SDK

Used for two things:

1. **Embeddings** — `text-embedding-3-small` model converts text chunks and user queries into 1536-dimensional vectors. Called in `server/rag/retriever.py`.
2. **Chat completions** — `gpt-4.1-mini` generates answers with `stream=True`. The stream is consumed token-by-token and forwarded to the browser as SSE events in `server/main.py`.

The base URL is configurable via `OPENAI_BASE_URL`, which means the backend can be pointed at Azure OpenAI, Together AI, Ollama, or any OpenAI-compatible API without code changes.

### psycopg2-binary

PostgreSQL driver for Python. Used directly (not through SQLAlchemy) for the cosine similarity retrieval query in `server/rag/retriever.py` because the pgvector `<=>` operator requires parameterized queries with explicit casting (`%s::vector`).

### pgvector (Python bindings)

The `pgvector` package registers the `vector` type with psycopg2 so that numpy arrays can be passed directly as query parameters.

### SQLAlchemy 2

Present as a dependency and available for use, though retrieval currently uses raw psycopg2 queries for fine-grained control over the pgvector operator syntax.

### python-dotenv

Loads `.env` file variables into `os.environ` for local development. In production (Railway), environment variables are injected directly by the platform.

### httpx

Async HTTP client available in the backend for making outbound HTTP requests if needed.

---

## Database

### PostgreSQL 16 + pgvector

The only database in the project, used exclusively by the FastAPI backend.

**`portfolio_chunks` table schema:**

```sql
CREATE TABLE portfolio_chunks (
    id          SERIAL PRIMARY KEY,
    chunk_id    TEXT UNIQUE NOT NULL,   -- deterministic ID for idempotent upserts
    source      TEXT NOT NULL,          -- file path of the source document
    title       TEXT,
    doc_type    TEXT CHECK (doc_type IN ('resume', 'project', 'about')),
    url         TEXT,                   -- project URL for citation links
    chunk_index INTEGER,                -- position within the source document
    content     TEXT NOT NULL,          -- raw text of the chunk
    embedding   vector(1536)            -- OpenAI text-embedding-3-small output
);

-- ANN index for fast cosine similarity search
CREATE INDEX IF NOT EXISTS portfolio_chunks_embedding_idx
    ON portfolio_chunks
    USING ivfflat (embedding vector_cosine_ops)
    WITH (lists = 50);
```

**IVFFlat index** — An approximate nearest neighbour index using the Inverted File with Flat compression algorithm. `lists = 50` partitions the vector space into 50 clusters so similarity search only needs to scan a fraction of all stored vectors rather than comparing against every row.

**Cosine similarity query** — The retrieval query in `retriever.py`:

```sql
SELECT content, source, title, doc_type, url
FROM portfolio_chunks
ORDER BY embedding <=> %s::vector
LIMIT %s
```

The `<=>` operator is pgvector's cosine distance operator. Lower distance = more similar.

---

## RAG Pipeline

The AI chat feature is powered by a RAG pipeline that ensures answers are grounded in actual portfolio content rather than hallucinated by the LLM.

### Ingestion (`server/scripts/ingest.py`)

Run once (or re-run idempotently to refresh content):

1. **Load** `data/resume.txt`, `data/about.md`, and all `data/projects/*.md` files.
2. **Parse** YAML frontmatter from project files using `gray-matter`-equivalent Python logic.
3. **Chunk** each document into overlapping text windows (`CHUNK_SIZE=800` chars, `CHUNK_OVERLAP=120` chars).
4. **Embed** each chunk by calling OpenAI's `text-embedding-3-small` model in batches.
5. **Upsert** chunks into PostgreSQL using `ON CONFLICT (chunk_id) DO UPDATE` — safe to re-run.

### Retrieval (`server/rag/retriever.py`)

At query time:

1. Embed the user's message using `text-embedding-3-small`.
2. Run cosine similarity search against `portfolio_chunks` with `LIMIT = TOP_K` (default 5).
3. Return the top-K chunks with their metadata (source, title, doc_type, URL).

### Prompt Construction (`server/rag/prompts.py`)

1. Build a strict system prompt with 8 anti-hallucination rules (e.g. "ONLY use information from the provided context", "never invent employers or projects").
2. Append retrieved chunks as numbered context blocks.
3. Include the last 6 turns of conversation history for multi-turn coherence.
4. Pass everything to `gpt-4.1-mini` with `stream=True`.

### Streaming Response (`server/main.py`)

The `/api/chat/stream` endpoint:

1. Immediately emits a `citations` SSE event with all source citations before streaming begins.
2. Streams LLM tokens as individual `token` SSE events.
3. Emits a `[DONE]` sentinel to signal end-of-stream.

The browser's `ChatWidget.tsx` reads these events in order: renders citation badges first, then appends tokens character-by-character to the message bubble.

---

## Content Layer

All portfolio content lives as flat files in `data/`. There is no CMS.

| File | Format | Used by |
|------|--------|---------|
| `data/resume.txt` | Plain text | Ingestion pipeline → pgvector |
| `data/about.md` | Markdown | Ingestion pipeline → pgvector |
| `data/projects/*.md` | Markdown + YAML frontmatter | Projects pages (filesystem reads) + ingestion pipeline → pgvector |

Project `.md` files serve double duty: they are read directly by the Next.js server components to render the projects pages, and they are also ingested into pgvector so the AI can answer questions about them.

---

## Infrastructure & Deployment

### Docker / docker-compose

`docker-compose.yml` defines a single `postgres` service using the `pgvector/pgvector:pg16` image. This is the local development database. The FastAPI server runs outside Docker locally (or inside Docker in production).

The `Dockerfile` builds only the FastAPI server — not Next.js. It:

1. Copies `server/` and `data/` into the image.
2. Installs Python dependencies with `pip`.
3. Runs `start.sh` which executes the ingestion script then starts `uvicorn`.

### Railway

The FastAPI backend is configured for deployment on Railway via `server/railway.toml` using the Nixpacks builder. Railway automatically injects a `DATABASE_URL` environment variable when a PostgreSQL plugin is attached.

### Vercel

The Next.js frontend is deployed on Vercel. The `FASTAPI_URL` environment variable is set to the deployed Railway URL so the Next.js proxy route can reach the backend.

### Environment Variables

All secrets and configuration are managed through environment variables. The `.env.example` file documents every required and optional variable:

```
OPENAI_API_KEY          # Required
OPENAI_BASE_URL         # Optional override (Azure, Ollama, Together AI, etc.)
OPENAI_MODEL            # Default: gpt-4.1-mini
EMBEDDING_MODEL         # Default: text-embedding-3-small
DATABASE_URL            # PostgreSQL connection string
FASTAPI_URL             # Used by Next.js proxy (default: http://localhost:8000)
CHUNK_SIZE              # RAG chunk size in chars (default: 800)
CHUNK_OVERLAP           # RAG chunk overlap in chars (default: 120)
TOP_K                   # Number of chunks to retrieve (default: 5)
```

---

## Summary Table

| Layer | Technology | Version | Role |
|-------|-----------|---------|------|
| Frontend framework | Next.js | 14 | App Router, SSR, static generation, API proxy route |
| UI library | React | 18 | Component rendering, client interactivity |
| Language (frontend) | TypeScript | 5 | Type safety across all frontend code |
| Styling | Tailwind CSS | 3 | Utility-first CSS, dark theme, responsive layout |
| Typography | @tailwindcss/typography | 0.5 | Markdown prose rendering on project pages |
| Icons | lucide-react | 0.400 | UI icons throughout the app |
| Frontmatter parsing | gray-matter | 4 | Parse YAML frontmatter from project `.md` files |
| Markdown rendering | marked | 12 | Convert markdown body to HTML |
| Backend framework | FastAPI | 0.111 | REST API, SSE streaming, RAG orchestration |
| ASGI server | Uvicorn | 0.30 | Serve FastAPI in production |
| Language (backend) | Python | 3.11+ | Backend logic, RAG pipeline, ingestion script |
| Config/validation | Pydantic v2 | 2.7 | Request/response models, env var validation |
| LLM + embeddings | OpenAI API | — | `gpt-4.1-mini` (chat), `text-embedding-3-small` (embeddings) |
| Database | PostgreSQL | 16 | Persistent storage for vector chunks |
| Vector search | pgvector | 0.2 | 1536-dim cosine similarity search with IVFFlat index |
| PostgreSQL driver | psycopg2-binary | 2.9 | Raw SQL queries against pgvector |
| Containerisation | Docker + Compose | — | Local Postgres, production FastAPI image |
| Backend deployment | Railway | — | FastAPI + managed PostgreSQL |
| Frontend deployment | Vercel | — | Next.js hosting, edge network |
