import { Download, FileText, ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Resume</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Download my resume or browse it inline below.
        </p>
      </div>

      {/* Download / View CTA */}
      <div className="card border-sky-500/30 bg-gradient-to-br from-sky-500/5 to-blue-600/5 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
              <FileText className="text-sky-400" size={24} />
            </div>
            <div>
              <div className="text-white font-semibold">Anvar_Baltakhojayev_Resume.docx</div>
              <div className="text-slate-400 text-sm">Updated March 2026</div>
            </div>
          </div>
          <a
            href="/api/resume"
            download="Anvar_Baltakhojayev_Resume.docx"
            className="btn-primary"
          >
            <Download size={16} /> Download
          </a>
        </div>
      </div>

      {/* Resume inline preview */}
      <div className="card">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <FileText size={18} className="text-sky-400" /> Resume Preview
        </h2>
        <div className="space-y-8 text-sm">
          {/* Contact */}
          <div className="text-center border-b border-[#2a2d3a] pb-6">
            <h3 className="text-2xl font-bold text-white mb-1">Anvar Baltakhojayev</h3>
            <p className="text-sky-400 text-sm mb-2">Senior Software Engineer in Test · AI Systems Engineer</p>
            <p className="text-slate-400 text-xs flex flex-wrap justify-center gap-x-3 gap-y-1">
              <span>Mountain View, CA</span>
              <span className="hidden sm:inline text-slate-600">·</span>
              <a href="https://anvar.dev" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline inline-flex items-center gap-1">
                anvar.dev <ExternalLink size={10} />
              </a>
              <span className="hidden sm:inline text-slate-600">·</span>
              <a href="https://github.com/Dante9988" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline inline-flex items-center gap-1">
                GitHub <ExternalLink size={10} />
              </a>
              <span className="hidden sm:inline text-slate-600">·</span>
              <a href="https://linkedin.com/in/anvarbaltakhojayev" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline inline-flex items-center gap-1">
                LinkedIn <ExternalLink size={10} />
              </a>
            </p>
          </div>

          {/* Professional Summary */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-3">Professional Summary</h4>
            <div className="text-slate-400 leading-relaxed space-y-3">
              <p>
                Senior Software Engineer in Test (SDET) with 10+ years of experience building automation frameworks, distributed backend systems, and developer tooling across blockchain and AI-enabled platforms. Strong background in Python and TypeScript automation, backend API validation, smart contract testing, and infrastructure reliability.
              </p>
              <p>
                Experience includes blockchain platforms (EVM, Solana, Substrate), performance testing, and building AI-assisted tooling using LLM integrations, RAG pipelines, and vector databases. Transitioning into AI-enabled SDET and AI systems engineering roles, combining deep QA foundations with modern AI engineering capabilities.
              </p>
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-3">Core Skills</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-400">
              {[
                "Python & TypeScript automation frameworks",
                "Playwright / MCP-driven AI test automation",
                "Backend API automation (C# RestSharp)",
                "Smart contract testing (Hardhat, Foundry, Truffle)",
                "Blockchain event & indexer validation",
                "Cross-chain bridge testing",
                "Performance testing (Locust, K6)",
                "RAG system architecture",
                "LLM application development & AI agents",
                "LangChain / LangGraph workflows",
                "Vector database architecture (Chroma, Pinecone, FAISS)",
                "CI/CD pipeline engineering (Azure DevOps, GitHub Actions)",
                "Docker multi-container testing frameworks",
                "Distributed systems & blockchain infrastructure",
                "End-to-End test architecture (API → contract → DB)",
              ].map((skill, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-sky-600 mt-0.5 shrink-0">▸</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">Professional Experience</h4>
            <div className="space-y-6">
              {/* Gluwa */}
              <div className="relative pl-4 border-l-2 border-[#2a2d3a] hover:border-sky-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-white font-medium">Gluwa</span>
                  <span className="text-slate-500 text-xs">Nov 2021 – Feb 2026 | Remote</span>
                </div>
                <div className="text-sky-400 text-xs mb-3">Senior Software Engineer in Test (AI Systems & Blockchain Infrastructure)</div>
                <div className="text-slate-400 space-y-2.5">
                  <p>Software engineer responsible for testing, reliability engineering, and AI-assisted infrastructure tooling across distributed blockchain systems including Creditcoin (Substrate), EVM smart contract infrastructure, and Solana integrations.</p>
                  <p>Led development of AI-powered engineering assistants and blockchain observability systems, combining LLM pipelines, semantic retrieval, and infrastructure telemetry to improve debugging and operational workflows for distributed engineering teams.</p>
                  <p>Designed Retrieval-Augmented Generation (RAG) architectures where blockchain telemetry, infrastructure logs, smart contract repositories, and internal engineering documentation were chunked, embedded with semantic embedding models, indexed into Chroma vector databases, and retrieved through similarity search during AI reasoning workflows.</p>
                  <p>Built LangChain-based AI agents capable of retrieving engineering context, querying vector stores, analyzing logs, and generating explanations for infrastructure incidents.</p>
                  <p>Developed Python-based AI services integrated with CI/CD pipelines capable of analyzing build failures, deployment issues, and infrastructure anomalies across distributed blockchain environments.</p>
                  <p>Implemented AI-assisted smart contract security workflows where Solidity contracts were parsed, embedded, indexed, and compared against known vulnerability patterns to assist engineers during security audits.</p>
                  <ul className="space-y-1 ml-1">
                    {[
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
                    ].map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-600 mt-0.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* OnlyPump removed — work completed Feb 2026 */}

              {/* Hxro Labs */}
              <div className="relative pl-4 border-l-2 border-[#2a2d3a] hover:border-sky-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-white font-medium">Hxro Labs</span>
                  <span className="text-slate-500 text-xs">Nov 2020 – Oct 2021 | Remote</span>
                </div>
                <div className="text-sky-400 text-xs mb-3">Software Engineer (Trading Infrastructure & Automation)</div>
                <div className="text-slate-400 space-y-2.5">
                  <p>Engineering contributor to Hxro, one of the first binary options trading platforms built on the Solana blockchain, supporting real-time trading workflows and high-frequency market data.</p>
                  <p>Designed and implemented comprehensive testing infrastructure from scratch to ensure reliability of backend APIs, trading systems, and frontend user interfaces in a latency-sensitive financial environment.</p>
                  <ul className="space-y-1 ml-1">
                    {[
                      "Developed a Python-based automation framework used to validate trading APIs, transaction flows, and backend services handling real-time market data and trading events",
                      "Built automated validation systems verifying: order submission and execution flows, market data integrity, transaction validation logic, and backend state consistency during trading operations",
                      "Implemented frontend automation using Playwright, creating end-to-end test suites validating real user trading workflows including order placement, market interactions, and UI behavior during live trading conditions",
                      "Later extended the automation system to support AI-assisted test orchestration, integrating MCP-based workflows allowing intelligent generation and execution of frontend tests",
                      "Integrated testing infrastructure with CI/CD pipelines, enabling automated validation of releases before deployment to production trading environments",
                      "Worked closely with backend and protocol engineers to ensure system stability across real-time trading infrastructure built on Solana",
                    ].map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-600 mt-0.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Dust Foundation */}
              <div className="relative pl-4 border-l-2 border-[#2a2d3a] hover:border-sky-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-white font-medium">Dust Foundation</span>
                  <span className="text-slate-500 text-xs">Apr 2021 – Aug 2021</span>
                </div>
                <div className="text-sky-400 text-xs mb-3">Blockchain Developer (Part-Time)</div>
                <div className="text-slate-400 space-y-2.5">
                  <p>Developed decentralized exchange components for ERC-20 token ecosystems.</p>
                  <p>Implemented Solidity smart contracts using Truffle and Ganache testing frameworks.</p>
                  <p>Optimized contract storage layout and gas efficiency while maintaining security best practices.</p>
                </div>
              </div>

              {/* Apple */}
              <div className="relative pl-4 border-l-2 border-[#2a2d3a] hover:border-sky-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-white font-medium">Apple (Hogarth)</span>
                  <span className="text-slate-500 text-xs">Feb 2020 – Jul 2020</span>
                </div>
                <div className="text-sky-400 text-xs mb-3">QA Engineer (Contract)</div>
                <div className="text-slate-400 space-y-2.5">
                  <p>Worked with cross-functional engineering teams supporting Apple web and mobile product ecosystems.</p>
                  <ul className="space-y-1 ml-1">
                    {[
                      "Developed Python and Selenium WebDriver automation scripts for apple.com critical workflows",
                      "Performed API testing and backend validation verifying data integrity and service responses",
                      "Executed regression testing and system validation for iOS and Android product-related web services",
                    ].map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-600 mt-0.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* RideCell */}
              <div className="relative pl-4 border-l-2 border-[#2a2d3a] hover:border-sky-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-white font-medium">RideCell</span>
                  <span className="text-slate-500 text-xs">May 2019 – Jan 2020</span>
                </div>
                <div className="text-sky-400 text-xs mb-3">QA Automation Engineer</div>
                <div className="text-slate-400 space-y-2.5">
                  <p>Designed automated UI testing frameworks using the Page Object Model.</p>
                  <p>Implemented automated test pipelines integrated with CI systems improving deployment confidence.</p>
                </div>
              </div>

              {/* Tally */}
              <div className="relative pl-4 border-l-2 border-[#2a2d3a] hover:border-sky-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-white font-medium">Tally Technologies</span>
                  <span className="text-slate-500 text-xs">May 2018 – May 2019</span>
                </div>
                <div className="text-sky-400 text-xs mb-3">QA Engineer</div>
                <div className="text-slate-400 space-y-2.5">
                  <p>Performed API testing, SQL validation, and web testing for fintech applications.</p>
                  <p>Collaborated with developers to improve reliability of financial platform features.</p>
                </div>
              </div>

              {/* Infomatrix */}
              <div className="relative pl-4 border-l-2 border-[#2a2d3a] hover:border-sky-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-white font-medium">Infomatrix Global Inc.</span>
                  <span className="text-slate-500 text-xs">Sep 2016 – May 2018</span>
                </div>
                <div className="text-sky-400 text-xs mb-3">QA Engineer</div>
                <div className="text-slate-400 space-y-2.5">
                  <p>Tested web and mobile applications across Android and iOS platforms.</p>
                  <p>Designed test plans and executed detailed validation workflows ensuring software quality.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Stack */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">Technical Stack</h4>
            <div className="space-y-2.5 text-slate-400">
              <div><span className="text-slate-200 font-medium">Programming Languages:</span> Python, TypeScript, JavaScript, Solidity, Rust, C#, Java, SQL</div>
              <div><span className="text-slate-200 font-medium">Testing &amp; Automation:</span> Playwright (+ MCP AI-driven), Python automation frameworks, C# RestSharp, Hardhat / Foundry / Truffle, API automation, E2E testing, Selenium WebDriver</div>
              <div><span className="text-slate-200 font-medium">Performance Testing:</span> Locust, K6, Substrate pallet benchmarking</div>
              <div><span className="text-slate-200 font-medium">AI Systems &amp; Frameworks:</span> RAG architectures, agentic AI, LangChain, LangGraph, embedding pipelines, prompt engineering, LLM evaluation, AI workflow automation</div>
              <div><span className="text-slate-200 font-medium">Vector Databases:</span> Chroma, Pinecone, Weaviate, Qdrant, Milvus, FAISS</div>
              <div><span className="text-slate-200 font-medium">LLM Platforms:</span> OpenAI API, Anthropic API, Ollama, local/open-source LLM integration</div>
              <div><span className="text-slate-200 font-medium">Backend &amp; Infrastructure:</span> FastAPI, Node.js, Docker, Kubernetes, Redis, Linux, GitHub Actions, Jenkins, Azure DevOps</div>
              <div><span className="text-slate-200 font-medium">Blockchain:</span> Ethereum (EVM), Solana, Substrate, Hardhat, Anchor, Foundry</div>
              <div><span className="text-slate-200 font-medium">Databases:</span> PostgreSQL, MySQL</div>
            </div>
          </div>

          {/* Selected AI Projects */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">Selected AI Projects</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <span className="text-sky-600 mt-0.5 shrink-0">▸</span>
                <div>
                  <span className="text-slate-200 font-medium">OpenAudit AI</span>
                  <span className="text-slate-500"> — </span>
                  <span className="text-slate-400">Built an open-source deterministic Solidity smart contract security analyzer combining AST-based static analysis, rule-engine driven findings, and an optional AI explanation layer for CI/CD-friendly security workflows.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sky-600 mt-0.5 shrink-0">▸</span>
                <div>
                  <span className="text-slate-200 font-medium">CodePilotAI</span>
                  <span className="text-slate-500"> — </span>
                  <span className="text-slate-400">Developed an AI interview preparation platform with simulated coding environments, modern AI engineering exercises, LLM-assisted evaluation, and recruiter-aligned coding challenge practice.</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-sky-600 mt-0.5 shrink-0">▸</span>
                <div>
                  <span className="text-slate-200 font-medium">Jarvis AI Assistant</span>
                  <span className="text-slate-500"> — </span>
                  <span className="text-slate-400">Designed a cross-device AI assistant orchestrator connecting phone, laptop, desktop, browser, and future smart devices through a FastAPI backend, agent protocol, and LLM-powered orchestration layer.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-3">Education</h4>
            <p className="text-slate-400 leading-relaxed">
              Self-taught and bootcamp-trained engineer who chose a hands-on path into technology, investing years in building projects and mastering software engineering through continuous independent learning.
            </p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-slate-400 text-sm">
          Have questions about my background?{" "}
          <Link href="/" className="text-sky-400 hover:underline">
            Ask Anvar AI
          </Link>{" "}
          — it&apos;s powered by RAG over this exact resume.
        </p>
      </div>
    </div>
  );
}
