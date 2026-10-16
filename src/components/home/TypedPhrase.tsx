"use client";

import { useEffect, useState } from "react";

/**
 * Types each phrase, pauses, deletes it and moves on, with a blinking cursor.
 * Every phrase is laid out invisibly in the same grid cell, so the box is always as wide as the longest
 * phrase and the heading never reflows while typing. The cursor is zero-width and absolutely positioned.
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
      <span aria-hidden="true" className="inline-grid whitespace-nowrap">
        {phrases.map((p) => (
          <span key={p} className="invisible col-start-1 row-start-1">
            {p}
          </span>
        ))}
        <span className="col-start-1 row-start-1 justify-self-start">
          <span className="text-grad">{phrases[index].slice(0, length)}</span>
          <span className="relative">
            <span className="type-cursor absolute left-1 top-[0.1em] h-[0.85em] w-[3px] rounded-full bg-brand" />
          </span>
        </span>
      </span>
    </>
  );
}
