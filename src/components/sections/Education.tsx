import { GraduationCap } from "lucide-react";
import { education } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Education() {
  return (
    <section id="education" className="container scroll-mt-20 py-24">
      <SectionHeading index="04" title="Education" />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal
            as="article"
            key={item.institution}
            delay={i * 100}
            className="rounded-xl border border-border bg-card p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold leading-tight">
                    {item.institution}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </div>
              <span className="whitespace-nowrap font-mono text-sm text-muted-foreground">
                {item.period}
              </span>
            </div>

            <p className="font-medium text-primary">{item.program}</p>

            <ul className="mt-4 space-y-2">
              {item.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2.5 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/70" />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
