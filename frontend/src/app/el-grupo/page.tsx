import type { Metadata } from "next";
import Header from "../components/Header";
import About from "../components/About";
import GroupInfo from "../components/GroupInfo";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "El Grupo | PlastIndustrial Group",
  description:
    "Conoce PlastIndustrial Group: holding industrial con más de 50 años de experiencia en inyección de plásticos y fabricación de moldes en Barcelona.",
  alternates: {
    canonical: "https://plastindustrial.com/el-grupo",
  },
  openGraph: {
    title: "El Grupo | PlastIndustrial Group",
    description:
      "Conoce PlastIndustrial Group: holding industrial con más de 50 años de experiencia en inyección de plásticos y fabricación de moldes en Barcelona.",
    url: "https://plastindustrial.com/el-grupo",
    siteName: "PlastIndustrial Group",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://plastindustrial.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "El Grupo — PlastIndustrial Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Grupo | PlastIndustrial Group",
    description:
      "Conoce PlastIndustrial Group: holding industrial con más de 50 años de experiencia en inyección de plásticos y fabricación de moldes en Barcelona.",
    images: ["https://plastindustrial.com/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "El Grupo — PlastIndustrial Group",
  url: "https://plastindustrial.com/el-grupo",
  description:
    "Holding industrial especializado en inyección de plásticos y fabricación de moldes con más de 50 años de historia en Barcelona.",
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
        name: "El Grupo",
        item: "https://plastindustrial.com/el-grupo",
      },
    ],
  },
};

export default function ElGrupoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-28">
        <About />
        <GroupInfo />
      </main>
      <Footer />
    </>
  );
}
