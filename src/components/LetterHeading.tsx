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
 * Fully accessible (crawlers and screen readers get the complete text in sr-only).
 * Reduced-motion users see the complete static text immediately.
 */
export function LetterHeading({
  text,
  as: Tag = "h2",
  id,
  className = "",
  speed,
  delay = 60,
  triggerOnScroll = false,
  cursor = true,
}: Props) {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!triggerOnScroll);
  const [done, setDone] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // IntersectionObserver for scroll-triggered headings
  useEffect(() => {
    if (!triggerOnScroll) {
      setStarted(true);
      return;
    }
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStarted(true);
      setDone(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setStarted(true);
            io.disconnect();
            break;
          }
        }
      },
      { rootMargin: "0px 0px -40px 0px", threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [triggerOnScroll]);

  // Mount check and reduced motion check
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }
    setMounted(true);
  }, []);

  // Letter by letter typing loop
  useEffect(() => {
    if (!mounted || !started || done) return;

    // Calculate dynamic speed: longer headings type faster so they finish crisply (~0.4s to 1.3s)
    const charDelay =
      speed ?? Math.max(14, Math.min(32, Math.floor(1100 / Math.max(text.length, 1))));

    // Initial delay before typing begins
    let timer: NodeJS.Timeout;
    if (count === 0) {
      timer = setTimeout(() => {
        setCount(1);
      }, delay);
      return () => clearTimeout(timer);
    }

    if (count >= text.length) {
      // Finished typing: short pause then fade cursor
      const finishTimer = setTimeout(() => {
        setDone(true);
      }, 350);
      return () => clearTimeout(finishTimer);
    }

    // Advance by 1 character, or 2 if next is whitespace for natural rhythm
    const step = text[count] === " " ? 2 : 1;
    timer = setTimeout(() => {
      setCount((c) => Math.min(text.length, c + step));
    }, charDelay);

    return () => clearTimeout(timer);
  }, [mounted, started, count, done, text, speed, delay]);

  const displayed = mounted && !done ? text.slice(0, count) : text;
  const showCursor = cursor && mounted && started && !done;

  return (
    <Tag ref={ref as any} id={id} className={`relative ${className}`}>
      {/* Accessible to screen readers and SEO crawlers */}
      <span className="sr-only">{text}</span>
      {/* Visual letter-by-letter rendering */}
      <span aria-hidden="true" suppressHydrationWarning>
        {displayed}
        {showCursor && (
          <span
            aria-hidden="true"
            className="type-cursor ml-1 inline-block h-[0.82em] w-[3px] translate-y-[0.06em] rounded-full bg-brand shadow-[0_0_8px_var(--brand)]"
          />
        )}
      </span>
    </Tag>
  );
}
