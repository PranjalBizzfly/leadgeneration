"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CountryCode } from "libphonenumber-js";
import { checkPhone } from "@/lib/phone";
import { Check } from "./icons";
import { DEFAULT_COUNTRY, PhoneField } from "./PhoneField";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "phone" | "message" | "form", string>>;
type Step = 1 | 2;

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-bg px-3.5 py-2.5 text-[15px] text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand-soft";

const TOPICS = ["General Question", "Plans And Billing", "Data And Privacy", "Partnerships", "Vendors", "Media", "Careers"];

const STEP1_KEYS = ["name", "email", "phone"] as const;

/** Step 1 checks, shared by "Continue" and the final submit. Returns errors plus the normalised phone. */
function validateStep1(data: Record<string, string>) {
  const next: Errors = {};
  if (!data.name?.trim()) next.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "")) next.email = "Please enter a valid email address.";
  const phone = checkPhone(data.phone ?? "", data.phoneCountry ?? "");
  if ("error" in phone) next.phone = phone.error;
  return { next, e164: "error" in phone ? undefined : phone.e164 };
}

function WhatHappensNext() {
  return (
    <aside className="rounded-xl border border-line bg-surface-2/50 p-4 text-sm text-ink-soft" aria-label="What Happens Next">
      <p className="font-semibold text-ink">What Happens Next</p>
      <ol className="mt-2 grid gap-1.5 pl-5 [list-style:decimal]">
        <li>We read your message.</li>
        <li>We reply to the email address you provide.</li>
        <li>
          Your details are used only to respond to you. See our{" "}
          <Link href="/privacy-policy" className="font-semibold text-brand underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </li>
      </ol>
    </aside>
  );
}

export function LeadForm({ kind }: { kind: "contact" | "demo" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [step, setStep] = useState<Step>(1);
  // When the form appeared; the server ignores submissions completed implausibly fast (spam protection).
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const [errors, setErrors] = useState<Errors>({});
  const [country, setCountry] = useState<CountryCode>(DEFAULT_COUNTRY);
  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const moved = useRef(false);

  // Re-check the phone once the visitor leaves the field or changes country, so mistakes show early.
  function validatePhone(c: CountryCode = country) {
    const input = phoneRef.current?.querySelector<HTMLInputElement>("input[name=phone]");
    if (!input?.value.trim()) return setErrors((e) => ({ ...e, phone: undefined }));
    const r = checkPhone(input.value, c);
    setErrors((e) => ({ ...e, phone: "error" in r ? r.error : undefined }));
  }
  const topicRef = useRef<HTMLSelectElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Links such as /contact?topic=Careers&role=Prompt%20Engineer pre-fill the form.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const t = params.get("topic");
    const role = params.get("role");
    // Deferred one frame so React has finished applying the select's default value.
    requestAnimationFrame(() => {
      if (t && TOPICS.includes(t) && topicRef.current) topicRef.current.value = t;
    });
    if (role && messageRef.current) messageRef.current.value = (`I would like to apply for the ${role} role.\n\nAbout me:\n\nLink to my CV or profile:\n`);
  }, []);

  // Move focus to the first field of the step the visitor just switched to (not on first render).
  useEffect(() => {
    if (!moved.current) return;
    (step === 1 ? nameRef.current : companyRef.current)?.focus();
  }, [step]);

  function goTo(s: Step) {
    moved.current = true;
    setStep(s);
  }

  function readForm() {
    return Object.fromEntries(new FormData(formRef.current!)) as Record<string, string>;
  }

  function focusFirstError(next: Errors) {
    const key = STEP1_KEYS.find((k) => next[k]) ?? (next.message ? "message" : undefined);
    if (key) requestAnimationFrame(() => formRef.current?.querySelector<HTMLElement>(`[name=${key}]`)?.focus());
  }

  function onContinue() {
    const { next } = validateStep1(readForm());
    setErrors((e) => ({ ...e, name: next.name, email: next.email, phone: next.phone }));
    if (Object.keys(next).length) return focusFirstError(next);
    goTo(2);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Enter in a step 1 field acts as "Continue".
    if (step === 1) return onContinue();
    const data = readForm();
    const { next, e164 } = validateStep1(data);
    if (e164) data.phone = e164;
    if ((data.message ?? "").trim().length < 10) next.message = "Please add a few words (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) {
      if (STEP1_KEYS.some((k) => next[k])) {
        moved.current = false;
        setStep(1);
      }
      return focusFirstError(next);
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind, startedAt: startedAt.current }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        const details: Errors = body.error?.details ?? {};
        setErrors({ ...details, form: body.error?.message ?? "Something went wrong. Please try again." });
        if (STEP1_KEYS.some((k) => details[k])) {
          moved.current = false;
          setStep(1);
        }
        setStatus("error");
        return;
      }
      setStatus("sent");
    } catch {
      setErrors({ form: "We couldn’t reach the server. Check your connection and try again." });
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="card p-8 text-center" role="status">
        <div className="mx-auto grid size-12 place-items-center rounded-full bg-brand-soft text-brand">
          <Check size={24} />
        </div>
        <h3 className="mt-4 text-xl font-bold">Thanks, Your {kind === "demo" ? "Access Request" : "Message"} Has Been Submitted.</h3>
        <p className="mt-2 text-ink-soft">We’ll reply to the email address you provided.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="card grid min-h-[36rem] content-start gap-4 p-6 sm:p-8" aria-labelledby="lead-form-title">
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-brand" aria-live="polite" aria-atomic="true">
          Step {step} of 2{step === 1 ? ": Your Details" : ": Your Message"}
        </p>
        <div className="mt-2 flex gap-1.5" aria-hidden="true">
          <span className="h-1 flex-1 rounded-full bg-brand" />
          <span className={`h-1 flex-1 rounded-full transition-colors motion-reduce:transition-none ${step === 2 ? "bg-brand" : "bg-line"}`} />
        </div>
        <h3 id="lead-form-title" className="mt-4 text-xl font-bold">
          {kind === "demo" ? "Request Access" : "Send Us A Message"}
        </h3>
      </div>

      {/* Both steps stay in this one form, so the submitted payload is unchanged; the inactive step is only hidden. */}
      <fieldset hidden={step !== 1} className="grid gap-4">
        <legend className="sr-only">Your Details</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold">
            Name
            <input ref={nameRef} name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby="err-name" />
            {errors.name && <span id="err-name" className="mt-1 block text-xs font-medium text-danger">{errors.name}</span>}
          </label>
          <label className="text-sm font-semibold">
            Work Email
            <input name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby="err-email" />
            {errors.email && <span id="err-email" className="mt-1 block text-xs font-medium text-danger">{errors.email}</span>}
          </label>
        </div>
        <div ref={phoneRef}>
          <PhoneField
            country={country}
            onCountryChange={(c) => {
              setCountry(c);
              validatePhone(c);
            }}
            onBlur={() => validatePhone()}
            error={errors.phone}
          />
        </div>
      </fieldset>

      <fieldset hidden={step !== 2} className="grid gap-4">
        <legend className="sr-only">Your Message</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm font-semibold">
            Company <span className="font-normal text-muted">(Optional)</span>
            <input ref={companyRef} name="company" autoComplete="organization" className={field} />
          </label>
          {kind === "demo" ? (
            <label className="text-sm font-semibold">
              Main Source Of Interest
              <select name="source" className={field} defaultValue="">
                <option value="" disabled>
                  Choose One
                </option>
                <option>Google Maps</option>
                <option>LinkedIn</option>
                <option>IndiaMART</option>
                <option>Several Sources</option>
              </select>
            </label>
          ) : (
            <label className="text-sm font-semibold">
              Topic
              <select name="topic" className={field} ref={topicRef} defaultValue={TOPICS[0]}>
                {TOPICS.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
          )}
        </div>
        <label className="text-sm font-semibold">
          {kind === "demo" ? "What Would You Like To Prospect For?" : "Message"}
          <textarea
            name="message"
            rows={5}
            ref={messageRef}
            className={field}
            placeholder={kind === "demo" ? "E.g. dental clinics in Bengaluru for our website redesign service" : "How can we help?"}
            aria-invalid={!!errors.message}
            aria-describedby="err-message"
          />
          {errors.message && <span id="err-message" className="mt-1 block text-xs font-medium text-danger">{errors.message}</span>}
        </label>
      </fieldset>

      {/* Honeypot: hidden from people, often filled by bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {errors.form && (
        <p className="rounded-xl bg-danger/10 px-4 py-3 text-sm font-medium text-danger" role="alert">
          {errors.form}
        </p>
      )}

      {step === 1 ? (
        <div className="flex justify-end">
          <button type="button" onClick={onContinue} className="btn btn-primary">
            Continue
          </button>
        </div>
      ) : (
        <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
          <button type="button" onClick={() => goTo(1)} className="btn btn-ghost">
            Back
          </button>
          <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
            {status === "sending" ? "Sending…" : kind === "demo" ? "Request Access" : "Send Message"}
          </button>
        </div>
      )}

      <WhatHappensNext />
    </form>
  );
}
