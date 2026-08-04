import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <p className="font-mono text-primary">404</p>
        <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Page not found</h1>
        <p className="mt-4 font-mono text-muted-foreground">
          <span className="text-primary">$</span> cd {location.pathname}{" "}
          <span className="text-destructive">— no such file or directory</span>
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-primary/40 px-6 py-3 font-mono text-primary transition-colors hover:bg-primary/10"
        >
          cd ~/home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
