import { experience } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section id="experience" className="container scroll-mt-20 py-24">
      <SectionHeading index="02" title="Where I've worked" />

      <div className="relative space-y-12">
        {/* vertical line */}
        <span
          aria-hidden
          className="absolute left-2 top-2 hidden h-full w-px bg-border sm:block"
        />

        {experience.map((job, i) => (
          <Reveal
            as="article"
            key={job.company}
            delay={i * 100}
            className="relative sm:pl-12"
          >
            {/* node */}
            <span
              aria-hidden
              className="absolute left-0 top-1.5 hidden h-4 w-4 items-center justify-center rounded-full border-2 border-primary bg-background sm:flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            </span>

            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-semibold">
                {job.role}{" "}
                <span className="text-primary">@ {job.company}</span>
              </h3>
              <span className="flex items-center gap-2 font-mono text-sm text-muted-foreground">
                {job.current && (
                  <span className="inline-block h-2 w-2 rounded-full bg-primary" />
                )}
                {job.period}
              </span>
            </div>

            <ul className="mt-4 space-y-2.5">
              {job.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-3 leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
