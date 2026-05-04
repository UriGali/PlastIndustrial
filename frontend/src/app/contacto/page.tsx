import type { Metadata } from "next";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contacto | PlastIndustrial Group",
  description:
    "Contacta con PlastIndustrial Group para proyectos de inyección de plásticos y fabricación de moldes. Ubicados en Sant Quirze del Vallès, Barcelona. Tel: +34 609 73 21 50.",
  alternates: {
    canonical: "https://plastindustrial.com/contacto",
  },
  openGraph: {
    title: "Contacto | PlastIndustrial Group",
    description:
      "Contacta con PlastIndustrial Group para proyectos de inyección de plásticos y fabricación de moldes. Ubicados en Sant Quirze del Vallès, Barcelona.",
    url: "https://plastindustrial.com/contacto",
    siteName: "PlastIndustrial Group",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://plastindustrial.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto — PlastIndustrial Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | PlastIndustrial Group",
    description:
      "Contacta con PlastIndustrial Group para proyectos de inyección de plásticos y fabricación de moldes en Barcelona.",
    images: ["https://plastindustrial.com/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto — PlastIndustrial Group",
  url: "https://plastindustrial.com/contacto",
  description:
    "Página de contacto de PlastIndustrial Group. Escríbenos o llámanos para cualquier consulta sobre inyección de plásticos y fabricación de moldes.",
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
        name: "Contacto",
        item: "https://plastindustrial.com/contacto",
      },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    name: "PlastIndustrial Group",
    telephone: "+34-609-73-21-50",
    email: "oriolgali@plastindustrial.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "C/ Empordà, 39",
      postalCode: "08192",
      addressLocality: "Sant Quirze del Vallès",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
  },
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="pt-28">
        <Contact />
      </main>
      <Footer />
    </>
  );
}
