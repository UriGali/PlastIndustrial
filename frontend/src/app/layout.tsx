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
  title: "PlastIndustrial Group | Ingeniería del material a escala",
  icons: { icon: "/favicon.svg" },
  description:
    "PlastIndustrial Group: ingeniería del material plástico a escala. Holding industrial especializado en inyección de plásticos y fabricación de moldes en Barcelona, con más de 50 años de experiencia.",
  keywords: [
    "plástico industrial",
    "industrial plastic",
    "inyección de plásticos",
    "fabricación de moldes",
    "PlastIndustrial Group",
    "Moldiplast",
    "Splastic",
    "soluciones industriales",
    "manufactura",
    "componentes plásticos",
    "Barcelona",
  ],
  alternates: {
    canonical: "https://plastindustrial.com",
  },
  openGraph: {
    title: "PlastIndustrial Group | Ingeniería del material a escala",
    description:
      "Holding industrial especializado en inyección de plásticos y fabricación de moldes en Barcelona. Más de 50 años de experiencia al servicio de la industria europea.",
    url: "https://plastindustrial.com",
    siteName: "PlastIndustrial Group",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://plastindustrial.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PlastIndustrial Group — Ingeniería del material a escala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PlastIndustrial Group | Ingeniería del material a escala",
    description:
      "Holding industrial especializado en inyección de plásticos y fabricación de moldes en Barcelona.",
    images: ["https://plastindustrial.com/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PlastIndustrial Group",
  url: "https://plastindustrial.com",
  logo: "https://plastindustrial.com/plastindustrial.svg",
  description:
    "Grupo empresarial de ingeniería del material plástico especializado en inyección y distribución de soluciones plásticas técnicas para los sectores más exigentes de la economía europea.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ES",
    addressRegion: "Cataluña",
  },
  subOrganization: [
    {
      "@type": "Organization",
      name: "Moldiplast, S.L.",
      url: "https://moldiplast.com",
    },
    {
      "@type": "Organization",
      name: "Splastic, S.L.U.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
