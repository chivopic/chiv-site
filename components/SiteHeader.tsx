import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "/writing", label: "Writing" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
        >
          <Image
            src="/logo-light.png"
            alt="Chiv"
            width={120}
            height={32}
            className="h-7 w-auto dark:hidden sm:h-8"
            priority
          />
          <Image
            src="/logo.png"
            alt=""
            aria-hidden={true}
            width={120}
            height={32}
            className="hidden h-7 w-auto dark:block sm:h-8"
            priority
          />
        </Link>
        <nav className="flex items-center gap-4" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
