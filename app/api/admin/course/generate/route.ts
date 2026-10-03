import { NextRequest, NextResponse } from "next/server";
import { generateCourse, PodcastApiError } from "@/lib/podcast-api";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const configId = body?.configId;
  if (typeof configId !== "string" || !configId) {
    return NextResponse.json({ message: "configId is required" }, { status: 400 });
  }
  const lesson = typeof body?.lesson === "number" ? body.lesson : undefined;

  try {
    const { job_id } = await generateCourse(configId, lesson);
    return NextResponse.json({ jobId: job_id }, { status: 202 });
  } catch (err) {
    if (err instanceof PodcastApiError) {
      return NextResponse.json(
        { message: `Podcast service error: ${err.message}` },
        { status: 502 },
      );
    }
    throw err;
  }
}
