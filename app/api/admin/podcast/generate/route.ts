import { NextRequest, NextResponse } from "next/server";
import { generatePodcast, PodcastApiError } from "@/lib/podcast-api";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const configId = body?.configId;
  const episodeId = body?.episodeId;
  if (typeof configId !== "string" || !configId || typeof episodeId !== "string" || !episodeId) {
    return NextResponse.json({ message: "configId and episodeId are required" }, { status: 400 });
  }

  try {
    const { job_id } = await generatePodcast(configId, episodeId);
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
