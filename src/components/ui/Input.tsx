import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "password" | "number";
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  name?: string;
  variant?: "primary" | "primary-on-cream";
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
  disabled = false,
  error,
  className = "",
  name,
  variant = "primary",
}) => {
  // Base classes for input styling
  const getInputClasses = () => {
    const baseClasses =
      "w-full font-garet text-base transition-all duration-300 focus:outline-none";

    // Variant-specific classes
    const variantClasses =
      variant === "primary-on-cream"
        ? "input-primary-on-cream"
        : "input-primary";

    // Error state
    const errorClasses = error ? "error" : "";

    return `${baseClasses} ${variantClasses} ${errorClasses} ${className}`;
  };

  // Label classes based on variant
  const getLabelClasses = () => {
    const baseLabelClasses = "block font-garet font-medium text-sm";
    const variantLabelClasses =
      variant === "primary-on-cream"
        ? "text-[#111827]" // Dark text for cream background
        : "text-[#fff3db]"; // Cream text for dark background

    return `${baseLabelClasses} ${variantLabelClasses}`;
  };

  const classes = getInputClasses();
  const labelClasses = getLabelClasses();

  return (
    <div className="space-y-2">
      {label && (
        <label className={labelClasses}>
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        name={name}
        className={classes}
      />
      {error && <p className="text-sm text-red-500 font-garet">{error}</p>}
    </div>
  );
};

export default Input;
