---
title: "DEX Tools – Uniswap V3 & GluwaDEX Deployment Infrastructure"
slug: "dex-tools"
tags: ["DeFi", "Uniswap V3", "Solidity", "Smart Contracts", "Hardhat", "TypeScript", "DEX", "Developer Tooling"]
stack: ["Solidity", "Hardhat", "TypeScript", "ethers.js", "Uniswap V3", "OpenZeppelin", "Docker"]
summary: "Deployment infrastructure and CLI for managing Uniswap V3 protocol contracts and GluwaDEX (SwapPool V1/V2, SwapRouter) across local, testnet, and production environments. Docker-based deterministic local environment, deployment automation, and integration test suite."
github: ""
demo: ""
role: "Blockchain Engineer"
period: "Gluwa / 2022–2023"
---

# DEX Tools – Uniswap V3 & GluwaDEX Deployment Infrastructure

## Overview

A comprehensive deployment toolkit and CLI for managing DEX smart contracts — covering both the full Uniswap V3 protocol stack and the custom GluwaDEX (SwapPool V1/V2, SwapRouter). Designed for reliable, repeatable deployments across local Docker environments, testnet, and production networks.

## What I Built

### Uniswap V3 Full Protocol Deployment
- Complete Uniswap V3 deployment: UniswapV3Factory, UniswapV3Pool, SwapRouter, NonfungiblePositionManager, NonfungibleTokenPositionDescriptor, QuoterV2
- Deployment scripts with configurable fee tiers, tick spacing, and initial pool parameters
- Post-deployment validation: verifies pool creation, fee configuration, and position manager linkage
- Liquidity provision scripts for initializing pools with seed liquidity

### GluwaDEX Deployment
- SwapPool V1 and V2 contract deployment with configurable fee parameters
- SwapRouter deployment and integration with pool registry
- Migration scripts for V1 → V2 pool upgrades
- Administrative scripts for fee updates and pool pausing

### CLI Tool
- Interactive CLI for common DEX operations: create pool, add liquidity, swap, collect fees
- Supports local Docker environment, testnet, and mainnet via `--network` flag
- Human-readable output with transaction hashes, gas costs, and resulting state

### Docker-Based Local Environment
- Docker Compose with local Hardhat node + deployed DEX contracts
- Pre-seeded with test tokens, liquidity pools, and funded wallets
- Deterministic: same environment every time, no state drift between runs

### Integration Test Suite
- End-to-end tests covering: pool creation → liquidity provision → swap execution → fee collection
- Price impact validation: verifies swap outputs match Uniswap V3 price math
- Multi-hop swap tests through multiple pools
- Invariant tests: pool invariant (x*y=k) holds after all operations

## Key Highlights
- Full Uniswap V3 protocol stack deployed and validated in a single command
- Docker-based deterministic local environment eliminates deployment inconsistencies
- CLI tool enables non-engineer team members to interact with DEX contracts safely
- Integration tests validate the complete swap lifecycle from pool creation to fee collection
