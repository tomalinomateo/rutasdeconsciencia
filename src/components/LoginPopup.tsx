"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui";

interface LoginPopupProps {
  onClose: () => void;
}

export default function LoginPopup({ onClose }: LoginPopupProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });
  const [isVisible, setIsVisible] = useState(false);

  // Block scroll when popup is open
  useEffect(() => {
    const preventScroll = (e: Event) => {
      e.preventDefault();
    };

    // Add overflow hidden to body
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${window.scrollY}px`;

    // Prevent scroll events
    document.addEventListener("scroll", preventScroll, { passive: false });
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });

    // Trigger animation after a small delay
    setTimeout(() => setIsVisible(true), 10);

    return () => {
      // Restore scroll position and body styles
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);

      // Remove event listeners
      document.removeEventListener("scroll", preventScroll);
      document.removeEventListener("wheel", preventScroll);
      document.removeEventListener("touchmove", preventScroll);
    };
  }, []);

  // Validation functions
  const validateEmail = (email: string): string => {
    if (!email.trim()) {
      return "Comparte tu email por favor ✨";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "¿Está bien escrito tu email? 🤔";
    }
    return "";
  };

  const validateName = (name: string): string => {
    if (!name.trim()) {
      return "Me gustaría saber con quién conecto 💫";
    }
    if (name.trim().length < 2) {
      return "Tu nombre debe tener al menos 2 letras ✨";
    }
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name.trim())) {
      return "Solo letras y espacios en tu nombre por favor 🌟";
    }
    return "";
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const emailError = validateEmail(formData.email);
    const nameError = validateName(formData.name);

    setErrors({
      email: emailError,
      name: nameError,
    });

    // If there are no errors, proceed with submission
    if (!emailError && !nameError) {
      // TODO: Implementar lógica de envío
      console.log("Form submitted:", formData);
      handleClose(); // Cerrar popup después del envío
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 500); // Wait for animation to complete
  };

  return (
    <div
      className={`fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-sm">
        {/* Form Container */}
        <div
          className={`bg-[#fff3db] rounded-3xl p-4 shadow-2xl relative transition-all duration-500 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-[#111827] hover:text-[#6b7280] transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Top Graphic */}
          <div className="flex justify-center mb-3">
            <img
              src="/images/sol-flashero.png"
              alt="Sol flashero"
              className="w-24 h-24 object-contain -m-5"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-lg font-bold text-center mb-2 font-the-seasons text-[#111827]">
            Comienza tu viaje de transformación
          </h1>

          {/* Descriptive Text */}
          <p className="text-center mb-4 font-garet text-[#111827] text-sm">
            Comparte tu nombre e email para continuar
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Email Input */}
            <div>
              <Input
                label="Email"
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleInputChange}
                required
                variant="primary-on-cream"
                error={errors.email}
              />
            </div>

            {/* Name Input */}
            <div>
              <Input
                label="Nombre"
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleInputChange}
                required
                variant="primary-on-cream"
                error={errors.name}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#f59e0b] text-white hover:bg-[#d97706] transition-colors duration-300 font-garet font-medium px-6 py-3 text-lg rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Acceder
            </button>
          </form>

          {/* Additional Info */}
          <p className="text-xs text-center mt-4 font-garet text-[#6b7280]">
            Al continuar, recibirás información sobre el programa y podrás
            acceder a contenido exclusivo.
          </p>
        </div>
      </div>
    </div>
  );
}
