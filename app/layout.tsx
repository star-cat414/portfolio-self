import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourusername.vercel.app"),
  title: `${profile.name} — Information Technology Student & Software Developer`,
  description:
    "Portfolio of " +
    profile.name +
    ", a final-year Information Technology student passionate about software development, AI, data science, NLP, and building real-world applications. Open to internship and entry-level IT opportunities.",
  keywords: [
    "Information Technology",
    "Software Developer",
    "Final Year Student",
    "AI",
    "Data Science",
    "Machine Learning",
    "NLP",
    "React",
    "Next.js",
    "Portfolio",
    "Internship",
    "Entry-Level",
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — Portfolio`,
    description:
      "Final-year IT student & software developer. Open to internship and entry-level opportunities.",
    url: "/",
    siteName: `${profile.name} — Portfolio`,
    type: "website",
    images: [{ url: profile.photo, width: 288, height: 288, alt: "Profile photo" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}