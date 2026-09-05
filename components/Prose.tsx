import type { ReactNode } from "react";

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:tracking-tight prose-a:underline-offset-4 prose-pre:border prose-pre:border-border prose-pre:bg-transparent prose-code:before:content-none prose-code:after:content-none">
      {children}
    </div>
  );
}
