"use client";

import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/lib/data";
import { motion } from "framer-motion";

interface PortfolioCardProps {
  project: Project;
  className?: string;
}

export function PortfolioCard({ project, className }: PortfolioCardProps) {
  return (
    <Link href={`/work/${project.slug}`} className={className}>
      <motion.div
        className="group relative block overflow-hidden bg-surface border border-border rounded-none sm:rounded-sm transition-colors hover:border-primary cursor-pointer aspect-video"
        whileHover="hover"
        initial="initial"
      >
        <motion.div
          variants={{
            initial: { scale: 1 },
            hover: { scale: 1.05 },
          }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/20" />
        </motion.div>

        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
          <motion.div
            variants={{
              initial: { y: 10, opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-bold tracking-tight text-white mb-2">
              {project.title}
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono font-semibold uppercase tracking-widest text-muted">
              <span>{project.role}</span>
              <span>{project.year}</span>
              <span>{project.client}</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
