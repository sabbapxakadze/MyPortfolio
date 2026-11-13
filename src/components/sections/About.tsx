import { useState } from "react";
import { about, skills } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useTabKeys } from "@/hooks/useTabKeys";
import { cn } from "@/lib/utils";

export function About() {
  const [active, setActive] = useState(() =>
    Math.max(
      0,
      skills.findIndex((g) => g.group === "Web Development")
    )
  );
  const group = skills[active];
  const onTabKeys = useTabKeys(skills.length, active, setActive);

  return (
    <Section id="about" tone="soft">
      <SectionHeading title="About." />

      <Reveal className="max-w-3xl space-y-5">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className={cn(
              "leading-relaxed tracking-tight",
              i === 0
                ? "text-2xl font-medium text-foreground sm:text-[1.7rem] sm:leading-snug"
                : "text-lg text-muted-foreground sm:text-xl"
            )}
          >
            {p}
          </p>
        ))}
      </Reveal>

      <Reveal delay={100} className="mt-14">
        <h3 className="mb-5 text-2xl font-semibold tracking-tight">
          What I work with.
        </h3>

        <div className="rounded-tile bg-card p-6 sm:p-8">
          <div
            role="tablist"
            aria-label="Skill groups"
            onKeyDown={onTabKeys}
            className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 sm:inline-flex sm:max-w-full sm:rounded-full sm:bg-secondary sm:p-1 sm:pb-1"
          >
            {skills.map((g, i) => (
              <button
                key={g.group}
                type="button"
                role="tab"
                id={`skills-tab-${i}`}
                aria-selected={i === active}
                tabIndex={i === active ? 0 : -1}
                aria-controls="skills-panel"
                onClick={() => setActive(i)}
                className={cn(
                  "shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  i === active
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground max-sm:bg-secondary"
                )}
              >
                {g.group}
              </button>
            ))}
          </div>

          <ul
            key={group.group}
            role="tabpanel"
            id="skills-panel"
            aria-labelledby={`skills-tab-${active}`}
            className="animate-in-up mt-7 flex flex-wrap gap-2.5"
          >
            {group.items.map((item) => (
              <li
                key={item}
                className="rounded-full bg-secondary px-4 py-2 text-[15px] font-medium tracking-tight"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
