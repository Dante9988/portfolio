import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const SI = (slug: string) => `https://cdn.simpleicons.org/${slug}/38bdf8`;
const DI = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${path}.svg`;

const techStack = {
  "Languages": [
    { name: "Python", icon: DI("python/python-original") },
    { name: "TypeScript", icon: DI("typescript/typescript-original") },
    { name: "JavaScript", icon: DI("javascript/javascript-original") },
    { name: "Rust", icon: DI("rust/rust-original") },
    { name: "Solidity", icon: SI("solidity") },
    { name: "C#", icon: DI("csharp/csharp-original") },
    { name: "Java", icon: DI("java/java-original") },
  ],
  "AI / ML Infrastructure": [
    { name: "OpenAI", icon: "/icons/openai.svg" },
    { name: "Anthropic", icon: SI("anthropic") },
    { name: "LangChain", icon: SI("langchain") },
    { name: "RAG", icon: "/icons/rag.svg" },
    { name: "Vector DB", icon: "/icons/vectordb.svg" },
    { name: "Ollama", icon: SI("ollama") },
    { name: "Hugging Face", icon: SI("huggingface") },
    { name: "PyTorch", icon: DI("pytorch/pytorch-original") },
  ],
  "Backend & Databases": [
    { name: "Node.js", icon: DI("nodejs/nodejs-original") },
    { name: "NestJS", icon: DI("nestjs/nestjs-original") },
    { name: "FastAPI", icon: DI("fastapi/fastapi-original") },
    { name: ".NET", icon: DI("dotnetcore/dotnetcore-original") },
    { name: "PostgreSQL", icon: DI("postgresql/postgresql-original") },
    { name: "Redis", icon: DI("redis/redis-original") },
  ],
  "Blockchain": [
    { name: "Ethereum", icon: SI("ethereum") },
    { name: "Solana", icon: SI("solana") },
    { name: "Hardhat", icon: DI("hardhat/hardhat-original") },
  ],
  "Frontend": [
    { name: "React", icon: DI("react/react-original") },
    { name: "Next.js", icon: DI("nextjs/nextjs-original") },
    { name: "Tailwind", icon: DI("tailwindcss/tailwindcss-original") },
  ],
  "Infrastructure": [
    { name: "Docker", icon: DI("docker/docker-original") },
    { name: "Kubernetes", icon: DI("kubernetes/kubernetes-original") },
    { name: "GitHub Actions", icon: DI("githubactions/githubactions-original") },
    { name: "Linux", icon: DI("linux/linux-original") },
    { name: "Git", icon: DI("git/git-original") },
    { name: "Bash", icon: DI("bash/bash-original") },
  ],
};

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
                Senior AI Systems Engineer
              </span>
            </h1>

            <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed">
              10+ years building production AI systems, distributed backend infrastructure,
              and blockchain platforms — RAG architectures, agentic AI workflows, LLM orchestration,
              vector databases, smart contract security analysis, and cross-chain systems on{" "}
              <span className="text-sky-400">Ethereum</span>,{" "}
              <span className="text-sky-400">Solana</span>, and{" "}
              <span className="text-sky-400">Substrate</span>.
              Previously at{" "}
              <span className="text-sky-400">OnlyPump</span>,{" "}
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
            { value: "1M+", label: "Lines of Code" },
            { value: "10+", label: "Years in Engineering" },
            { value: "4+", label: "AI/LLM Systems Built" },
            { value: "8", label: "Companies" },
          ].map((stat) => (
            <div key={stat.label} className="card text-center">
              <div className="text-3xl font-bold text-sky-400 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold text-white mb-8">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="card">
              <h3 className="text-sky-400 font-semibold mb-5 text-sm uppercase tracking-wider">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center gap-1.5 w-16 group"
                    title={tech.name}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#0f1117] border border-[#2a2d3a] group-hover:border-sky-500/40 transition-colors duration-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        width={24}
                        height={24}
                        className="w-6 h-6"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-[10px] text-slate-500 text-center leading-tight group-hover:text-slate-300 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Expertise */}
      <section className="mb-24">
        <h2 className="text-2xl font-semibold text-white mb-8">Core Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              area: "AI Engineering",
              items: ["RAG Pipelines", "LLM Orchestration", "Vector Databases (pgvector)", "LangChain", "OpenAI API", "Anthropic API", "Embeddings", "Prompt Engineering", "Ollama / Meta Llama", "AI Agents", "Hugging Face"],
            },
            {
              area: "Blockchain Engineering",
              items: ["Solidity / Hardhat / Foundry", "EVM (ethers.js / viem)", "Solana / Pump.fun / Jito", "Substrate / Polkadot.js", "Smart Contracts", "Cross-Chain Bridges", "DeFi Infrastructure"],
            },
            {
              area: "Backend & Systems",
              items: ["Python (FastAPI)", "TypeScript (NestJS)", "PostgreSQL", "Redis", "Docker", "Kubernetes", "C# / .NET", "WebSocket", "REST APIs", "Distributed Systems"],
            },
            {
              area: "Reliability & Automation",
              items: ["CI/CD Architecture", "Infrastructure Tooling", "System Validation", "Azure Pipelines", "GitHub Actions", "Developer Workflow Automation"],
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
              title: "OnlyPump – AI Investment Intelligence Platform",
              desc: "AI-powered investment platform on Pump.fun/Solana that adapts to each user's risk profile. Multi-source intelligence, RAG pipelines, and scoring models statistically validated through backtesting with Sharpe ratio and Monte Carlo analysis.",
              tags: ["AI", "RAG", "Backtesting", "Solana", "Pump.fun"],
              href: "/projects/onlypump",
            },
            {
              title: "AI DevOps Workflow Bot",
              desc: "RAG-augmented Slack bot with vector DB retrieval, multi-provider LLM support (OpenAI, Anthropic, Ollama), and Kubernetes pod management through structured natural language commands.",
              tags: ["AI", "RAG", "LangChain", "Kubernetes", "Ollama"],
              href: "/projects/ai-devops-workflow",
            },
            {
              title: "CodePilot AI – Interview Prep Platform",
              desc: "Open-source AI coding platform with 100 problems, 9 languages, AI coaching modes, code execution via Judge0, and context-aware mentor chat.",
              tags: ["AI", "Open Source", "Next.js", "FastAPI", "Judge0"],
              href: "/projects/codepilot-ai",
            },
            {
              title: "TruChain – AI Content Verification on Blockchain",
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
                Have questions? My AI assistant answers questions about my experience, projects,
                and technical skills — powered by a RAG pipeline over my actual resume and project data.
              </p>
              <p className="text-sky-400 text-sm font-medium">
                Click the chat button in the bottom-right corner to get started.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
