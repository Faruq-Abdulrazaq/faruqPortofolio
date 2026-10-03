import { z } from "zod";
import { isValidJsonObjectOrEmpty, optionalInt } from "./podcast-config";

// Structured fields map onto podcast.audiobook.BookConfig's top-level
// fields in fta_podcast_generator; "advancedJson" covers the rest (narrator,
// skip/keep, toc_depth, pauses, pronunciations, ...) in that project's
// snake_case shape. The EPUB itself is uploaded separately (see
// notetaker-style upload route) -- this schema only covers the config doc.
export const audiobookConfigSchema = z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  slug: z.string().optional(),
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

export type AudiobookConfigFormValues = z.infer<typeof audiobookConfigSchema>;
