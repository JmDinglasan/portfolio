import { Section } from "./Section";
import { site } from "@/lib/site";

export function About() {
  return (
    <Section id="about" index="01" eyebrow="About" title="What I do">
      <div className="space-y-5 text-lg leading-relaxed text-muted">
        {site.about.map((paragraph, i) => (
          <p key={i} className="max-w-3xl">
            {paragraph}
          </p>
        ))}
      </div>
    </Section>
  );
}
