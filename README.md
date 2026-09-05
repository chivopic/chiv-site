# Chiv personal site scaffold

Minimal Next.js App Router personal site with TypeScript, Tailwind CSS, MDX
(next-mdx-remote + gray-matter), and rehype-pretty-code + shiki. No database,
CMS, or auth.

**DNS note:** chiv.blog is not connected yet. The canonical URL in `lib/site.ts`
is the Vercel placeholder `https://chiv-chivopic.vercel.app` until a custom
domain is wired up.

## Structure

```
app/                  routes (App Router)
components/           SiteHeader, SiteFooter, ThemeToggle, lists, Prose
content/projects/     project stubs (Markdown + frontmatter)
content/writing/      writing stubs (Markdown/MDX + frontmatter)
lib/                  site config + content/MDX helpers
public/               static assets
```

## Commands

From this directory (uses package-lock.json):

1. Install: see `package.json` / lockfile (`install` with your Node package manager)
2. Dev: `run dev` — http://localhost:3000
3. Build: `run build` — production build (verified on this scaffold)
4. Start: `start` — serve the production build

## Add a project

Create `content/projects/my-project.md` with frontmatter fields:
`title`, `summary`, `tags`, optional `github` / `demo`, optional `featured`.

Featured projects appear on the home page; all appear on `/projects`.

## Add a writing post

Create `content/writing/my-post.md` (or `.mdx`) with `title`, `date`
(YYYY-MM-DD), `summary`, then the body. Open `/writing/my-post`. RSS at
`/feed.xml` updates from the same files.

## Theme and site config

- Dark / light mode via next-themes (`components/ThemeToggle.tsx`)
- Edit name, links, and exploring tags in `lib/site.ts`

## Copy into a git repo

No git repository was initialized here — plain files ready to copy into
`chivopic/chiv`.

Example:

```
rsync -a --exclude node_modules --exclude .next ./chiv-scaffold/ /path/to/chiv/
```

Then install and build in the target repo. Prefer copying into an existing
clone rather than pushing from this machine.

## Caveats

- `next.config.ts` sets `experimental.cpus: 1` to reduce flaky parallel build
  races on constrained environments; you can raise or remove it on a normal machine.
- Content is filesystem Markdown only — no CMS.
