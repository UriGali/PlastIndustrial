import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import GroupInfo from "./components/GroupInfo";
import Companies from "./components/Companies";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "PlastIndustrial Group | Ingeniería del material a escala",
  description:
    "Holding industrial especializado en inyección de plásticos y fabricación de moldes en Barcelona. PlastIndustrial Group reúne más de 50 años de experiencia.",
  alternates: {
    canonical: "https://plastindustrial.com",
    languages: {
      es: "https://plastindustrial.com",
      en: "https://plastindustrial.com",
      "x-default": "https://plastindustrial.com",
    },
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
        <Companies />
        <Stats />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
