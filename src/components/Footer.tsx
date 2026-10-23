"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { PRLogo } from "./PRLogo";
import { PROFILE_DATA } from "@/data/profile";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#050505] text-white relative border-t border-neutral-900 py-14 overflow-hidden">
      
      {/* Top Subtle Laser Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col items-center justify-center space-y-6 text-center">
        
        {/* Back to Top Tactile Button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          title="Return to top"
          className="p-3.5 rounded-full bg-black hover:bg-neutral-900 text-white transition-all border border-neutral-800 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.35)] hover:-translate-y-1 active:translate-y-0 group"
        >
          <ArrowUp className="w-5 h-5 text-neutral-400 group-hover:text-cyan-400 transition-colors" />
        </button>

        {/* Monogram Logo */}
        <div className="pt-2">
          <PRLogo className="w-10 h-10" light={true} />
        </div>

        {/* Navigation Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <span className="text-neutral-700">&bull;</span>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <span className="text-neutral-700">&bull;</span>
          <a href="#projects" className="hover:text-white transition-colors">Portfolio</a>
          <span className="text-neutral-700">&bull;</span>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <span className="text-neutral-700">&bull;</span>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Social Links Bar */}
        <div className="flex items-center space-x-5 text-xs font-mono tracking-wider pt-1">
          <a
            href={PROFILE_DATA.github}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-cyan-300 transition-colors"
          >
            GITHUB
          </a>
          <span className="text-neutral-700">&bull;</span>
          <a
            href={PROFILE_DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-cyan-300 transition-colors"
          >
            LINKEDIN
          </a>
          <span className="text-neutral-700">&bull;</span>
          <a
            href={`mailto:${PROFILE_DATA.email}`}
            className="text-neutral-400 hover:text-cyan-300 transition-colors"
          >
            EMAIL
          </a>
        </div>

        {/* Copyright & Technical Subtext */}
        <div className="pt-4 space-y-1.5 border-t border-neutral-900/80 w-full max-w-md">
          <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} {PROFILE_DATA.name} &bull; ALL RIGHTS RESERVED
          </p>
          <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider">
            Machine Learning & Vision Architecture &bull; Production Systems
          </p>
        </div>

      </div>
    </footer>
  );
};

