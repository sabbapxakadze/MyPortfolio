import { Code2, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Contact() {
  return (
    <section id="contact" className="container scroll-mt-20 py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mono-label mb-4">05. What&apos;s next?</p>
        <h2 className="text-3xl font-bold sm:text-4xl">Get in touch</h2>
        <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-muted-foreground">
          I&apos;m open to new opportunities and collaborations. Whether you have
          a question or just want to say hi, my inbox is always open — I&apos;ll
          get back to you.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary/40 px-8 py-4 font-mono text-primary transition-colors hover:bg-primary/10"
        >
          <Mail className="h-4 w-4" />
          Say hello
        </a>

        <div className="mt-12 flex flex-col items-center gap-4 font-mono text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </span>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={profile.socials.leetcode}
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Code2 className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
