import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { HomeLink } from "@/components/admin/home-link";
import { LogoutButton } from "@/components/admin/logout-button";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const isValid = token ? await verifySessionToken(token) : false;

  // Belt-and-suspenders alongside proxy.ts — catches any route added
  // later that misses its matcher.
  if (!isValid) {
    redirect("/admin/login");
  }

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div className="container admin-topbar-inner">
          <Link href="/admin" className="brand">
            <span className="brand-name">Faruq Abdulrazaq</span>
            <span className="brand-suffix">/ admin</span>
          </Link>
          <div className="admin-topbar-actions">
            <HomeLink />
            <LogoutButton />
          </div>
        </div>
      </header>
      <main className="admin-main">
        <div className="container">{children}</div>
      </main>
    </div>
  );
}
