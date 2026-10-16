import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";
import { PageSchema } from "@/components/PageSchema";
import { pageMetadata } from "@/lib/metadata";
import { contentSlugs, getContent, getPlan } from "@/lib/registry";

export function generateStaticParams() {
  return contentSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = `/${(await params).slug.join("/")}`;
  const content = getContent(path);
  // Unknown paths render the 404 page; give it a title instead of an empty head.
  if (!content) return { title: "Page Not Found", robots: { index: false } };
  return pageMetadata({ title: content.metaTitle, description: content.metaDescription, path, image: `/og${path}` });
}

export default async function Page({ params }: Props) {
  const path = `/${(await params).slug.join("/")}`;
  const content = getContent(path);
  const plan = getPlan(path);
  if (!content || !plan) notFound();
  return (
    <>
      <PageSchema content={content} />
      <ContentPage content={content} plan={plan} />
    </>
  );
}
