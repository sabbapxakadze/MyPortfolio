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
        <p className="text-xl font-semibold text-muted-foreground">404</p>
        <h1 className="mt-2 text-5xl font-bold tracking-[-0.04em] sm:text-7xl">
          Page not found.
        </h1>
        <p className="mt-5 text-xl text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a
          href={import.meta.env.BASE_URL}
          className="mt-9 inline-flex items-center rounded-full bg-primary px-6 py-3 text-[17px] font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Back to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
