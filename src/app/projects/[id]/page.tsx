import { projects } from "@content/project";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  if (!projects.some((project) => project.id === id)) notFound();

  return <main className="project-page" />;
}
