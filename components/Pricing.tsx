"use client";

import React, { useState } from "react";
import { Check, Rocket, Cpu, HardDrive } from "lucide-react";

interface PricingProps {
  onOpenModal: (plan?: string) => void;
}

export default function Pricing({ onOpenModal }: PricingProps) {
  const [filter, setFilter] = useState<"all" | "free" | "minecraft" | "bots">("all");
  const [ram, setRam] = useState<number>(4);

  // Dynamic calculations based on RAM
  const cpu = ram <= 2 ? "1 vCPU Core" : ram <= 4 ? "2 vCPU Core" : ram <= 8 ? "4 vCPU Core" : "6 vCPU Core";
  const disk = `${Math.min(ram * 15, 200)} GB NVMe SSD`;
  const price = ram <= 3 ? 0 : ram * 12000;

  const plans = [
    {
      id: "free",
      name: "NEO FREE",
      category: "free",
      desc: "Do'stlar bilan o'ynash va sinab ko'rish uchun 100% bepul starter.",
      price: "0 so'm",
      period: "/ doimiy bepul",
      featured: false,
      buttonText: "BEPUL SERVER OCHISH",
      buttonStyle: "primary",
      features: [
        { strong: "2 GB", text: "Operativ Xotira (RAM)" },
        { strong: "1 vCPU", text: "AMD EPYC Core" },
        { strong: "10 GB", text: "NVMe SSD Xotira" },
        { strong: "Pterodactyl", text: "Web Boshqaruv" },
        { strong: "1 ta Zaxira", text: "(Auto-Backup)" },
      ],
    },
    {
      id: "starter",
      name: "NEO STARTER",
      category: "minecraft",
      desc: "O'rta o'lchamdagi Minecraft va bot loyihalari uchun qulay reja.",
      price: "45,000",
      period: "so'm / oyiga",
      featured: false,
      buttonText: "SERVERNI TANLASH",
      buttonStyle: "neutral",
      features: [
        { strong: "4 GB", text: "DDR4/DDR5 RAM" },
        { strong: "2 vCPU", text: "3.8GHz+ Turbo" },
        { strong: "30 GB", text: "NVMe SSD" },
        { strong: "Anti-DDoS", text: "Game Shield" },
        { strong: "1x MySQL", text: "Database" },
      ],
    },
    {
      id: "pro",
      name: "NEO PRO GAMER",
      category: "minecraft",
      desc: "Ko'p sonli plaginlar va 50+ o'yinchili faol serverlar uchun.",
      price: "85,000",
      period: "so'm / oyiga",
      featured: true,
      buttonText: "SERVERNI ISHGA TUSHIRISH",
      buttonStyle: "primary",
      features: [
        { strong: "8 GB", text: "Yuqori Tezlikdagi RAM" },
        { strong: "4 vCPU", text: "Dedicated Prioritet" },
        { strong: "60 GB", text: "Ultra NVMe Disk" },
        { strong: "3x MySQL", text: "+ Cheksiz Portlar" },
        { strong: "5 ta", text: "Avtomatik Zaxira" },
      ],
    },
    {
      id: "monster",
      name: "NEO MONSTER",
      category: "bots",
      desc: "Katta mini-o'yinlar, Bungee klasterlari va og'ir botlar uchun.",
      price: "160,000",
      period: "so'm / oyiga",
      featured: false,
      buttonText: "VIP REJANI YARATISH",
      buttonStyle: "neutral",
      features: [
        { strong: "16 GB", text: "Ekstremal RAM" },
        { strong: "6 vCPU", text: "Maksimal Quvvat" },
        { strong: "120 GB", text: "NVMe SSD" },
        { strong: "24/7", text: "Shaxsiy VIP Admin Yordami" },
        { strong: "Cheksiz", text: "MySQL va Zaxiralar" },
      ],
    },
  ];

  const filteredPlans = filter === "all" ? plans : plans.filter((p) => p.category === filter);

  return (
    <section className="py-24" id="pricing">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="title-section text-white italic uppercase tracking-tighter liquid-shadow mb-3">
            XUSH KELIBSIZ! <span className="gradient-text">TARIFLAR VA REJALAR</span>
          </h2>
          <p className="text-slate-400 font-medium text-lg">
            O'zingizga mos tarifni tanlang yoki bepul starter rejadan boshlab serveringizni rivojlantiring.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center items-center gap-2 mb-12 flex-wrap">
          {[
            { id: "all", label: "⚡ Barcha Tariflar" },
            { id: "free", label: "🎮 Bepul (Free)" },
            { id: "minecraft", label: "⚡ Minecraft" },
            { id: "bots", label: "🤖 Botlar & Dasturlar" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                filter === item.id
                  ? "bg-sky-500 text-white shadow-[0_4px_20px_rgba(56,189,248,0.35)]"
                  : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className={`neoterra-card group ${
                plan.featured ? "card-featured border-2 border-sky-400/80" : "border border-white/10"
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <h3 className={`text-2xl font-black italic uppercase ${plan.featured ? "text-sky-400" : "text-white"}`}>
                    {plan.name}
                  </h3>
                  {plan.featured && (
                    <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-sky-400 to-indigo-500 text-slate-950 text-[10px] font-black tracking-wider uppercase">
                      OMMABOP
                    </span>
                  )}
                </div>

                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{plan.desc}</p>

                <div className="flex items-baseline gap-1.5 my-4">
                  <div className={`text-4xl font-black ${plan.featured ? "gradient-text" : "text-white"}`}>
                    {plan.price}
                  </div>
                  <div className="text-slate-500 text-xs font-bold">{plan.period}</div>
                </div>

                <ul className="space-y-3 pt-5 border-t border-white/10 mb-7">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-400">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 stroke-[2.5]" />
                      <span>
                        <strong className="text-white font-bold">{feat.strong} </strong>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => onOpenModal(`${plan.name} (${plan.price})`)}
                className={`w-full py-3.5 rounded-full font-black text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  plan.buttonStyle === "primary"
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/25 hover:-translate-y-0.5"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Custom RAM Slider Configurator Card */}
        <div className="mt-14 rounded-[2rem] p-8 md:p-10 border border-sky-500/30 bg-gradient-to-br from-[#0c101a]/90 to-[#07090f]/95 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-black italic uppercase text-sky-400 mb-2 flex items-center gap-2">
                <Rocket className="w-6 h-6" /> O'z Serveringizni Yig'ing
              </h3>
              <p className="text-slate-400 text-sm mb-6">
                Slayderni surib kerakli RAM hajmini belgilang, tizim protsessor va diskni avtomatik hisoblab beradi.
              </p>

              <div className="mb-6">
                <div className="flex justify-between items-center mb-2.5">
                  <label htmlFor="ram-range" className="font-bold text-sm text-white">
                    Operativ Xotira (RAM):
                  </label>
                  <span className="px-3 py-1 rounded-full bg-sky-500/15 text-sky-400 text-xs font-mono font-bold border border-sky-500/30">
                    {ram} GB DDR4/DDR5
                  </span>
                </div>
                <input
                  id="ram-range"
                  type="range"
                  min="1"
                  max="24"
                  value={ram}
                  onChange={(e) => setRam(Number(e.target.value))}
                  className="custom-range-slider"
                  aria-label="RAM hajmini tanlash"
                  title="RAM hajmini tanlash"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-effect p-3.5 rounded-2xl border border-white/10">
                  <div className="text-[11px] text-slate-500 uppercase font-black tracking-wider flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-sky-400" /> Protsessor
                  </div>
                  <div className="font-mono text-sky-400 font-bold text-base mt-1">{cpu}</div>
                </div>
                <div className="glass-effect p-3.5 rounded-2xl border border-white/10">
                  <div className="text-[11px] text-slate-500 uppercase font-black tracking-wider flex items-center gap-1.5">
                    <HardDrive className="w-3.5 h-3.5 text-indigo-400" /> Disk Xotirasi
                  </div>
                  <div className="font-mono text-white font-bold text-base mt-1">{disk}</div>
                </div>
              </div>
            </div>

            {/* Right Summary Box */}
            <div className="lg:col-span-5 glass-effect p-8 rounded-[2rem] text-center flex flex-col justify-center border border-white/10">
              <div className="text-xs text-slate-400 uppercase font-black tracking-widest">Taxminiy Narx:</div>
              <div className="text-4xl font-black my-3 text-white liquid-shadow">
                {price === 0 ? (
                  <span className="text-emerald-400">0 so'm</span>
                ) : (
                  <span>{price.toLocaleString("uz-UZ")} so'm</span>
                )}
                <span className="text-xs text-slate-500 font-normal ml-1">/ oyiga</span>
              </div>
              <p className="text-slate-500 text-xs mb-5">
                * 1-3 GB hajmdagi serverlar yangi foydalanuvchilar uchun bepul beriladi!
              </p>
              <button
                onClick={() => onOpenModal(`Custom Server (${ram} GB RAM)`)}
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                HOSTING SERVERINI YARATISH
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
