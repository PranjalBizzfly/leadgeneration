import type { Metadata } from "next";
import { Suspense } from "react";
import { LetterHeading } from "@/components/LetterHeading";
import { pageMetadata } from "@/lib/metadata";
import { SearchResults } from "./SearchResults";

export const metadata: Metadata = pageMetadata({
  title: "Search",
  description: "Search every page on the LeadGen AI website: platform services, lead generation strategies, industries and B2B guides.",
  path: "/search",
  noindex: true,
});

export default function SearchPage() {
  return (
    <div className="container-x max-w-3xl py-12">
      <LetterHeading text="Search the site" as="h1" className="text-4xl font-extrabold" />
      <span aria-hidden="true" className="heading-accent-line mt-3.5 w-16" />
      <Suspense fallback={<div className="mt-8 h-14 rounded-xl border border-line bg-surface" />}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
