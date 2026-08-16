"use client";

import React from "react";
import { Shield, Zap, Box, Layers } from "lucide-react";

export default function FeaturesBento() {
  return (
    <section className="py-24" id="features">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="title-section text-white italic uppercase tracking-tighter liquid-shadow mb-3">
            NIMAGA AYNAN <span className="gradient-text">NEOHOST?</span>
          </h2>
          <p className="text-zinc-400 font-medium text-lg">
            Biz o'yin serverlarini eng so'nggi texnologiyalar asosida qurilgan infratuzilmada taqdim etamiz.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 2-column span */}
          <div className="neoterra-card md:col-span-2 group">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-black tracking-wider uppercase mb-4">
                <Zap className="w-3.5 h-3.5" />
                <span>10 Gbps Uplink // 0% Packet Loss</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                O'zbekiston va MDH Uchun Minimal Ping (&lt;15ms)
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Toshkent, Samarqand va mintaqaviy internet provayderlari (Uztelecom, Sarkor, TPS, Beeline) bilan to'g'ridan-to'g'ri bog'langan serverlarimiz har qanday laglarning oldini oladi.
              </p>
            </div>
          </div>

          {/* Card 2: Anti DDoS */}
          <div className="neoterra-card group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-1.5">Anti-DDoS Shield</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                L3/L4/L7 darajasidagi hujumlarni avtomatik filtrlaydigan aqlli xavfsizlik devori.
              </p>
            </div>
          </div>

          {/* Card 3: 1-Click Mods */}
          <div className="neoterra-card group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white mb-1.5">1-Klikda Modlar</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Paper, Purpur, Forge, Fabric, Velocity, Spigot yoki BungeeCord'ni bir zumda o'rnating.
              </p>
            </div>
          </div>

          {/* Card 4: 2-column span */}
          <div className="neoterra-card md:col-span-2 group">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-black tracking-wider uppercase mb-4">
                <Box className="w-3.5 h-3.5" />
                <span>100% Izolyatsiya // NVMe Read: 3,500 MB/s</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-2">
                Pterodactyl Wings & Docker Xavfsizligi
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Har bir server alohida Docker konteynerida ishlaydi. Sizning resurslaringiz to'liq kafolatlangan bo'lib, boshqa foydalanuvchilar sizga aslo ta'sir qilmaydi.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
