// File: main_components/Projects.tsx
import React from "react";
import { ChevronRight, ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "Piscium Labs",
      subtitle: "AI Companion App",
      description:
        "A web and mobile application designed as a personal companion app. Includes an AI chatbot with a customizable 3D Avatar for immersive user interaction.",
      image: "/projects/piscium_labs_logo.png",
      tags: ["AI/ML", "3D Graphics", "Mobile App", "Web Platform"],
      link: "#",
    },
    {
      title: "Bluespace Technologies",
      subtitle: "E-commerce & ERP Application",
      description:
        "A robust ERP system with integrated e-commerce platform. Features sales management, inventory tracking, warehouse operations, and comprehensive customer management.",
      image: "/projects/Bluespace_logo.png",
      tags: ["ERP System", "E-commerce", "Inventory", "CRM"],
      link: "#",
    },
    {
      title: "Kulu Abuja",
      subtitle: "Fashion & Boutique E-commerce Store",
      description:
        "An Instagram-inspired e-commerce solution built for small businesses. Features modern design, seamless checkout, and social media integration.",
      image: "/projects-logo/kulu_abuja_logo.png",
      tags: ["E-commerce", "Social Commerce", "Fashion Business", "Modern UI"],
      link: "#",
    },
    {
      title: "Know Your Community",
      subtitle: "Address Verification System",
      description:
        "Residential address verification system providing proof of address certificates. A comprehensive solution for community verification and authentication.",
      image: "/projects/ravs_logo.png",
      tags: [
        "Verification",
        "Government Tech",
        "Authentication",
        "Certificates",
      ],
      link: "#",
    },
    {
      title: "Biteease",
      subtitle: "Food Order Management",
      description:
        "An online food service solution featuring sales management, customer tracking, kitchen operations, and comprehensive restaurant management tools.",
      image: "/projects-logo/Biteease-sec.png",
      tags: [
        "Restaurant Tech",
        "Order Management",
        "Kitchen Operations",
        "POS",
      ],
      link: "#",
    },
    {
      title: "Diadem Consult",
      subtitle: "Fleet Management ERP",
      description:
        "A specialized ERP solution for fleet managment and route managment. Features driver managment, salary management, and comprehensive business operations.",
      image: "/projects-logo/icon.png",
      tags: ["Automotive", "Fleet Management", "E-commerce", "ERP"],
      link: "#",
    },
  ];

  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background with liquid glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      {/* Liquid glass background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-60 w-96 h-96 bg-gradient-to-br from-black/3 via-gray-900/2 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -right-60 w-[600px] h-[600px] bg-gradient-to-bl from-gray-800/3 via-black/2 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Portfolio Showcase
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
            <span className="block">Transforming Ideas</span>
            <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Into Reality
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Discover how I turn complex challenges into elegant software
            solutions through diverse range of innovative projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="glass rounded-3xl backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover h-full">
                {/* Project Header with Background Image */}
                <div
                  className="p-8 relative overflow-hidden text-white"
                  style={{
                    backgroundImage: `linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(${project.image})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: "#f8f9fa",
                    minHeight: "220px",
                  }}
                >
                  {/* Subtle background pattern for texture */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/10 translate-y-12 -translate-x-12"></div>
                  </div>

                  <div className="relative z-10 flex flex-col justify-between h-full min-h-[180px]">
                    {/* Project Type Badge */}
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium opacity-90 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {project.subtitle}
                      </span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 space-y-6">
                  <div className="mt-auto">
                    <h3 className="text-2xl font-bold drop-shadow-lg">
                      {project.title}
                    </h3>
                  </div>
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
