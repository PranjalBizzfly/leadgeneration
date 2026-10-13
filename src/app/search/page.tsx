import type { Metadata } from "next";
import { Suspense } from "react";
import { pageMetadata } from "@/lib/metadata";
import { SearchResults } from "./SearchResults";

export const metadata: Metadata = pageMetadata({
  title: "Search",
  description: "Search every page on the LeadGen AI website — platform services, lead generation strategies, industries and B2B guides.",
  path: "/search",
  noindex: true,
});

export default function SearchPage() {
  return (
    <div className="container-x max-w-3xl py-12">
      <h1 className="text-4xl font-extrabold">Search the site</h1>
      <Suspense fallback={<div className="mt-8 h-14 rounded-xl border border-line bg-surface" />}>
        <SearchResults />
      </Suspense>
    </div>
  );
}
