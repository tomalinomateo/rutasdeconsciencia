"use client";

import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

interface PurchaseButtonProps {
  variant?: "primary" | "secondary" | "outlined";
  size?: "small" | "medium" | "large";
  className?: string;
  showIcon?: boolean;
  text?: string;
  onStartClick?: () => void;
}

export default function PurchaseButton({
  variant = "primary",
  size = "large",
  className = "",
  showIcon = false,
  text = "Quiero comenzar el viaje",
  onStartClick,
}: PurchaseButtonProps) {
  const router = useRouter();
  const { user } = useAuth();

  const handlePurchase = () => {
    if (onStartClick) {
      onStartClick();
    } else if (user) {
      // If user is authenticated, redirect to course
      router.push("/course");
    } else {
      // If user is not authenticated, redirect to home to show login popup
      router.push("/");
    }
  };

  return (
    <div className="transition-transform duration-200 hover:scale-105 active:scale-95">
      <Button
        variant={variant === "primary" ? "primary" : "secondary"}
        size={size === "small" ? "sm" : size === "medium" ? "md" : "lg"}
        onClick={handlePurchase}
        className={`font-the-seasons font-bold ${className}`}
      >
        {showIcon && <CreditCard className="h-5 w-5 text-red-500" />}
        <span>{text}</span>
      </Button>
    </div>
  );
}
