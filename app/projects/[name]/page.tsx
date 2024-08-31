import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/main_components";
import { fetchService } from "@/utils";
import Link from "next/link";

const Services = async ({ params }: { params: { name: string } }) => {
  const getService = await fetchService({
    name: decodeURIComponent(params.name),
  });

  return (
    <section className="w-full items-center flex flex-col justify-center">
      <div className="w-full flex flex-wrap justify-between items-center p-4">
        <div className="flex-shrink-0">
          <Image
            className="ml-[25px] lg:ml-10 w-24 h-16 lg:w-auto lg:h-auto"
            src="/faruq_logo_main.png"
            alt="faruq logo"
            width={100}
            height={100}
          />
        </div>
        <div>
          <Link href="/">
            <Button className="bg-faruq_secondry">Home</Button>
          </Link>
        </div>
      </div>
      <header className="flex w-full flex-col pl-10 pr-10 pt-10">
        <h3 className="text-faruq_secondry text-[25px]">Projects</h3>
        <h1 className="text-[40px]">{decodeURIComponent(params.name)}</h1>
        <h4 className="text-[20px]">{getService?.service_slug}</h4>
      </header>
      <div className="flex w-auto flex-col p-10 ml-auto gap-4">
        <p className="text-[17px]">{getService?.service_slug_note}</p>
        <h2 className="font-bold">{getService?.service_title}</h2>
        <p>{getService?.service_title_slug}</p>
        <ul className="list-disc flex flex-col gap-4">
          <li>
            <span className="font-bold">
              {getService?.service_title_note[1][0]}
            </span>
            {getService?.service_title_note[1][1]}
          </li>
          <li>
            <span className="font-bold">
              {getService?.service_title_note[2][0]}
            </span>
            {getService?.service_title_note[2][1]}
          </li>
          <li>
            <span className="font-bold">
              {getService?.service_title_note[3][0]}
            </span>
            {getService?.service_title_note[3][1]}
          </li>
          <li>
            <span className="font-bold">
              {getService?.service_title_note[4][0]}
            </span>
            {getService?.service_title_note[4][1]}
          </li>
          <li>
            <span className="font-bold">
              {getService?.service_title_note[5][0]}
            </span>
            {getService?.service_title_note[5][1]}
          </li>
          <li>
            <span className="font-bold">
              {getService?.service_title_note[6][0]}
            </span>
            {getService?.service_title_note[6][1]}
          </li>
        </ul>

        <h3 className="font-bold">{getService?.service_footer_title}</h3>
        <p>{getService?.service_footer_notes[0]}</p>
        <p>{getService?.service_footer_notes[1]}</p>
      </div>
      <Footer />
    </section>
  );
};

export default Services;
