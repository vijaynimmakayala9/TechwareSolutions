"use client";
import { useState } from "react";
export default function NewsletterForm() {
  const [s, setS] = useState({ state: "idle", msg: "" });
  async function submit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    setS({ state: "loading", msg: "" });
    try {
      const r = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: f.get("email"),
          website: f.get("website"),
        }),
      });
      const j = await r.json();
      setS(
        r.ok
          ? { state: "ok", msg: "You’re subscribed." }
          : {
              state: "error",
              msg: j.error || "Something went wrong. Try again.",
            },
      );
    } catch {
      setS({ state: "error", msg: "Network error. Try again." });
    }
  }
  return (
    <form
      onSubmit={submit}
      className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
      noValidate
    >
      <label htmlFor="nl-email" className="sr-only">
        Email address
      </label>
      <input
        id="nl-email"
        name="email"
        type="email"
        required
        placeholder="you@company.com"
        className="min-h-11 flex-1 rounded-full border border-line bg-white px-5 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand"
      />
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <button
        disabled={s.state === "loading"}
        className="min-h-11 rounded-full bg-brand px-6 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
      >
        {s.state === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
      <p
        role="status"
        className={`text-sm sm:basis-full ${s.state === "error" ? "text-red-700" : "text-brand-dark"}`}
      >
        {s.msg}
      </p>
    </form>
  );
}
