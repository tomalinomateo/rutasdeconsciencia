"use client";

import { motion } from "framer-motion";
import { CreditCard } from "lucide-react";
import { useStyle } from "@/context/StyleContext";
import { useFontClass } from "@/hooks/useFontClass";

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
  const { currentStyle } = useStyle();
  const { fontClass } = useFontClass();

  const handlePurchase = () => {
    // Aquí se integrará el sistema de pagos
    console.log("Iniciando proceso de compra...");
    alert("¡Próximamente se habilitaran las inscripciones!");
  };

  const baseClasses = `font-bold transition-all duration-300 flex items-center justify-center space-x-2 rounded-full`;

  // Mapeo de colores para botones basado en el estilo actual
  const getButtonColors = () => {
    const styleId = currentStyle.id;

    // Mapeo de colores para todos los estilos actuales y nuevos beige
    const colorMap: Record<string, { primary: string; secondary: string }> = {
      "copper-flame": {
        primary: "bg-orange-400 hover:bg-orange-500 text-black",
        secondary: "bg-orange-600 hover:bg-orange-700 text-white",
      },
      "forest-whisper": {
        primary: "bg-green-400 hover:bg-green-500 text-black",
        secondary: "bg-emerald-500 hover:bg-emerald-600 text-white",
      },
      "silver-flame": {
        primary: "bg-gray-300 hover:bg-gray-400 text-black",
        secondary: "bg-gray-500 hover:bg-gray-600 text-white",
      },
      "silver-forest": {
        primary: "bg-emerald-500 hover:bg-emerald-600 text-white",
        secondary: "bg-green-600 hover:bg-green-700 text-white",
      },
      // Nuevos estilos beige
      "topo-beige": {
        primary: "bg-stone-400 hover:bg-stone-500 text-black",
        secondary: "bg-stone-700 hover:bg-stone-800 text-white",
      },
      "greige-beige": {
        primary: "bg-neutral-200 hover:bg-neutral-300 text-black",
        secondary: "bg-zinc-400 hover:bg-zinc-500 text-black",
      },
      "lino-beige": {
        primary: "bg-stone-100 hover:bg-stone-200 text-black",
        secondary: "bg-stone-300 hover:bg-stone-400 text-black",
      },
      "hueso-beige": {
        primary: "bg-neutral-50 hover:bg-stone-100 text-black",
        secondary: "bg-stone-200 hover:bg-stone-300 text-black",
      },
      "tierra-beige": {
        primary: "bg-yellow-900 hover:bg-stone-600 text-white",
        secondary: "bg-amber-300 hover:bg-yellow-900 text-black",
      },
      "champagne-beige": {
        primary: "bg-amber-100 hover:bg-yellow-200 text-black",
        secondary: "bg-yellow-400 hover:bg-yellow-500 text-black",
      },
      "caqui-beige": {
        primary: "bg-lime-100 hover:bg-lime-200 text-black",
        secondary: "bg-lime-400 hover:bg-lime-500 text-black",
      },
      "arena-beige": {
        primary: "bg-yellow-100 hover:bg-yellow-200 text-black",
        secondary: "bg-amber-300 hover:bg-amber-400 text-black",
      },
      "crema-beige": {
        primary: "bg-amber-50 hover:bg-yellow-100 text-black",
        secondary: "bg-orange-100 hover:bg-amber-100 text-black",
      },
      "tostado-beige": {
        primary: "bg-orange-800 hover:bg-amber-700 text-white",
        secondary: "bg-yellow-400 hover:bg-orange-800 text-black",
      },
    };

    return colorMap[styleId] || colorMap["copper-flame"];
  };

  const buttonColors = getButtonColors();

  const variants = {
    primary: `${buttonColors.primary} hover:shadow-lg hover:scale-105`,
    secondary: `${buttonColors.secondary} hover:shadow-lg hover:scale-105`,
    outlined: `border-2 ${currentStyle.colors.primary} border-current hover:bg-current hover:text-black hover:shadow-lg`,
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
      style={{ ...fontClass.text, fontWeight: 700 }}
    >
      {showIcon && <CreditCard className="h-5 w-5 text-red-500" />}
      <span>{text}</span>
    </motion.button>
  );
}
