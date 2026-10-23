"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { PRLogo } from "./PRLogo";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isScrolled) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/85 backdrop-blur-xl border-b border-white/10 transition-all duration-300 animate-in fade-in slide-in-from-top-2">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 flex items-center justify-between">
        
        {/* Monogram Logo */}
        <a href="#home" className="flex items-center space-x-2 group">
          <PRLogo className="w-8 h-8" light={true} />
          <span className="font-bold text-white text-sm tracking-tight hidden sm:inline">
            Pradeep Rajalu
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-7 text-xs font-semibold uppercase tracking-wider">
          <a
            href="#about"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            About me
          </a>
          <a
            href="#projects"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Work
          </a>
          <a
            href="#skills"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Experience
          </a>
          <button
            onClick={onOpenResume}
            className="text-neutral-400 hover:text-white transition-colors uppercase"
          >
            Resume
          </button>
          <a
            href="#contact"
            className="pill-button-white px-5 py-2 text-[11px] font-bold"
          >
            CONTACT ME
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center space-x-2">
          <a
            href="#contact"
            className="pill-button-white px-3.5 py-1 text-[10px] font-bold"
          >
            CONTACT
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-1.5 rounded-md bg-neutral-900 text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-b border-neutral-800 px-6 py-4 space-y-3 text-xs font-semibold uppercase">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-white"
          >
            About me
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-white"
          >
            Work
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-white"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-neutral-300 hover:text-white"
          >
            Experience
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenResume();
            }}
            className="block text-left text-neutral-300 hover:text-white uppercase"
          >
            Resume (PDF)
          </button>
        </div>
      )}
    </header>
  );
};
