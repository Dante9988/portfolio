import type { Metadata } from "next";
import "../styles/globals.css";
import { Navbar } from "@/components/Navbar";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Anvar Baltakhojayev – AI Systems Engineer",
  description:
    "Portfolio of Anvar Baltakhojayev – AI Systems Engineer specializing in LLM integration, RAG pipelines, and distributed blockchain infrastructure.",
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
