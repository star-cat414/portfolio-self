"use client";
import Image from "next/image";
import { useRef } from "react";
import Section from "@/components/Section";
import useReveal from "@/lib/useReveal";
import { projects } from "@/data/portfolio";
import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've built"
      subtitle="Hands-on projects where I applied software development, AI, and full-stack skills to solve real problems."
    >
      <div className="space-y-10">
        {projects.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </Section>
  );
}

type ProjectCardProps = {
  name: string;
  tagline: string;
  image: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  contribution: string;
  github: string;
  demo?: string;
};

function ProjectCard(p: ProjectCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useReveal(ref);

  return (
    <article
      ref={ref}
      className="reveal overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="grid lg:grid-cols-5">
        <div className="relative min-h-52 lg:col-span-2 lg:min-h-full">
          <Image
            src={p.image}
            alt={`${p.name} — project screenshot`}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="p-6 sm:p-8 lg:col-span-3">
          <h3 className="text-xl font-semibold text-navy-900">{p.name}</h3>
          <p className="mt-1 text-sm font-medium text-brand-600">{p.tagline}</p>

          <dl className="mt-6 space-y-5">
            <div className="rounded-lg bg-slate-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Problem
              </dt>
              <dd className="mt-1 text-sm leading-6 text-slate-600">
                {p.problem}
              </dd>
            </div>
            <div className="rounded-lg bg-brand-50 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                Solution
              </dt>
              <dd className="mt-1 text-sm leading-6 text-slate-700">
                {p.solution}
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Technologies
            </p>
            <div className="flex flex-wrap gap-2">
              {p.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Key features
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {p.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2 text-sm text-slate-700"
                >
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <svg
                      className="h-2.5 w-2.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-lg border border-slate-200 bg-slate-50/60 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              My contribution
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-700">
              {p.contribution}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-navy-900 px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              <GitHubIcon className="h-4 w-4" />
              View on GitHub
            </a>
            {p.demo && (
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 text-sm font-semibold text-navy-900 transition-colors hover:border-brand-600 hover:text-brand-600"
              >
                <ExternalLinkIcon className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}