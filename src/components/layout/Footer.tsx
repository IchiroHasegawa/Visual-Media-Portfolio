"use client";

import { usePathname } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const pathname = usePathname();
  const isLight = pathname.startsWith('/work') || pathname.startsWith('/contact');

  return (
    <footer className={`w-full py-16 transition-all duration-300 relative z-20 border-t ${isLight ? 'bg-[#FAF9F6] border-gray-200' : 'bg-surface dark:bg-surface border-outline-variant/10'}`}>
      <div className="grid grid-cols-1 md:grid-cols-12 px-margin-mobile md:px-margin-desktop gap-gutter">
        <div className="col-span-1 md:col-span-4 flex flex-col justify-between">
          <p className={`font-label-technical text-label-technical uppercase tracking-tighter ${isLight ? 'text-gray-500' : 'text-on-surface-variant'}`}>{portfolioData.owner.fullName}. All rights reserved.</p>
        </div>
        <div className="col-span-1 md:col-span-4 md:col-start-9 flex flex-col md:items-end justify-end space-y-4">
          <p className={`font-label-technical text-label-technical uppercase tracking-tighter mb-2 ${isLight ? 'text-gray-900' : 'text-on-surface-variant'}`}>Connect</p>
          <div className="flex flex-col md:items-end space-y-2">
            {portfolioData.owner.socialLinks.linkedin && (
              <a href={portfolioData.owner.socialLinks.linkedin} className={`font-label-technical text-label-technical uppercase tracking-tighter transition-colors duration-300 interactive-element ${isLight ? 'text-gray-500 hover:text-gray-900' : 'text-on-surface-variant hover:text-primary'}`}>LinkedIn</a>
            )}
            {portfolioData.owner.socialLinks.vimeo && (
              <a href={portfolioData.owner.socialLinks.vimeo} className={`font-label-technical text-label-technical uppercase tracking-tighter transition-colors duration-300 interactive-element ${isLight ? 'text-gray-500 hover:text-gray-900' : 'text-on-surface-variant hover:text-primary'}`}>Vimeo</a>
            )}
            {portfolioData.owner.socialLinks.behance && (
              <a href={portfolioData.owner.socialLinks.behance} className={`font-label-technical text-label-technical uppercase tracking-tighter transition-colors duration-300 interactive-element ${isLight ? 'text-gray-500 hover:text-gray-900' : 'text-on-surface-variant hover:text-primary'}`}>Behance</a>
            )}
            {portfolioData.owner.socialLinks.instagram && (
              <a href={portfolioData.owner.socialLinks.instagram} className={`font-label-technical text-label-technical uppercase tracking-tighter transition-colors duration-300 interactive-element ${isLight ? 'text-gray-500 hover:text-gray-900' : 'text-on-surface-variant hover:text-primary'}`}>Instagram</a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
