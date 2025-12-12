"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Car,
  BarChart3,
  Users,
  Truck,
  Star,
  Play,
  Sparkles,
  TrendingUp,
  Award,
  Phone,
  Mail,
  MapPin,
  Shield,
  ShoppingCart,
} from "lucide-react";

const DriveLogicSolutions = () => {
  const [activeTab, setActiveTab] =
    React.useState<keyof typeof solutions>("dealerships");

  const solutions = {
    dealerships: {
      title: "Car Dealerships",
      subtitle: "Complete Dealership Management",
      description:
        "Comprehensive software suite for modern car dealerships with inventory management, sales tracking, customer CRM, and finance integration.",
      icon: <Car className="w-8 h-8" />,
      features: [
        "Inventory Management System",
        "Lead & Customer CRM",
        "Sales Process Automation",
        "Finance & Insurance Tools",
        "Service Department Management",
        "Marketing Campaign Tools",
      ],
      benefits: [
        "300% increase in lead conversion",
        "50% reduction in inventory costs",
        "95% customer satisfaction rate",
        "40% faster sales processes",
      ],
      color: "blue",
    },
    rental: {
      title: "Car Rental Companies",
      subtitle: "Fleet Rental Solutions",
      description:
        "Advanced fleet management and rental booking system with real-time availability, dynamic pricing, and customer self-service portals.",
      icon: <Truck className="w-8 h-8" />,
      features: [
        "Online Booking Platform",
        "Fleet Tracking & Management",
        "Dynamic Pricing Engine",
        "Maintenance Scheduling",
        "Customer Self-Service",
        "Multi-location Support",
      ],
      benefits: [
        "85% booking automation",
        "60% increase in fleet utilization",
        "45% reduction in operational costs",
        "99% system uptime",
      ],
      color: "purple",
    },
    fleet: {
      title: "Fleet Management",
      subtitle: "Smart Fleet Operations",
      description:
        "Enterprise fleet management solution with GPS tracking, fuel monitoring, driver management, and comprehensive analytics.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: [
        "Real-time GPS Tracking",
        "Fuel Management System",
        "Driver Performance Analytics",
        "Maintenance Alerts",
        "Route Optimization",
        "Compliance Reporting",
      ],
      benefits: [
        "35% fuel cost reduction",
        "90% improvement in route efficiency",
        "70% faster maintenance response",
        "100% regulatory compliance",
      ],
      color: "green",
    },
    marketplace: {
      title: "Auto Marketplaces",
      subtitle: "Digital Car Marketplace",
      description:
        "Complete marketplace platform connecting buyers and sellers with advanced search, comparison tools, and secure transaction processing.",
      icon: <ShoppingCart className="w-8 h-8" />,
      features: [
        "Advanced Search & Filters",
        "Vehicle Comparison Tools",
        "Secure Payment Gateway",
        "Seller Dashboard",
        "Buyer Protection System",
        "Mobile Applications",
      ],
      benefits: [
        "500% increase in listings",
        "80% faster transaction time",
        "95% user retention rate",
        "24/7 automated operations",
      ],
      color: "orange",
    },
  };

  const caseStudies = [
    {
      brand: "Premier Auto Group",
      category: "Luxury Car Dealership",
      challenge:
        "Managing 300+ vehicle inventory across 5 locations with manual processes causing delays and lost sales opportunities.",
      solution:
        "Implemented comprehensive dealership management system with real-time inventory sync, automated lead distribution, and integrated finance tools.",
      result:
        "250% increase in sales, 60% reduction in inventory turnover time",
      image: "/projects/premier-auto.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
      gradient: "from-blue-500 to-cyan-600",
      metrics: {
        vehicles: "300+ managed daily",
        locations: "5 synchronized",
        efficiency: "75% improvement",
      },
    },
    {
      brand: "CityDrive Rentals",
      category: "Car Rental Network",
      challenge:
        "Complex fleet management across multiple cities with poor utilization rates and high operational costs.",
      solution:
        "Built intelligent fleet management platform with predictive analytics, dynamic pricing, and automated maintenance scheduling.",
      result: "180% improvement in fleet utilization, 45% cost reduction",
      image: "/projects/citydrive.jpg",
      technologies: ["Vue.js", "Python", "MongoDB", "Docker", "AWS"],
      gradient: "from-purple-500 to-pink-600",
      metrics: {
        fleet: "1,000+ vehicles",
        cities: "12 locations",
        utilization: "85% average",
      },
    },
    {
      brand: "LogiFleet Solutions",
      category: "Enterprise Fleet Management",
      challenge:
        "Tracking and managing 500+ commercial vehicles with compliance requirements and fuel cost optimization needs.",
      solution:
        "Developed comprehensive fleet tracking system with AI-powered route optimization, fuel monitoring, and compliance reporting.",
      result: "40% fuel cost savings, 95% compliance rate improvement",
      image: "/projects/logifleet.jpg",
      technologies: ["Angular", "Java", "Oracle", "Kubernetes", "GCP"],
      gradient: "from-green-500 to-emerald-600",
      metrics: {
        vehicles: "500+ tracked",
        routes: "10,000+ optimized",
        savings: "$2M+ annually",
      },
    },
  ];

  const features = [
    {
      icon: <Car className="w-12 h-12" />,
      title: "Smart Inventory Management",
      description:
        "AI-powered inventory tracking with predictive analytics for optimal stock levels, automated reordering, and market-based pricing.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Customer Journey Optimization",
      description:
        "Streamlined sales funnels from lead capture to delivery with integrated CRM, follow-up automation, and satisfaction tracking.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Advanced Analytics",
      description:
        "Real-time dashboards and reports providing insights into sales performance, inventory trends, and customer behavior patterns.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure Transactions",
      description:
        "End-to-end encryption, PCI compliance, fraud detection, and secure payment processing for all financial transactions.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    {
      number: "500+",
      label: "Vehicles Managed Daily",
      icon: <Car className="w-6 h-6" />,
      description: "Across all platforms",
    },
    {
      number: "150+",
      label: "Dealerships Served",
      icon: <Users className="w-6 h-6" />,
      description: "Worldwide client base",
    },
    {
      number: "$50M+",
      label: "Revenue Generated",
      icon: <TrendingUp className="w-6 h-6" />,
      description: "For our clients",
    },
    {
      number: "99.9%",
      label: "System Uptime",
      icon: <Award className="w-6 h-6" />,
      description: "Guaranteed reliability",
    },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      title: "General Manager",
      company: "Premier Auto Group",
      rating: 5,
      text: "DriveLogic transformed our dealership operations completely. We've seen unprecedented growth in both sales and customer satisfaction. The inventory management alone saved us thousands.",
      avatar: "/user.png",
      project: "Dealership Management System",
    },
    {
      name: "Sarah Martinez",
      title: "Operations Director",
      company: "City Fleet Solutions",
      rating: 5,
      text: "The fleet management system is incredible. We reduced operational costs by 40% in the first quarter alone. Real-time tracking and maintenance alerts are game-changers.",
      avatar: "/user.png",
      project: "Fleet Management Platform",
    },
    {
      name: "David Thompson",
      title: "CEO",
      company: "AutoMax Marketplace",
      rating: 5,
      text: "Our marketplace platform powered by DriveLogic handles thousands of transactions seamlessly. The security features and user experience are top-notch.",
      avatar: "/user.png",
      project: "Marketplace Platform",
    },
  ];

  const techStack = [
    { name: "React/Next.js", usage: "Frontend Development", icon: "⚛️" },
    { name: "Node.js/Python", usage: "Backend Services", icon: "🟢" },
    { name: "PostgreSQL/MongoDB", usage: "Database Systems", icon: "🗄️" },
    { name: "AWS/Docker", usage: "Cloud Infrastructure", icon: "☁️" },
    { name: "Redis/ElasticSearch", usage: "Performance & Search", icon: "🔍" },
    { name: "TensorFlow/AI", usage: "Machine Learning", icon: "🧠" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-white/20">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    DriveLogic
                  </h1>
                  <p className="text-xs text-gray-600">Automotive Solutions</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="hidden sm:block text-sm text-gray-500 font-medium">
                Automotive Technology Platform
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#solutions"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Solutions
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#case-studies"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Case Studies
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl shadow-lg">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>

          {/* Floating automotive elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 text-6xl">🚗</div>
            <div className="absolute top-32 right-32 text-4xl">🚙</div>
            <div className="absolute bottom-32 left-32 text-5xl">🚕</div>
            <div className="absolute bottom-20 right-20 text-7xl">🏎️</div>
            <div className="absolute top-1/2 left-1/4 text-3xl">🚚</div>
            <div className="absolute top-1/3 right-1/3 text-4xl">🛻</div>
          </div>

          {/* Liquid glass overlays */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-20">
          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-12 mt-10">
            <Sparkles className="w-4 h-4 mr-2 text-blue-600" />
            <span className="text-sm font-medium text-gray-800">
              Trusted by 150+ Automotive Businesses
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight">
            <span className="block mb-4 text-gray-900">
              Drive Your Business
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 bg-clip-text text-transparent">
              Into the Future
            </span>
            <span className="block text-gray-600 text-4xl lg:text-5xl xl:text-6xl font-light mt-4">
              with Smart Technology
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
            Revolutionary automotive software solutions that streamline
            operations, boost sales, and transform customer experiences across
            dealerships, rental companies, and fleet management.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="glass bg-blue-500 hover:bg-blue-600 text-white border border-blue-200/50 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group shadow-lg">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-medium rounded-2xl group shadow-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">{stat.icon}</div>
                </div>
                <div className="text-3xl font-bold mb-2 text-gray-900">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-8">
              <Car className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">
                Automotive Solutions
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-10">
              <span className="block">Complete Automotive</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technology Suite
              </span>
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Specialized solutions for every segment of the automotive
              industry, built with cutting-edge technology and deep industry
              expertise.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 glass rounded-2xl p-2 backdrop-blur-xl border border-white/20 shadow-lg">
            {(Object.keys(solutions) as Array<keyof typeof solutions>).map(
              (key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === key
                      ? `bg-${solutions[key].color}-600 text-white shadow-lg`
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {solutions[key].title}
                </button>
              )
            )}
          </div>

          {/* Tab Content */}
          <div className="glass rounded-3xl backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden">
            {Object.entries(solutions).map(([key, solution]) => (
              <div
                key={key}
                className={`${activeTab === key ? "block" : "hidden"}`}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="p-12">
                    <div
                      className={`w-16 h-16 bg-${solution.color}-100 rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <div className={`text-${solution.color}-600`}>
                        {solution.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                      {solution.subtitle}
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-8">
                      {solution.description}
                    </p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Key Features:
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {solution.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <CheckCircle
                                className={`w-4 h-4 text-${solution.color}-600`}
                              />
                              <span className="text-sm text-gray-700">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">
                          Benefits:
                        </h4>
                        <div className="space-y-2">
                          {solution.benefits.map((benefit, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2"
                            >
                              <TrendingUp
                                className={`w-4 h-4 text-${solution.color}-600`}
                              />
                              <span className="text-sm text-gray-700 font-medium">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button
                      className={`bg-${solution.color}-600 hover:bg-${solution.color}-700 text-white px-8 py-3 rounded-xl mt-8`}
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>

                  <div className="relative p-12">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <div className="text-6xl opacity-30">
                        {solution.title === "Car Dealerships"
                          ? "🏪"
                          : solution.title === "Car Rental Companies"
                          ? "🚗"
                          : solution.title === "Fleet Management"
                          ? "🚛"
                          : "🛒"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-40 -right-60 w-96 h-96 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              <span className="block">Powerful Features for</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Modern Automotive Business
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Everything you need to streamline operations, increase sales, and
              deliver exceptional customer experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="glass rounded-3xl p-8 mb-6 backdrop-blur-xl border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300 card-hover">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
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
          <div className="absolute top-20 -left-60 w-96 h-96 bg-gradient-to-br from-blue-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from automotive businesses we&#39;ve transformed with
              technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
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
                    <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white/10 translate-y-16 translate-x-16"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                      <div className="flex space-x-1">
                        {study.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/15 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{study.brand}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {study.solution}
                    </p>
                  </div>

                  <div className="glass rounded-xl p-4 backdrop-blur-xl border border-white/20">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-xs text-gray-600 capitalize">
                            {key}
                          </div>
                          <div className="font-bold text-blue-600">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4 backdrop-blur-xl border border-green-200/50 bg-green-50/50">
                    <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                    <p className="text-green-700 font-bold">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              <span className="block">Built with</span>
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Modern Technology
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Cutting-edge tools and frameworks powering automotive innovation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 shadow-lg text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
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
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-700">
              Real results from real automotive businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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

                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}, {testimonial.company}
                    </div>
                  </div>
                </div>

                <div className="text-sm text-blue-600 font-medium">
                  Project: {testimonial.project}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="block text-white">Ready to Transform</span>
            <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Your Automotive Business?
            </span>
          </h2>

          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join 150+ automotive businesses already using DriveLogic to increase
            sales, streamline operations, and deliver exceptional customer
            experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="glass bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-2xl">
              Schedule Demo
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-blue-200">Email</div>
              <div className="font-medium text-white">
                hello@drivelogic.solutions
              </div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-blue-200">Phone</div>
              <div className="font-medium text-white">+234 807 525 6960</div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-blue-200">Location</div>
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
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">DriveLogic</h1>
                  <p className="text-xs text-gray-400">Automotive Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transforming automotive businesses with intelligent technology
                solutions that drive growth and efficiency.
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
              <h4 className="font-bold mb-4 text-white">Solutions</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Dealership Management
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Fleet Management
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Rental Solutions
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Auto Marketplace
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Car Dealerships
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Rental Companies
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Fleet Operators
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Auto Services
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
              © 2024 DriveLogic Solutions. Driving Innovation in Automotive
              Technology.
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

export default DriveLogicSolutions;
