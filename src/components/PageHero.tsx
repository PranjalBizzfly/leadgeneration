import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Sparkle } from "./icons";
import { breadcrumbs } from "@/lib/registry";

/** Simple hero for company pages (careers, media…), matching the content-page hero style. */
export function PageHero({ path, badge, title, intro, children }: { path: string; badge: string; title: string; intro: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div aria-hidden="true" className="absolute -top-48 right-[-10%] size-[42rem] rounded-full bg-[var(--glow-1)] blur-3xl" />
      <div className="container-x relative py-12 md:py-16 lg:py-20">
        <Breadcrumbs items={breadcrumbs(path)} />
        <span className="pill mt-7">
          <Sparkle size={14} /> {badge}
        </span>
        <h1 className="fade-up mt-5 max-w-4xl text-[clamp(2.3rem,5vw,4rem)] font-extrabold leading-[1.05]">{title}</h1>
        <p className="lead mt-6 max-w-3xl">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}
