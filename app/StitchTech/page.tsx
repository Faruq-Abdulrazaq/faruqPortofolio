// app/niches/fashion/page.tsx
import type { Metadata } from "next";
import StitchTechFashion from "./components/StitchTechFashion";

export const metadata: Metadata = {
  title:
    "StitchTech Solutions - Fashion Technology | E-commerce & AI for Fashion Brands",
  description:
    "Transform your fashion business with StitchTech Solutions. Custom e-commerce platforms, AI-powered recommendations, inventory management, and digital brand transformation for fashion brands.",
  keywords: [
    "Fashion Technology",
    "Fashion E-commerce",
    "Fashion AI Solutions",
    "StitchTech Solutions",
    "Fashion Software Development",
    "Fashion Brand Technology",
    "E-commerce for Fashion",
    "Fashion Inventory Management",
    "Fashion Analytics",
    "Fashion Automation",
    "Custom Fashion Platforms",
    "Fashion Digital Transformation",
  ],
  openGraph: {
    title: "StitchTech Solutions - Fashion Technology Innovation",
    description:
      "Revolutionizing fashion with cutting-edge technology. E-commerce platforms, AI recommendations, and smart automation for fashion brands.",
    url: "https://faruqabdulrazaq.dev/niches/fashion",
    images: [
      {
        url: "/og-fashion.jpg",
        width: 1200,
        height: 630,
        alt: "StitchTech Solutions - Fashion Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "StitchTech Solutions - Fashion Technology",
    description:
      "Revolutionizing fashion with technology. E-commerce platforms, AI solutions, and digital transformation for fashion brands.",
    images: ["/og-fashion.jpg"],
  },
  alternates: {
    canonical: "/niches/fashion",
  },
};

export default function FashionPage() {
  return <StitchTechFashion />;
}
