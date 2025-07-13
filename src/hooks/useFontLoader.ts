"use client";

import { useEffect } from "react";
import { useFont } from "@/context/FontContext";

export function useFontLoader() {
  const { currentFont } = useFont();

  useEffect(() => {
    // Evitar cargar fuentes para el default
    if (currentFont.id === "default" || !currentFont.googleFont) {
      return;
    }

    // Crear el link de Google Fonts
    const linkId = `google-font-${currentFont.id}`;

    // Remover fuente anterior si existe
    const existingLink = document.getElementById(linkId);
    if (existingLink) {
      existingLink.remove();
    }

    // Crear nuevo link para la fuente
    const link = document.createElement("link");
    link.id = linkId;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${currentFont.googleFont}&display=swap`;

    // Agregar al head
    document.head.appendChild(link);

    // Limpiar fuentes anteriores que ya no se usan
    const allFontLinks = document.querySelectorAll('link[id^="google-font-"]');
    allFontLinks.forEach((link) => {
      if (link.id !== linkId) {
        link.remove();
      }
    });

    console.log(`🔤 Cargando fuente: ${currentFont.name}`);

    // Cleanup function
    return () => {
      // No remover la fuente aquí para evitar parpadeos
      // Se removerá cuando se seleccione una nueva fuente
    };
  }, [currentFont]);
}
