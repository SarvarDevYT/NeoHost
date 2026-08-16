import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          glow: "var(--primary-glow)",
          foreground: "var(--primary-foreground)",
        },
        accent: {
          cyan: "#38bdf8",
          blue: "#0ea5e9",
          indigo: "#6366f1",
          violet: "#8b5cf6",
          emerald: "#10b981",
        },
      },
      borderRadius: {
        pill: "9999px",
        "2xl": "1rem",
        "3xl": "1.5rem",
        card: "2rem",
        header: "2.5rem",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
