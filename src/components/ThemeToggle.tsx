"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon, MonitorIcon } from "./Icons";

type Theme = "light" | "system" | "dark";

const OPTIONS: { value: Theme; label: string; Icon: typeof SunIcon }[] = [
  { value: "light", label: "Light", Icon: SunIcon },
  { value: "system", label: "System", Icon: MonitorIcon },
  { value: "dark", label: "Dark", Icon: MoonIcon },
];

function resolve(theme: Theme): "light" | "dark" {
  if (theme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return theme;
}

function apply(theme: Theme) {
  document.documentElement.setAttribute("data-theme", resolve(theme));
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  // Read the saved preference once on mount and re-apply it, so the control's
  // state and the actual page theme can never disagree. Defaults to light.
  useEffect(() => {
    const stored = (localStorage.getItem("theme") as Theme) || "light";
    setTheme(stored);
    setMounted(true);
    apply(stored);
  }, []);

  // While on "system", follow live OS theme changes.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if ((localStorage.getItem("theme") || "system") === "system") {
        apply("system");
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  function choose(next: Theme) {
    setTheme(next);
    localStorage.setItem("theme", next);
    apply(next);
  }

  return (
    <div
      role="radiogroup"
      aria-label="Color theme"
      className="inline-flex items-center gap-0.5 rounded-full border border-line bg-surface p-0.5"
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = mounted && theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => choose(value)}
            className={`inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors ${
              active
                ? "bg-accent text-accent-contrast"
                : "text-faint hover:text-foreground"
            }`}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
