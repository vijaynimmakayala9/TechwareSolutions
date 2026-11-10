import Image from "next/image";
import ImageReveal from "@/components/shared/ImageReveal";
import {
  Target,
  Eye,
  ShieldCheck,
  Handshake,
  Gauge,
  Users,
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
              src="/images/about.svg"
              alt="Illustration of the TechWare team"
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

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Leadership" />
          <div className="mx-auto max-w-md rounded-3xl border border-line bg-white p-8 text-center shadow-soft">
            <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-brand-light">
              <Image
                src="/CEO/ceo.png"
                alt={`${site.ceo.name} - CEO of TechWare Solutions`}
                width={96}
                height={96}
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            <h3 className="mt-4 text-xl font-bold">{site.ceo.name}</h3>
            <p className="text-brand">{site.ceo.title}</p>
            <p className="mt-1 text-sm text-ink-soft">{site.ceo.education}</p>
          </div>
          <p className="mt-4 text-center text-xs text-ink-soft">
            Add more team members in config/site.js when ready.
          </p>
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
