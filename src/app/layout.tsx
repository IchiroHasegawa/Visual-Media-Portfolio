import type { Metadata } from "next";
import { Hanken_Grotesk, Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { GlassNav } from "@/components/layout/GlassNav";
import { Footer } from "@/components/layout/Footer";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500"],
});

import { portfolioData } from "@/data/portfolioData";
import { CustomCursor } from "@/components/layout/CustomCursor";

export const metadata: Metadata = {
  title: portfolioData.owner.initials,
  description: portfolioData.hero.heading,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${syne.variable} ${jetbrains.variable} antialiased dark`}
    >
      <body className="min-h-screen flex flex-col bg-background text-on-surface">
        <CustomCursor />
        <GlassNav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
