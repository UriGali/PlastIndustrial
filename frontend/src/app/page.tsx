import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import GroupInfo from "./components/GroupInfo";
import HomeText from "./components/HomeText";
import Companies from "./components/Companies";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "PlastIndustrial Group | Ingeniería del material a escala",
  description:
    "PlastIndustrial Group: holding líder en inyección de plástico para automoción, construcción y packaging en Europa. Más de 50 años de experiencia industrial.",
  alternates: {
    canonical: "https://plastindustrial.com",
    languages: {
      "es-ES": "https://plastindustrial.com",
      "x-default": "https://plastindustrial.com",
    },
  },
  openGraph: {
    title: "PlastIndustrial Group | Ingeniería del material a escala",
    description:
      "PlastIndustrial Group: holding líder en inyección de plástico para automoción, construcción y packaging en Europa. Más de 50 años de experiencia industrial.",
    url: "https://plastindustrial.com",
    siteName: "PlastIndustrial Group",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
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
      "PlastIndustrial Group: holding líder en inyección de plástico para automoción, construcción y packaging en Europa.",
    images: ["/og-image.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <GroupInfo />
        <HomeText />
        <Companies />
        <Stats />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
