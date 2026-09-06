import { z } from "zod";

export const invoiceItemSchema = z.object({
  description: z.string().min(1, "Description is required"),
  quantity: z.coerce.number().positive("Must be greater than 0"),
  unitPrice: z.coerce.number().min(0, "Must be 0 or more"),
});

export const invoiceSchema = z.object({
  clientId: z.string().min(1, "Select a client"),
  currency: z.string().min(1, "Currency is required").default("NGN"),
  issueDate: z.string().min(1, "Issue date is required"),
  dueDate: z.string().optional(),
  notes: z.string().optional(),
  items: z.array(invoiceItemSchema).min(1, "Add at least one line item"),
});

export type InvoiceFormValues = z.infer<typeof invoiceSchema>;
export type InvoiceItemFormValues = z.infer<typeof invoiceItemSchema>;
