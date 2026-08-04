import { ArrowUpRight, Folder, Github } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  return (
    <section id="projects" className="container scroll-mt-20 py-24">
      <SectionHeading index="03" title="Things I've built" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal
            as="article"
            key={project.title}
            delay={(i % 3) * 80}
            className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.35)]"
          >
            <div className="mb-4 flex items-center justify-between">
              <Folder className="h-8 w-8 text-primary" />
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                  {project.tag}
                </span>
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

            <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.blurb}
            </p>

            <div className="mt-5 flex flex-wrap gap-x-3 gap-y-1">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-xs text-muted-foreground"
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
