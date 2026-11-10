import Link from "next/link";
import site from "@/config/site";
export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="text-lg font-extrabold text-brand-dark">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm text-ink-soft">
            {site.description}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {site.nav.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="text-ink-soft hover:text-brand">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <address className="space-y-2 text-sm not-italic text-ink-soft">
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-brand">
              {site.email}
            </a>
          </p>
          {site.phones.map((p) => (
            <p key={p.href}>
              <a href={p.href} className="hover:text-brand">
                {p.display}
              </a>
            </p>
          ))}
        </address>
      </div>
      <p className="border-t border-line py-5 text-center text-xs text-ink-soft">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
