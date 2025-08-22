"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter, useSearchParams } from "next/navigation";
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
import { PageTransition, EntranceTransition } from "@/components/ui";

export default function LandingPage() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showPageTransition, setShowPageTransition] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const [showEntranceTransition, setShowEntranceTransition] = useState(true);
  const [showSimpleTransition, setShowSimpleTransition] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();

  // Check if coming from course
  useEffect(() => {
    const fromCourse = searchParams.get("from") === "course";

    if (fromCourse) {
      // Skip entrance transition, show simple dark transition
      setShowEntranceTransition(false);
      setShowSimpleTransition(true);

      // Hide simple transition after a short delay
      const timer = setTimeout(() => {
        setShowSimpleTransition(false);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, [searchParams]);

  const handleEntranceComplete = () => {
    setShowEntranceTransition(false);
  };

  const handleStartClick = () => {
    if (user) {
      // Start button loading state
      setIsButtonLoading(true);

      // Show page transition overlay immediately
      setShowPageTransition(true);
    } else {
      // If user is not authenticated, show login popup
      setShowLoginPopup(true);
    }
  };

  const handleTransitionComplete = () => {
    // Stop button loading when transition completes
    setIsButtonLoading(false);
    router.push("/course");
  };

  return (
    <>
      {/* Entrance Transition */}
      {showEntranceTransition && (
        <EntranceTransition onComplete={handleEntranceComplete} />
      )}

      {/* Simple Dark Transition for returning from course */}
      {showSimpleTransition && (
        <div className="fixed inset-0 z-50 bg-black transition-opacity duration-800 ease-in-out opacity-100"></div>
      )}

      <div className="min-h-screen relative">
        <IntroductionSection
          onStartClick={handleStartClick}
          isLoading={isButtonLoading}
        />
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

      {/* Page Transition Overlay */}
      <PageTransition
        isActive={showPageTransition}
        onTransitionComplete={handleTransitionComplete}
        userName={user?.name}
      />
    </>
  );
}
