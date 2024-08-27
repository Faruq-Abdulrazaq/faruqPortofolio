import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="w-full mt-20  flex flex-col justify-center items-center">
      <h2 className="text-left lg:text-center font-bold text-[25px]">
        Few words from pleased clients showcasing their experience
      </h2>
      <div className="w-[87%] h-full flex flex-col justify-center items-center m-5">
        {/* <div className="w-full h-[10%] flex justify-end items-center">
          <div className="mr-5 flex gap-3">
            <ChevronLeftCircle size={40} />
            <ChevronRightCircle size={40} />
          </div>
        </div> */}
        <div className="w-full h-[90%] flex flex-col gap-10 m-5 justify-center items-center lg:flex-row">
          <div className="w-auto lg:w-[20%] h-[90%] p-3 bg-gray-100 flex flex-col gap-3 items-left justify-start rounded-md">
            <div className="flex flex-col gap-5 ">
              <Image
                src="/faruq.png"
                alt="user image"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <h2 className="font-bold">Faruq Abdulrazaq</h2>
              <h3 className="text-faruq_secondry">Bluespace technologies</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eius consectetur dolore optio odio pariatur tempore atque, ducimus
              omnis suscipit sunt amet nesciunt cumque dignissimos debitis quia
              aspernatur laborum nihil!
            </p>
          </div>
          <div className="w-auto lg:w-[20%] h-[90%] p-3 bg-gray-100 flex flex-col gap-3 items-left justify-start rounded-md">
            <div className="flex flex-col gap-5 ">
              <Image
                src="/faruq.png"
                alt="user image"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <h2 className="font-bold">Faruq Abdulrazaq</h2>
              <h3 className="text-faruq_secondry">Bluespace technologies</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eius consectetur dolore optio odio pariatur tempore atque, ducimus
              omnis suscipit sunt amet nesciunt cumque dignissimos debitis quia
              aspernatur laborum nihil!
            </p>
          </div>
          <div className="w-auto lg:w-[20%] h-[90%] p-3 bg-gray-100 flex flex-col gap-3 items-left justify-start rounded-md">
            <div className="flex flex-col gap-5 ">
              <Image
                src="/faruq.png"
                alt="user image"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <h2 className="font-bold">Faruq Abdulrazaq</h2>
              <h3 className="text-faruq_secondry">Bluespace technologies</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eius consectetur dolore optio odio pariatur tempore atque, ducimus
              omnis suscipit sunt amet nesciunt cumque dignissimos debitis quia
              aspernatur laborum nihil!
            </p>
          </div>
          <div className="w-auto lg:w-[20%] h-[90%] p-3 bg-gray-100 flex flex-col gap-3 items-left justify-start rounded-md">
            <div className="flex flex-col gap-5 ">
              <Image
                src="/faruq.png"
                alt="user image"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <h2 className="font-bold">Faruq Abdulrazaq</h2>
              <h3 className="text-faruq_secondry">Bluespace technologies</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eius consectetur dolore optio odio pariatur tempore atque, ducimus
              omnis suscipit sunt amet nesciunt cumque dignissimos debitis quia
              aspernatur laborum nihil!
            </p>
          </div>
          <div className="w-auto lg:w-[20%] h-[90%] p-3 bg-gray-100 flex flex-col gap-3 items-left justify-start rounded-md">
            <div className="flex flex-col gap-5 ">
              <Image
                src="/faruq.png"
                alt="user image"
                width={50}
                height={50}
                className="rounded-lg"
              />
              <h2 className="font-bold">Faruq Abdulrazaq</h2>
              <h3 className="text-faruq_secondry">Bluespace technologies</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              eius consectetur dolore optio odio pariatur tempore atque, ducimus
              omnis suscipit sunt amet nesciunt cumque dignissimos debitis quia
              aspernatur laborum nihil!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
