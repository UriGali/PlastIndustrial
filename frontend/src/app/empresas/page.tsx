import type { Metadata } from "next";
import Header from "../components/Header";
import Companies from "../components/Companies";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Empresas del Grupo | Moldiplast y Splastic",
  description:
    "Moldiplast y Splastic, empresas del grupo PlastIndustrial: inyección de plásticos técnicos para automoción, packaging y gran consumo desde 1969.",
  alternates: {
    canonical: "https://plastindustrial.com/empresas",
    languages: {
      "es-ES": "https://plastindustrial.com/empresas",
      "x-default": "https://plastindustrial.com/empresas",
    },
  },
  openGraph: {
    title: "Empresas del Grupo | Moldiplast y Splastic",
    description:
      "Moldiplast y Splastic, empresas del grupo PlastIndustrial: inyección de plásticos técnicos para automoción, packaging y gran consumo desde 1969.",
    url: "https://plastindustrial.com/empresas",
    siteName: "PlastIndustrial Group",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Empresas del Grupo — Moldiplast y Splastic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Empresas del Grupo | Moldiplast y Splastic",
    description:
      "Moldiplast y Splastic, empresas del grupo PlastIndustrial: inyección de plásticos técnicos para automoción, packaging y gran consumo desde 1969.",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Empresas — PlastIndustrial Group",
  url: "https://plastindustrial.com/empresas",
  description:
    "Moldiplast y Splastic son las empresas del grupo PlastIndustrial, especialistas en inyección de plásticos técnicos para los sectores más exigentes.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://plastindustrial.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Empresas",
        item: "https://plastindustrial.com/empresas",
      },
    ],
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Moldiplast, S.L.",
        url: "https://www.moldiplast.com/",
        description:
          "Empresa especializada en inyección de piezas plásticas técnicas. Fundada en 1969.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Splastic, S.L.U.",
        url: "https://splastic.es/",
        description:
          "Distribución de soluciones plásticas técnicas para la industria. Fundada en los años 70.",
      },
    ],
  },
};

export default function EmpresasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-28">
        <h1 className="sr-only">Nuestras Empresas: Moldiplast y Splastic</h1>
        <Companies />
      </main>
      <Footer />
    </>
  );
}
