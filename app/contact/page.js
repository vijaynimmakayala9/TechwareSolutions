import { Mail, Phone, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import FaqList from "@/components/services/FaqList";
import CTASection from "@/components/shared/CTASection";
import SectionHeading from "@/components/shared/SectionHeading";
import site from "@/config/site";
export const metadata = {
  title: "Contact Us",
  description:
    "Contact TechWare Solutions to discuss your website, mobile app, software or digital marketing project and request a quote.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact TechWare Solutions",
    description: "Request a quote or discuss your project.",
    url: "/contact",
  },
};
const faqs = [
  [
    "How quickly do you reply?",
    "We aim to reply to every enquiry promptly. Calling is fastest for urgent questions.",
  ],
  [
    "Can I get a quote before committing?",
    "Yes. Send your requirements and we’ll respond with a written estimate.",
  ],
  [
    "Do you work with clients remotely?",
    "Yes. We work by email, phone and video calls.",
  ],
];
const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact TechWare Solutions",
  url: `${site.url}/contact`,
};
export default function Contact() {
  const row = (I, label, content) => (
    <li className="flex gap-3">
      <I className="mt-1 shrink-0 text-brand" size={20} aria-hidden="true" />
      <div>
        <p className="text-sm font-semibold">{label}</p>
        <div className="text-sm text-ink-soft">{content}</div>
      </div>
    </li>
  );
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PageHero
        crumbs={[{ label: "Contact", href: "/contact" }]}
        title="Let’s build something great together"
        text="Tell us about your project. We’ll reply with clear next steps."
      />
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <aside aria-label="Business information">
            <h2 className="text-xl font-extrabold text-brand-dark">
              Business information
            </h2>
            <ul className="mt-6 space-y-5">
              {row(
                Mail,
                "Email",
                <a href={`mailto:${site.email}`} className="hover:text-brand">
                  {site.email}
                </a>,
              )}
              {row(
                Phone,
                "Phone",
                site.phones.map((x) => (
                  <p key={x.href}>
                    <a href={x.href} className="hover:text-brand">
                      {x.display}
                    </a>
                  </p>
                )),
              )}
              {site.address && row(MapPin, "Office address", site.address)}
              {site.hours && row(Clock, "Business hours", site.hours)}
            </ul>
          </aside>
        </div>
      </section>
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-xl font-extrabold text-brand-dark">
            Find us on the map
          </h2>
          <iframe
            title="Map showing our location"
            src={site.mapEmbedUrl}
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="h-80 w-full rounded-3xl border border-line sm:h-[28rem]"
          />
        </div>
      </section>
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <SectionHeading title="Contact FAQs" />
          <FaqList items={faqs} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
