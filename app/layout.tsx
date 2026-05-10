import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Faruq Abdulrazaq — Automation & Platform Engineering",
    template: "%s | Faruq Abdulrazaq",
  },
  description:
    "Automation Engineer and Full Stack Developer focused on infrastructure automation, Kubernetes operations, DevOps tooling, and enterprise software systems.",
  keywords: [
    "Automation Engineer",
    "Platform Engineering",
    "DevOps",
    "Kubernetes",
    "Infrastructure Automation",
    "Full Stack Developer",
    "GitLab CI",
    "Terraform",
    "HashiCorp Vault",
    "Python",
    "FastAPI",
    "React",
    "Next.js",
    "Lagos Nigeria",
  ],
  authors: [{ name: "Faruq Abdulrazaq" }],
  creator: "Faruq Abdulrazaq",
  publisher: "Faruq Abdulrazaq",
  metadataBase: new URL("https://faruqabdulrazaq.dev"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faruqabdulrazaq.dev",
    title: "Faruq Abdulrazaq — Automation & Platform Engineering",
    description:
      "Automation Engineer and Full Stack Developer building infrastructure automation, Kubernetes operations, and enterprise software systems.",
    siteName: "Faruq Abdulrazaq",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Faruq Abdulrazaq" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faruq Abdulrazaq — Automation & Platform Engineering",
    description: "Infrastructure Automation · Kubernetes · DevOps · Full Stack",
    creator: "@faruq_developer",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={ibmPlexMono.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <meta name="color-scheme" content="dark light" />
        <meta name="theme-color" content="#0a0c10" />
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme')||(window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark');document.documentElement.setAttribute('data-theme',t)}catch(e){}})()` }} />
      </head>
      <body>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "rgba(15, 18, 24, 0.95)",
              color: "#f3f4f6",
              border: "1px solid #2a313e",
              borderRadius: "10px",
              backdropFilter: "blur(14px)",
              fontFamily: "var(--mono)",
              fontSize: "13px",
            },
          }}
        />
      </body>
    </html>
  );
}
