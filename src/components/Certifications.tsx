"use client";
import { useRef } from "react";
import Image from "next/image";
import Section from "@/components/Section";
import useReveal from "@/lib/useReveal";
import { certifications } from "@/data/portfolio";
import { ExternalLinkIcon } from "@/components/icons";

export default function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Certifications"
      subtitle="Credentials that back up my skills and commitment to continuous learning."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          return <CertCard key={`${cert.name}-${i}`} {...cert} />;
        })}
      </div>
    </Section>
  );
}

type CertCardProps = {
  name: string;
  organization: string;
  completion: string;
  image: string;
  link: string;
};

function CertCard({ name, organization, completion, image, link }: CertCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  useReveal(ref);

  return (
    <div
      ref={ref}
      className="reveal flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-md"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${name} certificate`}
        className="group relative block aspect-[4/3] overflow-hidden bg-slate-100"
      >
        <Image
          src={image}
          alt={`${name} certificate`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </a>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-navy-900">{name}</h3>
        <p className="mt-1 text-sm text-slate-600">{organization}</p>
        <p className="mt-1 text-xs font-medium text-slate-400">{completion}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
        >
          View certificate
          <ExternalLinkIcon className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}