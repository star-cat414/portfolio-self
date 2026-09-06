"use client";
import { useRef } from "react";
import Section from "@/components/Section";
import useReveal from "@/lib/useReveal";
import { skillCategories } from "@/data/portfolio";

export default function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title="Skills I bring to the table"
      subtitle="A focused toolkit across programming, frontend, backend, and AI/Data Science — built through coursework, projects, and hands-on practice."
      className="bg-white"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          return (
            <SkillCard key={cat.title} {...cat} delay={i * 60} />
          );
        })}
      </div>
    </Section>
  );
}

type SkillCardProps = {
  title: string;
  icon: string;
  skills: string[];
  delay: number;
};

function SkillCard({ title, icon, skills, delay }: SkillCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useReveal(ref);

  return (
    <div
      ref={ref}
      className="reveal rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="mb-4 flex items-center gap-3">
        <span
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-lg"
          aria-hidden="true"
        >
          {icon}
        </span>
        <h3 className="text-base font-semibold text-navy-900">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-brand-500/40 hover:bg-brand-50 hover:text-brand-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}