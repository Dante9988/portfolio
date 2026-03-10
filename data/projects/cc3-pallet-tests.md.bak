---
title: "🧪 Substrate Pallet Test Framework (CC3 Protocol)"
slug: "cc3-pallet-tests"
tags: ["Blockchain", "Substrate", "Polkadot.js", "QA Automation", "Mocha", "Allure", "Testing"]
stack: ["TypeScript", "Polkadot.js API", "Jest", "Mocha", "Allure", "Node.js"]
summary: "Comprehensive test framework for validating Substrate blockchain pallets on the Creditcoin 3 network. Covers staking lifecycle, Grandpa migration, precompile testing (BN128, signature verifier), and dynamic extrinsic calling across testnet, devnet, and dryrun environments with Allure structured test reporting."
github: ""
demo: ""
role: "QA / Blockchain Engineer"
period: "Gluwa / 2022–2024"
---

# Substrate Pallet Test Framework (CC3 Protocol)

## 🔭 Overview

A purpose-built test framework for validating Substrate blockchain pallets on the Creditcoin 3 network.
Testing a custom blockchain runtime is fundamentally different from testing a REST API — there's no existing
framework, no easy mocking, and bugs can mean irreversible on-chain state changes. This framework was built
from first principles to cover the full pallet surface.

## 🛠️ What I Built

### 🏗️ Framework Architecture
- **⛓️ Polkadot.js API integration**: connects to live Substrate nodes (testnet, devnet, dryrun)
  and submits extrinsics programmatically
- **🔧 Dynamic extrinsic calling**: generic helpers for calling any pallet extrinsic by name,
  enabling tests to be written at a high level without hard-coding ABI knowledge
- **🌐 Multi-environment support**: single test suite runs against testnet, devnet, or dryrun
  via environment variable configuration
- **📊 Allure integration**: structured test reporting with step-level annotations, screenshots on failure,
  and test history tracking

### 📋 Staking Lifecycle Coverage
- 🔄 Full staking lifecycle: `bond` → `nominate` → `unbond` → `withdraw_unbonded` → `payout_stakers`
- ⚠️ Edge cases: bonding with insufficient funds, nominating non-validators, unbonding during active era
- 💰 Reward payout correctness: validates payout amounts against expected era points and commission rates

### 🔀 Grandpa Migration Tests
- 🔀 Validates the Grandpa consensus migration path from the legacy chain to CC3
- ✅ State correctness assertions: account balances, staking positions, and validator sets post-migration
- 🧪 Run against devnet fork to verify migration scripts before mainnet execution

### 🔐 Precompile Testing
- **📐 BN128 curve precompile**: validates elliptic curve operations (add, mul, pairing) at the EVM precompile address
- **✍️ Signature verifier precompile**: validates ECDSA signature recovery for Ethereum-compatible address derivation
- ✅ Cross-validates precompile outputs against reference implementations

### 📦 Test Data Management
- 👤 Nomination account fixtures for deterministic test environments
- 📊 CSV-based test vector loading for parameterized tests across multiple account states
- 🧹 On-chain state cleanup helpers for test isolation

## ⭐ Key Highlights
- 🧪 Testing a custom blockchain runtime from scratch — no existing framework to extend
- 🔧 Dynamic extrinsic calling covers any pallet without per-extrinsic boilerplate
- 📊 Allure reporting provides structured observability for QA team and stakeholders
- 🌐 Multi-environment: same test suite validates testnet, devnet, and dryrun environments
- 🐛 Caught 3 critical staking edge-case bugs before mainnet deployment
