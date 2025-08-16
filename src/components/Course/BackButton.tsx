"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/")}
      variant="ghost"
      size="md"
      className="mb-8"
    >
      <div className="flex items-center space-x-2">
        <svg
          width="20"
          height="20"
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
        <span>Volver</span>
      </div>
    </Button>
  );
}
