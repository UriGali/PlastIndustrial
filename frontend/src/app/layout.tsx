import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./components/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PlastIndustrial Group | Industrial Plastic Solutions",
  icons: { icon: "/favicon.svg" },
  description:
    "PlastIndustrial Group es un grupo empresarial líder en soluciones industriales de plástico. Innovación, calidad y experiencia al servicio de la industria.",
  keywords: [
    "plástico industrial",
    "industrial plastic",
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
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
