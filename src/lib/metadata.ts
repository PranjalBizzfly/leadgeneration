import type { Metadata } from "next";
import { SITE } from "./site";

/** The site-wide social preview from app/opengraph-image.tsx. Listed explicitly because a page's own
 *  openGraph/twitter object replaces the inherited one, image included. */
export const SHARE_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: `${SITE.name}: ${SITE.tagline}` };

/**
 * Page metadata. Routes with their own opengraph-image/twitter-image files (blog posts) pass
 * `ownImage: true`, so the file-based images fill og:image and twitter:image. Content pages pass `image`
 * (their /og/<path> route handler URL, since catch-all routes cannot hold image files). Every other
 * route gets the site-wide image listed explicitly.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
  ownImage = false,
  image,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  ownImage?: boolean;
  image?: string;
}): Metadata {
  const shared = image ? { url: image, width: SHARE_IMAGE.width, height: SHARE_IMAGE.height, alt: `${title} | ${SITE.name}` } : SHARE_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: path },
    robots: noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: `${title} | ${SITE.name}`,
      description,
      url: path,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      ...(ownImage ? {} : { images: [shared] }),
    },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE.name}`, description, ...(ownImage ? {} : { images: [shared.url] }) },
  };
}
