// File: app/StitchTech/components/StitchTechFashion.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Zap,
  BarChart3,
  Sparkles,
  Star,
  Play,
  ExternalLink,
  Palette,
  Code,
  Layers,
  ShoppingBag,
} from "lucide-react";

const StitchTechFashion = () => {
  const services = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "E-Commerce Excellence",
      description:
        "Custom-built fashion e-commerce platforms with advanced inventory management, AI recommendations, and seamless payment processing.",
      features: [
        "Mobile-responsive stores",
        "AI product recommendations",
        "Inventory automation",
        "Multi-payment gateways",
      ],
      gradient: "from-pink-600/90 to-rose-700/90",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Brand Digital Identity",
      description:
        "Complete digital brand transformation with stunning websites, social commerce integration, and brand management systems.",
      features: [
        "Brand websites",
        "Social commerce",
        "Digital catalogs",
        "Brand management",
      ],
      gradient: "from-purple-600/90 to-indigo-700/90",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Fashion Analytics",
      description:
        "Advanced analytics dashboards providing insights into sales trends, customer behavior, fashion forecasting, and inventory optimization.",
      features: [
        "Sales analytics",
        "Trend forecasting",
        "Customer insights",
        "ROI tracking",
      ],
      gradient: "from-blue-600/90 to-cyan-700/90",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Automation",
      description:
        "Streamline fashion operations with automated workflows for inventory, orders, customer communications, and supply chain management.",
      features: [
        "Order automation",
        "Inventory alerts",
        "Customer service bots",
        "Supply chain optimization",
      ],
      gradient: "from-green-600/90 to-emerald-700/90",
    },
  ];

  const fashionSolutions = [
    {
      title: "Luxury Fashion Houses",
      description:
        "Premium e-commerce experiences with exclusive member portals and personalized styling services",
      icon: "👗",
      technologies: ["Next.js", "Shopify Plus", "AI/ML", "CRM"],
      results: "",
    },
    {
      title: "Emerging Designers",
      description:
        "Affordable yet professional platforms to launch and scale fashion brands globally",
      icon: "✨",
      technologies: ["React", "WooCommerce", "Analytics", "SEO"],
      results: "",
    },
    {
      title: "Fashion Retailers",
      description:
        "Multi-channel retail solutions with inventory management and omnichannel experiences",
      icon: "🏪",
      technologies: ["Vue.js", "ERP Integration", "POS", "Inventory"],
      results: "",
    },
    {
      title: "Fashion Marketplaces",
      description:
        "Complete marketplace platforms connecting designers, brands, and customers seamlessly",
      icon: "🌐",
      technologies: ["Node.js", "Microservices", "Payment", "Logistics"],
      results: "",
    },
  ];

  const caseStudies = [
    {
      brand: "Kulu Abuja",
      category: "Fashion Brand",
      challenge:
        "Needed sophisticated e-commerce with AI styling recommendations",
      solution:
        "Built custom platform with ML-powered style matching and VR try-on",
      result: "300% sales increase, 85% customer retention",
      image: "/angel.zee_1731235809298.jpeg",
      technologies: ["React", "TensorFlow", "Stripe", "AWS"],
      gradient: "from-rose-500 to-pink-600",
    },
    {
      brand: "Urban Threads Co.",
      category: "Streetwear Brand",
      challenge:
        "Rapid scaling with inventory management and social commerce integration",
      solution:
        "Implemented automated inventory system with Instagram shopping integration",
      result: "500% growth in 8 months, 50% cost reduction",
      image: "/pinky_kulu_1731235827643.jpeg",
      technologies: ["Next.js", "GraphQL", "Instagram API", "Firebase"],
      gradient: "from-indigo-500 to-purple-600",
    },
  ];

  const techStack = [
    { name: "React/Next.js", usage: "Frontend Development", icon: "⚛️" },
    { name: "Node.js", usage: "Backend Services", icon: "🟢" },
    { name: "TensorFlow", usage: "AI Recommendations", icon: "🧠" },
    { name: "Shopify/WooCommerce", usage: "E-commerce Platforms", icon: "🛍️" },
    { name: "AWS/GCP", usage: "Cloud Infrastructure", icon: "☁️" },
    { name: "Paystack/Stripe/PayPal", usage: "Payment Processing", icon: "💳" },
  ];

  const testimonials = [
    {
      name: "Hauwa Abdulraheem Owodunni",
      title: "Founder",
      company: "Kulu Abuja",
      rating: 5,
      text: "StitchTech didn't just build us a website - they transformed our entire business. The AI recommendations increased our average order value by 150%.",
      avatar: "/user.png",
    },
    {
      name: "Marcus Rivera",
      title: "Creative Director",
      company: "Urban Style Co.",
      rating: 5,
      text: "The seamless integration between our design process and the e-commerce platform has revolutionized how we launch new collections.",
      avatar: "/user.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-white/20">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Image
                src="/Niches-Logo/StitchTech-Solutions/1/3.png"
                width={350}
                height={300}
                alt="StitchTech Logo"
              />

              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="hidden sm:block text-sm text-gray-500 font-medium">
                Fashion Technology
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="#solutions"
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Solutions
              </Link>
              <Link
                href="#case-studies"
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Case Studies
              </Link>
              <Link
                href="#technology"
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Technology
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-black transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-xl">
              Start Project
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
          <Image
            src="/fashion.jpg"
            alt="Fashion Technology Background"
            fill
            className="object-cover opacity-30"
            priority
          />

          {/* Liquid glass overlays */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-20">
          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-12 mt-10">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium">
              Where Fashion Meets Technology
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight">
            <span className="block mb-4 text-white ">Revolutionizing</span>
            <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Fashion
            </span>
            <span className="block text-gray-300 text-4xl lg:text-5xl xl:text-6xl font-light mt-4">
              with Technology
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Empowering fashion brands with cutting-edge e-commerce platforms,
            AI-powered insights, and seamless automation solutions that drive
            growth and enhance customer experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="glass bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-2xl group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-10">
            {[
              { number: "50+", label: "Fashion Brands" },
              { number: "300%", label: "Avg. Sales Increase" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center glass rounded-2xl p-4 backdrop-blur-xl border border-white/20"
              >
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-pink-100 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-bl from-purple-100 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg">
                <Code className="w-4 h-4 mr-2 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  About StitchTech
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-black leading-tight">
                <span className="block">Where Code Meets</span>
                <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Couture
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                At StitchTech Solutions, we bridge the gap between fashion
                creativity and technological innovation. Our specialized team
                understands both the artistic vision of fashion and the
                technical precision of software engineering.
              </p>

              <div className="space-y-6">
                {[
                  "Streamline fashion operations with smart automation",
                  "Boost brand visibility with stunning digital experiences",
                  "Increase sales with AI-powered recommendation engines",
                  "Scale globally with robust, secure platforms",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-medium rounded-2xl group">
                Learn Our Process
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="glass rounded-3xl overflow-hidden backdrop-blur-xl border border-white/20 shadow-xl card-hover">
                  <Image
                    src="/angel.zee_1731235809298.jpeg"
                    alt="Fashion Model"
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 shadow-lg">
                  <h4 className="font-bold text-black mb-2">
                    Fashion-First Approach
                  </h4>
                  <p className="text-sm text-gray-600">
                    We understand fashion trends and translate them into digital
                    experiences.
                  </p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 shadow-lg">
                  <h4 className="font-bold text-black mb-2">Tech Excellence</h4>
                  <p className="text-sm text-gray-600">
                    Cutting-edge technology stack ensuring performance and
                    scalability.
                  </p>
                </div>
                <div className="glass rounded-3xl overflow-hidden backdrop-blur-xl border border-white/20 shadow-xl card-hover">
                  <Image
                    src="/pinky_kulu_1731235827643.jpeg"
                    alt="Fashion Technology"
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-40 -right-60 w-96 h-96 bg-gradient-to-bl from-indigo-100 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-8">
              <Layers className="w-4 h-4 mr-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Our Solutions
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-10">
              <span className="block">Complete Fashion</span>
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Technology Suite
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to digitally transform your fashion business
              and stay ahead of the competition.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass rounded-3xl backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group card-hover"
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-br ${service.gradient} p-8 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-16 translate-x-16"></div>
                  </div>

                  <div className="relative z-10 text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-sm">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-black rounded-full"></div>
                        <span className="text-sm text-gray-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-200 hover:border-black text-gray-700 hover:text-black rounded-xl group"
                  >
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Fashion Solutions Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fashionSolutions.map((solution, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h4 className="text-lg font-bold text-black mb-3">
                  {solution.title}
                </h4>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="text-xs text-gray-500 mb-3">
                  {solution.technologies.join(" • ")}
                </div>
                <div className="text-sm font-bold text-green-600">
                  {solution.results}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section
        id="case-studies"
        className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-60 w-96 h-96 bg-gradient-to-br from-rose-100 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from fashion brands we&#39;ve transformed with
              technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="glass rounded-3xl backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden card-hover"
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-br ${study.gradient} p-8 text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-white/10 translate-y-20 translate-x-20"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold mb-2">
                          {study.brand}
                        </h3>
                        <p className="text-sm opacity-90">{study.category}</p>
                      </div>
                      <div className="flex space-x-2">
                        {study.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/20 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-64">
                  <Image
                    src={study.image}
                    alt={study.brand}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="font-bold text-black mb-2">Challenge</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">Solution</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div className="glass rounded-xl p-4 backdrop-blur-xl border border-white/20">
                    <h4 className="font-bold text-black mb-2">Results</h4>
                    <p className="text-green-600 font-bold">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section
        id="technology"
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">
              <span className="block">Powered by</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Modern Technology
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h4 className="text-lg font-bold text-black mb-2">
                  {tech.name}
                </h4>
                <p className="text-sm text-gray-600">{tech.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8">
              Client Love
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-xl"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </blockquote>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-bold text-black">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="block text-white">Ready to Transform</span>
            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Your Fashion Brand?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Let&#39;s discuss how StitchTech Solutions can help you create
            stunning digital experiences, increase sales, and streamline your
            fashion business operations.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="glass bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-2xl">
              View Portfolio
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="text-2xl mb-2">📧</div>
              <div className="text-sm text-gray-300">Email</div>
              <div className="font-medium">hello@stitchtechsolutions.com</div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm text-gray-300">Phone</div>
              <div className="font-medium">+234 807 525 6960</div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="text-2xl mb-2">🌍</div>
              <div className="text-sm text-gray-300">Location</div>
              <div className="font-medium">Lagos, Nigeria</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Image
                src="/Niches-Logo/StitchTech-Solutions/1/3.png"
                width={350}
                height={300}
                alt="StitchTech Logo"
              />
              <p className="text-gray-400 text-sm leading-relaxed">
                Revolutionizing fashion with cutting-edge technology solutions.
              </p>
              <div className="flex space-x-4">
                {["🐦", "📸", "💼", "🎵"].map((icon, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center backdrop-blur-xl border border-white/20 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">
                  E-Commerce Development
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Brand Digital Identity
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Fashion Analytics
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Smart Automation
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Luxury Fashion
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Emerging Designers
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Fashion Retailers
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Fashion Marketplaces
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">
                  About Us
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Case Studies
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Technology
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 StitchTech Solutions. Crafted with ❤️ for Fashion
              Innovation.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StitchTechFashion;
