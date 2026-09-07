import { Section } from "./Section";
import { site } from "@/lib/site";

export function Technologies() {
  return (
    <Section id="technologies" index="05" eyebrow="Stack" title="Technologies">
      {/* Honest "activity" note — communicates momentum without overclaiming */}
      <p className="mb-8 max-w-3xl text-lg leading-relaxed text-muted">
        {site.currentlyBuilding}
      </p>
      <ul className="flex flex-wrap gap-2">
        {site.technologies.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>
    </Section>
  );
}
