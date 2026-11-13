export const site = {
  name: "Sattva Wellness Spa",
  url: "https://www.sattvawellnessspa.com/",
  title: "Sattva Wellness Spa",
  description:
    "Sattva Wellness Spa, two branches in Gurugram: Sector 83 and Sector 64. Thai, Balinese, deep tissue and signature massages, couples' rituals with private Jacuzzi, and wellness packages in a calm, hygienic space. Book on WhatsApp.",
  ogTitle: "Sattva Wellness Spa · Sector 83 & Sector 64, Gurugram",
  ogDescription:
    "Two branches, one menu. Signature therapies from ₹1,999, couples' rituals with private Jacuzzi, and wellness packages. Book on WhatsApp.",
  priceRange: "₹1,999–₹5,000",
  /** schema.org openingHours */
  openingHours: "Mo-Su 09:00-21:00",
  hours: "Every day, 9:00 AM – 9:00 PM",
  lastBooking: "8:00 PM",
  copyright: "© 2026 Sattva Wellness Spa, Gurugram",
} as const;

export interface NavItem {
  href: string;
  label: string;
}

export const headerNav: readonly NavItem[] = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#therapies", label: "Therapies" },
  { href: "#couples", label: "Couples" },
  { href: "#packages", label: "Packages" },
  { href: "#branches", label: "Branches" },
  { href: "#faq", label: "FAQ" },
];

export const footerNav: readonly NavItem[] = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#therapies", label: "Therapies" },
  { href: "#couples", label: "Couples" },
  { href: "#packages", label: "Packages" },
  { href: "#branches", label: "Branches" },
  { href: "#book", label: "Book" },
  { href: "#faq", label: "FAQ" },
];
