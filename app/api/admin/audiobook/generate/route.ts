import { NextRequest, NextResponse } from "next/server";
import { generateAudiobook, PodcastApiError } from "@/lib/podcast-api";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const configId = body?.configId;
  if (typeof configId !== "string" || !configId) {
    return NextResponse.json({ message: "configId is required" }, { status: 400 });
  }

  try {
    const { job_id } = await generateAudiobook(configId);
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
