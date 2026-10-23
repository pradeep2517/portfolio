"use client";

import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
  Sparkles,
  Zap,
  Cpu,
  ShieldCheck,
  Copy,
  Check,
  Activity,
  Layers,
  Terminal
} from "lucide-react";
import { PROFILE_DATA } from "@/data/profile";

interface AboutProps {
  onOpenResume: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PROFILE_DATA.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden border-t border-neutral-900">
      
      {/* Background Cybernetic Glow Accents */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Heading matching Hero Signature Badge */}
        <div className="text-center space-y-3 mb-16">
          <div className="section-badge-header">
            ABOUT ME
          </div>
          <p className="text-xs sm:text-sm font-mono text-neutral-400 max-w-xl mx-auto pt-2 uppercase tracking-widest">
            ENGINEERING PRODUCTION-GRADE ARTIFICIAL INTELLIGENCE & COMPUTER VISION
          </p>
        </div>

        {/* Unified Dual-Tone Master Container (Cohesive Hardware Shell) */}
        <div className="rounded-[32px] border border-neutral-800 bg-[#0c0c0c] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_45px_rgba(56,189,248,0.12)] overflow-hidden relative">
          
          {/* Top Cybernetic Laser Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 via-purple-400 to-transparent pointer-events-none z-30" />

          {/* Vertical Laser Divider Beam between Silver & Obsidian panels on Desktop */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[58.333333%] w-[2px] bg-gradient-to-b from-transparent via-cyan-400 via-purple-400 to-transparent shadow-[0_0_14px_rgba(56,189,248,0.8)] pointer-events-none z-30" />

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative">
            
            {/* ================= LEFT COLUMN: Signature Editorial Light Silver Dossier ================= */}
            <div className="lg:col-span-7 bg-gradient-to-br from-[#e2e2e2] via-[#d6d6d6] to-[#c7c7c7] text-black p-8 sm:p-12 flex flex-col justify-between relative group">
              
              {/* Corner Decorative Tech Marks */}
              <div className="flex items-center justify-between pb-6 border-b border-black/10">
                <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-black text-white tracking-wider uppercase shadow-md">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Applied ML & Vision Specialist</span>
                </span>
                <span className="text-[10px] font-mono font-extrabold tracking-widest text-neutral-700 uppercase">
                  01 // DOSSIER
                </span>
              </div>

              <div className="space-y-6 py-6">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-black leading-tight">
                    IT IS A PLEASURE TO MEET YOU.
                  </h3>
                  <p className="text-xs sm:text-sm font-mono font-bold text-neutral-700 uppercase tracking-wider mt-1.5">
                    Pradeep Rajalu &bull; Machine Learning & Vision Systems Engineer
                  </p>
                </div>

                <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-medium">
                  I specialize in turning advanced deep neural architectures from academic benchmarks into low-latency, scalable production pipelines. My work bridges research models with real-world enterprise infrastructure.
                </p>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  Over the past two years, I have engineered multi-stage computer vision attendance systems with anti-spoofing verification (<strong>95% accuracy</strong>), deployed predictive customer churn pipelines reducing churn by <strong>12%</strong>, automated feature engineering workflows saving <strong>40% data prep time</strong>, and architected interactive real-time decision dashboards.
                </p>

                {/* Core Engineering Tenets (Tactile Embossed Neumorphic Tiles) */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-mono font-extrabold uppercase tracking-wider text-neutral-800 flex items-center space-x-2">
                      <Cpu className="w-3.5 h-3.5 text-black" />
                      <span>Core Engineering Tenets</span>
                    </h4>
                    <span className="text-[10px] font-mono text-neutral-600 font-semibold uppercase">
                      Architecture Standards
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {PROFILE_DATA.coreValues.map((val) => (
                      <div
                        key={val.title}
                        className="p-3.5 sm:p-4 rounded-xl bg-[#cecece] shadow-[3px_3px_6px_rgba(0,0,0,0.18),-2px_-2px_5px_rgba(255,255,255,0.85)] border border-white/50 hover:bg-[#c5c5c5] transition-all"
                      >
                        <div className="font-black text-xs sm:text-sm text-black flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                          <span>{val.title}</span>
                        </div>
                        <p className="text-xs text-neutral-800 mt-1 leading-relaxed pl-3.5">
                          {val.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="pt-6 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={onOpenResume}
                  className="pill-button-dark px-7 py-3 text-xs font-black tracking-wider uppercase inline-flex items-center space-x-2 shadow-xl hover:scale-105 active:scale-95 transition-all"
                >
                  <span>VIEW FULL RESUME / CV</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                </button>

                <a
                  href="#contact"
                  className="text-xs font-mono font-bold uppercase tracking-wider text-black hover:underline underline-offset-4 flex items-center space-x-1"
                >
                  <span>INITIATE CONTACT</span>
                  <span className="text-base">&rarr;</span>
                </a>
              </div>

            </div>

            {/* ================= RIGHT COLUMN: Signature Obsidian Cybernetic Telemetry HUD ================= */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#131313] via-[#0b0b0b] to-[#040404] p-8 sm:p-10 flex flex-col justify-between text-white relative">
              
              {/* Subtle Ambient Laser Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* HUD Header */}
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold tracking-widest text-white uppercase">
                    SYSTEM SPECIFICATIONS
                  </span>
                </div>
                <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* 4 Interactive Visual Telemetry Metric Cards */}
              <div className="py-6 space-y-4">
                <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-semibold">
                  Key Production Benchmarks
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Metric 1 */}
                  <div className="p-3.5 rounded-2xl bg-[#090909] border border-neutral-800 hover:border-cyan-500/50 transition-colors shadow-inner group/card">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="p-1.5 rounded-lg bg-black text-cyan-400 border border-neutral-800">
                        <Zap className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                        VISION
                      </span>
                    </div>
                    <span className="text-2xl font-black text-white tracking-tight block">95.2%</span>
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase mt-0.5">
                      Face Liveness & Biometrics
                    </span>
                  </div>

                  {/* Metric 2 */}
                  <div className="p-3.5 rounded-2xl bg-[#090909] border border-neutral-800 hover:border-emerald-500/50 transition-colors shadow-inner group/card">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="p-1.5 rounded-lg bg-black text-emerald-400 border border-neutral-800">
                        <Activity className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                        LATENCY
                      </span>
                    </div>
                    <span className="text-2xl font-black text-white tracking-tight block">30+ FPS</span>
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase mt-0.5">
                      TensorRT Edge Throughput
                    </span>
                  </div>

                  {/* Metric 3 */}
                  <div className="p-3.5 rounded-2xl bg-[#090909] border border-neutral-800 hover:border-purple-500/50 transition-colors shadow-inner group/card">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="p-1.5 rounded-lg bg-black text-purple-400 border border-neutral-800">
                        <Layers className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20 font-bold">
                        RETENTION
                      </span>
                    </div>
                    <span className="text-2xl font-black text-white tracking-tight block">-12%</span>
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase mt-0.5">
                      Customer Churn Reduction
                    </span>
                  </div>

                  {/* Metric 4 */}
                  <div className="p-3.5 rounded-2xl bg-[#090909] border border-neutral-800 hover:border-amber-500/50 transition-colors shadow-inner group/card">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="p-1.5 rounded-lg bg-black text-amber-400 border border-neutral-800">
                        <Terminal className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                        PIPELINE
                      </span>
                    </div>
                    <span className="text-2xl font-black text-white tracking-tight block">40%</span>
                    <span className="text-[10px] font-mono text-neutral-400 block uppercase mt-0.5">
                      Data Prep Time Saved
                    </span>
                  </div>
                </div>

                {/* Verified Credentials Specs */}
                <div className="space-y-3 pt-2">
                  
                  {/* Location & Relocation */}
                  <div className="p-3 rounded-xl bg-[#080808] border border-neutral-800/90 flex items-center space-x-3 text-xs font-mono">
                    <span className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-cyan-400 shrink-0">
                      <MapPin className="w-3.5 h-3.5" />
                    </span>
                    <div className="truncate">
                      <span className="text-[10px] uppercase text-neutral-500 block font-semibold">Location & Mobility</span>
                      <span className="text-white font-bold truncate block">{PROFILE_DATA.location}</span>
                    </div>
                  </div>

                  {/* Academic Degree */}
                  <div className="p-3 rounded-xl bg-[#080808] border border-neutral-800/90 flex items-center space-x-3 text-xs font-mono">
                    <span className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-purple-400 shrink-0">
                      <GraduationCap className="w-3.5 h-3.5" />
                    </span>
                    <div className="truncate">
                      <span className="text-[10px] uppercase text-neutral-500 block font-semibold">Formal Degree</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white font-bold truncate">BTech &bull; Arunai Engineering College</span>
                        <span className="px-1.5 py-0.2 rounded bg-purple-500/20 text-purple-300 text-[10px] font-bold">
                          7.56 CGPA
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Current Production Role */}
                  <div className="p-3 rounded-xl bg-[#080808] border border-neutral-800/90 flex items-center space-x-3 text-xs font-mono">
                    <span className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-emerald-400 shrink-0">
                      <Briefcase className="w-3.5 h-3.5" />
                    </span>
                    <div className="truncate">
                      <span className="text-[10px] uppercase text-neutral-500 block font-semibold">Active Industry Experience</span>
                      <span className="text-emerald-400 font-bold truncate block">iStudio Technologies &bull; Data Science</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Direct 1-Click Communication Bar */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-2 text-xs font-mono">
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-xl bg-[#090909] hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center space-x-2 truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{copiedEmail ? "Email Copied!" : "pradeeprajalu5@gmail.com"}</span>
                  {copiedEmail ? <Check className="w-3 h-3 text-emerald-400 ml-1" /> : <Copy className="w-3 h-3 text-neutral-500 ml-1" />}
                </button>

                <button
                  onClick={handleCopyPhone}
                  className="px-3 py-2 rounded-xl bg-[#090909] hover:bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors flex items-center space-x-2 shrink-0"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{copiedPhone ? "Copied!" : "+91-7010327639"}</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

