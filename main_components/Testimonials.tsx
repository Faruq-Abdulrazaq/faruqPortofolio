// File: main_components/Testimonials.tsx
import React from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Doyin",
      company: "Scents By Doyin",
      role: "Founder & CEO",
      rating: 5,
      text: "Faruq's talent and dedication are truly impressive. His work exceeded my expectations and transformed our entire business approach.",
      image: "/user.png",
      bgGradient: "from-green-600/90 to-emerald-700/90",
    },
    {
      name: "Edwin M.",
      company: "Beyond Miles",
      role: "Project Manager",
      rating: 5,
      text: "Faruq was timely on the delivery of the project with various iterations. I had a wonderful experience working with Faruq and would consider him for another project.",
      image: "/Edwin.png",
      bgGradient: "from-blue-600/90 to-indigo-700/90",
    },
    {
      name: "Hauwa Abdulraheem",
      company: "Kulu Abuja",
      role: "CEO",
      rating: 5,
      text: "Faruq is brilliant! Delivered exactly what I needed, on time, and with great attention to detail. Highly recommend his services!",
      image: "/kulu_abuja.jpg",
      bgGradient: "from-pink-500/90 to-rose-600/90",
    },
    {
      name: "Segun B.",
      company: "RAVS",
      role: "Technical Lead",
      rating: 5,
      text: "Faruq is exceptional! He understood my needs perfectly and delivered outstanding results quickly with remarkable precision.",
      image: "/Segun.jpg",
      bgGradient: "from-purple-600/90 to-violet-700/90",
    },
    {
      name: "George Derwa",
      company: "Diadem Consult",
      role: "Cheif Operations Director",
      rating: 5,
      text: "Absolutely impressed by Faruq's expertise and professionalism. He made everything seamless and delivered beyond expectations.",
      image: "/user.png",
      bgGradient: "from-orange-600/90 to-red-700/90",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden mb-10">
      {/* Background with liquid glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>

      {/* Liquid glass background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-40 w-96 h-96 bg-gradient-to-bl from-black/4 via-gray-900/2 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -left-40 w-80 h-80 bg-gradient-to-tr from-gray-800/3 via-black/2 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Client Testimonials
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
            <span className="block">Client Success</span>
            <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              Stories
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Hear from satisfied clients who have experienced transformational
            results through our collaboration.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-5 gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="glass rounded-3xl backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover h-full">
                {/* Header with gradient background */}
                <div
                  className={`bg-gradient-to-br ${testimonial.bgGradient} p-8 relative overflow-hidden`}
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 opacity-20">
                    <Quote className="w-24 h-24 absolute top-4 right-4 text-white" />
                  </div>

                  <div className="relative z-10">
                    {/* Profile Image */}
                    <div className="w-16 h-16 rounded-2xl overflow-hidden mb-6 ring-4 ring-white/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name and Company */}
                    <div className="text-white">
                      <h3 className="text-xl font-bold mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm opacity-90 font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-sm opacity-80">
                        {testimonial.company}
                      </p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mt-4 space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-300 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <blockquote className="text-gray-700 leading-relaxed italic">
                    &quot;{testimonial.text}&quot;
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20">
          <div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-xl text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl font-bold text-black mb-2">5.0</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">50+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-black mb-2">6</div>
                <div className="text-sm text-gray-600">Industries Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
