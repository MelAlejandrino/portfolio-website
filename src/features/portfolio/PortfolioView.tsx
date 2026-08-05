"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { projects, currently, stack } from "./portfolio.data";
import type { Project } from "./portfolio.types";
import type { StackGroup } from "./portfolio.data";
import { Hero } from "./components/Hero";
import { SectionReveal } from "./components/SectionReveal";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      className="group py-8 border-b border-outline-variant last:border-b-0 cursor-default"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ delay: index * 0.1, duration: 0.5, ease }}
    >
      <motion.div
        className="flex items-baseline gap-4 mb-3"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2, ease }}
      >
        <span className="font-mono text-[11px] tracking-[0.06em] text-outline">
          {String(index + 1).padStart(3, "0")}
        </span>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-on-surface hover:text-primary transition-colors duration-200"
          >
            {project.name}
          </a>
        ) : (
          <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-on-surface">
            {project.name}
          </h3>
        )}
      </motion.div>

      <p className="text-on-surface-variant leading-relaxed max-w-2xl mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-3">
        {project.company && (
          <span className="font-mono text-[11px] tracking-[0.02em] text-on-surface-variant">
            {project.company}
          </span>
        )}
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto font-mono text-xs text-primary hover:underline"
          >
            View project <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
    </motion.article>
  );
}

function ProjectsSection() {
  const builtProjects = projects.filter((p) => p.tier === "built");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      aria-label="Projects"
      className="py-24 px-6 border-t border-outline-variant"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease }}
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-on-surface-variant mb-3">
            Selected work
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-on-surface">
            Things I&apos;ve made
          </h2>
        </motion.div>

        <div>
          {builtProjects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CurrentlySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      aria-label="Currently"
      className="py-24 px-6 border-t border-outline-variant"
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-on-surface-variant mb-3"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease }}
        >
          Currently
        </motion.p>

        <dl className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {currently.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5, ease }}
            >
              <dt className="font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-outline mb-2">
                {item.label}
              </dt>
              <dd className="text-on-surface">{item.value}</dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function PortfolioView() {
  return (
    <main id="content">
      {/* ══════════ HERO ══════════ */}
      <Hero />

      {/* ══════════ PROJECTS ══════════ */}
      <SectionReveal>
        <ProjectsSection />
      </SectionReveal>

      {/* ══════════ ABOUT ══════════ */}
      <SectionReveal>
        <section
          aria-label="About"
          className="py-24 px-6 border-t border-outline-variant bg-surface-container-low"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-on-surface-variant mb-3">
                  About
                </p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-on-surface">
                  I&apos;m Mel.
                </h2>
              </div>

              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  I&apos;m a developer who likes making things. Mostly websites.
                  Sometimes software. Occasionally something completely different.
                </p>
                <p>
                  I work at{" "}
                  <a
                    href="https://www.syntacticsinc.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 decoration-outline-variant hover:decoration-primary transition-colors duration-200"
                  >
                    Syntactics Inc.
                  </a>{" "}
                  where I build business systems — the kind of software that
                  replaces spreadsheets and paper logs with something organized.
                  Inventory, operations, reporting. The unglamorous stuff that
                  actually needs to work.
                </p>
                <p>
                  Outside of work, I build things for myself — desktop apps,
                  small tools, anything that seems worth trying. If I have an
                  idea that seems useful, or just interesting, I usually want to
                  see if I can build it.
                </p>
                <p>
                  Cagayan de Oro, Philippines.
                </p>
              </div>
            </div>
          </div>
        </section>
      </SectionReveal>

      {/* ══════════ CURRENTLY ══════════ */}
      <SectionReveal>
        <CurrentlySection />
      </SectionReveal>

      {/* ══════════ STACK ══════════ */}
      <SectionReveal>
        <section
          aria-label="Tech stack"
          className="py-24 px-6 border-t border-outline-variant bg-surface-container-low"
        >
          <div className="max-w-5xl mx-auto">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-on-surface-variant mb-3">
              Stack
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-[-0.02em] text-on-surface mb-12">
              What I work with
            </h2>

            <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stack.map((group: StackGroup) => (
                <div key={group.category}>
                  <dt className="font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-outline mb-3">
                    {group.category}
                  </dt>
                  <dd className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-sm text-on-surface-variant"
                      >
                        {item}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </SectionReveal>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="py-12 px-6 border-t border-outline-variant">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[11px] tracking-[0.06em] text-on-surface-variant">
            Made by Mel
          </p>
          <a
            href="mailto:alejandrino.mel002@gmail.com"
            className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors duration-200"
          >
            alejandrino.mel002@gmail.com
          </a>
        </div>
      </footer>
    </main>
  );
}
