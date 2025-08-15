import StatsSection from "@/components/call-to-action";
import Features from "@/components/features";
import Footer from "@/components/footer";

import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroHeader />
      <HeroSection />
      <Features />
      <StatsSection />
      <Footer />
     
    </main>
  );
}
