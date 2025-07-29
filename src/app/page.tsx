"use client";

import SpacialBackground from "@/components/SpacialBackground";
import HeroSection from "@/components/Sections/HeroSection";
import StatsSection from "@/components/Sections/StatsSection";
import AboutCourseSection from "@/components/Sections/AboutCourseSection";
import ForYouSection from "@/components/Sections/ForYouSection";
import AboutMeSection from "@/components/Sections/AboutMeSection";
import FAQSection from "@/components/Sections/FAQSection";
import CTASection from "@/components/Sections/CTASection";
import Footer from "@/components/Sections/Footer";
import StickyHeader from "@/components/StickyHeader";
import TematicasSection from "@/components/Sections/TematicasSection";
import TransformationSection from "@/components/Sections/TransformationSection";

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen relative">
      <SpacialBackground />
      <StickyHeader />
      <HeroSection scrollToSection={scrollToSection} />
      <StatsSection />
      <AboutCourseSection />
      <TransformationSection />
      <TematicasSection />
      <ForYouSection />
      <AboutMeSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
