import Button from "@/components/shared/Button";
export const metadata = { title: "Page not found", robots: { index: false } };
export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-32 text-center">
      <h1 className="text-4xl font-extrabold text-brand-dark">
        This page doesn’t exist
      </h1>
      <p className="mt-4 text-ink-soft">
        The link may be broken or the page may have moved.
      </p>
      <div className="mt-8">
        <Button href="/">Back to home</Button>
      </div>
    </section>
  );
}
