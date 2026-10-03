import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/** "Back to the list" link that reads as a link: accent on hover, arrow nudges left. */
export function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="back-link">
      <ArrowLeft size={15} aria-hidden />
      {children}
    </Link>
  );
}
