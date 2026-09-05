import type { ProjectMeta } from "@/lib/content";

export function ProjectList({ projects }: { projects: ProjectMeta[] }) {
  if (projects.length === 0) {
    return <p className="text-sm text-muted-foreground">No projects yet.</p>;
  }

  return (
    <ul className="divide-y divide-border">
      {projects.map((project) => (
        <li key={project.slug} className="py-5 first:pt-0 last:pb-0">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div className="min-w-0 space-y-1">
              <h3 className="text-base font-medium tracking-tight text-foreground">
                {project.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {project.summary}
              </p>
              {project.tags.length > 0 && (
                <p className="font-mono text-xs text-muted-foreground/80">
                  {project.tags.join(" · ")}
                </p>
              )}
            </div>
            <div className="flex shrink-0 gap-3 text-sm">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
                >
                  GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
                >
                  Demo
                </a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
