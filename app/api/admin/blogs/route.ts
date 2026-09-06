import { NextRequest, NextResponse } from "next/server";
import { addBlogPost, getAllBlogPosts } from "@/lib/firestore";
import { blogPostSchema } from "@/lib/validations/blog";

export async function GET() {
  const posts = await getAllBlogPosts();
  return NextResponse.json(posts);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = blogPostSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: "Invalid input", errors: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const result = await addBlogPost(parsed.data);
  if (!result.ok) {
    return NextResponse.json({ message: result.reason }, { status: 409 });
  }
  return NextResponse.json(result.post, { status: 201 });
}
