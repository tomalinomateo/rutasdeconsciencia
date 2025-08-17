"use client";

import { useState } from "react";
import { Button, Input, MeditationIcon } from "@/components/ui";

export default function EmailCapturePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar lógica de envío
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#111827] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Form Container */}
        <div className="bg-[#fef3c7] rounded-3xl p-8 shadow-2xl">
          {/* Top Graphic */}
          <div className="flex justify-center mb-6">
            <MeditationIcon size="md" />
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl font-bold text-center mb-4 font-the-seasons text-[#fff3db]">
            Comienza tu viaje de transformación
          </h1>

          {/* Descriptive Text */}
          <p className="text-center mb-8 font-garet text-[#fff3db]">
            Comparte tu nombre e email para continuar
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <Input
                type="email"
                name="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              fullWidth
            >
              Acceder
            </Button>
          </form>

          {/* Additional Info */}
          <p className="text-xs text-center mt-6 font-garet text-gray-400">
            Al continuar, recibirás información sobre el programa y podrás
            acceder a contenido exclusivo.
          </p>
        </div>
      </div>
    </div>
  );
}
