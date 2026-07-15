"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function GlassNav() {
  const pathname = usePathname();

  const links = [
    { name: "Projects", href: "/work" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl dark:bg-surface/60 border-b border-outline-variant/10 cursor-none transition-all duration-500 ease-in-out">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-8 w-full">
        <Link href="/" className="font-headline-md text-headline-md text-on-surface dark:text-on-surface tracking-tighter interactive-element">
          STUDIO_NOIR
        </Link>
        <div className="hidden md:flex gap-gutter items-center">
          {links.map((link) => {
            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-label-technical text-label-technical uppercase tracking-widest transition-all duration-300 interactive-element hover:opacity-70 ${
                  isActive 
                    ? "text-primary border-b border-primary pb-1" 
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <button className="md:hidden text-primary dark:text-primary interactive-element hover:opacity-70 transition-opacity">
          menu
        </button>
      </div>
    </nav>
  );
}
