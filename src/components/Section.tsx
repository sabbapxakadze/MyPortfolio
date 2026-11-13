import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  /** "soft" is a grey band, "dark" always uses the dark palette (even in light mode). */
  tone?: "base" | "soft" | "dark";
  children: ReactNode;
};

export function Section({ id, tone = "base", children }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-12 py-20 sm:py-28",
        tone === "soft" && "bg-secondary",
        tone === "dark" && "dark bg-background text-foreground"
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}
