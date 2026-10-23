"use client";

import React from "react";
import { PROFILE_DATA } from "@/data/profile";

export const QuickStats: React.FC = () => {
  return (
    <section className="py-10 border-b border-slate-200/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/60 dark:divide-slate-800">
          {PROFILE_DATA.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`pt-4 sm:pt-0 ${idx > 0 ? "sm:pl-6" : ""}`}
            >
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                {stat.label}
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
