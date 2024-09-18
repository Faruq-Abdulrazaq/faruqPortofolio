import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full mt-20  flex flex-col justify-center items-center">
      <div className="w-[87%] h-full flex flex-col justify-center items-center m-5">
        <h1 className="text-left lg:text-center font-bold text-[25px]">
          Few words from pleased clients showcasing their experience
        </h1>
        {/* <div className="w-full h-[10%] flex justify-end items-center">
          <div className="mr-5 flex gap-3">
            <ChevronLeftCircle size={40} />
            <ChevronRightCircle size={40} />
          </div>
        </div> */}
        <div className="w-full h-[90%] flex flex-col gap-10 m-5 justify-center items-center lg:flex-row">
          <div className="w-auto lg:w-[20%] min-h-[350px]  h-[90%] p-3 bg-gray-100 flex flex-col gap-3 items-left justify-start rounded-md">
            <div className="flex flex-col gap-4 ">
              <Image
                src="/user.png"
                alt="user image"
                width={50}
                height={50}
                className="rounded-lg"
              />

              <h2 className="font-bold">Doyin</h2>
              <h3 className="text-faruq_secondry">Scents By Doyin</h3>
              <div className="flex gap-2 items-end">
                <Image
                  src="/star.png"
                  alt="star image"
                  width={20}
                  height={15}
                  className="rounded-lg"
                />
                <span className="text-[15px]">5</span>
              </div>
            </div>
            <p>
              Faruq's talent and dedication are truly impressive. His work
              exceeded my expectations!
            </p>
          </div>
          <div className="w-auto min-h-[350px] lg:w-[20%] h-[90%] p-3 bg-gray-100 flex flex-col gap-3 items-left justify-start rounded-md">
            <div className="flex flex-col gap-4 ">
              <Image
                src="/Edwin.png"
                alt="user image"
                width={50}
                height={50}
                className="rounded-lg"
              />

              <h2 className="font-bold">Edwin .M</h2>
              <h3 className="text-faruq_secondry">Beyound miles</h3>
              <div className="flex gap-2 items-end">
                <Image
                  src="/star.png"
                  alt="star image"
                  width={20}
                  height={15}
                  className="rounded-lg"
                />
                <span className="text-[15px]">4.5</span>
              </div>
            </div>
            <p>
              Faruq was timely on the delivery of the project with various.I had
              a wonderful experience working with Faruq and would consider him
              for another project.
            </p>
          </div>
          <div className="w-auto lg:w-[20%] min-h-[350px] h-[90%] p-3 bg-gray-100 flex flex-col gap-3 items-left justify-start rounded-md">
            <div className="flex flex-col gap-4 ">
              <Image
                src="/user.png"
                alt="user image"
                width={50}
                height={50}
                className="rounded-lg"
              />

              <h2 className="font-bold">Nikolas</h2>
              <h3 className="text-faruq_secondry">Bluespace technologies</h3>
              <div className="flex gap-2 items-end">
                <Image
                  src="/star.png"
                  alt="star image"
                  width={20}
                  height={15}
                  className="rounded-lg"
                />
                <span className="text-[15px]">4.5</span>
              </div>
            </div>
            <p>
              Faruq is brilliant! Delivered exactly what I needed, on time, and
              with great attention to detail. Highly recommend his services!
            </p>
          </div>
          <div className="w-auto lg:w-[20%] min-h-[350px] h-[90%] p-3 bg-gray-100 flex flex-col gap-3 items-left justify-start rounded-md">
            <div className="flex flex-col gap-4 ">
              <Image
                src="/Segun.jpg"
                alt="user image"
                width={50}
                height={50}
                className="rounded-lg"
              />

              <h2 className="font-bold">Segun .B</h2>
              <h3 className="text-faruq_secondry">RAVS</h3>
              <div className="flex gap-2 items-end">
                <Image
                  src="/star.png"
                  alt="star image"
                  width={20}
                  height={15}
                  className="rounded-lg"
                />
                <span className="text-[15px]">4.5</span>
              </div>
            </div>
            <p>
              Faruq is exceptional! He understood my needs perfectly and
              delivered outstanding results quickly!
            </p>
          </div>

          <div className="w-auto lg:w-[20%] min-h-[350px]  h-[90%] p-3 bg-gray-100 flex flex-col gap-3 items-left justify-start rounded-md">
            <div className="flex flex-col gap-4 ">
              <Image
                src="/user.png"
                alt="user image"
                width={50}
                height={50}
                className="rounded-lg"
              />

              <h2 className="font-bold">Kayode Samson</h2>
              <h3 className="text-faruq_secondry">Beyound miles</h3>
              <div className="flex gap-2 items-end">
                <Image
                  src="/star.png"
                  alt="star image"
                  width={20}
                  height={15}
                  className="rounded-lg"
                />
                <span className="text-[15px]">5</span>
              </div>
            </div>
            <p>
              Absolutely impressed by Faruq's expertise and professionalism. He
              made everything seamless!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
