import { z } from "zod";
import { GENDERS, pronunciationSchema } from "./advanced-config";
import { isValidJsonObjectOrEmpty, optionalInt } from "./podcast-config";

// Mirrors podcast.audiobook.BookConfig in fta_podcast_generator. Same
// "structured fields + extra JSON escape hatch" approach as
// advanced-config.ts, adapted to a book's shape (one narrator, not a cast).
export const audiobookAdvancedFieldsSchema = z.object({
  narratorGender: z.enum(GENDERS).optional(),
  narratorLocale: z.string().optional(),
  narratorVoice: z.string().optional(),
  narratorRate: z
    .string()
    .regex(/^[+-]\d+%$/, "e.g. +10% or -5%")
    .optional()
    .or(z.literal("")),
  skip: z.string().optional(), // one section per line: a number or title text
  keep: z.string().optional(),
  tocDepth: optionalInt(),
  minWords: optionalInt(),
  announceChapters: z.boolean().optional(),
  credit: z.boolean().optional(),
  maxChunkChars: optionalInt(),
  pauseParagraph: optionalInt(),
  pauseHeading: optionalInt(),
  pauseSceneBreak: optionalInt(),
  pauseChapterHead: optionalInt(),
  pauseChapterTail: optionalInt(),
  pronunciations: z.array(pronunciationSchema).optional(),
  extraJson: z.string().optional().refine(isValidJsonObjectOrEmpty, {
    message: "Must be valid JSON (an object)",
  }),
});

export type AudiobookAdvancedFieldsValues = z.infer<typeof audiobookAdvancedFieldsSchema>;
