"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
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
  const { user } = useAuth();
  const router = useRouter();

  const handleStartClick = () => {
    if (user) {
      // If user is authenticated, redirect to course
      router.push("/course");
    } else {
      // If user is not authenticated, show login popup
      setShowLoginPopup(true);
    }
  };

  return (
    <div className="min-h-screen relative">
      <IntroductionSection onStartClick={handleStartClick} />
      <SpacialBackground />

      <StatsSection />
      <AboutCourseSection />
      <TransformationSection />
      <TematicasSection />
      <ForYouSection />
      <AboutMeSection />
      <FAQSection />
      <CTASection onLoginClick={handleStartClick} />
      <Footer />

      {/* Login Popup */}
      {showLoginPopup && (
        <LoginPopup onClose={() => setShowLoginPopup(false)} />
      )}
    </div>
  );
}
