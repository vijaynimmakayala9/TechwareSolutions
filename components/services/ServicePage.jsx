import Image from "next/image";
import { Check } from "lucide-react";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import Button from "@/components/shared/Button";
import CTASection from "@/components/shared/CTASection";
import SectionHeading from "@/components/shared/SectionHeading";
import FaqList from "./FaqList";
import site from "@/config/site";
import { process } from "@/data/home";

export default function ServicePage({ d }) {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: d.name,
        description: d.seoDesc,
        url: `${site.url}${d.path}`,
        provider: { "@type": "Organization", name: site.name, url: site.url },
      },
      {
        "@type": "FAQPage",
        mainEntity: d.faqs.map(([q, a]) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <section className="border-b border-line bg-white px-6 pb-16 pt-10">
        <div className="mx-auto max-w-6xl">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: d.name, href: d.path },
            ]}
          />
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
                {d.h1}
              </h1>
              <p className="mt-5 text-lg text-ink-soft">{d.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact">Get a Quote</Button>
                <Button href="/services" variant="secondary">
                  All services
                </Button>
              </div>
            </div>
            <Image
              src={d.image}
              alt={d.imageAlt}
              width={640}
              height={480}
              priority
              className="h-auto w-full rounded-3xl shadow-soft"
            />
          </div>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title={`What our ${d.name.toLowerCase()} includes`} />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {d.offerings.map((x) => (
              <li
                key={x.title}
                className="rounded-2xl border border-line bg-white p-6 transition hover:border-brand hover:shadow-soft"
              >
                <Check className="text-brand" aria-hidden="true" />
                <h3 className="mt-3 font-bold">{x.title}</h3>
                <p className="mt-2 text-sm text-ink-soft">{x.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Our development process" />
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
          <h2 className="mt-16 text-center text-2xl font-extrabold text-brand-dark">
            Technologies
          </h2>
          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {d.tech.map((t) => (
              <li
                key={t}
                className="rounded-full bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Frequently asked questions" />
          <FaqList items={d.faqs} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
