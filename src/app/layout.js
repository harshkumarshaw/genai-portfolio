import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import QuickJump from "@/components/layout/QuickJump";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Harsh Kumar Shaw | GenAI Engineer",
  description: "I build production-ready GenAI systems and explore research-driven solutions through independent work.",
  keywords: ["GenAI", "AI Engineer", "Machine Learning", "Software Engineer", "Portfolio"],
  openGraph: {
    title: "Harsh Kumar Shaw | GenAI Engineer",
    description: "I build production-ready GenAI systems and explore research-driven solutions through independent work.",
    type: "website",
  },
};

import { Providers } from "./Providers";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <Providers>
          <ParticleBackground />
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
          <QuickJump />
        </Providers>
      </body>
    </html>
  );
}
