"use client";

import React, { useState, useMemo } from "react";
import { Search, Layers } from "lucide-react";
import { Project, ProjectCategory } from "@/types/portfolio";
import { PROJECTS_DATA } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: ProjectCategory[] = [
    "All",
    "Computer Vision",
    "Natural Language Processing",
    "Deep Learning",
    "MLOps & Pipelines",
    "Business Analytics"
  ];

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        project.title.toLowerCase().includes(query) ||
        project.tagline.toLowerCase().includes(query) ||
        project.summary.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 bg-black text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Background Cybernetic Glow Accents */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Heading matching Hero Signature Badge */}
        <div className="text-center space-y-3 mb-16">
          <div className="section-badge-header">
            PORTFOLIO
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl mx-auto pt-2 uppercase tracking-widest">
            6 END-TO-END MACHINE LEARNING & COMPUTER VISION CASE STUDIES
          </p>
        </div>

        {/* Hero-Style Dual Telemetry Bar */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#0e0e0e] border border-neutral-800 flex flex-wrap items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center space-x-3.5">
            <span className="p-2.5 rounded-xl bg-black border border-neutral-800 text-cyan-400 shadow-inner">
              <Layers className="w-4 h-4" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold text-white block uppercase tracking-wider">
                PRODUCTION CASE STUDIES
              </span>
              <span className="text-[11px] font-mono text-neutral-400 block">
                Trained Models &bull; Benchmarked Accuracy &bull; Reproducible Repositories
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="px-3 py-1 rounded-full bg-black text-emerald-400 border border-emerald-500/30 font-bold inline-flex items-center space-x-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Edge Vision: 30+ FPS</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-black text-purple-400 border border-purple-500/30 font-bold inline-flex items-center space-x-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>Full PyTorch / TF Stacks</span>
            </span>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 p-2 sm:p-3 rounded-2xl bg-black/60 border border-neutral-900 backdrop-blur-md">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 ${
                    isSelected
                      ? "bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)] scale-105"
                      : "bg-[#111] text-neutral-400 hover:text-white border border-neutral-800 hover:border-neutral-600 shadow-[2px_2px_5px_rgba(0,0,0,0.5)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search model, stack, keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full text-xs font-mono bg-[#0c0c0c] border border-neutral-800 text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>

        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={(p) => setActiveProject(p)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 p-8 rounded-3xl border border-dashed border-neutral-800 text-neutral-400 text-xs font-mono bg-[#0c0c0c]">
            <p className="text-sm text-neutral-300 font-semibold mb-1">No case studies match your query</p>
            <p className="text-neutral-500">Try searching for "vision", "churn", "traffic", "deep learning", or clear the filter.</p>
          </div>
        )}

      </div>

      {/* Project Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};

