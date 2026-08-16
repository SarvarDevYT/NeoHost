"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Globe, UserCheck } from "lucide-react";
import { useToast } from "./ToastContext";

interface NavbarProps {
  onOpenModal: (plan?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const { showToast } = useToast();
  const [lang, setLang] = useState<"UZ" | "RU" | "EN">("UZ");
  const [activeSection, setActiveSection] = useState<string>("hero");

  const navItems = [
    { id: "hero", label: "🏠 ASOSIY", href: "#hero" },
    { id: "pricing", label: "⚡ TARIFLAR", href: "#pricing" },
    { id: "pterodactyl", label: "🚀 PTERODACTYL", href: "#pterodactyl" },
    { id: "features", label: "💎 AFZALLIKLAR", href: "#features" },
    { id: "nodes", label: "📊 STATUS", href: "#nodes" },
    { id: "faq", label: "❓ FAQ", href: "#faq" },
  ];

  // Scroll-spy: Detect current active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Offset for navbar height

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string, href: string) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const top = element.offsetTop - 90; // Clear floating navbar
      window.scrollTo({
        top: Math.max(0, top),
        behavior: "smooth",
      });
    }
  };

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
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "hero", "#hero")}
          className="flex items-center gap-3 group transition-transform hover:scale-105"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)]">
            <Image
              src="/logo.jpg"
              alt="NeoHost Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="text-2xl font-black tracking-tighter text-white liquid-shadow whitespace-nowrap">
            NEO <span className="text-sky-400">HOST</span>
          </span>
        </a>

        {/* Center Pill Navigation: Clean subtle active glass indicator */}
        <nav className="hidden lg:flex items-center justify-center gap-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.id, item.href)}
                className={`px-4 py-2 rounded-full text-xs font-black tracking-wider uppercase transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-white/10 text-white shadow-lg shadow-white/5 border border-white/10"
                    : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {item.label}
              </a>
            );
          })}
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
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span>{lang}</span>
          </button>

          {/* Login / Panel Action Button */}
          <button
            onClick={() => onOpenModal("Neo Free Starter")}
            className="inline-flex items-center justify-center gap-1.5 h-10 px-6 rounded-full bg-white hover:bg-white/90 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            <UserCheck className="w-3.5 h-3.5 stroke-[2.5]" />
            <span>PANELGA KIRISH</span>
          </button>
        </div>

      </div>
    </header>
  );
}
