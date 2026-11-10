"use client";
import { useState } from "react";
import { SERVICES, BUDGETS, validate, clean } from "@/lib/validation";
const base =
  "mt-1 min-h-11 w-full rounded-xl border bg-white px-4 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand";
export default function ContactForm() {
  const [st, setSt] = useState("idle");
  const [errs, setErrs] = useState({});
  const [msg, setMsg] = useState("");
  const F = ({ id, label, req, err, children }) => (
    <div>
      <label htmlFor={id} className="text-sm font-semibold">
        {label}
        {req && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {err && (
        <p id={`${id}-e`} className="mt-1 text-sm text-red-700">
          {err}
        </p>
      )}
    </div>
  );
  const p = (id) => ({
    id,
    name: id,
    "aria-invalid": !!errs[id],
    "aria-describedby": errs[id] ? `${id}-e` : undefined,
    className: `${base} ${errs[id] ? "border-red-600" : "border-line"}`,
  });
  async function submit(e) {
    e.preventDefault();
    const f = new FormData(e.target);
    const d = Object.fromEntries(
      ["name", "email", "phone", "company", "service", "budget", "message"].map(
        (k) => [k, clean(f.get(k), k === "message" ? 3000 : 254)],
      ),
    );
    const v = validate(d);
    setErrs(v);
    if (Object.keys(v).length) {
      setSt("idle");
      setMsg("");
      return;
    }
    setSt("loading");
    setMsg("");
    try {
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...d, website: f.get("website") }),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok) {
        setSt("success");
        e.target.reset();
      } else {
        setErrs(j.errors || {});
        setSt("error");
        setMsg(j.error || "Something went wrong.");
      }
    } catch {
      setSt("error");
      setMsg("Network error. Check your connection and try again.");
    }
  }
  if (st === "success")
    return (
      <div
        role="status"
        className="rounded-3xl border border-brand bg-brand-light p-8"
      >
        <h3 className="text-xl font-bold text-brand-dark">Message sent</h3>
        <p className="mt-2 text-sm">
          Thanks for getting in touch. We’ll reply to your email soon.
        </p>
        <button
          onClick={() => setSt("idle")}
          className="mt-4 text-sm font-semibold text-brand-dark underline"
        >
          Send another message
        </button>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      noValidate
      className="grid gap-4 rounded-3xl border border-line bg-white p-6 shadow-soft sm:grid-cols-2 sm:p-8"
    >
      <F id="name" label="Full name" req err={errs.name}>
        <input {...p("name")} autoComplete="name" required />
      </F>
      <F id="email" label="Email address" req err={errs.email}>
        <input {...p("email")} type="email" autoComplete="email" required />
      </F>
      <F id="phone" label="Phone number" err={errs.phone}>
        <input {...p("phone")} type="tel" autoComplete="tel" />
      </F>
      <F id="company" label="Company name">
        <input {...p("company")} autoComplete="organization" />
      </F>
      <F id="service" label="Required service" req err={errs.service}>
        <select {...p("service")} defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </F>
      <F id="budget" label="Project budget" err={errs.budget}>
        <select {...p("budget")} defaultValue="">
          <option value="">Select a range</option>
          {BUDGETS.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </F>
      <div className="sm:col-span-2">
        <F id="message" label="Project description" req err={errs.message}>
          <textarea
            {...p("message")}
            rows={5}
            className={`${p("message").className} py-3`}
            required
          />
        </F>
      </div>
      <input
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />
      <div className="sm:col-span-2">
        {st === "error" && (
          <p role="alert" className="mb-3 text-sm text-red-700">
            {msg}
          </p>
        )}
        <button
          disabled={st === "loading"}
          className="min-h-11 rounded-full bg-brand px-8 text-sm font-semibold text-white hover:bg-brand-dark disabled:opacity-60"
        >
          {st === "loading" ? "Sending…" : "Send message"}
        </button>
      </div>
    </form>
  );
}
