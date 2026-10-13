import Link from "next/link";
import { SITE } from "@/lib/site";

/** LeadGen AI mark: indigo→violet rounded tile with a white "L". */
export function BrandMark({ size = 36 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="grid shrink-0 place-items-center rounded-[28%] bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] font-display font-bold leading-none text-white shadow-[0_6px_16px_-6px_rgba(99,102,241,0.7)]"
      style={{ width: size, height: size, fontSize: size * 0.44 }}
    >
      L
    </span>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3 whitespace-nowrap" aria-label={`${SITE.name} home`}>
      <BrandMark />
      <span className="font-display text-[19px] font-bold tracking-tight text-ink">LeadGen AI</span>
    </Link>
  );
}
