import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Headphones,
  Mic,
  NotebookPen,
  PenLine,
  Receipt,
  Users,
  type LucideIcon,
} from "lucide-react";
import {
  getAudiobookConfigs,
  getAllBlogPosts,
  getClients,
  getCourseConfigs,
  getInvoices,
  getNotetakerConfigs,
  getPodcastConfigs,
} from "@/lib/firestore";

type Section = {
  href: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  group: "Business" | "Studio";
  count: number | null;
  countLabel: string;
  hint?: string;
};

// A failed Firestore read should blank one card's count, not the whole home page.
async function countOf<T>(load: () => Promise<T[]>): Promise<T[] | null> {
  try {
    return await load();
  } catch {
    return null;
  }
}

function greeting(): string {
  const hour = Number(
    new Intl.DateTimeFormat("en-GB", {
      hour: "numeric",
      hour12: false,
      timeZone: "Africa/Lagos",
    }).format(new Date()),
  );
  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}

export default async function AdminHomePage() {
  const [invoices, clients, blogs, podcasts, courses, audiobooks, notetakers] =
    await Promise.all([
      countOf(getInvoices),
      countOf(getClients),
      countOf(getAllBlogPosts),
      countOf(getPodcastConfigs),
      countOf(getCourseConfigs),
      countOf(getAudiobookConfigs),
      countOf(getNotetakerConfigs),
    ]);

  const unpaid = invoices?.filter((i) => i.status === "sent").length ?? 0;

  const sections: Section[] = [
    {
      href: "/admin/invoices",
      title: "Invoices",
      blurb: "Draft, send and track payments.",
      icon: Receipt,
      group: "Business",
      count: invoices?.length ?? null,
      countLabel: "invoices",
      hint: unpaid > 0 ? `${unpaid} awaiting payment` : undefined,
    },
    {
      href: "/admin/clients",
      title: "Clients",
      blurb: "Everyone you bill and work with.",
      icon: Users,
      group: "Business",
      count: clients?.length ?? null,
      countLabel: "clients",
    },
    {
      href: "/admin/blogs",
      title: "Blog",
      blurb: "Write and publish posts.",
      icon: PenLine,
      group: "Business",
      count: blogs?.length ?? null,
      countLabel: "posts",
    },
    {
      href: "/admin/podcast",
      title: "Podcasts",
      blurb: "Configure shows and generate episodes.",
      icon: Mic,
      group: "Studio",
      count: podcasts?.length ?? null,
      countLabel: "shows",
    },
    {
      href: "/admin/course",
      title: "Courses",
      blurb: "Turn lessons into audio courses.",
      icon: GraduationCap,
      group: "Studio",
      count: courses?.length ?? null,
      countLabel: "courses",
    },
    {
      href: "/admin/audiobook",
      title: "Audiobooks",
      blurb: "Narrate EPUBs into audiobooks.",
      icon: Headphones,
      group: "Studio",
      count: audiobooks?.length ?? null,
      countLabel: "audiobooks",
    },
    {
      href: "/admin/notetaker",
      title: "Note Taker",
      blurb: "Upload recordings, get clean notes.",
      icon: NotebookPen,
      group: "Studio",
      count: notetakers?.length ?? null,
      countLabel: "configs",
    },
  ];

  const groups: Section["group"][] = ["Business", "Studio"];

  return (
    <>
      <section className="admin-welcome">
        <span className="eyebrow">{greeting().toUpperCase()}</span>
        <h1>Welcome back, boss</h1>
        <p>Pick up where you left off — everything lives one click away.</p>
      </section>

      {groups.map((group) => (
        <section key={group} className="admin-group">
          <h2 className="admin-group-title">{group}</h2>
          <div className="admin-tiles">
            {sections
              .filter((s) => s.group === group)
              .map(({ href, title, blurb, icon: Icon, count, countLabel, hint }) => (
                <Link key={href} href={href} className="admin-tile">
                  <div className="admin-tile-top">
                    <span className="admin-tile-icon">
                      <Icon size={20} strokeWidth={1.75} aria-hidden />
                    </span>
                    <ArrowUpRight
                      className="admin-tile-arrow"
                      size={18}
                      aria-hidden
                    />
                  </div>
                  <h3>{title}</h3>
                  <p>{blurb}</p>
                  <div className="admin-tile-meta">
                    <span>
                      {count === null ? "—" : count} {countLabel}
                    </span>
                    {hint && <span className="admin-tile-hint">{hint}</span>}
                  </div>
                </Link>
              ))}
          </div>
        </section>
      ))}
    </>
  );
}
