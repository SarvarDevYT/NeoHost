"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Serverni qanday qilib 100% bepul ochish mumkin?",
      a: "NeoHost yangi loyihalar uchun bepul starter tarifini taqdim etadi. Siz saytimizda ro'yxatdan o'tib, 'BEPUL SERVER OCHISH' tugmasi orqali 2GB RAM va 10GB SSD xotirali Minecraft yoki Bot serverini karta kiritmasdan ishga tushirishingiz mumkin.",
    },
    {
      q: "Pterodactyl panelga qanday kiriladi?",
      a: "Server yaratilgach, sizga shaxsiy Pterodactyl login va paroli beriladi. Siz panel orqali to'g'ridan-to'g'ri brauzerdan turib konsolni boshqarishingiz, fayllarni tahrirlashingiz va server holatini kuzatishingiz mumkin.",
    },
    {
      q: "Minecraft serverimga mod va plaginlarni qanday yuklayman?",
      a: "Pterodactyl panelidagi 'File Manager' bo'limi orqali .jar fayllarni sudrab tashlashingiz (Drag & Drop) yoki FileZilla / WinSCP orqali SFTP bilan cheksiz hajmda yuklashingiz mumkin.",
    },
    {
      q: "DDoS hujumlardan himoya bormi?",
      a: "Ha! Barcha tugunlarimiz Enterprise darajasidagi Anti-DDoS filtratsiyasi bilan jihozlangan. O'yinchilar hech qanday uzilishlarsiz va ping oshishisiz o'ynashda davom etadilar.",
    },
  ];

  return (
    <section className="py-24" id="faq">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="title-section text-white italic uppercase tracking-tighter liquid-shadow mb-3">
            KO'P BERILADIGAN <span className="gradient-text">SAVOLLAR</span>
          </h2>
          <p className="text-slate-400 font-medium text-lg">
            NeoHost va server yaratish haqida eng asosiy javoblar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-sky-500/40 bg-[#0e121c]/90 shadow-[0_0_25px_rgba(56,189,248,0.1)]"
                    : "border-white/10 bg-[#0a0d14]/60 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-7 py-5 flex items-center justify-between text-left text-white font-bold text-base cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-sky-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-7 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
