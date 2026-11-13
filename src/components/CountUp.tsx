import { useEffect, useRef, useState } from "react";

type Props = {
  from: number;
  to: number;
  suffix?: string;
  /** Animation length in ms. */
  duration?: number;
};

/**
 * Counts from `from` to `to` the first time it scrolls into view.
 * With reduced motion it shows the final value straight away.
 */
export function CountUp({ from, to, suffix = "", duration = 1600 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(from);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(from + (to - from) * eased);
          if (p < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [from, to, duration]);

  return (
    <span ref={ref} aria-label={`${to.toLocaleString("en-US")}${suffix}`}>
      <span aria-hidden="true">
        {Math.round(value).toLocaleString("en-US")}
        {suffix}
      </span>
    </span>
  );
}
