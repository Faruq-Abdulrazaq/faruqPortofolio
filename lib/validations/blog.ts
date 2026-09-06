import { z } from "zod";

export const blogPostSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z
    .string()
    .min(1, "Slug is required")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens only"),
  description: z.string().min(1, "Description is required"),
  date: z.string().min(1, "Date is required"),
  tags: z.array(z.string()).default([]),
  content: z.string().min(1, "Content is required"),
});

export type BlogPostFormValues = z.infer<typeof blogPostSchema>;
