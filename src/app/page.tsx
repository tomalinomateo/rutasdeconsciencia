"use client";

import SpacialBackground from "@/components/SpacialBackground";
import StatsSection from "@/components/Sections/StatsSection";
import AboutCourseSection from "@/components/Sections/AboutCourseSection";
import ForYouSection from "@/components/Sections/ForYouSection";
import AboutMeSection from "@/components/Sections/AboutMeSection";
import FAQSection from "@/components/Sections/FAQSection";
import CTASection from "@/components/Sections/CTASection";
import Footer from "@/components/Sections/Footer";
import TematicasSection from "@/components/Sections/TematicasSection";
import TransformationSection from "@/components/Sections/TransformationSection";
import IntroductionSection from "@/components/Sections/IntroductionSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen relative">
      <IntroductionSection />
      <SpacialBackground />

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
