interface HeroProps {
  children?: React.ReactNode;
}

export function Hero({ children }: HeroProps) {
  return (
    <section className="min-h-screen min-h-dvh flex flex-col">
      {/* Name + links — centered-ish via mt-auto split */}
      <div className="mt-auto px-5 sm:px-8">
        <h1
          className="font-display text-[clamp(3rem,14vw,10rem)] font-black leading-[0.85] tracking-[-0.04em] text-foreground text-balance section-entrance"
          style={{ animationDelay: "0ms" }}
        >
          Mel Alejandrino
        </h1>
        <nav
          aria-label="Contact links"
          className="mt-8 flex flex-wrap gap-x-5 gap-y-1 text-sm font-light text-muted section-entrance"
          style={{ animationDelay: "100ms" }}
        >
          <a
            href="https://github.com/melalejandrino"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="hover:text-primary transition-colors duration-150 ease-out"
          >
            github.com/melalejandrino
          </a>
          <span aria-hidden="true" className="text-muted/30">
            /
          </span>
          <a
            href="https://linkedin.com/in/melcarlo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="hover:text-primary transition-colors duration-150 ease-out"
          >
            linkedin.com/in/melcarlo
          </a>
          <span aria-hidden="true" className="text-muted/30">
            /
          </span>
          <a
            href="mailto:alejandrino.mel002@gmail.com"
            aria-label="Email address"
            className="hover:text-primary transition-colors duration-150 ease-out"
          >
            alejandrino.mel002@gmail.com
          </a>
        </nav>
      </div>

      {/* Overview at the bottom */}
      {children && (
        <div
          className="mt-auto pb-8 sm:pb-14 px-5 sm:px-8 section-entrance"
          style={{ animationDelay: "200ms" }}
        >
          {children}
        </div>
      )}
    </section>
  );
}
