import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared look for every chip on the site, so they all feel the same. */
export const chipBase =
  "rounded-full px-3.5 py-1.5 text-sm font-medium transition-[color,background-color,transform] duration-100 ease-out";

/**
 * A read-only chip (a list item) with the same hover as the interactive tool
 * chips: it turns pink and grows a touch. Pass the resting background.
 */
export function Chip({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <li
      className={cn(
        chipBase,
        "hover:scale-105 hover:bg-primary hover:text-primary-foreground",
        className
      )}
    >
      {children}
    </li>
  );
}
