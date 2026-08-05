"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contactLinks } from "../portfolio.data";

const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end px-6 pb-24 pt-32 overflow-hidden">
      <motion.div
        className="absolute inset-0 flex items-center justify-end pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease, delay: 0.3 }}
      >
        <div className="relative w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] mr-[-5vw] opacity-[0.07]">
          <Image
            src="/geto.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            sizes="480px"
          />
        </div>
      </motion.div>

      <div className="relative w-full max-w-5xl mx-auto">
        <div className="flex flex-col gap-12">
          <div className="flex-1 min-w-0">
            <motion.p
              className="font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-on-surface-variant"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              Made by Mel
            </motion.p>

            <motion.h1
              className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] font-bold leading-[0.9] tracking-[-0.03em] text-primary-display text-balance"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              I build
              <br />
              things.
            </motion.h1>

            <motion.p
              className="mt-8 text-lg md:text-xl leading-relaxed text-on-surface-variant max-w-md text-pretty"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Software, websites, desktop apps, and things I probably
              didn&apos;t need to build — but wanted to see if I could.
            </motion.p>

            <motion.nav
              aria-label="Contact links"
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              {contactLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.aria}
                  className="font-mono text-xs tracking-[0.02em] text-on-surface-variant hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </motion.nav>
          </div>
        </div>
      </div>
    </section>
  );
}
