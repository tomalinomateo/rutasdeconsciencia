"use client";

import { useState, useEffect } from "react";
import CourseHeader from "@/components/Course/CourseHeader";
import CourseDescription from "@/components/Course/CourseDescription";
import TopicsList from "@/components/Course/TopicsList";
import BackButton from "@/components/Course/BackButton";
import UserHeader from "@/components/UserHeader";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useRouter } from "next/navigation";

export default function CoursePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Start entrance animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleBackTransition = () => {
    setIsExiting(true);

    // Navigate back to home with from=course parameter
    setTimeout(() => {
      router.push("/?from=course");
    }, 400); // Short delay for fade out effect
  };

  return (
    <ProtectedRoute>
      <div
        className={`min-h-screen transition-all duration-800 ease-in-out ${
          isVisible && !isExiting ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(135deg, #0f0f0f 0%, #111827 100%)",
        }}
      >
        <UserHeader />
        <div className="container mx-auto px-4 py-8">
          <BackButton onTransitionStart={handleBackTransition} />
          <CourseHeader />
          <CourseDescription />
          <TopicsList />
        </div>
      </div>
    </ProtectedRoute>
  );
}
