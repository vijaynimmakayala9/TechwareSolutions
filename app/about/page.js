import { images } from "@/data/images";
import Image from "next/image";
import ImageReveal from "@/components/shared/ImageReveal";
import {
  Target,
  Eye,
  ShieldCheck,
  Handshake,
  Gauge,
  Users,
  Award,
  GraduationCap,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import CTASection from "@/components/shared/CTASection";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import site from "@/config/site";
import { tech, why, process } from "@/data/home";

export const metadata = {
  title: "About Us",
  description:
    "Learn about TechWare Solutions, an IT company building websites, apps and software, and the leadership and approach behind our work.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About TechWare Solutions",
    description: "Our mission, values, team and development approach.",
    url: "/about",
  },
};
const values = [
  [ShieldCheck, "Integrity", "We say what we can deliver and then deliver it."],
  [Handshake, "Partnership", "Your goals shape every decision we make."],
  [Gauge, "Quality", "Fast, accessible, maintainable code."],
  [Users, "Clarity", "Plain language, honest timelines."],
];
const expertise = [
  "Web and e-commerce",
  "Mobile apps",
  "Custom software",
  "Cloud and DevOps",
  "Search and marketing",
  "Design and UX",
];
const schema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About TechWare Solutions",
  url: `${site.url}/about`,
  about: { "@type": "Organization", name: site.name },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        crumbs={[{ label: "About", href: "/about" }]}
        title="Technology partners for businesses that want to grow"
        text="TechWare Solutions designs and builds digital products, with clear communication from first call to launch."
      />

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-brand-dark">
              Who we are
            </h2>
            <p className="mt-4 text-ink-soft">
              We are an IT solutions company covering web, mobile, software,
              marketing and cloud. We keep projects practical: define the goal,
              build it well, and support it after launch.
            </p>
            <h3 className="mt-8 text-xl font-bold">Our story</h3>
            <p className="mt-2 rounded-2xl border border-dashed border-brand/40 bg-white p-4 text-sm text-ink-soft">
              Placeholder: add the real founding story, year and milestones
              here. Edit this block in app/about/page.js.
            </p>
          </div>
          <ImageReveal>
            <Image
              src={images.about}
              alt="The TechWare team at work"
              width={640}
              height={480}
              priority
              className="h-auto w-full rounded-3xl shadow-soft"
            />
          </ImageReveal>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {[
            [
              Target,
              "Our mission",
              "To give businesses reliable, well-built technology that helps them reach and serve more customers.",
            ],
            [
              Eye,
              "Our vision",
              "To be a trusted technology partner known for honest advice and dependable delivery.",
            ],
          ].map(([I, t, d]) => (
            <Reveal key={t}>
              <div className="h-full rounded-3xl bg-brand-bg p-8">
                <I className="text-brand" aria-hidden="true" />
                <h2 className="mt-3 text-2xl font-bold text-brand-dark">{t}</h2>
                <p className="mt-2 text-ink-soft">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Our core values" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(([I, t, d]) => (
              <Reveal key={t}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <I className="text-brand" aria-hidden="true" />
                  <h3 className="mt-3 font-bold">{t}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold text-brand-dark">
              Our expertise
            </h2>
            <ul className="mt-6 flex flex-wrap gap-3">
              {expertise.map((e) => (
                <li
                  key={e}
                  className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark"
                >
                  {e}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 text-xl font-bold">Technologies we use</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {tech.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-line px-3 py-1 text-sm"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-brand-dark">
              Why choose us
            </h2>
            <ul className="mt-6 space-y-4">
              {why.map(([t, d]) => (
                <li key={t}>
                  <p className="font-bold">{t}</p>
                  <p className="text-sm text-ink-soft">{d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-24 pt-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our CEO"
            text="The person steering TechWare Solutions."
          />
          <div className="relative mt-20 md:mt-24">
            {/* Dark panel */}
            <div className="relative overflow-hidden rounded-[2rem] bg-brand-dark px-8 py-12 shadow-soft sm:px-12 md:py-16 md:pr-[44%]">
              <div
                className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/20 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-28 left-1/3 h-72 w-72 rounded-full bg-brand-light/10 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-light">
                  <Award className="h-4 w-4" aria-hidden="true" /> Leadership
                </span>
                <h3 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
                  {site.ceo.name}
                </h3>
                <p className="mt-2 text-lg font-semibold text-brand-light">
                  {site.ceo.title}
                </p>
                <div
                  className="mt-6 h-1 w-16 rounded-full bg-brand"
                  aria-hidden="true"
                />
                <p className="mt-6 max-w-md leading-relaxed text-white/80">
                  Leads TechWare Solutions with a focus on practical, well-built
                  websites, mobile apps and digital marketing that help
                  businesses grow.
                </p>
                <div className="mt-8 flex items-center gap-3 text-white/90">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <GraduationCap
                      className="h-5 w-5 text-brand-light"
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/60">
                      Education
                    </p>
                    <p className="text-sm font-semibold">
                      {site.ceo.education}
                    </p>
                  </div>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {["Quality", "Transparency", "Long-term partnership"].map(
                    (v) => (
                      <li
                        key={v}
                        className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white"
                      >
                        {v}
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>

            {/* Overflowing portrait on the right */}
            <div className="relative mx-auto mt-10 w-full max-w-xs sm:max-w-sm md:absolute md:-top-12 md:bottom-[-2.5rem] md:right-10 md:mt-0 md:w-[36%] md:max-w-none">
              <div
                className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-brand"
                aria-hidden="true"
              />
              <div className="relative h-full overflow-hidden rounded-[2rem] bg-brand-light shadow-soft">
                <Image
                  src="/CEO/ceo.png"
                  alt={`Portrait of ${site.ceo.name}, ${site.ceo.title}`}
                  width={900}
                  height={1100}
                  sizes="(min-width: 768px) 36vw, 90vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-line bg-white px-5 py-3 text-center shadow-soft md:-left-10 md:translate-x-0 md:w-auto md:text-left">
                <p className="font-bold text-ink">{site.ceo.name}</p>
                <p className="text-sm text-brand">{site.ceo.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            title="Our development approach"
            text="Every project follows the same seven stages."
          />
          <ol className="flex flex-wrap justify-center gap-3">
            {process.map((p, i) => (
              <li
                key={p}
                className="rounded-full border border-line bg-brand-bg px-5 py-2 text-sm font-semibold"
              >
                {i + 1}. {p}
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CTASection />
    </>
  );
}
