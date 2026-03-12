import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Anvar Baltakhojayev – Senior SDET & AI Systems Engineer",
  description:
    "Portfolio of Anvar Baltakhojayev – Senior Software Engineer in Test & AI Systems Engineer. 10+ years in test automation, blockchain infrastructure, RAG pipelines, and AI-assisted developer tooling.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <ChatWidget />
      </body>
    </html>
  );
}
