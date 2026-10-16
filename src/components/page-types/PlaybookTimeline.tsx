import type { Step } from "@/content/types";

/** Strategy pages: the steps as a vertical playbook (numbered nodes on a line, title + text). */
export function PlaybookTimeline({ items, className = "" }: { items: Step[]; className?: string }) {
  return (
    <ol className={`playbook ${className}`}>
      {items.map((step, i) => (
        <li key={step.title} className="playbook-item">
          <span className="playbook-node" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="card p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-wider text-brand">Step {i + 1}</p>
            <h3 className="mt-1 text-[18px] font-bold leading-snug">{step.title}</h3>
            <p className="mt-2 text-[15.5px] leading-relaxed text-ink-soft">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
