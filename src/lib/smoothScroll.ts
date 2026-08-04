import type Lenis from "lenis";

/** Shared reference to the active Lenis instance (if any). */
let instance: Lenis | null = null;

export function setLenis(l: Lenis | null) {
  instance = l;
}

/** Smoothly scroll to the top, using Lenis when active, else native. */
export function scrollToTop() {
  if (instance) {
    instance.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}
