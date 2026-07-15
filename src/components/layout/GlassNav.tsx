"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";

export function GlassNav() {
  const pathname = usePathname();
  const isLight = pathname.startsWith('/work') || pathname.startsWith('/contact');

  return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-xl border-b cursor-none transition-all duration-500 ease-in-out ${isLight ? 'bg-gray-500/80 border-gray-400/20' : 'bg-surface/60 dark:bg-surface/60 border-outline-variant/10'}`}>
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-8 w-full">
        <Link href="/" className={`font-headline-md text-headline-md tracking-tighter interactive-element ${isLight ? 'text-white' : 'text-on-surface dark:text-on-surface'}`}>
          {portfolioData.owner.initials}
        </Link>
        <div className="hidden md:flex gap-gutter items-center">
          <Link
            href="/"
            className={`font-label-technical text-label-technical uppercase tracking-widest transition-all duration-300 interactive-element hover:opacity-70 ${
              pathname === '/' 
                ? "text-primary border-b border-primary pb-1" 
                : isLight ? "text-gray-200 hover:text-white" : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            HOME
          </Link>
          <Link
            href="/work"
            className={`font-label-technical text-label-technical uppercase tracking-widest transition-all duration-300 interactive-element hover:opacity-70 ${
              pathname.startsWith('/work') 
                ? isLight ? "text-white border-b border-white pb-1" : "text-primary border-b border-primary pb-1" 
                : isLight ? "text-gray-200 hover:text-white" : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            PROJECTS
          </Link>
          <Link
            href="/contact"
            className={`font-label-technical text-label-technical uppercase tracking-widest transition-all duration-300 interactive-element hover:opacity-70 ${
              pathname.startsWith('/contact') 
                ? isLight ? "text-white border-b border-white pb-1" : "text-primary border-b border-primary pb-1" 
                : isLight ? "text-gray-200 hover:text-white" : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            CONTACT
          </Link>
        </div>
        <button className={`md:hidden interactive-element hover:opacity-70 transition-opacity ${isLight ? 'text-white' : 'text-primary dark:text-primary'}`}>
          menu
        </button>
      </div>
    </nav>
  );
}
