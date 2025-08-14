import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  Lora,
  Parisienne,
  Italianno,
  Alegreya_SC,
  Dancing_Script,
  Libre_Baskerville,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: ["400"],
});
const italianno = Italianno({
  variable: "--font-italianno",
  subsets: ["latin"],
  weight: ["400"],
});
const alegreyaSC = Alegreya_SC({
  variable: "--font-alegreyasc",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const dancingScript = Dancing_Script({
  variable: "--font-dancingscript",
  subsets: ["latin"],
  weight: ["400", "700"],
});
const libreBaskerville = Libre_Baskerville({
  variable: "--font-librebaskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lora.variable} ${parisienne.variable} ${italianno.variable} ${alegreyaSC.variable} ${dancingScript.variable} ${libreBaskerville.variable} antialiased text-lg bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
