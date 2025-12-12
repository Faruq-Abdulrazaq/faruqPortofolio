// main_components/Footer.tsx
"use client";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ArrowRight,
  Heart,
  Sparkles,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavProps } from "@/types";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { db } from "@/utils/Firebase";
import { useRouter } from "next/navigation";

const Footer: React.FC<NavProps> = ({ scrollToSection, refs }) => {
  const [isLoading, setIsLoading] = useState("");
  const router = useRouter();

  // Subscribe to newsletter schema
  const subSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z.string().min(2, { message: "Name must be more than 2 letters" }),
  });

  const sub_form = useForm<z.infer<typeof subSchema>>({
    resolver: zodResolver(subSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const handleSub = async (values: z.infer<typeof subSchema>) => {
    setIsLoading("Sub");
    try {
      const response = await fetch("/api/brevo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          attributes: {
            FNAME: values.name,
          },
          emailBlacklisted: false,
          smsBlacklisted: false,
          listIds: [21],
          updateEnabled: false,
          smtpBlacklistSender: ["info@faruqabdulrazaq.dev"],
        }),
      });

      if (response.ok) {
        setIsLoading("");
        toast("Successfully subscribed to newsletter!");
        sub_form.reset();
      }
    } catch (error) {
      setIsLoading("");
      toast(`Error: ${error}`);
    }
  };

  // Contact form schema
  const contactSchema = z.object({
    first_name: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    last_name: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters.",
    }),
    service_type: z.string({ required_error: "Please select a service" }),
  });

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      service_type: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof contactSchema>) => {
    setIsLoading("Con");
    try {
      const docRef = await addDoc(collection(db, "contacts"), values);
      toast("Message sent successfully!");
      form.reset();
    } catch (e) {
      toast(`Error: ${e}`);
    }
    setIsLoading("");
  };

  const services = [
    "Custom Software Development",
    "Fashion & E-commerce Solutions",
    "Automation and AI",
    "Web and Mobile Applications",
    "Restaurant & Food Tech",
    "Real Estate Technology",
    "Automotive Solutions",
    "Tech and IT Consultation",
    "Others",
  ];

  const quickLinks = [
    { label: "Home", action: () => window.scrollTo(0, 0) },
    { label: "About", ref: refs?.aboutRef },
    { label: "Services", ref: refs?.servicesRef },
    { label: "Projects", ref: refs?.projectsRef },
    { label: "Testimonials", ref: refs?.testimonialsRef },
  ];

  const socialLinks = [
    { name: "X (Twitter)", url: "https://x.com/faruq_developer", icon: "🐦" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/faruq.developer_/",
      icon: "📸",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/faruq-taye-abdulrazaq/",
      icon: "💼",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@faruq.developer?lang=en",
      icon: "🎵",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-60 w-96 h-96 bg-gradient-to-br from-black/3 via-gray-900/2 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 -right-60 w-[600px] h-[600px] bg-gradient-to-bl from-gray-800/3 via-black/2 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-24">
        {/* Contact Section */}
        <section className="py-32">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 glass rounded-full backdrop-blur-xl border border-white/20 shadow-lg mb-8">
              <Sparkles className="w-4 h-4 mr-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                Let&#39;s Connect
              </span>
            </div>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black mb-8 tracking-tight">
              <span className="block">Ready to Transform</span>
              <span className="block bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent">
                Your Vision?
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
              Let&#39;s collaborate to transform your vision into reality with
              innovative technology solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Left Content */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="glass rounded-3xl p-8 backdrop-blur-xl border border-white/20 shadow-xl">
                  <h3 className="text-2xl font-bold text-black mb-6">
                    Why Work With Me?
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        title: "Tailored Solutions",
                        description:
                          "Custom software designed specifically to meet your business needs and goals.",
                      },
                      {
                        title: "Expert Guidance",
                        description:
                          "Professional IT consultation to navigate technology complexities with confidence.",
                      },
                      {
                        title: "Cutting-Edge Innovation",
                        description:
                          "Leverage latest automation and AI technologies to streamline operations.",
                      },
                      {
                        title: "User-Centric Design",
                        description:
                          "Seamless web and mobile applications with engaging user experiences.",
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="flex space-x-4">
                        <div className="w-2 h-2 bg-black rounded-full mt-3"></div>
                        <div>
                          <h4 className="font-semibold text-black mb-1">
                            {benefit.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-black">
                    Get In Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 glass rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20">
                        <Phone className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <p className="font-medium text-black">
                          +234 807 525 6960
                        </p>
                        <p className="text-sm text-gray-500">
                          Available 9AM - 6PM WAT
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 glass rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20">
                        <Mail className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <p className="font-medium text-black">
                          faruqtayeabdulrazaq@gmail.com
                        </p>
                        <p className="text-sm text-gray-500">
                          Response within 24 hours
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 glass rounded-xl flex items-center justify-center backdrop-blur-xl border border-white/20">
                        <MapPin className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <p className="font-medium text-black">Lagos, Nigeria</p>
                        <p className="text-sm text-gray-500">
                          Available for remote work globally
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div>
              <div className="glass rounded-3xl backdrop-blur-xl border border-white/20 shadow-xl overflow-hidden">
                <CardHeader className="bg-gradient-to-br from-black/90 to-gray-800/90 text-white p-8">
                  <CardTitle className="text-2xl font-bold">
                    Start Your Project
                  </CardTitle>
                  <CardDescription className="text-gray-200">
                    Tell me about your project and let&#39;s bring your ideas to
                    life.
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-8">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(handleSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="first_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>First Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John"
                                  {...field}
                                  className="rounded-xl"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="last_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Last Name</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Doe"
                                  {...field}
                                  className="rounded-xl"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="john@example.com"
                                {...field}
                                className="rounded-xl"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="service_type"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="rounded-xl">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {services.map((service) => (
                                  <SelectItem
                                    key={service}
                                    value={service.replace(/\s+/g, "_")}
                                  >
                                    {service}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details</FormLabel>
                            <FormControl>
                              <textarea
                                {...field}
                                placeholder="Tell me about your project, goals, and requirements..."
                                className="w-full min-h-[120px] px-3 py-2 text-sm rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={isLoading === "Con"}
                        className="w-full bg-black hover:bg-gray-800 text-white py-6 text-lg rounded-xl font-medium group transition-all duration-300"
                      >
                        {isLoading === "Con" ? (
                          <div className="flex items-center justify-center">
                            <div className="loader mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <>
                            <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Links & Newsletter */}
        <section className="border-t border-gray-200 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-black mb-6">Quick Links</h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      link.ref ? scrollToSection?.(link.ref) : link.action?.()
                    }
                    className="block text-gray-600 hover:text-black transition-colors duration-200 font-medium"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-black mb-6">
                Connect With Me
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors duration-200 font-medium"
                  >
                    <span className="text-lg">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <div className="glass rounded-2xl p-6 backdrop-blur-xl border border-white/20 shadow-lg">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-gray-700 mr-3" />
                  <h4 className="text-lg font-bold text-black">Stay Updated</h4>
                </div>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Get notified about latest tech insights, project updates, and
                  industry trends.
                </p>

                <Form {...sub_form}>
                  <form
                    onSubmit={sub_form.handleSubmit(handleSub)}
                    className="space-y-4"
                  >
                    <FormField
                      control={sub_form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="rounded-xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={sub_form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="your@email.com"
                              {...field}
                              className="rounded-xl"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      disabled={isLoading === "Sub"}
                      className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-xl font-medium group transition-all duration-300"
                    >
                      {isLoading === "Sub" ? (
                        <div className="flex items-center justify-center">
                          <div className="loader mr-2"></div>
                          Subscribing...
                        </div>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Footer */}
        <section className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <p className="text-gray-600">
                © 2024 Faruq Abdulrazaq. Crafted with
              </p>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <p className="text-gray-600">in Lagos, Nigeria</p>
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <a
                href="#"
                className="hover:text-black transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-black transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-black transition-colors duration-200"
              >
                Sitemap
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
