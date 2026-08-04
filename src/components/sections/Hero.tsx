import { ArrowDown, Code2, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* accent glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="container">
        <div className="max-w-3xl">
          {profile.available && (
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs text-primary animate-in-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Available for opportunities
            </div>
          )}

          <p
            className="mb-3 font-mono text-primary animate-in-up"
            style={{ animationDelay: "60ms" }}
          >
            Hi, my name is
          </p>

          <h1
            className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl animate-in-up"
            style={{ animationDelay: "120ms" }}
          >
            {profile.name}.
          </h1>

          <h2
            className="mt-3 text-3xl font-bold tracking-tight text-muted-foreground sm:text-5xl lg:text-6xl animate-in-up"
            style={{ animationDelay: "180ms" }}
          >
            {profile.role}.
          </h2>

          <p
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground animate-in-up"
            style={{ animationDelay: "240ms" }}
          >
            {profile.tagline}
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 animate-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>

            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.leetcode}
                target="_blank"
                rel="noreferrer"
                aria-label="LeetCode"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-primary"
              >
                <Code2 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
