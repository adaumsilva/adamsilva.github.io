"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { useLoader } from "@/components/ui/LoaderContext";
import type { Hero as HeroData } from "@/types/content";

interface HeroProps {
  data: HeroData;
}

const EASE = [0.645, 0.045, 0.355, 1.0] as const;

export function Hero({ data }: HeroProps) {
  const { loaded } = useLoader();

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.6, delay, ease: EASE },
  });

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center py-24 lg:py-32"
      aria-label="Introduction"
    >
      <m.p {...fadeUp(0)} className="font-mono text-green text-sm md:text-base mb-5">
        {data.greeting}
      </m.p>

      <m.h1
        {...fadeUp(0.35)}
        className="text-5xl sm:text-6xl md:text-7xl font-bold text-slate-lightest leading-tight mb-3"
        style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
      >
        {data.name}
      </m.h1>

      <m.h2
        {...fadeUp(0.7)}
        className="text-slate font-semibold leading-tight mb-8"
        style={{ fontSize: "clamp(1.75rem, 5vw, 3.5rem)" }}
      >
        {data.tagline}
      </m.h2>

      <m.p
        {...fadeUp(1.05)}
        className="text-slate text-base md:text-lg leading-relaxed max-w-xl mb-12"
      >
        {data.description}
      </m.p>

      <m.div {...fadeUp(1.4)} className="flex flex-wrap gap-4">
        <Link href={data.cta.href} className="btn-outline">
          {data.cta.label}
        </Link>
        <a
          href={data.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
        >
          Resume
        </a>
      </m.div>
    </section>
  );
}
