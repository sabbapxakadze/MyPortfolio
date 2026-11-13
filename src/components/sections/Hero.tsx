import { ChevronRight, Code2, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/portfolio";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-28"
    >
      {/* Aurora: pink, violet and blue light drifting slowly behind and beside the text. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="animate-aurora-a absolute -right-[6%] top-[6%] h-[clamp(380px,48vw,740px)] w-[clamp(380px,48vw,740px)] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.75) 0%, hsl(var(--primary) / 0.35) 38%, transparent 70%)",
          }}
        />
        <div
          className="animate-aurora-b absolute right-[14%] top-[40%] h-[clamp(340px,42vw,660px)] w-[clamp(340px,42vw,660px)] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(255 100% 66% / 0.65) 0%, hsl(255 100% 66% / 0.3) 40%, transparent 70%)",
          }}
        />
        <div
          className="animate-aurora-a absolute -right-[12%] top-[50%] h-[clamp(320px,38vw,600px)] w-[clamp(320px,38vw,600px)] rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(209 100% 58% / 0.6) 0%, hsl(209 100% 58% / 0.28) 40%, transparent 70%)",
          }}
        />
        {/* keeps the text readable and blends the bottom edge into the page */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="container relative z-10">
        <p
          className="animate-in-up text-xl font-semibold tracking-tight text-muted-foreground sm:text-2xl"
          style={delay(0)}
        >
          Hello, I&apos;m {profile.name.split(" ")[0]}.
        </p>

        <h1
          className="animate-in-up mt-4 text-[2.9rem] font-bold leading-[1.02] tracking-[-0.05em] sm:text-7xl lg:text-[6.75rem] xl:text-[8rem]"
          style={delay(80)}
        >
          {profile.headline}
        </h1>

        <p
          className="animate-in-up mt-8 max-w-2xl text-xl leading-snug tracking-tight text-muted-foreground sm:text-[1.65rem]"
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
      </div>
    </section>
  );
}
