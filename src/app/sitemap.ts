import type { MetadataRoute } from "next";
import { LIVE } from "@/lib/registry";
import { absoluteUrl } from "@/lib/site";

/** XML sitemap of every live, indexable route (Phase 2 routes appear automatically once they have content). */
export default function sitemap(): MetadataRoute.Sitemap {
  return LIVE.map((p) => ({
    url: absoluteUrl(p.path),
    changeFrequency: "monthly",
    priority: p.path === "/" ? 1 : p.path.split("/").length === 2 ? 0.8 : 0.6,
  }));
}
