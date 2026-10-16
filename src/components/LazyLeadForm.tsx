"use client";

import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import type { LeadForm as LeadFormType } from "./LeadForm";

/** Same footprint as the two-step form card (min-h matches LeadForm), so nothing shifts when it arrives. */
function LeadFormSkeleton() {
  return (
    <div className="card grid min-h-[36rem] content-start gap-4 p-6 sm:p-8" aria-busy="true" aria-label="Loading Form">
      <div className="h-4 w-24 animate-pulse rounded bg-line motion-reduce:animate-none" />
      <div className="h-7 w-48 animate-pulse rounded bg-line motion-reduce:animate-none" />
      {[0, 1, 2].map((i) => (
        <div key={i} className="h-[4.25rem] animate-pulse rounded-xl bg-line/60 motion-reduce:animate-none" />
      ))}
    </div>
  );
}

/**
 * Code-split wrapper: LeadForm, PhoneField and libphonenumber-js load only on pages that render a form.
 * Server rendering stays on, so the form HTML is in the first paint; the skeleton covers client-side navigations.
 */
const LeadForm = dynamic(() => import("./LeadForm").then((m) => m.LeadForm), { loading: () => <LeadFormSkeleton /> });

export function LazyLeadForm(props: ComponentProps<typeof LeadFormType>) {
  return <LeadForm {...props} />;
}
