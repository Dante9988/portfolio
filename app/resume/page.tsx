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
            <p className="text-sky-400 text-sm mb-2">Senior AI Systems Engineer</p>
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
                Senior AI Systems Engineer and Full-Stack Backend Engineer with 10+ years of experience building distributed systems, AI infrastructure, and blockchain platforms. Specialized in designing production AI systems using Python, Retrieval-Augmented Generation (RAG), vector databases, agentic AI architectures, and LLM-integrated backend services.
              </p>
              <p>
                Expert in integrating LLM reasoning with real infrastructure including CI/CD pipelines, developer tooling, blockchain transaction systems, interview simulation platforms, and smart contract security analysis workflows. Strong engineering background across Python, TypeScript, FastAPI, distributed backend architecture, AI orchestration, and developer-facing platforms used to build scalable AI-powered services.
              </p>
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-3">Core Skills</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-400">
              {[
                "AI systems engineering",
                "LLM application development",
                "Agentic AI systems and orchestration",
                "RAG system architecture",
                "Vector database architecture",
                "Semantic embedding pipelines",
                "Prompt engineering and LLM evaluation",
                "AI infrastructure and observability",
                "LangChain / LangGraph workflows",
                "FastAPI and TypeScript backend services",
                "AI DevOps and workflow automation",
                "Distributed backend systems",
                "REST / GraphQL / WebSocket APIs",
                "Blockchain infrastructure (EVM, Solana, Substrate)",
                "Smart contract security analysis",
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
                  <span className="text-slate-500 text-xs">Nov 2021 – Feb 2026</span>
                </div>
                <div className="text-sky-400 text-xs mb-3">Senior Software Engineer (AI Systems & Blockchain Infrastructure)</div>
                <div className="text-slate-400 space-y-2.5">
                  <p>Led development of AI-powered DevOps and blockchain engineering systems used by distributed engineering teams.</p>
                  <p>Designed Retrieval-Augmented Generation (RAG) architectures where blockchain telemetry, infrastructure logs, smart contract codebases, and engineering documentation were chunked, embedded using semantic embedding models, indexed into Chroma vector databases, and retrieved via similarity search during AI agent reasoning workflows.</p>
                  <p>Developed Python-based AI services that integrate with CI/CD pipelines to automatically analyze build failures, deployment issues, and operational anomalies across distributed blockchain infrastructure.</p>
                  <p>Built LangChain-based AI agents capable of retrieving engineering context, querying vector stores, analyzing logs, and generating explanations for infrastructure incidents.</p>
                  <p>Implemented AI-assisted smart contract security workflows where Solidity contracts were parsed, embedded, indexed, and compared against known vulnerability patterns to assist engineers during security audits.</p>
                  <p>Worked extensively on blockchain infrastructure including:</p>
                  <ul className="space-y-1 ml-1">
                    {[
                      "Transaction validation systems",
                      "Blockchain indexers and event pipelines",
                      "Cross-chain relayers and bridges",
                      "Smart contract integration testing frameworks",
                      "Distributed event processing systems",
                    ].map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-600 mt-0.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p>Built internal developer tooling using Python and TypeScript enabling engineers to query operational systems using AI-assisted semantic search and diagnostics.</p>
                </div>
              </div>

              {/* OnlyPump */}
              <div className="relative pl-4 border-l-2 border-[#2a2d3a] hover:border-sky-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-white font-medium">OnlyPump</span>
                  <span className="text-slate-500 text-xs">Jun 2021 – Feb 2026</span>
                </div>
                <div className="text-sky-400 text-xs mb-3">AI Systems Engineer</div>
                <div className="text-slate-400 space-y-2.5">
                  <p>Built AI analytics and automation systems for blockchain token ecosystems and decentralized trading infrastructure.</p>
                  <p>Designed RAG pipelines where blockchain events, token metadata, trading activity, operational signals, and social trend data were chunked, embedded into vector representations, indexed within vector stores, and retrieved during AI agent reasoning to generate contextual insights.</p>
                  <p>Developed Python AI backend services ingesting real-time blockchain events and transforming them into structured data pipelines used by AI analytics systems.</p>
                  <p>Implemented LangChain-based agent workflows enabling LLM agents to retrieve on-chain data, query vector databases, analyze token performance, and generate operational insights for developers and platform operators.</p>
                  <p>Designed distributed backend infrastructure integrating Python AI services with TypeScript blockchain microservices processing large volumes of on-chain events.</p>
                </div>
              </div>

              {/* Hxro Labs */}
              <div className="relative pl-4 border-l-2 border-[#2a2d3a] hover:border-sky-500/40 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                  <span className="text-white font-medium">Hxro Labs</span>
                  <span className="text-slate-500 text-xs">Nov 2020 – Oct 2021</span>
                </div>
                <div className="text-sky-400 text-xs mb-3">Software Engineer</div>
                <div className="text-slate-400 space-y-2.5">
                  <p>Developed backend infrastructure for a real-time financial trading platform.</p>
                  <p>Built REST APIs and validation services processing real-time market data streams.</p>
                  <p>Implemented transaction validation logic and backend systems supporting financial trading workflows.</p>
                  <p>Integrated backend validation services into CI/CD pipelines to ensure reliability of production releases.</p>
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
                  <p>Worked with cross-functional engineering teams supporting iOS and Android products.</p>
                  <p>Executed regression testing, system validation, and release readiness workflows for mobile applications.</p>
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
              <div><span className="text-slate-200 font-medium">Programming Languages:</span> Python, TypeScript, JavaScript, Solidity, C#, Java, SQL</div>
              <div><span className="text-slate-200 font-medium">AI Systems & Frameworks:</span> RAG architectures, agentic AI systems, semantic search, embedding pipelines, prompt engineering, LLM evaluation, LangChain, LangGraph, AI workflow automation, AI observability</div>
              <div><span className="text-slate-200 font-medium">Vector Databases:</span> Chroma, Pinecone, Weaviate, Qdrant, Milvus, FAISS</div>
              <div><span className="text-slate-200 font-medium">LLM Platforms:</span> OpenAI API, Anthropic API, Ollama, local/open-source LLM integration</div>
              <div><span className="text-slate-200 font-medium">Backend & Infrastructure:</span> FastAPI, Node.js, Docker, Kubernetes, Redis, Linux, GitHub Actions, Jenkins, Azure DevOps</div>
              <div><span className="text-slate-200 font-medium">Blockchain:</span> Ethereum (EVM), Solana, Substrate, Hardhat, Anchor</div>
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
            <div className="text-white font-medium">B.S. Computer Science</div>
            <div className="text-slate-400 text-xs">The University of Texas at Austin</div>
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
