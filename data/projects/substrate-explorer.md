---
title: "🔍 Substrate Blockchain Explorer"
slug: "substrate-explorer"
tags: ["Blockchain", "Substrate", "NestJS", "Polkadot.js", "WebSocket", "React", "PostgreSQL"]
stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Polkadot.js API", "Socket.io", "React", "Tailwind CSS", "Docker", "Railway", "Vercel"]
summary: "🔍 Full-stack blockchain explorer for a Substrate network — built from scratch, not a fork. NestJS + Prisma backend with real-time Socket.io block streaming, PostgreSQL, TTL caching, Swagger docs, and React frontend on Vercel."
github: "https://github.com/Dante9988/Substrate-explorer"
demo: ""
role: "Full-Stack Engineer"
period: "Gluwa / 2022–2023"
---

# Substrate Blockchain Explorer

## 🔭 Overview

A full-stack blockchain explorer built from scratch for a Substrate-based network in the Polkadot ecosystem.
Not a fork of an existing explorer — a purpose-built NestJS + Prisma backend with real-time block streaming,
a PostgreSQL persistence layer, a caching system with TTL eviction, and a React frontend.

## 🛠️ What I Built

### ⚙️ Backend (NestJS + Polkadot.js)
- **📡 Real-time block streaming**: WebSocket subscription to Substrate node via Polkadot.js API, streaming
  new blocks and events via Socket.io to connected frontend clients
- **💾 PostgreSQL persistence**: Prisma ORM schema for blocks, extrinsics, events, and account data
- **⚡ Caching layer**: Redis-backed caching with TTL eviction for frequently queried endpoints
  (latest blocks, account balances, transaction counts)
- **📚 Swagger/OpenAPI documentation**: Full API documentation for all explorer endpoints
- **🌐 Multi-network support**: testnet, devnet, and mainnet configuration via environment variables

### 🎨 Frontend (React + Tailwind CSS)
- 📡 Real-time block list with WebSocket-powered live updates
- 📋 Extrinsic detail pages with decoded call data
- 👤 Account pages with balance, nonce, and transaction history
- 📜 Event log viewer with filtering by pallet and event type
- 🚀 Deployed on Vercel with Railway backend hosting

### 🏗️ Architecture Patterns
- ⚡ Event-driven: on-chain events trigger persistence and cache invalidation
- 🧩 Modular NestJS service structure (block processor, event indexer, WebSocket gateway, REST API)
- 🐳 Docker Compose for local development with PostgreSQL and Redis

## ⭐ Key Highlights
- 🏗️ Built from first principles — no existing explorer fork
- 📡 Real-time WebSocket block streaming to multiple simultaneous clients
- ⚡ Production-grade caching design with explicit TTL management
- 📚 Full Swagger documentation for all API surfaces
- 🚀 Deployed and running against a live Substrate network
