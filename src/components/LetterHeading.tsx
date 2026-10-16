"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  text: string;
  as?: "h1" | "h2" | "h3" | "h4" | "span" | "div";
  id?: string;
  className?: string;
  /** Milliseconds per character. If omitted, calculated dynamically based on length (14ms-32ms). */
  speed?: number;
  /** Delay in milliseconds before starting to type. Default 60ms. */
  delay?: number;
  /** If true, typing starts when the element scrolls into view. Default false. */
  triggerOnScroll?: boolean;
  /** Whether to show a blinking cursor while typing. Default true. */
  cursor?: boolean;
}

/**
 * Loads heading text letter-by-letter like a responsive typewriter.
 * The full text is always laid out (untyped letters are only transparent), so the heading never
 * changes size while it types: no layout shift. The cursor is zero-width and absolutely positioned.
 * Screen readers and crawlers get the complete text; reduced-motion users see it statically.
 */
export function LetterHeading({
  text,
  as = "h2",
  id,
  className = "",
  speed,
  delay = 60,
  triggerOnScroll = false,
  cursor = true,
}: Props) {
  // null = static, fully visible text (server render, no JS, reduced motion, finished).
  const [count, setCount] = useState<number | null>(null);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const charDelay = speed ?? Math.max(14, Math.min(32, Math.floor(1100 / Math.max(text.length, 1))));
    let timer: ReturnType<typeof setTimeout> | undefined;
    let io: IntersectionObserver | undefined;

    const run = () => {
      let c = 0;
      const tick = () => {
        if (c >= text.length) {
          timer = setTimeout(() => setCount(null), 350);
          return;
        }
        // Advance by 1 character, or 2 if next is whitespace for natural rhythm.
        c = Math.min(text.length, c + (text[c] === " " ? 2 : 1));
        setCount(c);
        timer = setTimeout(tick, charDelay);
      };
      timer = setTimeout(tick, delay);
    };

    // Hide the letters (opacity only, layout unchanged) after hydration, then type once started.
    const hide = requestAnimationFrame(() => {
      setCount(0);
      if (!triggerOnScroll) return run();
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io?.disconnect();
            run();
          }
        },
        { rootMargin: "0px 0px -40px 0px", threshold: 0.15 },
      );
      io.observe(el);
    });

    return () => {
      cancelAnimationFrame(hide);
      clearTimeout(timer);
      io?.disconnect();
    };
  }, [text, speed, delay, triggerOnScroll]);

  const Tag = as as "h2";
  const typing = count !== null;

  const inline = as === "span";
  return (
    <Tag ref={ref} id={id} className={`relative ${inline ? "inline-grid" : "grid"} ${className}`}>
      {/* Accessible to screen readers and SEO crawlers */}
      <span className="sr-only">{text}</span>
      {/* The full, unsplit text always defines the box (same cell as the typed layer), so splitting a word
          mid-type can never change line breaks or height. It is only made transparent while typing. */}
      <span aria-hidden="true" className={`[grid-area:1/1] ${typing ? "opacity-0" : ""}`}>
        {text}
      </span>
      {typing && (
        <span aria-hidden="true" className="[grid-area:1/1]">
          {text.slice(0, count)}
          {cursor && (
            <span className="relative">
              <span className="type-cursor absolute left-1 top-[0.12em] h-[0.82em] w-[3px] rounded-full bg-brand shadow-[0_0_8px_var(--brand)]" />
            </span>
          )}
        </span>
      )}
    </Tag>
  );
}
