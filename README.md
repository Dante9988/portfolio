# Anvar Baltakhojayev – AI & Blockchain Portfolio

A full-stack developer portfolio with an embedded RAG-powered AI chatbot (**Anvar AI**) that answers recruiter questions grounded in real resume and project data. Built as a monorepo with a Next.js frontend and a Python FastAPI backend connected by a RAG pipeline backed by PostgreSQL + pgvector.

**Live**: [anvar.dev](https://anvar.dev)

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS |
| AI Backend | Python FastAPI, LangChain, OpenAI API |
| Vector DB | PostgreSQL 16 + pgvector (IVFFlat cosine similarity) |
| Embeddings | text-embedding-3-small (1536-dim) |
| LLM | GPT-4.1-mini (configurable — supports OpenAI, Anthropic, Ollama) |
| Infrastructure | Docker, Railway (backend), Vercel (frontend) |

## Features

- **11 curated projects** — AI systems, blockchain infrastructure, DeFi tooling, open source
- **Floating AI chat widget** on every page with streaming SSE responses
- **RAG pipeline**: resume + project markdown → chunking → embedding → pgvector → retrieval → LLM
- **Anti-hallucination guardrails**: model only answers from retrieved context with 8 enforced rules
- **Citations** under every AI response with source metadata
- **Tech stack grid** with devicon/simple-icons logos across 6 categories
- **Core Expertise** section with AI, Blockchain, Backend, and Reliability tags
- **Experience timeline** with 5 key companies + earlier career summary
- One-command Docker setup

## Projects Showcased

| Category | Projects |
|----------|----------|
| AI Systems | OnlyPump (investment intelligence), AI DevOps Bot (RAG + Kubernetes), CodePilot AI, OpenAudit AI, TruChain, Portfolio AI |
| Blockchain | CCNext Bridge Worker, ERC-2612 Airdrop, DEX Tools (Uniswap V3) |
| Quantitative | Polymarket Market-Making Bot |
| Full-Stack | Substrate Blockchain Explorer |

---

## Quick Start

### Prerequisites

- Node.js 18+
- Python 3.11+
- Docker + Docker Compose
- An OpenAI API key

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

```bash
python -m server.scripts.ingest
```

### 5. Start the FastAPI server

```bash
uvicorn server.main:app --reload --port 8000
```

API docs available at: http://localhost:8000/docs

### 6. Install Node.js dependencies and start Next.js

In a new terminal:

```bash
npm install
npm run dev
```

Open http://localhost:3000

---

## Project Structure

```
/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Home (hero, stats, tech stack, expertise, featured projects)
│   ├── projects/
│   │   ├── page.tsx            # Projects list (sorted: AI first)
│   │   └── [slug]/page.tsx     # Project detail (markdown rendered)
│   ├── experience/page.tsx     # Experience timeline
│   ├── contact/page.tsx        # Contact form
│   └── resume/page.tsx         # Resume download + preview
│
├── components/
│   ├── Navbar.tsx              # Sticky navigation
│   └── ChatWidget.tsx          # Floating AI chat drawer
│
├── data/                       # Content (edit these — drives both UI and RAG)
│   ├── resume.txt              # Resume in plain text
│   ├── about.md                # About / skills / experience breakdown (RAG knowledge base)
│   └── projects/               # One .md file per project
│       ├── onlypumpme.md
│       ├── ai-devops-workflow.md
│       ├── codepilot-ai.md
│       ├── openaudit-ai.md
│       ├── truchain-ai-content-checker.md
│       ├── portfolio-ai.md
│       ├── ccnext-bridge-worker.md
│       ├── airdrop-claim.md
│       ├── dex-tools.md
│       ├── polymarket-bot.md
│       └── substrate-explorer.md
│
├── public/icons/               # Local SVG icons (OpenAI, RAG, Vector DB)
│
├── server/                     # FastAPI backend
│   ├── main.py                 # FastAPI app + chat endpoints (SSE streaming)
│   ├── config.py               # Settings (env vars via pydantic-settings)
│   ├── db.py                   # DB init + schema migration
│   ├── rag/
│   │   ├── retriever.py        # Chunking, embedding, cosine retrieval
│   │   └── prompts.py          # System prompt + prompt builder
│   ├── scripts/
│   │   └── ingest.py           # Ingestion pipeline (idempotent upserts)
│   └── requirements.txt
│
├── styles/globals.css          # TailwindCSS + custom component classes
├── docker-compose.yml          # PostgreSQL + pgvector
├── Dockerfile                  # FastAPI production image
├── .env.example                # Environment variable template
├── TECH_STACK.md               # Detailed architecture documentation
└── README.md
```

---

## Content & RAG System

All portfolio content lives as flat files in `data/`. There is no CMS. These files serve double duty:

1. **UI rendering** — Next.js server components read project `.md` files directly to render the projects pages
2. **RAG ingestion** — The ingestion script chunks, embeds, and upserts all content into pgvector so the AI chatbot can answer questions about it

### Adding a project

Create a new `.md` file in `data/projects/`:

```markdown
---
title: "Your Project Name"
slug: "your-project"
tags: ["AI", "Python"]
stack: ["Python", "FastAPI"]
summary: "One sentence summary."
github: "https://github.com/you/repo"
role: "Lead Engineer"
period: "2024"
---

# Your Project Name

## Overview
...
```

The project automatically appears on `/projects` and gets ingested into the RAG pipeline.

### Re-running ingestion

The ingestion script is idempotent — safe to re-run at any time:

```bash
python -m server.scripts.ingest
```

### Changing the LLM

```bash
# .env
OPENAI_MODEL=gpt-4o

# Or use Ollama / any OpenAI-compatible provider:
OPENAI_BASE_URL=http://localhost:11434/v1
OPENAI_MODEL=llama3
```

---

## API Reference

| Method | Path | Description |
|--------|------|-------------|
| `GET` | `/health` | Liveness probe |
| `POST` | `/api/chat` | Non-streaming RAG response |
| `POST` | `/api/chat/stream` | Streaming RAG response via SSE |

---

## Deployment

**Backend** (Railway): Set `DATABASE_URL`, `OPENAI_API_KEY`, and deploy. The `start.sh` script runs ingestion then starts uvicorn.

**Frontend** (Vercel): Set `FASTAPI_URL` to the deployed backend URL and deploy via `vercel --prod`.

---

## License

MIT
