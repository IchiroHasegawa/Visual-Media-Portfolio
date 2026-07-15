export function Footer() {
  return (
    <footer className="w-full py-16 bg-surface dark:bg-surface border-t border-outline-variant/10 transition-all duration-300 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-12 px-margin-mobile md:px-margin-desktop gap-gutter">
        <div className="col-span-1 md:col-span-4 flex flex-col justify-between">
          <p className="font-label-technical text-label-technical uppercase tracking-tighter text-on-surface-variant">© 2024 STUDIO_NOIR. ALL RIGHTS RESERVED.</p>
        </div>
        <div className="col-span-1 md:col-span-4 md:col-start-9 flex flex-col md:items-end justify-end space-y-4">
          <p className="font-label-technical text-label-technical uppercase tracking-tighter text-on-surface-variant mb-2">Connect</p>
          <div className="flex flex-col md:items-end space-y-2">
            <a href="#" className="font-label-technical text-label-technical uppercase tracking-tighter text-on-surface-variant hover:text-primary transition-colors duration-300 interactive-element">LinkedIn</a>
            <a href="#" className="font-label-technical text-label-technical uppercase tracking-tighter text-on-surface-variant hover:text-primary transition-colors duration-300 interactive-element">Vimeo</a>
            <a href="#" className="font-label-technical text-label-technical uppercase tracking-tighter text-on-surface-variant hover:text-primary transition-colors duration-300 interactive-element">Behance</a>
            <a href="#" className="font-label-technical text-label-technical uppercase tracking-tighter text-on-surface-variant hover:text-primary transition-colors duration-300 interactive-element">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
