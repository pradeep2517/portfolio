"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { ResumeModal } from "@/components/ResumeModal";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#121212] text-white selection:bg-sky-400 selection:text-black">
      {/* Dynamic Floating Navbar (activates on scroll) */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Scrollytelling & Portfolio Experience */}
      <main id="home">
        {/* Component 1: Autonomous 3D Neural Mesh Canvas & Interactive Hero */}
        <ScrollyCanvas onOpenResume={() => setResumeOpen(true)} />

        {/* Component 2: Signature Executive Dossier (Split Slant & Technical Tenets) */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Component 3: Work Grid (Placed after scroll sequence, showcasing 6 glassmorphic project case studies) */}
        <Projects />

        {/* Verified In-Depth Portfolio Sections */}
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Full-Detail Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
