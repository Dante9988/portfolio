"use client";

import { useState } from "react";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate form submission — wire up to your own email service (Resend, Formspree, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">Contact</h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          I&apos;m open to Senior SDET, AI Systems Engineer, and blockchain infrastructure roles.
          Drop me a message or reach out on any of the channels below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact info */}
        <div className="space-y-4">
          {[
            {
              icon: <Mail size={18} className="text-sky-400" />,
              label: "Email",
              value: "xadja35@gmail.com",
              href: "mailto:xadja35@gmail.com",
            },
            {
              icon: <Github size={18} className="text-sky-400" />,
              label: "GitHub",
              value: "github.com/Dante9988",
              href: "https://github.com/Dante9988",
            },
            {
              icon: <Linkedin size={18} className="text-sky-400" />,
              label: "LinkedIn",
              value: "anvarbaltakhojayev",
              href: "https://linkedin.com/in/anvarbaltakhojayev",
            },
          ].map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="card flex items-center gap-3 hover:border-sky-500/40 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-sky-500/10 shrink-0">{contact.icon}</div>
              <div className="min-w-0">
                <div className="text-xs text-slate-500 uppercase tracking-wider">{contact.label}</div>
                <div className="text-sm text-slate-300 group-hover:text-sky-400 transition-colors truncate">
                  {contact.value}
                </div>
              </div>
            </a>
          ))}

          <div className="card bg-gradient-to-br from-sky-500/5 to-blue-600/5 border-sky-500/20">
            <h3 className="text-white font-medium text-sm mb-2">Currently available for:</h3>
            <ul className="text-slate-400 text-xs space-y-1">
              <li className="flex items-center gap-1.5">
                <span className="text-green-400">✓</span> Full-time roles
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-green-400">✓</span> Contract / consulting
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-green-400">✓</span> Fractional CTO / tech lead
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-2">
          {status === "sent" ? (
            <div className="card h-full flex flex-col items-center justify-center text-center py-16">
              <CheckCircle size={48} className="text-green-400 mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">Message sent!</h3>
              <p className="text-slate-400 text-sm">
                Thanks for reaching out. I&apos;ll get back to you within 1–2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-slate-400 uppercase tracking-wider mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#0f1117] border border-[#2a2d3a] rounded-lg px-4 py-2.5 text-white text-sm
                               focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/30 transition-colors"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 uppercase tracking-wider mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[#0f1117] border border-[#2a2d3a] rounded-lg px-4 py-2.5 text-white text-sm
                               focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/30 transition-colors"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-wider mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className="w-full bg-[#0f1117] border border-[#2a2d3a] rounded-lg px-4 py-2.5 text-white text-sm
                             focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/30 transition-colors"
                  placeholder="Interested in your background for Senior AI Engineer role"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#0f1117] border border-[#2a2d3a] rounded-lg px-4 py-2.5 text-white text-sm
                             focus:outline-none focus:border-sky-500/60 focus:ring-1 focus:ring-sky-500/30 transition-colors resize-none"
                  placeholder="Tell me about the opportunity..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
