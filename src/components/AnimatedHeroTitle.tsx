"use client";

import React, { useState, useEffect } from "react";
import { PROFILE_DATA } from "@/data/profile";

const ROTATING_ROLES = [
  "ML/AI Engineer / Computer Vision & NLP",
  "Deep Learning & Neural Networks",
  "LLMs, Transformers & Generative AI",
  "Production MLOps & Scalable Pipelines",
  "Biometric Computer Vision & Edge AI",
];

export const AnimatedHeroTitle: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const currentTarget = ROTATING_ROLES[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    if (!isDeleting && displayedText === currentTarget) {
      // Pause at end of phrase
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && displayedText === "") {
      // Pause before typing next phrase
      const pauseBeforeNext = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
      }, 350);
      return () => clearTimeout(pauseBeforeNext);
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? currentTarget.substring(0, prev.length - 1)
          : currentTarget.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Fallback for SSR
  const activeRoleText = isMounted ? displayedText : ROTATING_ROLES[0];

  return (
    <div className="space-y-2 select-none">
      {/* "Hi, I am" with playful greeting and entry animation */}
      <div className="animate-fade-in-up flex items-center space-x-2">
        <span className="text-xl sm:text-2xl lg:text-3xl font-medium text-[#1c1c1c] tracking-tight">
          Hi, I am
        </span>
        <span
          className="text-2xl sm:text-3xl lg:text-4xl animate-wave cursor-default"
          role="img"
          aria-label="Waving hand"
        >
          👋
        </span>
      </div>

      {/* Main Name with interactive hover bounce and metallic light sweep */}
      <h1
        className="text-4xl sm:text-5xl lg:text-7xl font-black text-[#000000] tracking-tight leading-[1.05] text-shimmer flex flex-wrap"
        aria-label={PROFILE_DATA.name}
      >
        {PROFILE_DATA.name.split("").map((char, idx) => (
          <span
            key={idx}
            className={`inline-block transition-transform duration-200 hover:-translate-y-1.5 hover:scale-105 active:scale-95 cursor-default ${
              char === " " ? "w-2.5 sm:w-3.5 lg:w-4" : ""
            }`}
          >
            {char}
          </span>
        ))}
      </h1>

      {/* Dynamic Typewriter Role with blinking cursor & fixed height to avoid layout shift */}
      <div className="min-h-[2.2rem] sm:min-h-[2.5rem] lg:min-h-[2.8rem] flex items-center pt-1">
        <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#737373] tracking-tight flex items-center flex-wrap">
          <span>{activeRoleText}</span>
          <span
            className="inline-block w-[2.5px] sm:w-[3px] h-[1.1em] bg-neutral-900 ml-1.5 align-middle animate-cursor-blink"
            aria-hidden="true"
          />
        </p>
      </div>
    </div>
  );
};
