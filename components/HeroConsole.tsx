"use client";

import React, { useState, useEffect, useRef } from "react";
import { Play, RotateCw, Square } from "lucide-react";
import { useToast } from "./ToastContext";
import { useLanguage } from "./LanguageContext";

interface LogEntry {
  id: string;
  time: string;
  type: "INFO" | "SUCCESS" | "WARN";
  message: string;
}

export default function HeroConsole() {
  const { showToast } = useToast();
  const { t } = useLanguage();
  const [logs, setLogs] = useState<LogEntry[]>([
    { id: "1", time: "[10:15:02]", type: "INFO", message: "Pterodactyl Daemon (Wings) v1.11.8 connected securely." },
    { id: "2", time: "[10:15:04]", type: "INFO", message: "PaperSpigot 1.21 initialized with Java 21 OpenJDK." },
    { id: "3", time: "[10:15:06]", type: "SUCCESS", message: "Done (1.89s)! Server listening on 0.0.0.0:25565" },
    { id: "4", time: "[10:15:09]", type: "INFO", message: "Player [Iskandar_Neo] joined the game from Tashkent (12ms)" },
    { id: "5", time: "[10:15:15]", type: "SUCCESS", message: "TPS: 20.0 (Memory: 3.4GB / 8GB)" },
  ]);
  const [cmdInput, setCmdInput] = useState("");
  const [status, setStatus] = useState<"ONLINE" | "RESTARTING" | "OFFLINE">("ONLINE");
  const terminalBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalBoxRef.current) {
      terminalBoxRef.current.scrollTop = terminalBoxRef.current.scrollHeight;
    }
  }, [logs]);

  const getTimeString = () => {
    const d = new Date();
    return `[${d.toTimeString().split(" ")[0]}]`;
  };

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Sanitize command input: strip control characters, limit length to 80 chars
    const cmd = cmdInput.trim().replace(/[\x00-\x1F\x7F<>]/g, "").slice(0, 80);
    if (!cmd) return;

    const time = getTimeString();
    const newLogs: LogEntry[] = [
      ...logs,
      { id: Date.now().toString(), time, type: "INFO", message: `> ${cmd}` },
    ];

    const lower = cmd.toLowerCase();
    if (lower === "/help" || lower === "help") {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        time,
        type: "INFO",
        message: t.console.helpResponse,
      });
    } else if (lower === "/tps") {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        time,
        type: "SUCCESS",
        message: t.console.tpsResponse,
      });
    } else if (lower === "/list") {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        time,
        type: "INFO",
        message: t.console.listResponse,
      });
    } else if (lower === "/status") {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        time,
        type: "SUCCESS",
        message: t.console.statusResponse,
      });
    } else if (lower.startsWith("/say ")) {
      const msg = cmd.substring(5);
      newLogs.push({
        id: (Date.now() + 1).toString(),
        time,
        type: "INFO",
        message: `[Broadcast] Server Admin: ${msg}`,
      });
      showToast(`📢 ${msg}`);
    } else if (lower === "/clear" || lower === "clear") {
      setLogs([]);
      setCmdInput("");
      return;
    } else {
      newLogs.push({
        id: (Date.now() + 1).toString(),
        time,
        type: "WARN",
        message: t.console.unknownCommand.replace("{cmd}", cmd),
      });
    }

    setLogs(newLogs);
    setCmdInput("");
  };

  const handleStart = () => {
    setStatus("ONLINE");
    const time = getTimeString();
    setLogs((prev) => [
      ...prev,
      { id: Date.now().toString(), time, type: "INFO", message: "Starting server daemon..." },
      { id: (Date.now() + 1).toString(), time, type: "SUCCESS", message: "Server listening on 0.0.0.0:25565" },
    ]);
    showToast(t.console.toastStart);
  };

  const handleRestart = () => {
    setStatus("RESTARTING");
    showToast(t.console.toastRestart);
    const time = getTimeString();
    setLogs((prev) => [
      ...prev,
      { id: Date.now().toString(), time, type: "WARN", message: "Server restarting (Restart)..." },
    ]);
    setTimeout(() => {
      setStatus("ONLINE");
      const tTime = getTimeString();
      setLogs((prev) => [
        ...prev,
        { id: Date.now().toString(), time: tTime, type: "SUCCESS", message: "Server restarted (20.0 TPS)!" },
      ]);
      showToast(t.console.toastRestarted);
    }, 1500);
  };

  const handleStop = () => {
    setStatus("OFFLINE");
    const time = getTimeString();
    setLogs((prev) => [
      ...prev,
      { id: Date.now().toString(), time, type: "WARN", message: "Server stopped." },
    ]);
    showToast(t.console.toastStop);
  };

  return (
    <div className="w-full max-w-[1000px] mx-auto mt-12">
      <div className="bg-[#0b0e17]/90 border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
        
        {/* Header Bar */}
        <div className="px-6 py-3.5 bg-white/[0.03] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          </div>
          
          <div className="font-mono text-xs flex items-center gap-2 text-slate-400">
            <span>⚡ node-01.neohost.uz</span>
            <span className="text-sky-400 font-bold">[v1.21 PaperSpigot]</span>
          </div>

          <div
            className={`px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase ${
              status === "ONLINE"
                ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                : status === "RESTARTING"
                ? "bg-amber-500/15 text-amber-400 border border-amber-500/30"
                : "bg-red-500/15 text-red-400 border border-red-500/30"
            }`}
          >
            ● {status === "ONLINE" ? t.console.statusOnline : status === "RESTARTING" ? t.console.statusRestarting : t.console.statusOffline}
          </div>
        </div>

        {/* Console Body */}
        <div className="p-6 flex flex-col gap-4">
          
          {/* Terminal Logs Area */}
          <div
            ref={terminalBoxRef}
            className="bg-[#05070c] border border-white/[0.06] rounded-2xl p-4 font-mono text-[13px] h-44 overflow-y-auto flex flex-col gap-1 text-left"
          >
            {logs.map((log) => (
              <div key={log.id} className="flex items-baseline gap-2">
                <span className="text-slate-500 shrink-0">{log.time}</span>
                <span
                  className={`font-bold shrink-0 ${
                    log.type === "SUCCESS"
                      ? "text-emerald-400"
                      : log.type === "WARN"
                      ? "text-amber-400"
                      : "text-sky-400"
                  }`}
                >
                  [{log.type}]
                </span>
                <span className="text-slate-200">{log.message}</span>
              </div>
            ))}
          </div>

          {/* Command Prompt Input */}
          <form onSubmit={handleCommandSubmit} className="flex items-center gap-2.5 bg-[#05070c] border border-sky-500/30 rounded-2xl px-4 py-2.5">
            <span className="text-sky-400 font-mono font-bold text-sm">&gt;</span>
            <input
              type="text"
              value={cmdInput}
              onChange={(e) => setCmdInput(e.target.value)}
              placeholder={t.console.placeholder}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono text-sm placeholder:text-slate-600"
              title="Server command"
              aria-label="Server command"
            />
            <button type="submit" className="text-xs font-mono font-bold text-sky-400 hover:text-white px-2 py-1 transition-colors">
              {t.console.send}
            </button>
          </form>

          {/* Controls Footer */}
          <div className="flex items-center justify-between flex-wrap gap-3 pt-1">
            <div className="flex items-center gap-2">
              <button
                onClick={handleStart}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition-all cursor-pointer"
              >
                <Play className="w-3.5 h-3.5" />
                <span>{t.console.start}</span>
              </button>
              <button
                onClick={handleRestart}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 transition-all cursor-pointer"
              >
                <RotateCw className="w-3.5 h-3.5" />
                <span>{t.console.restart}</span>
              </button>
              <button
                onClick={handleStop}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 transition-all cursor-pointer"
              >
                <Square className="w-3.5 h-3.5" />
                <span>{t.console.stop}</span>
              </button>
            </div>

            <div className="text-slate-500 font-mono text-xs">
              SFTP: <span className="text-slate-300">node1.neohost.uz:2022</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
