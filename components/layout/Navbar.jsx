"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import site from "@/config/site";
import Button from "@/components/shared/Button";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [dd, setDd] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    setOpen(false);
    setDd(false);
  }, [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  const active = (h) => (h === "/" ? path === "/" : path.startsWith(h));
  const link = (h) =>
    `rounded-full px-3 py-2 text-sm font-semibold transition hover:text-brand ${active(h) ? "text-brand" : "text-ink"}`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition ${scrolled ? "border-line bg-white/90 shadow-soft backdrop-blur" : "border-transparent bg-brand-bg"}`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <Link href="/" className="text-lg font-extrabold text-brand-dark">
          TechWare<span className="text-brand"> Solutions</span>
        </Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((i) =>
            i.children ? (
              <li
                key={i.href}
                className="relative"
                onMouseLeave={() => setDd(false)}
              >
                <button
                  className={`${link(i.href)} inline-flex items-center gap-1`}
                  aria-expanded={dd}
                  aria-haspopup="true"
                  onClick={() => setDd(!dd)}
                  onMouseEnter={() => setDd(true)}
                  onKeyDown={(e) => e.key === "Escape" && setDd(false)}
                >
                  {i.label}
                  <ChevronDown size={14} aria-hidden="true" />
                </button>
                {dd && (
                  <ul className="absolute left-0 top-full w-64 rounded-2xl border border-line bg-white p-2 shadow-soft">
                    {i.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block rounded-xl px-3 py-2 text-sm hover:bg-brand-light"
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={i.href}>
                <Link
                  href={i.href}
                  className={link(i.href)}
                  aria-current={active(i.href) ? "page" : undefined}
                >
                  {i.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <div className="hidden lg:block">
          <Button href="/contact">Get a Quote</Button>
        </div>
        <button
          className="inline-flex h-11 w-11 items-center justify-center lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-line bg-white px-6 pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {site.nav
              .flatMap((i) => [
                i,
                ...(i.children || [])
                  .filter((c) => c.label !== "All Services")
                  .map((c) => ({ ...c, sub: true })),
              ])
              .map((i) => (
                <li key={i.href + i.label}>
                  <Link
                    href={i.href}
                    className={`block py-3 text-base font-semibold ${i.sub ? "pl-4 text-sm font-medium text-ink-soft" : ""} ${active(i.href) && !i.sub ? "text-brand" : ""}`}
                  >
                    {i.label}
                  </Link>
                </li>
              ))}
          </ul>
          <Button href="/contact" className="w-full">
            Get a Quote
          </Button>
        </div>
      )}
    </header>
  );
}
