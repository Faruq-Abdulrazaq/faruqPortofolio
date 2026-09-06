import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { SESSION_COOKIE_NAME, verifySessionToken } from "@/lib/auth";
import { LogoutButton } from "@/components/admin/logout-button";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE_NAME)?.value;
  const isValid = token ? await verifySessionToken(token) : false;

  // Belt-and-suspenders alongside middleware.ts — catches any route added
  // later that misses the middleware matcher.
  if (!isValid) {
    redirect("/admin/login");
  }

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div className="container admin-topbar-inner">
          <Link href="/admin/invoices" className="brand">
            <span className="brand-name">Faruq Abdulrazaq</span>
            <span className="brand-suffix">/ admin</span>
          </Link>
          <nav className="admin-nav">
            <Link className="nav-link" href="/admin/invoices">
              Invoices
            </Link>
            <Link className="nav-link" href="/admin/clients">
              Clients
            </Link>
          </nav>
          <LogoutButton />
        </div>
      </header>
      <main className="admin-main">
        <div className="container">{children}</div>
      </main>
    </div>
  );
}
