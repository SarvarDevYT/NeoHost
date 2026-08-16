"use client";

import React from "react";
import Image from "next/image";

export default function PterodactylTour() {
  return (
    <section className="py-24" id="pterodactyl">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="title-section text-white italic uppercase tracking-tighter liquid-shadow mb-3">
            ZAMONAVIY <span className="gradient-text">PTERODACTYL PANEL</span>
          </h2>
          <p className="text-zinc-400 font-medium text-lg">
            Har qanday o'yin serverini professional tarzda boshqaring: konsol, fayllar, backup va plaginlar bir joyda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Features Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            <div className="glass-effect p-5 rounded-2xl border-l-4 border-primary">
              <h4 className="text-white font-bold text-base mb-1">⚡ Jonli Web Konsol & Tezkor Boshqaruv</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Serveringiz loglarini real vaqtda kuzating, buyruqlarni yuboring va bir zumda qayta ishga tushiring.
              </p>
            </div>

            <div className="glass-effect p-5 rounded-2xl">
              <h4 className="text-white font-bold text-base mb-1">📁 Web Fayl Menejeri & SFTP</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Brauzer ichida fayllarni to'g'ridan-to'g'ri tahrirlang yoki FileZilla / WinSCP orqali cheksiz tezlikda yuklang.
              </p>
            </div>

            <div className="glass-effect p-5 rounded-2xl">
              <h4 className="text-white font-bold text-base mb-1">💾 1-Klikda Avtomatik Zaxira (Backup)</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                Dunyolaringiz va sozlamalaringizni bir tugma bilan saqlang va soniyada qayta tiklang.
              </p>
            </div>

            <div className="glass-effect p-5 rounded-2xl">
              <h4 className="text-white font-bold text-base mb-1">🗄️ MySQL / MariaDB Ma'lumotlar Bazasi</h4>
              <p className="text-zinc-400 text-xs leading-relaxed">
                AuthMe, LuckPerms, CoreProtect kabi plaginlar uchun bepul MySQL bazani bir bosishda faollashtiring.
              </p>
            </div>

          </div>

          {/* Screenshot Preview Column */}
          <div className="lg:col-span-7">
            <div className="relative rounded-[2rem] overflow-hidden border border-primary/35 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(34,197,94,0.15)] group">
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
