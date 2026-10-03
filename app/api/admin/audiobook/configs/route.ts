import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getBucket } from "@/lib/firebase-admin";
import { addAudiobookConfig, getAudiobookConfigs } from "@/lib/firestore";
import { audiobookConfigSchema } from "@/lib/validations/audiobook-config";

export const runtime = "nodejs";

export async function GET() {
  const rows = await getAudiobookConfigs();
  return NextResponse.json(rows);
}

// multipart/form-data: the structured fields plus the EPUB file itself,
// uploaded straight to Firebase Storage (mirrors the note-taker's
// recording upload -- same body-size caveat under a serverless host).
export async function POST(req: NextRequest) {
  const form = await req.formData().catch(() => null);
  if (!form) {
    return NextResponse.json({ message: "Expected multipart/form-data" }, { status: 400 });
  }

  const epub = form.get("epub");
  if (!(epub instanceof File)) {
    return NextResponse.json({ message: "'epub' file is required" }, { status: 400 });
  }

  const parsed = audiobookConfigSchema.safeParse({
    title: form.get("title") ?? undefined,
    author: form.get("author") ?? undefined,
    slug: form.get("slug") ?? undefined,
    speed: form.get("speed") ?? undefined,
    seed: form.get("seed") ?? undefined,
    advancedJson: form.get("advancedJson") ?? undefined,
  });
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const buffer = Buffer.from(await epub.arrayBuffer());
  const storagePath = `audiobook/uploads/${randomUUID()}/${epub.name}`;
  const blob = getBucket().file(storagePath);
  await blob.save(buffer, { contentType: epub.type || "application/epub+zip" });
  await blob.makePublic();

  const row = await addAudiobookConfig({
    ...parsed.data,
    epubUrl: blob.publicUrl(),
    epubName: epub.name,
  });
  return NextResponse.json(row, { status: 201 });
}
