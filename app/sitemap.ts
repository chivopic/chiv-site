import type { MetadataRoute } from "next";
import { getAllWriting } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const writing = getAllWriting().map((post) => ({
    url: `${site.url}/writing/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }));

  return [
    { url: site.url, lastModified: new Date() },
    { url: `${site.url}/projects`, lastModified: new Date() },
    { url: `${site.url}/writing`, lastModified: new Date() },
    { url: `${site.url}/about`, lastModified: new Date() },
    ...writing,
  ];
}
