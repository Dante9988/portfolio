---
title: "💬 Portfolio AI – Personal Portfolio with RAG Chatbot"
slug: "portfolio-ai"
tags: ["AI", "RAG", "Next.js", "FastAPI", "pgvector", "TypeScript", "LangChain"]
stack: ["Next.js 14", "TypeScript", "TailwindCSS", "FastAPI", "pgvector", "PostgreSQL", "OpenAI", "Python"]
summary: "💬 This portfolio website featuring Anvar AI — a RAG-powered chatbot that answers recruiter questions about my background, skills, and projects. Built with Next.js, FastAPI, and pgvector."
github: "https://github.com/Dante9988/portfolio"
demo: ""
role: "Personal Project"
period: "2024"
---

# Portfolio AI – Personal Portfolio with RAG Chatbot

## 🔭 Overview

My personal portfolio site features an embedded AI chatbot ("Anvar AI") that answers recruiter questions
about my background, skills, and projects. The chatbot uses retrieval-augmented generation over my resume
and curated project summaries — grounded answers only, no hallucinations.

## 🛠️ Architecture

### 🎨 Frontend (Next.js 14)
- 📱 App Router with TypeScript and TailwindCSS
- 📄 Pages: Home, Projects, Experience, Contact, Resume
- 💬 Floating chat widget on every page with streaming responses
- 📚 Citations displayed under each AI response

### ⚙️ Backend (FastAPI + OpenAI)
- 🔌 FastAPI server with streaming SSE chat endpoint
- 🔍 Custom RAG pipeline: chunking, embedding, cosine similarity retrieval
- 🗄️ pgvector (PostgreSQL) as the vector store
- 🤖 OpenAI-compatible API for embeddings and chat completion

### 📚 RAG Pipeline
- 📄 Documents: resume.txt, project .md files, about.md
- ✂️ Chunking: 800 characters with 120 character overlap
- 🧠 Embeddings: text-embedding-3-small
- 🔍 Retrieval: cosine similarity, top-5 chunks
- 🤖 Generation: GPT-4.1-mini with strict anti-hallucination system prompt

## ⭐ Key Features
- 🛡️ Anti-hallucination guardrails: model only uses retrieved context
- 📚 Citations in every response with source metadata
- ⌨️ Streaming typewriter effect for AI responses
- 💡 Quick question suggestions for recruiters
- 🐳 One-command setup with docker-compose
