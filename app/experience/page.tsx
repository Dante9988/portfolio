import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "OnlyPumpMe",
    role: "AI Systems Engineer",
    period: "2024 – Present",
    location: "Remote",
    url: "",
    description:
      "Building an AI-powered investment intelligence platform on the Pump.fun/Solana ecosystem — adaptive risk profiling, RAG pipelines, statistically validated scoring models, and multi-source intelligence.",
    highlights: [
      "Built AI system that adapts to each user's investing style — aggressive, moderate, or conservative — with different signal weightings and risk thresholds",
      "Designed multi-source intelligence system combining social sentiment, on-chain wallet analysis, and real-time market data",
      "Built RAG pipelines and vector database infrastructure for contextual market insights grounded in historical token launch data",
      "Developed statistical backtesting framework with Sharpe ratio, win rate, drawdown analysis, and Monte Carlo simulation to validate scoring models",
      "Implemented AI agents for sentiment analysis, portfolio risk assessment, and position sizing optimization",
      "Integrated Pump.fun SDK, PumpSwap SDK, and Jito MEV bundles for production Solana trading infrastructure",
    ],
    stack: ["Python", "TypeScript", "NestJS", "LangChain", "OpenAI", "RAG", "Vector Databases", "Solana Web3.js", "Pump.fun SDK", "Jito"],
  },
  {
    company: "Gluwa",
    role: "Software Engineer – AI, Blockchain & Backend Systems",
    period: "Nov 2021 – Feb 2026",
    location: "Remote",
    url: "https://gluwa.com",
    description:
      "Built production blockchain infrastructure and AI-powered engineering tools for the Creditcoin ecosystem — a multi-chain network spanning Ethereum, BNB Chain, Bitcoin, and Substrate.",
    highlights: [
      "Built production cross-chain bridge worker orchestrating Ethereum → CCNext L2 transfers with cryptographic proof generation and exponential backoff retry",
      "Designed and deployed ERC-2612 airdrop distribution system with EIP-712 signatures, campaign lifecycle management, and abuse prevention",
      "Deployed full Uniswap V3 protocol stack and custom GluwaDEX infrastructure with CLI tooling and integration test suites",
      "Built AI DevOps Slack bot with RAG pipeline, vector DB retrieval, LangChain orchestration, and multi-provider LLM support (OpenAI, Anthropic, fine-tuned Ollama models)",
      "Implemented Kubernetes pod lifecycle management (restart, delete, create) through structured LLM prompts with safety confirmations",
      "Developed distributed validation infrastructure for multi-chain blockchain systems (Ethereum, BNB Chain, Bitcoin, Substrate)",
      "Architected CI/CD pipelines with containerization, parallel execution, and multi-environment deployment automation",
    ],
    stack: ["TypeScript", "Python", "C# (.NET 6)", "NestJS", "OpenAI", "Anthropic", "LangChain", "Ollama", "Kubernetes", "Polkadot.js", "ethers.js", "viem", "Foundry", "Hardhat", "Docker", "Azure"],
  },
  {
    company: "Hxro Labs",
    role: "Software Engineer – Backend & Distributed Systems",
    period: "Nov 2020 – Oct 2021",
    location: "Remote",
    url: "",
    description:
      "Contributed to backend infrastructure for a real-time binary options trading platform supporting high-frequency event-driven workflows.",
    highlights: [
      "Built backend services for real-time binary options trading platform",
      "Developed REST API and WebSocket services for real-time market data stream processing",
      "Implemented transaction validation logic and edge-case handling for financial workflows",
      "Integrated backend services into GitLab CI/CD pipelines for deployment automation",
    ],
    stack: ["Python", "WebSocket", "REST APIs", "GitLab CI/CD"],
  },
  {
    company: "Dust Foundation",
    role: "Blockchain Developer",
    period: "Apr 2021 – Aug 2021",
    location: "Remote (Part-Time)",
    url: "",
    description:
      "Developed decentralized exchange components and optimized smart contract infrastructure for ERC-20 tokens.",
    highlights: [
      "Developed decentralized exchange (DEX) components for ERC-20 tokens",
      "Built and deployed smart contracts using Truffle and Ganache",
      "Optimized smart contract storage patterns and gas efficiency",
      "Applied security best practices during contract development",
    ],
    stack: ["Solidity", "Truffle", "Ganache", "ERC-20", "Ethereum"],
  },
  {
    company: "Apple (via Hogarth)",
    role: "Software Engineer in Test",
    period: "Feb 2020 – Jul 2020",
    location: "Sunnyvale, CA",
    url: "",
    description:
      "Built automated validation infrastructure for iOS and Android platforms within Apple's cross-functional engineering teams.",
    highlights: [
      "Developed automated validation frameworks for iOS and Android release pipelines using Python",
      "Contributed to release readiness workflows and system-level validation processes",
      "Collaborated with cross-functional engineering teams on platform reliability",
    ],
    stack: ["Python", "iOS", "Android", "Automation Frameworks", "CI/CD"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          10+ years in engineering — 6 years in software engineering, 4 years as an AI Systems Engineer,
          and 6 years building ML infrastructure. From automation engineering into distributed backend systems,
          blockchain infrastructure, and AI/LLM-powered platforms.
        </p>
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2a2d3a] ml-5 md:ml-6 hidden md:block" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative md:pl-16">
              {/* Timeline dot */}
              <div className="hidden md:flex absolute left-0 top-1 w-12 h-12 rounded-xl bg-[#1a1d27] border border-[#2a2d3a] items-center justify-center">
                <Briefcase size={18} className="text-sky-400" />
              </div>

              <div className="card hover:border-sky-500/30 transition-colors duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-semibold text-white">{exp.company}</h2>
                      {exp.url && (
                        <a
                          href={exp.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-slate-500 hover:text-sky-400 transition-colors"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <p className="text-sky-400 font-medium text-sm">{exp.role}</p>
                  </div>
                  <div className="text-right text-sm text-slate-500 shrink-0">
                    <div className="flex items-center gap-1 justify-end">
                      <Calendar size={13} />
                      {exp.period}
                    </div>
                    <div className="text-xs mt-0.5">{exp.location}</div>
                  </div>
                </div>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{exp.description}</p>

                <ul className="space-y-2 mb-5">
                  {exp.highlights.map((hl, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                      <span className="text-sky-500 mt-0.5 shrink-0">▸</span>
                      {hl}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Earlier Career + Education */}
      <div className="mt-16 space-y-6">
        <div className="card">
          <h3 className="text-white font-semibold mb-2">Earlier Career (2016–2020)</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Prior roles in automation engineering and software validation at Ridecell, Tally Technologies,
            and Infomatrix Global — building automated validation frameworks in Python, API and database
            testing infrastructure, and CI-integrated reliability tooling. Full details available on{" "}
            <a
              href="https://linkedin.com/in/anvarbaltakhojayev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300 transition-colors"
            >
              LinkedIn
            </a>{" "}
            or by request.
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-white">Education</h2>
        <div className="card">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div>
              <h3 className="text-white font-semibold">B.S. Computer Science</h3>
              <p className="text-sky-400 text-sm">The University of Texas at Austin</p>
            </div>
            <div className="text-sm text-slate-500 shrink-0">
              <div className="text-xs mt-0.5 sm:text-right">Austin, TX</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
