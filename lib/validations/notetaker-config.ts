import { z } from "zod";
import { optionalInt } from "./podcast-config";

// The editable part of the note-taker: the summarization instructions sent
// to Claude, plus hints passed to Deepgram/Claude about the recording.
export const notetakerConfigSchema = z.object({
  name: z.string().min(1, "Name is required"),
  promptTemplate: z.string().min(1, "Prompt is required"),
  expectedSpeakers: optionalInt(),
  language: z.string().optional(),
});

export type NotetakerConfigFormValues = z.infer<typeof notetakerConfigSchema>;
