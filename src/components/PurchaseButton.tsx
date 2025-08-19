"use client";

import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

interface PurchaseButtonProps {
  variant?: "primary" | "secondary" | "outlined";
  size?: "small" | "medium" | "large";
  className?: string;
  showIcon?: boolean;
  text?: string;
}

export default function PurchaseButton({
  variant = "primary",
  size = "large",
  className = "",
  showIcon = false,
  text = "Quiero comenzar el viaje",
}: PurchaseButtonProps) {
  const router = useRouter();

  const handlePurchase = () => {
    // Redirigir a la página principal
    router.push("/");
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
