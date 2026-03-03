"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageSquare, X, Send, Copy, Check, Sparkles, ChevronDown } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

interface Citation {
  chunk_id: string;
  source: string;
  title: string;
  doc_type: string;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  citations?: Citation[];
  isStreaming?: boolean;
}

const QUICK_QUESTIONS = [
  "What does Anvar do at OnlyPump?",
  "Describe the AI analytics platform you built",
  "What's your experience with RAG and LangChain?",
  "Tell me about your Gluwa work",
  "What's your strongest tech stack?",
];

function TypingIndicator() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      <span className="typing-dot" />
      <span className="typing-dot" />
      <span className="typing-dot" />
    </div>
  );
}

function CitationBadges({ citations }: { citations: Citation[] }) {
  if (!citations.length) return null;
  return (
    <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-white/10">
      <span className="text-xs text-slate-500 w-full">Sources:</span>
      {citations.map((c) => (
        <span
          key={c.chunk_id}
          className="inline-flex items-center px-2 py-0.5 rounded-md text-xs
                     bg-sky-500/10 text-sky-400 border border-sky-500/20"
          title={c.source}
        >
          {c.doc_type === "resume" ? "📄" : c.doc_type === "about" ? "👤" : "🚀"} {c.title}
        </span>
      ))}
    </div>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handleCopy}
      className="mt-1.5 flex items-center gap-1 text-xs text-slate-500 hover:text-sky-400 transition-colors"
    >
      {copied ? <Check size={11} /> : <Copy size={11} />}
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div
      className={clsx(
        "chat-message-enter flex gap-3",
        isUser ? "flex-row-reverse" : "flex-row"
      )}
    >
      {/* Avatar */}
      {isUser ? (
        <div className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-xs font-semibold bg-sky-500/20 text-sky-400 border border-sky-500/30">
          U
        </div>
      ) : (
        <Image
          src="/me.png"
          alt="Anvar"
          width={28}
          height={28}
          className="w-7 h-7 rounded-full shrink-0 object-cover object-top border border-sky-500/30"
        />
      )}

      {/* Bubble */}
      <div className={clsx("max-w-[85%]", isUser ? "items-end" : "items-start")}>
        <div
          className={clsx(
            "rounded-2xl px-4 py-3 text-sm leading-relaxed",
            isUser
              ? "bg-sky-500/20 text-sky-100 rounded-tr-sm"
              : "bg-[#2a2d3a] text-slate-200 rounded-tl-sm"
          )}
        >
          {message.isStreaming && !message.content ? (
            <TypingIndicator />
          ) : (
            <div className="whitespace-pre-wrap">{message.content}</div>
          )}

          {message.citations && message.citations.length > 0 && (
            <CitationBadges citations={message.citations} />
          )}
        </div>

        {!isUser && message.content && !message.isStreaming && (
          <CopyButton text={message.content} />
        )}
      </div>
    </div>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hi! I'm Anvar AI — I can answer recruiter questions about Anvar Baltakhojayev's background, skills, and projects. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || loading) return;

      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: "user",
        content: text.trim(),
      };

      const assistantId = `assistant-${Date.now()}`;
      const assistantPlaceholder: Message = {
        id: assistantId,
        role: "assistant",
        content: "",
        isStreaming: true,
      };

      setMessages((prev) => [...prev, userMessage, assistantPlaceholder]);
      setInput("");
      setLoading(true);

      const history = messages
        .filter((m) => m.id !== "welcome")
        .map((m) => ({ role: m.role, content: m.content }));

      abortRef.current = new AbortController();

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text.trim(),
            history,
            stream: true,
          }),
          signal: abortRef.current.signal,
        });

        if (!response.ok || !response.body) {
          const err = await response.json().catch(() => ({ error: "Unknown error" }));
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? {
                    ...m,
                    content: err.error || "Something went wrong. Please try again.",
                    isStreaming: false,
                  }
                : m
            )
          );
          return;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let accumulated = "";
        let citations: Citation[] = [];

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          const lines = chunk.split("\n");

          for (const line of lines) {
            if (!line.startsWith("data:")) continue;
            const data = line.slice(5).trim();
            if (data === "[DONE]") break;

            try {
              const parsed = JSON.parse(data);
              if (parsed.type === "citations") {
                citations = parsed.citations;
              } else if (parsed.type === "token") {
                accumulated += parsed.content;
                setMessages((prev) =>
                  prev.map((m) =>
                    m.id === assistantId
                      ? { ...m, content: accumulated, isStreaming: true }
                      : m
                  )
                );
              } else if (parsed.type === "error") {
                accumulated = parsed.message || "An error occurred.";
              }
            } catch {
              // ignore malformed SSE lines
            }
          }
        }

        // Finalize
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: accumulated, isStreaming: false, citations }
              : m
          )
        );
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? {
                  ...m,
                  content: "Connection error. Make sure the FastAPI server is running.",
                  isStreaming: false,
                }
              : m
          )
        );
      } finally {
        setLoading(false);
        abortRef.current = null;
      }
    },
    [loading, messages]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className={clsx(
          "fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl shadow-2xl",
          "bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium text-sm",
          "hover:from-sky-400 hover:to-blue-500 transition-all duration-200",
          "hover:shadow-sky-500/25 hover:shadow-2xl hover:scale-105",
          open ? "hidden" : "flex"
        )}
      >
        <Sparkles size={16} />
        Ask Anvar AI
        <MessageSquare size={16} />
      </button>

      {/* Chat Drawer */}
      {open && (
        <div className="fixed bottom-0 right-0 z-50 flex flex-col w-full sm:w-[420px] sm:bottom-6 sm:right-6 sm:rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-[#2a2d3a] animate-slide-up"
          style={{ maxHeight: "calc(100vh - 5rem)", height: "600px" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#1a1d27] to-[#1e2235] border-b border-[#2a2d3a] shrink-0">
            <div className="flex items-center gap-3">
              <Image
                src="/me.png"
                alt="Anvar Baltakhojayev"
                width={32}
                height={32}
                className="w-8 h-8 rounded-xl object-cover object-top border border-sky-500/30"
              />
              <div>
                <div className="text-white font-semibold text-sm">Anvar AI</div>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                  </span>
                  <span className="text-slate-400 text-xs">Powered by RAG + GPT</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-[#2a2d3a]"
            >
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#0f1117]">
            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions (show only at start) */}
          {messages.length <= 1 && (
            <div className="px-4 py-3 bg-[#0f1117] border-t border-[#2a2d3a] shrink-0">
              <p className="text-xs text-slate-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    disabled={loading}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-[#1a1d27] hover:bg-[#2a2d3a]
                               text-slate-300 hover:text-white border border-[#2a2d3a] hover:border-sky-500/30
                               transition-all duration-150 disabled:opacity-50"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 px-4 py-3 bg-[#1a1d27] border-t border-[#2a2d3a] shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about experience, skills, projects..."
              disabled={loading}
              className="flex-1 bg-[#0f1117] border border-[#2a2d3a] rounded-xl px-4 py-2.5 text-white text-sm
                         placeholder:text-slate-500 focus:outline-none focus:border-sky-500/50 focus:ring-1
                         focus:ring-sky-500/20 transition-colors disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-xl bg-sky-500 hover:bg-sky-400 text-white flex items-center justify-center
                         transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              <Send size={15} />
            </button>
          </form>

          {/* Footer */}
          <div className="px-4 py-2 bg-[#1a1d27] border-t border-[#2a2d3a] shrink-0">
            <p className="text-xs text-slate-600 text-center">
              Answers grounded in resume + project data only · No hallucinations
            </p>
          </div>
        </div>
      )}

      {/* Backdrop for mobile */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
