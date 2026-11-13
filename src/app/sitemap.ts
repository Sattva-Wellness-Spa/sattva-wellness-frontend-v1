import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Required so the route is written to out/sitemap.xml during a static export.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
