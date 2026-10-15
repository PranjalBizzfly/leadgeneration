import type { ReactNode } from "react";
import { SITE } from "@/lib/site";

const ICONS: Record<keyof typeof SITE.social, { label: string; path: ReactNode }> = {
  linkedin: {
    label: "LinkedIn",
    path: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75V21h-4V9.5Z" />,
  },
  x: {
    label: "X",
    path: <path d="M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.17h1.7L7.4 4.74H5.57l11.1 14.43Z" />,
  },
  facebook: {
    label: "Facebook",
    path: <path d="M13.5 21v-7.5h2.53l.38-2.94H13.5V8.69c0-.85.24-1.43 1.46-1.43h1.56V4.63a20.9 20.9 0 0 0-2.27-.12c-2.25 0-3.79 1.37-3.79 3.9v2.15H7.92v2.94h2.54V21h3.04Z" />,
  },
  instagram: {
    label: "Instagram",
    path: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="3.8" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.1" />
      </>
    ),
  },
  youtube: {
    label: "YouTube",
    path: <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />,
  },
};

/** Rounded-square social icons; links come from SITE.social. */
export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`} aria-label="LeadGen AI on social media">
      {(Object.keys(ICONS) as (keyof typeof ICONS)[]).map((k) => (
        <li key={k}>
          <a
            href={SITE.social[k]}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${SITE.name} on ${ICONS[k].label}`}
            className="grid size-9 place-items-center rounded-[10px] bg-white text-[#07080b] transition hover:-translate-y-0.5 hover:bg-[#a5b4fc]"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
              {ICONS[k].path}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
