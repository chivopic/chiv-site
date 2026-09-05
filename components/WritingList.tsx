import Link from "next/link";
import type { WritingMeta } from "@/lib/content";

function formatDate(date: string) {
  if (!date) return "";
  try {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
}

export function WritingList({ posts }: { posts: WritingMeta[] }) {
  if (posts.length === 0) {
    return <p className="text-sm text-muted-foreground">No writing yet.</p>;
  }

  return (
    <ul className="divide-y divide-border">
      {posts.map((post) => (
        <li key={post.slug} className="py-4 first:pt-0 last:pb-0">
          <Link
            href={`/writing/${post.slug}`}
            className="group block space-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-base font-medium tracking-tight text-foreground group-hover:underline group-hover:underline-offset-4">
                {post.title}
              </h3>
              <time
                dateTime={post.date}
                className="shrink-0 font-mono text-xs text-muted-foreground"
              >
                {formatDate(post.date)}
              </time>
            </div>
            {post.summary && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {post.summary}
              </p>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
