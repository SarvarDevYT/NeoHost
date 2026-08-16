import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/components/ToastContext";
import { LanguageProvider } from "@/components/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://neohost.uz"),
  title: "NeoHost — O'zbekistonning Eng Zamonaviy Game & Pterodactyl Hostingi | NeoTerra",
  description: "NeoHost — NeoTerra ekotizimiga asoslangan O'zbekistondagi eng zamonaviy o'yin va bot hostingi! Pterodactyl paneli, minimal ping va 100% bepul boshlash.",
  keywords: ["NeoTerra", "NeoHost", "Minecraft server Uzbekistan", "Pterodactyl hosting UZ", "bepul server yaratish", "site.neoterra.uz"],
  authors: [{ name: "NeoTerra Team" }],
  openGraph: {
    title: "NEOHOST — O'zbekistonning Eng Zamonaviy Game Hostingi",
    description: "O'zbekistondagi eng innovatsion Game & Pterodactyl hostingi! play.neohost.uz orqali o'yinga ulaning.",
    images: ["/hero_bg.jpg"],
    type: "website",
  },
  icons: {
    icon: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground min-h-screen selection:bg-primary/30 selection:text-white">
        <LanguageProvider>
          <ToastProvider>{children}</ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
