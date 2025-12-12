// File: main_components/Services.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, ExternalLink } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Fashion & Clothing",
      subtitle: "StitchTech Solutions",
      description:
        "Revolutionize your fashion business with cutting-edge e-commerce platforms, inventory management systems, and AI-powered recommendation engines.",
      icon: "/fashion-woman-svgrepo-com.png",
      link: "/StitchTech",
      features: [
        "E-commerce Platforms",
        "Inventory Management",
        "AI Recommendations",
        "Brand Analytics",
      ],
      color: "from-black/90 to-gray-800/90",
      accent: "bg-white/10",
    },
    {
      title: "Custom Software Development",
      subtitle: "Tailored Solutions",
      description:
        "Bespoke software solutions designed specifically for your business needs, ensuring scalability, security, and seamless user experience.",
      icon: "/icons/python.png",
      link: "/CodeCraft",
      features: [
        "Web Applications",
        "Mobile Apps",
        "Desktop Software",
        "API Development",
      ],
      color: "from-gray-800/90 to-gray-900/90",
      accent: "bg-white/10",
    },
    {
      title: "Automation & AI",
      subtitle: "Intelligent Systems",
      description:
        "Transform your operations with AI-powered automation solutions that reduce costs, eliminate errors, and boost productivity exponentially.",
      icon: "/icons/react.png",
      link: "/Frameworks",
      features: [
        "Process Automation",
        "AI Integration",
        "Machine Learning",
        "Data Analytics",
      ],
      color: "from-gray-700/90 to-black/90",
      accent: "bg-white/10",
    },
    {
      title: "Restaurant & Food Tech",
      subtitle: "Digital Kitchen Solutions",
      description:
        "Complete digital transformation for restaurants with smart ordering systems, kitchen automation, and comprehensive customer analytics.",
      icon: "/fast-food-svgrepo-com.png",
      link: "/BiteCode",
      features: [
        "Online Ordering",
        "Kitchen Management",
        "Delivery Systems",
        "Customer Analytics",
      ],
      color: "from-black/90 to-gray-700/90",
      accent: "bg-white/10",
    },
    {
      title: "Real Estate Tech",
      subtitle: "Property Solutions",
      description:
        "Modern real estate platforms featuring property management, virtual tours, automated valuations, and intelligent matching systems.",
      icon: "/real-estate-market-svgrepo-com.png",
      link: "/KeyNest",
      features: [
        "Property Management",
        "Virtual Tours",
        "CRM Systems",
        "Market Analytics",
      ],
      color: "from-gray-900/90 to-gray-800/90",
      accent: "bg-white/10",
    },
    {
      title: "Automotive Solutions",
      subtitle: "Car Sales & Rental",
      description:
        "Comprehensive automotive platforms for sales, rentals, fleet management, and customer relationship optimization.",
      icon: "/car-svgrepo-com.png",
      link: "/DriveLogic",
      features: [
        "Fleet Management",
        "Booking Systems",
        "Sales Platforms",
        "Maintenance Tracking",
      ],
      color: "from-gray-800/90 to-black/90",
      accent: "bg-white/10",
    },
  ];

  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background with liquid glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50"></div>

      {/* Liquid glass background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-60 w-96 h-96 bg-gradient-to-br from-black/3 via-gray-900/2 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -right-60 w-[600px] h-[600px] bg-gradient-to-bl from-gray-800/3 via-black/2 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-transparent via-black/1 to-transparent rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Services & Solutions
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
            Building Digital
            <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Futures Together
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Explore my range of specialized services designed to transform your
            business with cutting-edge technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {services.map((service, index) => (
            <Link key={index} href={service.link} className="group">
              <div className="relative h-full glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover">
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                ></div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-8">
                    <div
                      className={`w-16 h-16 ${service.accent} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 backdrop-blur-sm`}
                    >
                      <Image
                        src={service.icon}
                        alt={service.title}
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-white transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-gray-500 group-hover:text-gray-200 transition-colors duration-300">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 group-hover:text-gray-100 leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full transition-colors duration-300"></div>
                          <span className="text-sm text-gray-700 group-hover:text-gray-200 transition-colors duration-300 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {service.features.length > 3 && (
                        <div className="flex items-center space-x-3">
                          <div className="w-1.5 h-1.5 bg-black group-hover:bg-white rounded-full transition-colors duration-300"></div>
                          <span className="text-sm text-gray-700 group-hover:text-gray-200 transition-colors duration-300 font-medium">
                            +{service.features.length - 3} more solutions
                          </span>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-6">
                      <div className="flex items-center text-black group-hover:text-white font-medium transition-colors duration-300">
                        <span className="mr-2">Explore Solutions</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-200 transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Hover border effect */}
                <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-white/20 transition-colors duration-300"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block glass rounded-2xl p-1 backdrop-blur-xl border border-white/20 shadow-lg">
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 group"
            >
              <span className="mr-2">View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
