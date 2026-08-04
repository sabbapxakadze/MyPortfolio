import { about, skills } from "@/data/portfolio";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="container scroll-mt-20 py-24">
      <SectionHeading index="01" title="About me" />

      <div className="grid gap-12 lg:grid-cols-5">
        <Reveal className="space-y-4 lg:col-span-3">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}

          <p className="pt-2 text-lg leading-relaxed text-muted-foreground">
            A few technologies I work with:
          </p>

          <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2">
            {skills[0].items.slice(0, 8).map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 py-1 font-mono text-sm text-muted-foreground"
              >
                <span className="text-primary">▹</span>
                {item}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Terminal card */}
        <Reveal delay={120} className="lg:col-span-2">
          <div className="surface overflow-hidden shadow-lg">
            <div className="flex items-center gap-2 border-b border-border bg-muted/40 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
              <span className="ml-2 font-mono text-xs text-muted-foreground">
                saba@dev: ~/skills
              </span>
            </div>
            <div className="space-y-4 p-5 font-mono text-sm">
              {skills.map((group) => (
                <div key={group.group}>
                  <p className="text-muted-foreground">
                    <span className="text-primary">$</span> ls {""}
                    {group.group.toLowerCase().replace(/[\s&/]+/g, "-")}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 pl-4 text-foreground/90">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> <span className="caret" />
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
