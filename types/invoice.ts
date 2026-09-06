export type InvoiceStatus = "draft" | "sent" | "paid" | "void";

export type InvoiceItem = {
  description: string;
  quantity: number;
  unitPrice: number;
};

export type Client = {
  id: string;
  name: string;
  email: string;
  company?: string;
  address?: string;
  createdAt: string;
};

export type Invoice = {
  id: string;
  invoiceNumber: string;
  clientId: string;
  status: InvoiceStatus;
  currency: string;
  issueDate: string;
  dueDate?: string;
  notes?: string;
  publicToken: string;
  paystackReference?: string;
  paidAt?: string;
  items: InvoiceItem[];
  createdAt: string;
  updatedAt: string;
};
