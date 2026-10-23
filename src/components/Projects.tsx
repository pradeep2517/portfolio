"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import { PROJECTS_DATA } from "@/data/projects";
import { Project } from "@/types/portfolio";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Computer Vision",
    "Deep Learning",
    "Natural Language Processing",
    "MLOps & Pipelines",
    "Business Analytics"
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="relative w-full py-28 px-4 sm:px-8 lg:px-12 bg-[#121212] overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-10 w-[600px] h-[350px] bg-purple-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Archive {"//"} 6 Production Case Studies</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">Works</span>.
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-zinc-400 max-w-md text-sm sm:text-base leading-relaxed">
            High-performance machine learning models, computer vision systems, and automated pipelines engineered with production constraints.
          </p>
        </div>

        {/* Category Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => {
            const count =
              cat === "All"
                ? PROJECTS_DATA.length
                : PROJECTS_DATA.filter((p) => p.category === cat).length;
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all flex items-center space-x-2 ${
                  isActive
                    ? "bg-sky-500 text-black font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105"
                    : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                <span>{cat}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-black/20 text-black"
                      : "bg-white/10 text-zinc-400"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 2 Rows x 3 Columns Glass-morphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-[#181818]/70 border border-white/10 hover:border-sky-500/40 backdrop-blur-xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_35px_rgba(56,189,248,0.15)] hover:-translate-y-1"
            >
              {/* Subtle Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-zinc-400 font-bold px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                      0{idx + 1} {"//"} {project.category}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono font-bold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                    {project.accuracyOrMetric}
                  </span>
                </div>

                {/* Project Image Container */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="relative w-full aspect-video rounded-xl overflow-hidden mb-5 cursor-pointer bg-zinc-900 border border-white/5"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating View Deep Dive Pill */}
                  <div className="absolute bottom-3 right-3 flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/75 border border-white/20 backdrop-blur-md text-[11px] font-mono text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3 h-3 text-sky-400" />
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3
                  onClick={() => setSelectedProject(project)}
                  className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors cursor-pointer leading-snug line-clamp-2 min-h-[3.25rem]"
                >
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed line-clamp-2 min-h-[2.5rem]">
                  {project.tagline}
                </p>

                {/* Key Metrics Strip */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    {project.metrics.slice(0, 2).map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/5"
                      >
                        <div className="text-xs sm:text-sm font-bold font-mono text-zinc-200">
                          {m.value}
                        </div>
                        <div className="text-[9px] font-mono text-zinc-500 uppercase truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Actions & Tech Tags */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1 max-w-[160px] sm:max-w-[190px]">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-white/5 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-1 py-0.5 text-[10px] font-mono text-zinc-500">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-1.5 shrink-0">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-colors"
                    aria-label="View on GitHub"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/30 text-sky-400 font-mono text-[11px] font-semibold transition-all hover:border-sky-500/60"
                  >
                    <span>Deep Dive</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
