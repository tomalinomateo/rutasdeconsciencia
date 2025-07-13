import { useFont } from "@/context/FontContext";

export const useFontClass = () => {
  const { currentFont } = useFont();

  const getFontClass = (element: "title" | "text" | "all" = "all") => {
    const baseFamily = `${currentFont.fontFamily}, ${currentFont.fallback}`;

    const styles = {
      fontFamily: baseFamily,
    };

    // Para títulos, usar peso mayor si está disponible
    if (element === "title" && currentFont.weights?.includes("700")) {
      return {
        fontFamily: baseFamily,
        fontWeight: "700",
      };
    }

    // Para texto normal, usar peso 400 o el peso base
    if (element === "text") {
      return {
        fontFamily: baseFamily,
        fontWeight: currentFont.weights?.includes("400") ? "400" : "normal",
      };
    }

    return styles;
  };

  const fontClass = {
    title: getFontClass("title"),
    text: getFontClass("text"),
    all: getFontClass("all"),
  };

  return {
    fontClass,
    currentFont,
  };
};
