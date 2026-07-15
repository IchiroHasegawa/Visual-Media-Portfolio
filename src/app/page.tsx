import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative z-10 pt-[120px]">
      <section className="relative min-h-[921px] flex flex-col justify-center px-margin-mobile md:px-margin-desktop mb-32">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter mt-20">
          <div className="col-span-1 md:col-span-12 pointer-events-none">
            <h1 className="font-display-xl-mobile text-display-xl-mobile md:font-display-xl md:text-display-xl text-on-background uppercase text-overlay-effect whitespace-nowrap overflow-hidden">
              ALEX CHEN
            </h1>
          </div>
          <div className="col-span-1 md:col-start-2 md:col-span-8 lg:col-start-3 lg:col-span-7 mt-16 md:-mt-24 bg-surface/40 backdrop-blur-md p-8 md:p-12 border border-outline-variant/20 rounded-DEFAULT">
            <p className="font-label-technical text-label-technical text-secondary mb-6">// INTRO</p>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-8">
              I am a versatile video editor who partners with directors.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
              Focusing on rhythm, emotion, and visual impact. Dedicated to crafting narratives that resonate.
            </p>
            <Link href="/work" className="inline-flex items-center justify-center px-8 py-4 bg-inverse-surface text-inverse-on-surface font-label-technical text-label-technical uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-colors duration-300 interactive-element">
              See My Reel <span className="material-symbols-outlined ml-2">arrow_forward</span>
            </Link>
          </div>
          <div className="hidden md:flex col-start-1 col-span-1 absolute left-margin-desktop bottom-0 flex-col space-y-6 pb-24">
            <a href="#" className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary interactive-element flex items-center space-x-2">
              <span className="material-symbols-outlined">link</span> <span>LinkedIn</span>
            </a>
            <a href="#" className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary interactive-element flex items-center space-x-2">
              <span className="material-symbols-outlined">play_circle</span> <span>Vimeo</span>
            </a>
            <a href="#" className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary interactive-element flex items-center space-x-2">
              <span className="material-symbols-outlined">photo_camera</span> <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop py-24 border-t border-outline-variant/10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          <div className="col-span-1 md:col-span-4">
            <p className="font-label-technical text-label-technical text-secondary mb-4">// SELECTED PROJECTS</p>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase">The Cut</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
          <div className="col-span-1 md:col-span-4 row-span-1 group relative overflow-hidden border border-outline-variant/20 interactive-element bg-surface-container md:col-span-12">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <Image src="https://images.unsplash.com/photo-1536440136628-849c177e76a1" alt="Form & Function" fill className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 bg-surface/80 backdrop-blur-sm border-t border-outline-variant/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="font-body-lg text-body-lg text-on-surface font-semibold mb-1">Form & Function</h4>
              <p className="font-label-technical text-label-technical text-on-surface-variant uppercase">Commercial // Color Grade</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 row-span-1 group relative overflow-hidden border border-outline-variant/20 interactive-element bg-surface-container">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <Image src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" alt="Urban Echoes" fill className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 bg-surface/80 backdrop-blur-sm border-t border-outline-variant/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="font-body-lg text-body-lg text-on-surface font-semibold mb-1">Urban Echoes</h4>
              <p className="font-label-technical text-label-technical text-on-surface-variant uppercase">Short Film // Narrative</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 row-span-1 group relative overflow-hidden border border-outline-variant/20 interactive-element bg-surface-container">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <Image src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" alt="Neon Pulse" fill className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 bg-surface/80 backdrop-blur-sm border-t border-outline-variant/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="font-body-lg text-body-lg text-on-surface font-semibold mb-1">Neon Pulse</h4>
              <p className="font-label-technical text-label-technical text-on-surface-variant uppercase">Music Video // Visuals</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-4 row-span-1 group relative overflow-hidden border border-outline-variant/20 interactive-element bg-surface-container">
            <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
              <Image src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4" alt="The Lens" fill className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 bg-surface/80 backdrop-blur-sm border-t border-outline-variant/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
              <h4 className="font-body-lg text-body-lg text-on-surface font-semibold mb-1">The Lens</h4>
              <p className="font-label-technical text-label-technical text-on-surface-variant uppercase">Documentary // Edit</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop py-24 border-t border-outline-variant/10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          <div className="col-span-1 md:col-span-4">
            <p className="font-label-technical text-label-technical text-secondary mb-4">// EXPERTISE</p>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase">Skills</h3>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="col-span-1 md:col-span-4 space-y-6">
            <h4 className="font-label-technical text-label-technical text-primary uppercase tracking-widest">Video Editing</h4>
            <ul className="space-y-2 font-body-md text-on-surface-variant">
              <li>Premiere Pro</li>
              <li>DaVinci Resolve</li>
              <li>Avid Media Composer</li>
              <li>Color Grading</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-4 space-y-6">
            <h4 className="font-label-technical text-label-technical text-primary uppercase tracking-widest">Motion Graphics</h4>
            <ul className="space-y-2 font-body-md text-on-surface-variant">
              <li>After Effects</li>
              <li>Cinema 4D</li>
              <li>Blender</li>
              <li>Typography Animation</li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-4 space-y-6">
            <h4 className="font-label-technical text-label-technical text-primary uppercase tracking-widest">Graphic Design</h4>
            <ul className="space-y-2 font-body-md text-on-surface-variant">
              <li>Photoshop</li>
              <li>Illustrator</li>
              <li>Figma</li>
              <li>InDesign</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop py-24 border-t border-outline-variant/10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          <div className="col-span-1 md:col-span-4">
            <p className="font-label-technical text-label-technical text-secondary mb-4">// JOURNEY</p>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase">Experience</h3>
          </div>
        </div>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter border-b border-outline-variant/10 pb-8">
            <div className="col-span-1 md:col-span-3">
              <p className="font-label-technical text-label-technical text-on-surface-variant">2021 — PRESENT</p>
            </div>
            <div className="col-span-1 md:col-span-6">
              <h4 className="font-body-lg text-body-lg text-on-surface font-semibold mb-2">Senior Video Editor</h4>
              <p className="font-body-md text-on-surface-variant">Studio Noir // Lead editor for commercial and narrative content</p>
            </div>
            <div className="col-span-1 md:col-span-3 md:text-right">
              <p className="font-label-technical text-label-technical text-primary uppercase">Full-time</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter border-b border-outline-variant/10 pb-8">
            <div className="col-span-1 md:col-span-3">
              <p className="font-label-technical text-label-technical text-on-surface-variant">2018 — 2021</p>
            </div>
            <div className="col-span-1 md:col-span-6">
              <h4 className="font-body-lg text-body-lg text-on-surface font-semibold mb-2">Freelance Motion Designer</h4>
              <p className="font-body-md text-on-surface-variant">Various Agencies // Developed high-impact motion graphics</p>
            </div>
            <div className="col-span-1 md:col-span-3 md:text-right">
              <p className="font-label-technical text-label-technical text-primary uppercase">Contract</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop py-24 border-t border-outline-variant/10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-16">
          <div className="col-span-1 md:col-span-4">
            <p className="font-label-technical text-label-technical text-secondary mb-4">// ACADEMIC</p>
            <h3 className="font-headline-md text-headline-md text-on-surface uppercase">Education</h3>
          </div>
        </div>
        <div className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter border-b border-outline-variant/10 pb-8">
            <div className="col-span-1 md:col-span-3">
              <p className="font-label-technical text-label-technical text-on-surface-variant">2012 — 2016</p>
            </div>
            <div className="col-span-1 md:col-span-6">
              <h4 className="font-body-lg text-body-lg text-on-surface font-semibold mb-2">BFA in Film & Television</h4>
              <p className="font-body-md text-on-surface-variant">Tisch School of the Arts, NYU // Specialized in Post-Production</p>
            </div>
            <div className="col-span-1 md:col-span-3 md:text-right">
              <p className="font-label-technical text-label-technical text-primary uppercase">Honors</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
