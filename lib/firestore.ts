import type { DocumentSnapshot } from "firebase-admin/firestore";
import { getBucket, getDb } from "./firebase-admin";
import { slugify } from "./slug";
import type { Client, Invoice, InvoiceItem } from "@/types/invoice";
import type { BlogPost } from "@/types/blog";
import type {
  AudiobookAudio,
  AudiobookConfig,
  AudiobookView,
  BookChapter,
  CourseConfig,
  CourseLesson,
  CourseLessonView,
  CourseView,
  Job,
  NotetakerConfig,
  PodcastConfig,
  PodcastEpisode,
  PodcastEpisodeAudio,
  PodcastEpisodeDoc,
  JobPending,
} from "@/types/podcast";

export const COL = {
  clients: "portfolio_clients",
  invoices: "portfolio_invoices",
  blogPosts: "portfolio_blog_posts",
  podcastConfigs: "podcast_configs",
  courseConfigs: "course_configs",
  notetakerConfigs: "notetaker_configs",
  audiobookConfigs: "audiobook_configs",
  jobs: "jobs",
} as const;

function toIso(value: unknown): string | undefined {
  if (!value) return undefined;
  if (value instanceof Date) return value.toISOString();
  if (typeof (value as { toDate?: () => Date }).toDate === "function") {
    return (value as { toDate: () => Date }).toDate().toISOString();
  }
  return undefined;
}

function clientFromDoc(doc: DocumentSnapshot): Client {
  const data = doc.data()!;
  return {
    id: doc.id,
    name: data.name,
    email: data.email,
    company: data.company ?? undefined,
    address: data.address ?? undefined,
    createdAt: toIso(data.createdAt) ?? new Date().toISOString(),
  };
}

function invoiceFromDoc(doc: DocumentSnapshot): Invoice {
  const data = doc.data()!;
  return {
    id: doc.id,
    invoiceNumber: data.invoiceNumber,
    clientId: data.clientId,
    status: data.status,
    currency: data.currency,
    issueDate: data.issueDate,
    dueDate: data.dueDate ?? undefined,
    notes: data.notes ?? undefined,
    publicToken: data.publicToken,
    paystackReference: data.paystackReference ?? undefined,
    paidAt: toIso(data.paidAt),
    items: (data.items ?? []) as InvoiceItem[],
    createdAt: toIso(data.createdAt) ?? new Date().toISOString(),
    updatedAt: toIso(data.updatedAt) ?? new Date().toISOString(),
  };
}

// Clients

export type ClientInput = {
  name: string;
  email: string;
  company?: string;
  address?: string;
};

export async function getClients(): Promise<Client[]> {
  const snap = await getDb()
    .collection(COL.clients)
    .orderBy("createdAt", "desc")
    .get();
  return snap.docs.map(clientFromDoc);
}

export async function getClientById(id: string): Promise<Client | null> {
  const doc = await getDb().collection(COL.clients).doc(id).get();
  return doc.exists ? clientFromDoc(doc) : null;
}

export async function addClient(input: ClientInput): Promise<Client> {
  const ref = getDb().collection(COL.clients).doc();
  const now = new Date();
  await ref.set({ ...input, createdAt: now });
  const doc = await ref.get();
  return clientFromDoc(doc);
}

export async function updateClient(
  id: string,
  input: ClientInput,
): Promise<Client | null> {
  const ref = getDb().collection(COL.clients).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return null;
  await ref.update({ ...input });
  const updated = await ref.get();
  return clientFromDoc(updated);
}

export async function deleteClient(
  id: string,
): Promise<{ ok: boolean; reason?: string }> {
  const invoicesSnap = await getDb()
    .collection(COL.invoices)
    .where("clientId", "==", id)
    .limit(1)
    .get();
  if (!invoicesSnap.empty) {
    return { ok: false, reason: "Cannot delete a client with existing invoices" };
  }
  const doc = await getDb().collection(COL.clients).doc(id).get();
  if (!doc.exists) return { ok: false, reason: "Not found" };
  await doc.ref.delete();
  return { ok: true };
}

// Invoices

export type InvoiceInput = {
  clientId: string;
  currency: string;
  issueDate: string;
  dueDate?: string | null;
  notes?: string | null;
  items: InvoiceItem[];
};

export async function getInvoices(): Promise<Invoice[]> {
  const snap = await getDb()
    .collection(COL.invoices)
    .orderBy("createdAt", "desc")
    .get();
  return snap.docs.map(invoiceFromDoc);
}

export async function getInvoiceById(id: string): Promise<Invoice | null> {
  const doc = await getDb().collection(COL.invoices).doc(id).get();
  return doc.exists ? invoiceFromDoc(doc) : null;
}

export async function getInvoiceByToken(token: string): Promise<Invoice | null> {
  const snap = await getDb()
    .collection(COL.invoices)
    .where("publicToken", "==", token)
    .limit(1)
    .get();
  if (snap.empty) return null;
  return invoiceFromDoc(snap.docs[0]);
}

export async function getInvoiceByPaystackRef(
  reference: string,
): Promise<Invoice | null> {
  const snap = await getDb()
    .collection(COL.invoices)
    .where("paystackReference", "==", reference)
    .limit(1)
    .get();
  if (snap.empty) return null;
  return invoiceFromDoc(snap.docs[0]);
}

// Standard Firestore prefix-range trick for a "starts with" query: pairing
// >= prefix with < prefix-plus-a-high-codepoint matches every string that
// starts with prefix, since  sorts after any normal character.
export async function getInvoiceNumbersForYear(year: number): Promise<string[]> {
  const prefix = "INV-" + String(year) + "-";
  const upperBound = prefix + "";
  const snap = await getDb()
    .collection(COL.invoices)
    .where("invoiceNumber", ">=", prefix)
    .where("invoiceNumber", "<=", upperBound)
    .get();
  return snap.docs.map((d) => d.data().invoiceNumber as string);
}

export async function addInvoice(input: {
  invoiceNumber: string;
  publicToken: string;
  clientId: string;
  currency: string;
  issueDate: string;
  dueDate?: string | null;
  notes?: string | null;
  items: InvoiceItem[];
}): Promise<Invoice> {
  const ref = getDb().collection(COL.invoices).doc();
  const now = new Date();
  await ref.set({
    invoiceNumber: input.invoiceNumber,
    publicToken: input.publicToken,
    clientId: input.clientId,
    status: "draft",
    currency: input.currency,
    issueDate: input.issueDate,
    dueDate: input.dueDate ?? null,
    notes: input.notes ?? null,
    items: input.items,
    paystackReference: null,
    paidAt: null,
    createdAt: now,
    updatedAt: now,
  });
  const doc = await ref.get();
  return invoiceFromDoc(doc);
}

export async function updateInvoice(
  id: string,
  input: InvoiceInput,
): Promise<{ ok: boolean; reason?: string }> {
  const ref = getDb().collection(COL.invoices).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return { ok: false, reason: "Not found" };
  if (doc.data()?.status !== "draft") {
    return { ok: false, reason: "Only draft invoices can be edited" };
  }
  await ref.update({
    clientId: input.clientId,
    currency: input.currency,
    issueDate: input.issueDate,
    dueDate: input.dueDate ?? null,
    notes: input.notes ?? null,
    items: input.items,
    updatedAt: new Date(),
  });
  return { ok: true };
}

export async function deleteInvoiceIfDraft(
  id: string,
): Promise<{ ok: boolean; reason?: string }> {
  const ref = getDb().collection(COL.invoices).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return { ok: false, reason: "Not found" };
  if (doc.data()?.status !== "draft") {
    return { ok: false, reason: "Only draft invoices can be deleted" };
  }
  await ref.delete();
  return { ok: true };
}

export async function markInvoiceSent(
  id: string,
): Promise<{ ok: boolean; reason?: string }> {
  const ref = getDb().collection(COL.invoices).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return { ok: false, reason: "Not found" };
  if (doc.data()?.status !== "draft") {
    return { ok: false, reason: "Only draft invoices can be sent" };
  }
  await ref.update({ status: "sent", updatedAt: new Date() });
  return { ok: true };
}

export async function setInvoicePaystackReference(
  id: string,
  reference: string,
): Promise<void> {
  await getDb()
    .collection(COL.invoices)
    .doc(id)
    .update({ paystackReference: reference, updatedAt: new Date() });
}

// Blog posts

function blogPostFromDoc(doc: DocumentSnapshot): BlogPost {
  const data = doc.data()!;
  return {
    id: doc.id,
    slug: data.slug,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: (data.tags ?? []) as string[],
    content: data.content,
    createdAt: toIso(data.createdAt) ?? new Date().toISOString(),
    updatedAt: toIso(data.updatedAt) ?? new Date().toISOString(),
  };
}

export type BlogPostInput = {
  title: string;
  slug: string;
  description: string;
  date: string;
  tags: string[];
  content: string;
};

// All posts, admin view — includes unpublished/future-dated ones.
export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const snap = await getDb()
    .collection(COL.blogPosts)
    .orderBy("date", "desc")
    .get();
  return snap.docs.map(blogPostFromDoc);
}

export async function getBlogPostById(id: string): Promise<BlogPost | null> {
  const doc = await getDb().collection(COL.blogPosts).doc(id).get();
  return doc.exists ? blogPostFromDoc(doc) : null;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const snap = await getDb()
    .collection(COL.blogPosts)
    .where("slug", "==", slug)
    .limit(1)
    .get();
  if (snap.empty) return null;
  return blogPostFromDoc(snap.docs[0]);
}

async function isSlugTaken(slug: string, excludeId?: string): Promise<boolean> {
  const snap = await getDb()
    .collection(COL.blogPosts)
    .where("slug", "==", slug)
    .limit(2)
    .get();
  return snap.docs.some((d) => d.id !== excludeId);
}

export async function addBlogPost(
  input: BlogPostInput,
): Promise<{ ok: true; post: BlogPost } | { ok: false; reason: string }> {
  if (await isSlugTaken(input.slug)) {
    return { ok: false, reason: "A post with this slug already exists" };
  }
  const ref = getDb().collection(COL.blogPosts).doc();
  const now = new Date();
  await ref.set({ ...input, createdAt: now, updatedAt: now });
  const doc = await ref.get();
  return { ok: true, post: blogPostFromDoc(doc) };
}

export async function updateBlogPost(
  id: string,
  input: BlogPostInput,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  const ref = getDb().collection(COL.blogPosts).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return { ok: false, reason: "Not found" };
  if (await isSlugTaken(input.slug, id)) {
    return { ok: false, reason: "A post with this slug already exists" };
  }
  await ref.update({ ...input, updatedAt: new Date() });
  return { ok: true };
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const ref = getDb().collection(COL.blogPosts).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return false;
  await ref.delete();
  return true;
}

// Podcast / course / note-taker
//
// fta_podcast_generator's Config.from_dict builds the dataclass via
// `cls(**raw)`, so a podcast config doc's "advanced" fields (cast, pattern,
// performance, pronunciations, normalize_dashes) are stored FLAT on the doc,
// not nested -- Python reads the whole doc as one dict. Course configs are
// different: podcast.course.Course.from_dict explicitly picks known fields
// off the doc, so "defaults" nests normally, and each lesson's own
// "advanced" fields sit flat on that lesson entry (they become
// Lesson.overrides, merged into that lesson's Config the same way).

function parseAdvancedJson(json: string | undefined): Record<string, unknown> {
  if (!json || !json.trim()) return {};
  return JSON.parse(json);
}

/** Drops any key whose value is "", undefined or null, so an unset admin
 * field is genuinely absent from the doc rather than stored as null.
 * Several of these (speed, in particular) aren't Optional on the Python
 * side and get regex-validated unconditionally -- Config.from_dict(**raw)
 * with speed=None crashes with "expected string or bytes-like object"
 * where an absent key would have just fallen through to its dataclass
 * default ("+0%"). */
function compact<T extends Record<string, unknown>>(fields: T): Partial<T> {
  const out: Partial<T> = {};
  for (const [k, v] of Object.entries(fields)) {
    if (v === "" || v === undefined || v === null) continue;
    (out as Record<string, unknown>)[k] = v;
  }
  return out;
}

// Podcast configs (a podcast's shared settings; its scripts are episodes)

export type PodcastConfigInput = {
  title: string;
  speed?: string;
  seed?: number;
  advancedJson?: string;
};

// Fields that used to live on the podcast before it had episodes.
const LEGACY_PODCAST_KEYS = ["subtitle", "episode", "name", "scriptText"];

function podcastConfigFromDoc(doc: DocumentSnapshot): PodcastConfig {
  const data = doc.data()!;
  const { title, speed, seed, createdAt, updatedAt, ...advanced } = data;
  for (const key of LEGACY_PODCAST_KEYS) delete advanced[key];
  return {
    id: doc.id,
    title,
    speed: speed ?? undefined,
    seed: seed ?? undefined,
    advanced: Object.keys(advanced).length ? advanced : undefined,
    createdAt: toIso(createdAt) ?? new Date().toISOString(),
    updatedAt: toIso(updatedAt) ?? new Date().toISOString(),
  };
}

export async function getPodcastConfigs(): Promise<PodcastConfig[]> {
  const snap = await getDb()
    .collection(COL.podcastConfigs)
    .orderBy("createdAt", "desc")
    .get();
  return snap.docs.map(podcastConfigFromDoc);
}

export async function getPodcastConfigById(id: string): Promise<PodcastConfig | null> {
  const doc = await getDb().collection(COL.podcastConfigs).doc(id).get();
  return doc.exists ? podcastConfigFromDoc(doc) : null;
}

export async function addPodcastConfig(input: PodcastConfigInput): Promise<PodcastConfig> {
  const ref = getDb().collection(COL.podcastConfigs).doc();
  const now = new Date();
  await ref.set({
    title: input.title,
    ...compact({ speed: input.speed, seed: input.seed }),
    ...parseAdvancedJson(input.advancedJson),
    createdAt: now,
    updatedAt: now,
  });
  const doc = await ref.get();
  return podcastConfigFromDoc(doc);
}

export async function updatePodcastConfig(
  id: string,
  input: PodcastConfigInput,
): Promise<PodcastConfig | null> {
  const ref = getDb().collection(COL.podcastConfigs).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return null;
  // set() replaces the doc, which is what we want (a cleared field must
  // really disappear); the episodes subcollection isn't affected.
  await ref.set({
    title: input.title,
    ...compact({ speed: input.speed, seed: input.seed }),
    ...parseAdvancedJson(input.advancedJson),
    createdAt: doc.data()?.createdAt ?? new Date(),
    updatedAt: new Date(),
  });
  const updated = await ref.get();
  return podcastConfigFromDoc(updated);
}

/** Deletes the podcast and everything under it: episodes, their generated
 * audio in Storage, and job history. */
export async function deletePodcastConfig(id: string): Promise<boolean> {
  const ref = getDb().collection(COL.podcastConfigs).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return false;
  const episodes = await ref.collection("episodes").get();
  for (const ep of episodes.docs) await deletePodcastEpisode(id, ep.id);
  await getBucket().deleteFiles({ prefix: `podcast/${id}/` }); // anything left over
  await ref.delete();
  return true;
}

// Course configs

export type CourseLessonInput = {
  title: string;
  scriptText: string;
  objectives?: string; // one per line; split on save
  challenge?: string;
  overridesJson?: string;
};

export type CourseConfigInput = {
  title: string;
  subtitle?: string;
  slug?: string;
  outcome?: string;
  defaultsJson?: string;
  lessons: CourseLessonInput[];
};

function toLessonDoc(lesson: CourseLessonInput) {
  return {
    title: lesson.title,
    scriptText: lesson.scriptText,
    objectives: (lesson.objectives || "")
      .split("\n")
      .map((s) => s.trim())
      .filter(Boolean),
    challenge: lesson.challenge || null,
    ...parseAdvancedJson(lesson.overridesJson),
  };
}

function lessonFromDocData(raw: Record<string, unknown>): CourseLesson {
  const { title, scriptText, objectives, challenge, ...overrides } = raw;
  return {
    title: (title as string) ?? "",
    scriptText: (scriptText as string) ?? "",
    objectives: Array.isArray(objectives) ? (objectives as string[]) : [],
    challenge: (challenge as string) ?? undefined,
    overrides: Object.keys(overrides).length ? overrides : undefined,
  };
}

function courseConfigFromDoc(doc: DocumentSnapshot): CourseConfig {
  const data = doc.data()!;
  return {
    id: doc.id,
    title: data.title,
    subtitle: data.subtitle ?? undefined,
    slug: data.slug ?? undefined,
    outcome: data.outcome ?? undefined,
    defaults: data.defaults && Object.keys(data.defaults).length ? data.defaults : undefined,
    lessons: ((data.lessons ?? []) as Record<string, unknown>[]).map(lessonFromDocData),
    createdAt: toIso(data.createdAt) ?? new Date().toISOString(),
    updatedAt: toIso(data.updatedAt) ?? new Date().toISOString(),
  };
}

export async function getCourseConfigs(): Promise<CourseConfig[]> {
  const snap = await getDb()
    .collection(COL.courseConfigs)
    .orderBy("createdAt", "desc")
    .get();
  return snap.docs.map(courseConfigFromDoc);
}

export async function getCourseConfigById(id: string): Promise<CourseConfig | null> {
  const doc = await getDb().collection(COL.courseConfigs).doc(id).get();
  return doc.exists ? courseConfigFromDoc(doc) : null;
}

export async function addCourseConfig(input: CourseConfigInput): Promise<CourseConfig> {
  const ref = getDb().collection(COL.courseConfigs).doc();
  const now = new Date();
  await ref.set({
    title: input.title,
    subtitle: input.subtitle || null,
    slug: input.slug || slugify(input.title, "course"),
    outcome: input.outcome || null,
    defaults: parseAdvancedJson(input.defaultsJson),
    lessons: input.lessons.map(toLessonDoc),
    createdAt: now,
    updatedAt: now,
  });
  const doc = await ref.get();
  return courseConfigFromDoc(doc);
}

export async function updateCourseConfig(
  id: string,
  input: CourseConfigInput,
): Promise<CourseConfig | null> {
  const ref = getDb().collection(COL.courseConfigs).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return null;
  await ref.set({
    title: input.title,
    subtitle: input.subtitle || null,
    slug: input.slug || slugify(input.title, "course"),
    outcome: input.outcome || null,
    defaults: parseAdvancedJson(input.defaultsJson),
    lessons: input.lessons.map(toLessonDoc),
    createdAt: doc.data()?.createdAt ?? new Date(),
    updatedAt: new Date(),
  });
  const updated = await ref.get();
  return courseConfigFromDoc(updated);
}

/** Deletes the course and everything generated for it: the lesson audio in
 * Storage, and job history. */
export async function deleteCourseConfig(id: string): Promise<boolean> {
  const ref = getDb().collection(COL.courseConfigs).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return false;
  await getBucket().deleteFiles({ prefix: `course/${id}/` });
  const jobs = await getDb().collection(COL.jobs).where("configId", "==", id).get();
  const batch = getDb().batch();
  for (const j of jobs.docs) if (j.data().type === "course") batch.delete(j.ref);
  batch.delete(ref);
  await batch.commit();
  return true;
}

// Note-taker configs

export type NotetakerConfigInput = {
  name: string;
  promptTemplate: string;
  expectedSpeakers?: number;
  language?: string;
};

function notetakerConfigFromDoc(doc: DocumentSnapshot): NotetakerConfig {
  const data = doc.data()!;
  return {
    id: doc.id,
    name: data.name,
    promptTemplate: data.promptTemplate,
    expectedSpeakers: data.expectedSpeakers ?? undefined,
    language: data.language ?? undefined,
    createdAt: toIso(data.createdAt) ?? new Date().toISOString(),
    updatedAt: toIso(data.updatedAt) ?? new Date().toISOString(),
  };
}

export async function getNotetakerConfigs(): Promise<NotetakerConfig[]> {
  const snap = await getDb()
    .collection(COL.notetakerConfigs)
    .orderBy("createdAt", "desc")
    .get();
  return snap.docs.map(notetakerConfigFromDoc);
}

export async function getNotetakerConfigById(id: string): Promise<NotetakerConfig | null> {
  const doc = await getDb().collection(COL.notetakerConfigs).doc(id).get();
  return doc.exists ? notetakerConfigFromDoc(doc) : null;
}

export async function addNotetakerConfig(
  input: NotetakerConfigInput,
): Promise<NotetakerConfig> {
  const ref = getDb().collection(COL.notetakerConfigs).doc();
  const now = new Date();
  await ref.set({ ...input, createdAt: now, updatedAt: now });
  const doc = await ref.get();
  return notetakerConfigFromDoc(doc);
}

export async function updateNotetakerConfig(
  id: string,
  input: NotetakerConfigInput,
): Promise<NotetakerConfig | null> {
  const ref = getDb().collection(COL.notetakerConfigs).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return null;
  await ref.update({ ...input, updatedAt: new Date() });
  const updated = await ref.get();
  return notetakerConfigFromDoc(updated);
}

export async function deleteNotetakerConfig(id: string): Promise<boolean> {
  const ref = getDb().collection(COL.notetakerConfigs).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return false;
  await ref.delete();
  return true;
}

// Audiobook configs
//
// The EPUB is uploaded straight to Firebase Storage by the route handler
// (see app/api/admin/audiobook/configs/route.ts) -- this only persists the
// resulting epubUrl/epubName alongside the rest of the config. "advanced"
// fields (narrator, skip/keep, pauses, ...) are flat on the doc, same
// reasoning as podcast configs: podcast.audiobook.BookConfig.from_dict also
// builds its dataclass via `cls(**body)`.

export type AudiobookConfigInput = {
  title?: string;
  author?: string;
  slug?: string;
  speed?: string;
  seed?: number;
  advancedJson?: string;
  epubUrl: string;
  epubName: string;
};

function audiobookConfigFromDoc(doc: DocumentSnapshot): AudiobookConfig {
  const data = doc.data()!;
  const {
    title, author, slug, speed, seed, epubUrl, epubName,
    createdAt, updatedAt, ...advanced
  } = data;
  return {
    id: doc.id,
    title: title ?? undefined,
    author: author ?? undefined,
    slug: slug ?? undefined,
    speed: speed ?? undefined,
    seed: seed ?? undefined,
    epubUrl: epubUrl ?? "",
    epubName: epubName ?? "",
    advanced: Object.keys(advanced).length ? advanced : undefined,
    createdAt: toIso(createdAt) ?? new Date().toISOString(),
    updatedAt: toIso(updatedAt) ?? new Date().toISOString(),
  };
}

export async function getAudiobookConfigs(): Promise<AudiobookConfig[]> {
  const snap = await getDb()
    .collection(COL.audiobookConfigs)
    .orderBy("createdAt", "desc")
    .get();
  return snap.docs.map(audiobookConfigFromDoc);
}

export async function getAudiobookConfigById(id: string): Promise<AudiobookConfig | null> {
  const doc = await getDb().collection(COL.audiobookConfigs).doc(id).get();
  return doc.exists ? audiobookConfigFromDoc(doc) : null;
}

export async function addAudiobookConfig(
  input: AudiobookConfigInput,
): Promise<AudiobookConfig> {
  const ref = getDb().collection(COL.audiobookConfigs).doc();
  const now = new Date();
  await ref.set({
    ...compact({
      title: input.title, author: input.author,
      slug: input.slug || (input.title ? slugify(input.title, "book") : undefined),
      speed: input.speed, seed: input.seed,
    }),
    epubUrl: input.epubUrl,
    epubName: input.epubName,
    ...parseAdvancedJson(input.advancedJson),
    createdAt: now,
    updatedAt: now,
  });
  const doc = await ref.get();
  return audiobookConfigFromDoc(doc);
}

export async function updateAudiobookConfig(
  id: string,
  input: AudiobookConfigInput,
): Promise<AudiobookConfig | null> {
  const ref = getDb().collection(COL.audiobookConfigs).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return null;
  await ref.set({
    ...compact({
      title: input.title, author: input.author,
      slug: input.slug || (input.title ? slugify(input.title, "book") : undefined),
      speed: input.speed, seed: input.seed,
    }),
    epubUrl: input.epubUrl,
    epubName: input.epubName,
    ...parseAdvancedJson(input.advancedJson),
    createdAt: doc.data()?.createdAt ?? new Date(),
    updatedAt: new Date(),
  });
  const updated = await ref.get();
  return audiobookConfigFromDoc(updated);
}

/** Deletes the audiobook config, its generated audio, and the uploaded EPUB. */
export async function deleteAudiobookConfig(id: string): Promise<boolean> {
  const ref = getDb().collection(COL.audiobookConfigs).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return false;
  await deleteAudiobookAudio(id);

  // The EPUB sits outside the per-audiobook folder (audiobook/uploads/...);
  // its public URL is https://storage.googleapis.com/<bucket>/<path>.
  const epubUrl = doc.data()?.epubUrl as string | undefined;
  const bucket = getBucket();
  const marker = `/${bucket.name}/`;
  const at = epubUrl ? epubUrl.indexOf(marker) : -1;
  if (epubUrl && at >= 0) {
    const path = decodeURIComponent(epubUrl.slice(at + marker.length).split("?")[0]);
    await bucket.file(path).delete({ ignoreNotFound: true });
  }
  await ref.delete();
  return true;
}

// Jobs
//
// FastAPI (fta_podcast_generator) owns podcast/course job docs end to end:
// it creates them on /generate and updates status as it works. For
// note-taker, this admin creates the job itself (once the recording has
// finished uploading to Storage) and then asks FastAPI to process it.
// Both sides write `createdAt`/timestamps as plain ISO strings (rather than
// Firestore Timestamps) so a job written by either side reads back the same
// way here.

function jobFromDoc(doc: DocumentSnapshot): Job {
  const data = doc.data()!;
  const iso = (value: unknown): string | undefined =>
    typeof value === "string" ? value : toIso(value);
  return {
    id: doc.id,
    type: data.type,
    configId: data.configId,
    status: data.status,
    error: data.error ?? null,
    createdAt: iso(data.createdAt) ?? new Date().toISOString(),
    startedAt: iso(data.startedAt) ?? null,
    finishedAt: iso(data.finishedAt) ?? null,
    result: data.result ?? null,
    recordingUrl: data.recordingUrl ?? undefined,
    recordingName: data.recordingName ?? undefined,
  };
}

export async function getJob(id: string): Promise<Job | null> {
  const doc = await getDb().collection(COL.jobs).doc(id).get();
  return doc.exists ? jobFromDoc(doc) : null;
}

export async function getRecentJobs(type: Job["type"], take = 20): Promise<Job[]> {
  // NOTE: this equality-filter + orderBy combination needs a composite
  // Firestore index in a real project (not the emulator) -- the first call
  // in production will fail with a Firestore error containing a direct
  // console link to create it.
  const snap = await getDb()
    .collection(COL.jobs)
    .where("type", "==", type)
    .orderBy("createdAt", "desc")
    .limit(take)
    .get();
  return snap.docs.map(jobFromDoc);
}

export async function createNotetakerJob(input: {
  configId?: string;
  recordingUrl: string;
  recordingName: string;
}): Promise<Job> {
  const ref = getDb().collection(COL.jobs).doc();
  await ref.set({
    type: "notetaker",
    configId: input.configId ?? null,
    status: "queued",
    createdAt: new Date().toISOString(),
    startedAt: null,
    finishedAt: null,
    error: null,
    result: null,
    recordingUrl: input.recordingUrl,
    recordingName: input.recordingName,
  });
  const doc = await ref.get();
  return jobFromDoc(doc);
}

// Podcast episodes
//
// An episode is a script under a podcast: podcast_configs/{id}/episodes/{eid}.
// Its generated audio isn't stored on it -- it's the episode's newest
// successful job (jobs carry an `episodeId`), whose `result` has the public
// Storage URLs. Regenerating overwrites the same files, so older jobs are
// history rather than extra episodes.

export type PodcastEpisodeInput = {
  title: string;
  number?: number;
  slug?: string;
  scriptText: string;
  hook?: string;
  teaser?: string;
  cta?: string;
};

const episodesCol = (podcastId: string) =>
  getDb().collection(COL.podcastConfigs).doc(podcastId).collection("episodes");

function episodeFromDoc(podcastId: string, doc: DocumentSnapshot): PodcastEpisodeDoc {
  const data = doc.data()!;
  return {
    id: doc.id,
    podcastId,
    title: data.title,
    number: data.number ?? undefined,
    slug: data.slug ?? "",
    scriptText: data.scriptText ?? "",
    hook: data.hook ?? undefined,
    teaser: data.teaser ?? undefined,
    cta: data.cta ?? undefined,
    createdAt: toIso(data.createdAt) ?? new Date().toISOString(),
    updatedAt: toIso(data.updatedAt) ?? new Date().toISOString(),
  };
}

// The slug names the episode's folder in Storage, so two episodes of one
// podcast must never share one.
async function uniqueEpisodeSlug(
  podcastId: string,
  input: PodcastEpisodeInput,
  excludeId?: string,
): Promise<string> {
  const base = slugify(input.slug || input.title || `episode-${input.number ?? 1}`);
  const taken = new Set(
    (await episodesCol(podcastId).get()).docs
      .filter((d) => d.id !== excludeId)
      .map((d) => d.data().slug as string),
  );
  let slug = base;
  for (let n = 2; taken.has(slug); n++) slug = `${base}-${n}`;
  return slug;
}

function episodeFields(input: PodcastEpisodeInput, slug: string) {
  return {
    title: input.title,
    scriptText: input.scriptText,
    slug,
    ...compact({ number: input.number, hook: input.hook, teaser: input.teaser, cta: input.cta }),
  };
}

export async function getPodcastEpisodeDoc(
  podcastId: string,
  episodeId: string,
): Promise<PodcastEpisodeDoc | null> {
  const doc = await episodesCol(podcastId).doc(episodeId).get();
  return doc.exists ? episodeFromDoc(podcastId, doc) : null;
}

export async function addPodcastEpisode(
  podcastId: string,
  input: PodcastEpisodeInput,
): Promise<PodcastEpisodeDoc> {
  const ref = episodesCol(podcastId).doc();
  const now = new Date();
  await ref.set({
    ...episodeFields(input, await uniqueEpisodeSlug(podcastId, input)),
    createdAt: now,
    updatedAt: now,
  });
  return episodeFromDoc(podcastId, await ref.get());
}

export async function updatePodcastEpisode(
  podcastId: string,
  episodeId: string,
  input: PodcastEpisodeInput,
): Promise<PodcastEpisodeDoc | null> {
  const ref = episodesCol(podcastId).doc(episodeId);
  const doc = await ref.get();
  if (!doc.exists) return null;
  await ref.set({
    ...episodeFields(input, await uniqueEpisodeSlug(podcastId, input, episodeId)),
    createdAt: doc.data()?.createdAt ?? new Date(),
    updatedAt: new Date(),
  });
  return episodeFromDoc(podcastId, await ref.get());
}

export async function getPodcastEpisodeCount(podcastId: string): Promise<number> {
  return (await episodesCol(podcastId).count().get()).data().count;
}

const STALE_JOB_MS = 30 * 60 * 1000;

/** A podcast's episodes, each with its generated audio (if any) and the
 * state of a newer generation that's running or failed. */
export async function getPodcastEpisodes(podcastId: string): Promise<PodcastEpisode[]> {
  const [episodeSnap, jobSnap] = await Promise.all([
    episodesCol(podcastId).get(),
    // Equality on a single field, so no composite index is needed.
    getDb().collection(COL.jobs).where("configId", "==", podcastId).get(),
  ]);

  const jobsByEpisode = new Map<string, Job[]>();
  for (const doc of jobSnap.docs) {
    const episodeId = doc.data().episodeId as string | undefined;
    const job = jobFromDoc(doc);
    if (job.type !== "podcast" || !episodeId) continue;
    jobsByEpisode.set(episodeId, [...(jobsByEpisode.get(episodeId) ?? []), job]);
  }

  const episodes = episodeSnap.docs.map((doc): PodcastEpisode => {
    const jobs = (jobsByEpisode.get(doc.id) ?? []).sort((a, b) =>
      b.createdAt.localeCompare(a.createdAt),
    );

    let pending: JobPending | undefined;
    const newest = jobs[0];
    if (newest && (newest.status === "queued" || newest.status === "running")) {
      const age = Date.now() - new Date(newest.createdAt).getTime();
      pending = age > STALE_JOB_MS
        ? { jobId: newest.id, status: "error", error: "Timed out -- the generator service may have stopped." }
        : { jobId: newest.id, status: newest.status };
    } else if (newest?.status === "error") {
      pending = { jobId: newest.id, status: "error", error: newest.error };
    }

    let audio: PodcastEpisodeAudio | undefined;
    const done = jobs.find((j) => j.status === "done" && j.result?.audioUrl);
    if (done?.result) {
      const r = done.result;
      audio = {
        audioUrl: r.audioUrl as string,
        duration: (r.duration as string) || "",
        generatedAt: done.finishedAt ?? done.createdAt,
        manifestUrl: r.manifestUrl as string | undefined,
        scriptUrl: r.scriptUrl as string | undefined,
      };
    }

    return { ...episodeFromDoc(podcastId, doc), audio, pending };
  });

  // Numbered episodes first, in order; unnumbered ones after, oldest first.
  return episodes.sort((a, b) =>
    (a.number ?? Infinity) - (b.number ?? Infinity) || a.createdAt.localeCompare(b.createdAt),
  );
}

/** Deletes an episode: its script, its generated audio in Storage, and its
 * job history. */
export async function deletePodcastEpisode(podcastId: string, episodeId: string): Promise<void> {
  if (!podcastId || !episodeId || podcastId.includes("/") || episodeId.includes("/")) {
    throw new Error("Invalid id");
  }
  const ref = episodesCol(podcastId).doc(episodeId);
  const doc = await ref.get();

  const jobSnap = await getDb().collection(COL.jobs).where("configId", "==", podcastId).get();
  const jobs = jobSnap.docs.filter(
    (d) => d.data().type === "podcast" && d.data().episodeId === episodeId,
  );

  // The audio lives under the slug it had when it was generated -- which may
  // differ from the current slug if it was renamed since.
  const slugs = new Set<string>();
  if (doc.exists && doc.data()?.slug) slugs.add(doc.data()!.slug as string);
  for (const j of jobs) {
    const slug = j.data().result?.slug as string | undefined;
    if (slug) slugs.add(slug);
  }
  for (const slug of slugs) {
    await getBucket().deleteFiles({ prefix: `podcast/${podcastId}/${slug}/` });
  }

  const batch = getDb().batch();
  for (const j of jobs) batch.delete(j.ref);
  if (doc.exists) batch.delete(ref);
  await batch.commit();
}

// Generated audio: courses and audiobooks
//
// Same idea as podcast episodes: nothing extra is stored on the config -- what
// has been generated is read back from its job history.

// A whole course or a whole book legitimately runs for a long time.
const COURSE_STALE_MS = 3 * 60 * 60 * 1000;
const BOOK_STALE_MS = 8 * 60 * 60 * 1000;

/** A job that never finished (the generator service died) isn't running. */
function settle(job: Job, maxAgeMs = STALE_JOB_MS): Job {
  if (
    (job.status === "queued" || job.status === "running") &&
    Date.now() - new Date(job.createdAt).getTime() > maxAgeMs
  ) {
    return { ...job, status: "error", error: "Timed out -- the generator service may have stopped." };
  }
  return job;
}

type CourseJob = { job: Job; lesson: number | null };
type LessonResult = {
  number: number;
  title: string;
  slug?: string;
  duration?: string;
  audioUrl?: string;
};

const resultLessons = (result: Record<string, unknown> | null | undefined): LessonResult[] =>
  Array.isArray(result?.lessons) ? (result!.lessons as LessonResult[]) : [];

async function courseJobs(courseId: string): Promise<CourseJob[]> {
  const snap = await getDb().collection(COL.jobs).where("configId", "==", courseId).get();
  return snap.docs
    .filter((d) => d.data().type === "course")
    .map((d) => ({
      job: settle(jobFromDoc(d), COURSE_STALE_MS),
      lesson: typeof d.data().lesson === "number" ? (d.data().lesson as number) : null,
    }))
    .sort((a, b) => b.job.createdAt.localeCompare(a.job.createdAt));
}

/** Each lesson of a course with its generated audio, if any. A lesson is
 * matched to its audio by position (jobs record the lesson number). */
export async function getCourseView(course: CourseConfig): Promise<CourseView> {
  const jobs = await courseJobs(course.id);

  const lessons = course.lessons.map((lesson, i): CourseLessonView => {
    const number = i + 1;

    let audio: CourseLessonView["audio"];
    let outdated = false;
    for (const { job } of jobs) {
      if (job.status !== "done") continue;
      const entry = resultLessons(job.result).find((l) => l.number === number && l.audioUrl);
      if (!entry) continue;
      audio = {
        audioUrl: entry.audioUrl!,
        duration: entry.duration ?? "",
        generatedAt: job.finishedAt ?? job.createdAt,
      };
      outdated = entry.title !== lesson.title;
      break;
    }

    // The newest attempt that covered this lesson (this lesson's own, or a
    // whole-course run) -- if it failed, say so.
    const newest = jobs.find((j) => j.lesson === null || j.lesson === number);
    const error = newest?.job.status === "error" ? newest.job.error ?? "Generation failed" : undefined;

    return { number, title: lesson.title, audio, outdated, error };
  });

  const syllabus = jobs.find(
    (j) => j.job.status === "done" && typeof j.job.result?.syllabusUrl === "string",
  );

  return {
    lessons,
    syllabusUrl: syllabus?.job.result?.syllabusUrl as string | undefined,
    active: jobs
      .filter((j) => j.job.status === "queued" || j.job.status === "running")
      .map((j) => ({ jobId: j.job.id, lesson: j.lesson })),
  };
}

/** Deletes one lesson's generated audio (the lesson itself stays). */
export async function deleteCourseLessonAudio(courseId: string, number: number): Promise<void> {
  if (!courseId || courseId.includes("/") || !Number.isInteger(number)) throw new Error("Invalid id");

  const snap = await getDb().collection(COL.jobs).where("configId", "==", courseId).get();
  const slugs = new Set<string>();
  const batch = getDb().batch();
  for (const d of snap.docs) {
    const data = d.data();
    if (data.type !== "course" || data.status !== "done") continue;
    const lessons = resultLessons(data.result);
    const kept = lessons.filter((l) => l.number !== number);
    if (kept.length === lessons.length) continue;
    for (const l of lessons) if (l.number === number && l.slug) slugs.add(l.slug);
    // A whole-course job also holds other lessons -- only drop this one.
    if (kept.length === 0) batch.delete(d.ref);
    else batch.update(d.ref, { "result.lessons": kept });
  }
  for (const slug of slugs) {
    await getBucket().deleteFiles({ prefix: `course/${courseId}/${slug}/` });
  }
  await batch.commit();
}

async function fetchChapters(manifestUrl: string | undefined, version: string): Promise<BookChapter[]> {
  if (!manifestUrl) return [];
  try {
    // The manifest is overwritten on regeneration and Storage caches it for
    // an hour, so ask for the version we know is current.
    const res = await fetch(`${manifestUrl}?v=${encodeURIComponent(version)}`, { cache: "no-store" });
    if (!res.ok) return [];
    const manifest = (await res.json()) as { chapters?: Record<string, unknown>[] };
    return (manifest.chapters ?? []).map((c) => ({
      number: c.number as number,
      title: c.title as string,
      startMs: typeof c.start_ms === "number" ? c.start_ms : undefined,
      durationMs: typeof c.duration_ms === "number" ? c.duration_ms : undefined,
    }));
  } catch {
    return [];
  }
}

export async function getAudiobookView(config: AudiobookConfig): Promise<AudiobookView> {
  const snap = await getDb().collection(COL.jobs).where("configId", "==", config.id).get();
  const jobs = snap.docs
    .map(jobFromDoc)
    .filter((j) => j.type === "audiobook")
    .map((j) => settle(j, BOOK_STALE_MS))
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  let pending: AudiobookView["pending"];
  const newest = jobs[0];
  if (newest && (newest.status === "queued" || newest.status === "running")) {
    pending = { jobId: newest.id, status: newest.status };
  } else if (newest?.status === "error") {
    pending = { jobId: newest.id, status: "error", error: newest.error };
  }

  const done = jobs.find((j) => j.status === "done" && j.result?.audioUrl);
  if (!done?.result) return { chapters: [], pending };
  const r = done.result;
  const generatedAt = done.finishedAt ?? done.createdAt;
  const audio: AudiobookAudio = {
    audioUrl: r.audioUrl as string,
    duration: (r.duration as string) || "",
    generatedAt,
    title: (r.title as string) || config.title || config.epubName,
    author: (r.author as string) || undefined,
    chapterCount: typeof r.chapterCount === "number" ? r.chapterCount : 0,
  };
  return {
    audio,
    pending,
    chapters: await fetchChapters(r.manifestUrl as string | undefined, generatedAt),
  };
}

/** Deletes an audiobook's generated audio and job history. The config and the
 * uploaded EPUB stay, so it can be generated again. */
export async function deleteAudiobookAudio(configId: string): Promise<void> {
  if (!configId || configId.includes("/")) throw new Error("Invalid id");
  await getBucket().deleteFiles({ prefix: `audiobook/${configId}/` });
  const snap = await getDb().collection(COL.jobs).where("configId", "==", configId).get();
  const batch = getDb().batch();
  for (const d of snap.docs) if (d.data().type === "audiobook") batch.delete(d.ref);
  await batch.commit();
}
