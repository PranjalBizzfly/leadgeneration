import type { Metadata } from "next";
import { SITE } from "./site";

export function pageMetadata({ title, description, path, noindex = false }: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: { title: `${title} | ${SITE.name}`, description, url: path, siteName: SITE.name, type: "website", locale: "en_US" },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE.name}`, description },
  };
}
