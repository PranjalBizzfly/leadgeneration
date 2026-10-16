import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { LetterHeading } from "./LetterHeading";
import { Sparkle } from "./icons";
import { breadcrumbs } from "@/lib/registry";
import { pageBackground } from "@/lib/page-background";

/** Simple hero for company pages (careers, media…), matching the content-page hero style. */
export function PageHero({ path, badge, title, intro, children }: { path: string; badge: string; title: string; intro: string; children?: ReactNode }) {
  const bg = pageBackground(path);
  const photo = bg?.image;

  if (photo) {
    return (
      <section data-theme="dark" className="relative isolate overflow-hidden border-b border-line bg-bg text-ink">
        <Image src={photo.src} alt={bg.own ? photo.alt : ""} fill preload quality={90} sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        <div className="container-x relative py-12 md:py-16 lg:py-20">
          <Breadcrumbs items={breadcrumbs(path)} />
          <span className="pill mt-7 !border-white/20 !bg-white/10 !text-white backdrop-blur">
            <Sparkle size={14} /> {badge}
          </span>
          <LetterHeading text={title} as="h1" className="mt-5 max-w-4xl text-[clamp(2.3rem,5vw,4rem)] font-extrabold leading-[1.05] text-white" />
          <span aria-hidden="true" className="heading-accent-line mt-4 w-20 !bg-gradient-to-r !from-indigo-400 !via-purple-300 !to-cyan-400" />
          <p className="lead mt-6 max-w-3xl text-white/85">{intro}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden border-b border-line">
      <div aria-hidden="true" className="bg-grid absolute inset-0" />
      <div aria-hidden="true" className="absolute -top-48 right-[-10%] size-[42rem] rounded-full bg-[var(--glow-1)] blur-3xl" />
      <div className="container-x relative py-12 md:py-16 lg:py-20">
        <Breadcrumbs items={breadcrumbs(path)} />
        <span className="pill mt-7">
          <Sparkle size={14} /> {badge}
        </span>
        <LetterHeading text={title} as="h1" className="mt-5 max-w-4xl text-[clamp(2.3rem,5vw,4rem)] font-extrabold leading-[1.05]" />
        <span aria-hidden="true" className="heading-accent-line mt-4 w-20" />
        <p className="lead mt-6 max-w-3xl">{intro}</p>
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

