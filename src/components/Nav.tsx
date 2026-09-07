import { site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

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
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-contrast transition-colors hover:bg-accent-soft"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </header>
  );
}
