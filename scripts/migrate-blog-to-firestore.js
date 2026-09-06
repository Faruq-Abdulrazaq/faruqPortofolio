// One-off migration: content/blog/*.md -> Firestore (portfolio_blog_posts).
// Already run successfully (2026-09) — content/blog/*.md was deleted after.
// Kept as a historical record; to re-run against different source files,
// `npm install gray-matter` first (removed from package.json since nothing
// else uses it) and requires FIREBASE_PROJECT_ID / FIREBASE_CLIENT_EMAIL /
// FIREBASE_PRIVATE_KEY in .env.local.

const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const { loadEnvConfig } = require("@next/env");

loadEnvConfig(process.cwd());

const { cert, initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  }),
});
const db = getFirestore(app);

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const COLLECTION = "portfolio_blog_posts";

(async () => {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  console.log(`Found ${files.length} posts to migrate.`);

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);

    const existing = await db
      .collection(COLLECTION)
      .where("slug", "==", slug)
      .limit(1)
      .get();
    if (!existing.empty) {
      console.log(`skip (already exists): ${slug}`);
      continue;
    }

    const now = new Date();
    await db.collection(COLLECTION).add({
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      tags: data.tags ?? [],
      content: content.trim(),
      createdAt: now,
      updatedAt: now,
    });
    console.log(`migrated: ${slug}`);
  }

  console.log("Done.");
})();
