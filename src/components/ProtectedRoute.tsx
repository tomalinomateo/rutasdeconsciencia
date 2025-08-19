"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoginPopup from "./LoginPopup";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  useEffect(() => {
    if (!isLoading && !user) {
      setShowLoginPopup(true);
    }
  }, [user, isLoading]);

  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
    // If user is still not authenticated after closing popup, redirect to home
    if (!user) {
      router.push("/");
    }
  };

  // Hide popup when user becomes authenticated
  useEffect(() => {
    if (user && showLoginPopup) {
      setShowLoginPopup(false);
    }
  }, [user, showLoginPopup]);

  // Show popup when user is not authenticated and not loading
  useEffect(() => {
    if (!isLoading && !user) {
      setShowLoginPopup(true);
    }
  }, [user, isLoading]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f59e0b] mx-auto mb-4"></div>
          <p className="text-[#fff3db] font-garet">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <>
        {showLoginPopup && <LoginPopup onClose={handleCloseLoginPopup} />}
        <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#f59e0b] mx-auto mb-4"></div>
            <p className="text-[#fff3db] font-garet">
              Verificando autenticación...
            </p>
          </div>
        </div>
      </>
    );
  }

  return <>{children}</>;
}
