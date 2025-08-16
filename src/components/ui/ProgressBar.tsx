import React from "react";

interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
  showPercentage?: boolean;
  showNumbers?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "success" | "warning";
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  label,
  showPercentage = true,
  showNumbers = true,
  size = "md",
  variant = "default",
  className = "",
}) => {
  const percentage = total > 0 ? Math.min((current / total) * 100, 100) : 0;

  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  };

  const variantClasses = {
    default: "bg-primary",
    success: "bg-green-500",
    warning: "bg-yellow-500",
  };

  const progressColor = variantClasses[variant];

  return (
    <div className={`space-y-2 ${className}`}>
      {/* Header */}
      {(label || showNumbers) && (
        <div className="flex items-center justify-between">
          {label && (
            <span className="font-garet font-medium text-sm text-primary">
              {label}
            </span>
          )}

          {showNumbers && (
            <div className="flex items-center space-x-2 text-sm text-primary">
              <span>{current}</span>
              <span>/</span>
              <span>{total}</span>
              {showPercentage && (
                <span className="text-primary font-medium">
                  ({Math.round(percentage)}%)
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* Progress Bar */}
      <div
        className={`w-full bg-gray-700 rounded-full overflow-hidden ${sizeClasses[size]}`}
      >
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${progressColor}`}
          style={{ width: `${percentage}%` }}
        />
      </div>

      {/* Only show percentage if not already shown above */}
      {showPercentage && !showNumbers && (
        <div className="text-right">
          <span className="text-sm text-primary font-garet">
            {Math.round(percentage)}% completado
          </span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
