import { z } from "zod";

export const clientSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  address: z.string().optional(),
});

export type ClientFormValues = z.infer<typeof clientSchema>;
