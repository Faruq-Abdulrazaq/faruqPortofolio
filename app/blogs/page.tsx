import type { Metadata } from "next";
import Link from "next/link";
import { Navbar, Footer } from "@/main_components";
import { getAllPosts } from "@/lib/blog";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from real production work — Firestore, TypeScript, React, Next.js, and the specific bugs that shipped before they were caught.",
  alternates: { canonical: "/blogs" },
};

const arrowIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogsPage() {
  const posts = getAllPosts();

  return (
    <>
      <Navbar />
      <main id="top">
        <section className="section blog-hero">
          <div className="container">
            <span className="eyebrow">WRITING</span>
            <h1 style={{ marginTop: "14px" }}>Notes from production.</h1>
            <p className="lead" style={{ marginTop: "14px" }}>
              Specific bugs, the code that caused them, and the fix — pulled
              straight from real work, not tutorials.
            </p>
          </div>
        </section>

        <div className="rule" />

        <section className="section">
          <div className="container">
            <div className="blog-grid">
              {posts.map((post) => (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-meta mono">
                    <span>{formatDate(post.date)}</span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3>
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p>{post.description}</p>
                  <div className="blog-card-tags">
                    {post.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/blogs/${post.slug}`} className="proj-cta">
                    read more {arrowIcon}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
