import { Button } from "@/components/ui/button";
import { NavProps } from "@/types";
import Image from "next/image";
import React from "react";

const Navbar: React.FC<NavProps> = ({ scrollToSection, refs }) => {
  return (
    <div className="w-full flex flex-wap justify-between  items-center p-4">
      <div className="flex-shrink-0">
        <Image
          className="ml-auto lg:ml-24"
          src="/faruq_logo_main.png"
          alt="faruq logo"
          width={150}
          height={150}
        />
      </div>

      <div className="hidden lg:flex items-center justify-end gap-5">
        <Button variant="outline">Home</Button>
        <Button
          onClick={() => scrollToSection(refs.aboutRef)}
          variant="outline"
        >
          About me
        </Button>
        <Button
          onClick={() => scrollToSection(refs.servicesRef)}
          variant="outline"
        >
          My services
        </Button>
        <Button
          onClick={() => scrollToSection(refs.projectsRef)}
          variant="outline"
        >
          Projects
        </Button>
        <Button
          onClick={() => scrollToSection(refs.testimonialsRef)}
          variant="outline"
        >
          Testimonials
        </Button>
        <Button onClick={() => scrollToSection(refs.blogRef)} variant="outline">
          Blog
        </Button>

        <Button className="bg-faruq_secondry mr-5">Contact me</Button>
      </div>
    </div>
  );
};

export default Navbar;
