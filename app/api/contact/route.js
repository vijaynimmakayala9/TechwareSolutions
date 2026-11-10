import { NextResponse } from "next/server";
import { clean, validate } from "@/lib/validation";
import { limited } from "@/lib/rateLimit";
const esc = (s) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
export async function POST(req) {
  const ip = (req.headers.get("x-forwarded-for") || "unknown")
    .split(",")[0]
    .trim();
  if (limited(`contact:${ip}`))
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  if (Number(req.headers.get("content-length") || 0) > 20000)
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  let b;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (b.website) return NextResponse.json({ ok: true }); // honeypot
  const d = {
    name: clean(b.name, 100),
    email: clean(b.email, 254),
    phone: clean(b.phone, 20),
    company: clean(b.company, 120),
    service: clean(b.service, 60),
    budget: clean(b.budget, 40),
    message: clean(b.message, 3000),
  };
  const errors = validate(d);
  if (Object.keys(errors).length)
    return NextResponse.json(
      { error: "Please fix the highlighted fields.", errors },
      { status: 400 },
    );
  const {
    RESEND_API_KEY: key,
    CONTACT_EMAIL: to,
    CONTACT_FROM: from,
  } = process.env;
  if (!key || !to || !from)
    return NextResponse.json(
      {
        error:
          "The contact form isn’t configured yet. Please email us directly.",
      },
      { status: 503 },
    );
  const rows = [
    ["Name", d.name],
    ["Email", d.email],
    ["Phone", d.phone || "-"],
    ["Company", d.company || "-"],
    ["Service", d.service],
    ["Budget", d.budget || "-"],
    ["Message", d.message],
  ];
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: d.email,
        subject: `New enquiry: ${d.service} (${d.name})`,
        text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
        html: rows
          .map(([k, v]) => `<p><strong>${k}:</strong> ${esc(v)}</p>`)
          .join(""),
      }),
    });
    if (!r.ok) {
      console.error("Resend error", r.status);
      return NextResponse.json(
        {
          error: "We couldn’t send your message. Please try again or email us.",
        },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We couldn’t send your message. Please try again or email us." },
      { status: 502 },
    );
  }
}
