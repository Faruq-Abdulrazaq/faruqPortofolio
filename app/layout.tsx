// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Faruq Abdulrazaq - Software Engineer | Custom Software Solutions",
    template: "%s | Faruq Abdulrazaq - Software Engineer",
  },
  description:
    "Faruq Abdulrazaq is a Software Engineer specializing in custom software development, AI solutions, e-commerce platforms, and digital transformation for businesses across fashion, restaurant, real estate, and automotive industries.",
  keywords: [
    "Software Engineer",
    "Custom Software Development",
    "E-commerce Development",
    "AI Solutions",
    "Fashion Technology",
    "Restaurant Technology",
    "Real Estate Technology",
    "Automotive Software",
    "Full Stack Developer",
    "React Developer",
    "Python Developer",
    "Next.js Developer",
    "Lagos Nigeria",
    "Software Consultant",
  ],
  authors: [{ name: "Faruq Taye Abdulrazaq" }],
  creator: "Faruq Taye Abdulrazaq",
  publisher: "Faruq Abdulrazaq",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://faruqabdulrazaq.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://faruqabdulrazaq.dev",
    title: "Faruq Abdulrazaq - Software Engineer | Custom Software Solutions",
    description:
      "Software Engineer specializing in custom software development, AI solutions, and digital transformation for businesses. 5+ years experience across multiple industries.",
    siteName: "Faruq Abdulrazaq Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Faruq Abdulrazaq - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Faruq Abdulrazaq - Software Engineer",
    description:
      "Custom Software Development | AI Solutions | Digital Transformation",
    creator: "@faruq_developer",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#000000",
    "theme-color": "#ffffff",
  },
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Additional Meta Tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Faruq Taye Abdulrazaq",
              jobTitle: "Software Engineer",
              url: "https://faruqabdulrazaq.dev",
              sameAs: [
                "https://www.linkedin.com/in/faruq-taye-abdulrazaq/",
                "https://github.com/faruq-developer",
                "https://x.com/faruq_developer",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Freelance Software Engineer",
              },
              knowsAbout: [
                "Software Engineering",
                "Custom Software Development",
                "E-commerce Development",
                "AI Solutions",
                "Web Development",
                "Mobile Development",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "Nigeria",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: "rgba(0, 0, 0, 0.9)",
              color: "#fff",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "12px",
              backdropFilter: "blur(20px)",
            },
          }}
        />
      </body>
    </html>
  );
}
