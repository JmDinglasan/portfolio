import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  /** Two-digit order number shown before the eyebrow, e.g. "01". */
  index?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  /** Full-bleed tinted background to break up vertical rhythm. */
  band?: boolean;
  className?: string;
};

/** Consistent section wrapper: max width, vertical rhythm, optional numbered
 *  heading, and an optional full-width tinted band. */
export function Section({
  id,
  index,
  eyebrow,
  title,
  children,
  band,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${band ? "border-y border-line bg-surface" : ""}`}
    >
      <div
        className={`mx-auto w-full max-w-5xl px-6 py-20 sm:py-28 ${className ?? ""}`}
      >
        {(eyebrow || title) && (
          <header className="mb-10">
            {eyebrow && (
              <p className="mb-3 flex items-center gap-2.5 text-sm font-medium uppercase tracking-widest text-accent">
                {index && (
                  <span className="font-mono text-xs text-faint">{index}</span>
                )}
                {index && <span className="h-px w-6 bg-line-strong" />}
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-foreground text-balance sm:text-3xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
