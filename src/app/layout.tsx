import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

export const metadata: Metadata = {
  title: "Alquimia Raiz",
  description:
    "21 días de transformación a través de la meditación. Un trabajo amoroso con tu cuerpo, mente y espíritu.",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICA8cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9IiMxZTI5M2IiLz4KICA8cGF0aCBkPSJNMTYgNGMtMS4xIDAtMi4xIDAuMS0zLjEgMC40IDIuNCAxLjIgNC4xIDMuNyA0LjEgNi42IDAgNC4xLTMuMyA3LjQtNy40IDcuNC0xLjYgMC0zLjEtMC41LTQuMy0xLjQgMS4zIDMuOCA0LjkgNi42IDkuMiA2LjYgNS4zIDAgOS41LTQuMyA5LjUtOS41UzIxLjMgNCA1IDR6IiBmaWxsPSIjZTJlOGYwIi8+CiAgPGNpcmNsZSBjeD0iMjQiIGN5PSI4IiByPSIxIiBmaWxsPSIjZmJiZjI0Ii8+CiAgPGNpcmNsZSBjeD0iOCIgY3k9IjI0IiByPSIwLjUiIGZpbGw9IiNmYmJmMjQiLz4KICA8Y2lyY2xlIGN4PSIyNiIgY3k9IjIyIiByPSIwLjUiIGZpbGw9IiNmYmJmMjQiLz4KPC9zdmc+",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preload The Seasons fonts */}
        <link
          rel="preload"
          href="/fonts/the-seasons/Fontspring-DEMO-theseasons-reg.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/the-seasons/Fontspring-DEMO-theseasons-bd.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/the-seasons/Fontspring-DEMO-theseasons-it.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        {/* Preload Garet fonts */}
        <link
          rel="preload"
          href="/fonts/garet/Garet-Book.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/garet/Garet-Heavy.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased text-lg bg-black text-primary">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
