import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { ProjectCardInteraction } from "@/components/work/ProjectCardInteraction";

export default function WorkPage() {
  return (
    <div className="bg-[#FAF9F6] text-gray-900 min-h-screen w-full flex flex-col items-center">
      <div className="flex-grow pt-[120px] pb-32 px-margin-mobile md:px-margin-desktop w-full max-w-[1920px]">
        <header className="mb-24 md:mb-32">
          <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl text-gray-200 break-words mb-8 z-10 relative">
            SELECTEDWORKS
          </h1>
          <div className="flex flex-wrap gap-4 border-t border-gray-200 pt-8">
            <button className="active font-label-technical text-label-technical uppercase tracking-widest bg-transparent border border-gray-400 text-gray-900 px-6 py-3 hover:bg-gray-100 transition-colors interactive">
              All
            </button>
            <button className="font-label-technical text-label-technical uppercase tracking-widest text-gray-600 bg-transparent border border-gray-300 px-6 py-3 hover:border-gray-400 hover:text-gray-900 transition-colors interactive">
              Video Editing
            </button>
            <button className="font-label-technical text-label-technical uppercase tracking-widest text-gray-600 bg-transparent border border-gray-300 px-6 py-3 hover:border-gray-400 hover:text-gray-900 transition-colors interactive">
              Motion Graphics
            </button>
            <button className="font-label-technical text-label-technical uppercase tracking-widest text-gray-600 bg-transparent border border-gray-300 px-6 py-3 hover:border-gray-400 hover:text-gray-900 transition-colors interactive">
              Graphic Design
            </button>
          </div>
        </header>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioData.projects.map((project) => (
            <article key={project.id} className="relative group overflow-hidden border border-gray-200 break-inside-avoid">
              <ProjectCardInteraction project={project} className="block">
                <div className={`${project.aspectRatio} bg-gray-100 w-full relative`}>
                  <Image src={project.thumbnail} alt={project.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                  {project.mediaType === "video" ? (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      <PlayCircle className="w-16 h-16 text-white drop-shadow-md" aria-hidden="true" />
                    </div>
                  ) : null}
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 bg-white/90 backdrop-blur-md border-t border-gray-200 z-10 flex flex-col gap-2">
                  <span className="font-label-technical text-label-technical text-gray-500 uppercase">{project.type}</span>
                  <h3 className="font-headline-md text-headline-md text-gray-900">{project.title}</h3>
                </div>
              </ProjectCardInteraction>
            </article>
          ))}
        </div>

        <section className="mt-32 pt-32 border-t border-gray-200 text-center">
          <h2 className="font-display-xl-mobile md:font-headline-lg text-display-xl-mobile md:text-headline-lg text-gray-900 mb-8">READY TO COLLABORATE?</h2>
          <Link href="/contact" className="inline-block bg-gray-900 text-white font-label-technical text-label-technical uppercase tracking-widest px-12 py-6 hover:bg-gray-700 transition-colors duration-300 interactive">
            Start a Project
          </Link>
        </section>
      </div>
    </div>
  );
}
