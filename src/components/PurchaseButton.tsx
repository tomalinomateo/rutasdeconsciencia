"use client";

import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { Button } from "@/components/ui";

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
  const handlePurchase = () => {
    // Función de compra deshabilitada temporalmente
    console.log("Función de compra no disponible");
    alert("Función de compra no disponible en este momento");
  };

  return (
    <motion.div
      whileHover={{ scale: variant === "primary" ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        variant={variant === "primary" ? "primary" : "secondary"}
        size={size === "small" ? "sm" : size === "medium" ? "md" : "lg"}
        onClick={handlePurchase}
        className={`font-the-seasons font-bold ${className}`}
      >
        {showIcon && <CreditCard className="h-5 w-5 text-red-500" />}
        <span>{text}</span>
      </Button>
    </motion.div>
  );
}
