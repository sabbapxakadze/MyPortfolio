import { education } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Chip } from "@/components/Chip";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading title="Education." />

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((item, i) => (
          <Reveal
            as="article"
            key={item.institution}
            delay={i * 100}
            className="flex flex-col rounded-tile bg-secondary p-7 sm:p-9"
          >
            <span className="self-start rounded-full bg-background px-3 py-1 text-sm text-muted-foreground">
              {item.period}
            </span>

            <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
              {item.institution}
            </h3>
            <p className="mt-1.5 text-lg text-muted-foreground">
              {item.program}
              <span className="text-muted-foreground/70"> · {item.detail}</span>
            </p>

            <ul className="mt-7 flex flex-wrap gap-2">
              {item.highlights.map((h) => (
                <Chip key={h} className="bg-background">{h}</Chip>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
