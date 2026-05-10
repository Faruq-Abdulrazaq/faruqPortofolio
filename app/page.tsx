import Navbar from "@/main_components/Navbar";
import Hero from "@/main_components/Hero";
import TrustStrip from "@/main_components/TrustStrip";
import About from "@/main_components/About";
import Experience from "@/main_components/Experience";
import Services from "@/main_components/Services";
import Projects from "@/main_components/Projects";
import Stack from "@/main_components/Stack";
import Testimonials from "@/main_components/Testimonials";
import Contact from "@/main_components/Contact";
import Footer from "@/main_components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <TrustStrip />
        <section className="section" id="about">
          <About />
        </section>
        <div className="rule" />
        <section className="section" id="experience">
          <Experience />
        </section>
        <div className="rule" />
        <section className="section" id="services">
          <Services />
        </section>
        <div className="rule" />
        <section className="section" id="work">
          <Projects />
        </section>
        <div className="rule" />
        <section className="section" id="stack">
          <Stack />
        </section>
        <div className="rule" />
        <section className="section" id="testimonials">
          <Testimonials />
        </section>
        <div className="rule" />
        <section className="section" id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}
