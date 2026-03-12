import { Briefcase, Calendar, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Gluwa",
    role: "Senior Software Engineer in Test (AI Systems & Blockchain Infrastructure)",
    period: "Nov 2021 – Feb 2026",
    location: "Remote",
    url: "https://gluwa.com",
    description:
      "Software engineer responsible for testing, reliability engineering, and AI-assisted infrastructure tooling across distributed blockchain systems including Creditcoin (Substrate), EVM smart contract infrastructure, and Solana integrations. Led development of AI-powered engineering assistants and blockchain observability systems, combining LLM pipelines, semantic retrieval, and infrastructure telemetry to improve debugging and operational workflows for distributed engineering teams.",
    highlights: [
      "Designed Retrieval-Augmented Generation (RAG) architectures where blockchain telemetry, infrastructure logs, smart contract repositories, and internal engineering documentation were chunked, embedded with semantic embedding models, indexed into Chroma vector databases, and retrieved through similarity search during AI reasoning workflows",
      "Built LangChain-based AI agents capable of retrieving engineering context, querying vector stores, analyzing logs, and generating explanations for infrastructure incidents",
      "Developed Python-based AI services integrated with CI/CD pipelines capable of analyzing build failures, deployment issues, and infrastructure anomalies across distributed blockchain environments",
      "Implemented AI-assisted smart contract security workflows where Solidity contracts were parsed, embedded, indexed, and compared against known vulnerability patterns to assist engineers during security audits",
      "Created and maintained CI/CD pipelines on Azure DevOps and GitHub Actions for testing using a multi-Docker container approach",
      "Implemented Playwright automation test suite that later integrated MCP for AI-driven front-end automated testing",
      "Built backend API automation suites in C# to validate distributed backend services supporting blockchain infrastructure",
      "Created Node.js / TypeScript CLI testing frameworks used to validate SDKs, indexers, and developer tooling",
      "Built Hardhat-based testing environments to simulate decentralized exchange activity and validate indexer correctness",
      "Implemented automated testing pipelines validating blockchain events, database states, and notification systems",
      "Created Azure DevOps and GitHub Actions YAML pipelines to validate complex multi-Docker image testing frameworks for production release workflows",
      "Created comprehensive End-to-End tests from API and smart contract interaction to Database SQL validation using dependency injection services",
      "Designed and executed performance testing strategies for both blockchain nodes and backend API infrastructure",
      "Built custom performance testing frameworks for distributed backend systems; implemented load testing using Python and Locust to simulate high-traffic API workloads",
      "Performed performance testing of Substrate blockchain pallets and extrinsics to measure execution performance and system throughput",
      "Analyzed latency, throughput, and system bottlenecks across blockchain infrastructure and backend services",
      "Designed transaction validation frameworks verifying correctness of blockchain state transitions and emitted events across EVM and Substrate environments",
      "Built and maintained blockchain indexers and event processing pipelines used by backend systems to interpret on-chain activity",
      "Tested cross-chain bridge infrastructure connecting EVM networks, Substrate chains, and Solana environments",
      "Developed automated smart contract integration testing frameworks for Solidity contracts and decentralized exchange integrations",
      "Deployed and tested Uniswap V3 contracts, building Hardhat-based environments to validate SDK behavior, swaps, liquidity operations, and routing logic",
      "Developed and tested custom smart contracts on EVM and Solana to simulate production workflows and validate backend integrations",
      "Collaborated closely with backend, blockchain protocol, and DevOps engineers to design testing strategies and validation frameworks ensuring reliability of distributed blockchain infrastructure across development, staging, and production",
      "Built developer tooling that allowed engineering teams to reproduce complex blockchain transaction flows locally, improving debugging workflows and reducing issue resolution time",
      "Designed automated validation systems ensuring consistency between on-chain events, indexer outputs, backend database states, and notification pipelines across distributed services",
      "Contributed to internal engineering documentation and architectural discussions around blockchain infrastructure reliability, AI-assisted diagnostics, and testing strategies for complex multi-service systems",
    ],
    stack: ["Python", "C#", "TypeScript", "Playwright", "LangChain", "Chroma", "RAG", "OpenAI", "Anthropic", "Ollama", "Hardhat", "Foundry", "Solidity", "Locust", "K6", "Azure DevOps", "GitHub Actions", "Docker", "Kubernetes", "Substrate", "ethers.js"],
  },
  {
    company: "Hxro Labs",
    role: "Software Engineer (Trading Infrastructure & Automation)",
    period: "Nov 2020 – Oct 2021",
    location: "Remote",
    url: "",
    description:
      "Engineering contributor to Hxro, one of the first binary options trading platforms built on the Solana blockchain, supporting real-time trading workflows and high-frequency market data. Designed and implemented comprehensive testing infrastructure from scratch to ensure reliability of backend APIs, trading systems, and frontend user interfaces in a latency-sensitive financial environment.",
    highlights: [
      "Developed a Python-based automation framework used to validate trading APIs, transaction flows, and backend services handling real-time market data and trading events",
      "Built automated validation systems verifying: order submission and execution flows, market data integrity, transaction validation logic, and backend state consistency during trading operations",
      "Implemented frontend automation using Playwright, creating end-to-end test suites validating real user trading workflows including order placement, market interactions, and UI behavior during live trading conditions",
      "Later extended the automation system to support AI-assisted test orchestration, integrating MCP-based workflows allowing intelligent generation and execution of frontend tests",
      "Integrated testing infrastructure with CI/CD pipelines, enabling automated validation of releases before deployment to production trading environments",
      "Worked closely with backend and protocol engineers to ensure system stability across real-time trading infrastructure built on Solana",
    ],
    stack: ["Python", "Playwright", "REST APIs", "WebSocket", "GitLab CI", "Solana"],
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
      "Worked with cross-functional engineering teams supporting Apple web and mobile product ecosystems, contributing to quality assurance and release validation for high-traffic consumer platforms.",
    highlights: [
      "Developed automation scripts using Python and Selenium WebDriver to test critical workflows on apple.com, validating UI behavior across multiple browsers and environments",
      "Performed API testing and backend validation to verify data integrity and service responses supporting frontend applications",
      "Executed regression testing and system validation to ensure release readiness for iOS and Android product-related web services",
      "Collaborated with engineering and QA teams to identify defects, reproduce issues, and validate fixes prior to production releases",
    ],
    stack: ["Python", "Selenium WebDriver", "API Testing", "iOS", "Android", "Regression Testing"],
  },
  {
    company: "RideCell",
    role: "QA Automation Engineer",
    period: "May 2019 – Jan 2020",
    location: "San Francisco, CA",
    url: "",
    description:
      "Designed automated UI testing frameworks and CI-integrated test pipelines for an autonomous driving mobility platform.",
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
      "Performed API testing, SQL validation, and web testing for fintech applications",
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
      "Tested web and mobile applications across Android and iOS platforms",
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
          10+ years in engineering — started in QA automation and test infrastructure, evolved into
          distributed backend systems and blockchain infrastructure, and now applying AI systems
          engineering to test automation, observability, and developer tooling.
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-[#2a2d3a] ml-5 md:ml-6 hidden md:block" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="relative md:pl-16">
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

      <div className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold text-white">Education</h2>
        <div className="card">
          <p className="text-slate-400 leading-relaxed">
            Self-taught and bootcamp-trained engineer who chose a hands-on path into technology, investing years in building projects and mastering software engineering through continuous independent learning.
          </p>
        </div>
      </div>
    </div>
  );
}
