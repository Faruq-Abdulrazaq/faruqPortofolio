"use client";
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
  UtensilsCrossed,
  Code,
  Layers,
  ShoppingCart,
  ChefHat,
} from "lucide-react";

const BiteCodeRestaurant = () => {
  const services = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Online Ordering Excellence",
      description:
        "Custom-built food ordering platforms with menu management, real-time tracking, and seamless payment processing for restaurants.",
      features: [
        "Mobile-responsive ordering",
        "Real-time order tracking",
        "Menu customization",
        "Multi-payment options",
      ],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <ChefHat className="w-8 h-8" />,
      title: "Kitchen Management",
      description:
        "Smart kitchen operations with order automation, inventory tracking, recipe management, and staff coordination systems.",
      features: [
        "Order queue management",
        "Recipe standardization",
        "Inventory alerts",
        "Staff scheduling",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Restaurant Analytics",
      description:
        "Advanced analytics dashboards providing insights into sales trends, customer preferences, menu performance, and operational efficiency.",
      features: [
        "Sales analytics",
        "Menu optimization",
        "Customer insights",
        "Performance tracking",
      ],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Automation",
      description:
        "Streamline restaurant operations with automated workflows for orders, inventory, customer communications, and delivery management.",
      features: [
        "Order automation",
        "Inventory management",
        "Customer notifications",
        "Delivery optimization",
      ],
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const restaurantSolutions = [
    {
      title: "Fine Dining Restaurants",
      description:
        "Premium reservation systems with elegant ordering experiences and sophisticated customer management",
      icon: "🍽️",
      technologies: ["Next.js", "PostgreSQL", "FastAPI", "Stripe"],
      results: "Enhanced dining experience",
    },
    {
      title: "Fast Food Chains",
      description:
        "High-volume ordering systems with quick service optimization and franchise management tools",
      icon: "🍔",
      technologies: ["React", "Redis", "Microservices", "Payment APIs"],
      results: "Faster service delivery",
    },
    {
      title: "Food Trucks",
      description:
        "Mobile-first solutions with location tracking, social media integration, and simplified operations",
      icon: "🚚",
      technologies: ["PWA", "GPS APIs", "Social APIs", "Mobile Payments"],
      results: "Mobile optimization",
    },
    {
      title: "Cafes & Bakeries",
      description:
        "Specialty item management with loyalty programs, pre-orders, and subscription services",
      icon: "☕",
      technologies: ["Vue.js", "Subscription APIs", "CRM", "Analytics"],
      results: "Customer retention",
    },
  ];

  const caseStudies = [
    {
      brand: "BiteEase",
      category: "Restaurant ERP & Ordering System",
      challenge:
        "Needed comprehensive restaurant management with integrated online ordering and analytics",
      solution:
        "Built full-stack ERP system with PostgreSQL, Next.js frontend, and FastAPI backend with real-time order tracking",
      result: "400% order increase, 60% operational efficiency boost",
      image: "/projects-logo/Biteease-sec.png",
      technologies: ["Next.js", "PostgreSQL", "FastAPI", "Redis"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      brand: "Urban Bites",
      category: "Multi-Restaurant Platform",
      challenge:
        "Scaling multiple restaurant locations with unified ordering and management system",
      solution:
        "Implemented microservices architecture with centralized dashboard and location-specific customization",
      result: "300% faster order processing, 45% cost reduction",
      image: "/projects/urban-bites-demo.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Docker"],
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const techStack = [
    { name: "Next.js", usage: "Frontend Development", icon: "⚛️" },
    { name: "FastAPI", usage: "Backend Services", icon: "🚀" },
    { name: "PostgreSQL", usage: "Database Management", icon: "🐘" },
    { name: "Redis", usage: "Caching & Sessions", icon: "🔴" },
    { name: "AWS/GCP", usage: "Cloud Infrastructure", icon: "☁️" },
    { name: "Stripe/PayPal", usage: "Payment Processing", icon: "💳" },
  ];

  const testimonials = [
    {
      name: "Maria Rodriguez",
      title: "Owner",
      company: "Bella Vista Restaurant",
      rating: 5,
      text: "BiteCode transformed our restaurant operations completely. Online orders increased by 250% and our kitchen runs like clockwork now.",
      avatar: "/user.png",
    },
    {
      name: "James Chen",
      title: "Operations Manager",
      company: "Quick Bites Chain",
      rating: 5,
      text: "The system handles our high-volume orders seamlessly. Customer satisfaction is at an all-time high with real-time order tracking.",
      avatar: "/user.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-white/20 bg-white/80">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Image
                    src="/Niches-Logo/BiteCode-Systems/1/1.png"
                    alt=""
                    width={450}
                    height={400}
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">BiteCode</h1>
                  <p className="text-xs text-gray-600">Restaurant Technology</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="hidden sm:block text-sm text-gray-600 font-medium">
                Restaurant Technology Solutions
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="#solutions"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Solutions
              </Link>
              <Link
                href="#case-studies"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Case Studies
              </Link>
              <Link
                href="#technology"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Technology
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-2 rounded-xl shadow-lg">
              Start Project
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 text-6xl">🍕</div>
            <div className="absolute top-32 right-32 text-4xl">🍔</div>
            <div className="absolute bottom-32 left-32 text-5xl">🍜</div>
            <div className="absolute bottom-20 right-20 text-6xl">🍰</div>
            <div className="absolute top-1/2 left-1/4 text-3xl">🥗</div>
            <div className="absolute top-1/3 right-1/3 text-4xl">🍟</div>
          </div>

          {/* Liquid glass overlays */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-red-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-20">
          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-orange-200/50 shadow-lg mb-12 mt-10 bg-white/50">
            <Sparkles className="w-4 h-4 mr-2 text-orange-600" />
            <span className="text-sm font-medium text-gray-800">
              Where Food Meets Technology
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight text-gray-900">
            <span className="block mb-4">Revolutionizing</span>
            <span className="block bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 bg-clip-text text-transparent">
              Restaurant
            </span>
            <span className="block text-gray-600 text-4xl lg:text-5xl xl:text-6xl font-light mt-4">
              Operations
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
            Empowering restaurants with cutting-edge ordering systems, kitchen
            automation, and smart analytics that streamline operations and
            enhance customer experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="glass bg-orange-500 hover:bg-orange-600 text-white border border-orange-200/50 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group shadow-lg">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-6 text-lg font-medium rounded-2xl group shadow-lg">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-10">
            {[
              { number: "200+", label: "Restaurants Served" },
              { number: "500%", label: "Avg. Order Increase" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center glass rounded-2xl p-4 backdrop-blur-xl border border-orange-200/50 bg-white/30 shadow-lg"
              >
                <div className="text-3xl font-bold mb-2 text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-orange-100/50 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-bl from-red-100/50 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-orange-200/50 shadow-lg bg-white/50">
                <Code className="w-4 h-4 mr-2 text-orange-600" />
                <span className="text-sm font-medium text-gray-800">
                  About BiteCode
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Where Code Meets</span>
                <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Cuisine
                </span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                At BiteCode, we specialize in transforming restaurant operations
                through innovative technology. Our comprehensive solutions help
                food businesses streamline operations, increase revenue, and
                deliver exceptional customer experiences.
              </p>

              <div className="space-y-6">
                {[
                  "Streamline kitchen operations with smart automation",
                  "Boost revenue with optimized online ordering systems",
                  "Enhance customer experience with real-time tracking",
                  "Scale efficiently with robust, cloud-based platforms",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-md">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 text-lg font-medium rounded-2xl group shadow-lg">
                Learn Our Process
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="glass rounded-3xl overflow-hidden backdrop-blur-xl border border-orange-200/50 shadow-xl card-hover bg-white/30">
                  <div className="p-6 bg-gradient-to-br from-orange-500 to-red-600 text-white">
                    <ChefHat className="w-8 h-8 mb-4" />
                    <h4 className="font-bold text-xl mb-2">Smart Kitchen</h4>
                    <p className="text-sm opacity-90">
                      Real-time order management and kitchen automation
                    </p>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-orange-200/50 shadow-lg bg-white/50">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Food-First Approach
                  </h4>
                  <p className="text-sm text-gray-700">
                    We understand restaurant operations and translate them into
                    digital solutions.
                  </p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-orange-200/50 shadow-lg bg-white/50">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Tech Excellence
                  </h4>
                  <p className="text-sm text-gray-700">
                    Modern technology stack ensuring performance and
                    reliability.
                  </p>
                </div>
                <div className="glass rounded-3xl overflow-hidden backdrop-blur-xl border border-orange-200/50 shadow-xl card-hover bg-white/30">
                  <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                    <BarChart3 className="w-8 h-8 mb-4" />
                    <h4 className="font-bold text-xl mb-2">Analytics Hub</h4>
                    <p className="text-sm opacity-90">
                      Data-driven insights for better decision making
                    </p>
                  </div>
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
          <div className="absolute top-40 -right-60 w-96 h-96 bg-gradient-to-bl from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-orange-200/50 shadow-lg mb-8 bg-white/50">
              <Layers className="w-4 h-4 mr-2 text-orange-600" />
              <span className="text-sm font-medium text-gray-800">
                Our Solutions
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-10">
              <span className="block">Complete Restaurant</span>
              <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Technology Suite
              </span>
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to digitally transform your restaurant
              business and deliver exceptional dining experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass rounded-3xl backdrop-blur-xl border border-orange-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group card-hover bg-white/50"
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
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                        <span className="text-sm text-gray-800 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-orange-200 hover:border-orange-500 text-gray-800 hover:text-orange-600 rounded-xl group"
                  >
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Restaurant Solutions Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {restaurantSolutions.map((solution, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-orange-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center bg-white/50"
              >
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  {solution.title}
                </h4>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  {solution.description}
                </p>
                <div className="text-xs text-gray-600 mb-3">
                  {solution.technologies.join(" • ")}
                </div>
                <div className="text-sm font-bold text-orange-600">
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
          <div className="absolute top-20 -left-60 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from restaurants we&#39;ve transformed with
              technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="glass rounded-3xl backdrop-blur-xl border border-orange-200/50 shadow-xl overflow-hidden card-hover bg-white/50"
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

                {/* Image placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <Image
                    src={study.image}
                    alt={study.brand}
                    width={150}
                    height={150}
                  />
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-700 text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-700 text-sm">{study.solution}</p>
                  </div>
                  <div className="glass rounded-xl p-4 backdrop-blur-xl border border-orange-200/50 bg-white/50">
                    <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                    <p className="text-orange-600 font-bold">{study.result}</p>
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
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              <span className="block">Powered by</span>
              <span className="block bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Modern Technology
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-orange-200/50 shadow-lg text-center hover:shadow-xl transition-all duration-300 bg-white/50"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {tech.name}
                </h4>
                <p className="text-sm text-gray-700">{tech.usage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Restaurant Love
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 backdrop-blur-xl border border-orange-200/50 shadow-xl bg-white/50"
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-800 mb-6 italic leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </blockquote>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-700">
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
        className="py-32 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-orange-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="block text-white">Ready to Transform</span>
            <span className="block bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
              Your Restaurant?
            </span>
          </h2>

          <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto">
            Let&#39;s discuss how BiteCode can help you streamline operations,
            increase revenue, and deliver exceptional dining experiences through
            technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="glass bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-6 text-lg font-medium rounded-2xl">
              View Portfolio
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 bg-white/10">
              <div className="text-2xl mb-2">📧</div>
              <div className="text-sm text-orange-200">Email</div>
              <div className="font-medium text-white">
                hello@bitecode.restaurant
              </div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 bg-white/10">
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm text-orange-200">Phone</div>
              <div className="font-medium text-white">+234 807 525 6960</div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 bg-white/10">
              <div className="text-2xl mb-2">🌍</div>
              <div className="text-sm text-orange-200">Location</div>
              <div className="font-medium text-white">Lagos, Nigeria</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/Niches-Logo/BiteCode-Systems/1/2.png"
                    alt=""
                    width={1000}
                    height={700}
                  />
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Revolutionizing restaurants with cutting-edge technology
                solutions.
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
                  Online Ordering Systems
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Kitchen Management
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Restaurant Analytics
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Smart Automation
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Restaurant Types</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Fine Dining
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Fast Food Chains
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Food Trucks
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Cafes & Bakeries
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
              © 2024 BiteCode. Crafted with ❤️ for Restaurant Innovation.
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

export default BiteCodeRestaurant;
