import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { ThemeToggle } from "@/components/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const active = useScrollSpy(navLinks.map((l) => l.id));
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 bg-background/80 backdrop-blur-xl backdrop-saturate-150 transition-[border-color] duration-300",
        scrolled || open
          ? "border-b border-border"
          : "border-b border-transparent"
      )}
    >
      <nav className="container flex h-12 items-center justify-between">
        <a
          href="#top"
          aria-label="Home"
          className="text-[15px] font-semibold tracking-tight transition-opacity hover:opacity-70"
        >
          {profile.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={cn(
                  "text-xs transition-colors",
                  active === link.id
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-1">
          <a
            href={profile.resumeUrl}
            download
            className="hidden rounded-full border border-border px-3.5 py-1 text-xs font-medium transition-colors hover:bg-secondary sm:inline-block"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden">
          <ul className="container flex flex-col pb-4 pt-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block border-b border-border/60 py-3 text-2xl font-semibold tracking-tight transition-colors",
                    active === link.id
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                download
                className="block py-3 text-2xl font-semibold tracking-tight text-primary"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
