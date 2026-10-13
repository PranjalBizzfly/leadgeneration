"use client";

import { useEffect, useState } from "react";

/**
 * Types each phrase, pauses, deletes it and moves on, with a blinking cursor.
 * Screen readers get the first phrase as static text; reduced-motion users see it without animation.
 */
export function TypedPhrase({ phrases }: { phrases: string[] }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(phrases[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const phrase = phrases[index];
    let delay = deleting ? 45 : 85;
    if (!deleting && length === phrase.length) delay = 1900;
    if (deleting && length === 0) delay = 350;
    const t = setTimeout(() => {
      if (!deleting && length === phrase.length) setDeleting(true);
      else if (deleting && length === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      } else setLength((l) => l + (deleting ? -1 : 1));
    }, delay);
    return () => clearTimeout(t);
  }, [index, length, deleting, phrases]);

  return (
    <>
      <span className="sr-only">{phrases[0]}</span>
      <span aria-hidden="true" className="whitespace-nowrap">
        <span className="text-grad">{phrases[index].slice(0, length)}</span>
        <span className="type-cursor ml-1 inline-block h-[0.85em] w-[3px] translate-y-[0.08em] rounded-full bg-brand" />
      </span>
    </>
  );
}
