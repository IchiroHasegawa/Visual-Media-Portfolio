import { SectionContainer } from "@/components/layout/SectionContainer";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProjectVideo } from "@/components/ProjectVideo";

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
        <ProjectVideo thumbnail={project.thumbnail} videoUrl={project.videoUrl} />
      </SectionContainer>
    </div>
  );
}
