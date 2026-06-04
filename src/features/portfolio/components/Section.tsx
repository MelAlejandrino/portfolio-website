type SectionSize = "hero" | "lg" | "md" | "sm";

interface SectionProps {
  id: string;
  label: string;
  size?: SectionSize;
  centered?: boolean;
  children: React.ReactNode;
}

const headingSize: Record<SectionSize, string> = {
  hero: "font-display text-6xl font-extrabold tracking-[-0.04em] text-primary leading-[0.92] mb-6 text-balance sm:text-8xl",
  lg:   "font-display text-5xl font-bold      tracking-[-0.03em] text-foreground leading-[0.95] mb-6 text-balance sm:text-7xl",
  md:   "font-display text-4xl font-bold      tracking-[-0.02em] text-foreground leading-[1.00] mb-6 text-balance sm:text-6xl",
  sm:   "font-display text-2xl font-semibold  tracking-normal      text-muted      leading-[1.10] mb-5 text-balance sm:text-5xl",
};

export function Section({ id, label, size = "md", centered = false, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="pb-14 sm:pb-20">
      <h2
        id={`${id}-heading`}
        className={`${headingSize[size]} ${centered ? "text-center" : ""}`}
      >
        {label}
      </h2>
      {children}
    </section>
  );
}
