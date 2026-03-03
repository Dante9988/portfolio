import json
import asyncio
from typing import List, AsyncGenerator

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from server.config import get_settings
from server.db import init_db
from server.rag.retriever import retrieve_chunks, get_embeddings
from server.rag.prompts import build_prompt, format_citations

app = FastAPI(title="Anvar Portfolio API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup_event():
    try:
        init_db()
        print("Database initialized successfully.")
    except Exception as e:
        print(f"Warning: Could not initialize DB on startup: {e}")


class Message(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str
    history: List[Message] = []
    stream: bool = False


class Citation(BaseModel):
    chunk_id: str
    source: str
    title: str
    doc_type: str


class ChatResponse(BaseModel):
    answer: str
    citations: List[Citation]


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/api/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    settings = get_settings()

    if not settings.openai_api_key:
        raise HTTPException(status_code=500, detail="OPENAI_API_KEY is not configured.")

    from openai import OpenAI

    # 1. Embed the user query
    try:
        embeddings = get_embeddings([request.message], settings)
        query_embedding = embeddings[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Embedding failed: {e}")

    # 2. Retrieve relevant chunks
    try:
        chunks = retrieve_chunks(query_embedding, top_k=settings.top_k)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Retrieval failed: {e}")

    # 3. Build prompt
    history = [{"role": m.role, "content": m.content} for m in request.history]
    messages = build_prompt(request.message, chunks, history)

    # 4. Call LLM
    client = OpenAI(
        api_key=settings.openai_api_key,
        base_url=settings.openai_base_url,
    )

    try:
        completion = client.chat.completions.create(
            model=settings.openai_model,
            messages=messages,
            max_tokens=800,
            temperature=0.3,
        )
        answer = completion.choices[0].message.content or ""
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"LLM call failed: {e}")

    citations = format_citations(chunks)

    return ChatResponse(answer=answer, citations=citations)


@app.post("/api/chat/stream")
async def chat_stream(request: ChatRequest):
    settings = get_settings()

    if not settings.openai_api_key:
        raise HTTPException(status_code=500, detail="OPENAI_API_KEY is not configured.")

    from openai import OpenAI

    # 1. Embed query
    try:
        embeddings = get_embeddings([request.message], settings)
        query_embedding = embeddings[0]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Embedding failed: {e}")

    # 2. Retrieve chunks
    try:
        chunks = retrieve_chunks(query_embedding, top_k=settings.top_k)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Retrieval failed: {e}")

    history = [{"role": m.role, "content": m.content} for m in request.history]
    messages = build_prompt(request.message, chunks, history)
    citations = format_citations(chunks)

    client = OpenAI(
        api_key=settings.openai_api_key,
        base_url=settings.openai_base_url,
    )

    async def event_generator() -> AsyncGenerator[str, None]:
        # First, send citations as a metadata event
        yield f"data: {json.dumps({'type': 'citations', 'citations': citations})}\n\n"

        try:
            stream = client.chat.completions.create(
                model=settings.openai_model,
                messages=messages,
                max_tokens=800,
                temperature=0.3,
                stream=True,
            )
            for chunk in stream:
                delta = chunk.choices[0].delta
                if delta.content:
                    yield f"data: {json.dumps({'type': 'token', 'content': delta.content})}\n\n"
                    await asyncio.sleep(0)  # yield control to event loop
        except Exception as e:
            yield f"data: {json.dumps({'type': 'error', 'message': str(e)})}\n\n"

        yield "data: [DONE]\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "X-Accel-Buffering": "no",
        },
    )
