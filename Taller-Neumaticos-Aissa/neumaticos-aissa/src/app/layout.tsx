import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aissa Neumáticos - Taller de Neumáticos en Málaga | Nuevos y Seminuevos",
  description: "Neumáticos nuevos desde 35€ y seminuevos desde 15€. Llantas de aluminio de ocasión, mecánica rápida y venta al por mayor. 2 talleres en Málaga: Calle Diderot y Polígono Santa Bárbara.",
  keywords: "neumáticos, taller, Málaga, seminuevos, llantas, mecánica rápida, cambio aceite, pre ITV, Santa Bárbara, Diderot"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
