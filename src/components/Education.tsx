"use client";
import { useRef } from "react";
import Section from "@/components/Section";
import useReveal from "@/lib/useReveal";
import { education } from "@/data/portfolio";

export default function Education() {
  const ref = useRef<HTMLDivElement | null>(null);
  useReveal(ref);

  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Education"
      className="bg-white"
    >
      <div className="mx-auto max-w-3xl">
        <ol className="relative border-l-2 border-slate-200">
          <li className="ml-6">
            <div
              ref={ref}
              className="reveal rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="absolute -left-[9px] mt-2 flex h-4 w-4 rounded-full border-4 border-brand-600 bg-white" />
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                Undergraduate Degree
              </p>
              <h3 className="mt-2 text-lg font-semibold text-navy-900">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {education.university}
              </p>
              <p className="mt-1 text-xs font-medium text-slate-400">
                {education.expected}
              </p>

              <div className="mt-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Relevant coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </Section>
  );
}