import type { Section } from "@/content/types";

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

/** Glossary: bullets formatted "Term: definition", grouped by first letter with an A–Z jump index. */
export function Glossary({ sections }: { sections: Section[] }) {
  const terms = sections
    .flatMap((s) => s.bullets ?? [])
    .map((b) => {
      const i = b.indexOf(": ");
      return i > 0 ? { term: b.slice(0, i), def: b.charAt(i + 2).toUpperCase() + b.slice(i + 3) } : { term: b, def: "" };
    });
  const groups = new Map<string, typeof terms>();
  for (const t of terms) {
    const l = t.term[0]?.toUpperCase() ?? "";
    if (!/[A-Z]/.test(l)) continue;
    groups.set(l, [...(groups.get(l) ?? []), t]);
  }

  return (
    <div id="glossary" className="mt-10 scroll-mt-28">
      <nav aria-label="Glossary A to Z" className="glossary-index">
        <ul className="flex flex-wrap gap-1.5">
          {LETTERS.map((l) => (
            <li key={l}>
              {groups.has(l) ? (
                <a href={`#letter-${l.toLowerCase()}`} className="glossary-letter">
                  {l}
                </a>
              ) : (
                <span className="glossary-letter" aria-disabled="true">
                  <span className="sr-only">No terms for </span>
                  {l}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 grid gap-8">
        {LETTERS.filter((l) => groups.has(l)).map((l) => (
          <section key={l} id={`letter-${l.toLowerCase()}`} aria-labelledby={`letter-${l.toLowerCase()}-h`} className="scroll-mt-44">
            <h2 id={`letter-${l.toLowerCase()}-h`} className="flex items-center gap-3 font-display text-2xl font-extrabold">
              <span className="grid size-11 place-items-center rounded-xl bg-grad">{l}</span>
              <span className="text-sm font-semibold text-muted">
                {groups.get(l)!.length} Term{groups.get(l)!.length === 1 ? "" : "s"}
              </span>
            </h2>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              {groups.get(l)!.map((t) => (
                <div key={t.term} className="card p-5">
                  <dt className="font-bold text-ink">{t.term}</dt>
                  {t.def && <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{t.def}</dd>}
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
