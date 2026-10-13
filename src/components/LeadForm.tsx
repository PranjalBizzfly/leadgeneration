"use client";

import { useState } from "react";
import { Check } from "./icons";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Partial<Record<"name" | "email" | "message" | "form", string>>;

const field =
  "mt-1.5 w-full rounded-xl border border-line bg-bg px-3.5 py-2.5 text-[15px] text-ink outline-none transition placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand-soft";

export function LeadForm({ kind }: { kind: "contact" | "demo" }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const next: Errors = {};
    if (!data.name?.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email ?? "")) next.email = "Please enter a valid email address.";
    if ((data.message ?? "").trim().length < 10) next.message = "Please add a few words (at least 10 characters).";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, kind }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrors({ ...(body.errors ?? {}), form: body.error ?? "Something went wrong. Please try again." });
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
        <h3 className="mt-4 text-xl font-bold">Thanks — your {kind === "demo" ? "access request" : "message"} has been submitted.</h3>
        <p className="mt-2 text-ink-soft">We’ll reply to the email address you provided.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card grid gap-4 p-6 sm:p-8">
      <h3 className="text-xl font-bold">{kind === "demo" ? "Request access" : "Send us a message"}</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Name
          <input name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby="err-name" />
          {errors.name && <span id="err-name" className="mt-1 block text-xs font-medium text-danger">{errors.name}</span>}
        </label>
        <label className="text-sm font-semibold">
          Work email
          <input name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby="err-email" />
          {errors.email && <span id="err-email" className="mt-1 block text-xs font-medium text-danger">{errors.email}</span>}
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Company <span className="font-normal text-muted">(optional)</span>
          <input name="company" autoComplete="organization" className={field} />
        </label>
        {kind === "demo" ? (
          <label className="text-sm font-semibold">
            Main source of interest
            <select name="source" className={field} defaultValue="">
              <option value="" disabled>
                Choose one
              </option>
              <option>Google Maps</option>
              <option>LinkedIn</option>
              <option>IndiaMART</option>
              <option>Several sources</option>
            </select>
          </label>
        ) : (
          <label className="text-sm font-semibold">
            Topic
            <select name="topic" className={field} defaultValue="General question">
              <option>General question</option>
              <option>Plans and billing</option>
              <option>Data and privacy</option>
              <option>Partnerships</option>
            </select>
          </label>
        )}
      </div>
      <label className="text-sm font-semibold">
        {kind === "demo" ? "What would you like to prospect for?" : "Message"}
        <textarea
          name="message"
          rows={5}
          className={field}
          placeholder={kind === "demo" ? "e.g. dental clinics in Bengaluru for our website redesign service" : "How can we help?"}
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
        <p className="text-xs text-muted">We use these details only to respond to you. See our privacy policy.</p>
        <button type="submit" disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
          {status === "sending" ? "Sending…" : kind === "demo" ? "Request access" : "Send message"}
        </button>
      </div>
    </form>
  );
}
