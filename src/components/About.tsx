"use client";
import type { ReactNode } from "react";
import Section from "@/components/Section";
import useReveal from "@/lib/useReveal";
import { about, profile } from "@/data/portfolio";

function AboutCard({ children }: { children: ReactNode }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className="reveal rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      {children}
    </div>
  );
}

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title="A motivated final-year IT student, ready to build"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <AboutCard>
          <h3 className="mb-3 text-lg font-semibold text-navy-900">
            Who I am
          </h3>
          <div className="space-y-4 text-sm leading-7 text-slate-600">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </AboutCard>

        <div className="grid gap-6">
          <AboutCard>
            <h3 className="mb-4 text-lg font-semibold text-navy-900">
              At a glance
            </h3>
            <ul className="space-y-3">
              {about.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </AboutCard>

          <AboutCard>
            <h3 className="mb-3 text-lg font-semibold text-navy-900">
              Career goal
            </h3>
            <p className="text-sm leading-7 text-slate-600">
              To become a professional IT and software developer — solving
              real-world problems through software, AI, and data. I&apos;m
              currently seeking internship and entry-level opportunities
              where I can learn fast and contribute from day one.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Software", "AI", "Data Science", "Web & Mobile"].map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs text-slate-400">
              Based in {profile.location}
            </p>
          </AboutCard>
        </div>
      </div>
    </Section>
  );
}