import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-faint sm:flex-row">
        <p>© {site.name}. Built with Next.js &amp; Tailwind CSS.</p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="transition-colors hover:text-foreground"
          >
            <MailIcon className="h-5 w-5" />
          </a>
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-foreground"
          >
            <GitHubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-foreground"
          >
            <LinkedInIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
