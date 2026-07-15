import Image from "next/image";
import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="flex-grow pt-[120px] pb-32 px-margin-mobile md:px-margin-desktop w-full max-w-[1920px] mx-auto">
      <header className="mb-24 md:mb-32">
        <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-on-surface break-words mb-8 z-10 relative">
          SELECTEDWORKS
        </h1>
        <div className="flex flex-wrap gap-4 border-t border-outline-variant/20 pt-8">
          <button className="active font-label-technical text-label-technical uppercase tracking-widest border border-outline-variant px-6 py-3 hover:bg-on-surface hover:text-surface transition-colors interactive">
            All
          </button>
          <button className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant border border-outline-variant/30 px-6 py-3 hover:border-outline-variant hover:text-on-surface transition-colors interactive">
            Video Editing
          </button>
          <button className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant border border-outline-variant/30 px-6 py-3 hover:border-outline-variant hover:text-on-surface transition-colors interactive">
            Motion Graphics
          </button>
          <button className="font-label-technical text-label-technical uppercase tracking-widest text-on-surface-variant border border-outline-variant/30 px-6 py-3 hover:border-outline-variant hover:text-on-surface transition-colors interactive">
            Graphic Design
          </button>
        </div>
      </header>

      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        <article className="relative group overflow-hidden bg-surface-container border border-outline-variant/10 break-inside-avoid">
          <Link href="/work/type-poster">
            <div className="aspect-[3/4] bg-surface-container-high w-full relative">
              <Image src="https://images.unsplash.com/photo-1549490349-8643362247b5" alt="Type Poster" fill className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-surface-container-highest/90 backdrop-blur-md border-t border-outline-variant/20 z-10 flex flex-col gap-2">
              <span className="font-label-technical text-label-technical text-primary uppercase">Print // Design</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Type Exhibition Poster</h3>
            </div>
          </Link>
        </article>

        <article className="relative group overflow-hidden bg-surface-container border border-outline-variant/10 break-inside-avoid">
          <Link href="/work/tech-explainer">
            <div className="aspect-square bg-surface-container-high w-full relative">
              <Image src="https://images.unsplash.com/photo-1550745165-9bc0b252726f" alt="Tech Explainer" fill className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="material-symbols-outlined text-on-surface text-[64px]">play_circle</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-surface-container-highest/90 backdrop-blur-md border-t border-outline-variant/20 z-10 flex flex-col gap-2">
              <span className="font-label-technical text-label-technical text-primary uppercase">Motion // 2D</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Tech Co. Explainer</h3>
            </div>
          </Link>
        </article>

        <article className="relative group overflow-hidden bg-surface-container border border-outline-variant/10 break-inside-avoid">
          <Link href="/work/doc-short">
            <div className="aspect-[21/9] bg-surface-container-high w-full relative">
              <Image src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4" alt="Documentary Short" fill className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="material-symbols-outlined text-on-surface text-[64px]">play_circle</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-surface-container-highest/90 backdrop-blur-md border-t border-outline-variant/20 z-10 flex flex-col gap-2">
              <span className="font-label-technical text-label-technical text-primary uppercase">Film // Edit</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Documentary Short</h3>
            </div>
          </Link>
        </article>

        <article className="relative group overflow-hidden bg-surface-container border border-outline-variant/10 break-inside-avoid">
          <Link href="/work/sustainable-campaign">
            <div className="aspect-[4/5] bg-surface-container-high w-full relative">
              <Image src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" alt="Sustainable Living Campaign" fill className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-surface-container-highest/90 backdrop-blur-md border-t border-outline-variant/20 z-10 flex flex-col gap-2">
              <span className="font-label-technical text-label-technical text-primary uppercase">Ad // Visuals</span>
              <h3 className="font-headline-md text-headline-md text-on-surface">Sustainable Living Campaign</h3>
            </div>
          </Link>
        </article>
      </div>

      <section className="mt-32 pt-32 border-t border-outline-variant/10 text-center">
        <h2 className="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg text-on-surface mb-8">READY TO COLLABORATE?</h2>
        <Link href="/contact" className="inline-block bg-on-surface text-surface font-label-technical text-label-technical uppercase tracking-widest px-12 py-6 hover:bg-secondary hover:text-on-secondary transition-colors duration-300 interactive">
          Start a Project
        </Link>
      </section>
    </div>
  );
}
