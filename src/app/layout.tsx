import type { Metadata, Viewport } from "next";
import { Karla, Marcellus, Tiro_Devanagari_Sanskrit } from "next/font/google";
import { BRANCHES, BRANCH_KEYS } from "@/data/branches";
import { site } from "@/data/site";
import "./globals.css";

// Self-hosted at build time; globals.css reads these variables in --f-display / --f-body / --f-deva.
const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});
const karla = Karla({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-karla",
  display: "swap",
});
const tiro = Tiro_Devanagari_Sanskrit({
  weight: "400",
  subsets: ["devanagari", "latin"],
  variable: "--font-tiro",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  alternates: { canonical: site.url },
  // The share image comes from opengraph-image.png in this folder.
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_IN",
    title: site.ogTitle,
    description: site.ogDescription,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

// Same @graph as the reference: one DaySpa per branch.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": BRANCH_KEYS.map((key) => {
    const b = BRANCHES[key];
    return {
      "@type": "DaySpa",
      name: b.name,
      telephone: `+91-${b.raw}`,
      url: `${site.url}#sector-${key}`,
      priceRange: site.priceRange,
      address: {
        "@type": "PostalAddress",
        streetAddress: b.streetAddress,
        addressLocality: "Gurugram",
        addressRegion: "Haryana",
        postalCode: b.postalCode,
        addressCountry: "IN",
      },
      openingHours: site.openingHours,
      parentOrganization: {
        "@type": "Organization",
        name: site.name,
        url: site.url,
      },
    };
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${marcellus.variable} ${karla.variable} ${tiro.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
