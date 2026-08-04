import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="container flex flex-col items-center justify-between gap-2 text-center font-mono text-xs text-muted-foreground sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p className="inline-flex items-center gap-1.5">
          Built with <span className="text-red-500">❤️</span> and React
        </p>
      </div>
    </footer>
  );
}
