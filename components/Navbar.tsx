"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Globe, UserCheck } from "lucide-react";
import { useToast } from "./ToastContext";

interface NavbarProps {
  onOpenModal: (plan?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const { showToast } = useToast();
  const [lang, setLang] = useState<"UZ" | "RU" | "EN">("UZ");

  const toggleLanguage = () => {
    const nextLang = lang === "UZ" ? "RU" : lang === "RU" ? "EN" : "UZ";
    setLang(nextLang);
    showToast(
      nextLang === "UZ"
        ? "Til o'zgartirildi: O'zbekcha"
        : nextLang === "RU"
        ? "Язык изменен: Русский"
        : "Language changed: English"
    );
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[96%] max-w-[1600px]">
      <div className="glass-effect rounded-[2.5rem] px-7 h-[68px] flex items-center justify-between shadow-2xl">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group transition-transform hover:scale-105">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
            <Image
              src="/logo.jpg"
              alt="NeoHost Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white liquid-shadow whitespace-nowrap">
            NEO <span className="text-primary">HOST</span>
          </span>
        </a>

        {/* Center Pill Navigation */}
        <nav className="hidden lg:flex items-center justify-center gap-1.5">
          <a
            href="#"
            className="px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all bg-white/10 text-white shadow-lg shadow-white/5"
          >
            🏠 ASOSIY
          </a>
          <a
            href="#pricing"
            className="px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all text-white/70 hover:text-white hover:bg-white/10"
          >
            ⚡ TARIFLAR
          </a>
          <a
            href="#pterodactyl"
            className="px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all text-white/70 hover:text-white hover:bg-white/10"
          >
            🚀 PTERODACTYL
          </a>
          <a
            href="#features"
            className="px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all text-white/70 hover:text-white hover:bg-white/10"
          >
            💎 AFZALLIKLAR
          </a>
          <a
            href="#nodes"
            className="px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all text-white/70 hover:text-white hover:bg-white/10"
          >
            📊 STATUS
          </a>
          <a
            href="#faq"
            className="px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all text-white/70 hover:text-white hover:bg-white/10"
          >
            ❓ FAQ
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Switcher Pill */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 h-10 px-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-black transition-all cursor-pointer"
            title="Tilni almashtirish"
            aria-label="Tilni almashtirish"
          >
            <Globe className="w-3.5 h-3.5 text-primary" />
            <span>{lang}</span>
          </button>

          {/* Login / Panel Action Button */}
          <button
            onClick={() => onOpenModal("Neo Free Starter")}
            className="inline-flex items-center justify-center gap-1.5 h-10 px-6 rounded-full bg-primary hover:bg-primary/80 text-primary-foreground font-black text-xs uppercase tracking-wider shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            <UserCheck className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>PANELGA KIRISH</span>
          </button>
        </div>

      </div>
    </header>
  );
}
