---
title: "🤖 AI DevOps Workflow Bot"
slug: "ai-devops-workflow"
tags: ["AI", "OpenAI", "NestJS", "Slack", "Azure DevOps", "NLU", "LLM", "Automation"]
stack: ["NestJS", "TypeScript", "OpenAI API (gpt-4o-mini)", "Slack Web API", "Azure DevOps REST API", "Azure DefaultAzureCredential", "Slack Block Kit"]
summary: "🤖 Slack bot that interprets natural language CI/CD commands using hybrid regex + OpenAI gpt-4o-mini NLU. Executes Azure DevOps pipelines, checks service health, and manages stateful confirmation flows with 1-hour thread context TTL."
github: ""
demo: ""
role: "AI / Backend Engineer"
period: "Gluwa / 2023–2024"
---

# AI DevOps Workflow Bot

## 🔭 Overview

An AI-powered Slack bot that lets engineers manage CI/CD pipelines using natural language. Instead of navigating
Azure DevOps manually, engineers type commands in Slack like "deploy the auth service to staging" or "check if
production is healthy" — and the bot understands, confirms, and executes.

## ❓ The Problem

Azure DevOps pipeline management requires navigating multiple UIs, finding the right pipeline, selecting
environments, and clicking through confirmation dialogs. For a team running frequent deployments across multiple
environments, this friction adds up. The goal was a conversational interface that reduces this to a Slack message.

## 🛠️ What I Built

### 🧠 Hybrid NLU Architecture
- **⚡ Regex-first**: common, high-confidence commands (deploy X to Y, check health, list pipelines) are handled
  by deterministic regex patterns with zero latency and zero API cost
- **🤖 OpenAI fallback**: ambiguous or complex commands fall through to gpt-4o-mini for intent classification
  and parameter extraction
- 🔀 This hybrid approach ensures fast, reliable handling of common cases while maintaining flexibility for
  novel phrasings

### 🎯 Intent & Entity Extraction
- 📋 Intent categories: `TRIGGER_PIPELINE`, `CHECK_HEALTH`, `LIST_PIPELINES`, `CANCEL_RUN`, `GET_STATUS`
- 🔍 Entity extraction: service name, environment (dev/staging/prod), pipeline ID, branch
- 📊 Confidence thresholds: low-confidence classifications trigger a clarifying question rather than executing

### 💬 Conversation State Management
- 🧵 Thread-based context: each Slack thread maintains its own conversation state
- ⏱️ 1-hour TTL on thread context — stale contexts are discarded to prevent confused multi-turn interactions
- ✅ Confirmation flow: dangerous operations (production deploys) require an explicit "confirm" reply before execution

### ☁️ Azure DevOps Integration
- 🔌 Azure DevOps REST API for pipeline triggering, status polling, and run cancellation
- 🔐 Azure DefaultAzureCredential for enterprise IAM (supports managed identity, service principal, CLI auth)
- ⚙️ Azure App Configuration for dynamic per-environment service registry

### 📱 Slack Output Formatting
- 🎨 Rich Block Kit responses with pipeline status, run URLs, environment tags, and action buttons
- ⚠️ Error responses with actionable next steps
- 📊 Health check summaries formatted as structured service status tables

## ⭐ Key Highlights
- ⚡ Hybrid regex + LLM architecture: common cases are fast and free, edge cases are handled by OpenAI
- 🛡️ Stateful confirmation flows prevent accidental production deployments
- 🧵 Thread-level context management with TTL for clean multi-turn interactions
- 🔐 Enterprise IAM via Azure DefaultAzureCredential
- 🎯 Practical AI engineering: LLM used for what it's good at (intent parsing), not as a product gimmick
