"use client";

import React, { useState, useMemo } from "react";
import {
  Brain,
  Eye,
  Sparkles,
  Layers,
  Cpu,
  Code2,
  Terminal,
  CheckCircle2,
  Search,
  X
} from "lucide-react";
import { SKILLS_DATA } from "@/data/profile";
import { SkillLogo } from "./SkillLogo";

export const SkillsSection: React.FC = () => {
  const [levelFilter, setLevelFilter] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  const getGroupIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes("deep learning") || lower.includes("neural")) {
      return <Brain className="w-5 h-5 text-emerald-400" />;
    }
    if (lower.includes("computer vision") || lower.includes("biometrics")) {
      return <Eye className="w-5 h-5 text-cyan-400" />;
    }
    if (lower.includes("llm") || lower.includes("generative")) {
      return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
    if (lower.includes("natural language") || lower.includes("nlp")) {
      return <Layers className="w-5 h-5 text-sky-400" />;
    }
    if (lower.includes("mlops") || lower.includes("infrastructure")) {
      return <Cpu className="w-5 h-5 text-amber-400" />;
    }
    return <Code2 className="w-5 h-5 text-pink-400" />;
  };

  const getGroupAccent = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes("deep learning") || lower.includes("neural")) {
      return "border-emerald-500/30 group-hover:border-emerald-500/60";
    }
    if (lower.includes("computer vision") || lower.includes("biometrics")) {
      return "border-cyan-500/30 group-hover:border-cyan-500/60";
    }
    if (lower.includes("llm") || lower.includes("generative")) {
      return "border-purple-500/30 group-hover:border-purple-500/60";
    }
    if (lower.includes("natural language") || lower.includes("nlp")) {
      return "border-sky-500/30 group-hover:border-sky-500/60";
    }
    if (lower.includes("mlops") || lower.includes("infrastructure")) {
      return "border-amber-500/30 group-hover:border-amber-500/60";
    }
    return "border-pink-500/30 group-hover:border-pink-500/60";
  };

  // Compute total counts
  const allSkills = useMemo(() => SKILLS_DATA.flatMap((g) => g.skills), []);
  const advancedCount = useMemo(() => allSkills.filter((s) => s.level === "Advanced").length, [allSkills]);
  const proficientCount = useMemo(() => allSkills.filter((s) => s.level !== "Advanced").length, [allSkills]);

  // Filter groups and skills
  const filteredGroups = useMemo(() => {
    return SKILLS_DATA.map((group) => {
      const isCategoryMatch = selectedCategory === "All" || group.title === selectedCategory;
      if (!isCategoryMatch) {
        return { ...group, skills: [] };
      }

      const matchingSkills = group.skills.filter((skill) => {
        const matchesLevel =
          levelFilter === "All" ||
          (levelFilter === "Advanced" ? skill.level === "Advanced" : skill.level !== "Advanced");

        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          q === "" ||
          skill.name.toLowerCase().includes(q) ||
          group.title.toLowerCase().includes(q);

        return matchesLevel && matchesSearch;
      });

      return {
        ...group,
        skills: matchingSkills
      };
    }).filter((group) => group.skills.length > 0 || (searchQuery === "" && levelFilter === "All" && selectedCategory === "All"));
  }, [levelFilter, selectedCategory, searchQuery]);

  return (
    <section id="skills" className="py-24 bg-black text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Background Cybernetic Glow */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="section-badge-header">
            SKILLS
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl mx-auto pt-2 uppercase tracking-widest">
            CORE MACHINE LEARNING FRAMEWORKS & PRODUCTION INFRASTRUCTURE
          </p>
        </div>

        {/* Interactive Action Control & Telemetry Bar */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#0e0e0e] border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center space-x-3 w-full md:w-auto">
            <span className="p-2.5 rounded-xl bg-black border border-neutral-800 text-cyan-400 shadow-inner">
              <Terminal className="w-4 h-4" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold text-white block uppercase tracking-wider">
                COMPETENCY MATRIX & STACK
              </span>
              <span className="text-[11px] font-mono text-neutral-400 block">
                {allSkills.length} Verified Production ML / AI Tools
              </span>
            </div>
          </div>

          {/* Action Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
            <button
              type="button"
              onClick={() => setLevelFilter("All")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center space-x-1.5 ${
                levelFilter === "All"
                  ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105"
                  : "bg-black/60 text-zinc-400 hover:text-white border border-neutral-800 hover:border-neutral-700"
              }`}
            >
              <span>All Levels</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10">{allSkills.length}</span>
            </button>

            <button
              type="button"
              onClick={() => setLevelFilter("Advanced")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center space-x-1.5 ${
                levelFilter === "Advanced"
                  ? "bg-emerald-400 text-black font-bold shadow-[0_0_20px_rgba(52,211,153,0.5)] scale-105"
                  : "bg-black/60 text-emerald-400/80 hover:text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Advanced: {advancedCount}</span>
            </button>

            <button
              type="button"
              onClick={() => setLevelFilter("Proficient")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center space-x-1.5 ${
                levelFilter === "Proficient"
                  ? "bg-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(34,211,238,0.5)] scale-105"
                  : "bg-black/60 text-cyan-400/80 hover:text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>Proficient: {proficientCount}</span>
            </button>

            {/* Quick Search Input */}
            <div className="relative ml-0 sm:ml-2 w-full sm:w-56 mt-2 sm:mt-0">
              <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search tools & stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-8 pr-7 py-1.5 rounded-full text-xs font-mono bg-black/80 border border-neutral-800 text-white placeholder:text-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all flex items-center space-x-2 ${
              selectedCategory === "All"
                ? "bg-sky-500 text-black font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105"
                : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            <span>All Domains</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-black/20 font-bold">6</span>
          </button>
          {SKILLS_DATA.map((group) => {
            const isActive = selectedCategory === group.title;
            return (
              <button
                key={group.title}
                type="button"
                onClick={() => setSelectedCategory(group.title)}
                className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all flex items-center space-x-2 ${
                  isActive
                    ? "bg-sky-500 text-black font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105"
                    : "bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10"
                }`}
              >
                <span>{group.title}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? "bg-black/20 text-black" : "bg-white/10 text-zinc-400"}`}>
                  {group.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3 Columns x 2 Rows Skill Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredGroups.map((group) => (
            <div
              key={group.title}
              className={`p-5 sm:p-6 rounded-3xl bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-black border border-neutral-800 flex flex-col justify-between shadow-2xl relative overflow-hidden group transition-all duration-300 hover:shadow-[0_10px_35px_-10px_rgba(56,189,248,0.2)] ${getGroupAccent(group.title)}`}
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-3.5 mb-5 border-b border-neutral-800">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-xl bg-black border border-neutral-800 shadow-inner group-hover:scale-105 transition-transform">
                      {getGroupIcon(group.title)}
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                        {group.title}
                      </h3>
                      <p className="text-[10px] text-neutral-400 font-mono hidden sm:block mt-0.5 line-clamp-1">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-white font-bold px-2.5 py-0.5 rounded-full bg-neutral-900 border border-neutral-700 flex-shrink-0 shadow-sm">
                    {group.skills.length} Tools
                  </span>
                </div>

                {/* Skills Grid with Tactile Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {group.skills.map((skill) => {
                    const isSelected = activeSkill === skill.name;
                    return (
                      <button
                        key={skill.name}
                        type="button"
                        onClick={() => setActiveSkill(isSelected ? null : skill.name)}
                        className={`group/skill text-left p-2.5 rounded-xl border transition-all duration-200 flex items-center space-x-2.5 shadow-sm cursor-pointer ${
                          isSelected
                            ? "bg-cyan-500/10 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.35)] scale-[1.02]"
                            : "bg-black/90 border-neutral-800/90 hover:border-cyan-500/60 hover:bg-neutral-900/80 hover:shadow-[0_0_12px_rgba(56,189,248,0.2)]"
                        }`}
                      >
                        {/* Logo Container */}
                        <div className="w-8 h-8 rounded-lg bg-[#151515] border border-neutral-800 flex items-center justify-center p-1.5 flex-shrink-0 group-hover/skill:scale-110 group-hover/skill:border-cyan-400/50 transition-all duration-200">
                          <SkillLogo name={skill.name} className="w-4 h-4" />
                        </div>

                        {/* Text details */}
                        <div className="flex-1 min-w-0">
                          <span
                            title={skill.name}
                            className={`text-[11px] font-bold transition-colors truncate block ${
                              isSelected ? "text-cyan-300" : "text-white group-hover/skill:text-cyan-300"
                            }`}
                          >
                            {skill.name}
                          </span>
                          <div className="flex items-center space-x-1.5 mt-0.5">
                            <span
                              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                                skill.level === "Advanced"
                                  ? "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                                  : "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                              }`}
                            />
                            <span className="text-[9px] font-mono text-neutral-400">
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Validation Ribbon */}
              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span className="flex items-center space-x-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Production Ready</span>
                </span>
                <span className="text-neutral-500 uppercase tracking-widest text-[9px]">
                  Enterprise Validated
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Inspection Feedback Drawer / HUD Notification */}
        {activeSkill && (
          <div className="mt-8 p-4 rounded-2xl bg-[#0c131a] border border-cyan-500/40 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
            <div className="flex items-center space-x-3.5">
              <div className="w-10 h-10 rounded-xl bg-black/60 border border-cyan-500/30 flex items-center justify-center p-2">
                <SkillLogo name={activeSkill} className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-mono font-bold text-cyan-300 uppercase">
                    ACTIVE INSPECTION: {activeSkill}
                  </span>
                  <span className="px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[9px] border border-emerald-500/30">
                    VERIFIED STACK
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Integrated across production pipelines with verified benchmarks, automated tests, and deployment containers.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <a
                href="#projects"
                className="px-4 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]"
              >
                View In Projects
              </a>
              <button
                type="button"
                onClick={() => setActiveSkill(null)}
                className="p-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
