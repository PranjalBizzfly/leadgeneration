import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/CtaBand";
import { ArrowRight, Check } from "@/components/icons";
import { PageHero } from "@/components/PageHero";
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
  return pageMetadata({ title: post.title, description: post.metaDescription, path: `/blog/${post.slug}` });
}

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const related = post.related.filter(isLive).map((p) => getPlan(p)!);
  const more = posts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 2);

  return (
    <>
      <PageHero path={`/blog/${post.slug}`} badge={post.category} title={post.title} intro={post.excerpt}>
        <span className="chip">{post.readMinutes} min read</span>
      </PageHero>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-16">
          <article className="min-w-0 max-w-3xl">
            {post.sections.map((s) => (
              <section key={s.heading} id={slugify(s.heading)} className="mt-9 scroll-mt-28 first:mt-0">
                <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-extrabold leading-tight">{s.heading}</h2>
                <div className="prose-body mt-5 text-[17px]">
                  {s.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
                {s.bullets && (
                  <ul className="mt-5 grid gap-3">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-[15px] leading-relaxed text-ink-soft">
                        <Check size={18} className="mt-0.5 shrink-0 text-brand" strokeWidth={2.6} /> {b}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <Link href="/blog" className="btn btn-ghost mt-10 !rounded-full">
              Blog
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
        <section className="section-y border-t border-line bg-bg-alt">
          <div className="container-x">
            <h2 className="text-2xl font-extrabold sm:text-3xl">Keep Reading</h2>
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

      <div className="container-x mt-12 md:mt-14">
        <CtaBand heading="Put It Into Practice" text="Run your first queries on the Free plan, or talk to us about your prospecting." label="Start Free" href={SITE.appUrl} />
      </div>
    </>
  );
}
