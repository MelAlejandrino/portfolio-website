import {
  contact,
  deskNote,
  facts,
  indexNote,
  leadStory,
  ledgerSection,
  navigation,
  notes,
  positions,
  profileBody,
  projects,
  publication,
  statistics,
  technicalIndex,
  workSection,
} from "./portfolio.data";
import type { Note, Position, Project } from "./portfolio.types";
import { Figure } from "./components/Figure";
import { Masthead } from "./components/Masthead";
import { NavStrip } from "./components/NavStrip";
import { Reveal } from "./components/Reveal";

const container = "mx-auto w-full max-w-[1240px] px-5 sm:px-8";

const headline =
  "font-headline font-medium uppercase leading-[0.95] tracking-[0.005em] text-ink";

function SectionHead({
  folio,
  kicker,
  title,
  note,
}: {
  folio: string;
  kicker: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="rule-thick pt-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
        <p className="meta text-accent">
          {folio} — {kicker}
        </p>
        {note && <p className="meta-sm text-ink-faint">{note}</p>}
      </div>
      <h2
        className={`${headline} mt-3 text-[clamp(1.9rem,5vw,3.5rem)] text-balance`}
      >
        {title}
      </h2>
    </div>
  );
}

function StoryMeta({ project }: { project: Project }) {
  const rows = [
    { label: "Year", value: project.year },
    { label: "Role", value: project.role },
    { label: "Stack", value: project.stack.join(", ") },
    ...(project.client ? [{ label: "Client", value: project.client }] : []),
  ];

  return (
    <dl className="mt-5 border-t border-rule">
      {rows.map((row) => (
        <div
          key={row.label}
          className="flex items-baseline gap-4 border-b border-rule-soft py-1.5"
        >
          <dt className="meta-sm w-16 shrink-0 text-ink-faint">{row.label}</dt>
          <dd className="meta-sm text-ink">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function StoryLink({ project }: { project: Project }) {
  if (!project.url) {
    return (
      <p className="meta-sm mt-5 text-rule">
        Client engagement — not publicly available
      </p>
    );
  }

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-read mt-5 inline-block text-ink"
    >
      Read case study <span className="arrow">→</span>
    </a>
  );
}

function StoryHeading({
  project,
  size,
}: {
  project: Project;
  size: "lead" | "small";
}) {
  return (
    <>
      <p className="meta text-ink-faint">
        {project.category} · {project.stack.join(" · ")}
      </p>
      <h3
        className={`${headline} mt-3 ${
          size === "lead"
            ? "text-[clamp(1.9rem,4.4vw,3.25rem)]"
            : "text-[clamp(1.4rem,2.6vw,2rem)]"
        } text-balance`}
      >
        {project.title}
      </h3>
      <p
        className={`mt-3 font-headline italic ${
          size === "lead" ? "text-xl sm:text-2xl" : "text-lg"
        } leading-snug text-ink-soft text-pretty`}
      >
        {project.dek}
      </p>
    </>
  );
}

function StoryBody({ project }: { project: Project }) {
  return (
    <div className="prose-editorial mt-4 text-ink-soft">
      {project.body.map((paragraph) => (
        <p key={paragraph.slice(0, 24)}>{paragraph}</p>
      ))}
    </div>
  );
}

function BriefStory({ project }: { project: Project }) {
  return (
    <article className="grid gap-x-10 gap-y-3 border-t border-rule py-6 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <h3 className={`${headline} text-[clamp(1.25rem,2vw,1.6rem)]`}>
          {project.title}
        </h3>
        <p className="meta-sm mt-2 text-ink-faint">
          {project.category} · {project.year} · {project.stack.join(", ")}
        </p>
      </div>
      <div className="lg:col-span-8">
        <p className="font-headline text-lg leading-snug text-ink italic">
          {project.dek}
        </p>
        <p className="mt-2 text-sm text-ink-soft">{project.body[0]}</p>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-read mt-4 inline-block text-ink"
          >
            Visit site <span className="arrow">→</span>
          </a>
        )}
      </div>
    </article>
  );
}

function LedgerEntry({ position }: { position: Position }) {
  return (
    <article className="grid gap-x-10 gap-y-5 border-t-2 border-ink py-9 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <p className="meta text-accent">{position.period}</p>
        <p className="meta-sm mt-2 text-ink-faint">{position.discipline}</p>
      </div>

      <div className="lg:col-span-4">
        <h3 className={`${headline} text-[clamp(1.6rem,3vw,2.4rem)]`}>
          {position.role}
        </h3>
        <p className="font-headline mt-2 text-xl text-ink italic">
          {position.org}
        </p>
        <p className="meta-sm mt-2 text-ink-faint">{position.place}</p>
      </div>

      <div className="lg:col-span-5">
        <p className="text-ink-soft">{position.note}</p>
        <ul className="mt-5 border-t border-rule">
          {position.highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex gap-3 border-b border-rule-soft py-2 text-sm text-ink-soft"
            >
              <span aria-hidden="true" className="text-rule">
                —
              </span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function NoteEntry({ note, featured }: { note: Note; featured?: boolean }) {
  return (
    <article className={featured ? "" : "flex h-full flex-col"}>
      <p className="meta-sm text-ink-faint">{note.date}</p>
      <h3
        className={`${headline} mt-2 ${
          featured
            ? "text-[clamp(1.7rem,3.6vw,2.75rem)]"
            : "text-[clamp(1.2rem,2vw,1.5rem)]"
        } text-balance`}
      >
        {note.title}
      </h3>
      <p className="meta-sm mt-2 text-accent">{note.category}</p>
      <p
        className={`mt-3 text-ink-soft text-pretty ${featured ? "text-lg" : ""}`}
      >
        {note.excerpt}
      </p>
      <p className="meta-sm mt-4 text-rule">Unpublished — column in progress</p>
    </article>
  );
}

export const PortfolioView = () => {
  const lead = projects.find((project) => project.weight === "lead");
  const halves = projects.filter((project) => project.weight === "half");
  const briefs = projects.filter((project) => project.weight === "brief");
  const [featuredNote, ...shortNotes] = notes;

  return (
    <>
      <Masthead />
      <NavStrip />

      <main id="content">
        {/* ══════════ FRONT PAGE ══════════ */}
        <section
          id="front"
          aria-label="Front page"
          className="border-b border-ink"
        >
          <div className={`${container} py-10 sm:py-14`}>
            <div className="grid gap-x-10 gap-y-12 lg:grid-cols-12">
              <div className="lg:col-span-8 lg:border-r lg:border-rule lg:pr-10">
                <p className="meta text-accent">{leadStory.kicker}</p>

                <h2
                  className={`${headline} mt-4 text-[clamp(2.25rem,7vw,5.25rem)] text-balance`}
                  style={{ animation: "ink-rise 700ms cubic-bezier(0.16, 1, 0.3, 1) both" }}
                >
                  {leadStory.headline}
                </h2>

                <p className="mt-6 font-headline text-[clamp(1.15rem,2.2vw,1.65rem)] leading-snug text-ink-soft italic text-pretty">
                  {leadStory.dek}
                </p>

                <div className="mt-6 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1 border-y border-rule py-2">
                  <p className="meta text-ink">{leadStory.byline}</p>
                  <p className="meta-sm text-ink-faint">
                    {publication.place}
                  </p>
                </div>

                <div className="prose-editorial columns-editorial mt-6 text-ink-soft">
                  {leadStory.body.map((paragraph, i) => (
                    <p key={paragraph.slice(0, 24)} className={i === 0 ? "drop-cap" : ""}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <aside className="lg:col-span-4">
                <Figure
                  src="/geto.jpg"
                  alt="Monochrome illustration standing in for a portrait of the author"
                  caption="Fig. 01 — The author, in the absence of a photograph"
                  credit="Illustration"
                  aspect="aspect-square"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />

                <div className="mt-8 border-y-2 border-ink py-5">
                  <p className="meta text-center text-ink">By the numbers</p>
                  <dl className="mt-4 divide-y divide-rule-soft">
                    {statistics.map((statistic, i) => (
                      <Reveal key={statistic.label} delay={i * 90}>
                        <div className="flex items-baseline gap-4 py-3">
                          <dd className="font-headline text-[2.75rem] leading-none font-medium text-ink">
                            {statistic.value}
                          </dd>
                          <dt className="meta-sm text-ink-faint">
                            {statistic.label}
                          </dt>
                        </div>
                      </Reveal>
                    ))}
                  </dl>
                </div>

                <div className="mt-8 border-t border-rule pt-4">
                  <p className="meta text-accent">{deskNote.heading}</p>
                  <p className="mt-3 font-headline text-lg leading-snug text-ink italic text-pretty">
                    {deskNote.body}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ══════════ IN THIS ISSUE ══════════ */}
        <div className="no-print border-b border-ink bg-paper-raised">
          <div
            className={`${container} flex flex-wrap items-baseline gap-x-6 gap-y-2 py-3`}
          >
            <p className="meta text-ink">In this issue</p>
            {navigation.slice(1).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="meta-sm text-ink-faint transition-colors duration-200 hover:text-accent"
              >
                <span className="text-rule">{item.folio}</span> {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* ══════════ WORK ══════════ */}
        <section id="work" aria-label="Selected work" className="border-b border-ink">
          <div className={`${container} py-12 sm:py-16`}>
            <SectionHead
              folio="02"
              kicker="Selected work"
              title={workSection.headline}
              note={workSection.note}
            />

            {/* Lead story */}
            {lead && (
              <Reveal>
                <article className="mt-10 grid gap-x-10 gap-y-6 border-t border-rule pt-8 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <p className="meta mb-4 text-accent">
                      {lead.no} — Featured work
                    </p>
                    <Figure
                      src={lead.image}
                      plateLabel={lead.title}
                      caption={lead.figureCaption}
                      credit="Plate"
                      aspect="aspect-[16/10]"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                  </div>
                  <div className="lg:col-span-5">
                    <StoryHeading project={lead} size="lead" />
                    <StoryMeta project={lead} />
                    <StoryBody project={lead} />
                    <StoryLink project={lead} />
                  </div>
                </article>
              </Reveal>
            )}

            {/* Two half-width stories */}
            <div className="mt-12 grid gap-x-10 gap-y-10 border-t-2 border-ink pt-8 md:grid-cols-2">
              {halves.map((project, i) => (
                <Reveal
                  key={project.no}
                  delay={i * 110}
                  className={[
                    i > 0 ? "border-t border-rule pt-8 md:border-t-0 md:pt-0" : "",
                    i % 2 === 1 ? "md:border-l md:border-rule md:pl-10" : "",
                  ]
                    .join(" ")
                    .trim()}
                >
                  <article>
                    <p className="meta mb-4 text-accent">{project.no}</p>
                    <Figure
                      src={project.image}
                      plateLabel={project.title}
                      caption={project.figureCaption}
                      credit="Plate"
                      aspect="aspect-[3/2]"
                      sizes="(max-width: 768px) 100vw, 45vw"
                    />
                    <div className="mt-5">
                      <StoryHeading project={project} size="small" />
                      <StoryMeta project={project} />
                      <StoryBody project={project} />
                      <StoryLink project={project} />
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Personal work — present, but plainly secondary */}
            {briefs.length > 0 && (
              <Reveal>
                <div className="mt-12 border-t-2 border-ink pt-6">
                  <p className="meta text-accent">{workSection.briefsKicker}</p>
                  {briefs.map((project) => (
                    <BriefStory key={project.no} project={project} />
                  ))}
                </div>
              </Reveal>
            )}

            <p className="meta-sm mt-10 border-t border-rule pt-4 text-ink-faint">
              {workSection.footnote}
            </p>
          </div>
        </section>

        {/* ══════════ PROFILE ══════════ */}
        <section
          id="profile"
          aria-label="Profile"
          className="border-b border-ink bg-paper-raised"
        >
          <div className={`${container} py-12 sm:py-16`}>
            <SectionHead
              folio="04"
              kicker="Profile"
              title="The person behind the byline"
              note={publication.place}
            />

            <Reveal>
              <div className="mt-10 grid gap-x-10 gap-y-10 border-t border-rule pt-8 lg:grid-cols-12">
                <blockquote className="lg:col-span-4">
                  <p className="font-headline text-[clamp(1.5rem,2.8vw,2.15rem)] leading-tight text-ink italic text-pretty">
                    The spreadsheet, for all its faults, is the specification.
                  </p>
                  <footer className="meta-sm mt-4 border-t border-rule pt-3 text-ink-faint">
                    On reading a business before replacing its tools
                  </footer>
                </blockquote>

                <div className="prose-editorial text-ink-soft lg:col-span-5 lg:border-x lg:border-rule lg:px-10">
                  {profileBody.map((paragraph, i) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className={i === 0 ? "drop-cap" : ""}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                <dl className="lg:col-span-3">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="border-b border-rule-soft py-3 first:border-t first:border-rule"
                    >
                      <dt className="meta-sm text-ink-faint">{fact.label}</dt>
                      <dd className="mt-1 text-ink">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════ EMPLOYMENT LEDGER ══════════ */}
        <section
          id="ledger"
          aria-label="Employment ledger"
          className="border-b border-ink"
        >
          <div className={`${container} py-12 sm:py-16`}>
            <SectionHead
              folio="05"
              kicker="Employment ledger"
              title={ledgerSection.headline}
              note={ledgerSection.note}
            />

            <div className="mt-10">
              {positions.map((position, i) => (
                <Reveal key={position.period} delay={i * 90}>
                  <LedgerEntry position={position} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ TECHNICAL INDEX ══════════ */}
        <section
          id="index"
          aria-label="Technical index"
          className="border-b border-ink bg-paper-raised"
        >
          <div className={`${container} py-12 sm:py-16`}>
            <SectionHead
              folio="07"
              kicker="Technical index"
              title="Specifications"
              note="Tools of the trade, listed plainly"
            />

            <Reveal>
              <div className="mt-10 grid gap-x-10 gap-y-10 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-y-2 border-ink">
                        <th scope="col" className="meta py-2.5 pr-6 text-ink">
                          Field
                        </th>
                        <th scope="col" className="meta py-2.5 text-ink">
                          Technologies
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {technicalIndex.map((row) => (
                        <tr
                          key={row.field}
                          className="border-b border-rule-soft align-baseline"
                        >
                          <th
                            scope="row"
                            className="meta-sm w-24 py-4 pr-6 text-ink-faint"
                          >
                            {row.field}
                          </th>
                          <td
                            className={`py-4 ${
                              row.primary ? "text-ink" : "text-ink-faint"
                            }`}
                          >
                            {row.entries.join(", ")}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <p className="mt-5 text-sm text-ink-soft">{indexNote}</p>
                </div>

                <div className="lg:col-span-4 lg:border-l lg:border-rule lg:pl-10">
                  <p className="meta text-accent">Colophon</p>
                  <dl className="mt-4">
                    {[
                      { label: "Headlines", value: "EB Garamond" },
                      { label: "Text", value: "Source Serif 4" },
                      { label: "Metadata", value: "Arial / Helvetica" },
                      { label: "Composed with", value: "Next.js, Tailwind CSS" },
                      { label: "Pressed at", value: "Vercel" },
                    ].map((entry) => (
                      <div
                        key={entry.label}
                        className="flex items-baseline justify-between gap-4 border-b border-rule-soft py-2"
                      >
                        <dt className="meta-sm text-ink-faint">
                          {entry.label}
                        </dt>
                        <dd className="meta-sm text-right text-ink">
                          {entry.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 text-sm text-ink-soft">
                    Set in two serifs and one working sans. No shadows, no
                    gradients, no rounded corners — the rules do the structural
                    work.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ══════════ NOTES ══════════ */}
        <section
          id="notes"
          aria-label="Notes"
          className="border-b border-ink"
        >
          <div className={`${container} py-12 sm:py-16`}>
            <SectionHead
              folio="08"
              kicker="Notes & opinion"
              title="From the journal"
              note="Occasional columns on building software"
            />

            <Reveal>
              <div className="mt-10 grid gap-x-10 gap-y-8 border-t border-rule pt-8 lg:grid-cols-12">
                <div className="lg:col-span-7 lg:border-r lg:border-rule lg:pr-10">
                  <NoteEntry note={featuredNote} featured />
                </div>
                <blockquote className="lg:col-span-5">
                  <p className="font-headline text-[clamp(1.35rem,2.4vw,1.9rem)] leading-tight text-ink italic text-pretty">
                    A framework I understand at three in the morning is worth
                    more than a framework that benchmarks better.
                  </p>
                  <footer className="meta-sm mt-4 border-t border-rule pt-3 text-ink-faint">
                    From: In defence of boring technology
                  </footer>
                </blockquote>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-x-10 gap-y-10 border-t-2 border-ink pt-8 md:grid-cols-3">
              {shortNotes.map((note, i) => (
                <Reveal
                  key={note.title}
                  delay={i * 100}
                  className={
                    i > 0
                      ? "border-t border-rule pt-8 md:border-t-0 md:border-l md:border-rule md:pt-0 md:pl-10"
                      : undefined
                  }
                >
                  <NoteEntry note={note} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CONTACT — THE BACK PAGE ══════════ */}
        <section
          id="contact"
          aria-label="Contact"
          className="border-b border-ink bg-paper-raised"
        >
          <div className={`${container} py-12 sm:py-16`}>
            <p className="meta text-accent">12 — The back page</p>

            <h2
              className={`${headline} mt-4 text-[clamp(2.25rem,7vw,5rem)] text-balance`}
            >
              Have a story to build?
            </h2>

            <div className="mt-8 grid gap-x-10 gap-y-10 border-t-2 border-ink pt-8 lg:grid-cols-12">
              <p className="font-headline text-[clamp(1.2rem,2.2vw,1.65rem)] leading-snug text-ink italic text-pretty lg:col-span-5">
                I am always interested in interesting problems, ambitious ideas,
                and thoughtful digital products. Letters to the editor are read
                and answered.
              </p>

              <dl className="lg:col-span-7 lg:border-l lg:border-rule lg:pl-10">
                {contact.map((entry) => (
                  <div
                    key={entry.label}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-rule py-3.5 first:border-t"
                  >
                    <dt className="meta-sm text-ink-faint">{entry.label}</dt>
                    <dd>
                      <a
                        href={entry.href}
                        aria-label={entry.aria}
                        target={
                          entry.href.startsWith("mailto:") ? undefined : "_blank"
                        }
                        rel="noopener noreferrer"
                        className="link-editorial text-ink"
                      >
                        {entry.value}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>

      {/* ══════════ PUBLICATION INFORMATION ══════════ */}
      <footer className="bg-paper-raised">
        <div className={`${container} py-10`}>
          <div className="rule-double" />
          <div className="mt-6 grid gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-headline text-lg leading-tight font-medium tracking-[0.03em] text-ink uppercase">
                {publication.name}
              </p>
              <p className="meta-sm mt-2 text-ink-faint">
                {publication.tagline}
              </p>
            </div>
            <div className="meta-sm space-y-1.5 text-ink-faint">
              <p>
                {publication.volume} · {publication.issue}
              </p>
              <p>{publication.established}</p>
              <p>{publication.place}</p>
            </div>
            <div className="meta-sm space-y-1.5 text-ink-faint">
              <p>© 2026 Mel Alejandrino</p>
              <p>Designed / built by Mel</p>
              <p>All rights reserved</p>
            </div>
            <div className="meta-sm text-ink-faint sm:text-right">
              <a href="#front" className="link-read text-ink">
                Return to front page <span className="arrow">↑</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
