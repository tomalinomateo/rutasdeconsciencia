"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center space-x-2 transition-colors duration-300 mb-8 font-garet"
      style={{
        color: "var(--title-primary)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--title-secondary)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "var(--title-primary)";
      }}
    >
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
      <span className="font-medium">Volver</span>
    </button>
  );
}
