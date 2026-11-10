import PageHero from "@/components/shared/PageHero";
import ServiceGrid from "@/components/shared/ServiceGrid";
import CTASection from "@/components/shared/CTASection";
import site from "@/config/site";
import { services } from "@/data/services";

export const metadata = {
  title: "IT Services: Web, Mobile, Software & Marketing",
  description:
    "Explore TechWare Solutions services: website and mobile app development, custom software, UI/UX, e-commerce, SEO, cloud, IT consulting and automation.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "IT Services | TechWare Solutions",
    description:
      "Web, mobile, software, marketing, cloud and consulting services.",
    url: "/services",
  },
};
const schema = {
  "@context": "https://schema.org",
  "@graph": services.map((s) => ({
    "@type": "Service",
    name: s.title,
    description: s.desc,
    provider: { "@type": "Organization", name: site.name, url: site.url },
  })),
};

export default function Services() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        crumbs={[{ label: "Services", href: "/services" }]}
        title="IT services that move your business forward"
        text="Nine focused services, from a first website to cloud infrastructure and automation."
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <ServiceGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
