import { ChevronRight, Code2, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section
      id="top"
      className="flex min-h-[100svh] flex-col justify-center pb-12 pt-28"
    >
      <div className="container">
        <p
          className="animate-in-up text-xl font-semibold tracking-tight text-primary sm:text-2xl"
          style={delay(0)}
        >
          {profile.name}
        </p>

        <h1
          className="animate-in-up mt-4 max-w-5xl text-[2.9rem] font-bold leading-[1.03] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]"
          style={delay(80)}
        >
          {profile.headline}
          <span className="text-muted-foreground"> {profile.headlineMuted}</span>
        </h1>

        <p
          className="animate-in-up mt-7 max-w-2xl text-xl leading-snug tracking-tight text-muted-foreground sm:text-2xl"
          style={delay(160)}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-in-up mt-9 flex flex-wrap items-center gap-x-6 gap-y-4"
          style={delay(240)}
        >
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-[17px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="group inline-flex items-center text-[17px] font-medium text-primary hover:underline"
          >
            Download CV
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>

          <div className="flex items-center gap-1">
            {[
              { href: profile.socials.github, label: "GitHub", Icon: Github },
              { href: profile.socials.linkedin, label: "LinkedIn", Icon: Linkedin },
              { href: profile.socials.leetcode, label: "LeetCode", Icon: Code2 },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {profile.available && (
          <p
            className="animate-in-up mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground"
            style={delay(300)}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </p>
        )}

        <dl
          className="animate-in-up mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-8 sm:mt-24 sm:grid-cols-4"
          style={delay(380)}
        >
          {profile.stats.map((s) => (
            <div key={s.label}>
              <dd className="text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
                {s.value}
              </dd>
              <dt className="mt-1 text-sm text-muted-foreground">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
