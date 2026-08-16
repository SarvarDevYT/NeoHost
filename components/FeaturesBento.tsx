"use client";

import React from "react";
import { Shield, Zap, Box, Layers } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export default function FeaturesBento() {
  const { t } = useLanguage();

  return (
    <section className="py-24" id="features">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="title-section text-white italic uppercase tracking-tighter liquid-shadow mb-3">
            {t.features.title} <span className="gradient-text">{t.features.titleGradient}</span>
          </h2>
          <p className="text-slate-400 font-medium text-lg">
            {t.features.subtitle}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 2-column span */}
          <div className="neoterra-card md:col-span-2 group border border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/15 text-sky-400 text-xs font-black tracking-wider uppercase mb-4 border border-sky-500/30">
                <Zap className="w-3.5 h-3.5" />
                <span>{t.features.card1Tag}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                {t.features.card1Title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.features.card1Desc}
              </p>
            </div>
          </div>

          {/* Card 2: Anti DDoS */}
          <div className="neoterra-card group border border-white/10">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/25 flex items-center justify-center text-indigo-400 mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-1.5">{t.features.card2Title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {t.features.card2Desc}
              </p>
            </div>
          </div>

          {/* Card 3: 1-Click Mods */}
          <div className="neoterra-card group border border-white/10">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/25 flex items-center justify-center text-violet-400 mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-1.5">{t.features.card3Title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">
                {t.features.card3Desc}
              </p>
            </div>
          </div>

          {/* Card 4: 2-column span */}
          <div className="neoterra-card md:col-span-2 group border border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-black tracking-wider uppercase mb-4 border border-emerald-500/30">
                <Box className="w-3.5 h-3.5" />
                <span>{t.features.card4Tag}</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                {t.features.card4Title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t.features.card4Desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
