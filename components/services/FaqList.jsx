"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
export default function FaqList({ items }) {
  const [o, setO] = useState(0);
  return (
    <div className="mx-auto max-w-2xl space-y-3">
      {items.map(([q, a], i) => (
        <div key={q} className="rounded-2xl border border-line bg-white">
          <h3>
            <button
              className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold"
              aria-expanded={o === i}
              aria-controls={`f-${i}`}
              onClick={() => setO(o === i ? -1 : i)}
            >
              {q}
              <ChevronDown
                size={18}
                className={`shrink-0 transition ${o === i ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>
          </h3>
          {o === i && (
            <p id={`f-${i}`} className="px-5 pb-5 text-sm text-ink-soft">
              {a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
