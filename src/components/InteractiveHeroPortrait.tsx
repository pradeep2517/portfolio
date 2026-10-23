"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Brain, Target, Zap } from "lucide-react";

export interface InteractiveHeroPortraitProps {
  showBiometrics?: boolean;
  showScanReticle?: boolean;
  showScanLine?: boolean;
  showStatusBadge?: boolean;
  showBadges?: boolean;
  showVisionBadge?: boolean;
  showFpsBadge?: boolean;
}

export const InteractiveHeroPortrait: React.FC<InteractiveHeroPortraitProps> = ({
  showBiometrics = true,
  showScanReticle = true,
  showScanLine = true,
  showStatusBadge = true,
  showBadges = true,
  showVisionBadge = true,
  showFpsBadge = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // Parallax transform styles
  const rotateX = isHovered ? -mousePos.y * 12 : 0;
  const rotateY = isHovered ? mousePos.x * 12 : 0;
  const translateX = isHovered ? mousePos.x * 15 : 0;
  const translateY = isHovered ? mousePos.y * 15 : 0;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex flex-col items-center justify-end select-none perspective-[1200px]"
    >
      {/* Ambient Neural Glow Backdrop */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] lg:w-[620px] h-[380px] sm:h-[480px] lg:h-[620px] rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-600/20 to-purple-600/25 blur-3xl pointer-events-none transition-opacity duration-700"
        style={{
          opacity: isHovered ? 0.85 : 0.5,
          transform: `translate(-50%, -50%) translate3d(${translateX * 0.5}px, ${translateY * 0.5}px, 0)`,
        }}
      />

      {/* Main 3D Tilted Portrait Container - Big, Heroic & Executive */}
      <div
        className="relative w-[300px] sm:w-[380px] md:w-[420px] lg:w-[480px] xl:w-[540px] h-[380px] sm:h-[460px] md:h-[500px] lg:h-[540px] xl:h-[580px] transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${translateX}px, ${translateY}px, 0)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Floating AI HUD Badge 1: Top Left (Floating cleanly outside shoulder) */}
        {showBadges && showVisionBadge && (
          <div
            className="absolute -top-2 left-0 sm:-left-4 lg:-left-10 z-30 animate-float-badge-1 hidden sm:flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-black/85 backdrop-blur-xl border border-white/15 shadow-[0_12px_35px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:scale-105"
            style={{ transform: "translateZ(40px)" }}
          >
            <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Brain className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-white tracking-tight flex items-center space-x-1.5">
                <span>Deep Vision & NLP</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-[9px] font-mono text-neutral-400">
                PyTorch &bull; OpenCV &bull; LLMs
              </div>
            </div>
          </div>
        )}

        {/* Floating AI HUD Badge 2: Mid-Right (Positioned by waist/forearm - NEVER overlaps face) */}
        {showBadges && showBiometrics && (
          <div
            className="absolute top-[52%] -right-2 sm:-right-6 lg:-right-10 z-30 animate-float-badge-2 hidden sm:flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-black/85 backdrop-blur-xl border border-white/15 shadow-[0_12px_35px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:scale-105"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Target className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-white tracking-tight">
                95.2% Biometrics
              </div>
              <div className="text-[9px] font-mono text-emerald-400">
                Anti-Spoofing Verified
              </div>
            </div>
          </div>
        )}

        {/* Floating AI HUD Badge 3: Bottom Left (Positioned beside lower torso) */}
        {showBadges && showFpsBadge && (
          <div
            className="absolute bottom-20 -left-2 sm:-left-4 lg:-left-8 z-30 animate-float-badge-3 hidden sm:flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-black/85 backdrop-blur-xl border border-white/15 shadow-[0_12px_35px_rgba(0,0,0,0.6)] transition-transform duration-200 hover:scale-105"
            style={{ transform: "translateZ(45px)" }}
          >
            <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-white tracking-tight">
                30+ FPS Inference
              </div>
              <div className="text-[9px] font-mono text-neutral-400">
                ONNX &bull; TensorRT Edge
              </div>
            </div>
          </div>
        )}

        {/* Biometric Laser Scanning Beam Effect */}
        {showScanLine && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-20 rounded-b-2xl">
            <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_14px_#22d3ee] animate-scan-line" />
          </div>
        )}

        {/* Face Detection Corner Reticle HUD */}
        {showScanReticle && (
          <div
            className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[150px] sm:w-[170px] lg:w-[190px] h-[170px] sm:h-[195px] lg:h-[215px] z-20 pointer-events-none transition-opacity duration-300 opacity-90"
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            
            <div className="absolute -top-5 left-0 text-[9px] font-mono text-cyan-400 uppercase tracking-widest bg-black/85 px-2 py-0.5 rounded border border-cyan-500/40 shadow-sm">
              TRACK: ACTIVE (95.2%)
            </div>
          </div>
        )}

        {/* Portrait Image Layer: Always Crisp, Professional Full Color */}
        <div
          className="relative w-full h-full animate-float-slow"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)",
          }}
        >
          <Image
            src="/profile_new.png"
            alt="Pradeep Rajalu - ML & AI Engineer"
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 340px, (max-width: 1200px) 540px, 600px"
            className="object-contain object-bottom select-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.98)] brightness-105 contrast-105 transition-all duration-300"
          />
        </div>
      </div>

      {/* Neural Vision Real-time Status Badge */}
      {showStatusBadge && (
        <div className="relative z-30 mt-3 sm:mt-4 flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-[10px] font-mono text-neutral-400 shadow-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-neutral-300 font-semibold tracking-wider">NEURAL VISION PIPELINE</span>
          <span className="text-neutral-600">&bull;</span>
          <span className="text-cyan-400 font-bold">REAL-TIME INFERENCE</span>
        </div>
      )}
    </div>
  );
};
