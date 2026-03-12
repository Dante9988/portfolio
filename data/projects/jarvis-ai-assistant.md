---
title: "Jarvis AI Assistant – Cross-Device AI Orchestrator"
slug: "jarvis-ai-assistant"
tags: ["AI", "LLM", "FastAPI", "React", "TypeScript", "Python", "Agents", "Cross-Platform"]
stack: ["Python", "FastAPI", "TypeScript", "React", "Next.js", "OpenAI API", "WebSocket", "Docker"]
summary: "Cross-device AI assistant orchestrator connecting phone, laptop, desktop, and browser through a FastAPI backend, agent protocol, and LLM-powered orchestration layer. Includes a React/Next.js web and desktop frontend."
github: "https://github.com/Dante9988/jarvis-ai-assistant"
demo: ""
role: "AI Systems Engineer"
period: "2026"
---

# Jarvis AI Assistant – Cross-Device AI Orchestrator

## Overview

Jarvis is a cross-device AI assistant orchestrator designed to connect multiple devices — phone, laptop, desktop, browser, and future smart devices — through a unified FastAPI backend with an LLM-powered orchestration layer. Unlike tools that require MCP to interact with devices, Jarvis operates independently through its own agent protocol.

## Architecture

```
Jarvis Backend (FastAPI / Python)
├── Agent Protocol      → Device registration, task routing
├── LLM Orchestration   → OpenAI API for intent parsing & reasoning
├── Device Manager      → Cross-device state sync
└── WebSocket Layer     → Real-time device communication
         │
         ▼
Frontend (React / Next.js / TypeScript)
├── Web App             → Browser-based control interface
├── Desktop App         → Electron-based desktop client
└── Mobile Support      → iOS and Android device integration
```

## What I Built

### Backend (Python / FastAPI)
- LLM-powered orchestration layer using OpenAI API for natural language task parsing and multi-step reasoning
- Agent protocol enabling devices to register, receive tasks, and report results
- WebSocket-based real-time communication between backend and connected devices
- Task routing logic that determines which device should handle each request

### Frontend (TypeScript / React / Next.js)
- Web and desktop interface for managing connected devices and issuing commands
- Real-time device status dashboard showing connected devices and active tasks
- Natural language input for interacting with the AI orchestration layer

## Key Highlights
- No MCP dependency — custom agent protocol for device interaction
- Multi-device orchestration through a single AI backend
- Real-time WebSocket communication for low-latency device control
- Extensible architecture designed for future smart device integration

## Repositories
- **Backend**: [jarvis-ai-assistant](https://github.com/Dante9988/jarvis-ai-assistant)
- **Frontend**: [jarvis-ai-assistant-front-end](https://github.com/Dante9988/jarvis-ai-assistant-front-end)
