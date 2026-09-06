"use client";
import { useRef } from "react";
import Section from "@/components/Section";
import useReveal from "@/lib/useReveal";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Experience"
      subtitle="Internships, academic projects, freelance work, and technical activities — focused on outcomes and contributions."
      className="bg-white"
    >
      <div className="mx-auto max-w-3xl">
        <ol className="relative space-y-8 border-l-2 border-slate-200">
          {experiences.map((exp) => (
            <ExperienceItem key={exp.role} {...exp} />
          ))}
        </ol>
      </div>
    </Section>
  );
}

type ExperienceItemProps = {
  role: string;
  context: string;
  period: string;
  points: string[];
};

function ExperienceItem({ role, context, period, points }: ExperienceItemProps) {
  const ref = useRef<HTMLLIElement | null>(null);
  useReveal(ref);

  return (
    <li ref={ref} className="reveal relative ml-6">
      <span className="absolute -left-[9px] mt-6 flex h-4 w-4 rounded-full border-4 border-brand-600 bg-white" />
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="text-base font-semibold text-navy-900">{role}</h3>
          <span className="rounded-md bg-brand-100 px-2.5 py-1 text-xs font-semibold text-brand-700">
            {period}
          </span>
        </div>
        <p className="mt-1.5 text-sm font-medium text-brand-600">{context}</p>
        <ul className="mt-4 space-y-2.5">
          {points.map((point, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm leading-6 text-slate-600">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}