"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Spinner } from "@/components/ui/spinner";

export function LogoutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    setLoading(true);
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      className="btn btn-sm btn-ghost"
      onClick={handleLogout}
      disabled={loading}
    >
      {loading && <Spinner />}
      {loading ? "Logging out…" : "Log out"}
    </button>
  );
}
