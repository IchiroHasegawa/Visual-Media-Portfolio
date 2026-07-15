import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, PlayCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export default function Home() {
  const featuredProjects = portfolioData.projects.filter(p => p.featured);

  return (
    <div className="relative z-10 pt-[120px]">
      <section className="relative min-h-[921px] flex flex-col justify-center px-margin-mobile md:px-margin-desktop mb-32">
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter mt-20">
          <div className="col-span-1 md:col-span-12 pointer-events-none">
            <h1 className="font-display-xl-mobile text-display-xl-mobile md:font-display-xl md:text-display-xl text-on-background uppercase text-overlay-effect whitespace-nowrap overflow-hidden">
              {portfolioData.owner.fullName}
            </h1>
          </div>
          <div className="col-span-1 md:col-start-2 md:col-span-8 lg:col-start-3 lg:col-span-7 mt-16 md:-mt-24 bg-surface/40 backdrop-blur-md p-8 md:p-12 border border-outline-variant/20 rounded-DEFAULT">
            <p className="font-label-technical text-label-technical text-secondary mb-6">// {portfolioData.hero.sectionLabel}</p>
            <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface mb-8">
              {portfolioData.hero.heading}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
              {portfolioData.hero.description} {portfolioData.hero.supportingText}
            </p>
            <Link href={portfolioData.hero.buttonUrl} className="inline-flex items-center justify-center px-8 py-4 bg-inverse-surface text-inverse-on-surface font-label-technical text-label-technical uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-colors duration-300 interactive-element">
              {portfolioData.hero.buttonText} <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
            </Link>
          </div>
          <div className="hidden md:flex col-start-1 col-span-1 absolute left-margin-desktop bottom-0 flex-col space-y-6 pb-24">
            {portfolioData.owner.socialLinks.linkedin && (
              <a href={portfolioData.owner.socialLinks.linkedin} className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary interactive-element flex items-center space-x-2">
                <ArrowUpRight className="w-4 h-4" aria-label="LinkedIn icon" /> <span>LinkedIn</span>
              </a>
            )}
            {portfolioData.owner.socialLinks.vimeo && (
              <a href={portfolioData.owner.socialLinks.vimeo} className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary interactive-element flex items-center space-x-2">
                <PlayCircle className="w-4 h-4" aria-label="Vimeo icon" /> <span>Vimeo</span>
              </a>
            )}
            {portfolioData.owner.socialLinks.instagram && (
              <a href={portfolioData.owner.socialLinks.instagram} className="font-label-technical text-label-technical text-on-surface-variant hover:text-secondary interactive-element flex items-center space-x-2">
                <ArrowUpRight className="w-4 h-4" aria-label="Instagram icon" /> <span>Instagram</span>
              </a>
            )}
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
          {featuredProjects.map((project, index) => (
            <div key={project.id} className={`col-span-1 md:col-span-4 row-span-1 group relative overflow-hidden border border-outline-variant/20 interactive-element bg-surface-container ${index === 0 ? 'md:col-span-12' : ''}`}>
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image src={project.thumbnail} alt={project.title} fill className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-surface/80 backdrop-blur-sm border-t border-outline-variant/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-body-lg text-body-lg text-on-surface font-semibold mb-1">{project.title}</h4>
                <p className="font-label-technical text-label-technical text-on-surface-variant uppercase">{project.type}</p>
              </div>
            </div>
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
