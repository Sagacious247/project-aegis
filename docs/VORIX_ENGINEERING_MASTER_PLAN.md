# VORIX Engineering Master Plan

**Project:** VORIX  
**Repository:** project-aegis  
**Current Branch:** main  
**Current Foundation Commit:** c6dc279  
**Status:** Active Development  
**Document Version:** 1.0

---

# 1. Vision

VORIX is a crypto market intelligence and trading research platform designed to help users understand market conditions, investigate trading strategies, evaluate risk, and eventually receive evidence-based trading intelligence.

VORIX is not intended to begin as an automated trading bot.

The system will first establish reliable:

- Market data
- Market intelligence
- Strategy research
- Backtesting
- Validation
- Risk analysis
- Research evidence
- Signal quality controls

Only after sufficient evidence and controlled validation will VORIX consider paper trading, signal delivery, and eventually configurable trade execution.

The central principle is:

> Build evidence before automation.

---

# 2. Product Philosophy

VORIX should answer five fundamental questions:

1. What is happening in the market?
2. Why might it be happening?
3. What opportunities or conditions are being detected?
4. What risks are associated with those conditions?
5. How strong is the evidence supporting the conclusion?

VORIX should distinguish clearly between:

- Market information
- Analysis
- Research
- Historical simulation
- Candidate strategies
- Validated strategies
- Paper-trading results
- Live signals
- Automated execution

These states must never be mixed together.

---

# 3. Core Product Areas

VORIX will eventually contain the following major domains:

## 3.1 Market Intelligence

Responsible for:

- Market overview
- Asset prices
- Market capitalization
- Volume
- Market regime
- Volatility
- Market structure
- Asset-level analysis
- News
- Sentiment
- Whale/on-chain information when reliable data sources are available
- Multi-timeframe context

---

## 3.2 Strategy Research

Responsible for:

- Strategy definitions
- Strategy versions
- Entry rules
- Exit rules
- Stop-loss rules
- Take-profit rules
- Signal thresholds
- Position sizing
- Historical testing
- Parameter sensitivity
- Robustness testing
- Out-of-sample testing
- Walk-forward testing

---

## 3.3 Backtesting

Backtesting must simulate a strategy using explicit historical rules.

The engine must account for:

- Historical candles
- Entry timing
- Exit timing
- Long positions
- Short positions
- Stop loss
- Take profit
- Position sizing
- Fees
- Slippage
- One-position constraints
- Trade-level P&L
- Equity curve
- Drawdown
- Performance metrics

Backtests must never fabricate trades or exits.

Historical results must never be presented as guaranteed future performance.

---

## 3.4 Risk Intelligence

Responsible for:

- Position sizing
- Risk per trade
- Portfolio exposure
- Concentration
- Drawdown
- Volatility
- Correlation
- Maximum exposure
- Risk limits
- Trade-level risk
- Portfolio-level risk

Risk controls must be independent from strategy generation.

---

## 3.5 Signal Engine

The signal engine will eventually produce structured trading intelligence containing information such as:

- Asset
- Direction
- Entry
- Stop loss
- Take-profit targets
- Risk/reward
- Confidence
- Market regime
- Supporting evidence
- Risk warnings
- Invalidation conditions
- Research status

Signals must pass defined validation gates before being eligible for user delivery.

---

## 3.6 Portfolio Intelligence

Responsible for:

- Portfolio positions
- Allocation
- Exposure
- P&L
- Risk
- Drawdown
- Concentration
- Portfolio-level intelligence

---

## 3.7 Research Laboratory

The research system will allow controlled experiments including:

- Parameter sensitivity
- Market regime analysis
- Cost sensitivity
- Out-of-sample testing
- Walk-forward validation
- Strategy comparison
- Stability analysis

The system must not select strategies solely because they produced the highest historical return.

---

# 4. High-Level Architecture

The intended architecture is:

```text
                         VORIX
                           |
          +----------------+----------------+
          |                                 |
   MARKET INTELLIGENCE                RESEARCH ENGINE
          |                                 |
   +------+------+                    +-----+------+
   |      |      |                    |            |
 Market  News  Sentiment          Backtesting  Validation
 Data          On-chain           Sensitivity  Robustness
                                  OOS          Walk-forward
          |                                 |
          +----------------+----------------+
                           |
                     RISK ENGINE
                           |
                    SIGNAL ENGINE
                           |
                  VORIX APPLICATION
                           |
          +----------------+----------------+
          |                |                |
      Dashboard        Research Lab     Portfolio/Risk
          |
       Signals
          |
   Future Notifications
          |
   Future Execution








COPIED DATA
                    VORIX
                      │
        ┌─────────────┴─────────────┐
        │                           │
   MARKET INTELLIGENCE        RESEARCH ENGINE
        │                           │
        ├─ Market data              ├─ Backtesting
        ├─ Market regime            ├─ Parameter testing
        ├─ Asset analysis           ├─ Robustness
        ├─ News                     ├─ Out-of-sample
        ├─ Sentiment                ├─ Walk-forward
        └─ Whale/on-chain           └─ Validation
                                      │
                         ┌────────────┴────────────┐
                         │                         │
                  SIGNAL ENGINE              RISK ENGINE
                         │                         │
                  Direction                  Position sizing
                  Entry                     Stop loss
                  TP                        Exposure
                  Confidence                Drawdown
                  Evidence                  Portfolio risk
                         │                         │
                         └────────────┬────────────┘
                                      │
                               INTELLIGENCE UI
                                      │
                     Dashboard / Strategy Lab /
                     Portfolio / Risk / Research
                                      │
                                      ▼
                              EVENTUAL DELIVERY
                           Telegram / Discord / API
                                      │
                                      ▼
                            FUTURE EXECUTION



5. Technology Stack
Frontend
Next.js
React
TypeScript
Modern responsive UI
App Router
Backend
Node.js
NestJS
TypeScript
Database
PostgreSQL
Caching / Infrastructure
Redis
Market Data

Initial integrations may include:

CoinMarketCap
Binance

Future sources may include:

Additional exchanges
On-chain data providers
News providers
Sentiment providers
Institutional data APIs
Package Management
pnpm
Turborepo
6. Backend Architecture

The backend should evolve toward domain-based modules.

Target structure:

apps/api/src/

├── config/
│
├── market/
│
├── intelligence/
│
├── strategy/
│
├── backtest/
│
├── research/
│
├── risk/
│
├── portfolio/
│
├── signal/
│
├── notification/
│
├── auth/
│
├── database/
│
└── common/

Each domain should have clear responsibilities.

Avoid creating large services that contain unrelated business logic.

7. Market Data Architecture

External providers must be isolated behind adapters.

Preferred flow:

External Provider
       |
     Adapter
       |
    Normalize
       |
 MarketDataService
       |
 VORIX Domain Logic

Business logic should not depend directly on provider-specific response formats.

This allows VORIX to replace or add providers without rewriting the entire application.

8. Research Pipeline

The research pipeline is:

Strategy Definition
       |
Historical Backtest
       |
Performance Diagnostics
       |
Validation
       |
Parameter Sensitivity
       |
Robustness Testing
       |
Out-of-Sample Testing
       |
Walk-Forward Testing
       |
Paper Trading
       |
Live Monitoring
       |
Potential Signal Eligibility
       |
Potential Execution

Each stage must have explicit acceptance criteria.

Failure at a stage must prevent inappropriate promotion to the next stage.

9. Strategy Lifecycle

Strategies should have explicit lifecycle states.

Initial conceptual lifecycle:

RESEARCH_ONLY
      |
   CANDIDATE
      |
PAPER_TESTING
      |
  VALIDATED
      |
DELIVERY_ENABLED
      |
EXECUTION_ENABLED

A strategy must not skip validation stages.

10. Backtesting Principles

Backtesting must prioritize realism over attractive historical results.

The engine must:

Use historical data only
Avoid look-ahead bias
Avoid future data leakage
Apply realistic entry timing
Apply transaction costs
Apply slippage
Record every trade
Track equity
Track drawdown
Preserve reproducibility

Where ambiguity exists, the engine should use conservative assumptions.

11. Parameter Sensitivity

Parameter testing should investigate stability rather than simply optimize historical return.

Initial research grid may include:

Stop Loss
1%
2%
3%
Take Profit
2%
4%
6%
Signal Threshold
0.25%
0.50%
0.75%
1.00%

This produces:

3 × 3 × 4 = 36 configurations

Each configuration should record:

Number of trades
Win rate
Return
Net P&L
Profit factor
Expectancy
Maximum drawdown
Fees
Slippage
Cost impact
Validation state
Stability
12. Validation Philosophy

A profitable historical result is not automatically a validated strategy.

Validation should consider:

Sample size
Profitability
Drawdown
Profit factor
Expectancy
Cost sensitivity
Parameter stability
Market-regime stability
Out-of-sample performance
Walk-forward performance
Consistency

The system must explicitly identify insufficient evidence.

13. Research Safety

Research output must remain clearly separated from live trading output.

Research responses should communicate that:

Historical performance does not guarantee future performance.
Backtests are simulations.
Research outputs are not automatically trading signals.
Insufficient data must remain insufficient data.
Strategy promotion requires defined evidence.

The system must not silently convert research output into live signals.

14. Signal Architecture

A future signal should contain structured evidence.

Conceptual structure:

Asset
Direction
Entry
Stop Loss
Take Profit
Risk/Reward
Confidence
Market Regime
Supporting Evidence
Risk Factors
Invalidation Conditions
Research Status
Generated At

Signals should be explainable.

Users should be able to understand why the system generated a signal.

15. Risk Architecture

Risk management must operate independently of strategy logic.

A strategy may identify an opportunity while the risk engine determines that the opportunity should not be traded.

The risk engine should eventually evaluate:

Trade Risk
+
Portfolio Risk
+
Market Risk
+
Liquidity Risk
+
Concentration Risk
+
Drawdown Risk
16. Database Direction

PostgreSQL will eventually persist core domain entities including:

Users
Subscriptions
Assets
Market snapshots
Strategies
Strategy versions
Backtests
Backtest trades
Research experiments
Research results
Signals
Portfolios
Positions
Risk snapshots
Alerts
Notifications

Database implementation should begin after the domain boundaries are sufficiently stable.

17. Redis Direction

Redis may eventually support:

Market-data caching
Rate limiting
Temporary state
Background jobs
Queues
Realtime workloads
Signal/event distribution

Redis should not become the system of record.

PostgreSQL remains the persistent source of truth for business data.

18. Frontend Architecture

The frontend should organize around user workflows rather than isolated technical features.

Core application areas:

Dashboard
Market Intelligence
Strategy Lab
Research
Portfolio
Risk
Signals
Settings

The interface should prioritize:

Clarity
Evidence
Explainability
Risk visibility
Fast navigation
Responsive design
Consistent visual language

Avoid excessive visual complexity.

19. Security

Security must be designed before external account integrations.

Requirements will include:

Input validation
Authentication
Authorization
Rate limiting
Secure secrets
Environment configuration
Structured logging
Audit trails
Secure API credentials
Least-privilege exchange permissions
Credential rotation
Protection against accidental trade execution

Exchange credentials must never be exposed to the frontend.

20. Testing Strategy

Each important domain should eventually contain:

Unit Tests

Business logic and calculations.

Integration Tests

Interactions between modules and external adapters.

API Tests

Controller and endpoint behavior.

Research Tests

Backtest reproducibility and validation behavior.

Frontend Tests

Critical user workflows.

End-to-End Tests

Important application journeys.

No major feature should be considered complete without appropriate tests.

21. Git Workflow

Git is part of the engineering process.

Development cycle:

Plan
  |
Implement
  |
Build
  |
Test
  |
Verify
  |
Commit
  |
Push

Every stable milestone must be pushed to GitHub.

Avoid accumulating large amounts of uncommitted work.

Before destructive changes:

git status
git diff

After a stable milestone:

git status
git add .
git commit
git push
22. Development Rule

VORIX development follows a one-file-at-a-time discipline when reconstructing or modifying existing functionality.

Before replacing an existing file:

Inspect the current file.
Understand its dependencies.
Determine the required change.
Produce the complete replacement only when appropriate.
Build.
Test.
Commit.
Push.

Never overwrite an existing working file blindly.

23. Recovery Rule

The current GitHub repository is the authoritative recovery baseline.

Current foundation:

c6dc279
feat: build VORIX market intelligence dashboard

Earlier foundation:

e049d72
chore: initialize Project Aegis monorepo

Recovered code must be treated as the starting point for reconstruction.

Lost functionality may be reconstructed from documented project requirements and prior development decisions.

24. Development Phases
Phase 0 — Foundation Recovery
Verify repository
Verify Node
Verify pnpm
Install dependencies
Build frontend
Build backend
Verify dashboard
Establish Git baseline
Phase 1 — Market Data Foundation
Market data interfaces
Provider adapters
Market normalization
Market endpoints
Error handling
Caching strategy
Tests
Phase 2 — Backtesting Engine
Historical data
Strategy rules
Trade execution simulation
Fees
Slippage
Position sizing
Equity curve
Drawdown
Metrics
Tests
Phase 3 — Research Engine
Validation
Diagnostics
Robustness
Parameter sensitivity
Cost sensitivity
Research reports
Research gates
Phase 4 — Out-of-Sample Research
Train/test separation
Out-of-sample evaluation
Walk-forward analysis
Regime analysis
Stability analysis
Phase 5 — Risk Engine
Risk per trade
Position sizing
Portfolio exposure
Concentration
Drawdown
Risk limits
Phase 6 — Intelligence Engine
Market regime
Multi-timeframe analysis
News
Sentiment
On-chain information
Evidence aggregation
Explanations
Phase 7 — Signal Engine
Signal schema
Strategy eligibility
Evidence requirements
Confidence
Risk checks
Signal lifecycle
Phase 8 — Portfolio Intelligence
Portfolio state
Positions
Allocation
Exposure
P&L
Risk analytics
Phase 9 — User Platform
Authentication
Accounts
Subscriptions
User settings
Notification preferences
Usage limits
Phase 10 — Delivery

Potential channels:

Dashboard
Telegram
Discord
API
Email
Phase 11 — Paper Trading
Simulated execution
Live market data
Execution simulation
Slippage tracking
Monitoring
Performance evaluation
Phase 12 — Production Execution

Only after appropriate research, validation, monitoring, security, and user controls are established.

Potential capabilities:

Exchange connectivity
User-authorized execution
Configurable limits
Manual confirmation
Automated execution where explicitly configured
25. Definition of Done

A feature is not complete merely because the code runs.

A feature is considered complete when:

Requirements are defined.
Architecture is understood.
Code is implemented.
TypeScript builds successfully.
Relevant tests pass.
Error handling exists.
Security implications are considered.
Documentation is updated when necessary.
Git status is clean.
The milestone is committed.
The commit is pushed to GitHub.
26. Non-Negotiable Principles

VORIX development must follow these principles:

1. Evidence before automation.
2. Risk before execution.
3. Validation before promotion.
4. Explainability before complexity.
5. Realistic simulation before historical optimization.
6. Security before exchange connectivity.
7. Tests before declaring stability.
8. Small verified changes before large rewrites.
9. GitHub backup after every meaningful milestone.
10. Never confuse historical research with future certainty.
27. Immediate Roadmap

The immediate implementation order is:

RECOVERED VORIX FOUNDATION
          |
          v
LOCAL DEVELOPMENT ENVIRONMENT
          |
          v
MARKET DATA FOUNDATION
          |
          v
BACKTEST ENGINE
          |
          v
RESEARCH + VALIDATION
          |
          v
PARAMETER SENSITIVITY
          |
          v
ROBUSTNESS + OUT-OF-SAMPLE
          |
          v
RISK ENGINE
          |
          v
INTELLIGENCE ENGINE
          |
          v
SIGNAL ENGINE
          |
          v
PORTFOLIO INTELLIGENCE
          |
          v
PAPER TRADING
          |
          v
PRODUCTION-READY PLATFORM
28. Guiding Principle

VORIX is being built to become a trusted intelligence system, not merely a signal generator.

The objective is not to produce the most signals.

The objective is to produce information that is:

Understandable
Testable
Reproducible
Risk-aware
Evidence-based
Transparent about uncertainty
Technically reliable

The long-term goal is:

Build a system that earns trust through evidence, architecture, transparency, and disciplined execution.