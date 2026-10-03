import { NextRequest, NextResponse } from "next/server";
import { randomUUID } from "crypto";
import { getBucket } from "@/lib/firebase-admin";
import {
  deleteAudiobookConfig,
  getAudiobookConfigById,
  updateAudiobookConfig,
} from "@/lib/firestore";
import { audiobookConfigSchema } from "@/lib/validations/audiobook-config";

export const runtime = "nodejs";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const row = await getAudiobookConfigById(id);
  if (!row) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(row);
}

// The EPUB is optional on edit -- omit it to keep the one already uploaded.
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const existing = await getAudiobookConfigById(id);
  if (!existing) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const form = await req.formData().catch(() => null);
  if (!form) {
    return NextResponse.json({ message: "Expected multipart/form-data" }, { status: 400 });
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

  let epubUrl = existing.epubUrl;
  let epubName = existing.epubName;
  const epub = form.get("epub");
  if (epub instanceof File && epub.size > 0) {
    const buffer = Buffer.from(await epub.arrayBuffer());
    const storagePath = `audiobook/uploads/${randomUUID()}/${epub.name}`;
    const blob = getBucket().file(storagePath);
    await blob.save(buffer, { contentType: epub.type || "application/epub+zip" });
    await blob.makePublic();
    epubUrl = blob.publicUrl();
    epubName = epub.name;
  }

  const row = await updateAudiobookConfig(id, { ...parsed.data, epubUrl, epubName });
  if (!row) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(row);
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const ok = await deleteAudiobookConfig(id);
  if (!ok) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
