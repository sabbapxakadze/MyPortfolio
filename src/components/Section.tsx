import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id: string;
  /** "soft" renders a full-width grey band; sections alternate for rhythm. */
  tone?: "base" | "soft";
  /** Extra classes, e.g. to tighten the padding of one section. */
  className?: string;
  children: ReactNode;
};

export function Section({ id, tone = "base", className, children }: Props) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-12 py-20 sm:py-28",
        tone === "soft" && "bg-secondary",
        className
      )}
    >
      <div className="container">{children}</div>
    </section>
  );
}
