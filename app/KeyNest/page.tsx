"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Home,
  Search,
  MapPin,
  Users,
  TrendingUp,
  Award,
  Building,
  Key,
  Camera,
  Shield,
  Phone,
  Mail,
  Star,
  Play,
  Sparkles,
  BarChart3,
  DollarSign,
  Eye,
  Settings,
} from "lucide-react";

const KeyNestSolutions = () => {
  const [activeTab, setActiveTab] =
    React.useState<keyof typeof solutions>("agents");

  const solutions = {
    agents: {
      title: "Real Estate Agents",
      subtitle: "Complete CRM & Listing Platform",
      description:
        "Comprehensive customer relationship management and property listing platform designed specifically for real estate agents and brokers.",
      icon: <Users className="w-8 h-8" />,
      features: [
        "Advanced Lead Management",
        "Property Listing Management",
        "Client Communication Hub",
        "Commission Tracking",
        "Marketing Automation",
        "Performance Analytics",
      ],
      benefits: [
        "250% increase in lead conversion",
        "60% reduction in administrative time",
        "95% client satisfaction rate",
        "40% faster deal closure",
      ],
      color: "emerald",
      pricing: "Starting at $99/month",
    },
    developers: {
      title: "Property Developers",
      subtitle: "Project Management & Sales",
      description:
        "End-to-end project management and sales tracking platform for property developers and construction companies.",
      icon: <Building className="w-8 h-8" />,
      features: [
        "Project Timeline Management",
        "Sales Progress Tracking",
        "Inventory Control System",
        "Buyer Portal & Communication",
        "Financial Reporting",
        "Construction Milestone Tracking",
      ],
      benefits: [
        "180% improvement in project efficiency",
        "45% faster sales cycles",
        "70% reduction in project delays",
        "90% accuracy in cost tracking",
      ],
      color: "blue",
      pricing: "Starting at $199/month",
    },
    managers: {
      title: "Property Managers",
      subtitle: "Comprehensive Property Management",
      description:
        "All-in-one property and tenant management solution with maintenance tracking, rent collection, and reporting.",
      icon: <Key className="w-8 h-8" />,
      features: [
        "Tenant Management System",
        "Maintenance Request Tracking",
        "Automated Rent Collection",
        "Lease Management",
        "Financial Reporting",
        "Property Performance Analytics",
      ],
      benefits: [
        "85% reduction in maintenance response time",
        "99% rent collection efficiency",
        "50% decrease in tenant turnover",
        "75% improvement in operational efficiency",
      ],
      color: "purple",
      pricing: "Starting at $149/month",
    },
    investors: {
      title: "Real Estate Investors",
      subtitle: "Portfolio Analysis & Tracking",
      description:
        "Advanced portfolio management and investment analysis platform for real estate investors and fund managers.",
      icon: <TrendingUp className="w-8 h-8" />,
      features: [
        "Portfolio Performance Analytics",
        "ROI & Cash Flow Tracking",
        "Market Analysis Tools",
        "Deal Pipeline Management",
        "Investment Comparison",
        "Risk Assessment",
      ],
      benefits: [
        "300% improvement in investment analysis",
        "65% better portfolio performance",
        "80% faster deal evaluation",
        "95% accuracy in ROI predictions",
      ],
      color: "orange",
      pricing: "Starting at $299/month",
    },
  };

  const features = [
    {
      icon: <Search className="w-12 h-12" />,
      title: "AI-Powered Property Search",
      description:
        "Advanced search engine with machine learning algorithms, neighborhood insights, and personalized property recommendations.",
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Virtual Tour Technology",
      description:
        "360° virtual tours, augmented reality visualization, and interactive floor plans for immersive property experiences.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Market Analytics & Insights",
      description:
        "Real-time market data, price predictions, comparative market analysis, and investment analysis tools.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure Transaction Processing",
      description:
        "End-to-end encrypted document management, digital signatures, and secure payment processing for safe transactions.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const caseStudies = [
    {
      brand: "Pinnacle Realty Group",
      category: "Real Estate Brokerage",
      challenge:
        "Managing 500+ agents across 12 locations with inconsistent lead management and poor visibility into sales performance.",
      solution:
        "Implemented comprehensive agent CRM with automated lead distribution, performance tracking, and integrated marketing tools.",
      result:
        "400% increase in lead conversion, 60% improvement in agent productivity",
      image: "/projects/pinnacle-realty.jpg",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis"],
      gradient: "from-emerald-500 to-teal-600",
      metrics: {
        agents: "500+ managed",
        locations: "12 offices",
        leads: "10,000+ monthly",
      },
    },
    {
      brand: "MetroHomes Development",
      category: "Property Developer",
      challenge:
        "Complex project management across multiple developments with poor coordination between sales, construction, and finance teams.",
      solution:
        "Built integrated project management platform with real-time collaboration, milestone tracking, and financial reporting.",
      result: "250% improvement in project delivery time, 45% cost reduction",
      image: "/projects/metrohomes.jpg",
      technologies: ["Vue.js", "Python", "MongoDB", "Docker", "GCP"],
      gradient: "from-blue-500 to-indigo-600",
      metrics: {
        projects: "50+ active",
        units: "2,000+ managed",
        efficiency: "85% improvement",
      },
    },
    {
      brand: "Urban Property Management",
      category: "Property Management Company",
      challenge:
        "Managing 1,000+ rental properties with manual processes causing delayed maintenance and rent collection issues.",
      solution:
        "Developed comprehensive property management system with tenant portals, automated workflows, and financial management.",
      result:
        "90% reduction in maintenance response time, 99% rent collection rate",
      image: "/projects/urban-property.jpg",
      technologies: ["Angular", "Java", "Oracle", "Kubernetes", "Azure"],
      gradient: "from-purple-500 to-pink-600",
      metrics: {
        properties: "1,000+ units",
        tenants: "2,500+ managed",
        efficiency: "90% automation",
      },
    },
  ];

  const stats = [
    {
      number: "25K+",
      label: "Properties Managed",
      icon: <Home className="w-6 h-6" />,
      description: "Across all platforms",
    },
    {
      number: "$5.2B",
      label: "Transaction Volume",
      icon: <DollarSign className="w-6 h-6" />,
      description: "Processed annually",
    },
    {
      number: "800+",
      label: "Real Estate Professionals",
      icon: <Users className="w-6 h-6" />,
      description: "Active users",
    },
    {
      number: "99.8%",
      label: "Customer Satisfaction",
      icon: <Award className="w-6 h-6" />,
      description: "Based on reviews",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      title: "Senior Partner",
      company: "Prime Properties LLC",
      rating: 5,
      text: "KeyNest revolutionized how we manage our property portfolio. The analytics alone saved us six figures this year. The platform is intuitive and incredibly powerful.",
      avatar: "/user.png",
      project: "Agent CRM Platform",
    },
    {
      name: "David Thompson",
      title: "Property Manager",
      company: "Urban Living Solutions",
      rating: 5,
      text: "Our property management became effortless. Tenant satisfaction increased 40% since we started using KeyNest. The maintenance tracking is a game-changer.",
      avatar: "/user.png",
      project: "Property Management System",
    },
    {
      name: "Sarah Wilson",
      title: "Development Director",
      company: "MetroHomes Development",
      rating: 5,
      text: "Project coordination across teams has never been better. We're delivering projects 25% faster and with much better visibility into every aspect of development.",
      avatar: "/user.png",
      project: "Development Management Platform",
    },
  ];

  const techStack = [
    { name: "React/Next.js", usage: "Frontend Development", icon: "⚛️" },
    { name: "Node.js/Python", usage: "Backend Services", icon: "🟢" },
    { name: "PostgreSQL/MongoDB", usage: "Database Systems", icon: "🗄️" },
    { name: "AWS/Azure", usage: "Cloud Infrastructure", icon: "☁️" },
    { name: "TensorFlow/AI", usage: "Machine Learning", icon: "🧠" },
    { name: "Stripe/PayPal", usage: "Payment Processing", icon: "💳" },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-white/20">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">KeyNest</h1>
                  <p className="text-xs text-gray-600">Real Estate Solutions</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="hidden sm:block text-sm text-gray-500 font-medium">
                Real Estate Technology Platform
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#solutions"
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Solutions
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Features
              </a>
              <a
                href="#case-studies"
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Case Studies
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-xl shadow-lg">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50"></div>

          {/* Floating property elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 text-6xl">🏠</div>
            <div className="absolute top-32 right-32 text-4xl">🏢</div>
            <div className="absolute bottom-32 left-32 text-5xl">🏙️</div>
            <div className="absolute bottom-20 right-20 text-7xl">🗝️</div>
            <div className="absolute top-1/2 left-1/4 text-3xl">🏘️</div>
            <div className="absolute top-1/3 right-1/3 text-4xl">🏗️</div>
          </div>

          {/* Liquid glass overlays */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-teal-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-20">
          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-12 mt-10">
            <Sparkles className="w-4 h-4 mr-2 text-emerald-600" />
            <span className="text-sm font-medium text-gray-800">
              Trusted by 800+ Real Estate Professionals
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight">
            <span className="block mb-4 text-gray-900">
              Unlock Your Property&#39;s
            </span>
            <span className="block bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">
              Full Potential
            </span>
            <span className="block text-gray-600 text-4xl lg:text-5xl xl:text-6xl font-light mt-4">
              with Smart Technology
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
            The complete real estate technology platform that simplifies
            property management, accelerates sales, and delivers exceptional
            experiences for agents, developers, managers, and investors.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="glass bg-emerald-500 hover:bg-emerald-600 text-white border border-emerald-200/50 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group shadow-lg">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg font-medium rounded-2xl group shadow-lg">
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
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-emerald-600">{stat.icon}</div>
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

      {/* About Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-bl from-teal-100/50 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg">
                <Home className="w-4 h-4 mr-2 text-emerald-600" />
                <span className="text-sm font-medium text-gray-700">
                  About KeyNest
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Where Real Estate Meets</span>
                <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Innovation
                </span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                KeyNest Solutions is revolutionizing the real estate industry
                with comprehensive technology platforms that empower
                professionals to achieve more. From lead management to portfolio
                analysis, we provide the tools that drive success.
              </p>

              <div className="space-y-6">
                {[
                  "Streamline property operations with intelligent automation",
                  "Accelerate sales cycles with advanced CRM and analytics",
                  "Enhance client experiences with modern digital tools",
                  "Scale your business with cloud-native, secure platforms",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-md">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-medium rounded-2xl group shadow-lg">
                Learn Our Story
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Dashboard Preview */}
            <div className="relative">
              <div className="glass rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                {/* Dashboard Header */}
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">KeyNest Dashboard</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Live Data</span>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="glass rounded-xl p-4 backdrop-blur-xl border border-emerald-200/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">
                          Active Listings
                        </span>
                        <TrendingUp className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">
                        247
                      </div>
                      <div className="text-sm text-emerald-600">
                        ↗ +12% this month
                      </div>
                    </div>
                    <div className="glass rounded-xl p-4 backdrop-blur-xl border border-blue-200/50">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">
                          Closed Deals
                        </span>
                        <DollarSign className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-gray-900">89</div>
                      <div className="text-sm text-blue-600">
                        ↗ +28% this month
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4 backdrop-blur-xl border border-white/20">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-medium text-gray-900">
                        Recent Activity
                      </span>
                      <Eye className="w-4 h-4 text-gray-500" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          New lead from downtown property
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          Contract signed for Maple Street
                        </span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-700">
                          Inspection scheduled
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 backdrop-blur-xl border border-white/20 shadow-xl">
                <div className="text-sm text-gray-600">Conversion Rate</div>
                <div className="text-2xl font-bold text-emerald-600">94.2%</div>
              </div>

              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 backdrop-blur-xl border border-white/20 shadow-xl">
                <div className="text-sm text-gray-600">ROI Increase</div>
                <div className="text-2xl font-bold text-blue-600">+185%</div>
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
          <div className="absolute top-40 -right-60 w-96 h-96 bg-gradient-to-bl from-emerald-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-8">
              <Building className="w-4 h-4 mr-2 text-emerald-600" />
              <span className="text-sm font-medium text-gray-700">
                Our Solutions
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-10">
              <span className="block">Tailored Solutions for</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Every Professional
              </span>
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Whether you&#39;re an agent, developer, manager, or investor - we
              have the perfect tools and features designed specifically for your
              needs.
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
                      className={`w-16 h-16 bg-${solution.color}-100 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
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
                          Proven Results:
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

                    <div className="flex items-center justify-between mt-8">
                      <div className="text-lg font-bold text-emerald-600">
                        {solution.pricing}
                      </div>
                      <Button
                        className={`bg-${solution.color}-600 hover:bg-${solution.color}-700 text-white px-8 py-3 rounded-xl`}
                      >
                        Get Started
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>

                  <div className="relative p-12">
                    <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 h-80 flex items-center justify-center">
                      <div className="text-6xl opacity-30">
                        {solution.title === "Real Estate Agents"
                          ? "👥"
                          : solution.title === "Property Developers"
                          ? "🏗️"
                          : solution.title === "Property Managers"
                          ? "🗝️"
                          : "📈"}
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
        className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-60 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              <span className="block">Everything You Need in</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                One Platform
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Powerful features designed to streamline your real estate
              operations and grow your business with cutting-edge technology.
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
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-40 -right-60 w-96 h-96 bg-gradient-to-bl from-teal-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from real estate professionals who&#39;ve transformed
              their businesses with KeyNest.
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
                          <div className="font-bold text-emerald-600">
                            {value}
                          </div>
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
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              <span className="block">Powered by</span>
              <span className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Modern Technology
              </span>
            </h2>
            <p className="text-xl text-gray-700">
              Enterprise-grade technology stack ensuring security, scalability,
              and performance
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
      <section className="py-32 bg-white">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Loved by Real Estate Professionals
            </h2>
            <p className="text-xl text-gray-700">
              See how KeyNest is transforming businesses across the industry
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
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
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

                <div className="text-sm text-emerald-600 font-medium">
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
        className="py-32 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="block text-white">Ready to Transform</span>
            <span className="block bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
              Your Real Estate Business?
            </span>
          </h2>

          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto">
            Join thousands of real estate professionals who trust KeyNest to
            power their success. Start your journey today with our comprehensive
            platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="glass bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-2xl">
              Schedule Demo
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <CheckCircle className="w-8 h-8 text-emerald-200 mx-auto mb-4" />
              <div className="text-white font-medium">30-day free trial</div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <Settings className="w-8 h-8 text-emerald-200 mx-auto mb-4" />
              <div className="text-white font-medium">No setup fees</div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <Shield className="w-8 h-8 text-emerald-200 mx-auto mb-4" />
              <div className="text-white font-medium">Cancel anytime</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-emerald-200">Email</div>
              <div className="font-medium text-white">
                hello@keynest.solutions
              </div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-emerald-200">Phone</div>
              <div className="font-medium text-white">+234 807 525 6960</div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-emerald-200">Location</div>
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
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">KeyNest</h1>
                  <p className="text-xs text-gray-400">Real Estate Solutions</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering real estate professionals with innovative technology
                solutions that drive growth and success.
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
                  Real Estate Agents
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Property Developers
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Property Managers
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Real Estate Investors
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Features</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Property Search
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Virtual Tours
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Market Analytics
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Transaction Management
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
                  Contact
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 KeyNest Solutions. Unlocking Real Estate Potential.
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

export default KeyNestSolutions;
