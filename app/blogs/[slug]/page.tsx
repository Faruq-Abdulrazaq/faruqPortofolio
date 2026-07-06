import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { marked } from "marked";
import { Navbar, Footer } from "@/main_components";
import { getPublishedSlugs, getPostBySlug, isPublished } from "@/lib/blog";

export const revalidate = 3600;

export function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !isPublished(post.date)) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      url: `/blogs/${post.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !isPublished(post.date)) notFound();

  const html = await marked.parse(post.content);

  return (
    <>
      <Navbar />
      <main id="top">
        <section className="section blog-post-head">
          <div className="container container-narrow">
            <Link href="/blogs" className="btn-link mono blog-back">
              ← all posts
            </Link>
            <div className="blog-card-meta mono" style={{ marginTop: "18px" }}>
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h1 style={{ marginTop: "14px" }}>{post.title}</h1>
            <p className="lead" style={{ marginTop: "14px" }}>
              {post.description}
            </p>
            <div className="blog-card-tags" style={{ marginTop: "18px" }}>
              {post.tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <div className="rule" />

        <section className="section">
          <div className="container container-narrow">
            <article
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
