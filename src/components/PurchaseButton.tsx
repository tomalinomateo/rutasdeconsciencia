"use client";

import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { defaultStyles } from "@/lib/defaultStyles";

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
    // Aquí se integrará el sistema de pagos
    console.log("Iniciando proceso de compra...");
    alert("¡Próximamente se habilitaran las inscripciones!");
  };

  const baseClasses = `font-bold transition-all duration-300 flex items-center justify-center space-x-2 rounded-full`;

  // Colores fijos para el estilo champagne-beige
  const buttonColors = {
    primary: "bg-amber-100 hover:bg-yellow-200 text-black",
    secondary: "bg-yellow-400 hover:bg-yellow-500 text-black",
  };

  const variants = {
    primary: `${buttonColors.primary} hover:shadow-lg hover:scale-105`,
    secondary: `${buttonColors.secondary} hover:shadow-lg hover:scale-105`,
    outlined: `border-2 ${defaultStyles.colors.primary} border-current hover:bg-current hover:text-black hover:shadow-lg`,
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: variant === "primary" ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={handlePurchase}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{ ...defaultStyles.text, fontWeight: 700 }}
    >
      {showIcon && <CreditCard className="h-5 w-5 text-red-500" />}
      <span>{text}</span>
    </motion.button>
  );
}
