import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import path from "path";

const RESUME_PATH = path.join(process.cwd(), "data", "Anvar_AI_Engineer_Linkedin.docx");
const FILENAME = "Anvar_Baltakhojayev_Resume.docx";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get("action");

  try {
    const file = await readFile(RESUME_PATH);

    const disposition =
      action === "view"
        ? `inline; filename="${FILENAME}"`
        : `attachment; filename="${FILENAME}"`;

    return new NextResponse(file, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": disposition,
        "Content-Length": file.length.toString(),
      },
    });
  } catch {
    return NextResponse.json({ error: "Resume file not found" }, { status: 404 });
  }
}
