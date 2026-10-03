"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { House } from "lucide-react";

/** Topbar "Home" button; highlighted while you're on the admin home page. */
export function HomeLink() {
  const pathname = usePathname().replace(/\/+$/, "");
  const active = pathname === "/admin";

  return (
    <Link
      href="/admin"
      className={`btn btn-sm btn-ghost home-link${active ? " is-active" : ""}`}
      aria-current={active ? "page" : undefined}
    >
      <House size={15} aria-hidden />
      Home
    </Link>
  );
}
