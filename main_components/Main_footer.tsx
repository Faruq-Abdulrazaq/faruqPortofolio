// main_components/Main_footer.tsx
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";

import React from "react";

const Main_footer = () => {
  return (
    <section className="flex flex-col items-center">
      <div className="w-full flex justify-around gap-5 border-t-2">
        <div className="w-[40%] h-full flex justify-between mt-4">
          <div className="m-4 flex flex-col">
            <h1 className="font-bold mb-4">General</h1>
            <ul className="text-faruq_secondry flex flex-col gap-2">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Blogs</li>
              <li className="cursor-pointer">Projects</li>
            </ul>
          </div>
          <div className="m-4 flex flex-col">
            <h1 className="font-bold mb-4">Socials</h1>
            <ul className="text-faruq_secondry flex flex-col gap-2">
              <a href="https://x.com/faruq_developer" target="_blank">
                <li>X</li>
              </a>
              <a
                href="https://www.instagram.com/faruq.developer_/"
                target="_blank"
              >
                <li>Instagram</li>
              </a>
              <a
                href="https://www.linkedin.com/in/faruq-taye-abdulrazaq/"
                target="_blank"
              >
                <li>Linkedin</li>
              </a>
              <a
                href="https://www.tiktok.com/@faruq.developer?lang=en"
                target="_blank"
              >
                <li>Tiktok</li>
              </a>
            </ul>
          </div>
          <div className="m-4 flex flex-col">
            <h1 className="font-bold mb-4">Contact</h1>
            <ul className="text-faruq_secondry flex flex-col gap-2">
              <li>+2348075256960</li>
              <a href="mailto: faruqtayeabdulrazaq@gmail.com">
                <li>faruqtayeabdulrazaq@gmail.com</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="w-[40%] h-[60%]">
          <div className="w-[95%] h-full  flex flex-col gap-5 p-6 border-2 m-4 rounded-xl">
            <div className="flex  items-center">
              {" "}
              <Image
                src="/icons/mail-reception.png"
                alt="subscribe mail"
                width={30}
                height={30}
              />{" "}
              <span> Subscribe to my news letter </span>
            </div>
            <p>
              Stay up to date Get notified when I publish something new, and
              unsubscribe at any time.
            </p>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button className="bg-faruq_primary" type="submit">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div>&copy;2024 Faruq Abdulrazaq</div>
    </section>
  );
};

export default Main_footer;
