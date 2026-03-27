import Link from "next/link";
import { TechTag } from "./TechTag";
import type { Contribution } from "@/types/content";

interface ContributionCardProps {
  contribution: Contribution;
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

const glassStyle: React.CSSProperties = {
  background: "linear-gradient(rgba(255,255,255,0.04), transparent)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  borderLeft: "3px solid var(--color-green)",
  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
};

export function ContributionCard({ contribution }: ContributionCardProps) {
  return (
    <article
      className="rounded-xl p-7 transition-transform duration-300 hover:-translate-y-1 flex flex-col gap-5"
      style={glassStyle}
      aria-labelledby={`contribution-${contribution.id}-title`}
    >
      {/* Breadcrumb */}
      <p className="font-mono text-green text-xs tracking-widest">
        <Link
          href={contribution.orgUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {contribution.org}
        </Link>
        {" / "}
        <Link
          href={contribution.projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {contribution.project}
        </Link>
      </p>

      {/* Title */}
      <h3
        id={`contribution-${contribution.id}-title`}
        className="text-lg font-semibold text-slate-lightest leading-snug"
      >
        {contribution.title}
      </h3>

      {/* Two-column body */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: repo description */}
        <div className="flex flex-col gap-3">
          <p className="font-mono text-green text-xs tracking-widest uppercase">About the project</p>
          <p className="text-slate text-sm leading-relaxed">{contribution.description}</p>
          <div className="flex flex-wrap gap-2 mt-auto pt-3">
            {contribution.techTags.map((tag) => (
              <TechTag key={tag} label={tag} />
            ))}
          </div>
        </div>

        {/* Right: what was done */}
        <div className="flex flex-col gap-3">
          <p className="font-mono text-green text-xs tracking-widest uppercase">What I did</p>
          <ul className="flex flex-col gap-2">
            {contribution.highlights.map((point, i) => (
              <li key={i} className="flex gap-3 text-slate text-sm leading-relaxed">
                <span className="text-green font-mono shrink-0 mt-0.5" aria-hidden="true">▸</span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Links */}
      <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/5">
        <Link
          href={contribution.links.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${contribution.project} GitHub repository`}
          className="flex items-center gap-2 text-slate-light hover:text-green transition-colors duration-200 text-sm"
        >
          <GitHubIcon />
          View Repository
        </Link>
        {contribution.links.pr && (
          <Link
            href={contribution.links.pr}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${contribution.title} pull request`}
            className="flex items-center gap-2 text-slate-light hover:text-green transition-colors duration-200 text-sm"
          >
            <ExternalLinkIcon />
            View PR
          </Link>
        )}
      </div>
    </article>
  );
}
