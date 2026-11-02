import Image from "next/image";
import { site } from "@/lib/site";
import { ArrowIcon } from "./Icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line"
    >
      {/* Subtle background glow — no heavy effects, just depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-2xl -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div className="reveal mx-auto w-full max-w-5xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          {/* Intro */}
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-sm text-muted">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Available for freelance projects
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-6xl">
              {site.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-accent sm:text-2xl">
              {site.role}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {site.tagline}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#capabilities"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 font-medium text-accent-contrast transition-colors hover:bg-accent-soft"
              >
                View My Work
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a
                href={site.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-line-strong px-6 font-medium text-foreground transition-colors hover:bg-surface"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Portrait — framed so it reads cleanly on both light and dark */}
          <div className="relative mx-auto w-full max-w-xs lg:mx-0 lg:justify-self-end">
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 -z-10 rounded-full bg-accent/15 blur-2xl"
            />
            <div className="overflow-hidden rounded-3xl border border-line shadow-xl shadow-black/10">
              <Image
                src="/me-emerald.webp"
                alt={site.name}
                width={900}
                height={1125}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Honest quick-facts strip — positioning, not vanity metrics */}
        <dl className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {site.quickFacts.map((fact) => (
            <div key={fact.label} className="bg-background p-5">
              <dt className="text-xs font-medium uppercase tracking-widest text-faint">
                {fact.label}
              </dt>
              <dd className="mt-1.5 font-medium text-foreground">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
