import { Section } from "./Section";
import { site } from "@/lib/site";

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      index="03"
      eyebrow="What I Build"
      title="Solutions I can build for you"
    >
      <div className="grid gap-6">
        {site.capabilities.map((cap, i) => (
          <article
            key={cap.title}
            className="group rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40 sm:p-8"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-sm text-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-foreground">
                {cap.title}
              </h3>
            </div>

            <dl className="mt-6 grid gap-5 border-t border-line pt-6 sm:grid-cols-3">
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-faint">
                  The problem
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                  {cap.problem}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-faint">
                  What I build
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                  {cap.build}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium uppercase tracking-widest text-faint">
                  The outcome
                </dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted">
                  {cap.outcome}
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {cap.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-line bg-background px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
