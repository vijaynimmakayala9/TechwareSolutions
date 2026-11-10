import Image from "next/image";
import Link from "next/link";
import { fmtDate, readingTime } from "@/data/blogs";
export default function BlogCard({ b }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-line bg-white transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/blog/${b.slug}`} className="block h-full">
        <Image
          src={b.image}
          alt=""
          width={640}
          height={480}
          className="h-auto w-full"
        />
        <div className="p-5">
          <p className="text-xs font-semibold text-brand">{b.category}</p>
          <h3 className="mt-1 text-lg font-bold group-hover:text-brand">
            {b.title}
          </h3>
          <p className="mt-2 text-sm text-ink-soft">{b.excerpt}</p>
          <p className="mt-3 text-xs text-ink-soft">
            {b.author.name} · {fmtDate(b.published)} · {readingTime(b)} min read
          </p>
        </div>
      </Link>
    </article>
  );
}
