import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import { BLOG_FAQS } from "@/content/company-faqs";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/content/blog-posts";
import { pageMetadata } from "@/lib/metadata";
import { BlogExplorer } from "./BlogExplorer";

export const metadata: Metadata = pageMetadata({
  title: "Blog: Prospecting, Outreach & Lead Generation",
  description: "Practical LeadGen AI articles on building prospect lists, writing outreach, scoring leads, keeping data clean and growing an agency pipeline.",
  path: "/blog",
});

export default function BlogPage() {
  const summaries = posts.map(({ slug, title, category, excerpt, readMinutes }) => ({ slug, title, category, excerpt, readMinutes }));
  return (
    <>
      <PageHero
        path="/blog"
        badge="Blog"
        title="Practical Notes On Lead Generation"
        intro="Hands-on articles for people who find, qualify and reach business prospects. Filter by topic or search for what you need."
      />
      <section className="section-y">
        <div className="container-x">
          <BlogExplorer posts={summaries} />
        </div>
      </section>
      <FaqSection items={BLOG_FAQS} subtitle="Quick Answers About The LeadGen AI Blog." />
    </>
  );
}
