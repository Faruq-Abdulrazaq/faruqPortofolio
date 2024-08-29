import Image from "next/image";
import React from "react";
import custom_software from "../public/custom-software-development.png";
import automation from "../public/automation-and-AI.png";
import web_mobile from "../public/web-mobile-applications.png";
import Tech_and_IT from "../public/Tech-and-IT-consultation.png";
import brand from "../public/brand.png";

const Services = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-6">
      <h1 className="mt-10 font-bold text-[25px] text-left lg:text-center w-[350px] lg:w-[1000px]">
        Let's build a digital future together. Explore my range of software
        development services.
      </h1>
      <div className="w-auto lg:w-[90%]">
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center flex-wrap">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 w-auto lg:w-[30%]">
            <Image
              src={custom_software}
              alt="design"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
              Custom Software Development
            </h3>
            <p className="py-2 dark:text-gray-200">
              Tailor-made software solutions designed to meet the unique needs
              of your business. From initial concept to deployment, ensuring
              your software is scalable, secure, and optimized for performance,
              helping you stay ahead of the competition.
            </p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 w-auto lg:w-[30%]">
            <Image
              src={automation}
              alt="design"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
              Automation and AI
            </h3>
            <p className="py-2 dark:text-gray-200">
              Implementing intelligent automation solutions powered by
              artificial intelligence to streamline operations, reduce costs,
              and enhance productivity. My AI-driven systems can handle
              repetitive tasks, make data-driven decisions, and provide insights
              to propel your business forward.
            </p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10 w-auto lg:w-[30%]">
            <Image
              src={brand}
              alt="design"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
              Elevate Your Brand Identity and Presence
            </h3>
            <p className="py-2 dark:text-gray-200">
              Elevating your brand identity and presence through strategic
              design and consistent messaging. I craft impactful visuals,
              develop cohesive brand strategies, and ensure your brand stands
              out across all platforms. Let’s create a brand that resonates and
              drives growth.
            </p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10  w-auto lg:w-[30%]">
            <Image
              src={web_mobile}
              alt="design"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
              Web and Mobile Applications
            </h3>
            <p className="py-2 dark:text-gray-200">
              Develop user-friendly and responsive web and mobile applications
              that deliver seamless experiences across all devices. Whether you
              need a robust e-commerce platform, a dynamic web portal, or a
              cutting-edge mobile app, I’ve got you covered.
            </p>
          </div>

          <div className="text-center shadow-lg p-10 rounded-xl my-10  w-auto lg:w-[30%]">
            <Image
              src={Tech_and_IT}
              alt="design"
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
              Tech and IT consultation
            </h3>
            <p className="py-2 dark:text-gray-200">
              Expert IT consultation services to guide you through the
              complexities of technology adoption and digital transformation. We
              provide strategic advice, risk management, and implementation
              support to help you leverage technology for maximum impact and
              efficiency.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
