import type { DocumentSnapshot } from "firebase-admin/firestore";
import { getDb } from "./firebase-admin";
import type { Client, Invoice, InvoiceItem } from "@/types/invoice";

export const COL = {
  clients: "portfolio_clients",
  invoices: "portfolio_invoices",
} as const;

function toIso(value: unknown): string | undefined {
  if (!value) return undefined;
  if (value instanceof Date) return value.toISOString();
  if (typeof (value as { toDate?: () => Date }).toDate === "function") {
    return (value as { toDate: () => Date }).toDate().toISOString();
  }
  return undefined;
}

function clientFromDoc(doc: DocumentSnapshot): Client {
  const data = doc.data()!;
  return {
    id: doc.id,
    name: data.name,
    email: data.email,
    company: data.company ?? undefined,
    address: data.address ?? undefined,
    createdAt: toIso(data.createdAt) ?? new Date().toISOString(),
  };
}

function invoiceFromDoc(doc: DocumentSnapshot): Invoice {
  const data = doc.data()!;
  return {
    id: doc.id,
    invoiceNumber: data.invoiceNumber,
    clientId: data.clientId,
    status: data.status,
    currency: data.currency,
    issueDate: data.issueDate,
    dueDate: data.dueDate ?? undefined,
    notes: data.notes ?? undefined,
    publicToken: data.publicToken,
    paystackReference: data.paystackReference ?? undefined,
    paidAt: toIso(data.paidAt),
    items: (data.items ?? []) as InvoiceItem[],
    createdAt: toIso(data.createdAt) ?? new Date().toISOString(),
    updatedAt: toIso(data.updatedAt) ?? new Date().toISOString(),
  };
}

// Clients

export type ClientInput = {
  name: string;
  email: string;
  company?: string;
  address?: string;
};

export async function getClients(): Promise<Client[]> {
  const snap = await getDb()
    .collection(COL.clients)
    .orderBy("createdAt", "desc")
    .get();
  return snap.docs.map(clientFromDoc);
}

export async function getClientById(id: string): Promise<Client | null> {
  const doc = await getDb().collection(COL.clients).doc(id).get();
  return doc.exists ? clientFromDoc(doc) : null;
}

export async function addClient(input: ClientInput): Promise<Client> {
  const ref = getDb().collection(COL.clients).doc();
  const now = new Date();
  await ref.set({ ...input, createdAt: now });
  const doc = await ref.get();
  return clientFromDoc(doc);
}

export async function updateClient(
  id: string,
  input: ClientInput,
): Promise<Client | null> {
  const ref = getDb().collection(COL.clients).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return null;
  await ref.update({ ...input });
  const updated = await ref.get();
  return clientFromDoc(updated);
}

export async function deleteClient(
  id: string,
): Promise<{ ok: boolean; reason?: string }> {
  const invoicesSnap = await getDb()
    .collection(COL.invoices)
    .where("clientId", "==", id)
    .limit(1)
    .get();
  if (!invoicesSnap.empty) {
    return { ok: false, reason: "Cannot delete a client with existing invoices" };
  }
  const doc = await getDb().collection(COL.clients).doc(id).get();
  if (!doc.exists) return { ok: false, reason: "Not found" };
  await doc.ref.delete();
  return { ok: true };
}

// Invoices

export type InvoiceInput = {
  clientId: string;
  currency: string;
  issueDate: string;
  dueDate?: string | null;
  notes?: string | null;
  items: InvoiceItem[];
};

export async function getInvoices(): Promise<Invoice[]> {
  const snap = await getDb()
    .collection(COL.invoices)
    .orderBy("createdAt", "desc")
    .get();
  return snap.docs.map(invoiceFromDoc);
}

export async function getInvoiceById(id: string): Promise<Invoice | null> {
  const doc = await getDb().collection(COL.invoices).doc(id).get();
  return doc.exists ? invoiceFromDoc(doc) : null;
}

export async function getInvoiceByToken(token: string): Promise<Invoice | null> {
  const snap = await getDb()
    .collection(COL.invoices)
    .where("publicToken", "==", token)
    .limit(1)
    .get();
  if (snap.empty) return null;
  return invoiceFromDoc(snap.docs[0]);
}

export async function getInvoiceByPaystackRef(
  reference: string,
): Promise<Invoice | null> {
  const snap = await getDb()
    .collection(COL.invoices)
    .where("paystackReference", "==", reference)
    .limit(1)
    .get();
  if (snap.empty) return null;
  return invoiceFromDoc(snap.docs[0]);
}

// Standard Firestore prefix-range trick for a "starts with" query: pairing
// >= prefix with < prefix-plus-a-high-codepoint matches every string that
// starts with prefix, since  sorts after any normal character.
export async function getInvoiceNumbersForYear(year: number): Promise<string[]> {
  const prefix = "INV-" + String(year) + "-";
  const upperBound = prefix + "";
  const snap = await getDb()
    .collection(COL.invoices)
    .where("invoiceNumber", ">=", prefix)
    .where("invoiceNumber", "<=", upperBound)
    .get();
  return snap.docs.map((d) => d.data().invoiceNumber as string);
}

export async function addInvoice(input: {
  invoiceNumber: string;
  publicToken: string;
  clientId: string;
  currency: string;
  issueDate: string;
  dueDate?: string | null;
  notes?: string | null;
  items: InvoiceItem[];
}): Promise<Invoice> {
  const ref = getDb().collection(COL.invoices).doc();
  const now = new Date();
  await ref.set({
    invoiceNumber: input.invoiceNumber,
    publicToken: input.publicToken,
    clientId: input.clientId,
    status: "draft",
    currency: input.currency,
    issueDate: input.issueDate,
    dueDate: input.dueDate ?? null,
    notes: input.notes ?? null,
    items: input.items,
    paystackReference: null,
    paidAt: null,
    createdAt: now,
    updatedAt: now,
  });
  const doc = await ref.get();
  return invoiceFromDoc(doc);
}

export async function updateInvoice(
  id: string,
  input: InvoiceInput,
): Promise<{ ok: boolean; reason?: string }> {
  const ref = getDb().collection(COL.invoices).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return { ok: false, reason: "Not found" };
  if (doc.data()?.status !== "draft") {
    return { ok: false, reason: "Only draft invoices can be edited" };
  }
  await ref.update({
    clientId: input.clientId,
    currency: input.currency,
    issueDate: input.issueDate,
    dueDate: input.dueDate ?? null,
    notes: input.notes ?? null,
    items: input.items,
    updatedAt: new Date(),
  });
  return { ok: true };
}

export async function deleteInvoiceIfDraft(
  id: string,
): Promise<{ ok: boolean; reason?: string }> {
  const ref = getDb().collection(COL.invoices).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return { ok: false, reason: "Not found" };
  if (doc.data()?.status !== "draft") {
    return { ok: false, reason: "Only draft invoices can be deleted" };
  }
  await ref.delete();
  return { ok: true };
}

export async function markInvoiceSent(
  id: string,
): Promise<{ ok: boolean; reason?: string }> {
  const ref = getDb().collection(COL.invoices).doc(id);
  const doc = await ref.get();
  if (!doc.exists) return { ok: false, reason: "Not found" };
  if (doc.data()?.status !== "draft") {
    return { ok: false, reason: "Only draft invoices can be sent" };
  }
  await ref.update({ status: "sent", updatedAt: new Date() });
  return { ok: true };
}

export async function setInvoicePaystackReference(
  id: string,
  reference: string,
): Promise<void> {
  await getDb()
    .collection(COL.invoices)
    .doc(id)
    .update({ paystackReference: reference, updatedAt: new Date() });
}
