import type { AdvancedFieldsValues } from "./validations/advanced-config";

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
 * or a value like "90" (string) or "" ends up in the saved config, and
 * Python's `banter_after_words < 1` (str vs int) throws. */
function num(raw: unknown): number | undefined {
  if (raw === "" || raw === undefined || raw === null) return undefined;
  const n = typeof raw === "number" ? raw : Number(raw);
  return Number.isFinite(n) ? n : undefined;
}

/** Recursive merge; `extra` wins on leaf conflicts, objects merge key by
 * key, arrays are replaced wholesale -- same semantics as podcast.course's
 * own `_merge` in fta_podcast_generator, for consistency. */
function deepMerge(base: unknown, extra: unknown): unknown {
  if (!isPlainObject(base) || !isPlainObject(extra)) return extra;
  const out: Rec = { ...base };
  for (const [k, v] of Object.entries(extra)) {
    out[k] = k in out ? deepMerge(out[k], v) : v;
  }
  return out;
}

/** Structured form values -> the podcast.models.Config-shaped object
 * (snake_case, matching fta_podcast_generator's input.json) that gets saved
 * as the config's advanced fields. */
export function buildAdvancedConfig(values: AdvancedFieldsValues): Rec {
  const speakers: Rec = {};
  for (const s of values.speakers ?? []) {
    const name = s.name?.trim();
    if (!name) continue;
    speakers[name.toUpperCase()] = omitEmpty({
      gender: s.gender, role: s.role, persona: s.persona,
      locale: s.locale, voice: s.voice, rate: s.rate,
    });
  }

  const cast = omitEmpty({
    default_locale: values.castDefaultLocale,
    unattributed: values.castUnattributed,
  });
  if (Object.keys(speakers).length) cast.speakers = speakers;

  const structure = omitEmpty({
    format: values.format,
    tagline: values.tagline,
    hook: values.hook,
    cta: values.cta,
    teaser: values.teaser,
  });
  if (values.announceSegments) structure.announce_segments = true;

  const pattern = omitEmpty({
    turn_taking: values.turnTaking,
    voice_assignment: values.voiceAssignment,
    pacing: values.pacing,
  });
  if (Object.keys(structure).length) pattern.structure = structure;

  const performance: Rec = {};
  if (values.banter) performance.banter = true;
  const banterAfterWords = num(values.banterAfterWords);
  if (banterAfterWords !== undefined) performance.banter_after_words = banterAfterWords;
  if (values.directions === false) performance.directions = false;

  const pronunciations: Record<string, string> = {};
  for (const p of values.pronunciations ?? []) {
    const term = p.term?.trim();
    if (term) pronunciations[term] = p.saysAs ?? "";
  }

  const structured: Rec = {};
  if (Object.keys(cast).length) structured.cast = cast;
  if (Object.keys(pattern).length) structured.pattern = pattern;
  if (Object.keys(performance).length) structured.performance = performance;
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

/** The reverse: hydrate the form's structured fields from a saved config's
 * advanced object, leaving anything the structured fields don't cover
 * (sponsors, segue_lines, bios, cohosts, directions_map, ...) in extraJson
 * so it round-trips instead of silently disappearing. */
export function parseAdvancedConfig(advanced: Rec | undefined): AdvancedFieldsValues {
  const rest = clone(advanced ?? {});

  const cast = isPlainObject(rest.cast) ? { ...rest.cast } : {};
  const speakersObj = isPlainObject(cast.speakers) ? cast.speakers : {};
  const speakers = Object.entries(speakersObj).map(([name, raw]) => {
    const spec = isPlainObject(raw) ? raw : {};
    return {
      name,
      gender: (spec.gender as string) ?? "",
      role: (spec.role as string) ?? "",
      persona: (spec.persona as string) ?? "",
      locale: (spec.locale as string) ?? "",
      voice: (spec.voice as string) ?? "",
      rate: (spec.rate as string) ?? "",
    };
  });
  const castDefaultLocale = (cast.default_locale as string) ?? "";
  const castUnattributed = (cast.unattributed as string) ?? "";
  delete cast.speakers;
  delete cast.default_locale;
  delete cast.unattributed;
  if (Object.keys(cast).length === 0) delete rest.cast;
  else rest.cast = cast;

  const pattern = isPlainObject(rest.pattern) ? { ...rest.pattern } : {};
  const turnTaking = (pattern.turn_taking as string) ?? "";
  const voiceAssignment = (pattern.voice_assignment as string) ?? "";
  const pacing = (pattern.pacing as string) ?? "";
  delete pattern.turn_taking;
  delete pattern.voice_assignment;
  delete pattern.pacing;

  const structure = isPlainObject(pattern.structure) ? { ...pattern.structure } : {};
  const format = (structure.format as string) ?? "";
  const tagline = (structure.tagline as string) ?? "";
  const hook = (structure.hook as string) ?? "";
  const cta = (structure.cta as string) ?? "";
  const teaser = (structure.teaser as string) ?? "";
  const announceSegments = !!structure.announce_segments;
  delete structure.format;
  delete structure.tagline;
  delete structure.hook;
  delete structure.cta;
  delete structure.teaser;
  delete structure.announce_segments;
  if (Object.keys(structure).length === 0) delete pattern.structure;
  else pattern.structure = structure;
  if (Object.keys(pattern).length === 0) delete rest.pattern;
  else rest.pattern = pattern;

  const performance = isPlainObject(rest.performance) ? { ...rest.performance } : {};
  const banter = !!performance.banter;
  const banterAfterWords = typeof performance.banter_after_words === "number"
    ? performance.banter_after_words : undefined;
  const directions = performance.directions !== false;
  delete performance.banter;
  delete performance.banter_after_words;
  delete performance.directions;
  if (Object.keys(performance).length === 0) delete rest.performance;
  else rest.performance = performance;

  const pronunciationsObj = isPlainObject(rest.pronunciations) ? rest.pronunciations : {};
  const pronunciations = Object.entries(pronunciationsObj).map(([term, saysAs]) => ({
    term, saysAs: String(saysAs),
  }));
  delete rest.pronunciations;

  const extraJson = Object.keys(rest).length ? JSON.stringify(rest, null, 2) : "";

  // Cast wholesale rather than field-by-field: this hydrates from a config
  // this same UI saved, so the enum-shaped strings (gender, role, ...) are
  // trusted to already be valid values or "" -- if a hand-edited "extra
  // JSON" round-trip ever produced something else, zod's own validation on
  // these fields catches it live once the form renders.
  return {
    castDefaultLocale, castUnattributed, speakers,
    turnTaking, voiceAssignment, pacing, format,
    tagline, hook, cta, teaser, announceSegments,
    banter, banterAfterWords, directions,
    pronunciations, extraJson,
  } as AdvancedFieldsValues;
}
