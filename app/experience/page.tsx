import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Gluwa",
    role: "Senior Software Engineer (AI Systems & Blockchain Infrastructure)",
    period: "Nov 2021 – Feb 2026",
    location: "Remote",
    url: "https://gluwa.com",
    description:
      "Led development of AI-powered DevOps and blockchain engineering systems used by distributed engineering teams.",
    highlights: [
      "Designed RAG architectures where blockchain telemetry, infrastructure logs, smart contract codebases, and engineering documentation were chunked, embedded using semantic embedding models, indexed into Chroma vector databases, and retrieved via similarity search during AI agent reasoning workflows",
      "Developed Python-based AI services that integrate with CI/CD pipelines to automatically analyze build failures, deployment issues, and operational anomalies across distributed blockchain infrastructure",
      "Built LangChain-based AI agents capable of retrieving engineering context, querying vector stores, analyzing logs, and generating explanations for infrastructure incidents",
      "Implemented AI-assisted smart contract security workflows where Solidity contracts were parsed, embedded, indexed, and compared against known vulnerability patterns to assist engineers during security audits",
      "Worked extensively on blockchain infrastructure: transaction validation systems, blockchain indexers and event pipelines, cross-chain relayers and bridges, smart contract integration testing frameworks, and distributed event processing systems",
      "Built internal developer tooling using Python and TypeScript enabling engineers to query operational systems using AI-assisted semantic search and diagnostics",
    ],
    stack: ["Python", "TypeScript", "LangChain", "Chroma", "RAG", "OpenAI", "Anthropic", "Ollama", "Kubernetes", "Docker", "Solidity", "Hardhat", "Foundry", "Polkadot.js", "ethers.js", "viem", "Azure DevOps"],
  },
  {
    company: "OnlyPump",
    role: "AI Systems Engineer",
    period: "Jun 2021 – Feb 2026",
    location: "Remote",
    url: "",
    description:
      "Built AI analytics and automation systems for blockchain token ecosystems and decentralized trading infrastructure.",
    highlights: [
      "Designed RAG pipelines where blockchain events, token metadata, trading activity, operational signals, and social trend data were chunked, embedded into vector representations, indexed within vector stores, and retrieved during AI agent reasoning to generate contextual insights",
      "Developed Python AI backend services ingesting real-time blockchain events and transforming them into structured data pipelines used by AI analytics systems",
      "Implemented LangChain-based agent workflows enabling LLM agents to retrieve on-chain data, query vector databases, analyze token performance, and generate operational insights for developers and platform operators",
      "Designed distributed backend infrastructure integrating Python AI services with TypeScript blockchain microservices processing large volumes of on-chain events",
    ],
    stack: ["Python", "TypeScript", "LangChain", "RAG", "Vector Databases", "FastAPI", "Solana Web3.js"],
  },
  {
    company: "Hxro Labs",
    role: "Software Engineer",
    period: "Nov 2020 – Oct 2021",
    location: "Remote",
    url: "",
    description:
      "Developed backend infrastructure for a real-time financial trading platform.",
    highlights: [
      "Built REST APIs and validation services processing real-time market data streams",
      "Implemented transaction validation logic and backend systems supporting financial trading workflows",
      "Integrated backend validation services into CI/CD pipelines to ensure reliability of production releases",
    ],
    stack: ["Python", "REST APIs", "WebSocket", "GitLab CI/CD"],
  },
  {
    company: "Dust Foundation",
    role: "Blockchain Developer (Part-Time)",
    period: "Apr 2021 – Aug 2021",
    location: "Remote",
    url: "",
    description:
      "Developed decentralized exchange components for ERC-20 token ecosystems.",
    highlights: [
      "Implemented Solidity smart contracts using Truffle and Ganache testing frameworks",
      "Optimized contract storage layout and gas efficiency while maintaining security best practices",
    ],
    stack: ["Solidity", "Truffle", "Ganache", "ERC-20", "Ethereum"],
  },
  {
    company: "Apple (Hogarth)",
    role: "QA Engineer (Contract)",
    period: "Feb 2020 – Jul 2020",
    location: "Sunnyvale, CA",
    url: "",
    description:
      "Worked with cross-functional engineering teams supporting iOS and Android products.",
    highlights: [
      "Executed regression testing, system validation, and release readiness workflows for mobile applications",
    ],
    stack: ["Python", "iOS", "Android", "Automation Frameworks"],
  },
  {
    company: "RideCell",
    role: "QA Automation Engineer",
    period: "May 2019 – Jan 2020",
    location: "San Francisco, CA",
    url: "",
    description:
      "Designed automated UI testing frameworks and CI-integrated test pipelines.",
    highlights: [
      "Designed automated UI testing frameworks using the Page Object Model",
      "Implemented automated test pipelines integrated with CI systems improving deployment confidence",
    ],
    stack: ["Python", "Selenium", "Page Object Model", "CI/CD"],
  },
  {
    company: "Tally Technologies",
    role: "QA Engineer",
    period: "May 2018 – May 2019",
    location: "San Francisco, CA",
    url: "",
    description:
      "Performed API testing, SQL validation, and web testing for fintech applications.",
    highlights: [
      "Collaborated with developers to improve reliability of financial platform features",
    ],
    stack: ["API Testing", "SQL", "Web Testing", "Fintech"],
  },
  {
    company: "Infomatrix Global Inc.",
    role: "QA Engineer",
    period: "Sep 2016 – May 2018",
    location: "Denver, CO",
    url: "",
    description:
      "Tested web and mobile applications across Android and iOS platforms.",
    highlights: [
      "Designed test plans and executed detailed validation workflows ensuring software quality",
    ],
    stack: ["Android", "iOS", "Web Testing", "Test Planning"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          10+ years building distributed systems, AI infrastructure, and blockchain platforms.
          From automation engineering into backend systems, AI systems engineering, and production
          LLM-integrated services.
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

      {/* Education */}
      <div className="mt-16 space-y-6">
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
