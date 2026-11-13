import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

const socials = [
  { label: "GitHub", href: profile.socials.github },
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "LeetCode", href: profile.socials.leetcode },
];

export function Contact() {
  const details = [
    {
      Icon: Mail,
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
    },
    {
      Icon: Phone,
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
    },
    { Icon: MapPin, label: "Location", value: profile.location },
  ];

  return (
    <Section id="contact" tone="soft">
      <Reveal className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="text-4xl font-bold tracking-[-0.035em] sm:text-5xl">
            Get in touch.
          </h2>
          <p className="mt-5 max-w-md text-xl leading-snug text-muted-foreground">
            I&apos;m open to new opportunities and collaborations. Whether you
            have a question or just want to say hi, my inbox is always open.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-[17px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Say hello
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="group inline-flex items-center text-[17px] font-medium text-primary hover:underline"
            >
              Download CV
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          <ul className="divide-y divide-border rounded-tile bg-card px-7 py-2 sm:px-9">
            {details.map(({ Icon, label, value, href }) => {
              const content = (
                <>
                  <Icon className="h-5 w-5 shrink-0 text-muted-foreground" />
                  <span className="min-w-0">
                    <span className="block text-sm text-muted-foreground">
                      {label}
                    </span>
                    <span className="block text-base font-medium [overflow-wrap:anywhere] sm:text-lg">
                      {value}
                    </span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 py-5 transition-opacity hover:opacity-70"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-5">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 px-2">
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center text-[17px] font-medium text-primary hover:underline"
                >
                  {label}
                  <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
