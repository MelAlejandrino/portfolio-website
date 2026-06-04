import type { Experience } from "../portfolio.types";

interface ExperienceListProps {
  experiences: Experience[];
}

export function ExperienceList({ experiences }: ExperienceListProps) {
  return (
    <div className="flex flex-col gap-7">
      {experiences.map((exp) => (
        <div
          key={exp.role + exp.company}
          className="flex flex-col gap-1 group cursor-default"
        >
          <h3 className="font-display text-lg font-bold text-foreground sm:text-xl group-hover:text-primary transition-colors duration-200 ease-out">
            {exp.role}
          </h3>
          <p className="text-sm text-muted">
            {exp.companyUrl ? (
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-base font-semibold text-foreground hover:text-primary transition-colors duration-150 ease-out"
              >
                {exp.company}
              </a>
            ) : (
              <span className="font-display text-base font-semibold text-foreground">
                {exp.company}
              </span>
            )}
            <span className="ml-1">· {exp.period}</span>
          </p>
          <ul className="mt-2 flex flex-col gap-2 max-w-[65ch]">
            {exp.highlights.map((item, i) => (
              <li
                key={i}
                className="text-foreground leading-relaxed text-pretty pl-4 relative before:absolute before:left-0 before:top-[0.6em] before:w-1 before:h-1 before:rounded-full before:bg-primary/40"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
