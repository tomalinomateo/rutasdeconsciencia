"use client";

import { useAuth } from "@/context/AuthContext";

export default function UserHeader() {
  const { user, logout } = useAuth();

  if (!user) return null;

  return (
    <div className="bg-[#fff3db] border-b border-[rgba(245,158,11,0.3)] px-4 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Welcome Message */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Sol Flashero Icon */}
          <img
            src="/images/sol-flashero.png"
            alt="Sol flashero"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
          />

          {/* Welcome Text */}
          <div>
            <h1 className="text-[#111827] font-garet font-medium text-base sm:text-lg">
              Bienvenida, {user.name}
            </h1>
            <p className="text-[#6b7280] font-garet text-xs sm:text-sm">
              Tu viaje de transformación
            </p>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="flex items-center space-x-2 bg-[#f59e0b] hover:bg-[#d97706] text-white px-3 sm:px-4 py-2 rounded-lg transition-colors duration-200 font-garet text-sm"
        >
          <svg
            className="hidden sm:block w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
          <span className="text-xs sm:text-sm">Cerrar sesión</span>
        </button>
      </div>
    </div>
  );
}
