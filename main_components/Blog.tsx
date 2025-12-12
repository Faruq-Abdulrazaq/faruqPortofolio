// File: main_components/Blog.tsx
import React from "react";
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

const Blog = () => {
  const blogPosts = [
    {
      title: "Building Scalable E-commerce Solutions for Fashion Brands",
      excerpt:
        "Discover how modern fashion businesses are leveraging technology to create seamless shopping experiences and drive growth through innovative e-commerce platforms.",
      category: "Fashion Tech",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      tags: ["E-commerce", "Fashion", "Technology"],
      gradient: "from-purple-600/90 to-pink-600/90",
    },
    {
      title: "The Future of AI in Restaurant Management",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing restaurant operations, from automated ordering systems to predictive analytics for inventory management.",
      category: "AI & Automation",
      readTime: "7 min read",
      date: "Dec 12, 2024",
      tags: ["AI", "Restaurant", "Automation"],
      gradient: "from-blue-600/90 to-indigo-600/90",
    },
    {
      title: "Microservices Architecture: A Complete Guide",
      excerpt:
        "Learn how to design and implement microservices architecture for modern applications, including best practices and common pitfalls to avoid.",
      category: "Software Engineering",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      tags: ["Architecture", "Backend", "Scalability"],
      gradient: "from-green-600/90 to-emerald-600/90",
    },
    {
      title: "Real Estate Tech: Digital Transformation Trends",
      excerpt:
        "How technology is reshaping the real estate industry with virtual tours, AI-powered valuations, and automated property management systems.",
      category: "PropTech",
      readTime: "6 min read",
      date: "Dec 8, 2024",
      tags: ["Real Estate", "PropTech", "Innovation"],
      gradient: "from-orange-600/90 to-red-600/90",
    },
    {
      title: "Building Performance-First Web Applications",
      excerpt:
        "Essential techniques for creating lightning-fast web applications that provide exceptional user experiences across all devices and network conditions.",
      category: "Web Development",
      readTime: "8 min read",
      date: "Dec 5, 2024",
      tags: ["Performance", "Web Dev", "UX"],
      gradient: "from-gray-700/90 to-gray-900/90",
    },
    {
      title: "The Rise of No-Code Solutions in Enterprise",
      excerpt:
        "Examining how no-code and low-code platforms are enabling businesses to rapidly develop and deploy solutions without traditional programming.",
      category: "Enterprise Tech",
      readTime: "4 min read",
      date: "Dec 3, 2024",
      tags: ["No-Code", "Enterprise", "Innovation"],
      gradient: "from-teal-600/90 to-cyan-600/90",
    },
  ];

  return (
    <section className="relative w-full py-32 overflow-hidden">
      {/* Background with liquid glass effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>

      {/* Liquid glass background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-60 w-96 h-96 bg-gradient-to-br from-black/3 via-gray-900/2 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -right-60 w-[600px] h-[600px] bg-gradient-to-bl from-gray-800/3 via-black/2 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-8">
            <Sparkles className="w-4 h-4 mr-2 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Tech Insights & Knowledge
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
            <span className="block">Latest Insights</span>
            <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
              From the Tech World
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            Sharing insights and knowledge about the world of technology,
            software engineering, and digital innovation.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 mb-20">
          {blogPosts.map((post, index) => (
            <article key={index} className="group cursor-pointer">
              <div className="glass rounded-3xl backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover h-full">
                {/* Header with gradient background */}
                <div
                  className={`bg-gradient-to-br ${post.gradient} p-8 relative overflow-hidden`}
                >
                  {/* Background decoration */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/5 translate-y-12 -translate-x-12"></div>
                  </div>

                  <div className="relative z-10 text-white">
                    {/* Category Badge */}
                    <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                      {post.category}
                    </div>

                    {/* Meta Information */}
                    <div className="flex items-center space-x-4 text-sm opacity-90 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold leading-tight">
                      {post.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        #{tag.toLowerCase()}
                      </span>
                    ))}
                  </div>

                  {/* Read More CTA */}
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center text-black font-medium group-hover:translate-x-1 transition-transform duration-300">
                      <span className="mr-2">Read Article</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-black transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-block glass rounded-2xl p-1 backdrop-blur-xl border border-white/20 shadow-lg">
            <Link
              href="/blogs"
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-all duration-300 group"
            >
              <span className="mr-2">View All Articles</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
