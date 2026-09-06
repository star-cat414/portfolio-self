import Image from "next/image";
import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const socials = [
  { label: "GitHub", href: profile.github, Icon: GitHubIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_70%_20%,rgba(14,165,233,0.08),transparent)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 sm:px-8 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-3 py-1.5 text-xs font-medium text-teal-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
            </span>
            {profile.availability}
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl xl:text-6xl">
            Hi, I&apos;m <span className="whitespace-nowrap text-brand-600">{profile.name}</span>
          </h1>

          <p className="mt-4 text-lg font-medium text-slate-600 sm:text-xl">
            {profile.title}
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-md"
            >
              View My Projects
            </a>
            <a
              href={profile.cv}
              className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 text-sm font-semibold text-navy-900 transition-all hover:-translate-y-0.5 hover:border-brand-600 hover:text-brand-600"
            >
              Download CV
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <span className="text-sm font-medium text-slate-500">Find me on</span>
            <div className="flex items-center gap-2">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="relative">
            <div className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-tr from-brand-500/30 to-teal-400/30 blur-lg" />
            <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-white shadow-xl sm:h-72 sm:w-72">
              <Image
                src={profile.photo}
                alt={`${profile.name} — profile photo`}
                width={288}
                height={288}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}