"use client";
import Link from "next/link";
import * as Icons from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/data/services";
export default function ServiceGrid() {
  return (
    <ul className="grid gap-6 md:grid-cols-2">
      {services.map((s, i) => {
        const I = Icons[s.icon];
        return (
          <Reveal key={s.title} delay={(i % 2) * 0.06}>
            <li className="group h-full list-none rounded-3xl border border-line bg-white p-7 transition hover:-translate-y-1 hover:border-brand hover:shadow-soft">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-light text-brand-dark transition group-hover:bg-brand group-hover:text-white">
                <I size={24} aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-xl font-bold">{s.title}</h2>
              <p className="mt-2 text-ink-soft">{s.desc}</p>
              <h3 className="mt-5 text-sm font-bold text-brand-dark">
                What we deliver
              </h3>
              <ul className="mt-2 grid gap-1 text-sm text-ink-soft sm:grid-cols-2">
                {s.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <Icons.Check
                      size={16}
                      className="mt-0.5 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm">
                <span className="font-bold text-brand-dark">Benefit: </span>
                {s.benefits}
              </p>
              <ul
                className="mt-4 flex flex-wrap gap-2"
                aria-label="Technologies"
              >
                {s.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-brand-bg px-3 py-1 text-xs font-semibold"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href={s.href}
                className="mt-6 inline-block font-semibold text-brand hover:text-brand-dark"
              >
                Learn more about {s.title.toLowerCase()}
              </Link>
            </li>
          </Reveal>
        );
      })}
    </ul>
  );
}
