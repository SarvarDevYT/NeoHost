"use client";

import React from "react";
import { MessageSquare, Youtube, Globe, HelpCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass-effect border-t border-white/10 mt-24 py-16 rounded-t-[3rem]">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-white liquid-shadow">
                NEO<span className="text-sky-400">HOST</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              O'zbekistondagi eng innovatsion o'yin va bot hostingi. Biz bilan o'z serveringizni bepul ishga tushiring!
            </p>
          </div>

          {/* Col 2: Useful Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sky-400 font-bold uppercase tracking-widest text-xs">
              FOYDALI HAVOLALAR
            </h4>
            <div className="flex flex-col gap-2.5 text-sm text-slate-400 font-medium">
              <a href="#" className="hover:text-sky-400 transition-colors">Bosh sahifa</a>
              <a href="#pricing" className="hover:text-sky-400 transition-colors">Tariflar & Rejalar</a>
              <a href="#pterodactyl" className="hover:text-sky-400 transition-colors">Pterodactyl Panel</a>
              <a href="#faq" className="hover:text-sky-400 transition-colors">Qoidalar & FAQ</a>
            </div>
          </div>

          {/* Col 3: Social & Community */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sky-400 font-bold uppercase tracking-widest text-xs">
              BIZ BILAN ULANING
            </h4>
            
            <div className="flex gap-3">
              <a
                href="https://t.me/NeoTerraServer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/50 text-white hover:text-sky-400 transition-all"
                title="Telegram"
              >
                <MessageSquare className="w-5 h-5" />
              </a>

              <a
                href="https://youtube.com/@NeoTerraMC"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/50 text-white hover:text-sky-400 transition-all"
                title="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>

              <a
                href="https://site.neoterra.uz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 hover:border-sky-400/50 text-white hover:text-sky-400 transition-all"
                title="NeoTerra Web"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>

            <div className="mt-1">
              <a
                href="#faq"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-500/10 border border-sky-500/30 hover:border-sky-400 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-sky-500/20 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]"
              >
                <HelpCircle className="w-4 h-4 text-sky-400" />
                <span>YORDAM & FAQ</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 font-medium uppercase tracking-widest">
          <p>© 2026 NEOHOST — Pterodactyl Game & Bot Hosting. Barcha huquqlar himoyalangan.</p>
          <p>NeoTerra Ekotizimi qoshida ishlab chiqilgan.</p>
        </div>

      </div>
    </footer>
  );
}
