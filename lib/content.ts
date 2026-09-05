import fs from "fs";
import path from "path";
import matter from "gray-matter";

const writingDir = path.join(process.cwd(), "content/writing");
const projectsDir = path.join(process.cwd(), "content/projects");

export type WritingMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

export type WritingPost = WritingMeta & {
  content: string;
};

export type ProjectMeta = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

function readMdFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md") || f.endsWith(".mdx"))
    .sort();
}

export function getAllWriting(): WritingMeta[] {
  return readMdFiles(writingDir)
    .map((filename) => {
      const slug = filename.replace(/\.mdx?$/, "");
      const raw = fs.readFileSync(path.join(writingDir, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? ""),
        summary: String(data.summary ?? ""),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

function isSafeSlug(slug: string): boolean {
  if (!slug || slug.includes("/") || slug.includes("\\") || slug.includes("..")) {
    return false;
  }
  return /^[a-zA-Z0-9._-]+$/.test(slug);
}

export function getWritingBySlug(slug: string): WritingPost | null {
  if (!isSafeSlug(slug)) return null;

  const candidates = [`${slug}.mdx`, `${slug}.md`];
  for (const name of candidates) {
    const full = path.resolve(writingDir, name);
    if (!full.startsWith(path.resolve(writingDir) + path.sep)) return null;
    if (!fs.existsSync(full)) continue;
    const raw = fs.readFileSync(full, "utf8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: String(data.title ?? slug),
      date: String(data.date ?? ""),
      summary: String(data.summary ?? ""),
      content,
    };
  }
  return null;
}

export function getAllProjects(): ProjectMeta[] {
  return readMdFiles(projectsDir).map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(projectsDir, filename), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: String(data.title ?? slug),
      summary: String(data.summary ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      github: data.github ? String(data.github) : undefined,
      demo: data.demo ? String(data.demo) : undefined,
      featured: Boolean(data.featured),
    };
  });
}

export function getFeaturedProjects(): ProjectMeta[] {
  const all = getAllProjects();
  const featured = all.filter((p) => p.featured);
  return featured.length > 0 ? featured : all.slice(0, 3);
}
