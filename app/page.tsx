import Link from "next/link";
import { ProjectList } from "@/components/ProjectList";
import { WritingList } from "@/components/WritingList";
import { getAllWriting, getFeaturedProjects } from "@/lib/content";
import { site } from "@/lib/site";

export default function HomePage() {
  const projects = getFeaturedProjects();
  const writing = getAllWriting().slice(0, 3);

  return (
    <div className="space-y-16">
      <section className="space-y-5">
        <div className="space-y-2">
          <h1 className="text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
            {site.name}
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">{site.role}</p>
          <p className="font-mono text-sm text-muted-foreground/80">{site.motto}</p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm" aria-label="Quick links">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            GitHub
          </a>
          <Link
            href="/writing"
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            Writing
          </Link>
          <Link
            href="/projects"
            className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            Projects
          </Link>
        </nav>
      </section>

      <section className="space-y-5">
        <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Selected Projects
          </h2>
          <Link
            href="/projects"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            All
          </Link>
        </div>
        <ProjectList projects={projects} />
      </section>

      <section className="space-y-5">
        <h2 className="border-b border-border pb-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Exploring
        </h2>
        <p className="text-sm text-muted-foreground">
          {site.exploring.join(" · ")}
        </p>
      </section>

      <section className="space-y-5">
        <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
          <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
            Writing
          </h2>
          <Link
            href="/writing"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            All
          </Link>
        </div>
        <WritingList posts={writing} />
      </section>
    </div>
  );
}
