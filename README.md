# Anvar Baltakhojayev – Portfolio + Anvar AI

A personal portfolio website with an embedded AI chatbot ("**Anvar AI**") that answers recruiter questions using Retrieval-Augmented Generation (RAG) over resume data and curated project summaries.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router) + TypeScript + TailwindCSS |
| AI Backend | Python FastAPI + LlamaIndex/OpenAI |
| Vector DB | PostgreSQL + pgvector |
| Embeddings | text-embedding-3-small (OpenAI) |
| LLM | GPT-4.1-mini (configurable) |
| Infrastructure | Docker + docker-compose |

## Features

- **5 pages**: Home, Projects, Project Detail, Experience, Contact, Resume
- **Floating AI chat widget** on every page (bottom-right)
- **Streaming responses** with typewriter effect (SSE)
- **RAG pipeline**: ingests resume + project markdown files → pgvector → retrieval → LLM
- **Anti-hallucination guardrails**: model only answers from retrieved context
- **Citations** shown under every AI response
- **Quick question buttons** for recruiters
- **Copy answer** button on every AI message
- One-command Docker setup

---

## Quick Start

### Prerequisites

- Node.js 18+
- Python 3.11+
- Docker + Docker Compose
- An OpenAI API key

---

### 1. Clone & configure environment

```bash
git clone https://github.com/Dante9988/portfolio.git
cd portfolio

cp .env.example .env
# Edit .env and add your OPENAI_API_KEY
```

### 2. Start PostgreSQL + pgvector

```bash
docker compose up -d
```

Wait for the health check to pass:
```bash
docker compose ps   # postgres should show "healthy"
```

### 3. Set up Python virtual environment and install dependencies

```bash
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate

pip install -r server/requirements.txt
```

### 4. Run the ingestion pipeline

This reads all files in `/data/`, chunks them, embeds them with OpenAI, and upserts into pgvector:

```bash
python -m server.scripts.ingest
```

You should see output like:
```
=== Anvar Portfolio Ingestion Pipeline ===
Loading documents...
  Loaded resume.txt (2847 chars)
  Loaded about.md (1923 chars)
  Loaded onlypumpme.md (2341 chars)
  ...
Total chunks: 42
Generating embeddings...
  Embedding batch 1/3... done. Upserting...
=== Ingestion complete! 42 chunks upserted into pgvector. ===
```

### 5. Start the FastAPI server

```bash
uvicorn server.main:app --reload --port 8000
```

Or with the module path:
```bash
python -m uvicorn server.main:app --reload --port 8000
```

API docs available at: http://localhost:8000/docs

### 6. Install Node.js dependencies and start Next.js

In a new terminal:

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the portfolio is live with the AI chatbot!

---

## Project Structure

```
/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout (Navbar + ChatWidget)
│   ├── page.tsx                # Home page
│   ├── projects/
│   │   ├── page.tsx            # Projects list
│   │   └── [slug]/page.tsx     # Project detail
│   ├── experience/page.tsx     # Experience timeline
│   ├── contact/page.tsx        # Contact form
│   ├── resume/page.tsx         # Resume download + preview
│   └── api/chat/route.ts       # Next.js API proxy → FastAPI
│
├── components/
│   ├── Navbar.tsx              # Sticky navigation
│   └── ChatWidget.tsx          # Floating AI chat drawer
│
├── data/                       # Your content (edit these!)
│   ├── resume.txt              # Your resume in plain text
│   ├── about.md                # About me / highlights
│   └── projects/               # One .md file per project
│       ├── onlypumpme.md
│       ├── creditcoin-sdet.md
│       ├── legalbot.md
│       └── portfolio-ai.md
│
├── server/                     # FastAPI backend
│   ├── main.py                 # FastAPI app + chat endpoints
│   ├── config.py               # Settings (env vars)
│   ├── db.py                   # DB init + schema migration
│   ├── rag/
│   │   ├── retriever.py        # Chunking, embedding, retrieval
│   │   └── prompts.py          # System prompt + prompt builder
│   ├── scripts/
│   │   └── ingest.py           # Ingestion pipeline script
│   └── requirements.txt
│
├── styles/globals.css          # TailwindCSS + custom styles
├── docker-compose.yml          # PostgreSQL + pgvector
├── .env.example                # Environment variable template
└── README.md
```

---

## Customizing Your Portfolio

### Adding your real resume

1. Open `/data/resume.txt`
2. Replace the placeholder content with your actual resume text
3. Re-run ingestion: `python -m server.scripts.ingest`

### Adding a project

Create a new markdown file in `/data/projects/your-project.md`:

```markdown
---
title: "Your Project Name"
slug: "your-project"
tags: ["AI", "Python", "FastAPI"]
stack: ["Python", "FastAPI", "PostgreSQL"]
summary: "One sentence summary for the projects list."
github: "https://github.com/you/your-project"
demo: "https://your-project.com"
role: "Lead Engineer"
period: "2024"
---

# Your Project Name

## Overview
...detailed markdown content...
```

The project will automatically appear on the `/projects` page and be ingested by the RAG pipeline.

### Changing the LLM model

In `.env`:
```
OPENAI_MODEL=gpt-4o
# or for a local model via Ollama:
OPENAI_BASE_URL=http://localhost:11434/v1
OPENAI_MODEL=llama3
```

---

## API Reference

### POST `/api/chat` (non-streaming)

```json
{
  "message": "What is Anvar's experience with RAG?",
  "history": [
    {"role": "user", "content": "..."},
    {"role": "assistant", "content": "..."}
  ],
  "stream": false
}
```

Response:
```json
{
  "answer": "Anvar has built...",
  "citations": [
    {"chunk_id": "abc123", "source": "resume.txt", "title": "Resume", "doc_type": "resume"}
  ]
}
```

### POST `/api/chat/stream` (Server-Sent Events)

Same request body. Returns SSE stream:

```
data: {"type": "citations", "citations": [...]}

data: {"type": "token", "content": "Anvar "}
data: {"type": "token", "content": "has "}
...
data: [DONE]
```

---

## Anti-Hallucination Design

The AI assistant is constrained by these rules (enforced via system prompt):

1. **Only use retrieved context** — never invent employers, dates, titles, metrics, or technologies
2. **Acknowledge uncertainty** — if context is insufficient, say "I don't have that information"
3. **Evidence bullets** — include 1–3 cited bullet points when answering factual questions
4. **Always return citations** — every response includes source metadata
5. **Weak retrieval fallback** — if similarity scores are low, ask a clarifying question instead of guessing

---

## Re-running Ingestion

The ingestion script is **idempotent** — safe to re-run at any time:

```bash
python -m server.scripts.ingest
```

It uses `ON CONFLICT DO UPDATE` (upsert) so existing chunks are updated, not duplicated.

---

## Deployment

### FastAPI (Railway / Render / Fly.io)

1. Set all environment variables from `.env.example`
2. Set `DATABASE_URL` to your managed PostgreSQL URL with pgvector extension
3. Deploy with: `uvicorn server.main:app --host 0.0.0.0 --port $PORT`
4. Run ingestion once after deploy: `python -m server.scripts.ingest`

### Next.js (Vercel)

1. Set `FASTAPI_URL` to your deployed FastAPI URL
2. Deploy via `vercel --prod`

---

## License

MIT
