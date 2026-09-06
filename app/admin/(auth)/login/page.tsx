"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Spinner } from "@/components/ui/spinner";

const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

type LoginValues = z.infer<typeof loginSchema>;

export default function AdminLoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) });

  async function onSubmit(values: LoginValues) {
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || "Invalid credentials");
      }
      router.push("/admin/invoices");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-auth-shell">
      <form
        className="admin-auth-card"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <span className="eyebrow">ADMIN</span>
        <h1 style={{ fontSize: "28px", marginTop: "10px" }}>Sign in</h1>

        <div className="field" style={{ marginTop: "24px" }}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            {...register("email")}
          />
          {errors.email && (
            <span className="admin-field-error">{errors.email.message}</span>
          )}
        </div>

        <div className="field" style={{ marginTop: "16px" }}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            {...register("password")}
          />
          {errors.password && (
            <span className="admin-field-error">
              {errors.password.message}
            </span>
          )}
        </div>

        <button
          className="btn btn-primary"
          type="submit"
          disabled={loading}
          style={{ marginTop: "22px", width: "100%", opacity: loading ? 0.7 : 1 }}
        >
          {loading && <Spinner />}
          {loading ? "Signing in…" : "Sign in"}
        </button>

        {error && <div className="admin-form-error">{error}</div>}
      </form>
    </div>
  );
}
