"use client";
import { useState } from "react";
import { MenuSquare, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/utils/Firebase";

const Projects = ({ params }: { params: { name: string } }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const getData = async () => {
    const docRef = doc(db, "services", decodeURIComponent(params.name));
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such do");
    }
  };
  getData();
  return (
    <section>
      <div className="w-full flex flex-wrap justify-between items-center p-4">
        <div className="flex-shrink-0">
          <Image
            className="ml-[-10px] lg:ml-32 w-24 h-16 lg:w-auto lg:h-auto"
            src="/faruq_logo_main.png"
            alt="faruq logo"
            width={100}
            height={100}
          />
        </div>

        {/* Button for opening the drawer on small screens */}
        <div className="lg:hidden">
          <MenuSquare width={50} height={50} onClick={toggleDrawer} />
        </div>

        {/* Navigation buttons for large screens */}
        <div className="hidden lg:flex items-center justify-end gap-5">
          <Button variant="outline">Home</Button>

          <Button className="bg-faruq_secondry mr-5">Contact me</Button>
        </div>

        {/* Side drawer for small screens */}
        {drawerOpen && (
          <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 flex flex-col p-4">
            <X onClick={toggleDrawer} className="mb-4" />
            <Button variant="outline" className="m-3">
              Home
            </Button>

            <Button className="bg-faruq_secondry m-3">Contact me</Button>
          </div>
        )}
      </div>
      <header className="flex flex-col p-10 ml-auto lg:ml-24">
        <h3 className="text-faruq_secondry text-[25px]">Projects</h3>
        <h1 className="text-[40px]">{decodeURIComponent(params.name)}</h1>
        <h4 className="text-[20px]">News, Updates and mor</h4>
      </header>
    </section>
  );
};

export default Projects;
