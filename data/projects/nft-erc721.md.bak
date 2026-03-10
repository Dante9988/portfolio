---
title: "🎨 NFT ERC-721 Drop with Performance Testing"
slug: "nft-erc721"
tags: ["Solidity", "NFT", "ERC-721", "Hardhat", "Smart Contracts", "Artillery", "Performance Testing"]
stack: ["Solidity", "Hardhat", "TypeScript", "OpenZeppelin", "Artillery", "ethers.js", "IPFS/Pinata"]
summary: "ERC-721 generative NFT drop with time-gated minting, whitelist mechanics, and royalty support. Full Hardhat test suite covering mint flows, access control, and metadata. Artillery-based performance tests validate minting endpoint throughput under load."
github: "https://github.com/Dante9988/NFT-ERC721"
demo: ""
role: "Blockchain Engineer"
period: "Personal / Freelance"
---

# NFT ERC-721 Drop with Performance Testing

## 🔭 Overview

A production-ready ERC-721 NFT drop smart contract system with whitelist mechanics, time-gated public mint,
royalty support, and a full test suite including Artillery-based API load testing for the minting backend.

## 🛠️ What I Built

### 📜 Smart Contract (Solidity + OpenZeppelin)
- 🎨 ERC-721 with metadata URI management and on-chain/off-chain hybrid reveal
- **⏰ Time-gated minting phases**: whitelist mint window → public mint window, enforced by block timestamp
- **📋 Whitelist mechanics**: merkle tree-based allowlist with per-address mint limit
- **👑 Royalty support**: ERC-2981 on-chain royalty standard for marketplace compatibility
- **📦 Supply management**: configurable max supply, per-wallet limits, reserve for team allocation
- 👥 Role-based admin controls: MINTER_ROLE, ADMIN_ROLE via OpenZeppelin AccessControl

### 🧪 Hardhat Test Suite
- ⏰ Phase transition tests: whitelist → public mint boundary conditions
- 🌳 Merkle proof validation: valid proof, invalid proof, expired proof, address not in tree
- 📦 Supply cap enforcement: minting at exactly max supply, attempting to exceed
- 👑 Royalty calculation tests: ERC-2981 royaltyInfo correctness for various sale prices
- ⛽ Gas optimization tests: batch minting scenarios

### 📊 Artillery Performance Testing
- 🧪 Load test suite for the minting API backend using Artillery
- 📈 Simulates concurrent mint requests at varying concurrency levels (10, 50, 100, 500 rps)
- ✅ Validates API response times, error rates, and throughput under load
- 🔄 Tests both whitelist mint and public mint endpoints with realistic wallet distributions

### 📁 Metadata Pipeline
- 🔧 TypeScript scripts for generating generative metadata from trait layers
- 📤 IPFS upload pipeline via Pinata for decentralized metadata storage
- 📦 Bulk metadata generation supporting 10k+ item collections

## ⭐ Key Highlights
- 🧪 Artillery performance testing integrated into the CI pipeline for regression detection
- 🌳 Merkle tree whitelist system with on-chain proof verification
- 👑 ERC-2981 royalty standard for cross-marketplace royalty enforcement
- 📁 Complete metadata pipeline from trait generation to IPFS deployment
