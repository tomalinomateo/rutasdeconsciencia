import React from "react";

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: "text" | "email" | "password" | "number";
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  name?: string;
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
}) => {
  const baseClasses =
    "w-full px-4 py-3 font-garet text-base bg-background border border-gray-700 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:opacity-50 disabled:cursor-not-allowed";
  const errorClasses = error ? "border-error focus:ring-error/50" : "";
  const classes = `${baseClasses} ${errorClasses} ${className}`;

  return (
    <div className="space-y-2">
      {label && (
        <label className="block font-garet font-medium text-sm text-primary">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        name={name}
        className={classes}
      />
      {error && <p className="text-sm text-error font-garet">{error}</p>}
    </div>
  );
};

export default Input;
