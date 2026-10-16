import type { Metadata } from "next";
import { FaqSection } from "@/components/FaqSection";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight, Check } from "@/components/icons";
import { LetterHeading } from "@/components/LetterHeading";
import { PageHero } from "@/components/PageHero";
import { PageSchema } from "@/components/PageSchema";
import { TopicLinkGrid } from "@/components/TopicLinkCard";
import { posts } from "@/content/blog-posts";
import { pageMetadata } from "@/lib/metadata";
import { getPlan, isLive } from "@/lib/registry";
import { SITE } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return pageMetadata({ title: post.title, description: post.metaDescription, path: `/blog/${post.slug}`, ownImage: true });
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = post.related.filter(isLive).map((p) => getPlan(p)!);
  const more = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <div className="page-root">
      <PageSchema post={post} />
      <PageHero path={`/blog/${post.slug}`} badge={post.category} title={post.title} intro={post.excerpt}>
        <span className="chip">{post.readMinutes} min read</span>
      </PageHero>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <article className="min-w-0 max-w-[44rem]">
            {/* Phones: the contents list sits above the article, collapsed. */}
            <details className="card mb-8 p-4 lg:hidden">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between font-semibold [&::-webkit-details-marker]:hidden">
                In This Article <span aria-hidden="true" className="text-muted">{post.sections.length} Sections</span>
              </summary>
              <ol className="mt-2 grid gap-1 text-[15px]">
                {post.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a href={`#${slugify(s.heading)}`} className="flex min-h-11 items-center gap-3 text-ink-soft hover:text-brand">
                      <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </details>
            {post.sections.map((s) => (
              <section key={s.heading} id={slugify(s.heading)} className="mt-12 scroll-mt-28 first:mt-0">
                {/* Static heading: typing effects get in the way of reading. */}
                <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight tracking-tight">{s.heading}</h2>
                <span aria-hidden="true" className="heading-accent-line mt-3" />
                <div className="prose-body mt-5 max-w-[68ch] text-[17.5px] sm:text-[18px]">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                {s.bullets && (
                  <ul className="mt-6 grid max-w-[68ch] gap-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-[15px] leading-relaxed text-ink-soft">
                        <Check size={18} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.6} /> {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <Link href="/blog" className="btn btn-ghost mt-12 !rounded-full">
              <ArrowRight size={15} className="rotate-180" /> Blog
            </Link>
          </article>
          <aside className="hidden lg:block" aria-label="In this article">
            <nav className="card sticky top-28 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-muted">In This Article</p>
              <ol className="mt-3 grid gap-2.5 text-sm">
                {post.sections.map((s) => (
                  <li key={s.heading}>
                    <a href={`#${slugify(s.heading)}`} className="text-ink-soft hover:text-brand">
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ol>
              <a href={SITE.appUrl} rel="noopener" className="btn btn-primary mt-5 w-full !rounded-full !text-sm">
                Start Free <ArrowRight size={15} />
              </a>
            </nav>
          </aside>
        </div>
      </section>

      {(related.length > 0 || more.length > 0) && (
        <section className="section-y border-t border-line bg-bg-alt cut-slant">
          <div className="container-x">
            <LetterHeading text="Keep Reading" as="h2" triggerOnScroll className="text-2xl font-extrabold sm:text-3xl" />
            <span aria-hidden="true" className="heading-accent-line mt-3" />
            {more.length > 0 && (
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {more.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="card card-link p-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand">{p.category}</span>
                    <span className="mt-2 block font-display text-lg font-bold">{p.title}</span>
                  </Link>
                ))}
              </div>
            )}
            {related.length > 0 && <TopicLinkGrid pages={related} />}
          </div>
        </section>
      )}

      {post.faqs && <FaqSection items={post.faqs} subtitle="Quick answers about this article." cut="cut-slant" className={related.length > 0 || more.length > 0 ? "!border-t-0" : ""} />}

      <div className="container-x mt-12 md:mt-14">
        <CtaBand heading="Put It Into Practice" text="Run your first queries on the Free plan, or talk to us about your prospecting." label="Start Free" href={SITE.appUrl} />
      </div>
    </div>
  );
}
