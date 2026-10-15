"use client";

import Link from "next/link";
import Script from "next/script";
import { useSyncExternalStore } from "react";

/**
 * Google Analytics 4, loaded only when NEXT_PUBLIC_GA_MEASUREMENT_ID is set AND the visitor accepts.
 * Nothing is requested from Google before consent. GA4's enhanced measurement records client-side
 * route changes as page views, so no extra router tracking is needed.
 */
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const KEY = "leadgen-analytics-consent";

type Choice = "granted" | "denied" | null;
const listeners = new Set<() => void>();
const read = (): Choice => {
  try {
    const v = localStorage.getItem(KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
};
const save = (v: Exclude<Choice, null>) => {
  try {
    localStorage.setItem(KEY, v);
  } catch {
    /* storage blocked: the choice lasts for this page view only */
  }
  memo = v;
  listeners.forEach((l) => l());
};
let memo: Choice | undefined;
const subscribe = (l: () => void) => (listeners.add(l), () => void listeners.delete(l));
const snapshot = () => (memo === undefined ? (memo = read()) : memo);

export function Analytics() {
  const choice = useSyncExternalStore(subscribe, snapshot, () => "denied" as Choice);
  if (!GA_ID || !/^G-[A-Z0-9]+$/.test(GA_ID)) return null;

  if (choice === "granted") {
    return (
      <>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
        </Script>
      </>
    );
  }
  if (choice !== null) return null;
  return (
    <div role="dialog" aria-label="Analytics consent" className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-2xl border border-line bg-surface p-4 shadow-lift sm:inset-x-auto sm:left-5">
      <p className="text-sm text-ink-soft">
        We’d Like To Use Google Analytics To Understand How The Site Is Used. It Only Runs If You Allow It.{" "}
        <Link href="/privacy-policy" className="font-semibold text-brand hover:underline">
          Privacy Policy
        </Link>
      </p>
      <div className="mt-3 flex gap-2">
        <button type="button" className="btn btn-primary !min-h-9 !px-4 !py-1.5 text-sm" onClick={() => save("granted")}>
          Allow Analytics
        </button>
        <button type="button" className="btn btn-ghost !min-h-9 !px-4 !py-1.5 text-sm" onClick={() => save("denied")}>
          No Thanks
        </button>
      </div>
    </div>
  );
}
