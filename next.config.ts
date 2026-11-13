import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Build plain HTML/CSS/JS into the `out/` folder for shared hosting (cPanel / MilesWeb).
  output: "export",
  // Static export has no image server.
  images: { unoptimized: true },
  // /about -> /about/index.html, which Apache serves without rewrites.
  trailingSlash: true,
};

export default nextConfig;
