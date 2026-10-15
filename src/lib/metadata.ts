import type { Metadata } from "next";
import { SITE } from "./site";

/** The site-wide social preview from app/opengraph-image.tsx. Listed explicitly because a page's own
 *  openGraph/twitter object replaces the inherited one, image included. */
export const SHARE_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE.name}: ${SITE.tagline}` };

export function pageMetadata({ title, description, path, noindex = false }: { title: string; description: string; path: string; noindex?: boolean }): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: { title: `${title} | ${SITE.name}`, description, url: path, siteName: SITE.name, type: "website", locale: "en_US", images: [SHARE_IMAGE] },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE.name}`, description, images: [SHARE_IMAGE.url] },
  };
}
