"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  /** Stagger, in milliseconds. */
  delay?: number;
  className?: string;
}

/**
 * A gentle ink-rise as the element scrolls in.
 *
 * ponytail: the element is never hidden up front — the animation class is only
 * added once it is observed. If the observer never fires (JS off, a throttled
 * background tab), the content is simply there, which is what paper does.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShown(true);
        observer.disconnect();
      },
      // Fires just before the element reaches the viewport, so the rise is
      // already underway by the time it can be read.
      { rootMargin: "0px 0px 8% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={
        shown
          ? {
              animation: `ink-rise 640ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms both`,
            }
          : undefined
      }
    >
      {children}
    </div>
  );
}
