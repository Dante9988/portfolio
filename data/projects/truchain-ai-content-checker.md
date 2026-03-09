---
title: "TruChain – AI Content Authenticity Verification on Blockchain"
slug: "truchain-ai-content-checker"
tags: ["AI", "Blockchain", "NestJS", "OpenAI", "Solidity", "Smart Contracts", "GPT-4o", "ERC-20"]
stack: ["NestJS", "TypeScript", "OpenAI GPT-4o", "Solidity", "Hardhat", "ethers.js", "PostgreSQL", "Docker", "Jest"]
summary: "Decentralized platform for verifying AI-generated content authenticity using GPT-4o inference and immutable on-chain proof storage. NestJS backend orchestrates AI analysis, blockchain verification, and an ERC-20 token payment system."
github: "https://github.com/Dante9988/AI-Content-Checker-Blockchain-Proof"
demo: ""
role: "Full-Stack AI / Blockchain Engineer"
period: "2025"
---

# TruChain – AI Content Authenticity Verification on Blockchain

## Overview

TruChain is a decentralized platform for verifying the authenticity of AI-generated content. It combines GPT-4o-powered analysis with on-chain proof storage — if GPT determines content is AI-generated, that verification result is permanently recorded on the blockchain via a smart contract, creating a tamper-proof authenticity record.

## The Problem

As AI-generated content (images, text, deepfakes) becomes indistinguishable from real content, there's a growing need for verifiable authenticity checks. Traditional watermarking fails silently. TruChain solves this with a two-layer approach: AI-powered detection via GPT-4o, plus immutable on-chain proof that the check occurred and what the result was.

## Architecture

```
NestJS API (Port 3000)
├── Inference Module   → GPT-4o API for image/content analysis
├── Blockchain Module  → ethers.js smart contract interaction
├── Verification Module → Orchestrates: analyze → hash → store on-chain
└── Shared Module      → Config, logging, trace IDs
         │                       │
         ▼                       ▼
Smart Contracts (Solidity)    TruChain ERC-20 Token
├── ImageVerification.sol     ├── Payment for verification
│   └── On-chain proof store  ├── Staking mechanism
└── Content hash verification └── Burn mechanics
```

## What I Built

### AI Inference Layer
- OpenAI GPT-4o integration for multi-modal content analysis (image + text)
- Base64 image processing pipeline for direct upload verification
- Confidence scoring for AI-generated content detection
- Structured verification results with detailed reasoning

### Blockchain Proof Storage
- **ImageVerification.sol**: stores verification results on-chain — content hash, AI confidence score, verification timestamp, verifier address
- **TruChain.sol**: ERC-20 token for the verification payment system — users pay TruChain tokens to verify content, with staking and burn mechanics
- Verifier authorization system — only approved verifiers can submit on-chain proofs

### NestJS Backend
- Unified API orchestrating the full flow: content submission → GPT analysis → hash generation → on-chain storage → result return
- Structured logging with trace IDs for every request
- Health check endpoints for API and blockchain connection monitoring
- Docker-ready with docker-compose for local development

## Key Highlights
- Full AI + blockchain integration: GPT-4o inference results stored as immutable on-chain proofs
- ERC-20 token economics: payment, staking, and burn mechanics for a sustainable verification ecosystem
- Production-grade NestJS architecture with modular design and structured observability
- Smart contract suite covering verification storage, token payments, and verifier authorization
