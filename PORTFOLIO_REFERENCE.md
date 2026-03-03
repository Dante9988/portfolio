# Anvar Baltakhojayev – Portfolio Reference Document

## Identity & Positioning

**Name:** Anvar Baltakhojayev  
**GitHub:** https://github.com/Dante9988  
**LinkedIn:** https://linkedin.com/in/anvarbaltakhojayev  
**Location:** Remote (Worldwide)

### Recruiter-Facing Positioning

**Primary title:** AI Systems Engineer  
**Secondary titles:** AI Applied Engineer · Blockchain Engineer · Distributed Systems Engineer

**Headline:**
> AI Systems Engineer building intelligent platforms at the intersection of LLMs, RAG, and blockchain infrastructure — Solana, Ethereum, Substrate.

**Elevator pitch (30 seconds):**
> I build AI-powered analytics systems that process real-time blockchain data, social signals, and market intelligence using RAG pipelines, LangChain, and LLM integration. Currently leading AI engineering at OnlyPump — a decision-support platform on the Pump.fun/Solana ecosystem. Before that, 4+ years at Gluwa building distributed validation infrastructure for multi-chain blockchain systems (Ethereum, BNB, Bitcoin, Substrate), and prior to that at Hxro Labs on real-time trading infrastructure. My background is unusual: I started in test automation and distributed systems, which means I build AI systems that are observable, tested, and production-ready — not just demos.

---

## How the Portfolio Works

### Architecture Overview

```
Browser (localhost:3000)
    │
    ├── Next.js 14 (App Router + TypeScript + TailwindCSS)
    │       Pages: /, /projects, /projects/[slug], /experience, /contact, /resume
    │       Components: Navbar, ChatWidget (floating AI drawer)
    │
    ├── /app/api/chat/route.ts  ← Next.js server-side proxy
    │       Forwards requests to FastAPI, avoids CORS
    │
    └── FastAPI (localhost:8000)  ← Python backend
            │
            ├── POST /api/chat        (non-streaming)
            ├── POST /api/chat/stream (SSE streaming)
            │
            ├── RAG Pipeline:
            │   1. Embed user question (OpenAI text-embedding-3-small)
            │   2. Cosine similarity search → top-5 chunks from pgvector
            │   3. Build prompt with retrieved context + anti-hallucination rules
            │   4. Stream GPT-4.1-mini response back via SSE
            │
            └── PostgreSQL + pgvector (Docker)
                    Table: portfolio_chunks
                    Columns: chunk_id, source, title, doc_type, content, embedding(1536)
```

### RAG Data Flow

```
/data/*.txt + /data/*.md + /data/projects/*.md
        │
        ▼  python -m server.scripts.ingest
Chunk (800 chars, 120 overlap)
        │
        ▼  OpenAI text-embedding-3-small
Embed each chunk → 1536-dim vector
        │
        ▼  ON CONFLICT DO UPDATE (idempotent)
pgvector table: portfolio_chunks
        │
        ▼  At chat time: embed user question → cosine search → top-5 chunks
Build prompt → GPT-4.1-mini → stream SSE tokens to browser
```

### Chat Widget Features
- Floating "Ask Anvar AI" button (bottom-right, every page)
- Drawer with streaming typewriter responses
- Citations shown under every AI answer (source file + doc type)
- Copy answer button
- Quick question buttons:
  - "What does Anvar do at OnlyPump?"
  - "Describe the AI analytics platform you built"
  - "What's your experience with RAG and LangChain?"
  - "Tell me about your Gluwa work"
  - "What's your strongest tech stack?"
- Anti-hallucination: model only answers from retrieved portfolio data

---

## Experience

### OnlyPump · AI Systems Engineer
**Jun 2021 – Present · Remote**

Built and led development of an AI-powered analytics and decision-support platform on the Pump.fun/Solana ecosystem. Transforms meme token launches into data-driven investment intelligence.

**Key work:**
- Multi-source intelligence system: X (Twitter) sentiment analysis, Solana on-chain wallet/transaction behavior, real-time price/volume/liquidity monitoring
- RAG implementation for contextual market insights grounded in historical data
- Vector database pipelines for embeddings and similarity search across social, market, and on-chain data
- Intelligent scoring models: sentiment strength + liquidity/volume + whale activity + narrative momentum
- AI portfolio intelligence: risk assessment, position sizing, exposure analysis, market condition awareness
- Automated real-time data pipelines ingesting from social APIs, Solana nodes, market feeds
- Solana integration: Pump.fun SDK, PumpSwap SDK, Jito MEV bundles
- System architecture designed for future AI agents and autonomous decision workflows

**Stack:** Python, Node.js, NestJS, LangChain, OpenAI, RAG, Vector Databases, Solana Web3.js, Pump.fun SDK, PumpSwap SDK, Jito

---

### Gluwa · Software Engineer (AI & Distributed Systems)
**Nov 2021 – Feb 2026 · Remote**

Designed and built distributed validation infrastructure for multi-chain blockchain systems (Ethereum, BNB Chain, Bitcoin, Substrate) at one of the leading blockchain credit protocol companies.

**Key work:**
- Distributed validation infra ensuring transactional consistency across 4 blockchain networks
- Backend automation in C# (.NET 6) and Node.js for smart contract + API + on-chain pipeline validation
- CI/CD-integrated test orchestration for DApps and protocol upgrades
- SDK-level BDD validation frameworks (OOP principles, reusable across chains)
- Cross-chain off-chain bridge worker: NestJS + ethers.js + viem, exponential backoff proof API, per-wallet nonce management
- Substrate pallet test framework: Polkadot.js + Mocha + Allure, staking lifecycle + precompile coverage
- Playwright E2E automation for Creditcoin staking and CC3 dashboards
- Real-time QA mini-indexer: on-chain/off-chain cross-validation for production health monitoring
- Docker-based deployments across testnet, devnet, mainnet environments

**Stack:** TypeScript, C# (.NET 6), Node.js, NestJS, Polkadot.js, ethers.js, viem, Playwright, Foundry, Hardhat, Mocha, Allure, Docker, Azure

---

### Hxro Labs · Software Engineer (Backend & Distributed Systems)
**Nov 2020 – Oct 2021 · Remote**

Contributed to backend infrastructure for a real-time binary options trading platform.

**Key work:**
- REST API validation services in Python for transactional correctness across trading operations
- WebSocket client services ingesting nested JSON event streams → structured API requests
- Python Behave (BDD/Cucumber-style) test pipelines integrated into GitLab CI/CD
- API consistency validation across async WebSocket and REST flows

**Stack:** Python, Behave (BDD), WebSocket, REST APIs, GitLab CI/CD

---

## Projects (11 total in portfolio)

### 1. OnlyPump – AI Crypto Analytics & Decision-Support Platform
**Slug:** `/projects/onlypump` · **Role:** AI Systems Engineer · **Period:** Jun 2021 – Present  
**Tags:** AI, RAG, LangChain, Solana, Pump.fun, LLM, Vector DB, Python, Sentiment Analysis

AI-powered platform on the Pump.fun ecosystem. Multi-source intelligence (X sentiment, Solana on-chain wallet analysis, real-time market data) fed through LangChain RAG pipelines, vector DB similarity search, and LLM-powered composite scoring models. Includes AI portfolio intelligence features (risk assessment, position sizing, exposure analysis) and automated data ingestion pipelines. Designed for future autonomous AI agent workflows.

---

### 2. Gluwa – Distributed Validation Infrastructure
**Slug:** `/projects/gluwa-distributed-systems` · **Role:** Software Engineer (AI & Distributed Systems) · **Period:** Nov 2021 – Feb 2026  
**Tags:** Blockchain, Distributed Systems, QA Automation, Cross-Chain, NestJS, C#, CI/CD

Multi-chain distributed validation across Ethereum, BNB Chain, Bitcoin, Substrate. C#/.NET + Node.js backend automation. Cross-chain bridge worker with exponential backoff proof API orchestration. Substrate pallet test framework (Polkadot.js + Mocha + Allure). Playwright E2E for two blockchain dashboards. Real-time on-chain/off-chain cross-validation indexer.

---

### 3. CCNext Cross-Chain Bridge Worker
**Slug:** `/projects/ccnext-bridge-worker` · **Role:** Blockchain/Backend Engineer  
**Tags:** Cross-Chain, NestJS, ethers.js, viem, Bridge, Off-Chain Worker

Production off-chain worker: Ethereum Sepolia ERC-20 event monitoring → wait for N confirmations → call Proof API (exponential backoff, 20 retries, 15-min timeout) → submit verified transaction to CCNext L2. Per-wallet nonce management for 4 concurrent wallets. Companion traffic simulator. Docker + Azure App Configuration for multi-environment deployment.

---

### 4. AI DevOps Workflow Bot
**Slug:** `/projects/ai-devops-workflow` · **Role:** AI/Backend Engineer  
**Tags:** AI, OpenAI, NestJS, Slack, Azure DevOps, NLU

Slack bot: hybrid regex + OpenAI gpt-4o-mini NLU interprets natural language CI/CD commands → executes Azure DevOps pipelines. Stateful thread context (1-hour TTL). Confirmation flows for dangerous operations. Azure DefaultAzureCredential for enterprise IAM. Rich Slack Block Kit responses.

---

### 5. Substrate Blockchain Explorer
**Slug:** `/projects/substrate-explorer` · **Role:** Full-Stack Engineer  
**Tags:** Substrate, NestJS, Polkadot.js, WebSocket, React, PostgreSQL

Full-stack blockchain explorer built from scratch (not a fork). NestJS + Prisma backend, real-time Socket.io block streaming, Redis caching with TTL eviction, Swagger docs, React frontend. Deployed on Railway + Vercel.

---

### 6. Polymarket Market-Making Bot
**Slug:** `/projects/polymarket-bot` · **Role:** Personal Project  
**Tags:** DeFi, Trading, TypeScript, Quantitative Finance, Prediction Markets

Market-making bot with fair-value model: BTC momentum (Binance WebSocket) + Polymarket order book imbalance → two-sided YES/NO quotes. Inventory skewing, spread/volatility kill-switches, max position limits. Round-based backtesting simulator with PnL tracking.

---

### 7. ERC-2612 Airdrop Distribution System
**Slug:** `/projects/airdrop-claim` · **Role:** Blockchain Engineer  
**Tags:** Solidity, EIP-712, Foundry, Hardhat, OpenZeppelin

Production airdrop smart contract: EIP-712 typed signature claiming, campaign lifecycle management, role-based access control, bonus reward tracking, abuse prevention. Foundry test suite covering cryptographic flows. TypeScript scripts load rewards from CSV and execute distributions.

---

### 8. Substrate Pallet Test Framework (CC3 Protocol)
**Slug:** `/projects/cc3-pallet-tests` · **Role:** QA/Blockchain Engineer  
**Tags:** Substrate, Polkadot.js, QA Automation, Mocha, Allure

Built-from-scratch test framework for Substrate blockchain pallet validation. Covers full staking lifecycle, Grandpa migration, precompile testing (BN128 curves, EVM signature verifier), dynamic extrinsic calling. Multi-environment (testnet/devnet/dryrun). Allure structured test reporting.

---

### 9. NFT ERC-721 Drop with Performance Testing
**Slug:** `/projects/nft-erc721` · **Role:** Blockchain Engineer  
**Tags:** Solidity, NFT, ERC-721, Hardhat, Artillery

ERC-721 NFT drop: time-gated minting phases, merkle tree whitelist, ERC-2981 royalty standard. Full Hardhat test suite. Artillery-based load tests validate minting API throughput at 10/50/100/500 rps. TypeScript generative metadata pipeline + IPFS upload via Pinata.

---

### 10. DEX Tools – Uniswap V3 & GluwaDEX Deployment
**Slug:** `/projects/dex-tools` · **Role:** Blockchain Engineer  
**Tags:** DeFi, Uniswap V3, Solidity, Hardhat, DEX

Deployment toolkit and CLI for the full Uniswap V3 protocol stack (factory, pool, router, NFT position manager) and GluwaDEX (SwapPool V1/V2, SwapRouter). Docker-based deterministic local test environment. End-to-end integration tests covering pool creation → liquidity provision → swap → fee collection.

---

### 11. Portfolio AI – Personal Portfolio with RAG Chatbot
**Slug:** `/projects/portfolio-ai` · **Role:** Personal Project  
**Tags:** AI, RAG, Next.js, FastAPI, pgvector, TypeScript

This site. Next.js 14 + FastAPI + pgvector + OpenAI. Anti-hallucination RAG chatbot answers recruiter questions from real resume/project data with citations. Streaming SSE responses, docker-compose one-command setup.

---

## Tech Stack Summary

| Category | Technologies |
|---|---|
| **AI / LLM** | LangChain, OpenAI API, RAG Pipelines, Vector Databases, pgvector, Embeddings, AI Agents, Sentiment Analysis |
| **Languages** | Python (expert), TypeScript/JavaScript (expert), C# .NET (proficient), Solidity (advanced), Rust (intermediate) |
| **Solana** | Solana Web3.js, Pump.fun SDK, PumpSwap SDK, Jito MEV |
| **EVM** | ethers.js, viem, Hardhat, Foundry (Forge), OpenZeppelin, EIP-712, Uniswap V3 |
| **Substrate** | Polkadot.js API, pallet testing, Substrate Explorer |
| **Backend** | NestJS, Node.js, Python FastAPI/Django, WebSocket, REST APIs, Socket.io |
| **Databases** | PostgreSQL, Prisma ORM, TypeORM, Redis, Supabase, SQLite |
| **Infrastructure** | Docker, Azure, Railway, Vercel, GitHub Actions, Azure Pipelines, GitLab CI |
| **Testing** | Playwright, Mocha + Allure, Foundry, Behave BDD, Artillery, Jest, Hardhat Tests |

---

## Local Setup Commands

```bash
# 1. Copy and fill environment variables
cp .env.example .env
# → Set OPENAI_API_KEY in .env

# 2. Start PostgreSQL + pgvector (requires Docker Desktop with WSL integration enabled)
docker compose up -d

# 3. Python environment
python3 -m venv venv
source venv/bin/activate
pip install -r server/requirements.txt

# 4. Ingest resume + project data into pgvector
python -m server.scripts.ingest

# 5. Start FastAPI backend (keep running)
uvicorn server.main:app --reload --port 8000

# 6. In a new terminal: start Next.js
npm install
npm run dev

# → Open http://localhost:3000
```

### Re-run ingestion after updating data files
```bash
source venv/bin/activate
python -m server.scripts.ingest
```

The ingestion script is **idempotent** — safe to run any time. Uses `ON CONFLICT DO UPDATE`.

---

## File Structure

```
/root/Projects/portfolio/
├── app/
│   ├── layout.tsx                  # Root layout: Navbar + ChatWidget on every page
│   ├── page.tsx                    # Home: hero (profile photo), stats, skills, projects
│   ├── projects/
│   │   ├── page.tsx                # Projects list (reads from /data/projects/*.md)
│   │   └── [slug]/page.tsx         # Project detail (markdown rendered)
│   ├── experience/page.tsx         # Timeline: OnlyPump, Gluwa, Hxro Labs
│   ├── contact/page.tsx            # Contact form + social links
│   ├── resume/page.tsx             # PDF download + inline preview
│   └── api/chat/route.ts           # Server-side proxy → FastAPI (avoids CORS)
│
├── components/
│   ├── Navbar.tsx                  # Sticky nav with active link highlighting
│   └── ChatWidget.tsx              # Floating AI chat drawer (SSE streaming)
│
├── data/                           # RAG source documents
│   ├── resume.txt                  # Full resume text (primary RAG source)
│   ├── about.md                    # About me / engineering philosophy
│   └── projects/                   # 11 project markdown files
│       ├── onlypumpme.md
│       ├── gluwa-distributed-systems (via creditcoin-sdet.md)
│       ├── ccnext-bridge-worker.md
│       ├── ai-devops-workflow.md
│       ├── substrate-explorer.md
│       ├── polymarket-bot.md
│       ├── airdrop-claim.md
│       ├── cc3-pallet-tests.md
│       ├── nft-erc721.md
│       ├── dex-tools.md
│       └── portfolio-ai.md
│
├── public/
│   └── me.png                      # Profile photo (used in home hero)
│
├── server/                         # FastAPI Python backend
│   ├── main.py                     # FastAPI app: /api/chat + /api/chat/stream
│   ├── config.py                   # Settings from .env
│   ├── db.py                       # pgvector schema init (idempotent)
│   ├── rag/
│   │   ├── retriever.py            # chunk_text, get_embeddings, retrieve_chunks
│   │   └── prompts.py              # System prompt + anti-hallucination rules
│   └── scripts/
│       └── ingest.py               # Ingestion pipeline script
│
├── docker-compose.yml              # PostgreSQL + pgvector (pgvector/pgvector:pg16)
├── .env.example                    # Environment variable template
└── README.md                       # Setup instructions
```

---

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `OPENAI_API_KEY` | Your OpenAI API key | *(required)* |
| `OPENAI_BASE_URL` | Custom LLM endpoint (Azure, Ollama, etc.) | `https://api.openai.com/v1` |
| `OPENAI_MODEL` | Chat completion model | `gpt-4.1-mini` |
| `EMBEDDING_MODEL` | Embedding model (must produce 1536-dim) | `text-embedding-3-small` |
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:postgres@localhost:5432/portfolio` |
| `FASTAPI_URL` | FastAPI URL (used server-side by Next.js) | `http://localhost:8000` |
| `CHUNK_SIZE` | Ingestion chunk size in chars | `800` |
| `CHUNK_OVERLAP` | Chunk overlap in chars | `120` |
| `TOP_K` | Number of chunks retrieved per query | `5` |

---

## Recruiter FAQ (what the AI chatbot answers)

| Question | What it draws from |
|---|---|
| "What does Anvar do at OnlyPump?" | `onlypumpme.md` + `resume.txt` |
| "What's your RAG / LangChain experience?" | `resume.txt` + `about.md` + `onlypumpme.md` |
| "Tell me about your Gluwa work" | `creditcoin-sdet.md` + `ccnext-bridge-worker.md` + `resume.txt` |
| "What blockchain networks have you worked on?" | `resume.txt` + `about.md` |
| "Describe a hard technical problem you solved" | `ccnext-bridge-worker.md` + `cc3-pallet-tests.md` |
| "What's your strongest tech stack?" | `resume.txt` + `about.md` |
| "Do you have AI/ML experience?" | `onlypumpme.md` + `ai-devops-workflow.md` + `resume.txt` |
| "Tell me about your testing experience" | `cc3-pallet-tests.md` + `creditcoin-sdet.md` + `resume.txt` |

---

*Last updated: March 2026*
