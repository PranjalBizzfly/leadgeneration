import Link from "next/link";
import { ArrowRight, Sparkle } from "./icons";

interface Props {
  heading: string;
  text: string;
  label: string;
  href: string;
}

/** Full-width gradient call-to-action band with a centred message. */
export function CtaBand({ heading, text, label, href }: Props) {
  const external = href.startsWith("http");
  const primary = "btn !rounded-full bg-white !px-7 !py-3.5 text-base text-[#4338ca] hover:bg-white/90";
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#3730a3] via-[#4f46e5] to-[#7c3aed] px-6 py-16 text-center text-white sm:px-12 md:py-20">
      <div aria-hidden="true" className="absolute -left-24 -top-24 size-80 rounded-full bg-white/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-32 -right-16 size-96 rounded-full bg-[#22d3ee]/25 blur-3xl" />
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-3xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
          <Sparkle size={14} /> Next step
        </span>
        <h2 className="mt-6 text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.08]">{heading}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-white/80">{text}</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          {external ? (
            <a href={href} rel="noopener" className={primary}>
              {label} <ArrowRight size={18} />
            </a>
          ) : (
            <Link href={href} className={primary}>
              {label} <ArrowRight size={18} />
            </Link>
          )}
          {href !== "/contact" && (
            <Link href="/contact" className="btn !rounded-full border border-white/35 !px-7 !py-3.5 text-base text-white hover:bg-white/10">
              Talk to us
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
