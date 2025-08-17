import React from "react";

interface MeditationIconProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

const MeditationIcon: React.FC<MeditationIconProps> = ({
  size = "md",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const innerSizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  };

  const dotSizeClasses = {
    sm: "w-2 h-2",
    md: "w-3 h-3",
    lg: "w-4 h-4",
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Outer circle */}
      <div className="w-full h-full border-2 border-amber-200 rounded-full flex items-center justify-center">
        {/* Inner circle */}
        <div className={`${innerSizeClasses[size]} bg-amber-200 rounded-full`}></div>
      </div>
      {/* Small dot */}
      <div className={`absolute -top-1 -right-1 ${dotSizeClasses[size]} bg-orange-400 rounded-full`}></div>
    </div>
  );
};

export default MeditationIcon;
