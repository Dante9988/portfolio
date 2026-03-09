import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface ProjectMeta {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  stack: string[];
  github?: string;
  demo?: string;
  role?: string;
  period?: string;
}

const PROJECT_ORDER: string[] = [
  "onlypump",
  "ai-devops-workflow",
  "codepilot-ai",
  "openaudit-ai",
  "truchain-ai-content-checker",
  "portfolio-ai",
  "ccnext-bridge-worker",
  "airdrop-claim",
  "dex-tools",
  "polymarket-bot",
  "substrate-explorer",
];

function getProjects(): ProjectMeta[] {
  const projectsDir = path.join(process.cwd(), "data", "projects");
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".md"));

  const projects = files.map((filename) => {
    const filePath = path.join(projectsDir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    return {
      slug: data.slug || filename.replace(".md", ""),
      title: data.title || filename.replace(".md", ""),
      summary: data.summary || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      stack: Array.isArray(data.stack) ? data.stack : [],
      github: data.github || "",
      demo: data.demo || "",
      role: data.role || "",
      period: data.period || "",
    };
  });

  projects.sort((a, b) => {
    const ai = PROJECT_ORDER.indexOf(a.slug);
    const bi = PROJECT_ORDER.indexOf(b.slug);
    return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
  });

  return projects;
}

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Projects</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          A curated selection of projects I&apos;ve built — spanning AI systems, blockchain infrastructure,
          DeFi tooling, and backend engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="card hover:border-sky-500/40 transition-all duration-200 group"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="text-xl font-semibold text-white group-hover:text-sky-400 transition-colors"
                >
                  {project.title}
                </Link>
                {project.role && (
                  <p className="text-sky-400/80 text-sm mt-1">
                    {project.role}
                    {project.period && ` · ${project.period}`}
                  </p>
                )}
              </div>
              <div className="flex gap-3 shrink-0">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.summary}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="text-sky-400 hover:text-sky-300 text-sm flex items-center gap-1 transition-colors"
            >
              Read more <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
