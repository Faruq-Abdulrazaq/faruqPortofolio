"use client";
import React, { useRef } from "react";
import {
  About,
  Blog,
  Footer,
  Hero,
  Navbar,
  Projects,
  Services,
  Testimonials,
} from "@/main_components";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-4 mx-auto">
      <Navbar
        scrollToSection={scrollToSection}
        refs={{ aboutRef, servicesRef, projectsRef, testimonialsRef, blogRef }}
      />
      <div>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={servicesRef}>
        <Services />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <div ref={blogRef}>
        <Blog />
      </div>
      <Footer
        scrollToSection={scrollToSection}
        refs={{ aboutRef, servicesRef, projectsRef, testimonialsRef, blogRef }}
      />
    </div>
  );
}
