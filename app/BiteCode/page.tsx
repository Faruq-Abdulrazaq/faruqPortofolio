// app/niches/restaurant/page.tsx
import type { Metadata } from "next";
import BiteCodeRestaurantTech from "./components/BiteCodeRestaurantTech";

export const metadata: Metadata = {
  title:
    "BiteCode Systems - Restaurant Technology | BiteEat ERP & Ordering Platform",
  description:
    "Transform your restaurant with BiteCode Systems featuring BiteEat - our flagship restaurant ERP and ordering application. Smart kitchen management, real-time analytics, and seamless customer experiences.",
  keywords: [
    "BiteCode Systems",
    "BiteEat Application",
    "Restaurant Technology",
    "Restaurant ERP",
    "Food Ordering Platform",
    "Restaurant Management System",
    "Kitchen Management Software",
    "Restaurant Analytics",
    "Food Delivery Platform",
    "Restaurant POS System",
    "Quick Service Restaurant Technology",
    "Fine Dining Technology",
    "Cloud Kitchen Solutions",
    "Restaurant Automation",
    "Food Tech Solutions",
  ],
  openGraph: {
    title:
      "BiteCode Systems - Revolutionizing Restaurant Operations with BiteEat",
    description:
      "Complete restaurant technology solutions featuring BiteEat - comprehensive ERP and ordering application that streamlines operations and drives profitability.",
    url: "https://faruqabdulrazaq.dev/niches/restaurant",
    images: [
      {
        url: "/og-restaurant.jpg",
        width: 1200,
        height: 630,
        alt: "BiteCode Systems - BiteEat Restaurant Technology Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BiteCode Systems - BiteEat Restaurant Technology",
    description:
      "Complete ERP and ordering application for modern restaurants. Streamline operations and boost profits with BiteEat by BiteCode Systems.",
    images: ["/og-restaurant.jpg"],
  },
  alternates: {
    canonical: "/niches/restaurant",
  },
};

export default function RestaurantTechPage() {
  return <BiteCodeRestaurantTech />;
}
