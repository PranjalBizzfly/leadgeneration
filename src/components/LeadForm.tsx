"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CountryCode } from "libphonenumber-js";
import { checkPhone } from "@/lib/phone";
import { Check } from "./icons";
import { DEFAULT_COUNTRY, PhoneField } from "./PhoneField";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "phone" | "message" | "form", string>>;

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-bg px-3.5 py-2.5 text-[15px] text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand-soft";

const TOPICS = ["General Question", "Plans And Billing", "Data And Privacy", "Partnerships", "Vendors", "Media", "Careers"];

export function LeadForm({ kind }: { kind: "contact" | "demo" }) {
  const [status, setStatus] = useState<Status>("idle");
  // When the form appeared; the server ignores submissions completed implausibly fast (spam protection).
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const [errors, setErrors] = useState<Errors>({});
  const [country, setCountry] = useState<CountryCode>(DEFAULT_COUNTRY);
  const phoneRef = useRef<HTMLDivElement>(null);

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

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const next: Errors = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "")) next.email = "Please enter a valid email address.";
    const phone = checkPhone(data.phone ?? "", data.phoneCountry ?? "");
    if ("error" in phone) next.phone = phone.error;
    else data.phone = phone.e164;
    if ((data.message ?? "").trim().length < 10) next.message = "Please add a few words (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind, startedAt: startedAt.current }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors({ ...(body.error?.details ?? {}), form: body.error?.message ?? "Something went wrong. Please try again." });
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
    <form onSubmit={onSubmit} noValidate className="card grid gap-4 p-6 sm:p-8">
      <h3 className="text-xl font-bold">{kind === "demo" ? "Request Access" : "Send Us A Message"}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Name
          <input name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby="err-name" />
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
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Company <span className="font-normal text-muted">(Optional)</span>
          <input name="company" autoComplete="organization" className={field} />
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
          placeholder={kind === "demo" ? "E.g. Dental Clinics In Bengaluru For Our Website Redesign Service" : "How Can We Help?"}
          aria-invalid={!!errors.message}
          aria-describedby="err-message"
        />
        {errors.message && <span id="err-message" className="mt-1 block text-xs font-medium text-danger">{errors.message}</span>}
      </label>
      {/* Honeypot: hidden from people, often filled by bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {errors.form && (
        <p className="rounded-xl bg-danger/10 px-4 py-3 text-sm font-medium text-danger" role="alert">
          {errors.form}
        </p>
      )}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">We use these details only to respond to you. See our{" "}
          <Link href="/privacy-policy" className="font-semibold text-brand underline-offset-2 hover:underline">
            Privacy Policy
          </Link>
          .
        </p>
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
          {status === "sending" ? "Sending…" : kind === "demo" ? "Request Access" : "Send Message"}
        </button>
      </div>
    </form>
  );
}
