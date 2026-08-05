"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [phase, setPhase] = useState<"enter" | "hold" | "exit" | "done">(
    "enter",
  );

  useEffect(() => {
    if (sessionStorage.getItem("v")) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPhase("done");
      return;
    }

    sessionStorage.setItem("v", "1");

    const enterTimer = setTimeout(() => setPhase("hold"), 400);
    const exitTimer = setTimeout(() => setPhase("exit"), 1800);
    const doneTimer = setTimeout(() => setPhase("done"), 2300);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-out ${
        phase === "exit" ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={phase === "exit"}
      role="presentation"
    >
      <p
        className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-primary"
        style={{
          animation:
            phase === "enter"
              ? "loader-fade-in 400ms var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) both"
              : "none",
        }}
      >
        Made by Mel
      </p>
      <div className="mt-4 h-px w-14 bg-outline-variant origin-center overflow-hidden">
        <div
          className="h-full w-full bg-primary origin-left"
          style={{
            animation:
              phase === "enter" || phase === "hold"
                ? "loader-line-draw 600ms var(--ease-out-expo, cubic-bezier(0.16, 1, 0.3, 1)) both"
                : "none",
          }}
        />
      </div>
    </div>
  );
}
