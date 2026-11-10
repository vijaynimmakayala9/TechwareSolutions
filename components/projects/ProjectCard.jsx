import Image from "next/image";
import Link from "next/link";
export default function ProjectCard({ p }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-soft">
      <div className="overflow-hidden">
        <Image
          src={p.image}
          alt={`${p.title} concept illustration`}
          width={640}
          height={480}
          className="h-auto w-full transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold text-brand">
          {p.category} · {p.industry} (sample concept)
        </p>
        <h3 className="mt-1 text-lg font-bold">{p.title}</h3>
        <p className="mt-2 text-sm text-ink-soft">{p.desc}</p>
        <ul className="mt-3 flex flex-wrap gap-2" aria-label="Technologies">
          {p.tech.map((t) => (
            <li
              key={t}
              className="rounded-full bg-brand-bg px-3 py-1 text-xs font-semibold"
            >
              {t}
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-4 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
        >
          Discuss a similar project
        </Link>
      </div>
    </article>
  );
}
