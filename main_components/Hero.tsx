import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Icons from "./Icons";

const Hero = () => {
  return (
    <section className="w-full flex flex-col lg:flex-row">
      <div className="lg:w-[50%] w-auto h-full flex justify-center items-center gap-5 flex-col">
        <section className="flex justify-center items-start flex-col w-auto lg:w-[70%]">
          <h2 className="font-bold text-[30px] lg:text-[60px]">
            <span className="text-faruq_third"> Hey ! I am</span> <br />{" "}
            <span className="text-faruq_primary"> Faruq Abdulrazaq </span>
          </h2>
          <span className="text-faruq_secondry lg:text-[30px] text-[20px]">
            A Software Developer
            <br />
            <p className="text-[20px] text-black mt-5">
              Creating Scalable Solutions for Growth and Efficiency
            </p>
          </span>

          <div className="mb-5">
            <p className="leading-[2.40rem]">
              I specialize in developing innovative software solutions that
              drive growth, improve efficiency, and automate processes for
              businesses, corporations, and individuals.
              <br />
              Transforming Ideas into Reality with Excellence and Simplicity
              Empowering Businesses with Forward-Thinking Technology
            </p>
          </div>
          <div className="flex lg:flex-row gap-4 flex-col mb-5">
            <Button className="bg-faruq_secondry">Hire me</Button>
            <div className="flex gap-3 lg:gap-5 items-center justify-between">
              <Image src="/icons/fiverr.png" alt="" width={40} height={50} />
              <Image src="/icons/linkedin.png" alt="" width={40} height={50} />
              <Image src="/icons/github.png" alt="" width={40} height={50} />
              <Image src="/icons/slack.png" alt="" width={40} height={50} />
              <Image src="/icons/gmail.png" alt="" width={40} height={50} />
              <Image src="/icons/upwork.png" alt="" width={40} height={50} />
            </div>
          </div>
        </section>
      </div>
      <div className="w-[50%] flex justify-center items-center">
        <div className="lg:absolute top-32 left-[55%] rounded-full w-[25%] h-[50%]  bg-faruq_secondry  opacity-60"></div>
        <div className="lg:absolute top-64 left-[75%] rounded-full w-[25%] h-[50%]  bg-faruq_third  opacity-60"></div>
        <Image
          src="/faruq.png"
          alt="faruq img"
          width={400}
          height={400}
          className="mb-5 z-10 hidden lg:block"
        />
      </div>
      <Image
        src="/icons/docker.png"
        alt="docker"
        className="absolute top-[10%] left-[70%]"
        width={30}
        height={30}
      />
      <Image
        src="/icons/apple.png"
        alt="apple"
        className="absolute top-[15%] left-[75%]"
        width={30}
        height={30}
      />
      <Image
        src="/icons/aws.png"
        alt="aws"
        className="absolute top-[23%] left-[79%]"
        width={30}
        height={30}
      />

      <Icons />

      <div className="w-16 h-16 border-4 border-faruq_primary rounded-full flex justify-center items-center fixed cursor-pointer top-[85%] left-[80%] lg:left-[95%]">
        <Image src="/chat.png" alt="chat icon" width={40} height={40} />
      </div>
    </section>
  );
};

export default Hero;
