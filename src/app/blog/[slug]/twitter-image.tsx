import { notFound } from "next/navigation";
import { posts } from "@/content/blog-posts";
import { GROUPS } from "@/lib/groups";
import { brandOgImage } from "@/lib/og-image";

// Prerendered at build time for every post (params come from the page's generateStaticParams).
export const alt = "LeadGen AI blog article preview";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function TwitterImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  return brandOgImage({ label: `${GROUPS.blog.label} · ${post.category}`, title: post.title });
}
