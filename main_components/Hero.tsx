// File: main_components/Hero.tsx
"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { NavProps } from "@/types";
import { ArrowRight, Download, Sparkles } from "lucide-react";

const Hero: React.FC<NavProps> = ({ scrollToSection, refs }) => {
  const socialLinks = [
    {
      icon: "/icons/linkedin.png",
      alt: "LinkedIn",
      href: "https://www.linkedin.com/in/faruq-taye-abdulrazaq/",
    },
    { icon: "/icons/github.png", alt: "GitHub", href: "#" },
    { icon: "/icons/fiverr.png", alt: "Fiverr", href: "#" },
    { icon: "/icons/upwork.png", alt: "Upwork", href: "#" },
  ];

  const techStack = [
    { name: "React", icon: "/icons/react.png" },
    { name: "Python", icon: "/icons/python.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "AWS", icon: "/icons/aws.png" },
    { name: "Docker", icon: "/icons/docker.png" },
    { name: "JavaScript", icon: "/icons/js.png" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white">
      {/* Liquid Glass Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary liquid glass blob */}
        <div className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-black/5 via-gray-900/3 to-transparent blur-3xl animate-pulse"></div>

        {/* Secondary liquid glass blob */}
        <div className="absolute bottom-40 -left-40 w-80 h-80 rounded-full bg-gradient-to-tr from-gray-800/4 via-black/3 to-transparent blur-3xl animate-pulse delay-1000"></div>

        {/* Tertiary accent blob */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-transparent via-black/2 to-transparent blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Tech Icons - Apple Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-10 hover:opacity-30 transition-opacity duration-700"
            style={{
              top: `${15 + index * 12}%`,
              left: `${5 + (index % 2) * 85}%`,
              animationDelay: `${index * 0.8}s`,
              animationDuration: `${6 + index}s`,
            }}
          >
            <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
              <Image src={tech.icon} alt={tech.name} width={28} height={28} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full min-h-screen flex items-center pt-20">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-12">
              {/* Status Badge */}
              <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  Available for Projects
                </span>
                <Sparkles className="w-4 h-4 ml-2 text-gray-500" />
              </div>

              {/* Main Heading */}
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.9] tracking-tight">
                  <span className="block text-gray-400 font-light">
                    Hi, I&#39;m
                  </span>
                  <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                    Faruq
                  </span>
                  <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                    Abdulrazaq
                  </span>
                </h1>

                <div className="space-y-3">
                  <p className="text-2xl lg:text-3xl font-light text-gray-600">
                    Software Engineer
                  </p>
                  <p className="text-lg lg:text-xl text-gray-500 max-w-2xl leading-relaxed">
                    Creating scalable solutions that drive growth and
                    efficiency. I specialize in developing innovative software
                    that transforms businesses through technology.
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection?.(refs?.footerRef!)}
                  className="bg-black/90 hover:bg-black text-white px-8 py-6 text-lg rounded-2xl font-medium group transition-all duration-300 backdrop-blur-xl border border-white/10 shadow-2xl btn-hover-lift"
                >
                  Let&#39;s Work Together
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>

                <Button
                  variant="outline"
                  className="glass border-2 border-gray-200 hover:border-black/20 text-gray-700 hover:text-black px-8 py-6 text-lg rounded-2xl font-medium group transition-all duration-300 backdrop-blur-xl shadow-lg btn-hover-lift"
                  asChild
                >
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/faruqportfolio.appspot.com/o/FARUQ%20TAYE%20ABDULRAZAQ%20_%20SOFTWARE%20ENGINEER.docx?alt=media&token=dd7f877d-73f6-4340-9eff-41f254fa7fa8"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="mr-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-6 pt-8">
                <span className="text-sm text-gray-500 font-medium">
                  Connect:
                </span>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 glass rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
                    >
                      <Image
                        src={social.icon}
                        alt={social.alt}
                        width={20}
                        height={20}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative lg:pl-12">
              <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
                {/* Background Glass Effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-gray-600/5 rounded-[3rem] rotate-6 scale-105 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-gray-900/5 via-transparent to-black/5 rounded-[3rem] -rotate-6 scale-105 blur-xl"></div>

                {/* Main Image Container */}
                <div className="relative glass rounded-[3rem] p-8 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                  {/* Inner glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[3rem]"></div>

                  <div className="relative">
                    <Image
                      src="/faruq.png"
                      alt="Faruq Abdulrazaq"
                      width={500}
                      height={600}
                      className="w-full h-auto rounded-2xl shadow-lg"
                      priority
                    />
                  </div>
                </div>

                {/* Floating Stats */}
                <div className="absolute -top-6 -left-6 glass rounded-2xl p-4 backdrop-blur-xl border border-white/20 shadow-xl">
                  <div className="text-2xl font-bold text-black">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 glass rounded-full flex justify-center backdrop-blur-xl border border-white/20 shadow-lg animate-bounce">
          <div className="w-1 h-3 bg-gray-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.1;
          }
          50% {
            transform: translateY(-20px) rotate(2deg);
            opacity: 0.3;
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
