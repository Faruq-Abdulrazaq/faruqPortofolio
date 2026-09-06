import readingTime from "reading-time";
import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/firestore";
import type { BlogPost as StoredBlogPost } from "@/types/blog";

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
};

export type BlogPost = BlogPostMeta & {
  content: string;
};

export function isPublished(date: string): boolean {
  return new Date(date).getTime() <= Date.now();
}

function toMeta(post: StoredBlogPost): BlogPostMeta {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    tags: post.tags,
    readingTime: readingTime(post.content).text,
  };
}

// Published posts only, newest first — used by the public /blogs list and
// generateStaticParams (so unpublished/future-dated posts are never
// statically generated or listed).
export async function getAllPosts(): Promise<BlogPostMeta[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((p) => isPublished(p.date)).map(toMeta);
}

export async function getPublishedSlugs(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  return posts.filter((p) => isPublished(p.date)).map((p) => p.slug);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = await getBlogPostBySlug(slug);
  if (!post) return null;
  return { ...toMeta(post), content: post.content };
}
