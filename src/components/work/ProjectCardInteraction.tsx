"use client";

import { useState } from "react";
import Link from "next/link";
import { type ProjectData } from "@/data/portfolioData";
import { Lightbox } from "@/components/ui/Lightbox";

interface ProjectCardInteractionProps {
  project: ProjectData;
  children: React.ReactNode;
  className?: string;
}

export function ProjectCardInteraction({ project, children, className }: ProjectCardInteractionProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (project.mediaType === "video") {
    return (
      <Link href={`/work/${project.slug}#project-media`} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <>
      <div 
        role="button"
        tabIndex={0}
        className={className || "cursor-pointer"} 
        onClick={() => setIsLightboxOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setIsLightboxOpen(true);
          }
        }}
      >
        {children}
      </div>
      
      <Lightbox
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        imageSrc={project.fullImage || project.thumbnail}
        title={project.title}
      />
    </>
  );
}
