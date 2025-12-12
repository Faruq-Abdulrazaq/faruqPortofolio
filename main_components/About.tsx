// main_components/About.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  Download,
  Award,
  Target,
  Heart,
  TrendingUp,
  Users,
  Code,
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description:
        "To create innovative, user-friendly software solutions that prioritize customer needs, uphold excellence, and embrace simplicity and forward-thinking to drive progress.",
      gradient: "from-black/90 to-gray-800/90",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Vision",
      description:
        "To be a leading software engineer known for delivering exceptional, innovative solutions that simplify complex challenges and empower users to achieve their goals.",
      gradient: "from-gray-800/90 to-gray-900/90",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Values",
      description:
        "Simplicity, Customer-centricity, Excellence, Forward-thinking, Open-source collaboration, Continuous learning, Building meaningful solutions, Innovation, Integrity, and Adaptability.",
      gradient: "from-gray-700/90 to-black/90",
    },
  ];

  const stats = [
    {
      number: "5+",
      label: "Years Experience",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      number: "50+",
      label: "Projects Completed",
      icon: <Code className="w-6 h-6" />,
    },
    {
      number: "6",
      label: "Industries Served",
      icon: <Users className="w-6 h-6" />,
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      icon: <Award className="w-6 h-6" />,
    },
  ];

  const technologies = [
    { name: "Python", icon: "/icons/python.png" },
    { name: "JavaScript", icon: "/icons/js.png" },
    { name: "React", icon: "/icons/react.png" },
    { name: "TypeScript", icon: "/icons/typescript.png" },
    { name: "PHP", icon: "/icons/php.png" },
    { name: "AWS", icon: "/icons/aws.png" },
    { name: "Docker", icon: "/icons/docker.png" },
    { name: "GitHub", icon: "/icons/github.png" },
  ];

  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background with liquid glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      {/* Liquid glass background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-bl from-black/4 via-gray-900/2 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-gradient-to-tr from-gray-800/3 via-black/2 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid lg:grid-cols-2 gap-20 items-start w-full">
          {/* Left Content */}
          <div className="space-y-12">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg">
                <div className="w-2 h-2 bg-black rounded-full mr-3 animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">
                  About Me
                </span>
              </div>

              <div className="space-y-6">
                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="block text-gray-400 font-light text-2xl lg:text-3xl mb-2">
                    I&#39;m a
                  </span>
                  <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                    Software Engineer
                  </span>
                </h2>

                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl">
                  With 5+ years of experience, I specialize in developing
                  innovative web, mobile, and AI-driven applications that
                  optimize operations and drive growth through technology.
                </p>
              </div>

              {/* Core Competencies */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-black">
                  Core Competencies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Full Stack Development",
                    "AI & Machine Learning",
                    "ERP Systems",
                    "Data Analytics",
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      <span className="text-gray-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Value Proposition */}
              <div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-xl">
                <h3 className="text-xl font-bold text-black mb-4">
                  How I Add Value
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  I take a solution-oriented approach, working closely with
                  clients to understand their unique needs and deliver tailored
                  software solutions. My projects are designed to be scalable,
                  secure, and user-friendly, ensuring long-term value.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button
                className="bg-black/90 hover:bg-black text-white px-8 py-6 text-lg rounded-2xl font-medium group transition-all duration-300 backdrop-blur-xl border border-white/10 shadow-2xl btn-hover-lift"
                asChild
              >
                <Link
                  href="https://firebasestorage.googleapis.com/v0/b/faruqportfolio.appspot.com/o/FARUQ%20TAYE%20ABDULRAZAQ%20_%20SOFTWARE%20ENGINEER.docx?alt=media&token=dd7f877d-73f6-4340-9eff-41f254fa7fa8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform duration-300" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Values & Stats */}
          <div className="space-y-8">
            {/* Values Cards */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 group card-hover overflow-hidden"
                >
                  {/* Background gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                  ></div>

                  <div className="relative z-10">
                    <div className="flex items-start space-x-6">
                      <div className="flex-shrink-0 bg-white/20 group-hover:bg-white/30 rounded-2xl p-4 transition-colors duration-300">
                        <div className="text-black group-hover:text-white transition-colors duration-300">
                          {value.icon}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4 text-black group-hover:text-white transition-colors duration-300">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-100 leading-relaxed transition-colors duration-300">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-3 text-gray-600">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-black mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
              Technologies I Work With
            </h3>
            <p className="text-xl text-gray-600 font-light">
              Modern tools and frameworks for cutting-edge solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-16 h-16 glass rounded-2xl shadow-lg flex items-center justify-center backdrop-blur-xl border border-white/20 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={28}
                    height={28}
                    className="w-7 h-7"
                  />
                </div>
                <span className="text-xs text-gray-500 mt-3 font-medium group-hover:text-black transition-colors duration-200">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
