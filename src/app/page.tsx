"use client";

import SpacialBackground from "@/components/SpacialBackground";
import Header from "@/components/Sections/Header";
import HeroSection from "@/components/Sections/HeroSection";
import StatsSection from "@/components/Sections/StatsSection";
import AboutCourseSection from "@/components/Sections/AboutCourseSection";
import ForYouSection from "@/components/Sections/ForYouSection";
import AboutMeSection from "@/components/Sections/AboutMeSection";
import FAQSection from "@/components/Sections/FAQSection";
import CTASection from "@/components/Sections/CTASection";
import Footer from "@/components/Sections/Footer";
import StyleSelector from "@/components/StyleSelector";
import FontSelector from "@/components/FontSelector";
import { useFontLoader } from "@/hooks/useFontLoader";

export default function LandingPage() {
  // Cargar fuentes dinámicamente
  useFontLoader();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative">
      <SpacialBackground />
      <Header scrollToSection={scrollToSection} />
      <HeroSection scrollToSection={scrollToSection} />
      <StatsSection />
      <AboutCourseSection />
      <ForYouSection />
      <AboutMeSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <StyleSelector />
      <FontSelector />
    </div>
  );
}
