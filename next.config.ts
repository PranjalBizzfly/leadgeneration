import type { NextConfig } from "next";
import { RENAMED_ROUTES } from "./src/lib/renamed-routes";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: false,
  // Old URLs permanently redirect (308) to the renamed pages, keeping links and search rankings working.
  redirects() {
    return Object.entries(RENAMED_ROUTES).map(([source, destination]) => ({ source, destination, permanent: true }));
  },
  // Photos are delivered at quality 90 (Next 16 only allows qualities listed here).
  images: { qualities: [75, 90], formats: ["image/webp"] },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
