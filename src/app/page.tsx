"use client";

import { useState } from "react";
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
import LoginPopup from "@/components/LoginPopup";

export default function LandingPage() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  return (
    <div className="min-h-screen relative">
      <IntroductionSection onStartClick={() => setShowLoginPopup(true)} />
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

      {/* Login Popup */}
      {showLoginPopup && (
        <LoginPopup onClose={() => setShowLoginPopup(false)} />
      )}
    </div>
  );
}
