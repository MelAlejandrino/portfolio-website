import { clientProjects, experiences, personalProjects, skillGroups } from "./portfolio.data";
import type { Project } from "./portfolio.types";
import { Hero } from "./components/Hero";

// ponytail: cards are identical for client + personal work, so one local component
// instead of two blocks of repeated markup. Stays in this file — nothing else uses it.
function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-3 p-6 bg-surface-container-low border border-outline-variant rounded-sm transition-colors hover:border-outline">
      <span className="font-mono text-xs tracking-[0.02em] text-on-surface-variant">
        {project.company ?? "Personal project"}
      </span>
      <h3 className="text-base font-semibold text-on-surface">{project.name}</h3>
      <p className="text-sm text-on-surface-variant leading-relaxed">{project.description}</p>
      {project.url && (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto pt-1 font-mono text-xs text-primary hover:underline"
        >
          Visit site <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

export const PortfolioView = () => {
  return (
    <main id="content">
      {/* ══════════ HERO ══════════ */}
      <Hero />

      {/* ══════════ EXPERIENCE ══════════ */}
      <section
        aria-label="Work experience"
        className="py-24 px-6 border-t border-outline-variant section-entrance"
        style={{ animationDelay: "350ms" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.01em] text-primary mb-3">
              Experience
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Client-facing web and business systems, delivered in agile teams.
            </p>
          </div>

          <div className="max-w-3xl">
            {experiences.map((exp) => (
              <article
                key={exp.role + exp.company}
                className="py-5 border-b border-outline-variant last:border-b-0"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-on-surface">
                    {exp.role}
                    <span className="text-on-surface-variant font-normal"> · </span>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${exp.company} website`}
                        className="text-primary hover:underline"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      exp.company
                    )}
                  </h3>
                  <span className="font-mono text-xs tracking-[0.02em] text-on-surface-variant">
                    {exp.period}
                  </span>
                </div>

                <ul
                  className="mt-4 flex flex-col gap-2"
                  aria-label={`Responsibilities at ${exp.company}`}
                >
                  {exp.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-on-surface-variant leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[0.55em] before:w-1.5 before:h-px before:bg-outline"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ PROJECTS ══════════ */}
      <section
        aria-label="Projects"
        className="py-24 px-6 border-t border-outline-variant bg-surface-container-low section-entrance"
        style={{ animationDelay: "500ms" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.01em] text-primary mb-3">
              Projects
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Business systems built for clients, and libraries and sites built for myself.
            </p>
          </div>

          <h3 className="text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant mb-4">
            Client work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clientProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <h3 className="text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant mt-12 mb-4">
            Personal projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {personalProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════ SKILLS ══════════ */}
      <section
        aria-label="Technical skills"
        className="py-24 px-6 border-t border-outline-variant section-entrance"
        style={{ animationDelay: "650ms" }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.01em] text-primary mb-3">
              Stack
            </h2>
            <p className="text-on-surface-variant max-w-xl">
              Tools and practices I work with day to day.
            </p>
          </div>

          <dl className="max-w-3xl">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 py-5 border-b border-outline-variant last:border-b-0"
              >
                <dt className="md:w-48 flex-shrink-0 text-[11px] font-bold uppercase tracking-[0.05em] text-on-surface-variant">
                  {group.category}
                </dt>
                <dd className="font-mono text-sm leading-relaxed text-on-surface">
                  {group.skills.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="py-12 px-6 border-t border-outline-variant">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs text-on-surface-variant">
          <span>Mel Alejandrino — Frontend Developer</span>
          <a
            href="mailto:alejandrino.mel002@gmail.com"
            className="text-on-surface hover:text-primary transition-colors"
          >
            alejandrino.mel002@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
};
