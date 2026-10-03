import type { AudiobookAdvancedFieldsValues } from "./validations/audiobook-advanced";

type Rec = Record<string, unknown>;

function isPlainObject(v: unknown): v is Rec {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function clone<T>(v: T): T {
  return v === undefined ? v : (JSON.parse(JSON.stringify(v)) as T);
}

function omitEmpty(obj: Rec): Rec {
  const out: Rec = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v === "" || v === undefined || v === null) continue;
    out[k] = v;
  }
  return out;
}

/** react-hook-form's `watch()` returns raw, un-coerced form state -- zod's
 * `z.coerce.number()` only runs inside `handleSubmit`, which this live-sync
 * control never calls. Every numeric field read from `watch()` needs this,
 * or a string like "900" (or "") ends up in the saved config and Python's
 * numeric comparisons on it (e.g. `section.depth > config.toc_depth`)
 * throw a str-vs-int TypeError. */
function num(raw: unknown): number | undefined {
  if (raw === "" || raw === undefined || raw === null) return undefined;
  const n = typeof raw === "number" ? raw : Number(raw);
  return Number.isFinite(n) ? n : undefined;
}

function deepMerge(base: unknown, extra: unknown): unknown {
  if (!isPlainObject(base) || !isPlainObject(extra)) return extra;
  const out: Rec = { ...base };
  for (const [k, v] of Object.entries(extra)) {
    out[k] = k in out ? deepMerge(out[k], v) : v;
  }
  return out;
}

/** "3\npreface\n7" -> [3, "preface", 7] -- book.json's skip/keep accept a
 * section number or a fragment of its title, one per line here. */
function parseSelectorList(text: string | undefined): (number | string)[] {
  return (text ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => (/^\d+$/.test(line) ? Number(line) : line));
}

function formatSelectorList(list: unknown): string {
  return Array.isArray(list) ? list.map((v) => String(v)).join("\n") : "";
}

export function buildAudiobookAdvancedConfig(values: AudiobookAdvancedFieldsValues): Rec {
  const narrator = omitEmpty({
    gender: values.narratorGender,
    locale: values.narratorLocale,
    voice: values.narratorVoice,
    rate: values.narratorRate,
  });

  const pauses = omitEmpty({
    paragraph: num(values.pauseParagraph),
    heading: num(values.pauseHeading),
    scene_break: num(values.pauseSceneBreak),
    chapter_head: num(values.pauseChapterHead),
    chapter_tail: num(values.pauseChapterTail),
  });

  const pronunciations: Record<string, string> = {};
  for (const p of values.pronunciations ?? []) {
    const term = p.term?.trim();
    if (term) pronunciations[term] = p.saysAs ?? "";
  }

  const skip = parseSelectorList(values.skip);
  const keep = parseSelectorList(values.keep);

  const structured: Rec = omitEmpty({
    toc_depth: num(values.tocDepth),
    min_words: num(values.minWords),
    max_chunk_chars: num(values.maxChunkChars),
  });
  if (Object.keys(narrator).length) structured.narrator = narrator;
  if (skip.length) structured.skip = skip;
  if (keep.length) structured.keep = keep;
  if (values.announceChapters === false) structured.announce_chapters = false;
  if (values.credit === false) structured.credit = false;
  if (Object.keys(pauses).length) structured.pauses = pauses;
  if (Object.keys(pronunciations).length) structured.pronunciations = pronunciations;

  let extra: Rec = {};
  if (values.extraJson && values.extraJson.trim()) {
    try {
      extra = JSON.parse(values.extraJson);
    } catch {
      extra = {};
    }
  }

  return deepMerge(structured, extra) as Rec;
}

export function parseAudiobookAdvancedConfig(advanced: Rec | undefined): AudiobookAdvancedFieldsValues {
  const rest = clone(advanced ?? {});

  const narrator = isPlainObject(rest.narrator) ? { ...rest.narrator } : {};
  const narratorGender = (narrator.gender as string) ?? "";
  const narratorLocale = (narrator.locale as string) ?? "";
  const narratorVoice = (narrator.voice as string) ?? "";
  const narratorRate = (narrator.rate as string) ?? "";
  delete rest.narrator;

  const skip = formatSelectorList(rest.skip);
  const keep = formatSelectorList(rest.keep);
  delete rest.skip;
  delete rest.keep;

  const tocDepth = typeof rest.toc_depth === "number" ? rest.toc_depth : undefined;
  const minWords = typeof rest.min_words === "number" ? rest.min_words : undefined;
  const maxChunkChars = typeof rest.max_chunk_chars === "number" ? rest.max_chunk_chars : undefined;
  const announceChapters = rest.announce_chapters !== false;
  const credit = rest.credit !== false;
  delete rest.toc_depth;
  delete rest.min_words;
  delete rest.max_chunk_chars;
  delete rest.announce_chapters;
  delete rest.credit;

  const pauses = isPlainObject(rest.pauses) ? { ...rest.pauses } : {};
  const pauseParagraph = typeof pauses.paragraph === "number" ? pauses.paragraph : undefined;
  const pauseHeading = typeof pauses.heading === "number" ? pauses.heading : undefined;
  const pauseSceneBreak = typeof pauses.scene_break === "number" ? pauses.scene_break : undefined;
  const pauseChapterHead = typeof pauses.chapter_head === "number" ? pauses.chapter_head : undefined;
  const pauseChapterTail = typeof pauses.chapter_tail === "number" ? pauses.chapter_tail : undefined;
  delete rest.pauses;

  const pronunciationsObj = isPlainObject(rest.pronunciations) ? rest.pronunciations : {};
  const pronunciations = Object.entries(pronunciationsObj).map(([term, saysAs]) => ({
    term, saysAs: String(saysAs),
  }));
  delete rest.pronunciations;

  const extraJson = Object.keys(rest).length ? JSON.stringify(rest, null, 2) : "";

  return {
    narratorGender: narratorGender as AudiobookAdvancedFieldsValues["narratorGender"],
    narratorLocale, narratorVoice, narratorRate,
    skip, keep, tocDepth, minWords, announceChapters, credit, maxChunkChars,
    pauseParagraph, pauseHeading, pauseSceneBreak, pauseChapterHead, pauseChapterTail,
    pronunciations, extraJson,
  };
}
