import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { experience, type Experience as Job } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

/** Bullets shown before "Show more". */
const VISIBLE = 3;

function JobTile({ job, index }: { job: Job; index: number }) {
  const [expanded, setExpanded] = useState(false);
  const extra = job.highlights.length - VISIBLE;
  const shown = expanded ? job.highlights : job.highlights.slice(0, VISIBLE);

  return (
    <Reveal
      as="article"
      delay={index * 100}
      className="rounded-tile bg-secondary p-7 sm:p-10"
    >
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            {job.company}
          </h3>
          <p className="mt-1 text-lg text-muted-foreground">{job.role}</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {job.current && (
            <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
              Current
            </span>
          )}
          <span className="rounded-full bg-background px-3 py-1">
            {job.period}
          </span>
        </div>
      </div>

      <ul className="mt-7 space-y-3.5">
        {shown.map((h, i) => (
          <li
            key={h}
            className={cn(
              "flex gap-3.5 text-[17px] leading-relaxed text-muted-foreground",
              i >= VISIBLE && "animate-in-up"
            )}
          >
            <span className="mt-[0.7em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground/30" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      {extra > 0 && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 inline-flex items-center gap-1 text-[17px] font-medium text-primary hover:underline"
        >
          {expanded ? "Show less" : `Show ${extra} more`}
          <ChevronDown
            className={cn(
              "h-5 w-5 transition-transform",
              expanded && "rotate-180"
            )}
          />
        </button>
      )}

      <ul className="mt-8 flex flex-wrap gap-2">
        {job.stack.map((t) => (
          <li
            key={t}
            className="rounded-full bg-background px-3.5 py-1.5 text-sm font-medium"
          >
            {t}
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading title="Where I've worked." />

      <div className="grid gap-6">
        {experience.map((job, i) => (
          <JobTile key={job.company} job={job} index={i} />
        ))}
      </div>
    </Section>
  );
}
