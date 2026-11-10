import Hero from "@/components/home/Hero";
import CTASection from "@/components/shared/CTASection";
import {
  Partners,
  AboutPreview,
  ServicesOverview,
  WhyChooseUs,
  Process,
  ProjectsPreview,
  Stats,
  Technologies,
  Testimonials,
  FAQ,
} from "@/components/home/Sections";
import { faqs } from "@/data/home";

export const metadata = {
  title: { absolute: "TechWare Solutions | Web, App & Software Development" },
  description:
    "TechWare Solutions builds websites, mobile apps, custom software and digital marketing campaigns for growing businesses.",
  alternates: { canonical: "/" },
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <Partners />
      <AboutPreview />
      <ServicesOverview />
      <WhyChooseUs />
      <Process />
      <ProjectsPreview />
      <Stats />
      <Technologies />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}
