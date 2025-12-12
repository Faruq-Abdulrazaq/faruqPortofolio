"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  Star,
  Play,
  ExternalLink,
  Braces,
  GitBranch,
  Terminal,
  Settings,
  Award,
  Download,
  Phone,
  Mail,
  MapPin,
  Coffee,
  Clock,
  Layers,
} from "lucide-react";

const CodeCraftStudio = () => {
  type TechStackKey = keyof typeof techStacks;
  const [activeTab, setActiveTab] = React.useState<TechStackKey>("frontend");

  const services = [
    {
      title: "Frontend Development",
      subtitle: "Beautiful User Interfaces",
      description:
        "Modern, responsive web applications built with cutting-edge frameworks and stunning design systems.",
      icon: <Monitor className="w-8 h-8" />,
      technologies: [
        "React",
        "Next.js",
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      features: [
        "Progressive Web Apps",
        "Server-Side Rendering",
        "Real-time Features",
        "Performance Optimization",
        "Responsive Design",
        "Accessibility (WCAG)",
      ],
      gradient: "from-blue-600/90 to-cyan-700/90",
      price: "Starting at $5,000",
    },
    {
      title: "Mobile Development",
      subtitle: "Native & Cross-Platform Apps",
      description:
        "Native and cross-platform mobile solutions for iOS and Android with native performance and user experience.",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Expo"],
      features: [
        "Cross-platform Development",
        "Native Performance",
        "App Store Optimization",
        "Push Notifications",
        "Offline Capabilities",
        "In-App Purchases",
      ],
      gradient: "from-purple-600/90 to-pink-700/90",
      price: "Starting at $8,000",
    },
    {
      title: "Backend & APIs",
      subtitle: "Scalable Server Solutions",
      description:
        "Robust backend systems with RESTful and GraphQL APIs, microservices architecture, and cloud deployment.",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
      features: [
        "RESTful & GraphQL APIs",
        "Microservices Architecture",
        "Database Design",
        "Authentication & Security",
        "Real-time Communications",
        "Third-party Integrations",
      ],
      gradient: "from-green-600/90 to-emerald-700/90",
      price: "Starting at $6,000",
    },
    {
      title: "Cloud & DevOps",
      subtitle: "Modern Infrastructure",
      description:
        "Cloud-native applications with modern DevOps practices, automated deployment, and monitoring solutions.",
      icon: <Cloud className="w-8 h-8" />,
      technologies: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Terraform",
        "GitHub Actions",
      ],
      features: [
        "Cloud Migration",
        "Container Orchestration",
        "CI/CD Pipelines",
        "Auto Scaling",
        "Monitoring & Logging",
        "Infrastructure as Code",
      ],
      gradient: "from-orange-600/90 to-red-700/90",
      price: "Starting at $4,000",
    },
  ];

  const techStacks = {
    frontend: [
      { name: "React", icon: "⚛️", usage: "UI Development" },
      { name: "Next.js", icon: "▲", usage: "Full-Stack Framework" },
      { name: "TypeScript", icon: "🔷", usage: "Type Safety" },
      { name: "Tailwind CSS", icon: "🎨", usage: "Styling" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢", usage: "Server Runtime" },
      { name: "Python", icon: "🐍", usage: "Backend Logic" },
      { name: "PostgreSQL", icon: "🐘", usage: "Database" },
      { name: "Redis", icon: "🔴", usage: "Caching" },
    ],
    mobile: [
      { name: "React Native", icon: "📱", usage: "Cross-Platform" },
      { name: "Flutter", icon: "💙", usage: "Mobile Framework" },
      { name: "Expo", icon: "⚡", usage: "Development Tools" },
      { name: "Firebase", icon: "🔥", usage: "Backend Services" },
    ],
    cloud: [
      { name: "AWS", icon: "☁️", usage: "Cloud Platform" },
      { name: "Docker", icon: "🐳", usage: "Containerization" },
      { name: "Kubernetes", icon: "⚓", usage: "Orchestration" },
      { name: "Terraform", icon: "🏗️", usage: "Infrastructure" },
    ],
  };

  const projects = [
    {
      name: "HealthFlow Pro",
      category: "Healthcare Platform",
      description:
        "HIPAA-compliant patient management system with telemedicine capabilities, real-time chat, and medical records management.",
      fullDescription:
        "A comprehensive healthcare platform that revolutionizes patient care through technology. Features include secure video consultations, automated appointment scheduling, prescription management, and integrated billing systems.",
      tech: ["React", "Node.js", "PostgreSQL", "AWS", "WebRTC"],
      results: "70% efficiency increase, 45% cost reduction",
      metrics: {
        users: "10,000+",
        uptime: "99.9%",
        performance: "A+ rating",
      },
      image: "/projects/healthflow.jpg",
      gradient: "from-emerald-500 to-teal-600",
      timeline: "4 months",
      team: "5 developers",
    },
    {
      name: "FinanceTracker Enterprise",
      category: "Financial Software",
      description:
        "Real-time financial analytics platform with multi-currency support, automated reporting, and compliance management.",
      fullDescription:
        "Enterprise-grade financial management system with advanced analytics, risk assessment, and regulatory compliance features. Handles millions of transactions with real-time processing and reporting.",
      tech: ["Angular", "Python", "Redis", "Docker", "AWS"],
      results: "85% faster reporting, 60% cost savings",
      metrics: {
        transactions: "1M+ daily",
        accuracy: "99.99%",
        compliance: "SOX certified",
      },
      image: "/projects/financetracker.jpg",
      gradient: "from-blue-500 to-indigo-600",
      timeline: "6 months",
      team: "8 developers",
    },
    {
      name: "EduManage Suite",
      category: "Education Technology",
      description:
        "Complete school management system with student portal, analytics, and parent communication tools.",
      fullDescription:
        "Comprehensive educational platform connecting students, teachers, and parents. Features include grade management, attendance tracking, assignment submission, and detailed analytics for educational insights.",
      tech: ["Vue.js", "Laravel", "MySQL", "GCP", "Socket.io"],
      results: "90% admin time saved, 95% user satisfaction",
      metrics: {
        schools: "200+",
        students: "50,000+",
        satisfaction: "4.8/5",
      },
      image: "/projects/edumanage.jpg",
      gradient: "from-purple-500 to-pink-600",
      timeline: "5 months",
      team: "6 developers",
    },
  ];

  const stats = [
    {
      number: "100+",
      label: "Projects Delivered",
      icon: <Code2 className="w-6 h-6" />,
      description: "Successfully completed projects",
    },
    {
      number: "99.8%",
      label: "Client Satisfaction",
      icon: <Star className="w-6 h-6" />,
      description: "Based on client feedback",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: <Settings className="w-6 h-6" />,
      description: "Round-the-clock assistance",
    },
    {
      number: "7+",
      label: "Years Experience",
      icon: <Award className="w-6 h-6" />,
      description: "In software development",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechFlow Solutions",
      rating: 5,
      text: "CodeCraft delivered an exceptional healthcare platform that exceeded our expectations. Their attention to detail and technical expertise is unmatched.",
      avatar: "/user.png",
      project: "HealthFlow Pro",
    },
    {
      name: "Michael Chen",
      title: "Product Manager",
      company: "FinanceFirst",
      rating: 5,
      text: "The financial analytics platform transformed our operations. Real-time reporting and compliance features are game-changers for our business.",
      avatar: "/user.png",
      project: "FinanceTracker Enterprise",
    },
    {
      name: "Dr. Emily Rodriguez",
      title: "School Principal",
      company: "Greenwood Academy",
      rating: 5,
      text: "EduManage Suite revolutionized our school administration. Parents, teachers, and students love the seamless communication and management features.",
      avatar: "/user.png",
      project: "EduManage Suite",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We dive deep into your business requirements, analyze your target audience, and create a comprehensive project roadmap with clear milestones.",
      duration: "1-2 weeks",
      deliverables: [
        "Project Scope",
        "Technical Requirements",
        "Timeline",
        "Cost Estimate",
      ],
    },
    {
      step: "02",
      title: "Design & Architecture",
      description:
        "Our design team creates intuitive user experiences while our architects design scalable, secure system architectures that grow with your business.",
      duration: "2-3 weeks",
      deliverables: [
        "UI/UX Designs",
        "System Architecture",
        "Database Design",
        "API Specifications",
      ],
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Agile development with continuous integration, automated testing, code reviews, and regular client demos to ensure quality and alignment.",
      duration: "8-16 weeks",
      deliverables: [
        "Working Software",
        "Test Coverage",
        "Documentation",
        "Security Audit",
      ],
    },
    {
      step: "04",
      title: "Deployment & Support",
      description:
        "Seamless deployment with comprehensive documentation, team training, performance monitoring, and ongoing maintenance support.",
      duration: "1-2 weeks",
      deliverables: [
        "Live Application",
        "Deployment Guide",
        "Training Materials",
        "Support Plan",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-white/20">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Braces className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-md"></div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    CodeCraft
                  </h1>
                  <p className="text-xs text-gray-600">Software Studio</p>
                </div>
              </div>

              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="hidden sm:block text-sm text-gray-500 font-medium">
                Custom Software Development
              </div>
            </div>

            <div className="hidden md:flex space-x-8">
              <a
                href="#services"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Projects
              </a>
              <a
                href="#process"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Process
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
              >
                Contact
              </a>
            </div>

            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl shadow-lg">
              Start Project
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50"></div>

          {/* Floating code elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 text-6xl font-mono text-indigo-600">
              {"<>"}
            </div>
            <div className="absolute top-32 right-32 text-4xl font-mono text-purple-600">
              {"</>"}
            </div>
            <div className="absolute bottom-32 left-32 text-5xl font-mono text-blue-600">
              {"{ }"}
            </div>
            <div className="absolute bottom-20 right-20 text-7xl font-mono text-indigo-600">
              {"[]"}
            </div>
            <div className="absolute top-1/2 left-1/4 text-3xl font-mono text-purple-600">
              {"( )"}
            </div>
            <div className="absolute top-1/3 right-1/3 text-4xl font-mono text-blue-600">
              {"&&"}
            </div>
          </div>

          {/* Liquid glass overlays */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-20">
          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-12 mt-10">
            <Terminal className="w-4 h-4 mr-2 text-indigo-600" />
            <span className="text-sm font-medium text-gray-800 font-mono">
              $ building amazing software...
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight">
            <span className="block mb-4 text-gray-900">We</span>
            <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Code
            </span>
            <span className="block text-gray-600 text-4xl lg:text-5xl xl:text-6xl font-light mt-4">
              Your Success Story
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
            Transform your business ideas into powerful, scalable software
            solutions. We craft custom applications that drive growth,
            efficiency, and innovation across all platforms.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="glass bg-indigo-500 hover:bg-indigo-600 text-white border border-indigo-200/50 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group shadow-lg">
              <Coffee className="mr-2 w-5 h-5" />
              Let&#39;s Talk Coffee & Code
            </Button>
            <Button className="bg-white text-indigo-600 hover:bg-gray-50 border-2 border-gray-200 px-8 py-6 text-lg font-medium rounded-2xl group shadow-lg">
              <Play className="mr-2 w-5 h-5" />
              View Our Work
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
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-indigo-600">{stat.icon}</div>
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
          <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-indigo-100/50 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-bl from-purple-100/50 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg">
                <Code2 className="w-4 h-4 mr-2 text-indigo-600" />
                <span className="text-sm font-medium text-gray-700">
                  About CodeCraft
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Where Code Meets</span>
                <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Craftsmanship
                </span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                At CodeCraft Studio, we believe in the artistry of code. Our
                team of passionate developers, designers, and architects work
                together to create software solutions that are not just
                functional, but elegant, scalable, and maintainable.
              </p>

              <div className="space-y-6">
                {[
                  "Build scalable applications with modern architectures",
                  "Create intuitive user experiences that delight users",
                  "Implement robust security and performance optimizations",
                  "Provide ongoing support and continuous improvements",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-md">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-medium rounded-2xl group shadow-lg">
                Learn Our Process
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Code Editor Mockup */}
            <div className="relative">
              <div className="glass rounded-3xl backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
                {/* Editor Header */}
                <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-300 text-sm font-mono">
                      solution.tsx
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <GitBranch className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-xs">main</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="bg-gray-900 p-6 font-mono text-sm">
                  <pre className="text-gray-300 leading-relaxed">
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">createSolution</span> ={" "}
                    <span className="text-green-400">async</span> (
                    <span className="text-orange-400">requirements</span>) =&gt;{" "}
                    {"{"}
                    {"\n"} <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-400">analysis</span> ={" "}
                    <span className="text-purple-400">await</span>{" "}
                    <span className="text-yellow-400">analyzeBusiness</span>(
                    <span className="text-orange-400">requirements</span>);
                    {"\n"} <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-400">design</span> ={" "}
                    <span className="text-yellow-400">
                      createUserExperience
                    </span>
                    (<span className="text-cyan-400">analysis</span>);
                    {"\n"} <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-400">architecture</span> ={" "}
                    <span className="text-yellow-400">designSystem</span>(
                    <span className="text-cyan-400">design</span>);
                    {"\n"} <span className="text-purple-400">const</span>{" "}
                    <span className="text-cyan-400">app</span> ={" "}
                    <span className="text-purple-400">await</span>{" "}
                    <span className="text-yellow-400">
                      buildWithCraftsmanship
                    </span>
                    (<span className="text-cyan-400">architecture</span>);
                    {"\n"}
                    {"\n"} <span className="text-purple-400">return</span> {"{"}
                    {"\n"} <span className="text-cyan-400">scalable</span>:{" "}
                    <span className="text-green-400">true</span>,{"\n"}{" "}
                    <span className="text-cyan-400">secure</span>:{" "}
                    <span className="text-green-400">true</span>,{"\n"}{" "}
                    <span className="text-cyan-400">maintainable</span>:{" "}
                    <span className="text-green-400">true</span>,{"\n"}{" "}
                    <span className="text-cyan-400">delightful</span>:{" "}
                    <span className="text-green-400">true</span>
                    {"\n"} {"}"};{"\n"}
                    {"}"};
                  </pre>
                </div>

                {/* Status Bar */}
                <div className="bg-indigo-600 px-6 py-3 flex items-center justify-between text-white text-sm">
                  <div className="flex items-center space-x-6">
                    <span>✓ Tests passing</span>
                    <span>✓ No vulnerabilities</span>
                    <span>✓ Performance optimized</span>
                  </div>
                  <div>Ready for deployment</div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 backdrop-blur-xl border border-white/20 shadow-xl">
                <div className="text-sm text-gray-600">Code Quality</div>
                <div className="text-2xl font-bold text-green-600">A+</div>
              </div>

              <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 backdrop-blur-xl border border-white/20 shadow-xl">
                <div className="text-sm text-gray-600">Performance</div>
                <div className="text-2xl font-bold text-indigo-600">99/100</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-40 -right-60 w-96 h-96 bg-gradient-to-bl from-indigo-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-8">
              <Layers className="w-4 h-4 mr-2 text-indigo-600" />
              <span className="text-sm font-medium text-gray-700">
                Our Services
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-10">
              <span className="block">Full-Stack Development</span>
              <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end software
              development services using modern technologies and industry best
              practices.
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
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    <p className="text-white/90 text-lg">{service.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Features:</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>
                          <span className="text-sm text-gray-700 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="text-lg font-bold text-indigo-600">
                      {service.price}
                    </div>
                    <Button
                      variant="outline"
                      className="border-2 border-gray-200 hover:border-indigo-500 text-gray-700 hover:text-indigo-600 rounded-xl group"
                    >
                      Learn More
                      <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Stack Section */}
          <div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Technology Stack
              </h3>
              <p className="text-gray-600">
                Modern tools and frameworks for cutting-edge solutions
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-8 bg-gray-100 rounded-2xl p-2">
              {Object.keys(techStacks).map((stack) => (
                <button
                  key={stack}
                  onClick={() =>
                    setActiveTab(stack as TechStackKey | "frontend")
                  }
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 capitalize ${
                    activeTab === stack
                      ? "bg-white text-indigo-600 shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {stack}
                </button>
              ))}
            </div>

            {/* Technology Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {techStacks[activeTab].map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-white rounded-2xl shadow-md flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-gray-600">{tech.usage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 -left-60 w-96 h-96 bg-gradient-to-br from-indigo-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Showcasing our latest work across different industries and
              technologies
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass rounded-3xl backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden card-hover"
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-br ${project.gradient} p-6 text-white relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-white/10 translate-y-16 translate-x-16"></div>
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                      <div className="flex space-x-1">
                        {project.tech.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-white/15 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-white/90 text-sm">
                      {project.timeline} • {project.team}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="glass rounded-xl p-4 backdrop-blur-xl border border-white/20">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Metrics
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-sm text-gray-600 capitalize">
                            {key}
                          </div>
                          <div className="font-bold text-indigo-600">
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="glass rounded-xl p-4 backdrop-blur-xl border border-green-200/50 bg-green-50/50">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Results
                    </h4>
                    <p className="text-green-700 font-bold">
                      {project.results}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-gray-200 hover:border-indigo-500 text-gray-700 hover:text-indigo-600 rounded-xl group"
                  >
                    View Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-white relative overflow-hidden">
        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A proven methodology that ensures quality, efficiency, and client
              satisfaction at every step
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-1 h-full bg-gradient-to-b from-indigo-200 via-purple-200 to-indigo-200 rounded-full"></div>

            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 1 ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 1 ? "pl-12" : "pr-12"}`}
                  >
                    <div
                      className={`glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-xl ${
                        index % 2 === 1 ? "text-right" : ""
                      }`}
                    >
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl font-bold text-xl mb-6 shadow-lg ${
                          index % 2 === 1 ? "ml-auto" : ""
                        }`}
                      >
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed mb-6">
                        {step.description}
                      </p>

                      <div className="space-y-4">
                        <div
                          className={`flex items-center space-x-3 ${
                            index % 2 === 1 ? "justify-end" : ""
                          }`}
                        >
                          <Clock className="w-5 h-5 text-indigo-600" />
                          <span className="text-sm text-gray-600 font-medium">
                            Duration: {step.duration}
                          </span>
                        </div>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-gray-900">
                            Deliverables:
                          </h4>
                          <div
                            className={`flex flex-wrap gap-2 ${
                              index % 2 === 1 ? "justify-end" : ""
                            }`}
                          >
                            {step.deliverables.map((deliverable, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
                              >
                                {deliverable}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="w-6 h-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-700">
              Real results from satisfied clients who&#39;ve experienced our
              craftsmanship
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
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
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

                <div className="text-sm text-indigo-600 font-medium">
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
        className="py-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="block text-white">Ready to Build</span>
            <span className="block bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>

          <p className="text-xl text-indigo-100 mb-12 max-w-3xl mx-auto">
            Let&#39;s turn your ideas into powerful software solutions that
            drive your business forward. Start your journey with CodeCraft
            Studio today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="glass bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-gray-500 text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg font-medium rounded-2xl">
              <Download className="mr-2 w-5 h-5" />
              Download Portfolio
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-indigo-200">Email</div>
              <div className="font-medium text-white">
                hello@codecraft.studio
              </div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-indigo-200">Phone</div>
              <div className="font-medium text-white">+234 807 525 6960</div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm text-indigo-200">Location</div>
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
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Braces className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">CodeCraft</h1>
                  <p className="text-xs text-gray-400">Software Studio</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafting exceptional software solutions that transform
                businesses and drive innovation through technology.
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
                  Frontend Development
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Mobile Applications
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Backend & APIs
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Cloud & DevOps
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Technologies</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">
                  React & Next.js
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Node.js & Python
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  AWS & Docker
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  PostgreSQL & MongoDB
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
                  Our Process
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Case Studies
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CodeCraft Studio. Crafted with ❤️ for Software Excellence.
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

export default CodeCraftStudio;
