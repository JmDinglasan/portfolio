import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Resolves to the Vercel deployment URL automatically in production; falls back
// to localhost in dev. Set NEXT_PUBLIC_SITE_URL to pin a custom domain.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL &&
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ||
  (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
  "http://localhost:3000";

const pageTitle = `${site.name} — ${site.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: site.tagline,
  keywords: [
    "AI Automation",
    "Integration Developer",
    "n8n",
    "LLMs",
    "AI Voice Agents",
    "Chatbot Automation",
    "API Integration",
    "Workflow Automation",
    "Next.js",
    "Freelance Developer",
    "Philippines",
  ],
  authors: [{ name: site.name, url: site.socials.github }],
  creator: site.name,
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: `${site.name} — Portfolio`,
    title: pageTitle,
    description: site.tagline,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  colorScheme: "light dark",
};

// Runs before first paint to set the theme and avoid a flash of the wrong
// colors. Reads the saved preference (or falls back to light).
const themeScript = `(function(){try{var t=localStorage.getItem('theme')||'light';var d=t==='dark'||(t==='system'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.setAttribute('data-theme',d?'dark':'light');}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
