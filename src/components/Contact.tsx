"use client";

import { FormEvent, useState } from "react";
import Section from "@/components/Section";
import { profile } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "@/components/icons";

const inputClasses =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-navy-900 placeholder:text-slate-400 transition-colors focus:border-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500/30";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `${data.get("subject")} — from ${data.get("name")}`
    );
    const body = encodeURIComponent((data.get("message") as string) ?? "");
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  };

  const contactItems = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
    { label: "LinkedIn", value: profile.linkedin.replace("https://www.", ""), href: profile.linkedin, Icon: LinkedInIcon },
    { label: "GitHub", value: profile.github.replace("https://github.com/", ""), href: profile.github, Icon: GitHubIcon },
    { label: "Location", value: profile.location, href: undefined, Icon: MapPinIcon },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's get in touch"
      subtitle="Have an opportunity, a question, or just want to connect? My inbox is open."
      className="bg-white"
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="space-y-3">
            {contactItems.map(({ label, value, href, Icon }) => {
              const content = (
                <div className="flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-brand-500/40 hover:shadow-md">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                    <Icon />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {label}
                    </p>
                    <p className="truncate text-sm font-medium text-navy-900">
                      {value}
                    </p>
                  </div>
                </div>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block"
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy-900">
                  Name
                </label>
                <input id="name" name="name" required className={inputClasses} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy-900">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className={inputClasses}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-navy-900">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                required
                className={inputClasses}
                placeholder="What's this about?"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy-900">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className={inputClasses}
                placeholder="Tell me about the opportunity or project…"
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-brand-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand-700"
              >
                Send Message
              </button>
              {status === "sent" && (
                <p role="status" className="text-sm font-medium text-teal-500">
                  Your email app should open — thanks for reaching out!
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </Section>
  );
}