"use client";
import { useState } from "react";
import Reveal from "@/components/shared/Reveal";
import BlogCard from "./BlogCard";
import { blogs, blogCategories } from "@/data/blogs";
export default function BlogIndex() {
  const [q, setQ] = useState("");
  const [c, setC] = useState("All");
  const list = blogs.filter(
    (b) =>
      (c === "All" || b.category === c) &&
      `${b.title} ${b.excerpt} ${b.tags.join(" ")}`
        .toLowerCase()
        .includes(q.toLowerCase()),
  );
  return (
    <>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div
          role="group"
          aria-label="Filter by category"
          className="flex flex-wrap gap-2"
        >
          {blogCategories.map((x) => (
            <button
              key={x}
              onClick={() => setC(x)}
              aria-pressed={c === x}
              className={`min-h-11 rounded-full border px-4 text-sm font-semibold ${c === x ? "border-brand bg-brand text-white" : "border-line bg-white hover:border-brand"}`}
            >
              {x}
            </button>
          ))}
        </div>
        <div>
          <label htmlFor="bs" className="sr-only">
            Search articles
          </label>
          <input
            id="bs"
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search articles"
            className="min-h-11 w-full rounded-full border border-line bg-white px-5 text-sm md:w-72"
          />
        </div>
      </div>
      {list.length ? (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((b, i) => (
            <li key={b.slug} className="list-none">
              <Reveal delay={(i % 3) * 0.08}>
                <BlogCard b={b} />
              </Reveal>
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-10 text-center text-ink-soft">
          No articles match. Clear the search or pick another category.
        </p>
      )}
    </>
  );
}
