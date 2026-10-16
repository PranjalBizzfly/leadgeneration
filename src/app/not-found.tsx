import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false } };

const POPULAR = [
  ["/services", "Platform services"],
  ["/lead-generation-strategies", "Lead generation strategies"],
  ["/industries", "Industries"],
  ["/how-it-works", "How it works"],
  ["/sitemap", "Full sitemap"],
];

export default function NotFound() {
  return (
    <div className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div className="max-w-xl">
        <p className="font-display text-7xl font-extrabold text-brand">404</p>
        <h1 className="mt-4 text-3xl font-extrabold">We Couldn’t Find That Page</h1>
        <p className="mt-4 text-lg text-ink-soft">The link may be outdated, or the page may not exist yet. Try one of these instead, or search the site.</p>
        <ul className="mt-8 flex flex-wrap justify-center gap-2">
          {POPULAR.map(([href, label]) => (
            <li key={href}>
              <Link href={href} className="btn btn-ghost !min-h-10 !text-sm">
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/" className="btn btn-primary mt-6">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
