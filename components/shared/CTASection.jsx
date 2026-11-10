import Button from "./Button";
export default function CTASection({
  title = "Ready to start your project?",
  text = "Tell us what you’re building and we’ll reply with next steps.",
}) {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-6xl rounded-3xl bg-brand-dark px-8 py-16 text-center text-white">
        <h2 className="text-3xl font-extrabold sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-light/80">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button
            href="/contact"
            className="!bg-white !text-brand-dark hover:!bg-brand-light"
          >
            Get a Quote
          </Button>
          <Button
            href="/services"
            variant="secondary"
            className="!border-white/30 !bg-transparent !text-white hover:!border-white"
          >
            Explore services
          </Button>
        </div>
      </div>
    </section>
  );
}
