"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  X,
  Target,
  Layers,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Code2,
  Scale
} from "lucide-react";
import { Project } from "@/types/portfolio";
import { GithubIcon } from "./SocialIcons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copiedCode, setCopiedCode] = useState(false);

  if (!project) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(project.codeSnippet.code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto text-left">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
              {project.category}
            </span>
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
              {project.accuracyOrMetric}
            </span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-sm sm:text-base font-medium text-slate-600 dark:text-slate-300 mt-1.5">
              {project.tagline}
            </p>
          </div>

          {/* Project Preview Image */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[16/8] rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-neutral-900">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 850px"
            />
          </div>

          {/* Problem vs Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider font-mono">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>The Engineering Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
              <div className="flex items-center space-x-2 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider font-mono">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Architectural Approach</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.solutionOverview}
              </p>
            </div>
          </div>

          {/* Pipeline Architecture Steps */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center space-x-2">
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Production Pipeline Execution Flow</span>
            </h3>

            <div className="space-y-2">
              {project.architecture.map((step, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800"
                >
                  <span className="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 pt-0.5">
                    0{idx + 1}.
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-mono">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Real Code Snippet */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center space-x-2">
                <Code2 className="w-4 h-4 text-indigo-500" />
                <span>Core Implementation ({project.codeSnippet.filename})</span>
              </h3>
              <button
                onClick={handleCopy}
                className="text-xs font-mono text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center space-x-1"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy code</span>
                  </>
                )}
              </button>
            </div>

            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed max-h-[300px]">
              <pre>
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          </div>

          {/* Trade-Offs & Decisions */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center space-x-2">
              <Scale className="w-4 h-4 text-amber-500" />
              <span>Key Architectural Trade-offs & Decisions</span>
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {project.tradeoffs.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-1.5"
                >
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {item.decision}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quantified Metrics Table */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center space-x-2">
              <Target className="w-4 h-4 text-emerald-500" />
              <span>Empirical Benchmarks & Latency Targets</span>
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800"
                >
                  <div className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    {m.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mt-0.5">
                    {m.label}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                    {m.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <span className="text-xs font-mono uppercase text-slate-400 block">
              Dependencies & Infrastructure
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Bar */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/80 flex items-center justify-between">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View GitHub Repository</span>
          </a>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
