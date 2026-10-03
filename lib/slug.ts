/** Same rules as `slugify` in fta_podcast_generator's podcast/library.py, so a
 * slug derived here is exactly the folder name the generator will use. */
export function slugify(text: string, fallback = "episode"): string {
  const slug = text
    .normalize("NFKD")
    .replace(/[^\x00-\x7F]/g, "")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || fallback;
}
