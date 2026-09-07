import { Section } from "./Section";
import { site } from "@/lib/site";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowIcon } from "./Icons";

export function Contact() {
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-linear-to-b from-surface-2 to-transparent p-8 text-center sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-xl -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative">
          <p className="text-sm font-medium uppercase tracking-widest text-accent">
            Let&apos;s work together
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-2xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl">
            Have a repetitive process worth automating?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            Tell me about the manual work slowing your team down — I&apos;ll help
            you connect the tools you already use and automate it.
          </p>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-medium text-accent-contrast transition-colors hover:bg-accent-soft"
          >
            Get in touch
            <ArrowIcon className="h-4 w-4" />
          </a>

          <div className="mt-8 flex items-center justify-center gap-5 text-muted">
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="transition-colors hover:text-foreground"
            >
              <MailIcon className="h-6 w-6" />
            </a>
            <a
              href={site.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GitHubIcon className="h-6 w-6" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
