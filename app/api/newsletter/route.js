import { NextResponse } from "next/server";
const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export async function POST(req) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (body.website) return NextResponse.json({ ok: true }); // honeypot: silently drop bots
  const email = String(body.email || "")
    .trim()
    .slice(0, 254);
  if (!re.test(email))
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  // TODO (Contact phase): add rate limiting and store the address with Resend Audiences.
  if (!process.env.RESEND_API_KEY)
    return NextResponse.json(
      { error: "Newsletter signup isn’t configured yet." },
      { status: 503 },
    );
  return NextResponse.json(
    { error: "Newsletter provider not connected yet." },
    { status: 501 },
  );
}
