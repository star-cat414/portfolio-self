"use client";
import { useRef } from "react";
import Section from "@/components/Section";
import useReveal from "@/lib/useReveal";
import { featuredRepos, profile } from "@/data/portfolio";
import { GitHubIcon, StarIcon } from "@/components/icons";

const CONTRIBUTION_LEVELS = [0, 1, 2, 3, 4] as const;

function pseudoRandom(seed: number) {
  const x = Math.sin(seed * 999.7) * 10000;
  return Math.floor(Math.abs(x) % CONTRIBUTION_LEVELS.length);
}

export default function GitHubActivity() {
  const ref = useRef<HTMLDivElement | null>(null);
  useReveal(ref);

  return (
    <Section
      id="github"
      eyebrow="Development Activity"
      title="Coding on GitHub"
      subtitle="Active development, featured repositories, and the technologies I code with every day."
      className="bg-white"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div
          ref={ref}
          className="reveal rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="flex items-center gap-2 text-base font-semibold text-navy-900">
              <GitHubIcon className="h-5 w-5 text-navy-900" />
              Contribution activity
            </h3>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
            >
              View profile
            </a>
          </div>
          <div className="rounded-lg border border-slate-100 bg-slate-50/60 p-4">
            <div className="grid grid-cols-[repeat(14,minmax(0,1fr))] gap-1">
              {Array.from({ length: 140 }).map((_, i) => {
                const level = pseudoRandom(i);
                const bg =
                  level === 0
                    ? "bg-slate-100"
                    : level === 1
                    ? "bg-brand-100"
                    : level === 2
                    ? "bg-brand-500/50"
                    : level === 3
                    ? "bg-brand-600"
                    : "bg-brand-700";
                return (
                  <span
                    key={i}
                    className={`aspect-square rounded-[3px] ${bg}`}
                    title={`Placeholder contribution level ${level}`}
                  />
                );
              })}
            </div>
            <p className="mt-3 text-xs text-slate-400">
              Visual placeholder — replace with a live GitHub contributions
              embed or image.
            </p>
          </div>

          <h3 className="mb-3 mt-6 text-base font-semibold text-navy-900">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "TypeScript", "JavaScript", "React", "React Native", "Node.js", "SQL", "Git"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-base font-semibold text-navy-900">
            Featured repositories
          </h3>
          {featuredRepos.map((repo, i) => (
            <FeaturedRepo key={repo.name} {...repo} delay={i * 80} />
          ))}
        </div>
      </div>
    </Section>
  );
}

type FeaturedRepoProps = {
  name: string;
  description: string;
  language: string;
  stars: number;
  delay: number;
};

function FeaturedRepo({ name, description, language, stars, delay }: FeaturedRepoProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useReveal(ref);

  return (
    <div
      ref={ref}
      className="reveal rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-500/40 hover:shadow-md"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <a
        href={`${profile.github}/${name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between gap-2"
      >
        <span className="flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors group-hover:text-brand-600">
          <GitHubIcon className="h-4 w-4" />
          {name}
        </span>
        <span className="flex items-center gap-1 text-xs text-slate-500">
          <StarIcon className="h-3.5 w-3.5" />
          {stars}
        </span>
      </a>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-500">
        <span className="h-2 w-2 rounded-full bg-brand-500" />
        {language}
      </span>
    </div>
  );
}