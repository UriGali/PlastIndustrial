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
  title: "Ingeniería del Plástico Industrial en Europa | PlastIndustrial Group",
  description:
    "Holding líder en inyección de plásticos industriales en Europa. Moldiplast, Splastic y A. Madrona: más de 50 años de experiencia técnica y fabricación en sala blanca.",
  alternates: {
    canonical: "https://plastindustrial.com",
    languages: {
      "es-ES": "https://plastindustrial.com",
      "x-default": "https://plastindustrial.com",
    },
  },
  openGraph: {
    title: "Ingeniería del Plástico Industrial en Europa | PlastIndustrial Group",
    description:
      "Holding líder en inyección de plásticos industriales en Europa. Moldiplast, Splastic y A. Madrona: más de 50 años de experiencia técnica y fabricación en sala blanca.",
    url: "https://plastindustrial.com",
    siteName: "PlastIndustrial Group",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PlastIndustrial Group — Ingeniería del Plástico Industrial en Europa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ingeniería del Plástico Industrial en Europa | PlastIndustrial Group",
    description:
      "Holding líder en inyección de plásticos industriales en Europa. Moldiplast, Splastic y A. Madrona: más de 50 años de experiencia técnica y fabricación en sala blanca.",
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
