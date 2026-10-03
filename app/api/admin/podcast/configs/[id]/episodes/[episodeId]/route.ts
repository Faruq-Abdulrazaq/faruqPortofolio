import { NextRequest, NextResponse } from "next/server";
import {
  deletePodcastEpisode,
  getPodcastEpisodeDoc,
  updatePodcastEpisode,
} from "@/lib/firestore";
import { podcastEpisodeSchema } from "@/lib/validations/podcast-episode";

export const runtime = "nodejs";

type Ctx = { params: Promise<{ id: string; episodeId: string }> };

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { id, episodeId } = await params;
  const row = await getPodcastEpisodeDoc(id, episodeId);
  if (!row) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json(row);
}

export async function PATCH(req: NextRequest, { params }: Ctx) {
  const { id, episodeId } = await params;
  const body = await req.json().catch(() => null);
  const parsed = podcastEpisodeSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const row = await updatePodcastEpisode(id, episodeId, parsed.data);
  if (!row) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json(row);
}

// Removes the episode: its script, its generated audio, its job history.
export async function DELETE(_req: NextRequest, { params }: Ctx) {
  const { id, episodeId } = await params;
  try {
    await deletePodcastEpisode(id, episodeId);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Delete failed";
    return NextResponse.json({ message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
