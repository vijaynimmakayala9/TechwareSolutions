import PageHero from "@/components/shared/PageHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import CTASection from "@/components/shared/CTASection";
export const metadata = {
  title: "Projects & Portfolio",
  description:
    "Sample project concepts from TechWare Solutions across website development, mobile apps, e-commerce and digital marketing.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | TechWare Solutions",
    description: "Website, app, e-commerce and marketing project concepts.",
    url: "/projects",
  },
};
export default function Projects() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Projects", href: "/projects" }]}
        title="Projects and portfolio"
        text="The projects below are sample concepts that show the kind of work we do. Real client case studies will replace them."
      />
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <ProjectsGrid />
        </div>
      </section>
      <CTASection />
    </>
  );
}
