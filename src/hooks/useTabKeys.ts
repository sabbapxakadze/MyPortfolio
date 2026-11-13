import type { KeyboardEvent } from "react";

/**
 * Arrow-key / Home / End navigation for a `role="tablist"`, following the
 * WAI-ARIA tabs pattern. Pair it with `tabIndex={i === active ? 0 : -1}` on
 * each tab so only the active tab is in the page's tab order.
 */
export function useTabKeys(
  count: number,
  active: number,
  setActive: (index: number) => void
) {
  return (e: KeyboardEvent<HTMLElement>) => {
    let next = active;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      next = (active + 1) % count;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      next = (active - 1 + count) % count;
    } else if (e.key === "Home") {
      next = 0;
    } else if (e.key === "End") {
      next = count - 1;
    } else {
      return;
    }
    e.preventDefault();
    setActive(next);
    const tabs = e.currentTarget.querySelectorAll<HTMLElement>('[role="tab"]');
    tabs[next]?.focus();
  };
}
