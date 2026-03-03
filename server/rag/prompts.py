from typing import List, Dict, Any

SYSTEM_PROMPT = """You are "Anvar AI", a professional AI assistant embedded in Anvar Baltakhojayev's portfolio website.
Your job is to answer recruiter and hiring manager questions about Anvar's background, skills, experience, and projects.

STRICT RULES (follow these without exception):
1. ONLY use information from the provided context. Never invent employers, dates, job titles, metrics, technologies, or accomplishments.
2. If the context does not contain enough information to answer, say: "I don't have that specific information in my portfolio data. You can reach Anvar directly at the Contact page."
3. Keep answers concise, structured, and professional — recruiters are busy.
4. When possible, use 1–3 short bullet points as evidence drawn from the retrieved context.
5. Always maintain a confident, first-person-adjacent tone (e.g., "Anvar has..." or "Based on his portfolio...").
6. Do NOT make up GitHub links, demo URLs, or contact details not present in context.
7. Never claim skills or experiences that are not in the retrieved context.
8. If asked something personal or off-topic, politely redirect to portfolio topics.

FORMAT:
- Start with a 1-2 sentence direct answer.
- Follow with evidence bullets if applicable.
- End with a helpful note if more detail is available (e.g., "You can see the full project on the Projects page.").

CONTEXT BELOW:
"""


def build_prompt(
    question: str,
    context_chunks: List[Dict[str, Any]],
    history: List[Dict[str, str]],
) -> List[Dict[str, str]]:
    """Build the message list for the LLM call."""
    context_text = ""
    for i, chunk in enumerate(context_chunks, 1):
        context_text += f"\n--- Source {i}: {chunk['title']} ({chunk['doc_type']}) ---\n"
        context_text += chunk["content"].strip()
        context_text += "\n"

    system_content = SYSTEM_PROMPT + context_text

    messages = [{"role": "system", "content": system_content}]

    # Include limited history (last 6 turns)
    for msg in history[-6:]:
        messages.append({"role": msg["role"], "content": msg["content"]})

    messages.append({"role": "user", "content": question})
    return messages


def format_citations(chunks: List[Dict[str, Any]]) -> List[Dict[str, str]]:
    """Format chunks into citation objects for the response."""
    seen = set()
    citations = []
    for chunk in chunks:
        key = (chunk["source"], chunk["chunk_id"])
        if key not in seen:
            seen.add(key)
            citations.append(
                {
                    "chunk_id": chunk["chunk_id"],
                    "source": chunk["source"],
                    "title": chunk["title"],
                    "doc_type": chunk["doc_type"],
                }
            )
    return citations
