import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "OnlyPumpMe",
    role: "AI Systems Engineer | Distributed Backend | ML Infrastructure",
    period: "Jun 2021 – Present",
    location: "Remote",
    url: "",
    description:
      "Built and led development of AI-powered analytics and decision-support systems integrating LLMs and on-chain data on the Pump.fun/Solana ecosystem.",
    highlights: [
      "Built and led development of AI-powered analytics and decision-support systems integrating LLMs and on-chain data",
      "Designed backend services for token launches, trading events, and blockchain transaction workflows on Solana",
      "Implemented RAG-based intelligence pipelines using embeddings and vector databases",
      "Developed AI agents for sentiment analysis, portfolio insights, and operational automation",
      "Architected distributed backend infrastructure using TypeScript, NestJS, and blockchain SDK integrations",
      "Led infrastructure deployment, monitoring, and scaling decisions",
    ],
    stack: ["Python", "TypeScript", "NestJS", "LangChain", "OpenAI", "RAG", "Vector Databases", "Solana Web3.js", "Pump.fun SDK", "PumpSwap SDK", "Jito"],
  },
  {
    company: "Gluwa",
    role: "Software Engineer (AI & Distributed Systems)",
    period: "Nov 2021 – Present",
    location: "Remote",
    url: "https://gluwa.com",
    description:
      "Designed distributed validation infrastructure for multi-chain blockchain systems and built AI-powered backend services for CI/CD diagnostics and operational intelligence.",
    highlights: [
      "Designed distributed validation infrastructure for multi-chain blockchain systems",
      "Built AI-powered backend services for failure analysis, CI/CD diagnostics, and release monitoring",
      "Implemented RAG-based internal knowledge systems accelerating debugging workflows",
      "Developed Python-based AI agents for log analysis, anomaly detection, and operational health evaluation",
      "Validated cross-chain relayers, bridges, indexers, and transaction pipelines",
      "Optimized CI/CD pipelines with containerization, parallel execution, and environment isolation",
    ],
    stack: ["TypeScript", "C# (.NET 6)", "Python", "Node.js", "NestJS", "Polkadot.js", "ethers.js", "viem", "Playwright", "Foundry", "Docker", "Azure"],
  },
  {
    company: "Hxro Labs",
    role: "Software Engineer (Backend & Distributed Systems)",
    period: "Nov 2020 – Oct 2021",
    location: "Remote",
    url: "",
    description:
      "Contributed to backend infrastructure of a real-time binary options trading platform supporting high-frequency event-driven workflows.",
    highlights: [
      "Contributed to backend infrastructure of a real-time binary options trading platform",
      "Built REST API and WebSocket validation services for real-time market data streams",
      "Implemented transaction validation logic and edge-case handling for financial workflows",
      "Integrated backend services into GitLab CI/CD pipelines for reliability validation",
    ],
    stack: ["Python", "WebSocket", "REST APIs", "GitLab CI/CD"],
  },
  {
    company: "Dust Foundation",
    role: "Blockchain Developer (Part-Time)",
    period: "Apr 2021 – Aug 2021",
    location: "Remote",
    url: "",
    description:
      "Developed decentralized exchange components and optimized smart contract infrastructure for ERC-20 tokens.",
    highlights: [
      "Developed decentralized exchange (DEX) components for ERC-20 tokens",
      "Executed smart contracts using Truffle and Ganache",
      "Optimized smart contract storage and gas efficiency",
      "Ensured security best practices during contract development",
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
      "Worked within cross-functional engineering teams supporting iOS and Android platforms at Apple.",
    highlights: [
      "Worked within cross-functional engineering teams supporting iOS and Android platforms",
      "Performed smoke, regression, and system-level validation testing",
      "Contributed to release readiness workflows and defect triage processes",
    ],
    stack: ["iOS", "Android", "Manual Testing", "Regression Testing"],
  },
  {
    company: "RideCell",
    role: "QA Automation Engineer",
    period: "May 2019 – Jan 2020",
    location: "San Francisco, CA",
    url: "",
    description:
      "Designed Page Object Model automation frameworks and behavior-driven testing workflows for a mobility SaaS platform.",
    highlights: [
      "Designed Page Object Model automation frameworks following OOP principles",
      "Executed behavior-driven testing workflows integrated into CI pipelines",
    ],
    stack: ["Python", "Selenium", "BDD", "CI/CD", "Page Object Model"],
  },
  {
    company: "Tally Technologies",
    role: "QA Engineer",
    period: "May 2018 – May 2019",
    location: "San Francisco, CA",
    url: "",
    description:
      "Performed API, SQL, and web validation testing for fintech systems.",
    highlights: [
      "Performed API, SQL, and web validation testing for fintech systems",
      "Collaborated with developers to improve feature stability and deployment readiness",
    ],
    stack: ["API Testing", "SQL", "Web Testing", "Fintech"],
  },
  {
    company: "Infomatrix Global Inc.",
    role: "Software Quality Assurance Engineer",
    period: "Sep 2016 – May 2018",
    location: "Denver, CO",
    url: "",
    description:
      "Tested web and mobile applications across Android and iOS platforms.",
    highlights: [
      "Tested web and mobile applications across Android and iOS platforms",
      "Designed test plans, executed detailed test cases, and validated system modifications",
    ],
    stack: ["Android", "iOS", "Test Planning", "Mobile Testing"],
  },
];

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Experience</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          10+ years progressing from QA engineering into distributed backend systems, blockchain infrastructure,
          and AI systems engineering — across real-time trading, multi-chain validation, and LLM-powered analytics platforms.
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
      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-white mb-6">Education</h2>
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
