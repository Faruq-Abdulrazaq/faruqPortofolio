import { z } from "zod";

// z.coerce.number() on an empty string coerces via Number("") === 0, not
// NaN -- so a plain `.optional()` numeric field left blank in the form
// would submit 0 instead of "unset". This treats "" (and other empty
// input) as genuinely absent before coercion runs.
export function optionalInt() {
  return z.preprocess(
    (val) => (val === "" || val === null || val === undefined ? undefined : val),
    z.coerce.number().int().optional(),
  );
}

// A podcast's shared settings. "advancedJson" is the cast / pattern /
// performance / pronunciations block, kept in the same snake_case shape as
// fta_podcast_generator's input.json; Firestore stores its pieces flat on the
// doc (see lib/firestore.ts). Scripts live on the podcast's episodes.
export const podcastConfigSchema = z.object({
  title: z.string().min(1, "Title is required"),
  speed: z
    .string()
    .regex(/^[+-]\d+%$/, "e.g. +10% or -5%")
    .optional()
    .or(z.literal("")),
  seed: optionalInt(),
  advancedJson: z.string().optional().refine(isValidJsonObjectOrEmpty, {
    message: "Must be valid JSON (an object)",
  }),
});

export type PodcastConfigFormValues = z.infer<typeof podcastConfigSchema>;

export function isValidJsonObjectOrEmpty(value: string | undefined): boolean {
  if (!value || !value.trim()) return true;
  try {
    const parsed = JSON.parse(value);
    return typeof parsed === "object" && parsed !== null && !Array.isArray(parsed);
  } catch {
    return false;
  }
}
