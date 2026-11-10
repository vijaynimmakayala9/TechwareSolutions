import Link from "next/link";
import site from "@/config/site";
export default function Breadcrumbs({ items }) {
  const all = [{ label: "Home", href: "/" }, ...items];
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${site.url}${c.href}`,
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-soft">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap gap-2">
        {all.map((c, i) => (
          <li key={c.href} className="flex gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === all.length - 1 ? (
              <span
                aria-current="page"
                className="font-semibold text-brand-dark"
              >
                {c.label}
              </span>
            ) : (
              <Link href={c.href} className="hover:text-brand">
                {c.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
