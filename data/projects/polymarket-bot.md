---
title: "Polymarket Market-Making Bot"
slug: "polymarket-bot"
tags: ["DeFi", "Trading", "TypeScript", "Quantitative Systems", "Market Making", "Prediction Markets", "Polymarket"]
stack: ["TypeScript", "Node.js", "Polymarket CLOB API", "Binance WebSocket", "REST APIs"]
summary: "Market-making bot for Polymarket prediction markets with a fair-value model using BTC momentum (Binance WebSocket) and order book imbalance signals. Two-sided YES/NO quoting, inventory-aware skewing, risk kill-switches, and a backtesting simulator with PnL tracking."
github: "https://github.com/Dante9988/Polymarket-BTC-bot"
demo: ""
role: "Personal Project"
period: "2023–2024"
---

# Polymarket Market-Making Bot

## Overview

A market-making bot for Polymarket prediction markets that goes beyond simple spread posting. It implements a fair-value model informed by external market microstructure signals — BTC price momentum and order book imbalance — to generate adaptive two-sided quotes that adjust dynamically to market conditions.

## The Problem

Naive market-making on prediction markets is a losers' game: if you just post fixed spreads, informed traders pick off your quotes whenever a signal moves. Profitable market-making requires a fair-value estimate that's continuously updated based on observable signals, plus risk controls to limit inventory exposure.

## What I Built

### Fair-Value Model
- **BTC momentum signal**: Binance WebSocket feed provides real-time BTC price; momentum (recent directional move) is used as a proxy for broader market risk sentiment, adjusting fair value of correlated prediction markets
- **Order book imbalance signal**: Polymarket CLOB order book is analyzed in real time; high bid-side imbalance shifts fair value toward YES, high ask-side imbalance shifts toward NO
- Combined signal produces a continuously-updated fair value estimate for each market

### Quote Generation
- Two-sided YES/NO quotes generated around fair value with configurable base spread
- Spread widens automatically when volatility is elevated (volatility kill-switch)
- Quotes are repriced on every signal update — no stale orders

### Inventory Management
- **Inventory skewing**: when long YES, widen the YES ask and tighten the NO ask to reduce exposure
- **Max position limits**: configurable per-market position caps, bot stops quoting when limit is hit
- **Inventory PnL tracking**: marks positions to fair value for real-time unrealized PnL

### Risk Controls
- **Spread kill-switch**: halts quoting if spread collapses below minimum profitability threshold
- **Volatility kill-switch**: halts quoting during extreme BTC volatility (unreliable fair-value conditions)
- **Manual override**: kill-switch commands for immediate position exit

### Backtesting Simulator
- Round-based backtesting framework replays historical Polymarket CLOB data
- Simulates fill probability based on historical order flow
- PnL tracking per round: realized spread income, inventory mark-to-market, position costs

## Key Highlights
- Fair-value model using external signals (BTC momentum + order imbalance) — not static spread posting
- Inventory-aware quoting with dynamic skewing
- Multiple kill-switches for risk management in volatile conditions
- Full backtesting framework with historical data replay and PnL tracking
