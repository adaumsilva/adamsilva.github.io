import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContributionCard } from "@/components/ui/ContributionCard";
import { FadeInWhenVisible } from "@/components/ui/FadeInWhenVisible";
import type { Contribution } from "@/types/content";

interface OpenSourceProps {
  data: Contribution[];
}

export function OpenSource({ data }: OpenSourceProps) {
  if (data.length === 0) return null;

  return (
    <section id="open-source" className="py-24 lg:py-32" aria-label="Open source contributions">
      <FadeInWhenVisible>
        <SectionHeading number="05" title="Open Source Contributions" />
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.05}>
        <p className="text-slate text-sm mb-10 max-w-lg">
          Selected contributions to open source projects outside my own repositories.
        </p>
      </FadeInWhenVisible>

      <div className="flex flex-col gap-5">
        {data.map((contribution, i) => (
          <FadeInWhenVisible key={contribution.id} delay={0.1 * (i + 1)}>
            <ContributionCard contribution={contribution} />
          </FadeInWhenVisible>
        ))}
      </div>
    </section>
  );
}
