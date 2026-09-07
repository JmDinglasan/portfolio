import { site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";
import { MailIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#capabilities", label: "What I Build" },
  { href: "#process", label: "How I Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <ul className="hidden items-center gap-8 text-sm text-muted md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <MailIcon className="h-4 w-4 shrink-0" />
            <span className="truncate">{site.email}</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
