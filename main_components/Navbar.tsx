"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { NavProps } from "@/types";
import Image from "next/image";
import React from "react";
import { MenuSquare, X } from "lucide-react";

const Navbar: React.FC<NavProps> = ({ scrollToSection, refs }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="w-full flex flex-wrap justify-between items-center p-4">
      <div className="flex-shrink-0">
        <Image
          className="ml-0 lg:ml-24"
          src="/faruq_logo_main.png"
          alt="faruq logo"
          width={150}
          height={150}
        />
      </div>

      {/* Button for opening the drawer on small screens */}
      <div className="lg:hidden">
        <MenuSquare width={50} height={50} onClick={toggleDrawer} />
      </div>

      {/* Navigation buttons for large screens */}
      <div className="hidden lg:flex items-center justify-end gap-5">
        <Button variant="outline">Home</Button>
        <Button
          onClick={() =>
            scrollToSection && refs?.aboutRef && scrollToSection(refs.aboutRef)
          }
          variant="outline"
        >
          About me
        </Button>
        <Button
          onClick={() =>
            scrollToSection &&
            refs?.servicesRef &&
            scrollToSection(refs?.servicesRef)
          }
          variant="outline"
        >
          My services
        </Button>
        <Button
          onClick={() =>
            scrollToSection &&
            refs?.projectsRef &&
            scrollToSection(refs?.projectsRef)
          }
          variant="outline"
        >
          Projects
        </Button>
        <Button
          onClick={() =>
            scrollToSection &&
            refs?.testimonialsRef &&
            scrollToSection(refs?.testimonialsRef)
          }
          variant="outline"
        >
          Testimonials
        </Button>
        <Button
          onClick={() =>
            scrollToSection && refs?.blogRef && scrollToSection(refs?.blogRef)
          }
          variant="outline"
        >
          Blog
        </Button>
        <Button className="bg-faruq_secondry mr-5">Contact me</Button>
      </div>

      {/* Side drawer for small screens */}
      {drawerOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-4">
          <X onClick={toggleDrawer} className="mb-4" />
          <Button variant="outline" className="m-3">
            Home
          </Button>
          <Button
            className="m-3"
            onClick={() =>
              scrollToSection &&
              refs?.aboutRef &&
              scrollToSection(refs.aboutRef)
            }
            variant="outline"
          >
            About me
          </Button>
          <Button
            className="m-3"
            onClick={() =>
              scrollToSection &&
              refs?.servicesRef &&
              scrollToSection(refs?.servicesRef)
            }
            variant="outline"
          >
            My services
          </Button>
          <Button
            className="m-3"
            onClick={() =>
              scrollToSection &&
              refs?.projectsRef &&
              scrollToSection(refs?.projectsRef)
            }
            variant="outline"
          >
            Projects
          </Button>
          <Button
            className="m-3"
            onClick={() =>
              scrollToSection &&
              refs?.testimonialsRef &&
              scrollToSection(refs?.testimonialsRef)
            }
            variant="outline"
          >
            Testimonials
          </Button>
          <Button
            className="m-3"
            onClick={() =>
              scrollToSection && refs?.blogRef && scrollToSection(refs?.blogRef)
            }
            variant="outline"
          >
            Blog
          </Button>
          <Button className="bg-faruq_secondry m-3">Contact me</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
