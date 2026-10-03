import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getBucket } from "@/lib/firebase-admin";
import { createNotetakerJob } from "@/lib/firestore";
import { PodcastApiError, processNotetaker } from "@/lib/podcast-api";

export const runtime = "nodejs";

// Streams the recording straight to Firebase Storage, creates its job doc,
// then asks the FastAPI service to transcribe + summarize it.
//
// Note: Route Handlers have no built-in body-size limit the way the old
// pages/api did, but a host you deploy behind may impose its own (e.g.
// Vercel's ~4.5MB request body cap) -- fine for local dev per the current
// plan, but a real blocker if this is ever deployed serverless; the fix
// then is a direct-to-Storage signed upload from the browser instead.
export async function POST(req: NextRequest) {
  const form = await req.formData().catch(() => null);
  if (!form) {
    return NextResponse.json({ message: "Expected multipart/form-data" }, { status: 400 });
  }

  const file = form.get("recording");
  if (!(file instanceof File)) {
    return NextResponse.json({ message: "'recording' file is required" }, { status: 400 });
  }
  const configId = form.get("configId");

  const buffer = Buffer.from(await file.arrayBuffer());
  const storagePath = `notetaker/uploads/${randomUUID()}/${file.name}`;
  const blob = getBucket().file(storagePath);
  await blob.save(buffer, { contentType: file.type || "application/octet-stream" });
  await blob.makePublic();

  const job = await createNotetakerJob({
    configId: typeof configId === "string" && configId ? configId : undefined,
    recordingUrl: blob.publicUrl(),
    recordingName: file.name,
  });

  try {
    await processNotetaker(job.id);
  } catch (err) {
    const message = err instanceof PodcastApiError ? err.message : "failed to start processing";
    return NextResponse.json(
      { jobId: job.id, warning: `Recording uploaded, but ${message}` },
      { status: 202 },
    );
  }

  return NextResponse.json({ jobId: job.id }, { status: 202 });
}
