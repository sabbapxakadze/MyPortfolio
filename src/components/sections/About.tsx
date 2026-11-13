import { useState } from "react";
import { about, proof, skills } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";

export function About() {
  // Index of the "How I build" tile that is hovered, focused or tapped.
  const [hovered, setHovered] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const focused = hovered ?? pinned;
  const lit = new Set(focused === null ? [] : proof[focused].uses);

  return (
    <Section id="about" tone="soft">
      <SectionHeading title="About." />

      <div className="grid items-start gap-10 lg:grid-cols-[1fr_20rem] lg:gap-16">
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

        <Reveal delay={100} className="mx-auto w-full max-w-xs lg:mx-0 lg:max-w-none">
          <img
            src={`${import.meta.env.BASE_URL}profile.jpg`}
            alt="Saba on an evening at a snowy ice rink, leaning on a railing in front of a lit Christmas tree."
            width={640}
            height={640}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full rounded-tile object-cover object-[47%_50%] shadow-xl"
          />
        </Reveal>
      </div>

      <Reveal delay={100} className="mt-16">
        <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          How I build.
        </h3>
        <p className="mb-6 mt-2 text-muted-foreground">
          Hover or tap a card to see which tools it uses.
        </p>

        <ul
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          onMouseLeave={() => setHovered(null)}
        >
          {proof.map((item, i) => (
            <li key={item.title} className="flex">
              <button
                type="button"
                aria-pressed={pinned === i}
                onMouseEnter={() => setHovered(i)}
                onFocus={() => setHovered(i)}
                onBlur={() => setHovered(null)}
                onClick={() => setPinned((p) => (p === i ? null : i))}
                className={cn(
                  "flex w-full flex-col rounded-tile bg-card p-7 text-left transition-all duration-300 hover:-translate-y-1",
                  focused === i && "ring-2 ring-primary"
                )}
              >
                <span className="text-lg font-semibold text-muted-foreground">
                  {item.title}
                </span>
                <span className="mt-3 block whitespace-nowrap text-5xl font-bold tracking-[-0.045em] sm:text-[3.2rem]">
                  {item.count ? (
                    <CountUp
                      from={item.count.from}
                      to={item.count.to}
                      suffix={item.count.suffix}
                    />
                  ) : (
                    item.text
                  )}
                </span>
                <span className="mt-4 block text-[15px] leading-relaxed text-muted-foreground">
                  {item.description}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={100} className="mt-14">
        <h3 className="mb-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Everything I use.
        </h3>

        <dl className="divide-y divide-border rounded-tile bg-card px-6 py-2 sm:px-8">
          {skills.map((g) => (
            <div
              key={g.group}
              className="grid gap-3 py-5 sm:grid-cols-[11rem_1fr] sm:gap-8"
            >
              <dt className="text-sm font-semibold text-muted-foreground sm:pt-1.5">
                {g.group}
              </dt>
              <dd>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((item) => {
                    const on = lit.has(item);
                    return (
                      <li
                        key={item}
                        className={cn(
                          "rounded-full px-3.5 py-1.5 text-sm font-medium transition-all duration-300",
                          on
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary",
                          focused !== null && !on && "opacity-30"
                        )}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
