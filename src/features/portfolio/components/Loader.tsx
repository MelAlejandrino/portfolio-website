"use client";

import { useEffect, useState } from "react";
import { publication } from "../portfolio.data";

export function Loader() {
  const [phase, setPhase] = useState<"enter" | "exit" | "done">("enter");

  useEffect(() => {
    if (sessionStorage.getItem("v")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase("done");
      return;
    }

    sessionStorage.setItem("v", "1");

    // Short enough to read the masthead, not long enough to be a gate.
    const exitTimer = setTimeout(() => setPhase("exit"), 900);
    const doneTimer = setTimeout(() => setPhase("done"), 1400);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`no-print fixed inset-0 z-50 flex flex-col items-center justify-center bg-paper px-6 transition-opacity duration-500 ease-out ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
      role="presentation"
    >
      <p
        className="font-headline text-center text-[clamp(1.1rem,4vw,1.9rem)] font-medium tracking-[0.06em] text-ink uppercase"
        style={{ animation: "ink-fade 500ms ease-out both" }}
      >
        {publication.name}
      </p>
      <div className="mt-4 h-px w-32 origin-left bg-ink" style={{ animation: "rule-draw 700ms cubic-bezier(0.16, 1, 0.3, 1) both" }} />
      <p
        className="meta-sm mt-4 text-ink-faint"
        style={{ animation: "ink-fade 500ms ease-out 250ms both" }}
      >
        {publication.volume} · {publication.issue} · {publication.established}
      </p>
    </div>
  );
}
