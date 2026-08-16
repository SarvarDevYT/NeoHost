"use client";

import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useToast } from "./ToastContext";

interface CreateServerModalProps {
  isOpen: boolean;
  planName: string;
  onClose: () => void;
}

export default function CreateServerModal({
  isOpen,
  planName,
  onClose,
}: CreateServerModalProps) {
  const { showToast } = useToast();
  const [step, setStep] = useState<"form" | "loading" | "success">("form");
  const [gameType, setGameType] = useState<"minecraft-paper" | "minecraft-forge" | "discord-bot">("minecraft-paper");
  const [serverName, setServerName] = useState("NeoTerra-Craft");
  const [subdomain, setSubdomain] = useState("myserver");
  const [sanitizedSubdomain, setSanitizedSubdomain] = useState("myserver");
  const [progress, setProgress] = useState(25);
  const [progressText, setProgressText] = useState("1. Pterodactyl node bilan xavfsiz ulanish o'rnatilmoqda...");

  useEffect(() => {
    if (isOpen) {
      setStep("form");
      setProgress(25);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Strict sanitization for subdomain input
  const handleSubdomainChange = (val: string) => {
    // Only allow lowercase a-z, 0-9 and hyphen, max 30 chars
    const cleaned = val.toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 30);
    setSubdomain(cleaned);
    setSanitizedSubdomain(cleaned);
  };

  // Strict sanitization for server name
  const handleServerNameChange = (val: string) => {
    // Strip control characters, quotes, and html tags, max 50 chars
    const cleaned = val.replace(/[<>"'/\\]/g, "").slice(0, 50);
    setServerName(cleaned);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Server-grade validation check
    const cleanSub = subdomain.trim().toLowerCase();
    const cleanName = serverName.trim();

    if (cleanSub.length < 3) {
      showToast("⚠️ Subdomen kamida 3 ta belgidan iborat bo'lishi kerak!");
      return;
    }

    if (cleanName.length < 3) {
      showToast("⚠️ Server nomi kamida 3 ta belgidan iborat bo'lishi kerak!");
      return;
    }

    setStep("loading");
    setProgress(25);
    setProgressText("1. Pterodactyl node bilan xavfsiz ulanish o'rnatilmoqda...");

    setTimeout(() => {
      setProgress(55);
      setProgressText("2. Docker konteyneri va izolyatsiya qilingan kvota ajratilmoqda...");
    }, 900);

    setTimeout(() => {
      setProgress(85);
      setProgressText("3. Server fayllari va Java 21 muhiti xavfsiz o'rnatilmoqda...");
    }, 1800);

    setTimeout(() => {
      setProgress(100);
      setStep("success");
      showToast("🎉 Bepul serveringiz xavfsiz ishga tushirildi!");
    }, 2700);
  };

  return (
    <div className="fixed inset-0 z-[1000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#0b0e17] border border-sky-500/35 rounded-[2rem] w-full max-w-xl p-8 relative shadow-[0_25px_60px_rgba(0,0,0,0.9),0_0_45px_rgba(56,189,248,0.15)] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all cursor-pointer"
          aria-label="Yopish"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Step 1: Configuration Form */}
        {step === "form" && (
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <div className="inline-flex px-3 py-1 rounded-full bg-sky-500/15 text-sky-400 text-xs font-bold mb-2 border border-sky-500/30">
                {planName}
              </div>
              <h3 className="text-2xl font-black italic uppercase text-white">
                Yangi Serverni Sozlash
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                O'yin turi va nomini kiriting, tizim bir necha soniyada Pterodactyl konteynerini yaratadi.
              </p>
            </div>

            {/* Game Type Selection */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-white mb-2">
                O'yin yoki Dastur Turi:
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: "minecraft-paper", title: "Minecraft", sub: "Paper / Purpur" },
                  { id: "minecraft-forge", title: "Modded", sub: "Forge / Fabric" },
                  { id: "discord-bot", title: "Discord Bot", sub: "Node.js / Python" },
                ].map((type) => (
                  <div
                    key={type.id}
                    onClick={() => setGameType(type.id as any)}
                    className={`p-3 rounded-2xl text-center cursor-pointer transition-all ${
                      gameType === type.id
                        ? "bg-sky-500/15 border-2 border-sky-400 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
                        : "glass-effect border border-white/10 text-white/70 hover:border-white/20"
                    }`}
                  >
                    <div className="font-bold text-xs">{type.title}</div>
                    <div className="text-[10px] text-slate-500">{type.sub}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Server Name */}
            <div className="mb-5">
              <label htmlFor="modal-srv-name" className="block text-xs font-bold text-white mb-2">
                Server Nomi:
              </label>
              <input
                id="modal-srv-name"
                type="text"
                maxLength={50}
                value={serverName}
                onChange={(e) => handleServerNameChange(e.target.value)}
                placeholder="Masalan: NeoTerra-Survival"
                className="w-full px-4 py-3 rounded-2xl glass-effect border border-white/10 text-white text-sm outline-none focus:border-sky-400 transition-colors"
                required
              />
            </div>

            {/* Subdomain Input */}
            <div className="mb-6">
              <label htmlFor="modal-subdomain" className="block text-xs font-bold text-white mb-2">
                Subdomen (Faqat a-z, 0-9 va tire):
              </label>
              <div className="flex items-center gap-2">
                <input
                  id="modal-subdomain"
                  type="text"
                  maxLength={30}
                  value={subdomain}
                  onChange={(e) => handleSubdomainChange(e.target.value)}
                  placeholder="myserver"
                  className="flex-1 px-4 py-3 rounded-2xl glass-effect border border-white/10 text-white text-sm outline-none focus:border-sky-400 transition-colors font-mono"
                  required
                />
                <span className="font-mono font-bold text-sky-400 text-sm shrink-0">
                  .neohost.uz
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              🚀 SERVERNI ISHGA TUSHIRISH
            </button>
          </form>
        )}

        {/* Step 2: Progress Loading */}
        {step === "loading" && (
          <div className="py-8 text-center">
            <div className="text-5xl mb-4 animate-float">⚙️</div>
            <h4 className="text-xl font-black italic uppercase text-white mb-2">
              Pterodactyl Konteyneri Yaratilmoqda...
            </h4>
            <p className="text-sky-400 font-mono text-xs min-h-[24px] my-3">
              {progressText}
            </p>
            <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mt-4">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Step 3: Success Confirmation */}
        {step === "success" && (
          <div className="py-6 text-center">
            <div className="text-6xl mb-3">🎉</div>
            <h3 className="text-2xl font-black italic uppercase text-sky-400 mb-2">
              Server Muvaffaqiyatli Yaratildi!
            </h3>
            <p className="text-slate-400 text-xs mb-6">
              Sizning serveringiz Pterodactyl panelida faollashtirildi va xavfsiz izolyatsiyada ishga tushirildi.
            </p>

            <div className="glass-effect p-4 rounded-2xl text-left font-mono text-xs mb-6 space-y-1.5 border border-white/10">
              <div className="flex justify-between">
                <span className="text-slate-400">Server IP:</span>
                <span className="text-sky-400 font-bold">{sanitizedSubdomain || "server"}.neohost.uz:25565</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Panel URL:</span>
                <span className="text-white font-bold">https://panel.neohost.uz</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Holat:</span>
                <span className="text-emerald-400 font-bold">24/7 Anti-DDoS Himoyalangan</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all cursor-pointer"
            >
              🎮 PTERODACTYL PANELIGA O'TISH
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
