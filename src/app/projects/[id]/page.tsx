import { projects } from "@content/project";
import { ProjectStatsBar } from "@/components/project-stats-bar";
import { ProjectImageTextBlock } from "@/components/project-image-text";
import { ProjectTextImageBlock } from "@/components/project-text-image";
import Link from "next/link";
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
      <header className="project-hero">
        <Link className="project-home" href="/">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/project-home.svg" alt="" width={24} height={24} />
          Home
        </Link>
      </header>
      <section className="project-heading" aria-labelledby="project-quote">
        <div className="project-heading-inner">
          <p className="project-heading-eyebrow">{project.eyebrow}</p>
          <h1 id="project-quote" className="project-heading-quote">
            {project.summary}
          </h1>
        </div>
      </section>
      <ProjectStatsBar stats={project.stats} />
      {project.textImages.map((block) => (
        <ProjectTextImageBlock block={block} key={block.title} />
      ))}
      {project.imageTexts.map((block) => (
        <ProjectImageTextBlock block={block} key={block.sections[0]?.label ?? block.title} />
      ))}
    </main>
  );
}
