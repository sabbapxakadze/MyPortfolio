import { about, proof, skills } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";
import { cn } from "@/lib/utils";

const tools = skills.flatMap((g) => g.items);

export function About() {
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

      <Reveal delay={100} className="mt-16">
        <h3 className="mb-6 text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          How I build.
        </h3>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {proof.map((item) => (
            <li
              key={item.title}
              className="group flex flex-col rounded-tile bg-card p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <p className="text-lg font-semibold text-muted-foreground">
                {item.title}
              </p>
              <p className="mt-3 whitespace-nowrap text-5xl font-bold tracking-[-0.045em] sm:text-[3.2rem]">
                {item.count ? (
                  <CountUp
                    from={item.count.from}
                    to={item.count.to}
                    suffix={item.count.suffix}
                  />
                ) : (
                  item.text
                )}
              </p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <ul className="mt-6 flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* Slow scrolling strip of every tool from the CV. Decorative: the same
          information is in Experience and Projects. */}
      <div
        aria-hidden="true"
        className="marquee-mask mt-14 overflow-hidden"
      >
        <div className="marquee-track flex w-max gap-3 py-1">
          {[...tools, ...tools].map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="whitespace-nowrap rounded-full bg-card px-4 py-2 text-sm font-medium text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
