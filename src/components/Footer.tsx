import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-base font-semibold text-navy-900">
              {profile.name}
            </p>
            <p className="mt-1 text-sm text-slate-500">{profile.tagline}</p>
          </div>

          <div className="flex items-center gap-2">
            {[
              { label: "GitHub", href: profile.github, Icon: GitHubIcon },
              { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInIcon },
              { label: "Email", href: `mailto:${profile.email}`, Icon: MailIcon },
            ].map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition-colors hover:border-brand-600 hover:text-brand-600"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-slate-100 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p>
            Built with <span className="font-medium text-brand-600">modern web technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}