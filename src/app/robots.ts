import type { MetadataRoute } from "next";
import { site } from "@/data/site";

// Required so the route is written to out/robots.txt during a static export.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}sitemap.xml`,
  };
}
