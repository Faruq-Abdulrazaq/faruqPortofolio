import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full mt-10 flex flex-col justify-center items-center">
      <div className="w-[90%] flex flex-col justify-center items-center m-5">
        <p className="text-left lg:text-center font-bold text-[25px]">
          Discover how I turn ideas into reality through my diverse range of
          software projects.
        </p>
        <div className=" w-full flex flex-wrap flex-col lg:flex-row  gap-7 justify-center mt-5">
          <div className="lg:w-[30%] border-2  w-auto h-[250px] rounded-lg p-3 flex flex-col justify-center gap-3">
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-gray-950 rounded-lg">
                <Image
                  src="/projects/piscium_labs_logo.png"
                  alt="piscium logo"
                  width={35}
                  height={10}
                />
              </div>

              <span>AI compainion app</span>
              <ChevronRight />
            </div>
            <h1 className="font-bold">Piscium Labs</h1>
            <p>
              A web and mobile application that is designed to be used as a
              personal compainion app. Includes an AI chatbot with a
              customizable 3d Avatar.
            </p>
          </div>
          <div className="lg:w-[30%] border-2 w-auto h-[250px]  rounded-lg p-3 flex flex-col justify-center gap-3">
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-faruq_primary w-12 h-12 rounded-lg">
                <Image
                  src="/projects/Bluespace_logo.png"
                  alt="Bluespace logo"
                  width={50}
                  height={20}
                />
              </div>

              <span>E-commerce & ERP application</span>
              <ChevronRight />
            </div>
            <h1 className="font-bold">Bluespace technologies</h1>
            <p>
              A robust ERP system what includes an E-commerce platform. Captures
              sales, inventory managment, store/warehouse management, customer
              management and so much more.
            </p>
          </div>
          <div className="lg:w-[30%] border-2 w-auto h-[250px] rounded-lg p-3 flex flex-col justify-center gap-3">
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-faruq_secondry rounded-lg">
                <Image
                  src="/projects/Scents_logo.png"
                  alt="scents_logo"
                  width={35}
                  height={10}
                />
              </div>

              <span>Scents E-commerce store</span>
              <ChevronRight />
            </div>
            <h1 className="font-bold">Scents By Doyin</h1>
            <p>
              An Instagram inpirsation e-commerce build. This solution is an
              e-commerce solution for small business.
            </p>
          </div>
          <div className="lg:w-[30%] border-2 w-auto h-[250px] rounded-lg p-3 flex flex-col justify-center gap-3">
            <div className="flex gap-2 items-center">
              <div className="p-2 rounded-lg">
                <Image
                  src="/projects/ravs_logo.png"
                  alt="ravs logo"
                  width={50}
                  height={20}
                />
              </div>

              <span>Address verification app</span>
              <ChevronRight />
            </div>
            <h1 className="font-bold">Know you community technology</h1>
            <p>
              Recidency address verification system. A concept to verify
              recidential address and a prove of address certificate.
            </p>
          </div>
          <div className="lg:w-[30%] border-2 w-auto h-[250px] rounded-lg p-3 flex flex-col justify-center gap-3">
            <div className="flex gap-2 items-center">
              <div className="p-2  rounded-lg">
                <Image
                  src="/projects/Zahyor_logo.png"
                  alt="Zahyor logo"
                  width={40}
                  height={15}
                />
              </div>

              <span>Food order app</span>
              <ChevronRight />
            </div>
            <h1 className="font-bold">Zahyor's Kitchen</h1>
            <p>
              An online food service solution that captures sales, customer
              managment, Kitchen management and so much more.
            </p>
          </div>
          <div className="lg:w-[30%] border-2 w-auto h-[250px] rounded-lg p-3 flex flex-col justify-center gap-3">
            <div className="flex gap-2 items-center">
              <div className="p-2 bg-white rounded-lg">
                <Image
                  src="/projects/cars_ng.png"
                  alt="car_ng logo"
                  width={30}
                  height={10}
                />
              </div>

              <span>Car sales/rental E-commerce app/ERP</span>
              <ChevronRight />
            </div>
            <h1 className="font-bold">CARS NG</h1>
            <p>
              Another ERP solution that is targted specifically for car
              rental/sales services. This solution has an e-commerce solution
              built on top of an store managment solution.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[85%] flex justify-end gap-2 text-faruq_secondry cursor-pointer">
        <h2>View more projects</h2>
        <ChevronRight />
      </div>
    </section>
  );
};

export default Projects;
