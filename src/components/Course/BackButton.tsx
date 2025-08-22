"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

interface BackButtonProps {
  onTransitionStart?: () => void;
}

export default function BackButton({ onTransitionStart }: BackButtonProps) {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleBackClick = () => {
    setIsTransitioning(true);

    // Start exit transition
    if (onTransitionStart) {
      onTransitionStart();
    }

    // Navigation is now handled by the parent component
  };

  return (
    <Button
      onClick={handleBackClick}
      variant="ghost"
      size="sm"
      className={`mb-8 transition-all duration-300 px-3 py-1 text-sm ${
        isTransitioning ? "opacity-50 scale-95" : "opacity-100 scale-100"
      }`}
      disabled={isTransitioning}
    >
      <div className="flex items-center space-x-1">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5M12 19L5 12L12 5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-xs">
          {isTransitioning ? "Volviendo..." : "Volver"}
        </span>
      </div>
    </Button>
  );
}
