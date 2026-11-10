export default function SectionHeading({ title, text, center = true }) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <h2 className="text-3xl font-extrabold tracking-tight text-brand-dark sm:text-4xl">
        {title}
      </h2>
      {text && <p className="mt-4 text-ink-soft">{text}</p>}
    </div>
  );
}
