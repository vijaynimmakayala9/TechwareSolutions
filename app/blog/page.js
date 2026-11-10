import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/shared/PageHero";
import BlogIndex from "@/components/blog/BlogIndex";
import NewsletterForm from "@/components/blog/NewsletterForm";
import { blogs, fmtDate, readingTime } from "@/data/blogs";
export const metadata = {
  title: "Blog: Web, App, SEO & Automation Insights",
  description:
    "Practical articles from TechWare Solutions on web development, mobile apps, SEO and business automation.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | TechWare Solutions",
    description: "Practical technology articles for businesses.",
    url: "/blog",
  },
};
export default function Blog() {
  const f = blogs.find((b) => b.featured) || blogs[0];
  return (
    <>
      <PageHero
        crumbs={[{ label: "Blog", href: "/blog" }]}
        title="Insights for growing businesses"
        text="Plain-language guidance on websites, apps, search and automation."
      />
      <section className="px-6 pt-16">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/blog/${f.slug}`}
            className="grid items-center gap-8 overflow-hidden rounded-3xl border border-line bg-white p-6 transition hover:shadow-soft md:grid-cols-2"
          >
            <Image
              src={f.image}
              alt=""
              width={640}
              height={480}
              priority
              className="h-auto w-full rounded-2xl"
            />
            <div>
              <p className="text-sm font-semibold text-brand">
                Featured · {f.category}
              </p>
              <h2 className="mt-2 text-2xl font-extrabold text-brand-dark">
                {f.title}
              </h2>
              <p className="mt-3 text-ink-soft">{f.excerpt}</p>
              <p className="mt-4 text-xs text-ink-soft">
                {f.author.name} · {fmtDate(f.published)} · {readingTime(f)} min
                read
              </p>
            </div>
          </Link>
        </div>
      </section>
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-extrabold text-brand-dark">
            Latest articles
          </h2>
          <BlogIndex />
        </div>
      </section>
      <section className="bg-white px-6 py-16 text-center">
        <h2 className="text-2xl font-extrabold text-brand-dark">
          Get new articles by email
        </h2>
        <p className="mb-6 mt-2 text-ink-soft">
          One email when we publish. Unsubscribe any time.
        </p>
        <NewsletterForm />
      </section>
    </>
  );
}
