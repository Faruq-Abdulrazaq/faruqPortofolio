import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  CheckCircle,
  Code,
  Cog,
  ExternalLink,
  Layers,
  Play,
  Sparkles,
  Star,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "StitchTech Solutions",
  icons: {
    icon: [
      {
        url: "/favicons/stitchtech-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicons/stitchtech-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicons/stitchtech-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

const AutomationAI = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Process Automation",
      description:
        "Intelligent workflow automation that eliminates repetitive tasks, reduces errors, and accelerates business processes across all departments.",
      features: [
        "Workflow automation",
        "Task scheduling",
        "Error reduction",
        "Performance monitoring",
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Integration",
      description:
        "Machine learning and AI solutions that provide intelligent insights, predictive analytics, and automated decision-making capabilities.",
      features: [
        "Machine learning models",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision",
      ],
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Intelligence",
      description:
        "Advanced data processing and analytics platforms that transform raw data into actionable business insights and automated reporting.",
      features: [
        "Data processing",
        "Automated reporting",
        "Business intelligence",
        "Real-time analytics",
      ],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Smart Integration",
      description:
        "Seamless integration of AI and automation tools with existing systems, creating unified intelligent ecosystems for your business.",
      features: [
        "System integration",
        "API development",
        "Legacy modernization",
        "Cloud migration",
      ],
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const automationSolutions = [
    {
      title: "Manufacturing",
      description:
        "Smart factory automation with predictive maintenance, quality control, and production optimization",
      icon: "🏭",
      technologies: ["IoT", "Machine Learning", "Computer Vision", "Analytics"],
      results: "40% efficiency increase",
    },
    {
      title: "Finance & Banking",
      description:
        "Automated compliance, fraud detection, risk assessment, and customer service optimization",
      icon: "🏦",
      technologies: ["AI/ML", "NLP", "Risk Models", "Automation"],
      results: "60% faster processing",
    },
    {
      title: "Healthcare",
      description:
        "Medical imaging analysis, patient monitoring, treatment recommendations, and administrative automation",
      icon: "🏥",
      technologies: ["Deep Learning", "Computer Vision", "NLP", "IoT"],
      results: "50% diagnostic accuracy",
    },
    {
      title: "Retail & E-commerce",
      description:
        "Inventory optimization, personalized recommendations, chatbots, and demand forecasting",
      icon: "🛒",
      technologies: [
        "Recommendation AI",
        "Chatbots",
        "Forecasting",
        "Analytics",
      ],
      results: "35% revenue growth",
    },
  ];

  const caseStudies = [
    {
      brand: "Frameworks Studio Pro",
      category: "Manufacturing Automation System",
      challenge:
        "Complex manufacturing processes requiring predictive maintenance and quality control automation",
      solution:
        "Implemented AI-powered manufacturing platform with IoT sensors, computer vision quality control, and predictive maintenance algorithms",
      result: "40% reduction in downtime, 60% improvement in quality control",
      image: "/projects/intelliflow-demo.jpg",
      technologies: ["Python", "TensorFlow", "IoT", "Computer Vision"],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      brand: "SmartFinance AI",
      category: "Financial Process Automation",
      challenge:
        "Manual financial processes causing delays and compliance issues in banking operations",
      solution:
        "Developed comprehensive AI platform for automated compliance, fraud detection, and risk assessment with real-time monitoring",
      result: "70% faster loan processing, 85% reduction in fraud incidents",
      image: "/projects/smartfinance-demo.jpg",
      technologies: ["Python", "Machine Learning", "NLP", "Blockchain"],
      gradient: "from-purple-500 to-indigo-500",
    },
  ];

  const techStack = [
    { name: "Python/TensorFlow", usage: "AI & Machine Learning", icon: "🐍" },
    { name: "OpenAI/Anthropic", usage: "Large Language Models", icon: "🤖" },
    { name: "Computer Vision", usage: "Image & Video Analysis", icon: "👁️" },
    { name: "IoT Integration", usage: "Sensor Data Processing", icon: "📡" },
    {
      name: "Cloud AI Services",
      usage: "Scalable AI Infrastructure",
      icon: "☁️",
    },
    { name: "Automation Tools", usage: "Workflow Orchestration", icon: "⚙️" },
  ];

  const testimonials = [
    {
      name: "Dr. Amanda Foster",
      title: "Operations Director",
      company: "TechFlow Manufacturing",
      rating: 5,
      text: "The AI automation system transformed our production line. Predictive maintenance alone saved us over $2M in the first year by preventing unexpected breakdowns.",
      avatar: "/user.png",
    },
    {
      name: "Carlos Rodriguez",
      title: "CTO",
      company: "FinanceFirst Bank",
      rating: 5,
      text: "Our loan processing time decreased from weeks to hours. The AI-powered risk assessment is incredibly accurate and has significantly reduced our default rates.",
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
                <div className="w-12 h-12 border-4 border-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Image
                    src="/Niches-Logo/FrameWorks-Studio/1/1.png"
                    width={32}
                    height={32}
                    alt="logo"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    Frameworks Studio
                  </h1>
                </div>
              </div>

              <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
              <div className="hidden sm:block text-sm text-gray-600 font-medium">
                Automation & AI Solutions
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="#solutions"
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                Solutions
              </Link>
              <Link
                href="#case-studies"
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                Case Studies
              </Link>
              <Link
                href="#technology"
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                Technology
              </Link>
              <Link
                href="#contact"
                className="text-gray-700 hover:text-cyan-600 transition-colors font-medium"
              >
                Contact
              </Link>
            </div>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-xl shadow-lg">
              Start Project
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-20 text-6xl">🤖</div>
            <div className="absolute top-32 right-32 text-4xl">⚡</div>
            <div className="absolute bottom-32 left-32 text-5xl">🧠</div>
            <div className="absolute bottom-20 right-20 text-6xl">⚙️</div>
            <div className="absolute top-1/2 left-1/4 text-3xl">🔮</div>
            <div className="absolute top-1/3 right-1/3 text-4xl">🚀</div>
          </div>

          {/* Liquid glass overlays */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 pt-20">
          {/* Status Badge */}
          <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-cyan-200/50 shadow-lg mb-12 mt-10 bg-white/50">
            <Sparkles className="w-4 h-4 mr-2 text-cyan-600" />
            <span className="text-sm font-medium text-gray-800">
              Where Intelligence Meets Automation
            </span>
          </div>

          <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 leading-tight text-gray-900">
            <span className="block mb-4">Unleashing the Power</span>
            <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
              of AI
            </span>
            <span className="block text-gray-600 text-4xl lg:text-5xl xl:text-6xl font-light mt-4">
              & Automation
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-700 mb-16 max-w-4xl mx-auto leading-relaxed">
            Transform your business with intelligent automation and AI solutions
            that eliminate manual work, predict outcomes, and optimize
            operations for unprecedented efficiency and growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-white border border-cyan-200/50 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group shadow-lg">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-6 text-lg font-medium rounded-2xl group shadow-lg">
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-10">
            {[
              { number: "80%", label: "Process Automation" },
              { number: "65%", label: "Cost Reduction" },
              { number: "99.5%", label: "AI Accuracy" },
              { number: "24/7", label: "Intelligent Operations" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center glass rounded-2xl p-4 backdrop-blur-xl border border-cyan-200/50 bg-white/30 shadow-lg"
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
          <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-cyan-100/50 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-cyan-200/50 shadow-lg bg-white/50">
                <Code className="w-4 h-4 mr-2 text-cyan-600" />
                <span className="text-sm font-medium text-gray-800">
                  About Frameworks Studio
                </span>
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Where Code Meets</span>
                <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Intelligence
                </span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed">
                At Frameworks Studio, we specialize in creating intelligent
                automation solutions that transform how businesses operate. From
                simple workflow automation to advanced AI implementations, we
                help organizations achieve unprecedented efficiency and
                innovation.
              </p>

              <div className="space-y-6">
                {[
                  "Eliminate repetitive tasks with smart automation",
                  "Predict outcomes with advanced machine learning",
                  "Optimize operations with real-time intelligence",
                  "Scale effortlessly with cloud-native AI solutions",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-medium rounded-2xl group shadow-lg">
                Learn Our Process
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="glass rounded-3xl overflow-hidden backdrop-blur-xl border border-cyan-200/50 shadow-xl card-hover bg-white/30">
                  <div className="p-6 bg-gradient-to-br from-cyan-500 to-blue-600 text-white">
                    <Brain className="w-8 h-8 mb-4" />
                    <h4 className="font-bold text-xl mb-2">Smart AI</h4>
                    <p className="text-sm opacity-90">
                      Machine learning models that learn and adapt
                    </p>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-cyan-200/50 shadow-lg bg-white/50">
                  <h4 className="font-bold text-gray-900 mb-2">
                    AI-First Approach
                  </h4>
                  <p className="text-sm text-gray-700">
                    Deep expertise in artificial intelligence and machine
                    learning.
                  </p>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-cyan-200/50 shadow-lg bg-white/50">
                  <h4 className="font-bold text-gray-900 mb-2">
                    Automation Excellence
                  </h4>
                  <p className="text-sm text-gray-700">
                    Proven track record in enterprise automation and process
                    optimization.
                  </p>
                </div>
                <div className="glass rounded-3xl overflow-hidden backdrop-blur-xl border border-cyan-200/50 shadow-xl card-hover bg-white/30">
                  <div className="p-6 bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
                    <Bot className="w-8 h-8 mb-4" />
                    <h4 className="font-bold text-xl mb-2">Automation Hub</h4>
                    <p className="text-sm opacity-90">
                      Intelligent workflow orchestration and monitoring
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
          <div className="absolute top-40 -right-60 w-96 h-96 bg-gradient-to-bl from-cyan-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-cyan-200/50 shadow-lg mb-8 bg-white/50">
              <Layers className="w-4 h-4 mr-2 text-cyan-600" />
              <span className="text-sm font-medium text-gray-800">
                Our Solutions
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-10">
              <span className="block">Complete AI &</span>
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Automation Suite
              </span>
            </h2>

            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From intelligent process automation to advanced AI integration, we
              provide comprehensive solutions that transform your business
              operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {services.map((service, index) => (
              <div
                key={index}
                className="glass rounded-3xl backdrop-blur-xl border border-cyan-200/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group card-hover bg-white/50"
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
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        <span className="text-sm text-gray-800 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-cyan-200 hover:border-cyan-500 text-gray-800 hover:text-cyan-600 rounded-xl group"
                  >
                    Learn More
                    <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Automation Solutions Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationSolutions.map((solution, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-cyan-200/50 shadow-lg hover:shadow-xl transition-all duration-300 text-center bg-white/50"
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
                <div className="text-sm font-bold text-cyan-600">
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
          <div className="absolute top-20 -left-60 w-96 h-96 bg-gradient-to-br from-cyan-100/30 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8">
              Success Stories
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Real results from businesses we&#39;ve transformed with AI and
              automation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="glass rounded-3xl backdrop-blur-xl border border-cyan-200/50 shadow-xl overflow-hidden card-hover bg-white/50"
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
                  <div className="text-6xl opacity-50">🤖</div>
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
                  <div className="glass rounded-xl p-4 backdrop-blur-xl border border-cyan-200/50 bg-white/50">
                    <h4 className="font-bold text-gray-900 mb-2">Results</h4>
                    <p className="text-cyan-600 font-bold">{study.result}</p>
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
              <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Cutting-Edge AI
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 backdrop-blur-xl border border-cyan-200/50 shadow-lg text-center hover:shadow-xl transition-all duration-300 bg-white/50"
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
              Client Success Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass rounded-3xl p-8 backdrop-blur-xl border border-cyan-200/50 shadow-xl bg-white/50"
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
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
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
        className="py-32 bg-gradient-to-br from-cyan-600 via-blue-600 to-cyan-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-cyan-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24 text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="block text-white">Ready to Automate</span>
            <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Your Future?
            </span>
          </h2>

          <p className="text-xl text-cyan-100 mb-12 max-w-3xl mx-auto">
            Let&#39;s discuss how Frameworks Studio can help you harness the
            power of AI and automation to transform your operations, reduce
            costs, and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button className="glass bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-6 text-lg font-medium rounded-2xl backdrop-blur-xl group">
              Schedule AI Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="bg-white text-cyan-600 hover:bg-cyan-50 px-8 py-6 text-lg font-medium rounded-2xl">
              View AI Solutions
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 bg-white/10">
              <div className="text-2xl mb-2">📧</div>
              <div className="text-sm text-cyan-200">Email</div>
              <div className="font-medium text-white">hello@intelliflow.ai</div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 bg-white/10">
              <div className="text-2xl mb-2">📱</div>
              <div className="text-sm text-cyan-200">Phone</div>
              <div className="font-medium text-white">+234 807 525 6960</div>
            </div>
            <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 bg-white/10">
              <div className="text-2xl mb-2">🌍</div>
              <div className="text-sm text-cyan-200">Location</div>
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
                <div className="w-12 h-12 border-4 border-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Image
                    src="/Niches-Logo/FrameWorks-Studio/1/1.png"
                    width={32}
                    height={32}
                    alt="logo"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    Frameworks Studio
                  </h1>
                  <p className="text-xs text-gray-400">Automation & AI</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Unleashing the power of AI and automation for business
                transformation.
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
                  Process Automation
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  AI Integration
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Data Intelligence
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Smart Integration
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-white">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="hover:text-white transition-colors cursor-pointer">
                  Manufacturing
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Finance & Banking
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Healthcare
                </li>
                <li className="hover:text-white transition-colors cursor-pointer">
                  Retail & E-commerce
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
              © 2024 Frameworks Studio. Crafted with ❤️ for AI Innovation.
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

export default AutomationAI;
