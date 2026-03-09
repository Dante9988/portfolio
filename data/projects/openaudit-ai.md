---
title: "OpenAudit AI – Smart Contract Security Analyzer"
slug: "openaudit-ai"
tags: ["AI", "Blockchain", "Solidity", "Security", "Static Analysis", "OpenAI", "Python", "Open Source", "CLI"]
stack: ["Python", "Typer CLI", "OpenAI API", "Solidity AST Parser", "Pydantic", "pytest"]
summary: "Open-source AI-powered smart contract auditor that combines static analysis with LLM-powered vulnerability explanations. Modular rule engine detects reentrancy, unchecked calls, and other Solidity vulnerabilities. CLI tool with JSON output for CI/CD integration."
github: "https://github.com/openauditai/openaudit-ai"
demo: ""
role: "Creator & Lead Developer"
period: "2025 – Present"
---

# OpenAudit AI – Smart Contract Security Analyzer

## Overview

OpenAudit AI is an open-source smart contract auditing tool that combines static analysis with LLM-powered vulnerability explanations. It parses Solidity source code, runs modular vulnerability detection rules, and uses AI to explain findings in plain English — bridging the gap between automated scanning and human-readable security reports.

## What I Built

### Static Analysis Engine
- Custom Solidity AST parser for source code analysis
- **Reentrancy detection**: identifies external calls made before state updates
- **Unchecked call detection**: flags low-level `.call()` results that aren't validated
- Extensible rule system — new detectors are added by subclassing `BaseRule` and registering via decorator

### AI Explanation Layer
- LLM integration for plain-English vulnerability explanations with remediation guidance
- Multi-provider support: OpenAI, Anthropic, and local models via configurable base URL
- **Fail-safe design**: never crashes due to AI issues — gracefully falls back to built-in template explanations when no API key is set or the provider is unavailable
- `oaudit doctor` diagnostic command for configuration health checks

### CLI Tool
- `oaudit analyze <file.sol>` — single-file analysis with inline vulnerability annotations
- `oaudit scan <directory>` — recursive directory scanning for all `.sol` files
- `--json` flag for machine-readable output (CI/CD integration)
- `--no-ai` flag for pure static analysis without LLM calls
- `--model` flag to override the default LLM model per-command

### Architecture
- Modular project structure: separate packages for analyzer, rules, AI provider, CLI, and reporting
- Pydantic models for request/response validation
- pytest test suite with 32 tests covering rule detection, CLI behavior, and AI fallback paths

## Key Highlights
- Full open-source smart contract security tool from parsing to detection to AI explanation
- Extensible rule engine — community can add new vulnerability detectors without touching core code
- Fail-safe AI integration: works with any OpenAI-compatible provider, gracefully degrades without one
- CI/CD-ready JSON output for automated security gates in deployment pipelines
