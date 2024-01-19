import Parallax from "@/components/ui/Parallax";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Qoute from "@/sections/Qoute";
import Testinomial from "@/sections/Testinomials";
import Work from "@/sections/Work";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Parallax type="services" />
      <Work />
      <Testinomial />
      <Contact />
      <Qoute />
      <Footer />
    </main>
  );
}
