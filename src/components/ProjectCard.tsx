"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "@/types/portfolio";
import { GithubIcon } from "./SocialIcons";

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onSelectProject,
}) => {
  return (
    <article className="rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-gradient-to-b from-[#141414] via-[#0c0c0c] to-black border border-neutral-800 hover:border-neutral-600 transition-all duration-300 group shadow-2xl hover:shadow-[0_15px_40px_-10px_rgba(56,189,248,0.22)] relative overflow-hidden">
      
      {/* Top Laser Accent on Hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Project Preview Image with Badges & Hover Zoom */}
        <div
          onClick={() => onSelectProject(project)}
          className="relative w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-neutral-900 border border-neutral-800/90 cursor-pointer shadow-lg"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
          />

          {/* Subtle Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

          {/* Floating Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 z-10 pointer-events-none">
            <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-cyan-300 border border-neutral-700/80 shadow-md flex items-center space-x-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{project.category}</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-mono font-black px-3 py-1 rounded-full bg-white text-black shadow-[0_0_12px_rgba(255,255,255,0.4)]">
              {project.accuracyOrMetric}
            </span>
          </div>

          {/* Quick Hover Overlay Indicator */}
          <div className="absolute bottom-3.5 right-3.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-black/95 backdrop-blur-md text-white text-[11px] font-mono font-bold border border-cyan-500/50 shadow-lg">
              <span>EXPLORE</span>
              <ExternalLink className="w-3 h-3 text-cyan-400" />
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          onClick={() => onSelectProject(project)}
          className="text-lg sm:text-xl font-black text-white group-hover:text-cyan-300 transition-colors cursor-pointer leading-snug tracking-tight"
        >
          {project.title}
        </h3>

        {/* Tagline */}
        <p className="text-xs text-neutral-400 mt-2 font-medium line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>

        {/* Summary Description */}
        <p className="text-xs text-neutral-400 mt-3 leading-relaxed line-clamp-3 font-normal">
          {project.summary}
        </p>

        {/* Key Metrics Grid - Tactile Recessed Boxes */}
        <div className="grid grid-cols-2 gap-2.5 my-5 pt-4 border-t border-neutral-800/80">
          {project.metrics.slice(0, 2).map((m) => (
            <div
              key={m.label}
              className="p-3 rounded-xl bg-[#090909] border border-neutral-800/90 shadow-inner group-hover:border-neutral-700 transition-colors"
            >
              <span className="text-[10px] font-mono text-neutral-400 block uppercase tracking-wider font-semibold">
                {m.label}
              </span>
              <span className="font-black text-sm text-white tracking-tight mt-1 block">
                {m.value}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-[#0c0c0c] text-neutral-300 border border-neutral-800 group-hover:border-neutral-700 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-3">
        <button
          onClick={() => onSelectProject(project)}
          className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-cyan-400 transition-colors group/btn"
        >
          <span>Case Study & Architecture</span>
          <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover/btn:text-cyan-400 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-all" />
        </button>

        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} GitHub repository`}
          className="p-2 rounded-xl bg-[#0c0c0c] text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-all shadow-sm"
        >
          <GithubIcon className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
};

