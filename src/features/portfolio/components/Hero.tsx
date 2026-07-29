const links = [
  { label: "github.com/melalejandrino", href: "https://github.com/melalejandrino", aria: "GitHub profile" },
  { label: "linkedin.com/in/melcarlo", href: "https://linkedin.com/in/melcarlo", aria: "LinkedIn profile" },
  { label: "alejandrino.mel002@gmail.com", href: "mailto:alejandrino.mel002@gmail.com", aria: "Email address" },
];

export function Hero() {
  return (
    <section className="min-h-screen min-h-dvh flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-5xl mx-auto">
        <p
          className="font-mono text-xs font-medium uppercase tracking-[0.05em] text-primary section-entrance"
          style={{ animationDelay: "0ms" }}
        >
          Frontend Developer — Cagayan de Oro, PH
        </p>

        <h1
          className="mt-4 font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-[-0.02em] text-primary-display text-balance section-entrance"
          style={{ animationDelay: "80ms" }}
        >
          Mel Alejandrino
        </h1>

        <p
          className="mt-8 text-xl md:text-2xl font-semibold leading-snug text-on-surface max-w-xl text-pretty section-entrance"
          style={{ animationDelay: "160ms" }}
        >
          Frontend developer specializing in ReactJS and NextJS.
        </p>

        <p
          className="mt-4 text-base leading-relaxed text-on-surface-variant max-w-xl text-pretty section-entrance"
          style={{ animationDelay: "240ms" }}
        >
          I build clean, responsive interfaces for real business problems, with backend knowledge
          in Laravel and Node.js that keeps full-stack collaboration seamless. Experienced working
          in agile teams to deliver client-specific web applications.
        </p>

        <nav
          aria-label="Contact links"
          className="mt-12 flex flex-wrap gap-2 section-entrance"
          style={{ animationDelay: "320ms" }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={link.aria}
              className="px-4 py-2 border border-outline-variant rounded font-mono text-xs tracking-[0.02em] text-on-surface transition-colors hover:border-outline hover:bg-surface-container-low"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
