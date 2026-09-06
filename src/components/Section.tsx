"use client";
import type { ReactNode } from "react";
import useReveal from "@/lib/useReveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div ref={ref} className="reveal mb-12 max-w-2xl">
          {eyebrow && (
            <span className="mb-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
