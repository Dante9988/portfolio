---
title: "OnlyPump Vanity Address Generator"
slug: "vanity-generator"
tags: ["Blockchain", "Solana", "TypeScript", "Cryptography", "CLI"]
stack: ["TypeScript", "Solana Web3.js", "Node.js"]
summary: "High-performance Solana vanity address generator — brute-force searches for keypairs matching custom prefixes or suffixes. Built in TypeScript with multi-threaded execution for fast address generation."
github: "https://github.com/Dante9988/OnlyPump-Vanity-Generator"
demo: ""
role: "Blockchain Developer"
period: "2025"
---

# OnlyPump Vanity Address Generator

## Overview

A high-performance Solana vanity address generator built in TypeScript. The tool brute-force searches for Solana keypairs whose public addresses match a desired prefix or suffix pattern — useful for creating memorable or branded wallet addresses for projects and protocols.

## What I Built

### Vanity Generation Engine
- Brute-force keypair generation using Solana Web3.js Ed25519 key derivation
- Pattern matching for custom prefixes and suffixes (case-insensitive base58)
- Multi-threaded execution to maximize keypair generation throughput
- Progress reporting with estimated time to find a match

### CLI Interface
- Command-line tool with configurable prefix/suffix targets
- Output format includes public key and private key for matched addresses
- Configurable thread count for balancing speed vs. system resources

## Key Highlights
- High-throughput keypair generation leveraging parallel execution
- Solana Ed25519 cryptography implementation
- Practical CLI tool for blockchain projects needing branded addresses
- Clean TypeScript codebase with configurable parameters
