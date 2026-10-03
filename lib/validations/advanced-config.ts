import { z } from "zod";
import { isValidJsonObjectOrEmpty, optionalInt } from "./podcast-config";

// Every enum's first entry is "" (blank) meaning "not set" -- the field is
// then omitted from the emitted config entirely, so podcast.models.py's own
// dataclass defaults (or, for `format` on a course lesson, the course
// engine's own context-dependent default) decide instead of us silently
// forcing a value the user never chose. Options mirror podcast/models.py,
// podcast/performance.py and podcast/structure.py in fta_podcast_generator.

export const GENDERS = ["", "female", "male", "any"] as const;
export const ROLES = ["", "host", "guest", "narrator"] as const;
export const PERSONAS = ["", "neutral", "warm", "dry", "excitable", "sceptical", "deadpan"] as const;
export const TURN_TAKING = ["", "script", "alternate", "round_robin", "host_led"] as const;
export const VOICE_ASSIGNMENT = ["", "alternate_gender", "distinct_accents", "by_gender", "explicit"] as const;
export const PACING = ["", "tight", "natural", "relaxed"] as const;
export const UNATTRIBUTED = ["", "last", "host", "narrator", "skip"] as const;
// "course" is set automatically by the course engine per-lesson and is
// deliberately left out here -- picking it on a plain podcast episode (with
// no lesson context) wouldn't do anything useful.
export const FORMATS = [
  "", "auto", "solo", "cohost", "interview", "roundtable", "qa", "tutorial",
  "freestyle", "narrative", "classic",
] as const;

export const speakerSchema = z.object({
  name: z.string().min(1, "Speaker name is required"),
  gender: z.enum(GENDERS).optional(),
  role: z.enum(ROLES).optional(),
  persona: z.enum(PERSONAS).optional(),
  locale: z.string().optional(),
  voice: z.string().optional(),
  rate: z
    .string()
    .regex(/^[+-]\d+%$/, "e.g. +10% or -5%")
    .optional()
    .or(z.literal("")),
});

export const pronunciationSchema = z.object({
  term: z.string().min(1, "Required"),
  saysAs: z.string().min(1, "Required"),
});

export const advancedFieldsSchema = z.object({
  castDefaultLocale: z.string().optional(),
  castUnattributed: z.enum(UNATTRIBUTED).optional(),
  speakers: z.array(speakerSchema).optional(),
  turnTaking: z.enum(TURN_TAKING).optional(),
  voiceAssignment: z.enum(VOICE_ASSIGNMENT).optional(),
  pacing: z.enum(PACING).optional(),
  format: z.enum(FORMATS).optional(),
  tagline: z.string().optional(),
  hook: z.string().optional(),
  cta: z.string().optional(),
  teaser: z.string().optional(),
  announceSegments: z.boolean().optional(),
  banter: z.boolean().optional(),
  banterAfterWords: optionalInt(),
  directions: z.boolean().optional(),
  pronunciations: z.array(pronunciationSchema).optional(),
  // Escape hatch for anything not covered above (sponsors, segue_lines,
  // bios, cohosts, directions_map, intro_text/outro_text, ...) -- merged in
  // on top of the structured fields, so nothing set this way is lost.
  extraJson: z.string().optional().refine(isValidJsonObjectOrEmpty, {
    message: "Must be valid JSON (an object)",
  }),
});

export type AdvancedFieldsValues = z.infer<typeof advancedFieldsSchema>;
