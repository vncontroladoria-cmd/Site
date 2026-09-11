import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AmbientBackground } from "@/components/ambient-background";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.hero.subhead,
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.hero.subhead,
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="min-h-dvh antialiased">
        <AmbientBackground />
        {children}
      </body>
    </html>
  );
}
