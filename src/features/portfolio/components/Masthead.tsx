import { publication } from "../portfolio.data";

const editionFormat = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "Asia/Manila",
});

export function Masthead() {
  // Regenerated daily by the page revalidate — the edition date is never stale.
  const edition = editionFormat.format(new Date());

  return (
    <header className="border-b border-ink">
      <div className="mx-auto w-full max-w-[1240px] px-5 sm:px-8">
        <div className="flex items-center justify-between gap-4 border-b border-rule-soft py-2.5 text-ink-faint">
          <span className="meta-sm">{publication.established}</span>
          <span className="meta-sm hidden text-center sm:block">
            {publication.place}
          </span>
          <span className="meta-sm text-right">
            {publication.volume} · {publication.issue}
          </span>
        </div>

        <div className="pt-8 pb-5 text-center sm:pt-10">
          <h1 className="font-headline text-[clamp(1.75rem,7.2vw,5rem)] leading-[0.94] font-medium tracking-[0.005em] text-ink uppercase">
            {publication.name}
          </h1>
          <p className="meta mt-4 text-ink-soft sm:mt-5">
            {publication.tagline}
          </p>
        </div>

        <div className="rule-double" />

        <div className="flex flex-col items-center gap-1 py-2.5 text-ink-faint sm:flex-row sm:justify-between">
          <span className="meta-sm">{edition}</span>
          <span className="meta-sm">Twelve pages</span>
        </div>
      </div>
    </header>
  );
}
