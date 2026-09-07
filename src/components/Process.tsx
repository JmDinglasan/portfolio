import { Section } from "./Section";
import { site } from "@/lib/site";

export function Process() {
  return (
    <Section id="process" index="04" eyebrow="Process" title="How I work" band>
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {site.process.map((phase) => (
          <li
            key={phase.step}
            className="rounded-2xl border border-line bg-background p-5"
          >
            <span className="font-mono text-sm text-accent">{phase.step}</span>
            <h3 className="mt-2 font-semibold text-foreground">{phase.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted">
              {phase.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
