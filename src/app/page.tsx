import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Link as LinkIcon, PlayCircle, Camera } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { ProjectCardInteraction } from "@/components/work/ProjectCardInteraction";

export default function Home() {
  const featuredProjects = portfolioData.projects.filter(p => p.featured);
  const headingParts = portfolioData.hero.heading.split(portfolioData.hero.highlightedText);
  
  const nameParts = portfolioData.owner.fullName.split(' ');
  const firstName = nameParts[0] || '';
  const surname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

  return (
    <div className="relative z-10 pt-[120px]">
      <section className="relative w-full min-h-[95vh] md:h-[936px] overflow-visible mb-32 max-w-[1920px] mx-auto">
        
        {/* SOCIAL LINKS (Lower left side) */}
        <div className="hidden md:flex absolute left-[6%] bottom-[16%] flex-col space-y-6 z-20">
          {portfolioData.owner.socialLinks.linkedin && (
            <a href={portfolioData.owner.socialLinks.linkedin} className="flex items-center space-x-3 text-on-surface-variant hover:text-white font-label-technical text-[11px] uppercase transition-colors">
              <LinkIcon className="w-4 h-4" /> <span>LinkedIn</span>
            </a>
          )}
          {portfolioData.owner.socialLinks.vimeo && (
            <a href={portfolioData.owner.socialLinks.vimeo} className="flex items-center space-x-3 text-on-surface-variant hover:text-white font-label-technical text-[11px] uppercase transition-colors">
              <PlayCircle className="w-4 h-4" /> <span>Vimeo</span>
            </a>
          )}
          {portfolioData.owner.socialLinks.instagram && (
            <a href={portfolioData.owner.socialLinks.instagram} className="flex items-center space-x-3 text-on-surface-variant hover:text-white font-label-technical text-[11px] uppercase transition-colors">
              <Camera className="w-4 h-4" /> <span>Instagram</span>
            </a>
          )}
        </div>

        {/* HUGE BACKGROUND NAME */}
        <div className="relative md:absolute md:left-[3%] md:top-[24%] w-full md:w-[58%] z-0 pointer-events-none select-none px-margin-mobile md:px-0 mt-20 md:mt-0">
          <h1 className="font-display-xl uppercase whitespace-nowrap text-on-surface text-[60px] leading-[0.9] md:text-[135px] md:leading-[0.85] tracking-tight font-black">
            {(portfolioData.owner.displayNameLines || nameParts).map((line, i) => (
              <div key={i} className="block">{line}</div>
            ))}
          </h1>
        </div>

        {/* HERO DESCRIPTION CONTAINER (Glass Panel) */}
        <div className="relative md:absolute md:left-[19%] md:top-[46%] w-[90%] mx-auto md:mx-0 md:w-[55%] min-h-[480px] bg-[#111111]/40 backdrop-blur-[8px] border border-white/5 border-t-white/10 rounded-none z-10 px-6 py-8 md:pt-[45px] md:pb-[45px] md:pl-[45px] md:pr-[55px] shadow-2xl -mt-12 md:mt-0">
          <p className="font-label-technical text-[#93c5fd] uppercase tracking-widest text-[11px] md:text-[12px] mb-6">
            // {portfolioData.hero.sectionLabel}
          </p>
          <h2 className="font-headline-lg text-white mb-8 text-[32px] leading-[1.2] md:text-[52px] md:leading-[1.15] font-semibold">
            {headingParts[0]}
            {headingParts.length > 1 && (
              <span className="text-[#93c5fd]">{portfolioData.hero.highlightedText}</span>
            )}
            {headingParts.slice(1).join(portfolioData.hero.highlightedText)}
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-12 w-full md:max-w-[85%] text-[16px] leading-[1.5] md:text-[18px] md:leading-[1.6]">
            {portfolioData.hero.description} {portfolioData.hero.supportingText}
          </p>
          <Link 
            href={portfolioData.hero.buttonUrl} 
            className="inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 bg-[#e5e5e5] text-[#111111] font-label-technical text-[12px] md:text-[13px] font-semibold uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-none"
          >
            {portfolioData.hero.buttonText} <ArrowRight className="w-4 h-4 ml-4" aria-hidden="true" />
          </Link>
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
          {featuredProjects.map((project, index) => (
            <ProjectCardInteraction 
              key={project.id} 
              project={project}
              className={`col-span-1 md:col-span-4 row-span-1 group relative overflow-hidden border border-outline-variant/20 interactive-element bg-surface-container block ${index === 0 ? 'md:col-span-12' : ''}`}
            >
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image src={project.thumbnail} alt={project.title} fill sizes={index === 0 ? "100vw" : "(max-width: 768px) 100vw, 33vw"} className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-surface/80 backdrop-blur-sm border-t border-outline-variant/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-body-lg text-body-lg text-on-surface font-semibold mb-1">{project.title}</h4>
                <p className="font-label-technical text-label-technical text-on-surface-variant uppercase">{project.type}</p>
              </div>
            </ProjectCardInteraction>
          ))}
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
          {portfolioData.skills.map((skillGroup) => (
            <div key={skillGroup.category} className="col-span-1 md:col-span-4 space-y-6">
              <h4 className="font-label-technical text-label-technical text-primary uppercase tracking-widest">{skillGroup.category}</h4>
              <ul className="space-y-2 font-body-md text-on-surface-variant">
                {skillGroup.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
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
          {portfolioData.experience.map((exp) => (
            <div key={exp.id} className="grid grid-cols-1 md:grid-cols-12 gap-gutter border-b border-outline-variant/10 pb-8">
              <div className="col-span-1 md:col-span-3">
                <p className="font-label-technical text-label-technical text-on-surface-variant">{exp.period}</p>
              </div>
              <div className="col-span-1 md:col-span-6">
                <h4 className="font-body-lg text-body-lg text-on-surface font-semibold mb-2">{exp.role}</h4>
                <p className="font-body-md text-on-surface-variant">{exp.company} // {exp.description}</p>
              </div>
              <div className="col-span-1 md:col-span-3 md:text-right">
                <p className="font-label-technical text-label-technical text-primary uppercase">{exp.type}</p>
              </div>
            </div>
          ))}
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
          {portfolioData.education.map((edu) => (
            <div key={edu.id} className="grid grid-cols-1 md:grid-cols-12 gap-gutter border-b border-outline-variant/10 pb-8">
              <div className="col-span-1 md:col-span-3">
                <p className="font-label-technical text-label-technical text-on-surface-variant">{edu.period}</p>
              </div>
              <div className="col-span-1 md:col-span-6">
                <h4 className="font-body-lg text-body-lg text-on-surface font-semibold mb-2">{edu.degree}</h4>
                <p className="font-body-md text-on-surface-variant">{edu.school} // {edu.description}</p>
              </div>
              <div className="col-span-1 md:col-span-3 md:text-right">
                {edu.honors && (
                  <p className="font-label-technical text-label-technical text-primary uppercase">{edu.honors}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
