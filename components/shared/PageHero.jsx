import Breadcrumbs from "./Breadcrumbs";
export default function PageHero({ crumbs, title, text }) {
  return (
    <section className="border-b border-line bg-white px-6 pb-16 pt-10">
      <div className="mx-auto max-w-6xl">
        <Breadcrumbs items={crumbs} />
        <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight text-brand-dark sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-ink-soft">{text}</p>
      </div>
    </section>
  );
}
