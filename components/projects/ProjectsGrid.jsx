"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { categories, projects } from "@/data/projects";
export default function ProjectsGrid() {
  const [c, setC] = useState("All");
  const list =
    c === "All" ? projects : projects.filter((p) => p.category === c);
  return (
    <>
      <div
        role="group"
        aria-label="Filter projects"
        className="mb-10 flex flex-wrap justify-center gap-2"
      >
        {categories.map((x) => (
          <button
            key={x}
            onClick={() => setC(x)}
            aria-pressed={c === x}
            className={`min-h-11 rounded-full border px-5 text-sm font-semibold transition ${c === x ? "border-brand bg-brand text-white" : "border-line bg-white hover:border-brand"}`}
          >
            {x}
          </button>
        ))}
      </div>
      <motion.ul layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="list-none"
            >
              <ProjectCard p={p} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      <p className="mt-6 text-center text-sm text-ink-soft" aria-live="polite">
        {list.length} sample concept{list.length === 1 ? "" : "s"} shown
      </p>
    </>
  );
}
