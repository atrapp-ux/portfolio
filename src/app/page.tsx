import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Quotes } from "@/components/quotes";
import { Tools } from "@/components/tools";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Tools />
      <Quotes />
      <ProjectCard />
    </>
  );
}
