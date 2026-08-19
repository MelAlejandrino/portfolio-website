"use client";

import { useEffect, useState } from "react";
import { navigation } from "../portfolio.data";

export function NavStrip() {
  const [active, setActive] = useState(navigation[0].id);

  useEffect(() => {
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    // ponytail: the topmost intersecting section wins — no scroll listener,
    // no thresholds table. Good enough for six sections.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="no-print sticky top-0 z-40 border-b border-ink bg-paper"
    >
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <ul className="flex items-stretch overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {navigation.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`meta flex items-baseline gap-1.5 border-r border-rule-soft px-3.5 py-3 whitespace-nowrap transition-colors duration-200 sm:px-5 ${
                    isActive
                      ? "font-bold text-ink"
                      : "text-ink-faint hover:text-ink"
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`meta-sm ${isActive ? "text-accent" : "text-rule"}`}
                  >
                    {item.folio}
                  </span>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
