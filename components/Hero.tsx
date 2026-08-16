"use client";

import React from "react";
import Image from "next/image";
import { Copy, Download } from "lucide-react";
import { useToast } from "./ToastContext";
import HeroConsole from "./HeroConsole";

interface HeroProps {
  onOpenModal: (plan?: string) => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  const { showToast } = useToast();

  const handleCopyIp = () => {
    navigator.clipboard.writeText("play.neohost.uz").then(() => {
      showToast("📋 Server IP [play.neohost.uz] nusxalandi!");
    }).catch(() => {
      showToast("📋 Server IP: play.neohost.uz");
    });
  };

  return (
    <section className="relative min-h-[95vh] pt-32 pb-20 flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* Ambient Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-full pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[20%] right-[20%] w-[450px] h-[450px] bg-secondary/20 blur-[120px] rounded-full" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        
        {/* Floating Logo Badge (NeoTerra Official Style) */}
        <div className="relative w-[300px] md:w-[360px] h-[300px] md:h-[360px] rounded-full p-2 glass-effect border-white/20 liquid-shadow animate-float group mx-auto mb-9">
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

        <p className="text-zinc-400 max-w-2xl mx-auto font-medium text-lg mb-9 leading-relaxed">
          NeoTerra ekotizimining rasmiy o'yin va bot hosting platformasi. Minimal ping, professional Pterodactyl paneli va 100% bepul boshlash imkoniyati.
        </p>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
          
          {/* Server IP Copy Pill */}
          <div
            onClick={handleCopyIp}
            className="group glass-effect px-8 py-4 rounded-[2rem] cursor-pointer hover:bg-white/10 transition-all duration-300 active:scale-95 text-left"
          >
            <div className="flex flex-col items-start">
              <span className="text-[10px] text-primary/80 font-bold uppercase tracking-[0.2em] mb-0.5">
                Server IP (Nusxalash)
              </span>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-mono text-white font-bold">
                  play.neohost.uz
                </span>
                <Copy className="w-5 h-5 text-white/40 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </div>

          {/* Main Action Button */}
          <button
            onClick={() => onOpenModal("Neo Free Starter")}
            className="inline-flex items-center justify-center gap-3 py-5 px-10 bg-white text-black hover:bg-white/90 font-black italic text-xl rounded-[2rem] shadow-2xl transition-transform hover:scale-105 cursor-pointer whitespace-nowrap"
          >
            <span>BEPUL SERVER OCHISH</span>
            <Download className="w-5 h-5 stroke-[2.5]" />
          </button>

        </div>

        {/* Live Counters Row */}
        <div className="flex items-center justify-center gap-4 flex-wrap mb-10">
          <div className="glass-effect px-6 py-4 rounded-[2rem] flex flex-col items-center min-w-[160px]">
            <span className="text-2xl font-bold text-primary liquid-shadow">99.98%</span>
            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Onlayn Uptime</span>
          </div>
          <div className="glass-effect px-6 py-4 rounded-[2rem] flex flex-col items-center min-w-[160px]">
            <span className="text-2xl font-bold text-white liquid-shadow">&lt;15ms</span>
            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Toshkent Ping</span>
          </div>
          <div className="glass-effect px-6 py-4 rounded-[2rem] flex flex-col items-center min-w-[160px]">
            <span className="text-2xl font-bold text-primary uppercase liquid-shadow">ONLINE</span>
            <span className="text-[10px] text-white/50 uppercase tracking-[0.2em] font-bold">Server Status</span>
          </div>
        </div>

        {/* Live Terminal */}
        <HeroConsole />

      </div>

    </section>
  );
}
