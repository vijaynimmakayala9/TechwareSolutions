import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import BlogCard from "@/components/blog/BlogCard";
import CTASection from "@/components/shared/CTASection";
import site from "@/config/site";
import { blogs, getBlog, fmtDate, readingTime } from "@/data/blogs";

export const dynamicParams = false;
export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}
export function generateMetadata({ params }) {
  const b = getBlog(params.slug);
  if (!b) return {};
  return {
    title: b.title,
    description: b.excerpt,
    alternates: { canonical: `/blog/${b.slug}` },
    openGraph: {
      type: "article",
      title: b.title,
      description: b.excerpt,
      url: `/blog/${b.slug}`,
      publishedTime: b.published,
      modifiedTime: b.updated,
      authors: [b.author.name],
      images: [b.image],
    },
    twitter: {
      card: "summary_large_image",
      title: b.title,
      description: b.excerpt,
    },
  };
}
export default function Post({ params }) {
  const b = getBlog(params.slug);
  if (!b) notFound();
  const url = `${site.url}/blog/${b.slug}`;
  const related = blogs
    .filter(
      (x) =>
        x.slug !== b.slug &&
        (x.category === b.category || x.tags.some((t) => b.tags.includes(t))),
    )
    .concat(blogs.filter((x) => x.slug !== b.slug))
    .filter((x, i, a) => a.indexOf(x) === i)
    .slice(0, 2);
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: b.title,
    description: b.excerpt,
    image: `${site.url}${b.image}`,
    datePublished: b.published,
    dateModified: b.updated,
    mainEntityOfPage: url,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
  };
  const share = encodeURIComponent(url),
    t = encodeURIComponent(b.title);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <article className="px-6 py-10">
        <div className="mx-auto max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Blog", href: "/blog" },
              { label: b.title, href: `/blog/${b.slug}` },
            ]}
          />
          <p className="text-sm font-semibold text-brand">{b.category}</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
            {b.title}
          </h1>
          <p className="mt-3 text-sm text-ink-soft">
            By {b.author.name} · Published {fmtDate(b.published)} ·{" "}
            {readingTime(b)} min read
          </p>
          <Image
            src={b.image}
            alt={`Illustration for ${b.title}`}
            width={640}
            height={480}
            priority
            className="mt-8 h-auto w-full rounded-3xl"
          />
          <p className="mt-8 text-lg text-ink-soft">{b.excerpt}</p>
          {b.sections.map(([h, p]) => (
            <section key={h} className="mt-8">
              <h2 className="text-xl font-bold text-brand-dark">{h}</h2>
              <p className="mt-2 leading-relaxed text-ink-soft">{p}</p>
            </section>
          ))}
          <ul className="mt-10 flex flex-wrap gap-2" aria-label="Tags">
            {b.tags.map((x) => (
              <li
                key={x}
                className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand-dark"
              >
                {x}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-ink-soft">
            Share:{" "}
            <a
              className="font-semibold text-brand hover:underline"
              href={`https://twitter.com/intent/tweet?url=${share}&text=${t}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>{" "}
            ·{" "}
            <a
              className="font-semibold text-brand hover:underline"
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${share}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </article>
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-2xl font-extrabold text-brand-dark">
            Related articles
          </h2>
          <ul className="grid gap-6 md:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug} className="list-none">
                <BlogCard b={r} />
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link
              href="/services"
              className="font-semibold text-brand hover:text-brand-dark"
            >
              Explore our services
            </Link>
          </p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
