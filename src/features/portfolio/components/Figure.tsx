import Image from "next/image";

interface FigureProps {
  caption: string;
  /** Optional photograph. Without one, a typographic plate is printed instead. */
  src?: string;
  alt?: string;
  /** Words set on the plate when there is no photograph. */
  plateLabel?: string;
  credit?: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
}

export function Figure({
  caption,
  src,
  alt,
  plateLabel,
  credit,
  aspect = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  className = "",
}: FigureProps) {
  return (
    <figure className={className}>
      <div
        className={`newsprint relative w-full overflow-hidden border border-ink ${aspect}`}
      >
        {src ? (
          <Image
            src={src}
            alt={alt ?? caption}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover"
          />
        ) : (
          <div className="plate absolute inset-0 flex items-center justify-center p-6">
            <span className="font-headline text-center text-[clamp(1.1rem,3.2vw,2rem)] leading-tight font-medium tracking-[0.08em] text-ink/45 uppercase">
              {plateLabel}
            </span>
          </div>
        )}
      </div>
      <figcaption className="mt-2 flex items-baseline justify-between gap-4 border-t border-rule-soft pt-2">
        <span className="meta-sm text-ink-soft">{caption}</span>
        {credit && (
          <span className="meta-sm shrink-0 text-rule">{credit}</span>
        )}
      </figcaption>
    </figure>
  );
}
