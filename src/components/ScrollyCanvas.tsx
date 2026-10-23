"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Overlay } from "./Overlay";

interface ScrollyCanvasProps {
  onOpenResume?: () => void;
}

export const TOTAL_FRAMES = 90;

export interface PhaseConfig {
  id: number;
  label: string;
  title: string;
  startFrame: number;
  endFrame: number;
  script: string;
  durationMs: number;
}

// 4 balanced, dedicated phases dividing 90 frames (~22.5 frames each)
// Voice narration for each section is tuned to natural speaking rate (~3.4 words/sec)
export const CINEMATIC_PHASES: PhaseConfig[] = [
  {
    id: 0,
    label: "01 Identity",
    title: "01 IDENTITY & ARCHITECTURE",
    startFrame: 0,
    endFrame: 22.5,
    script:
      "Hello, welcome! I am Pradeep Rajalu, Machine Learning and Computer Vision Engineer. I build production-ready AI systems with deep neural networks, edge inference, and scalable pipelines.",
    durationMs: 11200,
  },
  {
    id: 1,
    label: "02 Philosophy",
    title: "02 CORE PHILOSOPHY",
    startFrame: 22.5,
    endFrame: 45.0,
    script:
      "My engineering philosophy centers on high throughput and real-world efficiency, achieving 95 percent biometric accuracy with sub-180 millisecond inference latency across edge hardware.",
    durationMs: 9900,
  },
  {
    id: 2,
    label: "03 Craft",
    title: "03 TECHNICAL CRAFT",
    startFrame: 45.0,
    endFrame: 67.5,
    script:
      "Where mathematical rigor meets aesthetic craftsmanship. From PyTorch and OpenCV neural transforms to modern web canvases and TensorRT acceleration.",
    durationMs: 8200,
  },
  {
    id: 3,
    label: "04 Archive",
    title: "04 SELECTED ARCHIVE",
    startFrame: 67.5,
    endFrame: 89.0,
    script:
      "Explore my verified production archive and enterprise models. Now transitioning directly into my signature executive dossier.",
    durationMs: 6900,
  },
];

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ onOpenResume }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameIndexRef = useRef<number>(0);
  const exactFrameRef = useRef<number>(0);
  const isInitialFrameRenderedRef = useRef<boolean>(false);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isReady, setIsReady] = useState<boolean>(false);
  const [activeFrame, setActiveFrame] = useState<number>(0);

  // Synchronized Multi-Phase Voice & Frame State
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [syncProgress, setSyncProgress] = useState<number>(0); // 0.0 to 1.0 progress within current phase
  const [isVoiceActive, setIsVoiceActive] = useState<boolean>(true);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [currentSubtitle, setCurrentSubtitle] = useState<string>("");

  const currentPhaseRef = useRef<number>(0);
  const phaseStartTimeRef = useRef<number>(0);
  const speechStartTimeRef = useRef<number>(0);
  const isVoiceActiveRef = useRef<boolean>(true);
  const isSpeakingRef = useRef<boolean>(false);
  const hasSpeechStartedRef = useRef<boolean>(false);
  const hasReceivedBoundaryRef = useRef<boolean>(false);
  const boundaryProgressRef = useRef<number>(0);
  const smoothedProgressRef = useRef<number>(0);
  const syncProgressRef = useRef<number>(0);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const hasAutoScrolledRef = useRef<boolean>(false);
  const advanceTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const keepAliveRef = useRef<NodeJS.Timeout | null>(null);

  // Keep refs in sync with state
  useEffect(() => {
    isVoiceActiveRef.current = isVoiceActive;
  }, [isVoiceActive]);

  useEffect(() => {
    isSpeakingRef.current = isSpeaking;
  }, [isSpeaking]);

  useEffect(() => {
    currentPhaseRef.current = currentPhase;
  }, [currentPhase]);

  // Calculate image path
  const getFramePath = useCallback((index: number) => {
    const padded = String(index).padStart(2, "0");
    return `/sequence/frame_${padded}_delay-0.067s.webp`;
  }, []);

  // Canvas render with object-fit: cover, retina scaling, and 60 FPS sub-frame cross-fading
  const renderFrame = useCallback(
    (targetIndex: number, nextIndex?: number, blendAlpha?: number) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const clampedIndex = Math.max(0, Math.min(TOTAL_FRAMES - 1, targetIndex));

      // Retrieve requested image or nearest fallback
      let img = imagesRef.current[clampedIndex];
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let i = clampedIndex - 1; i >= 0; i--) {
          if (imagesRef.current[i]?.complete && imagesRef.current[i]?.naturalWidth > 0) {
            img = imagesRef.current[i];
            break;
          }
        }
        if (!img || !img.complete || img.naturalWidth === 0) {
          for (let i = clampedIndex + 1; i < TOTAL_FRAMES; i++) {
            if (imagesRef.current[i]?.complete && imagesRef.current[i]?.naturalWidth > 0) {
              img = imagesRef.current[i];
              break;
            }
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) {
        return;
      }

      const dpr = typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1;
      const displayWidth = canvas.clientWidth || window.innerWidth;
      const displayHeight = canvas.clientHeight || window.innerHeight;

      const targetWidth = Math.floor(displayWidth * dpr);
      const targetHeight = Math.floor(displayHeight * dpr);

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }

      ctx.save();
      ctx.scale(dpr, dpr);

      // Fill background matching #121212
      ctx.fillStyle = "#121212";
      ctx.fillRect(0, 0, displayWidth, displayHeight);

      // object-fit: cover logic
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const hRatio = displayWidth / imgWidth;
      const vRatio = displayHeight / imgHeight;
      const ratio = Math.max(hRatio, vRatio);

      const drawWidth = imgWidth * ratio;
      const drawHeight = imgHeight * ratio;
      const offsetX = (displayWidth - drawWidth) / 2;
      const offsetY = (displayHeight - drawHeight) / 2;

      // Sub-frame cross-fade interpolation between current frame and next frame
      if (nextIndex !== undefined && blendAlpha !== undefined && blendAlpha > 0.008) {
        const nextClamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, nextIndex));
        const nextImg = imagesRef.current[nextClamped];

        if (nextImg && nextImg.complete && nextImg.naturalWidth > 0) {
          ctx.globalAlpha = Math.max(0, 1 - blendAlpha);
          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

          ctx.globalAlpha = Math.min(1, blendAlpha);
          ctx.drawImage(nextImg, offsetX, offsetY, drawWidth, drawHeight);
        } else {
          ctx.globalAlpha = 1.0;
          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
      } else {
        ctx.globalAlpha = 1.0;
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }

      ctx.restore();
      currentFrameIndexRef.current = clampedIndex;
    },
    []
  );

  // Preload all 90 frames
  useEffect(() => {
    let active = true;
    let count = 0;
    const preloadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();

      const handleLoad = () => {
        if (!active) return;
        count++;
        setLoadedCount(count);

        // Render frame 0 as soon as it's available
        if (i === 0 && !isInitialFrameRenderedRef.current) {
          isInitialFrameRenderedRef.current = true;
          renderFrame(0);
        }

        if (count >= 10) {
          setIsReady(true);
        }
      };

      img.onload = handleLoad;
      img.onerror = () => {
        if (!active) return;
        count++;
        setLoadedCount(count);
      };

      img.src = getFramePath(i);

      if (img.complete && img.naturalWidth > 0) {
        handleLoad();
      }

      preloadedImages.push(img);
    }

    imagesRef.current = preloadedImages;

    return () => {
      active = false;
    };
  }, [getFramePath, renderFrame]);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameIndexRef.current);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame]);

  // Forward declarations for mutual recursion
  const advanceToPhaseRef = useRef<(phaseId: number, autoActivateVoice?: boolean) => void>(() => {});

  // Speak narration for the specified section, tightly binding speech duration with frame progress
  const speakPhase = useCallback((phaseId: number) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    try {
      window.speechSynthesis.cancel();
      if (advanceTimeoutRef.current) {
        clearTimeout(advanceTimeoutRef.current);
        advanceTimeoutRef.current = null;
      }
      if (keepAliveRef.current) {
        clearInterval(keepAliveRef.current);
        keepAliveRef.current = null;
      }

      const phase = CINEMATIC_PHASES[phaseId];
      if (!phase) return;

      setCurrentSubtitle(phase.script);
      setIsSpeaking(true);
      isSpeakingRef.current = true;
      hasSpeechStartedRef.current = false;
      hasReceivedBoundaryRef.current = false;
      boundaryProgressRef.current = 0;
      smoothedProgressRef.current = 0;
      syncProgressRef.current = 0;
      setSyncProgress(0);
      phaseStartTimeRef.current = performance.now();
      speechStartTimeRef.current = performance.now();

      // Short 35ms timeout ensures browser completes internal cancellation before queuing new utterance
      setTimeout(() => {
        if (!isVoiceActiveRef.current || currentPhaseRef.current !== phaseId) return;

        const utterance = new SpeechSynthesisUtterance(phase.script);
        utteranceRef.current = utterance;
        (window as Window & { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = utterance; // Prevent V8 garbage collection mid-speech

        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.volume = 1.0;

        // Select natural English voice
        const voices = window.speechSynthesis.getVoices();
        const naturalVoice =
          voices.find(
            (v) =>
              v.lang.startsWith("en") &&
              (v.name.includes("Natural") ||
                v.name.includes("Google") ||
                v.name.includes("Samantha") ||
                v.name.includes("Daniel") ||
                v.name.includes("Guy") ||
                v.name.includes("Jenny") ||
                v.name.includes("David"))
          ) ||
          voices.find((v) => v.lang.startsWith("en")) ||
          voices[0];

        if (naturalVoice) utterance.voice = naturalVoice;

        // Audio has physically started
        utterance.onstart = () => {
          hasSpeechStartedRef.current = true;
          speechStartTimeRef.current = performance.now();
          phaseStartTimeRef.current = performance.now();
          setIsSpeaking(true);
          isSpeakingRef.current = true;

          // Chrome speech synthesis 15s pause bug prevention
          if (keepAliveRef.current) clearInterval(keepAliveRef.current);
          keepAliveRef.current = setInterval(() => {
            if (typeof window !== "undefined" && window.speechSynthesis?.speaking) {
              window.speechSynthesis.pause();
              window.speechSynthesis.resume();
            }
          }, 4000);
        };

        // Real-time boundary feedback: update progress lockstep as words are pronounced
        utterance.onboundary = (e) => {
          if (phase.script.length > 0) {
            const charIndex = typeof e.charIndex === "number" ? e.charIndex : 0;
            const charLength = typeof (e as SpeechSynthesisEvent & { charLength?: number }).charLength === "number" ? (e as SpeechSynthesisEvent & { charLength?: number }).charLength : 4;
            const currentPos = charIndex + charLength;
            const charProg = Math.min(1.0, Math.max(0, currentPos / phase.script.length));

            boundaryProgressRef.current = charProg;
            hasReceivedBoundaryRef.current = true;
            hasSpeechStartedRef.current = true;
          }
        };

        // When the voice finishes speaking this section:
        // Guarantee full completion without premature cutoff
        utterance.onend = () => {
          if (keepAliveRef.current) {
            clearInterval(keepAliveRef.current);
            keepAliveRef.current = null;
          }
          (window as Window & { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = null;
          isSpeakingRef.current = false;
          setIsSpeaking(false);
          boundaryProgressRef.current = 1.0;
          smoothedProgressRef.current = 1.0;
          syncProgressRef.current = 1.0;
          setSyncProgress(1.0);
          exactFrameRef.current = phase.endFrame;

          // Elegant 450ms breath pause, then advance to next section in sync
          advanceTimeoutRef.current = setTimeout(() => {
            if (!isVoiceActiveRef.current) return;
            if (phaseId < 3) {
              advanceToPhaseRef.current(phaseId + 1);
            } else {
              // Reached frame 89 and finished Phase 04 Archive narration
              // Automatically stop the voice assistant completely
              if (typeof window !== "undefined" && "speechSynthesis" in window) {
                window.speechSynthesis.cancel();
              }
              if (keepAliveRef.current) {
                clearInterval(keepAliveRef.current);
                keepAliveRef.current = null;
              }
              (window as Window & { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = null;
              isVoiceActiveRef.current = false;
              setIsVoiceActive(false);
              isSpeakingRef.current = false;
              setIsSpeaking(false);
              setCurrentSubtitle("");

              // Smoothly auto-navigate down into #about
              if (!hasAutoScrolledRef.current) {
                hasAutoScrolledRef.current = true;
                if (typeof window !== "undefined" && window.scrollY < 400) {
                  const aboutEl = document.getElementById("about");
                  if (aboutEl) {
                    aboutEl.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              }
              // Voice is cleanly finished and stopped; do not auto-loop to phase 0.
            }
          }, 450);
        };

        utterance.onerror = (e) => {
          console.warn("Speech synthesis notice:", e);
          if (keepAliveRef.current) {
            clearInterval(keepAliveRef.current);
            keepAliveRef.current = null;
          }
          (window as Window & { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = null;
          isSpeakingRef.current = false;
          setIsSpeaking(false);
        };

        window.speechSynthesis.speak(utterance);
      }, 35);
    } catch (err) {
      console.error("SpeechSynthesis error:", err);
      setIsSpeaking(false);
      isSpeakingRef.current = false;
    }
  }, []);

  // Advance or seek directly to a specific narrative section (Identity, Philosophy, Craft, Archive)
  const advanceToPhase = useCallback(
    (targetPhaseId: number, autoActivateVoice?: boolean) => {
      if (advanceTimeoutRef.current) {
        clearTimeout(advanceTimeoutRef.current);
        advanceTimeoutRef.current = null;
      }
      if (keepAliveRef.current) {
        clearInterval(keepAliveRef.current);
        keepAliveRef.current = null;
      }

      const clamped = Math.max(0, Math.min(3, targetPhaseId));
      currentPhaseRef.current = clamped;
      setCurrentPhase(clamped);

      const phase = CINEMATIC_PHASES[clamped];
      exactFrameRef.current = phase.startFrame;
      currentFrameIndexRef.current = Math.floor(phase.startFrame);
      setActiveFrame(Math.floor(phase.startFrame));
      phaseStartTimeRef.current = performance.now();
      speechStartTimeRef.current = performance.now();
      hasSpeechStartedRef.current = false;
      hasReceivedBoundaryRef.current = false;
      boundaryProgressRef.current = 0;
      smoothedProgressRef.current = 0;
      syncProgressRef.current = 0;
      setSyncProgress(0);

      // If user navigates to the first section (01 Identity), automatically start the voice assistant
      if (clamped === 0) {
        hasAutoScrolledRef.current = false;
        if (typeof window !== "undefined" && window.scrollY > 100) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        if (autoActivateVoice !== false) {
          isVoiceActiveRef.current = true;
          setIsVoiceActive(true);
        }
      }

      renderFrame(Math.floor(phase.startFrame));

      if (isVoiceActiveRef.current) {
        speakPhase(clamped);
      }
    },
    [renderFrame, speakPhase]
  );

  useEffect(() => {
    advanceToPhaseRef.current = advanceToPhase;
  }, [advanceToPhase]);

  // When user clicks the top nav logo / #home link to return to the first section, automatically start voice tour
  useEffect(() => {
    const handleHomeClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href="#home"]');
      if (target) {
        if (advanceToPhaseRef.current) {
          advanceToPhaseRef.current(0, true);
        }
      }
    };
    document.addEventListener("click", handleHomeClick);
    return () => document.removeEventListener("click", handleHomeClick);
  }, []);

  // Toggle Voice Assistant on / off
  const toggleVoice = useCallback(() => {
    if (isVoiceActiveRef.current) {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      if (advanceTimeoutRef.current) {
        clearTimeout(advanceTimeoutRef.current);
        advanceTimeoutRef.current = null;
      }
      if (keepAliveRef.current) {
        clearInterval(keepAliveRef.current);
        keepAliveRef.current = null;
      }
      (window as Window & { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = null;
      isVoiceActiveRef.current = false;
      setIsVoiceActive(false);
      setIsSpeaking(false);
      isSpeakingRef.current = false;
      setCurrentSubtitle("");
    } else {
      // Activating voice: automatically start from the first section (01 Identity)
      hasAutoScrolledRef.current = false;
      isVoiceActiveRef.current = true;
      setIsVoiceActive(true);
      advanceToPhase(0, true);
    }
  }, [advanceToPhase]);

  // Auto-start speech orderly once canvas is ready, with user gesture fallback for browser autoplay policies
  useEffect(() => {
    let hasAttempted = false;

    const startOrderlySpeech = () => {
      if (hasAttempted) return;
      if (isVoiceActiveRef.current && !isSpeakingRef.current) {
        hasAttempted = true;
        speakPhase(currentPhaseRef.current);
      }
    };

    if (isReady && isVoiceActiveRef.current && !isSpeakingRef.current) {
      startOrderlySpeech();
    }

    // Modern browsers require a user gesture if speech synthesis is blocked on initial mount
    const unlockEvents = ["pointerdown", "click", "keydown", "scroll", "touchstart"];
    const handleGesture = () => {
      startOrderlySpeech();
      unlockEvents.forEach((ev) => window.removeEventListener(ev, handleGesture));
    };

    unlockEvents.forEach((ev) => window.addEventListener(ev, handleGesture, { passive: true }));

    return () => {
      unlockEvents.forEach((ev) => window.removeEventListener(ev, handleGesture));
    };
  }, [isReady, speakPhase]);

  // Pause speech synthesis gracefully if user scrolls down past the hero viewport
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === "undefined") return;
      if (window.scrollY > window.innerHeight * 0.85) {
        if (typeof window.speechSynthesis !== "undefined" && window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
          isSpeakingRef.current = false;
          setIsSpeaking(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Continuous 60 FPS Animation Engine with equal frame motion matching voice progression
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    // Equal duration per phase in ambient mode (7.0 seconds each = 28.0s full cinematic loop)
    const AMBIENT_PHASE_DURATION_MS = 7000;

    const animate = (currentTime: number) => {
      const dt = currentTime - lastTime;
      lastTime = currentTime;

      const phaseId = currentPhaseRef.current;
      const phase = CINEMATIC_PHASES[phaseId];

      if (phase) {
        const startF = phase.startFrame;
        const endF = phase.endFrame;
        const frameSpan = endF - startF;

        if (isVoiceActiveRef.current) {
          // VOICE & FRAME 1:1 EQUAL SYNCHRONIZATION:
          const elapsedSinceTrigger = currentTime - phaseStartTimeRef.current;

          // Natural 200ms window while browser speech engine initializes audio output
          if (!hasSpeechStartedRef.current && elapsedSinceTrigger < 200) {
            exactFrameRef.current = startF;
            smoothedProgressRef.current = 0;
            syncProgressRef.current = 0;
            setSyncProgress(0);
          } else {
            if (!hasSpeechStartedRef.current) {
              hasSpeechStartedRef.current = true;
              speechStartTimeRef.current = currentTime;
            }

            const elapsed = currentTime - speechStartTimeRef.current;
            const timeProgress = Math.min(1.0, Math.max(0, elapsed / phase.durationMs));

            // Target progress is governed directly by real-time word boundary events
            let targetProgress = timeProgress;
            if (hasReceivedBoundaryRef.current) {
              targetProgress = Math.max(boundaryProgressRef.current, timeProgress * 0.92);
            }

            // Smooth 60 FPS easing towards targetProgress
            const currentProgress = smoothedProgressRef.current;
            const smoothed = currentProgress + (targetProgress - currentProgress) * Math.min(1, dt * 0.012);
            smoothedProgressRef.current = smoothed;
            syncProgressRef.current = smoothed;
            setSyncProgress(smoothed);

            // Frame motion strictly equals speech progress from startFrame to endFrame
            exactFrameRef.current = startF + smoothed * frameSpan;

            // When speech is done and time elapsed, advance to next phase if onend was dropped
            if (!isSpeakingRef.current && elapsed >= phase.durationMs + 300) {
              if (!advanceTimeoutRef.current) {
                if (phaseId < 3) {
                  advanceToPhaseRef.current(phaseId + 1);
                } else {
                  // Phase 3 completed: automatically stop voice assistant completely
                  if (isVoiceActiveRef.current) {
                    if (typeof window !== "undefined" && "speechSynthesis" in window) {
                      window.speechSynthesis.cancel();
                    }
                    if (keepAliveRef.current) {
                      clearInterval(keepAliveRef.current);
                      keepAliveRef.current = null;
                    }
                    (window as Window & { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = null;
                    isVoiceActiveRef.current = false;
                    setIsVoiceActive(false);
                    isSpeakingRef.current = false;
                    setIsSpeaking(false);
                    setCurrentSubtitle("");
                  }
                  if (!hasAutoScrolledRef.current) {
                    hasAutoScrolledRef.current = true;
                    if (typeof window !== "undefined" && window.scrollY < 400) {
                      const aboutEl = document.getElementById("about");
                      if (aboutEl) {
                        aboutEl.scrollIntoView({ behavior: "smooth", block: "start" });
                      }
                    }
                  }
                }
              }
            } else if (elapsed >= phase.durationMs * 1.5) {
              // Safety fallback
              if (phaseId < 3) {
                advanceToPhaseRef.current(phaseId + 1);
              } else {
                if (isVoiceActiveRef.current) {
                  if (typeof window !== "undefined" && "speechSynthesis" in window) {
                    window.speechSynthesis.cancel();
                  }
                  if (keepAliveRef.current) {
                    clearInterval(keepAliveRef.current);
                    keepAliveRef.current = null;
                  }
                  (window as Window & { __activeUtterance?: SpeechSynthesisUtterance | null }).__activeUtterance = null;
                  isVoiceActiveRef.current = false;
                  setIsVoiceActive(false);
                  isSpeakingRef.current = false;
                  setIsSpeaking(false);
                  setCurrentSubtitle("");
                }
                if (!hasAutoScrolledRef.current) {
                  hasAutoScrolledRef.current = true;
                  if (typeof window !== "undefined" && window.scrollY < 400) {
                    const aboutEl = document.getElementById("about");
                    if (aboutEl) {
                      aboutEl.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                  }
                }
              }
            }
          }
        } else {
          // Silent Ambient Mode: equal pacing across all 4 phases (7.0s each)
          const elapsed = currentTime - phaseStartTimeRef.current;
          const ambientProg = Math.min(1.0, Math.max(0, elapsed / AMBIENT_PHASE_DURATION_MS));

          syncProgressRef.current = ambientProg;
          setSyncProgress(ambientProg);

          exactFrameRef.current = startF + ambientProg * frameSpan;

          // Transition to next phase upon completing ambient duration
          if (elapsed >= AMBIENT_PHASE_DURATION_MS) {
            if (phaseId < 3) {
              advanceToPhaseRef.current(phaseId + 1);
            } else {
              // Frame 89 completed in ambient mode: auto-navigate to #about
              if (!hasAutoScrolledRef.current) {
                hasAutoScrolledRef.current = true;
                if (typeof window !== "undefined" && window.scrollY < 400) {
                  const aboutEl = document.getElementById("about");
                  if (aboutEl) {
                    aboutEl.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }
              }
              // Loop back to 0 in silent ambient mode (do NOT auto-start voice during passive ambient cycle)
              advanceToPhaseRef.current(0, false);
            }
          }
        }

        const clampedExact = Math.max(0, Math.min(TOTAL_FRAMES - 1, exactFrameRef.current));
        const idxA = Math.floor(clampedExact);
        const idxB = Math.min(TOTAL_FRAMES - 1, idxA + 1);
        const blend = clampedExact - idxA;

        currentFrameIndexRef.current = idxA;
        setActiveFrame(idxA);
        renderFrame(idxA, idxB, blend);
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
      if (advanceTimeoutRef.current) {
        clearTimeout(advanceTimeoutRef.current);
      }
      if (keepAliveRef.current) {
        clearInterval(keepAliveRef.current);
      }
    };
  }, [renderFrame]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen max-h-screen overflow-hidden bg-[#121212] flex flex-col justify-between"
      id="scrolly-hero"
    >
      {/* 3D Motion Canvas Ambient Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full block object-cover opacity-80 pointer-events-none"
      />

      {/* Radial ambient glow behind 3D canvas */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/10 blur-[160px] pointer-events-none rounded-full" />

      {/* Hero Overlay & Interactive Multi-Phase HUD */}
      <Overlay
        activeFrame={activeFrame}
        currentPhase={currentPhase}
        syncProgress={syncProgress}
        isVoiceActive={isVoiceActive}
        isSpeaking={isSpeaking}
        currentSubtitle={currentSubtitle}
        onToggleVoice={toggleVoice}
        onSelectPhase={advanceToPhase}
        onOpenResume={onOpenResume}
      />

      {/* Initial Loader Badge (dissolves once first batch is ready) */}
      {!isReady && (
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none transition-opacity duration-500">
          <div className="flex items-center space-x-3 px-4 py-2 rounded-full bg-black/75 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="w-3 h-3 rounded-full border-2 border-sky-400 border-t-transparent animate-spin" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-300">
              INITIALIZING 3D ENGINE // {Math.round((loadedCount / TOTAL_FRAMES) * 100)}%
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
