"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, ArrowDown, ArrowUpRight, FileText, Terminal, Cpu, Layers, Volume2, VolumeX, Bot } from "lucide-react";
import { InteractiveHeroPortrait } from "./InteractiveHeroPortrait";

export interface OverlayProps {
  onOpenResume?: () => void;
  activeFrame?: number;
  currentPhase?: number;
  syncProgress?: number; // 0.0 to 1.0 progress within current phase
  isVoiceActive?: boolean;
  isSpeaking?: boolean;
  currentSubtitle?: string;
  onToggleVoice?: () => void;
  onSelectPhase?: (phaseId: number) => void;
  onSeekFrame?: (frame: number) => void;
}

const PHASE_DETAILS = [
  { id: 0, label: "01 Identity", title: "01 IDENTITY & ARCHITECTURE" },
  { id: 1, label: "02 Philosophy", title: "02 CORE PHILOSOPHY" },
  { id: 2, label: "03 Craft", title: "03 TECHNICAL CRAFT" },
  { id: 3, label: "04 Archive", title: "04 SELECTED ARCHIVE" },
];

export const Overlay: React.FC<OverlayProps> = ({
  onOpenResume,
  activeFrame = 0,
  currentPhase = 0,
  syncProgress = 0,
  isVoiceActive = false,
  isSpeaking = false,
  currentSubtitle = "",
  onToggleVoice,
  onSelectPhase,
  onSeekFrame,
}) => {
  const [frameDisplay, setFrameDisplay] = useState<string>("00");
  const [pctDisplay, setPctDisplay] = useState<number>(0);

  // Synchronize telemetry display when activeFrame updates
  useEffect(() => {
    if (activeFrame !== undefined) {
      setFrameDisplay(String(activeFrame).padStart(2, "0"));
      setPctDisplay(Math.round((activeFrame / 89) * 100));
    }
  }, [activeFrame]);

  const handlePhaseClick = (phaseId: number) => {
    if (onSelectPhase) {
      onSelectPhase(phaseId);
    } else if (onSeekFrame) {
      const starts = [0, 23, 45, 68];
      onSeekFrame(starts[phaseId] || 0);
    }
  };

  const currentPhaseTitle = PHASE_DETAILS[currentPhase]?.title || "TOUR";

  return (
    <div className="relative z-10 w-full h-screen max-h-screen overflow-hidden flex flex-col justify-between px-6 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-5 pointer-events-none select-none">
      {/* Top Telemetry HUD Bar */}
      <div className="w-full flex items-center justify-between pointer-events-auto flex-shrink-0">
        <div className="flex items-center space-x-3">
          <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 font-semibold">
            PRADEEP RAJALU {"//"} 3D NEURAL TOPOLOGY
          </span>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* AI Voice Assistant Toggle Button */}
          {onToggleVoice && (
            <button
              onClick={onToggleVoice}
              type="button"
              className={`h-8 inline-flex items-center space-x-2 px-3.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 shadow-md cursor-pointer ${
                isVoiceActive
                  ? "bg-gradient-to-r from-cyan-500/25 to-blue-500/25 border border-cyan-400 text-cyan-300 shadow-[0_0_18px_rgba(6,182,212,0.4)]"
                  : "bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white"
              }`}
              title={isVoiceActive ? "Mute Voice Assistant" : "Activate AI Voice Assistant"}
            >
              {isVoiceActive ? (
                <>
                  {/* Live frequency wave */}
                  <div className="flex items-end space-x-0.5 h-3">
                    <span className="w-0.5 h-full bg-cyan-400 animate-[pulse_0.4s_ease-in-out_infinite]" />
                    <span className="w-0.5 h-2/3 bg-cyan-400 animate-[pulse_0.6s_ease-in-out_infinite_0.1s]" />
                    <span className="w-0.5 h-4/5 bg-cyan-400 animate-[pulse_0.5s_ease-in-out_infinite_0.2s]" />
                    <span className="w-0.5 h-1/2 bg-cyan-400 animate-[pulse_0.3s_ease-in-out_infinite_0.15s]" />
                  </div>
                  <span>VOICE AI: ACTIVE</span>
                  <VolumeX className="w-3.5 h-3.5 text-cyan-400/80 hover:text-cyan-200" />
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>START VOICE TOUR</span>
                </>
              )}
            </button>
          )}

          {/* Frame Counter Badge */}
          <div className="h-8 inline-flex items-center space-x-2 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">FRAME</span>
            <span className="text-[11px] font-mono font-bold text-sky-400">
              {frameDisplay}
            </span>
            <span className="text-[10px] font-mono text-zinc-600">/ 89</span>
          </div>

          {/* Resume Button */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="h-8 inline-flex items-center space-x-1.5 px-3.5 rounded-full bg-white text-black text-xs font-bold tracking-wider uppercase hover:bg-zinc-200 transition-all shadow-[0_0_15px_rgba(255,255,255,0.2)] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          )}
        </div>
      </div>

      {/* Middle Interactive Viewport: Transitions cleanly between all 4 phases in sync with 3D animation */}
      <div className="relative w-full max-w-7xl mx-auto flex-1 flex items-center justify-between my-auto py-2 sm:py-4 pointer-events-auto min-h-0">
        {/* PHASE 0: Frame 0-22 (Identity & Executive Hero Portrait) */}
        {currentPhase === 0 && (
          <div className="w-full flex flex-col lg:flex-row items-center justify-between text-left gap-6 lg:gap-10 animate-cinematic-fade">
            {/* Left Column */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(56,189,248,0.12)]">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300 font-medium">
                  01 // ML/AI Engineer & Computer Vision
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase leading-none">
                Pradeep <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400">Rajalu</span>.
              </h1>

              <p className="mt-2.5 text-base sm:text-xl font-light text-sky-300 tracking-wide">
                Computer Vision &bull; LLMs &bull; Generative AI
              </p>

              <p className="mt-3 text-xs sm:text-sm text-zinc-400 max-w-xl leading-relaxed">
                Building production-ready AI systems with Python, deep neural networks, and scalable MLOps pipelines. High-throughput edge inference & verifiable benchmarks.
              </p>

              {/* CTAs with uniform height and alignment */}
              <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-3 pointer-events-auto">
                <a
                  href="#about"
                  className="h-10 px-5 rounded-full bg-sky-500 hover:bg-sky-400 text-black font-extrabold text-xs uppercase tracking-widest inline-flex items-center space-x-2 transition-all shadow-[0_0_25px_rgba(56,189,248,0.45)] hover:scale-105 active:scale-95"
                >
                  <span>Signature Profile</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#projects"
                  className="h-10 px-5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs uppercase tracking-widest inline-flex items-center justify-center transition-all backdrop-blur-md hover:border-white/30"
                >
                  Selected Work
                </a>
                {/* Voice Tour Trigger */}
                {onToggleVoice && (
                  <button
                    onClick={onToggleVoice}
                    type="button"
                    className={`h-10 px-4 rounded-full inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest transition-all backdrop-blur-md shadow-md cursor-pointer ${
                      isVoiceActive
                        ? "bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                        : "bg-white/5 hover:bg-white/10 border border-cyan-500/30 text-cyan-300 hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    }`}
                  >
                    <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span>{isVoiceActive ? "Mute Voice" : "Voice Tour"}</span>
                  </button>
                )}
              </div>
            </div>

            {/* Right: Pradeep's Portrait Photo with AI HUD Details & Parallax */}
            <div className="w-full lg:w-[48%] flex items-end justify-center lg:justify-end select-none pointer-events-auto">
              <InteractiveHeroPortrait />
            </div>
          </div>
        )}

        {/* PHASE 1: Frame 23-44 (Philosophy & Edge Performance Metrics) */}
        {currentPhase === 1 && (
          <div className="w-full flex flex-col lg:flex-row items-center justify-between text-left gap-6 lg:gap-10 animate-cinematic-fade">
            {/* Left Column: Philosophy Tenets & Metrics */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 font-mono text-xs uppercase tracking-wider mb-2.5">
                <Terminal className="w-3.5 h-3.5" />
                <span>02 {"//"} Core Philosophy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Deterministic <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500">Edge Vision</span> & Low Latency.
              </h2>

              <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed font-light">
                Engineering computer vision architectures that operate deterministically under strict latency budgets. Combining cascaded MTCNN landmark alignment, Inception-ResNet embeddings, and SIMD-vectorized FAISS similarity search for instantaneous authentication.
              </p>

              {/* Real-time Telemetry Metrics */}
              <div className="mt-4 grid grid-cols-3 gap-2.5 w-full max-w-lg">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                  <div className="text-xl sm:text-2xl font-black font-mono text-white">95.2%</div>
                  <div className="text-[9px] text-zinc-400 font-mono uppercase mt-0.5">Biometric Accuracy</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-sky-500/20 backdrop-blur-md shadow-lg">
                  <div className="text-xl sm:text-2xl font-black font-mono text-sky-400">30+ FPS</div>
                  <div className="text-[9px] text-zinc-400 font-mono uppercase mt-0.5">Edge Vision Stream</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-purple-500/20 backdrop-blur-md shadow-lg">
                  <div className="text-xl sm:text-2xl font-black font-mono text-purple-400">&lt;180ms</div>
                  <div className="text-[9px] text-zinc-400 font-mono uppercase mt-0.5">Inference Latency</div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-3 pointer-events-auto">
                <a
                  href="#projects"
                  className="h-9 sm:h-10 inline-flex items-center space-x-2 px-5 sm:px-6 rounded-full bg-sky-500 hover:bg-sky-400 text-black font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                >
                  <span>Explore Vision Pipeline</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#about"
                  className="h-9 sm:h-10 inline-flex items-center px-5 sm:px-6 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-xs uppercase tracking-widest transition-all backdrop-blur-md"
                >
                  Read Tenets
                </a>
              </div>
            </div>

            {/* Right Column: Real-Time Edge Vision Pipeline & Telemetry Card */}
            <div className="w-full lg:w-[48%] hidden lg:flex items-center justify-end select-none pointer-events-auto">
              <div className="relative w-full max-w-md rounded-2xl bg-[#0b1320]/85 border border-sky-500/30 backdrop-blur-xl p-3 sm:p-4 shadow-[0_0_35px_rgba(56,189,248,0.2)] overflow-hidden group">
                {/* Top Status */}
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/10 text-[10px] font-mono">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                    <span className="text-white font-bold tracking-wider">EDGE_INFERENCE // RTSP_CAM_01</span>
                  </div>
                  <span className="text-sky-400 font-semibold px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    ONNX_FP16 // 31.4 FPS
                  </span>
                </div>

                {/* Preview Image with Target HUD */}
                <div className="relative w-full h-40 sm:h-48 lg:h-52 rounded-xl overflow-hidden border border-sky-500/30 bg-black/60 shadow-inner">
                  <Image
                    src="/projects/face-recognition.jpg"
                    alt="Biometric Face Recognition System"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  {/* Scanline overlay */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
                    <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_#22d3ee] animate-scan-line" />
                  </div>

                  {/* Biometric Target Lock HUD Overlay */}
                  <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono bg-black/75 border border-cyan-400/40 text-cyan-300 px-2 py-0.5 rounded backdrop-blur-sm">
                        [ + ] MTCNN_LANDMARKS: 5-PT OK
                      </span>
                      <span className="text-[9px] font-mono bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 px-2 py-0.5 rounded font-bold backdrop-blur-sm">
                        CONF: 98.4% MATCHED
                      </span>
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-[9px] font-mono bg-black/75 border border-white/20 text-zinc-300 px-2 py-0.5 rounded backdrop-blur-sm">
                        ID: #EMP-0829 // RAJALU, P.
                      </span>
                      <span className="text-[9px] font-mono bg-black/75 border border-white/20 text-cyan-300 px-2 py-0.5 rounded backdrop-blur-sm">
                        LIVENESS: PASSED (0.94)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Telemetry Breakdown */}
                <div className="mt-2.5 pt-2 border-t border-white/10 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-zinc-400">LATENCY PIPELINE:</span>
                    <span className="text-sky-300 font-bold">165ms TOTAL &bull; 0 FRAME DROP</span>
                  </div>
                  <div className="grid grid-cols-4 gap-1 text-[9px] font-mono text-center">
                    <div className="py-1 px-1 rounded bg-white/5 border border-white/10">
                      <div className="text-zinc-400">MTCNN</div>
                      <div className="text-white font-bold">38ms</div>
                    </div>
                    <div className="py-1 px-1 rounded bg-white/5 border border-white/10">
                      <div className="text-zinc-400">ALIGN</div>
                      <div className="text-white font-bold">12ms</div>
                    </div>
                    <div className="py-1 px-1 rounded bg-white/5 border border-white/10">
                      <div className="text-zinc-400">FACENET</div>
                      <div className="text-white font-bold">98ms</div>
                    </div>
                    <div className="py-1 px-1 rounded bg-sky-500/10 border border-sky-500/30">
                      <div className="text-sky-400">FAISS</div>
                      <div className="text-sky-300 font-bold">17ms</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PHASE 2: Frame 45-67 (Technical Craft & Stack Grid) */}
        {currentPhase === 2 && (
          <div className="w-full flex flex-col lg:flex-row items-center justify-between text-left gap-6 lg:gap-10 animate-cinematic-fade">
            {/* Left Column: Craft Narrative & Tech Matrix */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 font-mono text-xs uppercase tracking-wider mb-2.5">
                <Cpu className="w-3.5 h-3.5" />
                <span>03 {"//"} Technical Craft</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Bridging Deep Learning & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300">Engineering</span>.
              </h2>

              <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed font-light">
                Where mathematical rigor meets high-throughput production. Training custom residual CNN backbones and domain transformers, quantizing with TensorRT, and packaging into minimal Docker containers with sub-25ms overhead.
              </p>

              {/* Grouped Stack Badges */}
              <div className="mt-4 flex flex-wrap gap-1.5 max-w-lg justify-center lg:justify-start">
                {[
                  "PyTorch",
                  "OpenCV",
                  "TensorRT FP16",
                  "FastAPI",
                  "Docker",
                  "Hugging Face",
                  "LoRA / PEFT",
                  "Scikit-Learn",
                  "FAISS Vector DB",
                  "Next.js 14"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-zinc-300 backdrop-blur-md shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-3 pointer-events-auto">
                <a
                  href="#skills"
                  className="h-9 sm:h-10 inline-flex items-center space-x-2 px-5 sm:px-6 rounded-full bg-purple-500 hover:bg-purple-400 text-black font-bold text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                >
                  <span>Full Skill Matrix</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#projects"
                  className="h-9 sm:h-10 inline-flex items-center px-5 sm:px-6 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-xs uppercase tracking-widest transition-all backdrop-blur-md"
                >
                  Project Archive
                </a>
              </div>
            </div>

            {/* Right Column: Neural Architecture & Inference Engine Card */}
            <div className="w-full lg:w-[48%] hidden lg:flex items-center justify-end select-none pointer-events-auto">
              <div className="relative w-full max-w-md rounded-2xl bg-[#140c1e]/85 border border-purple-500/30 backdrop-blur-xl p-3 sm:p-4 shadow-[0_0_35px_rgba(168,85,247,0.2)] overflow-hidden group">
                {/* Top Status */}
                <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-white/10 text-[10px] font-mono">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse shadow-[0_0_8px_#c084fc]" />
                    <span className="text-white font-bold tracking-wider">NEURAL_BACKBONE // RESNET_4STAGE</span>
                  </div>
                  <span className="text-purple-300 font-semibold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20">
                    INT8 // 12.8 MB
                  </span>
                </div>

                {/* Preview Image with Classification HUD */}
                <div className="relative w-full h-40 sm:h-48 lg:h-52 rounded-xl overflow-hidden border border-purple-500/30 bg-black/60 shadow-inner">
                  <Image
                    src="/projects/emotion-recognition.jpg"
                    alt="Facial Emotion Recognition CNN"
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />

                  {/* Neural Classification HUD Overlay */}
                  <div className="absolute inset-0 p-3 flex flex-col justify-between pointer-events-none">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono bg-black/75 border border-purple-400/40 text-purple-300 px-2 py-0.5 rounded backdrop-blur-sm">
                        EPOCHS: 100/100 &bull; VAL_ACC: 88.4%
                      </span>
                      <span className="text-[9px] font-mono bg-pink-500/20 border border-pink-400/50 text-pink-300 px-2 py-0.5 rounded font-bold backdrop-blur-sm">
                        MACRO F1: 0.87
                      </span>
                    </div>

                    {/* Probability breakdown overlay */}
                    <div className="bg-black/85 border border-white/10 rounded-lg p-2 backdrop-blur-md flex flex-col gap-1 w-44">
                      <div className="flex justify-between text-[8px] font-mono text-zinc-300">
                        <span>HAPPY</span>
                        <span className="text-emerald-400 font-bold">94.2%</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 w-[94%]" />
                      </div>
                      <div className="flex justify-between text-[8px] font-mono text-zinc-400">
                        <span>NEUTRAL</span>
                        <span className="text-zinc-300">4.1%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Layer Topology Stepper */}
                <div className="mt-2.5 pt-2 border-t border-white/10 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="text-zinc-400">LAYER TOPOLOGY:</span>
                    <span className="text-purple-300 font-bold">EMA FILTER (α=0.35) JITTER-FREE</span>
                  </div>
                  <div className="flex items-center justify-between gap-1 text-[9px] font-mono">
                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                      Input 48x48
                    </span>
                    <span className="text-zinc-600">&rarr;</span>
                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                      Conv2D(64)
                    </span>
                    <span className="text-zinc-600">&rarr;</span>
                    <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-zinc-300">
                      ResBlock(128)
                    </span>
                    <span className="text-zinc-600">&rarr;</span>
                    <span className="px-2 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 font-bold">
                      Softmax(7)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PHASE 3: Frame 68-89 (Selected Archive & Production Systems Showcase) */}
        {currentPhase === 3 && (
          <div className="w-full flex flex-col lg:flex-row items-center justify-between text-left gap-6 lg:gap-10 animate-cinematic-fade">
            {/* Left Column: Archive Narrative & Verified Portfolio Status */}
            <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2.5">
                <Layers className="w-3.5 h-3.5" />
                <span>04 {"//"} Selected Archive</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Curated Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">Deployments</span>.
              </h2>

              <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 max-w-xl leading-relaxed font-light">
                Explore 6 end-to-end intelligent systems, each validated with production benchmarks, Dockerized architectures, and reproducible open-source repositories.
              </p>

              {/* Quick System Summary */}
              <div className="mt-4 grid grid-cols-3 gap-2.5 w-full max-w-lg">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                  <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">6+</div>
                  <div className="text-[9px] text-zinc-400 font-mono uppercase mt-0.5">End-to-End Systems</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                  <div className="text-xl sm:text-2xl font-black font-mono text-sky-400">100%</div>
                  <div className="text-[9px] text-zinc-400 font-mono uppercase mt-0.5">Open Source Code</div>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                  <div className="text-xl sm:text-2xl font-black font-mono text-purple-400">Docker</div>
                  <div className="text-[9px] text-zinc-400 font-mono uppercase mt-0.5">Deploy Ready</div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-3 pointer-events-auto">
                <a
                  href="#projects"
                  className="h-9 sm:h-10 inline-flex items-center space-x-2 px-5 sm:px-6 rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-black font-extrabold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_0_20px_rgba(52,211,153,0.35)]"
                >
                  <span>Explore All 6 Projects</span>
                  <ArrowDown className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#about"
                  className="h-9 sm:h-10 inline-flex items-center px-5 sm:px-6 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-xs uppercase tracking-widest transition-all backdrop-blur-md"
                >
                  Executive Dossier
                </a>
              </div>
            </div>

            {/* Right Column: Featured Projects Showcase Deck */}
            <div className="w-full lg:w-[48%] hidden lg:flex flex-col gap-3 select-none pointer-events-auto">
              {/* Featured Card 1: Face Recognition System */}
              <a
                href="#projects"
                className="w-full rounded-xl bg-[#09141c]/85 border border-emerald-500/25 hover:border-emerald-400/60 backdrop-blur-xl p-3 shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.25)] transition-all duration-300 group flex items-center gap-3.5"
              >
                <div className="relative w-24 h-20 sm:w-28 sm:h-22 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 bg-black/60">
                  <Image
                    src="/projects/face-recognition.jpg"
                    alt="Face Recognition Attendance"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="120px"
                  />
                  <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/80 text-[8px] font-mono text-emerald-300 border border-emerald-400/40">
                    95.2% ACC
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-[9px] font-mono text-emerald-400 mb-0.5">
                    <span>COMPUTER VISION // 30 FPS</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="text-white font-bold text-xs sm:text-sm truncate group-hover:text-emerald-300 transition-colors">
                    Face Recognition Attendance
                  </h4>
                  <p className="text-[10px] text-zinc-400 line-clamp-2 mt-0.5 leading-snug">
                    Cascaded MTCNN landmark alignment with 128-d FaceNet embeddings & FAISS index.
                  </p>
                </div>
              </a>

              {/* Featured Card 2: Academic NLP & Scientific Summarizer */}
              <a
                href="#projects"
                className="w-full rounded-xl bg-[#0e1626]/85 border border-sky-500/25 hover:border-sky-400/60 backdrop-blur-xl p-3 shadow-lg hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] transition-all duration-300 group flex items-center gap-3.5"
              >
                <div className="relative w-24 h-20 sm:w-28 sm:h-22 rounded-lg overflow-hidden border border-white/10 flex-shrink-0 bg-black/60">
                  <Image
                    src="/projects/academic-nlp.jpg"
                    alt="Academic Text Generation NLP"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="120px"
                  />
                  <div className="absolute top-1 left-1 px-1.5 py-0.5 rounded bg-black/80 text-[8px] font-mono text-sky-300 border border-sky-400/40">
                    0.42 ROUGE
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between text-[9px] font-mono text-sky-400 mb-0.5">
                    <span>GENERATIVE NLP // LORA PEFT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h4 className="text-white font-bold text-xs sm:text-sm truncate group-hover:text-sky-300 transition-colors">
                    Academic Text Generation
                  </h4>
                  <p className="text-[10px] text-zinc-400 line-clamp-2 mt-0.5 leading-snug">
                    Fine-tuned T5 & GPT-2 models for automated scientific abstract synthesis and paper summarization.
                  </p>
                </div>
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Bottom HUD Section: Unified Multi-Tier Dock containing Voice Subtitle Card + Phase Switcher */}
      <div className="w-full flex flex-col items-center gap-2.5 pointer-events-auto flex-shrink-0 z-20">
        {/* Voice Assistant Content: Spoken orderly via speech synthesis while visual card is hidden per user request */}
        {isVoiceActive && currentSubtitle && (
          <div className="sr-only" aria-live="polite">
            <p>{currentSubtitle}</p>
          </div>
        )}


        {/* Bottom Telemetry HUD Bar: Interactive Phase Switcher for ALL 4 sections */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-500">
          {/* Interactive Phase Switcher */}
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            {PHASE_DETAILS.map((p) => (
              <button
                key={p.id}
                onClick={() => handlePhaseClick(p.id)}
                type="button"
                className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  currentPhase === p.id
                    ? "bg-sky-500/20 border border-sky-400 text-sky-300 shadow-[0_0_12px_rgba(56,189,248,0.35)] scale-105"
                    : "bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Cycle Bar & Telemetry */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2">
              <span className="text-[10px] tracking-widest uppercase text-zinc-500">CYCLE:</span>
              <span className="text-white font-bold">{pctDisplay}%</span>
            </div>

            <div className="hidden md:flex items-center space-x-1.5 w-36 h-1 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 transition-all duration-100"
                style={{ width: `${pctDisplay}%` }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-semibold">
                CINEMATIC 3D ENGINE {"//"} 60 FPS BLEND
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
