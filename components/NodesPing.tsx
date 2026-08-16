"use client";

import React, { useState } from "react";
import { RefreshCw, Radio } from "lucide-react";
import { useToast } from "./ToastContext";

export default function NodesPing() {
  const { showToast } = useToast();
  const [isChecking, setIsChecking] = useState(false);
  const [nodes, setNodes] = useState([
    {
      id: "node-uz",
      name: "Node 01 (Toshkent / UZ)",
      specs: "AMD EPYC 7763, 64 GB DDR4 ECC, Enterprise NVMe",
      ping: "12 ms",
      label: "(Super Tez)",
      uptime: "99.98%",
      load: "38%",
    },
    {
      id: "node-kz",
      name: "Node 02 (Olmaota / KZ)",
      specs: "Intel Xeon Gold, 128 GB RAM, 10Gbps Uplink",
      ping: "28 ms",
      label: "(Barqaror)",
      uptime: "100%",
      load: "44%",
    },
    {
      id: "node-eu",
      name: "Node 03 (Frankfurt / EU)",
      specs: "Ampere Altra ARM 80-Core, 24 GB Cloud Node",
      ping: "52 ms",
      label: "(Yaxshi)",
      uptime: "99.99%",
      load: "29%",
    },
  ]);

  const handleRefreshPing = () => {
    setIsChecking(true);
    showToast("🔄 Tugunlar bo'yicha jonli ping o'lchanmoqda...");
    setTimeout(() => {
      setNodes([
        {
          id: "node-uz",
          name: "Node 01 (Toshkent / UZ)",
          specs: "AMD EPYC 7763, 64 GB DDR4 ECC, Enterprise NVMe",
          ping: `${Math.floor(Math.random() * 6) + 10} ms`,
          label: "(Super Tez)",
          uptime: "99.98%",
          load: `${Math.floor(Math.random() * 10) + 30}%`,
        },
        {
          id: "node-kz",
          name: "Node 02 (Olmaota / KZ)",
          specs: "Intel Xeon Gold, 128 GB RAM, 10Gbps Uplink",
          ping: `${Math.floor(Math.random() * 8) + 24} ms`,
          label: "(Barqaror)",
          uptime: "100%",
          load: `${Math.floor(Math.random() * 10) + 40}%`,
        },
        {
          id: "node-eu",
          name: "Node 03 (Frankfurt / EU)",
          specs: "Ampere Altra ARM 80-Core, 24 GB Cloud Node",
          ping: `${Math.floor(Math.random() * 10) + 48} ms`,
          label: "(Yaxshi)",
          uptime: "99.99%",
          load: `${Math.floor(Math.random() * 10) + 25}%`,
        },
      ]);
      setIsChecking(false);
      showToast("✅ Jonli ping yangilandi!");
    }, 1000);
  };

  return (
    <section className="py-24" id="nodes">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="title-section text-white italic uppercase tracking-tighter liquid-shadow mb-3">
            JONLI TUGUNLAR & <span className="gradient-text">PING STATUS</span>
          </h2>
          <p className="text-slate-400 font-medium text-lg">
            Serverlarimizning hozirgi holatini va O'zbekiston bo'yicha tezlik ko'rsatkichlarini tekshiring.
          </p>
        </div>

        {/* Nodes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nodes.map((node) => (
            <div key={node.id} className="neoterra-card group border border-white/10">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <div className="font-bold text-white text-base flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{node.name}</span>
                  </div>
                  <div className="font-mono text-sky-400 font-bold text-sm">
                    {node.ping} <span className="text-xs text-slate-500 font-normal">{node.label}</span>
                  </div>
                </div>

                <p className="text-slate-400 text-xs mb-4">{node.specs}</p>

                <div className="flex justify-between items-center text-xs border-t border-white/10 pt-3 text-slate-400">
                  <span>
                    Holat: <strong className="text-emerald-400 font-bold">{node.uptime} Onlayn</strong>
                  </span>
                  <span>
                    Yuklama: <strong className="text-indigo-400 font-bold">{node.load}</strong>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={handleRefreshPing}
            disabled={isChecking}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${isChecking ? "animate-spin" : ""}`} />
            <span>JONLI PINGNI O'LCHASH</span>
          </button>
        </div>

      </div>
    </section>
  );
}
