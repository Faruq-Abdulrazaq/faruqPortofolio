"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import dev_byte from "../public/faruq.jpg";
import design from "../public/design.png";
import code from "../public/code.png";
import consult from "../public/consulting.png";
import web1 from "../public/web1.jpg";
import web2 from "../public/web2.png";
import web3 from "../public/web3.jpg";
import web4 from "../public/web4.jpg";
import web5 from "../public/web5.png";
import web6 from "../public/web6.jpg";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="px-10 md:px-20 lg:px-40 dark:bg-gray-900 light:bg-gray-900">
        <section className=" min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className=" text-xl font-burtons dark:text-white">dev_byte</h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl dark:text-white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  target="true"
                  href="https://firebasestorage.googleapis.com/v0/b/faruqportofolio-4414c.appspot.com/o/FARUQ%20TAYE%20ABDULRAZAQ%20_%20SOFTWARE%20ENGINEER.pdf?alt=media&token=ba950cdf-fedd-42c4-aed0-ba2560f5b22b"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font- md:text-6xl">
              Faruq Taye Abdulrazaq
            </h2>
            <h3 className=" text-2xl py-2 md:text-3xl dark:text-white">
              Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Passionate with a mission to redefine the digital landscape. With
              expertise spanning full-stack web development, artificial
              intelligence, and design, I&apos;m on a relentless quest to shape
              the future.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.instagram.com/_devbyte_/" target="true">
              <AiFillInstagram />
            </a>
            <a href="www.linkedin.com/in/faruq-taye-abdulrazaq" target="true">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/Faruq-Abdulrazaq" target="true">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96 mb-5">
            <Image src={dev_byte} alt="Faruq" layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200 mx-auto mt-3">
              Services I offer
            </h3>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              🌐 Full-Stack Wizardry: As a full-stack web developer, I have the
              power to bring ideas to life from concept to deployment. Crafting
              seamless and immersive web experiences is my forte, ensuring that
              user interfaces are not just functional but delightful
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              🤖 AI Enthusiast: I have a deep fascination for artificial
              intelligence and its transformative potential. From machine
              learning to natural language processing, I&apos;m at the forefront
              of harnessing AI to solve complex problems and drive innovation.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              🎨 Design Alchemist: A blend of aesthetics and functionality is
              the essence of great design. With a background in UI/UX and brand
              design, I infuse every project with a touch of elegance, creating
              digital experiences that leave a lasting impression
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              📱 Mobile Maestro: In a world gone mobile, I specialize in
              creating cutting-edge mobile applications that users love. My apps
              are not just functional; they&apos;re intuitive, engaging, and
              tailored to meet the needs of a mobile-first generation.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              🌟 Elevating Possibilities: Beyond coding and design, I&apos;m
              driven by the belief that technology can elevate possibilities. I
              collaborate, innovate, and push boundaries to make a positive
              impact on the world. Join me on this journey to explore the
              limitless horizons of technology and design. Let&apos;s shape the
              future together, one line of code and one pixel at a time. I offer
              from a wide range of services, including brand design, programming
              and teaching.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={design}
                alt="design"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                Beatifull Design
              </h3>
              <p className="py-2 dark:text-gray-200">
                Designing beautiful and functional solutions that meet your
                requirements, based on sound design principles.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use </h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Figma</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Canva</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">
                Illustrator
              </p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={code}
                alt="design"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                Software Architecture & Testing
              </h3>
              <p className="py-2 dark:text-gray-200">
                Creating elegant software architectures and tests that are
                effective, efficient, and maintainable, following core software
                architecture and testing principles.
              </p>
              <h4 className="py-4 text-teal-600">Design Tools I use </h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">
                UML (Unified Modeling Language)
              </p>
              <p className="text-gray-800 py-1  dark:text-gray-200">Selenium</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Unittest</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image
                src={consult}
                alt="design"
                width={100}
                height={100}
                className="mx-auto"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-gray-200">
                Innovative Solutions
              </h3>
              <p className="py-2 dark:text-gray-200">
                Creating innovative software solutions that are tailored to your
                needs, following core software engineering principles.
              </p>
              <h4 className="py-4 text-teal-600 ">
                Here are programming languages i am proficient in{" "}
              </h4>
              <p className="text-gray-800 py-1 dark:text-gray-200">Python</p>
              <p className="text-gray-800 py-1 dark:text-gray-200">
                Javascript
              </p>
              <p className="text-gray-800 py-1 dark:text-gray-200">Java</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basic-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover"
                width={700}
                height={1000}
                layout="responsive"
              />
            </div>

            <div className="basic-1/3 flex">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>

            <div className="basic-1/3 flex">
              <Image
                src={web3}
                alt="web3"
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>

            <div className="basic-1/3 flex">
              <Image
                src={web4}
                alt="web4"
                className="rounded-lg object-cover"
                width={100}
                height={100}
                layout="responsive"
              />
            </div>

            <div className="basic-1/3 flex">
              <Image
                src={web5}
                alt="web5"
                width={100}
                height={100}
                className="rounded-lg object-cover"
                layout="responsive"
              />
            </div>

            <div className="basic-1/3 flex">
              <Image
                src={web6}
                alt="web5"
                width={100}
                height={100}
                className="rounded-lg object-cover"
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
