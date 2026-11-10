"use client";
import { images } from "@/data/images";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  animate,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import ImageReveal from "@/components/shared/ImageReveal";
import * as Icons from "lucide-react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { projects as pj } from "@/data/projects";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  services,
  why,
  process,
  projects,
  stats,
  tech,
  testimonials,
  faqs,
} from "@/data/home";

const Wrap = ({ children, alt }) => (
  <section className={`px-6 py-20 ${alt ? "bg-white" : ""}`}>
    <div className="mx-auto max-w-6xl">{children}</div>
  </section>
);

export function Partners() {
  return (
    <Wrap alt>
      <p className="mb-6 text-center text-sm font-semibold text-ink-soft">
        Platforms we build on
      </p>
      <ul className="flex flex-wrap justify-center gap-3">
        {["Vercel", "AWS", "Google Cloud", "Stripe", "Resend"].map((t) => (
          <li
            key={t}
            className="rounded-full border border-line px-5 py-2 text-sm font-semibold text-brand-dark"
          >
            {t}
          </li>
        ))}
      </ul>
    </Wrap>
  );
}
export function AboutPreview() {
  return (
    <Wrap>
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            About TechWare Solutions
          </h2>
          <p className="mt-4 text-ink-soft">
            We are an IT solutions company building websites, apps and software
            for businesses that want to grow online. Our work is led by CEO
            Draksharam Balaji.
          </p>
          <Link
            href="/about"
            className="mt-6 inline-block font-semibold text-brand hover:text-brand-dark"
          >
            Read our story
          </Link>
        </div>
        <ImageReveal>
          <Image
            src={images.about}
            alt="The TechWare team at work"
            width={640}
            height={480}
            className="h-auto w-full rounded-3xl shadow-soft"
          />
        </ImageReveal>
      </div>
    </Wrap>
  );
}
export function ServicesOverview() {
  return (
    <Wrap alt>
      <SectionHeading
        title="Services built around your goals"
        text="From first idea to ongoing support, everything under one roof."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(([ic, t, d, h], i) => {
          const I = Icons[ic];
          return (
            <Reveal key={t} delay={(i % 3) * 0.06}>
              <li className="h-full list-none">
                <Link
                  href={h}
                  className="group block h-full rounded-2xl border border-line bg-brand-bg p-6 transition hover:-translate-y-1 hover:border-brand hover:shadow-soft"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light text-brand-dark">
                    <I size={22} aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{d}</p>
                </Link>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </Wrap>
  );
}
export function WhyChooseUs() {
  return (
    <Wrap>
      <SectionHeading title="Why choose us" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {why.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-line bg-white p-6">
              <Icons.CircleCheck className="text-brand" aria-hidden="true" />
              <h3 className="mt-3 font-bold">{t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}
const steps = [
  "We learn your goals, users and constraints.",
  "We agree scope, timeline and priorities.",
  "We shape the interface and the experience.",
  "We build with clean, tested code.",
  "We check function, speed and accessibility.",
  "We release and watch the first days closely.",
  "We maintain, fix and improve after launch.",
];
export function Process() {
  const ref = useRef(null);
  const [a, setA] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 60%", "end 70%"],
  });
  useMotionValueEvent(scrollYProgress, "change", (v) =>
    setA(
      Math.max(0, Math.min(process.length - 1, Math.floor(v * process.length))),
    ),
  );
  return (
    <Wrap alt>
      <div ref={ref} className="grid gap-10 lg:grid-cols-2">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
            Our working process
          </h2>
          <p className="mt-4 max-w-md text-ink-soft">
            Seven clear stages from idea to long-term support.
          </p>
          <p
            aria-hidden="true"
            className="mt-8 hidden text-8xl font-extrabold text-brand/25 lg:block"
          >
            {String(a + 1).padStart(2, "0")}
          </p>
          <div className="mt-6 h-1 max-w-xs overflow-hidden rounded-full bg-brand-light">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full origin-left bg-brand"
            />
          </div>
        </div>
        <ol className="space-y-4 lg:space-y-0">
          {process.map((p, i) => (
            <li key={p} className="flex items-center lg:min-h-[42vh]">
              <div
                className={`w-full rounded-2xl border p-6 transition duration-500 ${i === a ? "border-brand bg-white shadow-soft lg:scale-[1.02]" : "border-line bg-white/60 lg:opacity-60"}`}
              >
                <p className="text-sm font-semibold text-brand">Step {i + 1}</p>
                <h3 className="text-xl font-bold text-brand-dark">{p}</h3>
                <p className="mt-1 text-sm text-ink-soft">{steps[i]}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Wrap>
  );
}
export function ProjectsPreview() {
  return (
    <Wrap>
      <SectionHeading
        title="Featured projects"
        text="Sample concepts shown as placeholders. Real client work will replace them."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {pj.slice(0, 3).map((p) => (
          <Reveal key={p.slug}>
            <article className="overflow-hidden rounded-2xl border border-line bg-white">
              <Image
                src={p.image}
                alt={`${p.title} concept preview`}
                width={640}
                height={480}
                className="h-auto w-full"
              />
              <div className="p-5">
                <p className="text-xs font-semibold text-brand">
                  {p.category} (sample)
                </p>
                <h3 className="mt-1 font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">
                  {p.tech.join(" · ")}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="font-semibold text-brand hover:text-brand-dark"
        >
          View all projects
        </Link>
      </div>
    </Wrap>
  );
}
function Counter({ to }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (inView) {
      const c = animate(0, to, {
        duration: 1.2,
        onUpdate: (x) => setV(Math.round(x)),
      });
      return () => c.stop();
    }
  }, [inView, to]);
  return <span ref={ref}>{v}+</span>;
}
export function Stats() {
  return (
    <section className="bg-brand-dark px-6 py-16 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 text-center lg:grid-cols-4">
        {stats.map(([n, l]) => (
          <div key={l}>
            <p className="text-4xl font-extrabold">
              <Counter to={n} />
            </p>
            <p className="mt-1 text-sm text-brand-light/80">{l}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs text-brand-light/60">
        Placeholder figures. Update data/home.js with real numbers.
      </p>
    </section>
  );
}
export function Technologies() {
  return (
    <Wrap>
      <SectionHeading title="Technologies we use" />
      <ul className="flex flex-wrap justify-center gap-3">
        {tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-line bg-white px-5 py-2 text-sm font-semibold"
          >
            {t}
          </li>
        ))}
      </ul>
    </Wrap>
  );
}
export function Testimonials() {
  return (
    <Wrap alt>
      <SectionHeading
        title="What clients say"
        text="Placeholder cards until we publish real client feedback."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((q, i) => (
          <figure
            key={i}
            className="rounded-2xl border border-dashed border-brand/40 bg-brand-bg p-6"
          >
            <blockquote className="text-sm text-ink-soft">{q}</blockquote>
            <figcaption className="mt-4 text-sm font-semibold">
              Client name, company
            </figcaption>
          </figure>
        ))}
      </div>
    </Wrap>
  );
}
export function FAQ() {
  const [o, setO] = useState(0);
  return (
    <Wrap>
      <SectionHeading title="Frequently asked questions" />
      <div className="mx-auto max-w-2xl space-y-3">
        {faqs.map(([q, a], i) => (
          <div key={q} className="rounded-2xl border border-line bg-white">
            <h3>
              <button
                className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold"
                aria-expanded={o === i}
                aria-controls={`faq-${i}`}
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
              <p id={`faq-${i}`} className="px-5 pb-5 text-sm text-ink-soft">
                {a}
              </p>
            )}
          </div>
        ))}
      </div>
    </Wrap>
  );
}
