import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      <SectionContainer className="pt-32 pb-16 border-b border-border">
        <Link href="/work" className="inline-flex items-center text-sm font-mono font-semibold uppercase tracking-widest text-muted hover:text-primary transition-colors mb-12">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Work
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">{project.title}</h1>
            <p className="text-xl text-muted leading-relaxed max-w-3xl">
              {project.description}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 pt-2">
            {project.role && (
              <div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted mb-2">Role</h3>
                <p className="text-lg font-medium">{project.role}</p>
              </div>
            )}
            {project.client && (
              <div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted mb-2">Client</h3>
                <p className="text-lg font-medium">{project.client}</p>
              </div>
            )}
            {project.year && (
              <div>
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-muted mb-2">Year</h3>
                <p className="text-lg font-medium">{project.year}</p>
              </div>
            )}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="bg-surface/30">
        <div className="aspect-video relative bg-black border border-border w-full flex items-center justify-center group overflow-hidden">
          {/* Custom Video Player Mock */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-50 group-hover:opacity-40 transition-opacity" 
            style={{ backgroundImage: `url(${project.thumbnail})` }} 
          />
          <div className="absolute inset-0 bg-black/20" />
          <button className="z-10 w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center text-white hover:bg-primary transition-colors transform hover:scale-105">
            <Play className="w-8 h-8 ml-1" />
          </button>
          
          {/* Player controls */}
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end">
            <div className="w-full h-1 bg-[#262626] rounded-full overflow-hidden">
              <div className="h-full bg-primary w-1/3" />
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
