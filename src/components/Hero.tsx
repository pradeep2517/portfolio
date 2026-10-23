"use client";

import React, { useState } from "react";
import { PRLogo } from "./PRLogo";
import { AtIcon, GithubIcon, LinkedinIcon } from "./SocialIcons";
import { AnimatedHeroTitle } from "./AnimatedHeroTitle";
import { InteractiveHeroPortrait } from "./InteractiveHeroPortrait";
import { PROFILE_DATA } from "@/data/profile";
import {
  Sparkles,
  ArrowUpRight,
  Cpu,
  Zap,
  Activity,
  Layers,
  Terminal,
  MapPin,
  GraduationCap,
  Briefcase,
  FileText
} from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeTab, setActiveTab] = useState<"about" | "tenets" | "benchmarks">("about");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="about" className="relative w-full min-h-[92vh] lg:min-h-screen bg-black overflow-hidden flex flex-col justify-between scroll-mt-16">
      <div id="hero-profile" className="absolute top-0 pointer-events-none" />
      
      {/* Background Split Layout */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
        {/* Left Light Gray Slanted Panel */}
        <div
          className="absolute top-0 left-0 bottom-0 w-[58%] bg-[#d7d7d7] z-0"
          style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0 100%)" }}
        />
        {/* Animated Glowing Slant Line Divider */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <line
            x1="58"
            y1="0"
            x2="43.5"
            y2="100"
            stroke="url(#slantBeamGradient)"
            strokeWidth="0.4"
            className="animate-diagonal-glow"
          />
          <defs>
            <linearGradient id="slantBeamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="70%" stopColor="#a855f7" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
        {/* Right Solid Black Panel */}
        <div className="absolute top-0 right-0 bottom-0 w-[42%] bg-black z-0" />
      </div>

      {/* Mobile/Tablet Background: Light Gray top, Black bottom */}
      <div className="absolute inset-0 pointer-events-none lg:hidden flex flex-col">
        <div className="h-[52%] bg-[#d7d7d7] w-full" />
        <div className="h-[48%] bg-black w-full" />
      </div>

      {/* Executive Dossier Top Header */}
      <div className="relative z-20 w-full px-6 sm:px-12 lg:px-20 pt-20 sm:pt-24 flex items-center justify-between">
        {/* Monogram Logo & Identity on Light Gray */}
        <div className="flex items-center space-x-3">
          <PRLogo className="w-10 h-10 sm:w-11 sm:h-11 transition-transform hover:scale-105" light={false} />
          <div className="hidden sm:flex flex-col">
            <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-neutral-900 leading-tight">
              Pradeep Rajalu
            </span>
            <span className="text-[10px] font-mono text-neutral-600 leading-tight">
              Executive Dossier // AI Systems
            </span>
          </div>
        </div>

        {/* Status Badge & CTA on Dark Panel */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="hidden md:inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[11px] font-mono text-zinc-300 font-semibold uppercase tracking-wider">
              Available for ML/AI Roles
            </span>
          </div>
          <a
            href="#contact"
            className="pill-button-white px-5 sm:px-6 py-2 text-xs font-extrabold tracking-widest inline-block shadow-lg"
          >
            GET IN TOUCH
          </a>
        </div>
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 w-full flex-1 flex flex-col lg:flex-row items-center justify-between px-6 sm:px-12 lg:px-20 pt-8 lg:pt-0">
        
        {/* Left Side: Signature Light Silver Dossier & About Me Integration */}
        <div className="w-full lg:w-[48%] xl:w-[47%] flex flex-col justify-center space-y-4 sm:space-y-5 text-left py-6 lg:py-4 relative z-20">
          
          {/* Main Title & Typewriter Header */}
          <div className="space-y-1">
            <AnimatedHeroTitle />
          </div>

          {/* Interactive Navigation Switcher: 01 // About Me | 02 // Core Tenets | 03 // Benchmarks */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-b border-black/10 pb-2.5">
            <button
              onClick={() => setActiveTab("about")}
              className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center space-x-1.5 ${
                activeTab === "about"
                  ? "bg-black text-white shadow-md scale-[1.02]"
                  : "bg-black/5 hover:bg-black/10 text-neutral-700"
              }`}
            >
              <Sparkles className={`w-3 h-3 ${activeTab === "about" ? "text-cyan-400" : "text-neutral-500"}`} />
              <span>01 // About Me</span>
            </button>
            <button
              onClick={() => setActiveTab("tenets")}
              className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center space-x-1.5 ${
                activeTab === "tenets"
                  ? "bg-black text-white shadow-md scale-[1.02]"
                  : "bg-black/5 hover:bg-black/10 text-neutral-700"
              }`}
            >
              <Cpu className={`w-3 h-3 ${activeTab === "tenets" ? "text-cyan-400" : "text-neutral-500"}`} />
              <span>02 // Core Tenets</span>
            </button>
            <button
              onClick={() => setActiveTab("benchmarks")}
              className={`px-3 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center space-x-1.5 ${
                activeTab === "benchmarks"
                  ? "bg-black text-white shadow-md scale-[1.02]"
                  : "bg-black/5 hover:bg-black/10 text-neutral-700"
              }`}
            >
              <Zap className={`w-3 h-3 ${activeTab === "benchmarks" ? "text-cyan-400" : "text-neutral-500"}`} />
              <span>03 // Benchmarks</span>
            </button>
          </div>

          {/* Dynamic Tab Panels with Minimum Fixed Height to Avoid Layout Shifts */}
          <div className="min-h-[220px] sm:min-h-[210px] flex flex-col justify-center">
            {/* TAB 1: About Me Dossier */}
            {activeTab === "about" && (
              <div className="space-y-3 animate-fade-in">
                <p className="text-xs sm:text-sm text-neutral-900 leading-relaxed font-medium">
                  I specialize in turning advanced deep neural architectures from academic benchmarks into low-latency, scalable production pipelines. My work bridges research models with real-world enterprise infrastructure.
                </p>
                <p className="text-xs text-neutral-700 leading-relaxed">
                  Over the past two years, I have engineered multi-stage computer vision attendance systems with anti-spoofing verification (<strong className="text-black font-bold">95% accuracy</strong>), deployed predictive customer churn pipelines reducing churn by <strong className="text-black font-bold">12%</strong>, automated feature engineering workflows saving <strong className="text-black font-bold">40% data prep time</strong>, and architected interactive real-time decision dashboards.
                </p>

                {/* Micro Telemetry Hardware Badges */}
                <div className="flex flex-wrap gap-2 pt-1">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-[#cecece] border border-white/60 text-[11px] font-mono font-semibold text-neutral-800 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-1px_-1px_3px_rgba(255,255,255,0.7)]">
                    <MapPin className="w-3 h-3 text-cyan-600" />
                    <span>India (Open to Remote & Global Relocation)</span>
                  </div>
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-[#cecece] border border-white/60 text-[11px] font-mono font-semibold text-neutral-800 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-1px_-1px_3px_rgba(255,255,255,0.7)]">
                    <GraduationCap className="w-3 h-3 text-purple-600" />
                    <span>BTech &bull; Arunai Eng College (7.56 CGPA)</span>
                  </div>
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-[#cecece] border border-white/60 text-[11px] font-mono font-semibold text-neutral-800 shadow-[2px_2px_4px_rgba(0,0,0,0.1),-1px_-1px_3px_rgba(255,255,255,0.7)]">
                    <Briefcase className="w-3 h-3 text-emerald-700" />
                    <span>iStudio Technologies &bull; Data Science</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: Core Engineering Tenets */}
            {activeTab === "tenets" && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-center justify-between pb-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 font-bold">
                    Architecture Standards
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500 font-semibold">
                    3 Production Tenets
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {PROFILE_DATA.coreValues.map((val) => (
                    <div
                      key={val.title}
                      className="p-2.5 sm:p-3 rounded-xl bg-[#cecece] shadow-[3px_3px_6px_rgba(0,0,0,0.18),-2px_-2px_5px_rgba(255,255,255,0.85)] border border-white/50 hover:bg-[#c5c5c5] transition-all"
                    >
                      <div className="font-black text-xs text-black flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                        <span>{val.title}</span>
                      </div>
                      <p className="text-[11px] text-neutral-800 mt-0.5 leading-relaxed pl-3.5">
                        {val.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: Key Production Benchmarks */}
            {activeTab === "benchmarks" && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-center justify-between pb-0.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 font-bold">
                    Verified Deployment Metrics
                  </span>
                  <span className="text-[10px] font-mono text-emerald-700 font-bold">
                    &bull; Production Benchmarks
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {/* Metric 1 */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#cecece] shadow-[3px_3px_6px_rgba(0,0,0,0.16),-2px_-2px_5px_rgba(255,255,255,0.85)] border border-white/60">
                    <div className="flex items-center justify-between mb-1">
                      <Zap className="w-3.5 h-3.5 text-cyan-700" />
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-cyan-600/15 text-cyan-900 border border-cyan-700/20">
                        VISION
                      </span>
                    </div>
                    <span className="text-xl sm:text-2xl font-black text-black tracking-tight block">95.2%</span>
                    <span className="text-[10px] font-mono text-neutral-700 block uppercase font-medium">
                      Face Liveness & Biometrics
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#cecece] shadow-[3px_3px_6px_rgba(0,0,0,0.16),-2px_-2px_5px_rgba(255,255,255,0.85)] border border-white/60">
                    <div className="flex items-center justify-between mb-1">
                      <Activity className="w-3.5 h-3.5 text-emerald-700" />
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-600/15 text-emerald-900 border border-emerald-700/20">
                        LATENCY
                      </span>
                    </div>
                    <span className="text-xl sm:text-2xl font-black text-black tracking-tight block">30+ FPS</span>
                    <span className="text-[10px] font-mono text-neutral-700 block uppercase font-medium">
                      TensorRT Edge Throughput
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#cecece] shadow-[3px_3px_6px_rgba(0,0,0,0.16),-2px_-2px_5px_rgba(255,255,255,0.85)] border border-white/60">
                    <div className="flex items-center justify-between mb-1">
                      <Layers className="w-3.5 h-3.5 text-purple-700" />
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-purple-600/15 text-purple-900 border border-purple-700/20">
                        RETENTION
                      </span>
                    </div>
                    <span className="text-xl sm:text-2xl font-black text-black tracking-tight block">-12%</span>
                    <span className="text-[10px] font-mono text-neutral-700 block uppercase font-medium">
                      Customer Churn Reduction
                    </span>
                  </div>

                  {/* Metric 4 */}
                  <div className="p-2.5 sm:p-3 rounded-xl bg-[#cecece] shadow-[3px_3px_6px_rgba(0,0,0,0.16),-2px_-2px_5px_rgba(255,255,255,0.85)] border border-white/60">
                    <div className="flex items-center justify-between mb-1">
                      <Terminal className="w-3.5 h-3.5 text-amber-700" />
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-600/15 text-amber-900 border border-amber-700/20">
                        PIPELINE
                      </span>
                    </div>
                    <span className="text-xl sm:text-2xl font-black text-black tracking-tight block">40%</span>
                    <span className="text-[10px] font-mono text-neutral-700 block uppercase font-medium">
                      Data Prep Time Saved
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Embossed Neumorphic Social Buttons + Actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-black/10">
            <div className="flex items-center space-x-3">
              {/* Email Icon Tile */}
              <button
                onClick={handleCopyEmail}
                title={copiedEmail ? "Email Copied!" : `Copy Email: ${PROFILE_DATA.email}`}
                aria-label="Copy Email address"
                className="embossed-tile w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-black"
              >
                <AtIcon className="w-4 h-4 text-black" />
              </button>

              {/* GitHub Icon Tile */}
              <a
                href={PROFILE_DATA.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                aria-label="GitHub Profile"
                className="embossed-tile w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-black"
              >
                <GithubIcon className="w-4 h-4 text-black" />
              </a>

              {/* LinkedIn Icon Tile */}
              <a
                href={PROFILE_DATA.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
                className="embossed-tile w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center text-black"
              >
                <LinkedinIcon className="w-4 h-4 text-black" />
              </a>

              {copiedEmail && (
                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-200/90 px-2 py-0.5 rounded">
                  Copied!
                </span>
              )}
            </div>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="pill-button-dark px-5 py-2.5 text-xs font-black tracking-wider uppercase inline-flex items-center space-x-2 shadow-lg hover:scale-105 active:scale-95 transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>RESUME / CV</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Right Side: Interactive Animated Portrait with 3D Parallax (Clean View: Biometrics and scan reticle removed for second section) */}
        <div className="w-full lg:w-[48%] flex items-end justify-center lg:justify-end mt-8 lg:mt-0">
          <InteractiveHeroPortrait
            showBadges={false}
            showBiometrics={false}
            showScanReticle={false}
            showScanLine={false}
            showStatusBadge={false}
          />
        </div>

      </div>

      {/* Bottom Sub-Bar: Clean Separator */}
      <div className="relative z-10 w-full py-4 text-center border-t border-neutral-900 bg-black text-[11px] text-neutral-500 font-mono tracking-wider hidden lg:block">
        PRADEEP RAJALU &bull; APPLIED MACHINE LEARNING &bull; PRODUCTION DEEP LEARNING &bull; 6 PRODUCTION PROJECTS
      </div>

    </section>
  );
};
