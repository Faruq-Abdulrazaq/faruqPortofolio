import { NextRequest, NextResponse } from "next/server";
import {
  deleteBlogPost,
  getBlogPostById,
  updateBlogPost,
} from "@/lib/firestore";
import { blogPostSchema } from "@/lib/validations/blog";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const post = await getBlogPostById(id);
  if (!post) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json(post);
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await req.json().catch(() => null);
  const parsed = blogPostSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const result = await updateBlogPost(id, parsed.data);
  if (!result.ok) {
    const status = result.reason === "Not found" ? 404 : 409;
    return NextResponse.json({ message: result.reason }, { status });
  }
  return NextResponse.json({ ok: true });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const deleted = await deleteBlogPost(id);
  if (!deleted) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
