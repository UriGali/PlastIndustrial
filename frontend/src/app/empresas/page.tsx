import type { Metadata } from "next";
import Header from "../components/Header";
import Companies from "../components/Companies";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Nuestras Empresas | PlastIndustrial Group",
  description:
    "Moldiplast y Splastic: las dos empresas de PlastIndustrial Group, especializadas en inyección de plásticos técnicos y fabricación de moldes para la industria europea.",
  alternates: {
    canonical: "https://plastindustrial.com/empresas",
    languages: {
      es: "https://plastindustrial.com/empresas",
      en: "https://plastindustrial.com/empresas",
      "x-default": "https://plastindustrial.com/empresas",
    },
  },
  openGraph: {
    title: "Nuestras Empresas | PlastIndustrial Group",
    description:
      "Moldiplast y Splastic: las dos empresas de PlastIndustrial Group, especialistas en inyección de plásticos y soluciones técnicas para la industria europea desde 1969.",
    url: "https://plastindustrial.com/empresas",
    siteName: "PlastIndustrial Group",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://plastindustrial.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Empresas — PlastIndustrial Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuestras Empresas | PlastIndustrial Group",
    description:
      "Moldiplast y Splastic: especialistas en inyección de plásticos y soluciones técnicas para la industria europea desde 1969.",
    images: ["https://plastindustrial.com/og-image.jpg"],
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
        <Companies />
      </main>
      <Footer />
    </>
  );
}
