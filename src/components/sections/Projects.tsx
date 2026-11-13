import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { useTabKeys } from "@/hooks/useTabKeys";
import { cn } from "@/lib/utils";

export function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];
  const onTabKeys = useTabKeys(projects.length, active, setActive);

  return (
    <Section id="projects" tone="soft">
      <SectionHeading title="Things I've built." />

      <Reveal>
        <div
          role="tablist"
          aria-label="Projects"
          onKeyDown={onTabKeys}
          className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 sm:inline-flex sm:max-w-full sm:rounded-full sm:bg-background sm:p-1"
        >
          {projects.map((p, i) => (
            <button
              key={p.title}
              type="button"
              role="tab"
              id={`project-tab-${i}`}
              aria-selected={i === active}
              tabIndex={i === active ? 0 : -1}
              aria-controls="project-panel"
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors",
                i === active
                  ? "bg-foreground text-background"
                  : "text-muted-foreground hover:text-foreground max-sm:bg-background"
              )}
            >
              {p.title}
            </button>
          ))}
        </div>

        <article
          key={project.title}
          role="tabpanel"
          id="project-panel"
          aria-labelledby={`project-tab-${active}`}
          className="animate-in-up mt-6 rounded-tile bg-card p-7 sm:p-10"
        >
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
            <div className="min-w-0">
              <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group/title inline-flex items-center gap-2 hover:underline"
                  >
                    {project.title}
                    <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-transform group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5" />
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-3 max-w-2xl text-lg leading-snug text-muted-foreground sm:text-xl">
                {project.summary}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm">
              {project.live && (
                <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                  Live
                </span>
              )}
              <span className="rounded-full bg-secondary px-3 py-1 text-muted-foreground">
                {project.tag}
              </span>
              {project.links?.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label.toLowerCase().includes("code") ? (
                    <Github className="h-5 w-5" />
                  ) : (
                    <ArrowUpRight className="h-5 w-5" />
                  )}
                </a>
              ))}
            </div>
          </div>

          {project.stats && (
            <dl className="mt-9 grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 lg:grid-cols-4">
              {project.stats.map((s) => (
                <div key={s.label} className="rounded-2xl bg-secondary p-5">
                  <dd className="whitespace-nowrap text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                    {s.value}
                  </dd>
                  <dt className="mt-1.5 text-sm leading-snug text-muted-foreground">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          )}

          <ul className="mt-9 grid gap-x-10 gap-y-4 sm:grid-cols-2">
            {project.points.map((pt) => (
              <li
                key={pt.lead}
                className="relative pl-5 text-[17px] leading-relaxed text-muted-foreground"
              >
                <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-foreground/30" />
                <b className="font-semibold text-foreground">{pt.lead}</b>{" "}
                {pt.text}
              </li>
            ))}
          </ul>

          <ul className="mt-9 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <li
                key={t}
                className="rounded-full bg-secondary px-3.5 py-1.5 text-sm font-medium"
              >
                {t}
              </li>
            ))}
          </ul>
        </article>
      </Reveal>
    </Section>
  );
}
