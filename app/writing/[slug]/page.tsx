import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Prose } from "@/components/Prose";
import { getAllWriting, getWritingBySlug } from "@/lib/content";
import { renderMDX } from "@/lib/mdx";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllWriting().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
  };
}

function formatDate(date: string) {
  if (!date) return "";
  try {
    return new Intl.DateTimeFormat("en", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  } catch {
    return date;
  }
}

export default async function WritingPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) notFound();

  const mdx = await renderMDX(post.content);

  return (
    <article className="space-y-8">
      <header className="space-y-3 border-b border-border pb-6">
        <h1 className="text-3xl font-medium tracking-tight">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.summary && (
            <>
              <span aria-hidden="true">·</span>
              <span>{post.summary}</span>
            </>
          )}
        </div>
      </header>
      <Prose>{mdx}</Prose>
    </article>
  );
}
