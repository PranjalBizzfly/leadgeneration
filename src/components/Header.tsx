import Link from "next/link";
import { NAV } from "@/lib/nav";
import { LIVE } from "@/lib/registry";
import { ArrowRight, ChevronDown } from "./icons";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavLink } from "./NavLink";
import { SearchDialog } from "./SearchDialog";
import { ThemeToggle } from "./ThemeToggle";

/** Desktop mega menus open on hover and keyboard focus (focus-within), so they need no client JavaScript. */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-bg/85 backdrop-blur-xl">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2">
        Skip To Content
      </a>
      <div className="container-x relative flex h-16 items-center gap-4 lg:h-20">
        <Logo />
        <nav aria-label="Main" className="ml-2 hidden min-w-0 flex-1 lg:block xl:ml-8">
          <ul className="flex items-center xl:gap-1">
            {NAV.map((item) => (
              <li key={item.label} className="group">
                <NavLink href={item.href} match={item.match}>
                  {item.label}
                  {item.columns && <ChevronDown size={15} className="transition group-hover:rotate-180" />}
                </NavLink>
                {item.columns && (
                  <div className="invisible absolute inset-x-4 top-full z-50 pt-2 opacity-0 transition duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100 sm:inset-x-6">
                    <div className="card grid gap-8 p-7 shadow-lift" style={{ gridTemplateColumns: `repeat(${item.columns.length}, minmax(0, 1fr))` }}>
                      {item.columns.map((c) => (
                        <div key={c.heading}>
                          <div className="mb-3 text-xs font-bold uppercase tracking-wider text-brand">{c.heading}</div>
                          <ul className="grid gap-1">
                            {c.links.map((l) => (
                              <li key={l.href}>
                                <Link href={l.href} className="block rounded-lg px-2.5 py-2 transition hover:bg-brand-soft">
                                  <span className="block text-[15px] font-semibold text-ink">{l.title}</span>
                                  {l.description && <span className="block text-xs text-muted">{l.description}</span>}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      {item.footer && (
                        <Link
                          href={item.footer.href}
                          className="col-span-full -mx-7 -mb-7 flex items-center gap-2 rounded-b-2xl border-t border-line bg-surface-2 px-7 py-3.5 text-sm font-semibold text-brand"
                        >
                          {item.footer.title} <ArrowRight size={15} />
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <SearchDialog total={LIVE.length} />
          <ThemeToggle />
          <Link href="/book-a-demo" className="btn btn-primary hidden whitespace-nowrap !rounded-full !px-5 sm:inline-flex lg:hidden xl:inline-flex">
            Request Access <ArrowRight size={16} />
          </Link>
          <MobileNav items={NAV} />
        </div>
      </div>
    </header>
  );
}
