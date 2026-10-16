import { GROUPS } from "@/lib/groups";
import { brandOgImage } from "@/lib/og-image";
import { contentSlugs, getContent, getPlan } from "@/lib/registry";

/**
 * Per-page social preview for content pages, at /og/<page path>. A catch-all page route can't hold an
 * opengraph-image file (the catch-all must be the last URL segment), so the images live here and
 * pageMetadata() points og:image / twitter:image at them. Prerendered at build time for every page.
 */
export function generateStaticParams() {
  return contentSlugs().map((slug) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const path = `/${(await params).slug.join("/")}`;
  const content = getContent(path);
  const plan = getPlan(path);
  if (!content || !plan) return new Response("Not found", { status: 404 });
  return brandOgImage({ label: GROUPS[plan.group].label, title: content.h1 });
}
