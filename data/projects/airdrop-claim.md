---
title: "🪂 ERC-2612 Airdrop Distribution System"
slug: "airdrop-claim"
tags: ["Solidity", "Smart Contracts", "EIP-712", "Foundry", "Hardhat", "OpenZeppelin", "DeFi"]
stack: ["Solidity 0.8.24", "Foundry (Forge)", "Hardhat", "TypeScript", "EIP-712", "ERC-2612", "OpenZeppelin v5"]
summary: "Production smart contract system for on-chain airdrop distribution with EIP-712 signature-based claiming, campaign lifecycle management, role-based access control, bonus reward tracking, and abuse prevention. Solidity tests written in Foundry. TypeScript scripts load rewards from CSV and execute distributions."
github: ""
demo: ""
role: "Blockchain Engineer"
period: "Gluwa / 2023"
---

# ERC-2612 Airdrop Distribution System

## 🔭 Overview

A production-grade smart contract system for distributing token airdrops on-chain. Uses EIP-712 typed
structured data signatures for gas-efficient, permissioned claiming — users submit a signed claim rather than
relying on a merkle tree or manual distribution.

## 🛠️ Architecture

### 📜 Smart Contract (Solidity 0.8.24 + OpenZeppelin v5)
- **🔐 EIP-712 signature validation**: each eligible recipient receives an off-chain signature; claiming requires
  submitting a valid signature — prevents unauthorized claims without on-chain allowlist storage
- **📅 Campaign lifecycle management**: start/deadline timestamps, campaign pause/resume, admin role controls
- **👥 Role-based access control**: OpenZeppelin AccessControl — ADMIN_ROLE, SIGNER_ROLE, DISTRIBUTOR_ROLE
- **🎁 Bonus reward tracking**: separate bonus allocation per recipient, claimable independently
- **🛡️ Abuse prevention**: per-address claiming status tracked on-chain, signature replay protection

### 🧪 Foundry Test Suite
- 🔐 Property-based tests for cryptographic claim flows — testing valid signatures, invalid signatures,
  expired signatures, and replay attacks
- 📅 Campaign lifecycle tests: start, deadline enforcement, pause/resume behavior
- 👥 Role access control tests: unauthorized role operations, role grant/revoke flows
- ⛽ Gas optimization tests: measuring claim transaction costs under various load patterns

### 📋 TypeScript Distribution Scripts
- 📊 CSV-based reward loading: reads recipient addresses and allocations from spreadsheet
- ✍️ Bulk EIP-712 signature generation for all recipients
- 📦 Staged airdrop execution with batch transaction support
- 🛡️ Abuse detection pipeline: flags addresses matching known bot/sybil patterns before signing

## ⭐ Key Highlights
- 🔐 EIP-712 typed signatures: gas-efficient claiming without on-chain allowlists
- 🧪 Foundry test suite covering cryptographic flows, lifecycle management, and access control
- 📊 CSV-driven distribution pipeline enabling non-technical team members to manage reward lists
- 🛡️ Abuse detection before signature generation — bad actors get no signatures, not just reverted claims
