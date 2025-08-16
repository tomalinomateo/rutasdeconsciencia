import React from "react";
import { defaultStyles } from "@/lib/defaultStyles";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text" | "ghost";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
  className = "",
  type = "button",
  fullWidth = false,
}) => {
  const baseClasses =
    "font-garet font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variantClasses = {
    primary: defaultStyles.buttons.primary,
    secondary: defaultStyles.buttons.secondary,
    text: defaultStyles.buttons.text,
    ghost: defaultStyles.buttons.ghost,
  };

  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm rounded-2xl",
    md: "px-4 py-2 text-base rounded-3xl",
    lg: "px-6 py-3 text-lg rounded-3xl",
  };

  const widthClass = fullWidth ? "w-full" : "";

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
};

export default Button;
