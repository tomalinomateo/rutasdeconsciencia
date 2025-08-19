"use client";

import CourseHeader from "@/components/Course/CourseHeader";
import CourseDescription from "@/components/Course/CourseDescription";
import TopicsList from "@/components/Course/TopicsList";
import BackButton from "@/components/Course/BackButton";
import UserHeader from "@/components/UserHeader";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function CoursePage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-primary">
        <UserHeader />
        <div className="container mx-auto px-4 py-8">
          <BackButton />
          <CourseHeader />
          <CourseDescription />
          <TopicsList />
        </div>
      </div>
    </ProtectedRoute>
  );
}
