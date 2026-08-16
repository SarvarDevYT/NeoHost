"use client";

import React from "react";
import Image from "next/image";
import { Terminal, FolderGit2, Database, ShieldAlert } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function PterodactylTour() {
  const { t } = useLanguage();
  const icons = [Terminal, FolderGit2, ShieldAlert, Database];
  const borderColors = ["border-sky-400", "border-indigo-400", "border-emerald-400", "border-violet-400"];
  const iconColors = ["text-sky-400", "text-indigo-400", "text-emerald-400", "text-violet-400"];

  return (
    <section className="py-24" id="pterodactyl">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="title-section text-white italic uppercase tracking-tighter liquid-shadow mb-3">
            {t.pterodactyl.title} <span className="gradient-text">{t.pterodactyl.titleGradient}</span>
          </h2>
          <p className="text-slate-400 font-medium text-lg">
            {t.pterodactyl.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Features Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {t.pterodactyl.features.map((feat, idx) => {
              const Icon = icons[idx];
              return (
                <div key={idx} className={`glass-effect p-5 rounded-2xl border-l-4 ${borderColors[idx]}`}>
                  <h4 className="text-white font-bold text-base mb-1 flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${iconColors[idx]}`} /> {feat.title}
                  </h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Screenshot Preview Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[2rem] overflow-hidden border border-sky-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(56,189,248,0.15)] group">
              <Image
                src="/dashboard_preview.jpg"
                alt="NeoHost Pterodactyl Dashboard Preview"
                width={1000}
                height={600}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
