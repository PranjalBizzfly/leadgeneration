import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPage } from "@/components/ContentPage";
import { pageMetadata } from "@/lib/metadata";
import { contentSlugs, getContent, getPlan } from "@/lib/registry";

export function generateStaticParams() {
  return contentSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = `/${(await params).slug.join("/")}`;
  const content = getContent(path);
  if (!content) return {};
  return pageMetadata({ title: content.metaTitle, description: content.metaDescription, path });
}

export default async function Page({ params }: Props) {
  const path = `/${(await params).slug.join("/")}`;
  const content = getContent(path);
  const plan = getPlan(path);
  if (!content || !plan) notFound();
  return <ContentPage content={content} plan={plan} />;
}
