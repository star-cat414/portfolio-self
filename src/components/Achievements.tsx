"use client";
import { useRef } from "react";
import Section from "@/components/Section";
import useReveal from "@/lib/useReveal";
import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="Achievements"
      title="Achievements"
      subtitle="Academic results, competitions, hackathons, and project milestones."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {achievements.map((achievement, i) => (
          <AchievementCard key={achievement} text={achievement} delay={(i % 2) * 60} />
        ))}
      </div>
    </Section>
  );
}

type AchievementCardProps = {
  text: string;
  delay: number;
};

function AchievementCard({ text, delay }: AchievementCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useReveal(ref);

  return (
    <div
      ref={ref}
      className="reveal flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
          <path d="M4 22h16" />
          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
        </svg>
      </span>
      <p className="pt-2 text-sm leading-6 text-slate-700">{text}</p>
    </div>
  );
}