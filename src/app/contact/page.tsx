export default function ContactPage() {
  return (
    <div className="flex-grow pt-[120px] pb-32 px-margin-mobile md:px-margin-desktop w-full max-w-[1920px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="col-span-1 md:col-span-12 mb-16 md:mb-24">
          <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface break-words max-w-5xl">
            Let's Create Together
          </h1>
        </div>
        
        {/* Form Side */}
        <div className="col-span-1 md:col-span-7 pr-0 md:pr-12">
          <form className="space-y-12 relative z-10">
            <div className="group relative">
              <label htmlFor="name" className="font-label-technical text-label-technical text-primary uppercase block mb-2">01 // Name</label>
              <input type="text" id="name" name="name" className="w-full bg-transparent border-b border-outline-variant py-4 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-secondary transition-colors" placeholder="What should I call you?" />
            </div>
            
            <div className="group relative">
              <label htmlFor="email" className="font-label-technical text-label-technical text-primary uppercase block mb-2">02 // Email</label>
              <input type="email" id="email" name="email" className="w-full bg-transparent border-b border-outline-variant py-4 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-secondary transition-colors" placeholder="Where can I reach you?" />
            </div>
            
            <div className="group relative">
              <label htmlFor="project" className="font-label-technical text-label-technical text-primary uppercase block mb-2">03 // Project Scope</label>
              <select id="project" name="project" defaultValue="" className="w-full bg-transparent border-b border-outline-variant py-4 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-secondary transition-colors appearance-none cursor-pointer">
                <option value="" disabled className="bg-surface text-on-surface-variant">Select an option...</option>
                <option value="video" className="bg-surface">Video Editing</option>
                <option value="motion" className="bg-surface">Motion Graphics</option>
                <option value="design" className="bg-surface">Graphic Design</option>
              </select>
            </div>

            <div className="group relative">
              <label htmlFor="message" className="font-label-technical text-label-technical text-primary uppercase block mb-2">04 // Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-transparent border-b border-outline-variant py-4 font-body-lg text-body-lg text-on-surface focus:outline-none focus:border-secondary transition-colors resize-none" placeholder="Tell me about your vision..."></textarea>
            </div>
            
            <button type="submit" className="w-full md:w-auto inline-flex justify-center items-center px-12 py-6 bg-on-surface text-surface font-label-technical text-label-technical uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-colors duration-300 interactive-element group">
              Send Inquiry <span className="material-symbols-outlined ml-2 group-hover:translate-x-2 transition-transform">arrow_forward</span>
            </button>
          </form>
        </div>

        {/* Info Side */}
        <div className="col-span-1 md:col-span-4 md:col-start-9 mt-24 md:mt-0 space-y-16">
          <div>
            <p className="font-label-technical text-label-technical text-primary uppercase mb-4">Direct</p>
            <a href="mailto:alex@studionoir.com" className="font-headline-md text-headline-md text-on-surface hover:text-secondary transition-colors break-all interactive-element">alex@studionoir.com</a>
          </div>
          <div>
            <p className="font-label-technical text-label-technical text-primary uppercase mb-4">Socials</p>
            <ul className="space-y-4">
              <li><a href="#" className="font-body-lg text-body-lg text-on-surface-variant hover:text-on-surface transition-colors interactive-element flex items-center justify-between group">LinkedIn <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span></a></li>
              <li><a href="#" className="font-body-lg text-body-lg text-on-surface-variant hover:text-on-surface transition-colors interactive-element flex items-center justify-between group">Vimeo <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span></a></li>
              <li><a href="#" className="font-body-lg text-body-lg text-on-surface-variant hover:text-on-surface transition-colors interactive-element flex items-center justify-between group">Behance <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span></a></li>
              <li><a href="#" className="font-body-lg text-body-lg text-on-surface-variant hover:text-on-surface transition-colors interactive-element flex items-center justify-between group">Instagram <span className="material-symbols-outlined opacity-0 group-hover:opacity-100 transition-opacity">arrow_outward</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
