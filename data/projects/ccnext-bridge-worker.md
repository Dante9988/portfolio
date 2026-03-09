---
title: "CCNext Cross-Chain Bridge Worker"
slug: "ccnext-bridge-worker"
tags: ["Cross-Chain", "Blockchain", "NestJS", "ethers.js", "viem", "TypeScript", "Bridge", "Distributed Systems"]
stack: ["NestJS", "TypeScript", "ethers.js", "viem", "PostgreSQL", "TypeORM", "Redis", "Docker", "Azure App Configuration"]
summary: "Production off-chain worker orchestrating cross-chain token transfers between Ethereum Sepolia and a custom Substrate-based L2. Event monitoring, cryptographic proof generation with exponential backoff retry, and per-wallet nonce management for parallel transaction submission."
github: ""
demo: ""
role: "Blockchain / Backend Engineer"
period: "Gluwa / 2022–2024"
---

# CCNext Cross-Chain Bridge Worker

## Overview

A production-grade off-chain worker system that orchestrates cross-chain token transfers between Ethereum Sepolia and a custom Substrate-based L2 (CCNext). This is the infrastructure layer that makes the bridge work — event monitoring, proof generation, confirmation handling, and cross-chain submission, all with proper resilience patterns.

## The Problem

Cross-chain bridges require an off-chain coordinator: something that watches for events on the source chain, waits for sufficient confirmations, requests a cryptographic proof from an external prover service, then submits that proof to the destination chain. Every step can fail, and failures need to be handled gracefully without double-spending or losing transactions.

## Architecture

```
Ethereum Sepolia (ERC-20 Transfer Event)
    ↓ wait N confirmations
Off-Chain Worker (NestJS)
    ↓ call Proof API (exponential backoff, 20 retries, 15-min timeout)
External Proof API (generates cryptographic inclusion proof)
    ↓ submit proof transaction
CCNext L2 (USC Contract — verify proof + mint)
```

## What I Built

### Event Monitoring Layer
- Subscribes to Ethereum Sepolia ERC-20 Transfer events via ethers.js
- Confirmation window logic: waits for N block confirmations before processing
- Persistent event state tracking in PostgreSQL via TypeORM (prevents reprocessing on restart)

### Proof API Orchestration
- Calls external Proof API with exponential backoff retry (20 attempts, 15-minute total timeout)
- Handles API timeouts, rate limits, and transient failures gracefully
- Structured metadata logging for every retry attempt

### CCNext Transaction Submission (viem)
- Uses viem for CCNext L2 interactions (EIP-1559 transaction construction)
- **Per-wallet nonce management**: tracks nonce per wallet address to enable parallel transaction submission
- Supports 4 concurrent wallets with independent nonce tracking

### Traffic Simulator
- Companion tool that generates parallel ERC-20 transfers across 4 wallets for load and integration testing
- Per-wallet nonce management with EIP-1559 support

### Infrastructure
- Docker Compose with NestJS worker + PostgreSQL + Redis
- Azure App Configuration for dynamic config management across environments
- Environment-specific deployments: testnet, devnet, production

## Key Highlights
- Exponential backoff proof API retry: 20 attempts, 15-min total timeout — handles real network conditions
- Per-wallet nonce management enabling parallel cross-chain submissions
- Persistent state prevents duplicate processing on worker restart
- Full multi-environment support via Azure App Configuration
