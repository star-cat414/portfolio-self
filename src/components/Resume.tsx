import { profile } from "@/data/portfolio";
import { DownloadIcon, MailIcon } from "@/components/icons";

export default function Resume() {
  return (
    <section id="resume" className="px-6 py-20 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-navy-900 px-6 py-14 text-center sm:px-12 sm:py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          Interested in working together?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-slate-300">
          I am currently open to internship and entry-level IT opportunities.
          Let&apos;s build something great.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={profile.cv}
            className="inline-flex h-12 items-center gap-2 rounded-lg bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-700"
          >
            <DownloadIcon className="h-4 w-4" />
            Download CV
          </a>
          <a
            href="#contact"
            className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/15"
          >
            <MailIcon className="h-4 w-4" />
            Contact Me
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-400">
          Reach me directly at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="font-medium text-brand-400 transition-colors hover:text-brand-300"
          >
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  );
}