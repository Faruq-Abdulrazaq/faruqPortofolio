import { z } from "zod";
import { isValidJsonObjectOrEmpty } from "./podcast-config";

// Mirrors podcast.course.Course / course.json in fta_podcast_generator.
// "defaultsJson" is the course's shared config body (cast/pattern/etc, same
// snake_case shape as course.json's "defaults"); each lesson may carry its
// own "overridesJson" on top of it.
export const lessonSchema = z.object({
  title: z.string().min(1, "Lesson title is required"),
  scriptText: z.string().min(1, "Lesson script is required"),
  objectives: z.string().optional(), // one per line, split on save
  challenge: z.string().optional(),
  overridesJson: z.string().optional().refine(isValidJsonObjectOrEmpty, {
    message: "Must be valid JSON (an object)",
  }),
});

export const courseConfigSchema = z.object({
  title: z.string().min(1, "Title is required"),
  subtitle: z.string().optional(),
  slug: z.string().optional(),
  outcome: z.string().optional(),
  defaultsJson: z.string().optional().refine(isValidJsonObjectOrEmpty, {
    message: "Must be valid JSON (an object)",
  }),
  lessons: z.array(lessonSchema).min(1, "A course needs at least one lesson"),
});

export type LessonFormValues = z.infer<typeof lessonSchema>;
export type CourseConfigFormValues = z.infer<typeof courseConfigSchema>;
