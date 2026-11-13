import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => unknown;
};

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration/SSR mismatch flicker; only render the icon after mount.
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    const root = document.documentElement;

    // Apply the class ourselves so the snapshot taken by the View Transition
    // sees the new theme; setTheme keeps next-themes state and storage in sync.
    const apply = () => {
      root.classList.toggle("dark", next === "dark");
      root.style.colorScheme = next;
      setTheme(next);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      apply();
      return;
    }

    const doc = document as ViewTransitionDocument;
    if (!doc.startViewTransition) {
      // Fallback: a short colour fade on everything.
      root.classList.add("theme-fade");
      apply();
      window.setTimeout(() => root.classList.remove("theme-fade"), 400);
      return;
    }

    // The page softly blurs and cross-fades into the new theme (see index.css).
    doc.startViewTransition(apply);
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
    >
      <span
        key={mounted && isDark ? "sun" : "moon"}
        className="animate-theme-icon inline-flex"
      >
        {mounted && isDark ? (
          <Sun className="h-[18px] w-[18px]" />
        ) : (
          <Moon className="h-[18px] w-[18px]" />
        )}
      </span>
    </button>
  );
}
