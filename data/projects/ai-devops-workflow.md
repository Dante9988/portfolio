---
title: "AI DevOps Workflow Bot"
slug: "ai-devops-workflow"
tags: ["AI", "RAG", "LangChain", "OpenAI", "Anthropic", "Ollama", "NestJS", "Kubernetes", "Vector DB", "LLM", "Automation"]
stack: ["NestJS", "TypeScript", "LangChain", "OpenAI API", "Anthropic API", "Ollama (Meta Llama)", "pgvector", "PostgreSQL", "Slack Web API", "Azure DevOps REST API", "Kubernetes API", "Azure DefaultAzureCredential"]
summary: "AI-powered Slack bot for engineering workflow automation — built on a RAG pipeline with vector database retrieval, LangChain orchestration, and multi-provider LLM support (OpenAI, Anthropic, locally fine-tuned Ollama models). Manages CI/CD pipelines, Kubernetes pod lifecycle, and service health through structured natural language commands."
github: ""
demo: ""
role: "AI / Backend Engineer"
period: "Gluwa / 2023–2024"
---

# AI DevOps Workflow Bot

## Overview

An AI-powered Slack bot that lets engineers manage CI/CD pipelines and Kubernetes infrastructure using natural language. Instead of navigating Azure DevOps manually or running kubectl commands, engineers type commands in Slack like "deploy the auth service to staging", "restart the payment pods", or "check if production is healthy" — and the bot understands, confirms, and executes.

The system uses a RAG (Retrieval-Augmented Generation) pipeline backed by a vector database to ground all AI responses in actual infrastructure documentation, runbooks, and deployment history — significantly reducing hallucinations compared to raw LLM prompting.

## The Problem

Azure DevOps pipeline management and Kubernetes operations require navigating multiple UIs, running CLI commands, and cross-referencing documentation. For a team running frequent deployments across multiple environments, this friction adds up. Engineers also needed a system that could answer questions about infrastructure state, deployment history, and runbook procedures without hallucinating incorrect information.

## What I Built

### RAG Pipeline & Vector Database
- Built a retrieval-augmented generation pipeline to ground all AI responses in real infrastructure data
- **Vector database** (pgvector/PostgreSQL) storing embeddings of deployment runbooks, infrastructure documentation, pipeline configurations, and historical deployment logs
- Document ingestion pipeline: chunking, embedding via OpenAI text-embedding models, and upsert into pgvector
- Cosine similarity retrieval at query time ensures the LLM only works with relevant, factual context
- Hallucinations were significantly reduced through RAG, structured context retrieval, and constrained system prompts

### Multi-Provider LLM Integration
- **OpenAI API**: GPT-4o-mini for high-accuracy intent classification and complex reasoning
- **Anthropic API**: Claude integration as an alternative provider for response generation
- **Ollama (Meta Llama)**: locally hosted open-source models, fine-tuned on internal engineering data for domain-specific accuracy
- LangChain orchestration layer managing provider selection, prompt templating, and response parsing across all three providers
- Configurable model routing: simple commands use the local Ollama model (zero cost, low latency), complex operations escalate to OpenAI or Anthropic

### LangChain Orchestration
- LangChain chains for multi-step reasoning: intent classification → context retrieval → action planning → response generation
- Structured output parsing using LangChain output parsers to ensure deterministic action execution from LLM responses
- Conversation memory with LangChain's buffer window for multi-turn context within Slack threads

### Hybrid NLU Architecture
- **Regex-first path**: common, high-confidence commands (deploy X to Y, check health, list pipelines) are handled by deterministic regex patterns with zero latency and zero API cost
- **LLM fallback**: ambiguous or complex commands fall through to the RAG-augmented LLM pipeline for intent classification and parameter extraction
- Confidence thresholds: low-confidence classifications trigger a clarifying question rather than executing

### Kubernetes Operations
- **Pod lifecycle management**: restart pods, delete pods, and create new pods through structured prompts and validated commands
- Systematic prompt engineering ensures Kubernetes operations are always confirmed before execution
- Structured response format: every K8s operation returns pod status, namespace, and rollout state in a consistent schema
- Namespace-aware operations with environment isolation (dev/staging/prod)

### Azure DevOps Integration
- Azure DevOps REST API for pipeline triggering, status polling, and run cancellation
- Azure DefaultAzureCredential for enterprise IAM (supports managed identity, service principal, CLI auth)
- Azure App Configuration for dynamic per-environment service registry

### Conversation State & Safety
- Thread-based context: each Slack thread maintains its own conversation state
- 1-hour TTL on thread context — stale contexts are discarded to prevent confused multi-turn interactions
- Confirmation flow: dangerous operations (production deploys, pod deletions) require an explicit "confirm" reply before execution
- Rich Block Kit responses with pipeline status, pod health, run URLs, and action buttons

## Key Highlights
- RAG pipeline with vector database retrieval significantly reduced LLM hallucinations for infrastructure queries
- Multi-provider LLM architecture: OpenAI, Anthropic, and locally fine-tuned Ollama models with intelligent routing
- LangChain orchestration for multi-step reasoning, structured output parsing, and provider abstraction
- Kubernetes pod lifecycle management (restart, delete, create) through systematic prompts with safety confirmations
- Hybrid regex + LLM architecture: common cases are fast and free, complex cases use RAG-augmented reasoning
- Fine-tuned Meta Llama models on internal engineering data for domain-specific accuracy at zero inference cost
