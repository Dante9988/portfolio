import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const FASTAPI_URL = process.env.FASTAPI_URL || "http://localhost:8000";
  const body = await request.json();
  const stream = body.stream ?? true;

  const endpoint = stream ? "/api/chat/stream" : "/api/chat";

  try {
    const response = await fetch(`${FASTAPI_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json(
        { error: `Backend error: ${error}` },
        { status: response.status }
      );
    }

    if (stream) {
      // Forward the SSE stream to the client
      return new NextResponse(response.body, {
        status: 200,
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "X-Accel-Buffering": "no",
          Connection: "keep-alive",
        },
      });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json(
      {
        error: `Could not connect to AI backend. Make sure FastAPI is running (python -m uvicorn server.main:app). Details: ${message}`,
      },
      { status: 503 }
    );
  }
}
