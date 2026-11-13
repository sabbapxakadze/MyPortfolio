import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { showcase } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { useTabKeys } from "@/hooks/useTabKeys";
import { cn } from "@/lib/utils";

/** Full-width dark band: FlowDesc's real screenshots behind pill tabs. */
export function Showcase() {
  const [active, setActive] = useState(0);
  const shot = showcase.shots[active];
  const onTabKeys = useTabKeys(showcase.shots.length, active, setActive);

  return (
    <Section id="flowdesc" tone="dark">
      <Reveal>
        <p className="text-lg font-semibold text-muted-foreground">
          {showcase.eyebrow}
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <h2 className="text-5xl font-bold tracking-[-0.045em] sm:text-7xl">
            {showcase.title}
          </h2>
          <a
            href={showcase.url}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center text-[17px] font-medium text-primary hover:underline"
          >
            Visit FlowDesc
            <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
        <p className="mt-5 max-w-2xl text-xl leading-snug text-muted-foreground sm:text-2xl">
          {showcase.summary}
        </p>

        <div
          role="tablist"
          aria-label="FlowDesc screenshots"
          onKeyDown={onTabKeys}
          className="-mx-1 mt-10 flex gap-1 overflow-x-auto px-1 pb-1 sm:inline-flex sm:max-w-full sm:rounded-full sm:bg-secondary sm:p-1"
        >
          {showcase.shots.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`shot-tab-${i}`}
              aria-selected={i === active}
              aria-controls="shot-panel"
              tabIndex={i === active ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors",
                i === active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground max-sm:bg-secondary"
              )}
            >
              {s.label}
            </button>
          ))}
        </div>

        <div
          role="tabpanel"
          id="shot-panel"
          aria-labelledby={`shot-tab-${active}`}
          className="relative mt-6"
        >
          {/* soft glow behind the screenshot */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -bottom-10 -top-6 -z-0 rounded-[3rem] bg-primary/10 blur-3xl"
          />
          <img
            key={shot.id}
            src={`${import.meta.env.BASE_URL}flowdesc/${shot.file}`}
            alt={shot.alt}
            width={1440}
            height={900}
            decoding="async"
            className="animate-in-up relative z-10 w-full rounded-2xl border border-border shadow-2xl sm:rounded-3xl"
          />
        </div>
        <p className="mt-5 max-w-2xl text-[15px] text-muted-foreground">
          {shot.caption}
        </p>
      </Reveal>
    </Section>
  );
}
