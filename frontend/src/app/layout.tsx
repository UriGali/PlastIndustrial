import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlastIndustrial Group | Soluciones Industriales de Alto Rendimiento",
  description:
    "PlastIndustrial Group es un grupo empresarial líder en soluciones industriales de plástico. Innovación, calidad y experiencia al servicio de la industria.",
  keywords: [
    "plástico industrial",
    "soluciones industriales",
    "PlastIndustrial Group",
    "manufactura",
    "componentes plásticos",
  ],
  openGraph: {
    title: "PlastIndustrial Group",
    description:
      "Grupo empresarial líder en soluciones industriales de plástico.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
