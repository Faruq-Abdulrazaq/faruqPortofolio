import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="w-full flex flex-col justify-center lg:flex-row lg:items-center mt-5">
      <div className="w-auto h-auto lg:h-[550px] lg:w-[50%] mt-0 flex justify-center items-center text-black lg:mt-5">
        <div className="w-auto lg:w-[70%] h-[100%] bg-faruq_primary opacity-60 p-2  flex flex-col gap-5 justify-center items-center rounded-xl shadow-lg">
          <div className="bg-orange-600 w-[90%] p-2 h-[30%] flex justify-center items-center rounded-lg">
            <div className="w-[95%] h-[90%] bg-white p-2  rounded-md flex justify-around">
              <Image
                src="/mission.png"
                alt="misson_statement"
                width={100}
                height={50}
                className="hidden lg:block"
              />
              <div className="ml-2">
                <h2 className="font-bold">Mission</h2>
                <p className="text-[12px] lg:text-[15px]">
                  To create innovative, user-friendly software solutions that
                  prioritize customer needs, uphold excellence, and embrace
                  simplicity and forward-thinking to drive progress.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-orange-600  p-2 w-[90%] h-[30%] flex justify-center items-center rounded-lg">
            <div className="w-[95%] h-[90%] bg-white p-2  rounded-md flex justify-around">
              <Image
                src="/vision.png"
                alt="misson_statement"
                width={100}
                height={50}
                className="hidden lg:block"
              />
              <div className="ml-2">
                <h2 className="font-bold">Vision</h2>
                <p className="text-[12px] lg:text-[15px] ">
                  To be a leading software developer known for delivering
                  exceptional, innovative solutions that simplify complex
                  challenges and empower users to achieve their goals
                </p>
              </div>
            </div>
          </div>
          <div className="bg-orange-600  p-2 w-[90%] h-[30%] flex justify-center items-center rounded-lg">
            <div className="w-[95%] h-[90%] bg-white p-2  rounded-md flex justify-around">
              <Image
                src="/values.png"
                alt="misson_statement"
                width={100}
                height={50}
                className="hidden lg:block"
              />
              <div className="ml-2">
                <h2 className="font-bold">Values</h2>
                <p className="text-[12px] lg:text-[15px] ">
                  My values includes: Simplicity, Customer centric, Excelence,
                  Forward thinking, Open-source collaboration, Continuous
                  learning, Building meaningful solutions, Innovation,
                  Integrity, and Adaptability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[auto] lg:w-[50%] h-auto lg:h-[500px] flex flex-col gap-2 justify-center items-center lg:items-start">
        <div className="flex gap-3 flex-col mt-5  w-auto h-[100%] lg:w-full lg:mt-5">
          <h2 className="text-[30px] lg:text-[50px] font-bold">About me</h2>
          <p className="text-[15px] lg:text-[20px] w-auto lg:max-w-[80%]">
            Highly motivated Software Developer with 5+ years of experience of
            learning and building impact web, mobile, and AI solutions for
            diverse clients, including government institutions. Proven ability
            to optimize business processes through custom software development
            (e.g., ERP, CRM, HRM systems). Possess deep expertise in Full Stack
            Development, Machine Learning, and Web Automation, with a strong
            foundation in algorithms and data structures. Dedicated to
            delivering innovative and salable applications that drive business
            growth.
          </p>
          <Button className="w-auto lg:w-[20%] bg-faruq_primary">
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
