import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Clock, Briefcase } from "lucide-react";

interface ProjectData {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  stack: string[];
  github?: string;
  demo?: string;
  role?: string;
  period?: string;
  content: string;
}

function getProject(slug: string): ProjectData | null {
  const projectsDir = path.join(process.cwd(), "data", "projects");
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".md"));

  for (const filename of files) {
    const filePath = path.join(projectsDir, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const fileSlug = data.slug || filename.replace(".md", "");

    if (fileSlug === slug) {
      return {
        slug: fileSlug,
        title: data.title || slug,
        summary: data.summary || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        stack: Array.isArray(data.stack) ? data.stack : [],
        github: data.github || "",
        demo: data.demo || "",
        role: data.role || "",
        period: data.period || "",
        content,
      };
    }
  }
  return null;
}

export function generateStaticParams() {
  const projectsDir = path.join(process.cwd(), "data", "projects");
  const files = fs.readdirSync(projectsDir).filter((f) => f.endsWith(".md"));
  return files.map((filename) => {
    const raw = fs.readFileSync(path.join(projectsDir, filename), "utf-8");
    const { data } = matter(raw);
    return { slug: data.slug || filename.replace(".md", "") };
  });
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const htmlContent = marked(project.content) as string;

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Back */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors text-sm mb-10"
      >
        <ArrowLeft size={16} /> All Projects
      </Link>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-4">{project.title}</h1>
        <p className="text-slate-400 text-lg leading-relaxed mb-6">{project.summary}</p>

        <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
          {project.role && (
            <span className="flex items-center gap-1.5">
              <Briefcase size={14} className="text-sky-400" />
              {project.role}
            </span>
          )}
          {project.period && (
            <span className="flex items-center gap-1.5">
              <Clock size={14} className="text-sky-400" />
              {project.period}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-3">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <Github size={16} /> GitHub
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Stack */}
      {project.stack.length > 0 && (
        <div className="card mb-10">
          <h3 className="text-sky-400 text-sm font-semibold uppercase tracking-wider mb-3">Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Markdown Content */}
      <article
        className="prose prose-invert prose-slate max-w-none
          prose-headings:text-white prose-headings:font-semibold
          prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
          prose-p:text-slate-400 prose-p:leading-relaxed
          prose-li:text-slate-400
          prose-strong:text-white
          prose-code:text-sky-300 prose-code:bg-slate-800/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-pre:bg-[#1a1d27] prose-pre:border prose-pre:border-[#2a2d3a]
          prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline
          prose-hr:border-[#2a2d3a]"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
}
