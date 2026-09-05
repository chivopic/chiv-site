import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2 border-b border-border pb-6">
        <h1 className="text-2xl font-medium tracking-tight">About</h1>
        <p className="text-sm text-muted-foreground">{site.role}</p>
      </header>

      <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          I build software at the intersection of agents, developer tools, and
          systems — preferring small, sharp interfaces over sprawling platforms.
        </p>
        <p>
          This site is a quiet place for projects and notes. No newsletter
          funnel, no resume dump — just the work and the thinking around it.
        </p>
        <p>
          Currently exploring: {site.exploring.join(", ").toLowerCase()}.
        </p>
        <p>
          Find me on{" "}
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
