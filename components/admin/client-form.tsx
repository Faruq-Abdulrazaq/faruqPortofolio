"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { clientSchema, type ClientFormValues } from "@/lib/validations/client";
import type { Client } from "@/types/invoice";
import { Spinner } from "@/components/ui/spinner";

export function ClientForm({ client }: { client?: Client }) {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientFormValues>({
    resolver: zodResolver(clientSchema),
    defaultValues: client
      ? {
          name: client.name,
          email: client.email,
          company: client.company ?? "",
          address: client.address ?? "",
        }
      : undefined,
  });

  async function onSubmit(values: ClientFormValues) {
    setError("");
    setLoading(true);
    try {
      const url = client ? `/api/admin/clients/${client.id}` : "/api/admin/clients";
      const res = await fetch(url, {
        method: client ? "PATCH" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Something went wrong");
      }
      router.push("/admin/clients");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="admin-card" onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="field-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" {...register("name")} />
          {errors.name && (
            <span className="admin-field-error">{errors.name.message}</span>
          )}
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email")} />
          {errors.email && (
            <span className="admin-field-error">{errors.email.message}</span>
          )}
        </div>
      </div>
      <div className="field" style={{ marginTop: "16px" }}>
        <label htmlFor="company">Company</label>
        <input id="company" type="text" {...register("company")} />
      </div>
      <div className="field" style={{ marginTop: "16px" }}>
        <label htmlFor="address">Address</label>
        <textarea id="address" rows={3} {...register("address")} />
      </div>

      <div style={{ marginTop: "22px", display: "flex", gap: "10px" }}>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={loading}
          style={{ opacity: loading ? 0.7 : 1 }}
        >
          {loading && <Spinner />}
          {loading ? "Saving…" : client ? "Save changes" : "Create client"}
        </button>
        <button
          type="button"
          className="btn btn-ghost"
          onClick={() => router.push("/admin/clients")}
        >
          Cancel
        </button>
      </div>

      {error && <div className="admin-form-error">{error}</div>}
    </form>
  );
}
