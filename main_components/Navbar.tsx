// File: main_components/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { NavProps } from "@/types";
import Image from "next/image";
import { MenuSquare, X } from "lucide-react";

const Navbar: React.FC<NavProps> = ({ scrollToSection, refs }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { label: "Home", action: () => window.scrollTo(0, 0) },
    { label: "About", ref: refs?.aboutRef },
    { label: "Services", ref: refs?.servicesRef },
    { label: "Projects", ref: refs?.projectsRef },
    { label: "Testimonials", ref: refs?.testimonialsRef },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-full mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 transform hover:scale-105 transition-transform duration-200">
            <Image
              className="w-16 h-8 lg:w-18 lg:h-12"
              src="/faruq_logo_main.png"
              alt="Faruq Abdulrazaq Logo"
              width={80}
              height={54}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Button
                key={index}
                onClick={() =>
                  item.ref ? scrollToSection?.(item.ref) : item.action?.()
                }
                variant="ghost"
                className="text-gray-700 hover:text-black hover:bg-gray-100/50 font-medium px-4 py-2 rounded-lg transition-all duration-200"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => scrollToSection?.(refs?.footerRef!)}
              className="ml-4 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contact Me
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDrawer}
              className="text-gray-700 hover:text-black"
            >
              <MenuSquare className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {drawerOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={toggleDrawer}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-6 border-b">
                <h3 className="text-lg font-semibold">Menu</h3>
                <Button variant="ghost" size="icon" onClick={toggleDrawer}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex-1 py-6">
                {navItems.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => {
                      item.ref ? scrollToSection?.(item.ref) : item.action?.();
                      toggleDrawer();
                    }}
                    variant="ghost"
                    className="w-full justify-start px-6 py-4 text-left text-gray-700 hover:text-black hover:bg-gray-50"
                  >
                    {item.label}
                  </Button>
                ))}
                <div className="px-6 mt-6">
                  <Button
                    onClick={() => {
                      scrollToSection?.(refs?.footerRef!);
                      toggleDrawer();
                    }}
                    className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg font-medium"
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
