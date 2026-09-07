import { Section } from "./Section";
import { site } from "@/lib/site";

export function Services() {
  return (
    <Section
      id="services"
      index="02"
      eyebrow="Services"
      title="How I can help"
      band
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {site.services.map((service, i) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-line bg-background p-6 transition-colors hover:border-accent/40"
          >
            <span className="font-mono text-xs text-faint">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
