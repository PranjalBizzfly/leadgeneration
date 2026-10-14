import { NextResponse } from "next/server";
import { checkPhone } from "@/lib/phone";

const MAX = { name: 120, email: 200, company: 160, message: 4000 };

/**
 * Receives contact and access-request submissions.
 * If CONTACT_WEBHOOK_URL is set, the validated submission is forwarded there as JSON;
 * otherwise it is written to the server log so nothing is silently dropped in development.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const str = (k: string) => (typeof body[k] === "string" ? (body[k] as string).trim() : "");
  // Honeypot filled: pretend success so bots learn nothing.
  if (str("website")) return NextResponse.json({ ok: true });

  const submission = {
    kind: str("kind") === "demo" ? "demo" : "contact",
    name: str("name").slice(0, MAX.name),
    email: str("email").slice(0, MAX.email),
    phone: "",
    company: str("company").slice(0, MAX.company),
    topic: str("topic") || str("source"),
    message: str("message").slice(0, MAX.message),
    receivedAt: new Date().toISOString(),
  };

  const errors: Record<string, string> = {};
  if (!submission.name) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email)) errors.email = "Please enter a valid email address.";
  const phone = checkPhone(str("phone"), str("phoneCountry"));
  if ("error" in phone) errors.phone = phone.error;
  else submission.phone = phone.e164;
  if (submission.message.length < 10) errors.message = "Please add a few words (at least 10 characters).";
  if (Object.keys(errors).length) return NextResponse.json({ error: "Please fix the highlighted fields.", errors }, { status: 422 });

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(submission) });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } catch (err) {
      console.error("[contact] delivery failed", err);
      return NextResponse.json({ error: "We couldn’t submit your message right now. Please try again shortly." }, { status: 502 });
    }
  } else {
    console.info("[contact] submission (set CONTACT_WEBHOOK_URL to forward):", submission);
  }

  return NextResponse.json({ ok: true });
}
