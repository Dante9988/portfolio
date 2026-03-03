import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="mb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
          </span>
          Open to new opportunities
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                Anvar
              </span>
              <br />
              <span className="text-3xl md:text-4xl text-slate-400 font-medium">
                AI Systems Engineer &amp; Distributed Backend
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
              I build AI-powered platforms that turn blockchain data into intelligence — RAG systems,
              LLM pipelines, vector databases, and multi-source signal processing on top of{" "}
              <span className="text-sky-400">Solana</span>,{" "}
              <span className="text-sky-400">Ethereum</span>, and{" "}
              <span className="text-sky-400">Substrate</span>.
              Currently building at{" "}
              <span className="text-sky-400">OnlyPump</span>. Previously{" "}
              <span className="text-sky-400">Gluwa</span>,{" "}
              <span className="text-sky-400">Hxro Labs</span>, and{" "}
              <span className="text-sky-400">Apple</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/projects" className="btn-primary">
                View Projects <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-secondary">
                <Mail size={16} /> Contact Me
              </Link>
              <a
                href="https://github.com/Dante9988"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/anvarbaltakhojayev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="shrink-0 flex justify-center md:justify-end">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-500/30 to-blue-600/30 blur-xl" />
              <Image
                src="/me.png"
                alt="Anvar Baltakhojayev"
                width={192}
                height={192}
                className="relative rounded-full object-cover object-top border-2 border-sky-500/30 shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "10+", label: "Years Experience" },
            { value: "1M+", label: "Lines of Code" },
            { value: "20+", label: "Production Systems" },
            { value: "8", label: "Companies" },
          ].map((stat) => (
            <div key={stat.label} className="card text-center">
              <div className="text-3xl font-bold text-sky-400 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills / Stack */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold text-white mb-8">Core Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              area: "🧠 AI / RAG / LLM (Strongest)",
              items: ["LangChain", "RAG Pipelines", "OpenAI API", "Claude", "Vector Databases", "Embeddings", "LLM Integration", "AI Agents", "Sentiment Analysis", "pgvector", "Tool Orchestration"],
            },
            {
              area: "⛓️ Blockchain & On-Chain",
              items: ["EVM", "Solana", "Substrate", "Pump.fun SDK", "Jito MEV", "ethers.js / viem", "Solidity / Hardhat", "Foundry", "Anchor", "Polkadot.js"],
            },
            {
              area: "⚙️ Backend & Infrastructure",
              items: ["Python", "TypeScript", "NestJS", "Node.js", "C# / .NET", "PostgreSQL", "Docker", "Azure DevOps", "GitHub Actions", "WebSocket", "REST / GraphQL"],
            },
          ].map((group) => (
            <div key={group.area} className="card">
              <h3 className="text-sky-400 font-semibold mb-4 text-sm uppercase tracking-wider">
                {group.area}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold text-white">Featured Projects</h2>
          <Link href="/projects" className="text-sky-400 hover:text-sky-300 text-sm flex items-center gap-1">
            All projects <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "🧠 OnlyPump – AI Crypto Analytics Platform",
              desc: "AI-powered decision-support platform on Pump.fun/Solana. Multi-source intelligence (X sentiment, on-chain wallet analysis, market data) processed through RAG pipelines and LLM-powered scoring models.",
              tags: ["AI", "RAG", "LangChain", "Solana", "Pump.fun"],
              href: "/projects/onlypump",
            },
            {
              title: "🔗 CCNext Cross-Chain Bridge Worker",
              desc: "Production off-chain worker bridging Ethereum → CCNext L2 via proof API orchestration, exponential backoff retry, and per-wallet nonce management.",
              tags: ["Cross-Chain", "NestJS", "ethers.js", "viem"],
              href: "/projects/ccnext-bridge-worker",
            },
            {
              title: "🤖 AI DevOps Workflow Bot",
              desc: "Slack bot using hybrid regex + OpenAI NLU to execute Azure DevOps pipelines from natural language commands with stateful confirmation flows.",
              tags: ["AI", "OpenAI", "NestJS", "Azure DevOps"],
              href: "/projects/ai-devops-workflow",
            },
            {
              title: "🛡️ TruChain – AI Content Verification on Blockchain",
              desc: "Decentralized AI content authenticity platform — GPT-4o analysis with on-chain proof storage via smart contracts and ERC-20 token payment system.",
              tags: ["AI", "GPT-4o", "Solidity", "NestJS", "Blockchain"],
              href: "/projects/truchain-ai-content-checker",
            },
          ].map((proj) => (
            <Link key={proj.title} href={proj.href} className="card group hover:border-sky-500/40 transition-colors duration-200">
              <h3 className="text-white font-semibold mb-2 group-hover:text-sky-400 transition-colors">
                {proj.title}
              </h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">{proj.desc}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* AI Chat CTA */}
      <section>
        <div className="card border-sky-500/30 bg-gradient-to-br from-sky-500/5 to-blue-600/5">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20">
              <Sparkles className="text-sky-400" size={24} />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">Ask Anvar AI</h3>
              <p className="text-slate-400 text-sm mb-4">
                Have questions? My AI assistant answers recruiter questions about my experience, projects,
                and skills — powered by RAG over my actual resume and project data. No hallucinations.
              </p>
              <p className="text-sky-400 text-sm font-medium">
                👇 Click the chat button in the bottom-right corner to get started.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
