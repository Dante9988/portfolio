import { Download, FileText, Eye } from "lucide-react";
import Link from "next/link";

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Resume</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          Download a PDF copy of my resume or browse it inline below.
        </p>
      </div>

      {/* Download CTA */}
      <div className="card border-sky-500/30 bg-gradient-to-br from-sky-500/5 to-blue-600/5 mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
              <FileText className="text-sky-400" size={24} />
            </div>
            <div>
              <div className="text-white font-semibold">Anvar_Baltakhojayev_Resume.pdf</div>
              <div className="text-slate-400 text-sm">Updated March 2026</div>
            </div>
          </div>
          <div className="flex gap-3">
            <a
              href="/Anvar_Baltakhojayev_Resume.pdf"
              download
              className="btn-primary"
            >
              <Download size={16} /> Download PDF
            </a>
            <a href="/Anvar_Baltakhojayev_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Eye size={16} /> View
            </a>
          </div>
        </div>
      </div>

      {/* Resume text preview */}
      <div className="card">
        <h2 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
          <FileText size={18} className="text-sky-400" /> Resume Preview
        </h2>
        <div className="space-y-8 text-sm">
          {/* Contact */}
          <div className="text-center border-b border-[#2a2d3a] pb-6">
            <h3 className="text-2xl font-bold text-white mb-1">Anvar Baltakhojayev</h3>
            <p className="text-slate-400 text-xs">
              Austin, TX · github.com/Dante9988 · linkedin.com/in/anvarbaltakhojayev
            </p>
          </div>

          {/* Summary */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-3">Professional Summary</h4>
            <p className="text-slate-400 leading-relaxed">
              AI Systems Engineer and Distributed Backend Engineer with 10+ years of experience across blockchain infrastructure,
              real-time financial systems, AI-powered automation, and scalable backend architectures. Progressed from QA engineering
              into backend and AI systems ownership.
            </p>
          </div>

          {/* Core Expertise */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-3">Core Expertise</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-400">
              {[
                "AI Systems Engineering (LLM, RAG, Vector Databases)",
                "Distributed Backend Architecture & Microservices",
                "Blockchain Infrastructure (EVM, Solana, Substrate)",
                "Transaction Processing & State Validation",
                "AI Agents & Tool Orchestration",
                "REST / GraphQL / WebSocket Architectures",
                "CI/CD Automation & Observability",
                "Performance Testing & Reliability Engineering",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-sky-600 mt-0.5">▸</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">Experience</h4>
            <div className="space-y-5">
              {[
                {
                  company: "OnlyPumpMe",
                  role: "AI Systems Engineer | Distributed Backend | ML Infrastructure",
                  period: "Jun 2021 – Present",
                  bullets: [
                    "Built AI-powered analytics and decision-support systems integrating LLMs and on-chain data",
                    "RAG-based intelligence pipelines using embeddings and vector databases",
                    "AI agents for sentiment analysis, portfolio insights, and operational automation",
                    "Distributed backend infra: TypeScript, NestJS, blockchain SDK integrations",
                  ],
                },
                {
                  company: "Gluwa",
                  role: "Software Engineer (AI & Distributed Systems)",
                  period: "Nov 2021 – Present",
                  bullets: [
                    "Designed distributed validation infrastructure for multi-chain blockchain systems (Ethereum, BNB Chain, Bitcoin, Substrate)",
                    "Built AI-powered backend services for failure analysis, CI/CD diagnostics, and release monitoring",
                    "Implemented RAG-based internal knowledge systems accelerating debugging workflows",
                    "Developed Python-based AI agents for log analysis, anomaly detection, and operational health evaluation",
                    "Validated cross-chain relayers, bridges, indexers, and transaction pipelines",
                    "Optimized CI/CD pipelines with containerization, parallel execution, and environment isolation",
                  ],
                },
                {
                  company: "Hxro Labs",
                  role: "Software Engineer (Backend & Distributed Systems)",
                  period: "Nov 2020 – Oct 2021",
                  bullets: [
                    "Contributed to backend infrastructure of a real-time binary options trading platform",
                    "Built REST API and WebSocket validation services for real-time market data streams",
                    "Implemented transaction validation logic and edge-case handling for financial workflows",
                    "Integrated backend services into GitLab CI/CD pipelines for reliability validation",
                  ],
                },
                {
                  company: "Dust Foundation",
                  role: "Blockchain Developer (Part-Time)",
                  period: "Apr 2021 – Aug 2021",
                  bullets: [
                    "DEX components for ERC-20 tokens; Truffle and Ganache smart contracts",
                    "Gas efficiency optimization and security best practices",
                  ],
                },
                {
                  company: "Apple (Hogarth)",
                  role: "QA Engineer (Contract)",
                  period: "Feb 2020 – Jul 2020",
                  bullets: [
                    "Cross-functional engineering teams: iOS and Android platform validation",
                    "Smoke, regression, and system-level testing; release readiness workflows",
                  ],
                },
                {
                  company: "RideCell",
                  role: "QA Automation Engineer",
                  period: "May 2019 – Jan 2020",
                  bullets: [
                    "Page Object Model automation frameworks; BDD workflows in CI pipelines",
                  ],
                },
                {
                  company: "Tally Technologies",
                  role: "QA Engineer",
                  period: "May 2018 – May 2019",
                  bullets: [
                    "API, SQL, and web validation testing for fintech systems",
                  ],
                },
                {
                  company: "Infomatrix Global Inc.",
                  role: "Software Quality Assurance Engineer",
                  period: "Sep 2016 – May 2018",
                  bullets: [
                    "Web and mobile testing (Android/iOS); test plan design and execution",
                  ],
                },
              ].map((exp) => (
                <div key={exp.company}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white font-medium">{exp.company}</span>
                    <span className="text-slate-500 text-xs">{exp.period}</span>
                  </div>
                  <div className="text-sky-400 text-xs mb-2">{exp.role}</div>
                  <ul className="space-y-1">
                    {exp.bullets.map((b, i) => (
                      <li key={i} className="text-slate-400 flex items-start gap-2">
                        <span className="text-sky-600 mt-0.5">▸</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">Technical Stack</h4>
            <div className="space-y-2 text-slate-400">
              <div><span className="text-slate-300">Languages:</span> Python, TypeScript, JavaScript, C#, Java, Solidity</div>
              <div><span className="text-slate-300">Backend & Infra:</span> Docker, Linux, GitHub Actions, Jenkins, Azure DevOps</div>
              <div><span className="text-slate-300">Blockchain:</span> EVM, Solana, Substrate, Hardhat, Anchor</div>
              <div><span className="text-slate-300">Databases:</span> PostgreSQL, MySQL</div>
              <div><span className="text-slate-300">AI/LLM:</span> OpenAI, Claude, RAG, Vector Databases, AI Agents</div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-4">Education</h4>
            <div>
              <div className="text-white font-medium">B.S. Computer Science · The University of Texas at Austin</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA to AI chat */}
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
