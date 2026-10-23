"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Building2,
  GraduationCap,
  Award,
  MapPin,
  Sparkles,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight
} from "lucide-react";
import {
  WORK_EXPERIENCE_DATA,
  INTERNSHIP_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS
} from "@/data/profile";

export const ExperienceSection: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<"all" | "experience" | "education">("all");

  const totalExperienceCount = WORK_EXPERIENCE_DATA.length + INTERNSHIP_DATA.length;
  const totalEducationCount = EDUCATION_DATA.length + CERTIFICATIONS.length;

  return (
    <section id="experience" className="py-24 bg-black text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Background Cybernetic Glow Accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-3 mb-12">
          <div className="section-badge-header">
            EXPERIENCE & EDUCATION
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl mx-auto pt-2 uppercase tracking-widest">
            APPLIED ENGINEERING ROLES, ACADEMIC RESEARCH & ACCREDITED CREDENTIALS
          </p>
        </div>

        {/* Hero-Style Telemetry & Track Switcher Bar */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#0e0e0e] border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl">
          <div className="flex items-center space-x-3.5 w-full md:w-auto">
            <span className="p-2.5 rounded-xl bg-black border border-neutral-800 text-emerald-400 shadow-inner">
              <Briefcase className="w-4 h-4" />
            </span>
            <div>
              <span className="text-xs font-mono font-bold text-white block uppercase tracking-wider">
                CAREER & ACADEMIC TRAJECTORY
              </span>
              <span className="text-[11px] font-mono text-neutral-400 block">
                Production Engineering &bull; Corporate Research &bull; Accredited Degree
              </span>
            </div>
          </div>

          {/* Interactive Track Switcher */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto justify-start md:justify-end">
            <button
              type="button"
              onClick={() => setActiveTrack("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center space-x-2 ${
                activeTrack === "all"
                  ? "bg-white text-black font-bold shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105"
                  : "bg-black/60 text-zinc-400 hover:text-white border border-neutral-800 hover:border-neutral-700"
              }`}
            >
              <span>All Tracks</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-white/10 font-bold">
                {totalExperienceCount + totalEducationCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTrack("experience")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center space-x-2 ${
                activeTrack === "experience"
                  ? "bg-emerald-400 text-black font-bold shadow-[0_0_20px_rgba(52,211,153,0.5)] scale-105"
                  : "bg-black/60 text-emerald-400/80 hover:text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Industry Experience</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-500/20 font-bold">
                {totalExperienceCount}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTrack("education")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all flex items-center space-x-2 ${
                activeTrack === "education"
                  ? "bg-purple-400 text-black font-bold shadow-[0_0_20px_rgba(192,132,252,0.5)] scale-105"
                  : "bg-black/60 text-purple-400/80 hover:text-purple-400 border border-purple-500/20 hover:border-purple-500/40"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
              <span>Education & Certs</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-purple-500/20 font-bold">
                {totalEducationCount}
              </span>
            </button>
          </div>
        </div>

        {/* Professional Dual-Track Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 text-left items-start">
          
          {/* TRACK 1: Applied Industry Experience */}
          {(activeTrack === "all" || activeTrack === "experience") && (
            <div className="space-y-6">
              
              {/* Column Track Header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center space-x-2.5">
                  <span className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <Briefcase className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                      01 // Industry Experience
                    </h3>
                    <p className="text-[11px] text-neutral-400 font-mono">
                      Full-time engineering & corporate research
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                  2 Verified Roles
                </span>
              </div>

              {/* Work Experience Cards */}
              <div className="space-y-6">
                
                {/* 1. iStudio Technologies */}
                {WORK_EXPERIENCE_DATA.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-black border border-emerald-500/30 hover:border-emerald-500/60 shadow-2xl hover:shadow-[0_12px_40px_-10px_rgba(16,185,129,0.2)] transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Top Laser Accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent pointer-events-none" />

                    {/* Header: Company Avatar & Role Details */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start space-x-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-black border border-emerald-500/30 flex items-center justify-center font-mono font-black text-sm text-emerald-400 shadow-inner group-hover:scale-105 transition-transform shrink-0">
                          iS
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-base sm:text-lg font-black text-white group-hover:text-emerald-300 transition-colors">
                              {exp.role}
                            </h4>
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 inline-flex items-center space-x-1">
                              <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                              <span>Active</span>
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-neutral-300 mt-0.5">
                            {exp.organization} &bull; <span className="text-neutral-400 font-mono text-xs">{exp.type}</span>
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-black text-zinc-300 border border-neutral-800 shadow-sm block">
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-400 inline-flex items-center space-x-1 mt-1.5">
                          <MapPin className="w-3 h-3 text-neutral-500" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <span className="text-emerald-400 font-bold mt-0.5 shrink-0">&bull;</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Applied Tech Stack */}
                    <div className="mt-6 pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[10px] font-mono uppercase text-neutral-500 mr-1">Stack:</span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black text-neutral-300 border border-neutral-800 group-hover:border-neutral-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* 2. IBM Corporate Internship */}
                {INTERNSHIP_DATA.map((exp) => (
                  <div
                    key={exp.id}
                    className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-black border border-cyan-500/30 hover:border-cyan-500/60 shadow-2xl hover:shadow-[0_12px_40px_-10px_rgba(56,189,248,0.2)] transition-all duration-300 relative overflow-hidden group"
                  >
                    {/* Top Laser Accent */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none" />

                    {/* Header: Company Avatar & Role Details */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start space-x-3.5">
                        <div className="w-12 h-12 rounded-2xl bg-black border border-cyan-500/30 flex items-center justify-center font-mono font-black text-sm text-cyan-400 shadow-inner group-hover:scale-105 transition-transform shrink-0">
                          IBM
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h4 className="text-base sm:text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
                              {exp.role}
                            </h4>
                            <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                              Corporate AI
                            </span>
                          </div>
                          <p className="text-xs sm:text-sm font-bold text-cyan-300 mt-0.5">
                            {exp.organization} &bull; <span className="text-neutral-400 font-mono text-xs">{exp.type}</span>
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-black text-zinc-300 border border-neutral-800 shadow-sm block">
                          {exp.period}
                        </span>
                        <span className="text-[11px] font-mono text-neutral-400 inline-flex items-center space-x-1 mt-1.5">
                          <MapPin className="w-3 h-3 text-neutral-500" />
                          <span>{exp.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points with Key Empirical Impact Highlights */}
                    <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5">
                          <span className="text-cyan-400 font-bold mt-0.5 shrink-0">&bull;</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Applied Tech Stack */}
                    <div className="mt-6 pt-4 border-t border-neutral-800/80 flex flex-wrap gap-1.5 items-center">
                      <span className="text-[10px] font-mono uppercase text-neutral-500 mr-1">Stack:</span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black text-neutral-300 border border-neutral-800 group-hover:border-neutral-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

              </div>
            </div>
          )}

          {/* TRACK 2: Academic Foundations & Certifications */}
          {(activeTrack === "all" || activeTrack === "education") && (
            <div className="space-y-6">
              
              {/* Column Track Header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
                <div className="flex items-center space-x-2.5">
                  <span className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
                    <GraduationCap className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">
                      02 // Academic & Credentials
                    </h3>
                    <p className="text-[11px] text-neutral-400 font-mono">
                      Accredited degree & verified global certificates
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full uppercase tracking-wider font-bold">
                  1 Degree &bull; 4 Certs
                </span>
              </div>

              {/* Education Block */}
              {EDUCATION_DATA.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-gradient-to-b from-[#141414] via-[#0d0d0d] to-black border border-purple-500/30 hover:border-purple-500/60 shadow-2xl relative overflow-hidden group transition-all duration-300"
                >
                  {/* Top Laser Accent */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent pointer-events-none" />

                  {/* Header: Institution Avatar & Degree Details */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start space-x-3.5">
                      <div className="w-12 h-12 rounded-2xl bg-black border border-purple-500/30 flex items-center justify-center font-mono font-black text-sm text-purple-400 shadow-inner group-hover:scale-105 transition-transform shrink-0">
                        AEC
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg font-black text-white group-hover:text-purple-300 transition-colors">
                          {edu.degree}
                        </h4>
                        <p className="text-xs sm:text-sm font-semibold text-neutral-300 mt-0.5">
                          {edu.institution}
                        </p>
                        <div className="mt-2 inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                          <Sparkles className="w-3 h-3 text-purple-400" />
                          <span>{edu.gradeOrSpecialization}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-black text-zinc-300 border border-neutral-800 shadow-sm block">
                        {edu.period}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 inline-flex items-center space-x-1 mt-1.5">
                        <MapPin className="w-3 h-3 text-neutral-500" />
                        <span>{edu.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="mt-5 space-y-2 text-xs text-neutral-300 pt-3 border-t border-neutral-800/80 leading-relaxed">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="text-purple-400 font-bold mt-0.5 shrink-0">&bull;</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technical Focus Areas */}
                  <div className="mt-4 pt-3 border-t border-neutral-800/80 flex flex-wrap gap-1.5 items-center">
                    <span className="text-[10px] font-mono uppercase text-neutral-500 mr-1">Focus:</span>
                    {["Deep Neural Nets", "Intelligent Robotics", "Computer Vision", "Cloud Infrastructure"].map((f) => (
                      <span
                        key={f}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-black text-neutral-300 border border-neutral-800"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              {/* Certifications Matrix Header */}
              <div className="pt-2">
                <div className="flex items-center justify-between pb-2 mb-4">
                  <h4 className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-widest flex items-center space-x-2">
                    <Award className="w-4 h-4 text-amber-400" />
                    <span>Specialized Global Certifications</span>
                  </h4>
                  <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>

                {/* 2x2 Certifications Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {CERTIFICATIONS.map((cert) => (
                    <div
                      key={cert.title}
                      className="p-4 rounded-2xl bg-gradient-to-b from-[#131313] to-black border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between shadow-lg group hover:-translate-y-0.5"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                            {cert.issuer}
                          </span>
                          <span className="text-[10px] font-mono text-neutral-500">
                            {cert.date}
                          </span>
                        </div>

                        <h5 className="text-xs sm:text-sm font-black text-white group-hover:text-amber-300 transition-colors pt-1">
                          {cert.title}
                        </h5>
                        <p className="text-[11px] text-neutral-400 leading-snug line-clamp-2">
                          {cert.focus}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-neutral-900 flex items-center justify-between text-[10px] font-mono text-neutral-500">
                        <span className="flex items-center space-x-1 text-emerald-400">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Credential Validated</span>
                        </span>
                        <Award className="w-3.5 h-3.5 text-neutral-600 group-hover:text-amber-400 transition-colors" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};


