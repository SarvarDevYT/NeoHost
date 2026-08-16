"use client";

import React from "react";
import Image from "next/image";
import { Copy, Rocket, Server, Activity, ShieldCheck } from "lucide-react";
import { useToast } from "./ToastContext";
import HeroConsole from "./HeroConsole";

interface HeroProps {
  onOpenModal: (plan?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const { showToast } = useToast();

  const handleCopyPanelUrl = () => {
    navigator.clipboard.writeText("https://panel.neohost.uz").then(() => {
      showToast("📋 Panel manzili [https://panel.neohost.uz] nusxalandi!");
    }).catch(() => {
      showToast("📋 Panel: https://panel.neohost.uz");
    });
  };

  return (
    <section id="hero" className="relative min-h-[95vh] pt-32 pb-20 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-full pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-sky-500/15 blur-[130px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-[20%] right-[20%] w-[450px] h-[450px] bg-indigo-500/15 blur-[130px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Floating Logo Badge */}
        <div className="relative w-[300px] md:w-[360px] h-[300px] md:h-[360px] rounded-full p-2 glass-effect border-white/20 shadow-[0_0_40px_rgba(56,189,248,0.2)] animate-float group mx-auto mb-9">
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-inner">
            <Image
              src="/logo.jpg"
              alt="NeoHost Emblem"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50" />
          </div>
        </div>

        {/* Big Italic Title */}
        <h1 className="title-hero text-white mb-6 uppercase tracking-tighter leading-none italic liquid-shadow">
          O'ZBEKISTONNING <br />
          <span className="gradient-text">ENG ZAMONAVIY</span> <br />
          GAME HOSTINGI!
        </h1>

        <p className="text-slate-400 max-w-2xl mx-auto font-medium text-lg mb-9 leading-relaxed">
          NeoTerra ekotizimining rasmiy o'yin va bot hosting platformasi. Minimal ping, professional Pterodactyl paneli va 100% bepul boshlash imkoniyati.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          
          {/* Panel URL Copy Pill */}
          <div
            onClick={handleCopyPanelUrl}
            className="group glass-effect px-8 py-4 rounded-[2rem] cursor-pointer hover:bg-white/10 transition-all duration-300 active:scale-95 text-left border border-white/10 hover:border-sky-400/40"
          >
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-sky-400 font-bold uppercase tracking-[0.2em] mb-0.5">
                Panel URL (Nusxalash)
              </span>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-mono text-white font-bold">
                  panel.neohost.uz
                </span>
                <Copy className="w-5 h-5 text-white/40 group-hover:text-sky-400 transition-colors" />
              </div>
            </div>
          </div>

          {/* Main Action Button */}
          <button
            onClick={() => onOpenModal("Neo Free Starter")}
            className="inline-flex items-center justify-center gap-3 py-5 px-10 bg-white text-slate-950 hover:bg-slate-100 font-black italic text-xl rounded-[2rem] shadow-[0_15px_35px_rgba(255,255,255,0.15)] transition-transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <Rocket className="w-6 h-6 text-sky-500 stroke-[2.5]" />
            <span>BEPUL SERVER OCHISH</span>
          </button>

        </div>

        {/* Live Counters Row */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
          <div className="glass-effect px-6 py-4 rounded-[2rem] flex flex-col items-center min-w-[160px] border border-white/10">
            <span className="text-2xl font-bold text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="w-5 h-5" /> 99.98%
            </span>
            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Uptime Kafolati</span>
          </div>
          <div className="glass-effect px-6 py-4 rounded-[2rem] flex flex-col items-center min-w-[160px] border border-white/10">
            <span className="text-2xl font-bold text-sky-400 flex items-center gap-1.5">
              <Activity className="w-5 h-5" /> &lt;15ms
            </span>
            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Toshkent Ping</span>
          </div>
          <div className="glass-effect px-6 py-4 rounded-[2rem] flex flex-col items-center min-w-[160px] border border-white/10">
            <span className="text-2xl font-bold text-indigo-400 uppercase flex items-center gap-1.5">
              <Server className="w-5 h-5" /> ONLINE
            </span>
            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Barcha Nodelar Faol</span>
          </div>
        </div>

        {/* Live Terminal */}
        <HeroConsole />

      </div>

    </section>
  );
}
