import { getInvoiceNumbersForYear } from "@/lib/firestore";

export async function generateInvoiceNumber(): Promise<string> {
  const year = new Date().getFullYear();
  const existing = await getInvoiceNumbersForYear(year);
  const next = existing.length + 1;
  return `INV-${year}-${String(next).padStart(4, "0")}`;
}
