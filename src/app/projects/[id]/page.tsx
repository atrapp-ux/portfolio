import { projects } from "@content/project";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();

  return (
    <main className="project-page">
      <div className="project-hero" aria-hidden="true" />
      <section className="project-heading" aria-labelledby="project-quote">
        <div className="project-heading-inner">
          <p className="project-heading-eyebrow">{project.eyebrow}</p>
          <h1 id="project-quote" className="project-heading-quote">
            {project.summary}
          </h1>
        </div>
      </section>
    </main>
  );
}
