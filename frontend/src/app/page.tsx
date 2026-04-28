import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import GroupInfo from "./components/GroupInfo";
import Companies from "./components/Companies";
import Stats from "./components/Stats";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
