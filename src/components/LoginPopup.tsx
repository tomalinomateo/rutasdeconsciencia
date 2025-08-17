"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui";

interface LoginPopupProps {
  onClose: () => void;
}

type AuthMode = "register" | "login";
type ScreenMode = "initial" | "register" | "login";

export default function LoginPopup({ onClose }: LoginPopupProps) {
  const [screenMode, setScreenMode] = useState<ScreenMode>("initial");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

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
    if (screenMode === "register" && !name.trim()) {
      return "Me gustaría saber con quién conecto 💫";
    }
    if (screenMode === "register" && name.trim().length < 2) {
      return "Tu nombre debe tener al menos 2 letras ✨";
    }
    if (
      screenMode === "register" &&
      !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(name.trim())
    ) {
      return "Solo letras y espacios en tu nombre por favor 🌟";
    }
    return "";
  };

  const validatePassword = (password: string): string => {
    if (screenMode === "login" && !password.trim()) {
      return "Ingresa tu contraseña ✨";
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

  const handleEmailBlur = async () => {
    if (screenMode === "register" && formData.email.trim()) {
      const emailError = validateEmail(formData.email);
      if (!emailError) {
        try {
          const response = await fetch("/api/auth/check-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: formData.email }),
          });

          if (response.ok) {
            const data = await response.json();
            if (data.userExists) {
              setScreenMode("login");
              setMessage(
                "¡Bienvenido de vuelta! Ingresa tus datos para continuar."
              );
            }
          }
        } catch (error) {
          console.error("Error checking email:", error);
        }
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Validate all fields
    const emailError = validateEmail(formData.email);
    const nameError = validateName(formData.name);
    const passwordError = validatePassword(formData.password);

    setErrors({
      email: emailError,
      name: nameError,
      password: passwordError,
    });

    // If there are no errors, proceed with submission
    if (!emailError && !nameError && !passwordError) {
      try {
        const endpoint =
          screenMode === "register" ? "/api/auth/register" : "/api/auth/login";
        const body =
          screenMode === "register"
            ? { email: formData.email, name: formData.name }
            : { email: formData.email, password: formData.password };

        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        const data = await response.json();

        if (response.ok) {
          setMessage(data.message);
          setTimeout(() => {
            handleClose();
          }, 2000);
        } else {
          setMessage(data.error);
          if (data.userExists && screenMode === "register") {
            setScreenMode("login");
          }
        }
      } catch (error) {
        setMessage("Error de conexión. Intenta de nuevo.");
      }
    }

    setIsLoading(false);
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

  const handleBackToInitial = () => {
    setScreenMode("initial");
    setFormData({ name: "", email: "", password: "" });
    setErrors({ name: "", email: "", password: "" });
    setMessage("");
  };

  const handleOptionSelect = (option: "register" | "login") => {
    setScreenMode(option);
    setFormData({ name: "", email: "", password: "" });
    setErrors({ name: "", email: "", password: "" });
    setMessage("");
  };

  // Render initial screen with two buttons
  if (screenMode === "initial") {
    return (
      <div
        className={`fixed inset-0 backdrop-blur-md flex items-center justify-center p-4 z-50 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBackdropClick}
      >
        <div className="w-full max-w-sm">
          <div
            className={`bg-[#fff3db] rounded-3xl p-6 shadow-2xl relative transition-all duration-500 ease-out transform ${
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
            <div className="flex justify-center mb-4">
              <img
                src="/images/sol-flashero.png"
                alt="Sol flashero"
                className="w-24 h-24 object-contain -m-5"
              />
            </div>

            {/* Main Heading */}
            <h1 className="text-xl font-bold text-center mb-3 font-the-seasons text-[#111827]">
              ¿Listo para transformar tu vida?
            </h1>

            {/* Descriptive Text */}
            <p className="text-center mb-6 font-garet text-[#111827] text-sm">
              Elige una opción
            </p>

            {/* Two Options */}
            <div className="space-y-4">
              <button
                onClick={() => handleOptionSelect("register")}
                className="w-full bg-[#f59e0b] text-white hover:bg-[#d97706] transition-colors duration-300 font-garet font-medium px-6 py-4 text-lg rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Quiero probar la primera temática de regalo
              </button>

              <button
                onClick={() => handleOptionSelect("login")}
                className="w-full bg-[#111827] text-[#fff3db] hover:bg-[#374151] transition-colors duration-300 font-garet font-medium px-6 py-4 text-lg rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 border border-[#374151]"
              >
                Ya formo parte
              </button>
            </div>

            {/* Additional Info */}
            <p className="text-xs text-center mt-6 font-garet text-[#6b7280]">
              Accede a contenido exclusivo y continúa tu viaje de transformación
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Render register/login forms
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

          {/* Back Button */}
          <button
            onClick={handleBackToInitial}
            className="absolute top-4 left-4 text-[#111827] hover:text-[#6b7280] transition-colors duration-200"
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
                d="M15 19l-7-7 7-7"
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
            {screenMode === "register"
              ? "Comienza tu viaje de transformación"
              : "Bienvenido de vuelta"}
          </h1>

          {/* Descriptive Text */}
          <p className="text-center mb-4 font-garet text-[#111827] text-sm">
            {screenMode === "register"
              ? "Comparte tu nombre e email para continuar"
              : "Ingresa tu contraseña para acceder"}
          </p>

          {/* Message */}
          {message && (
            <div
              className={`mb-4 p-3 rounded-lg text-sm font-garet ${
                message.includes("exitosamente") ||
                message.includes("Bienvenido")
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {message}
            </div>
          )}

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
                onBlur={handleEmailBlur}
                required
                variant="primary-on-cream"
                error={errors.email}
              />
            </div>

            {/* Name Input - Only for register */}
            {screenMode === "register" && (
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
            )}

            {/* Password Input - Only for login */}
            {screenMode === "login" && (
              <div>
                <Input
                  label="Contraseña"
                  type="password"
                  name="password"
                  placeholder="Tu contraseña"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  variant="primary-on-cream"
                  error={errors.password}
                />
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#f59e0b] text-white hover:bg-[#d97706] transition-colors duration-300 font-garet font-medium px-6 py-3 text-lg rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading
                ? "Procesando..."
                : screenMode === "register"
                ? "Registrarse"
                : "Ingresar"}
            </button>
          </form>

          {/* Switch Mode Button */}
          <div className="text-center mt-4">
            <button
              type="button"
              onClick={() =>
                handleOptionSelect(
                  screenMode === "register" ? "login" : "register"
                )
              }
              className="text-[#f59e0b] hover:text-[#d97706] font-garet text-sm transition-colors duration-200"
            >
              {screenMode === "register"
                ? "¿Ya tienes cuenta? Ingresa aquí"
                : "¿Nuevo aquí? Regístrate"}
            </button>
          </div>

          {/* Additional Info */}
          <p className="text-xs text-center mt-4 font-garet text-[#6b7280]">
            {screenMode === "register"
              ? "Al registrarte, recibirás información sobre el programa y podrás acceder a contenido exclusivo."
              : "Accede a tu contenido exclusivo y continúa tu viaje de transformación."}
          </p>
        </div>
      </div>
    </div>
  );
}
