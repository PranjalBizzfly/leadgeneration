import { brandOgImage } from "@/lib/og-image";

export const alt = "LeadGen AI: Prospect Intelligence Platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return brandOgImage({ title: "Find, enrich, score and reach the right prospects", footer: "Google Maps · LinkedIn · IndiaMART" });
}
