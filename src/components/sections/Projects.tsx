import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export function Projects() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="projects" className="container scroll-mt-20 py-24">
      <SectionHeading index="03" title="Things I've built" />

      <Reveal className="grid gap-6 lg:grid-cols-[17rem_1fr] lg:gap-9">
        {/* Project list: vertical on desktop, scrollable row on small screens */}
        <div
          role="tablist"
          aria-label="Projects"
          aria-orientation="vertical"
          className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-1 lg:mx-0 lg:grid lg:content-start lg:overflow-visible lg:px-0 lg:pb-0"
        >
          {projects.map((p, i) => (
            <button
              key={p.title}
              role="tab"
              id={`project-tab-${i}`}
              aria-selected={i === active}
              aria-controls="project-panel"
              onClick={() => setActive(i)}
              className={cn(
                "shrink-0 border-b-2 px-4 py-3 text-left transition-colors lg:border-b-0 lg:border-l-2 lg:py-4",
                i === active
                  ? "border-primary bg-gradient-to-r from-primary/10 to-transparent"
                  : "border-border hover:bg-secondary/50"
              )}
            >
              <span
                className={cn(
                  "block text-base font-semibold transition-colors",
                  i === active ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {p.title}
              </span>
              <span className="mt-1 block font-mono text-[11.5px] text-muted-foreground/70">
                {p.tag.toLowerCase()}
                {p.live ? " · live" : ""}
              </span>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <article
          key={project.title}
          role="tabpanel"
          id="project-panel"
          aria-labelledby={`project-tab-${active}`}
          className="animate-in-up overflow-hidden rounded-xl border border-border bg-card"
        >
          <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-border" />
            <span className="ml-2.5 font-mono text-xs text-muted-foreground">
              {project.path}
            </span>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-2xl font-bold tracking-tight sm:text-[28px]">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group/title inline-flex items-center gap-2 transition-colors hover:text-primary"
                    >
                      {project.title}
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover/title:-translate-y-0.5 group-hover/title:translate-x-0.5 group-hover/title:text-primary" />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                {project.live && (
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 font-mono text-[11px] text-primary">
                    ● Live
                  </span>
                )}
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="text-muted-foreground transition-colors hover:text-primary"
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
              <dl className="mt-7 grid grid-cols-2 overflow-hidden rounded-lg border border-border bg-background sm:grid-cols-4">
                {project.stats.map((s, i) => (
                  <div
                    key={s.label}
                    className={cn(
                      "px-4 py-4",
                      i % 2 === 1 && "border-l border-border",
                      i >= 2 && "border-t border-border sm:border-t-0",
                      i > 0 && "sm:border-l"
                    )}
                  >
                    <dd className="whitespace-nowrap font-mono text-lg font-bold tracking-tight text-primary">
                      {s.value}
                    </dd>
                    <dt className="mt-1 text-[12.5px] leading-snug text-muted-foreground">
                      {s.label}
                    </dt>
                  </div>
                ))}
              </dl>
            )}

            <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {project.points.map((pt) => (
                <li
                  key={pt.lead}
                  className="relative pl-5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="absolute left-0 top-[0.5em] h-2 w-2 rounded-[2px] bg-primary/85" />
                  <b className="font-semibold text-foreground">{pt.lead}</b>{" "}
                  {pt.text}
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </article>
      </Reveal>
    </section>
  );
}
