import { clientProjects, experiences, personalProjects, skillGroups } from "./portfolio.data";
import { Hero } from "./components/Hero";

export const PortfolioView = () => {
  return (
    <main id="content">
      
      {/* ══════════ HERO ══════════ */}
      <Hero>
        <p className="font-display text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-[1.15] tracking-[-0.02em] text-foreground text-pretty max-w-[85%]">
          Frontend developer specializing in ReactJS and NextJS.
        </p>
        <p className="mt-6 text-[clamp(0.875rem,1.5vw,1.125rem)] font-light leading-relaxed text-muted text-pretty max-w-[55ch]">
          I build clean, responsive interfaces for real business problems, with backend knowledge
          in Laravel and Node.js that keeps full-stack collaboration seamless. Experienced
          working in agile teams to deliver client-specific web applications.
        </p>
      </Hero>

      {/* ══════════ EXPERIENCE ══════════ */}
      <section
        aria-label="Work experience"
        className="px-5 sm:px-8 section-entrance"
        style={{ animationDelay: "350ms" }}
      >
        {experiences.map((exp) => (
          <div key={exp.role + exp.company} className="mb-28 sm:mb-40">
            <h2 className="font-display text-[clamp(2rem,6vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.03em] text-foreground text-balance max-w-[90%]">
              {exp.role}
            </h2>
            <p className="mt-4 text-sm font-light text-muted">
              at{" "}
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${exp.company} website`}
                  className="font-medium text-foreground hover:text-primary transition-colors duration-150 ease-out"
                >
                  {exp.company}
                </a>
              ) : (
                <span className="font-medium text-foreground">{exp.company}</span>
              )}
              {" "}· {exp.period}
            </p>
            <ul className="mt-8 flex flex-col gap-4 max-w-[55ch]" aria-label={`Responsibilities at ${exp.company}`}>
              {exp.highlights.map((item, i) => (
                <li
                  key={i}
                  className="text-[clamp(0.875rem,1.4vw,1rem)] font-light leading-relaxed text-muted text-pretty pl-5 relative before:absolute before:left-0 before:top-[0.55em] before:w-1 before:h-1 before:rounded-full before:bg-primary/50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <hr className="mt-28 sm:mt-40 border-0" role="presentation" />

      {/* ══════════ PROJECTS ══════════ */}
      <section
        aria-label="Projects"
        className="px-5 sm:px-8 section-entrance"
        style={{ animationDelay: "500ms" }}
      >
        {/* ── Client work accordion ── */}
        <details className="group">
          <summary className="list-none [&::-webkit-details-marker]:hidden marker:content-none w-full flex items-center justify-between gap-4 py-3 cursor-pointer">
            <span className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-[-0.01em] text-foreground group-hover:text-primary transition-colors duration-150 ease-out">
              Client work
              <span className="text-muted group-hover:text-primary transition-colors duration-150 ease-out ml-2 font-light text-[0.7em]">
                (3)
              </span>
            </span>
            <span
              aria-hidden="true"
              className="flex-shrink-0 font-body text-xl font-light text-muted group-hover:text-primary transition-colors duration-150 ease-out"
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <div className="flex flex-col gap-10 sm:gap-12 pt-2 pb-4">
            {clientProjects.map((project) => (
              <div key={project.name}>
                <h3 className="font-display text-[clamp(1.125rem,2vw,1.5rem)] font-bold tracking-[-0.01em] text-foreground text-balance">
                  {project.name}
                </h3>
                {project.company && (
                  <p className="mt-1 text-sm font-light text-muted">
                    {project.company}
                  </p>
                )}
                <p className="mt-2 text-[clamp(0.875rem,1.3vw,1rem)] font-light leading-relaxed text-muted text-pretty max-w-[55ch]">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </details>

        {/* ── Personal projects accordion ── */}
        <details className="group mt-6 sm:mt-8">
          <summary className="list-none [&::-webkit-details-marker]:hidden marker:content-none w-full flex items-center justify-between gap-4 py-3 cursor-pointer">
            <span className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-[-0.01em] text-foreground group-hover:text-primary transition-colors duration-150 ease-out">
              Personal projects
              <span className="text-muted group-hover:text-primary transition-colors duration-150 ease-out ml-2 font-light text-[0.7em]">
                (2)
              </span>
            </span>
            <span
              aria-hidden="true"
              className="flex-shrink-0 font-body text-xl font-light text-muted group-hover:text-primary transition-colors duration-150 ease-out"
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <div className="flex flex-col gap-10 sm:gap-12 pt-2 pb-4">
            {personalProjects.map((project) => (
              <div key={project.name}>
                <h3 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-[-0.02em] text-foreground text-balance">
                  {project.name}
                </h3>
                <p className="mt-2 text-[clamp(0.875rem,1.4vw,1.063rem)] font-light leading-relaxed text-muted text-pretty max-w-[55ch]">
                  {project.description}
                </p>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-light text-primary hover:underline transition-colors duration-150 ease-out"
                  >
                    Visit site <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </details>
      </section>

      <hr className="mt-28 sm:mt-40 border-0" role="presentation" />

      {/* ══════════ SKILLS ══════════ */}
      <section
        aria-label="Technical skills"
        className="mb-32 sm:mb-48 px-5 sm:px-8 section-entrance"
        style={{ animationDelay: "650ms" }}
      >
        <div className="flex flex-col gap-14 sm:gap-18">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h2 className="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold tracking-[-0.01em] text-foreground mb-3">
                {group.category}
              </h2>
              <p className="text-[clamp(0.875rem,1.3vw,1rem)] font-light leading-relaxed text-muted max-w-[65ch]">
                {group.skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
