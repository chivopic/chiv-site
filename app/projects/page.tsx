import type { Metadata } from "next";
import { ProjectList } from "@/components/ProjectList";
import { getAllProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects and experiments.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div className="space-y-8">
      <header className="space-y-2 border-b border-border pb-6">
        <h1 className="text-2xl font-medium tracking-tight">Projects</h1>
        <p className="text-sm text-muted-foreground">
          Tools, agents, and personal software — some finished, some in progress.
        </p>
      </header>
      <ProjectList projects={projects} />
    </div>
  );
}
