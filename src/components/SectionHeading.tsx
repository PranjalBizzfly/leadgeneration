import { LetterHeading } from "./LetterHeading";
import { Sparkle } from "./icons";

interface Props {
  badge: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  id?: string;
  /** Use "h1" only for page-level headings. */
  as?: "h2" | "h1";
}

/** Pill badge + large heading + optional subtitle, used to open every major section. */
export function SectionHeading({ badge, title, subtitle, align = "center", id, as: Tag = "h2" }: Props) {
  const center = align === "center";
  return (
    <div className={`group ${center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      <span className="pill">
        <Sparkle size={14} /> {badge}
      </span>
      <LetterHeading text={title} as={Tag} id={id} triggerOnScroll className="h-section mt-4" />
      <span aria-hidden="true" className={`heading-accent-line mt-3.5 ${center ? "mx-auto" : ""}`} />
      {subtitle && <p className={`lead mt-4 ${center ? "mx-auto max-w-2xl" : ""}`}>{subtitle}</p>}
    </div>
  );
}
