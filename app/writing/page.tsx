import type { Metadata } from "next";
import { WritingList } from "@/components/WritingList";
import { getAllWriting } from "@/lib/content";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on building, agents, and systems.",
};

export default function WritingPage() {
  const posts = getAllWriting();

  return (
    <div className="space-y-8">
      <header className="space-y-2 border-b border-border pb-6">
        <h1 className="text-2xl font-medium tracking-tight">Writing</h1>
        <p className="text-sm text-muted-foreground">
          Short notes and longer essays. Newest first.
        </p>
      </header>
      <WritingList posts={posts} />
    </div>
  );
}
