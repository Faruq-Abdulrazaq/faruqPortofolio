import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NavProps } from "@/types";

const Footer: React.FC<NavProps> = ({ scrollToSection, refs }) => {
  return (
    <section className="flex items-center flex-col">
      <div className="w-full h-[65%] flex justify-around gap-1 flex-col">
        <h1 className="text-[35px]  font-bold ml-16">Get in Touch </h1>
        <div className="w-full h-[95%] flex flex-col justify-around gap-5 lg:flex-row">
          <div className="w-auto lg:w-[50%] h-full flex flex-col justify-center items-center gap-5">
            <div className="w-[90%]  p-2">
              <h3 className="text-[15px] font-bold">
                Let's Collaborate to Transform Your Vision into Reality
              </h3>
              <p className="leading-[1.50rem]">
                Whether you have a specific project in mind or just want to
                discuss how innovative technology can drive your business
                forward, I’m here to help. My expertise in custom software
                development, automation and AI, web and mobile applications, and
                IT consultation can provide the solutions you need to achieve
                your goals.
              </p>
            </div>
            <div className="w-[90%]  p-2">
              <h3 className="text-[15px] font-bold">Why Reach Out?</h3>
              <ul className="flex flex-col gap-1">
                <li>
                  Tailored Solutions: Receive custom software designed
                  specifically to meet your business needs.
                </li>
                <li>
                  {" "}
                  Expert Advice: Benefit from professional IT consultation to
                  navigate the complexities of technology.
                </li>
                <li>
                  {" "}
                  Innovative Approaches: Leverage cutting-edge automation and AI
                  to streamline your operations.
                </li>
                <li>
                  {" "}
                  User-Centric Design: Get web and mobile applications that
                  offer seamless and engaging user experiences.
                </li>
              </ul>
            </div>
            <div className="w-[90%] p-2">
              <h3 className="text-[15px] font-bold">How Can I Help You?</h3>
              <ul className="flex flex-col gap-1">
                <li>
                  Discuss Your Project: Let's talk about your ideas and how we
                  can bring them to life.
                </li>
                <li>
                  {" "}
                  Request a Quote: Get a detailed proposal and quote for your
                  project requirements.
                </li>
                <li>
                  {" "}
                  Schedule a Consultation: Book a session to explore your tech
                  needs and the best solutions.
                </li>
              </ul>
            </div>
            <div className="w-[90%] p-2">
              <h3 className="text-[15px] font-bold">Ready to Start?</h3>
              <p className="leading-[1.50rem]">
                Reach out today and let's begin a journey of innovation and
                growth together. Fill out the form below or contact me directly
                through email or phone.
              </p>
            </div>
          </div>
          <div className="w-auto lg:w-[50%] h-full flex justify-center items-center">
            <Card className="w-[750px]">
              <CardHeader>
                <CardTitle>Contact me</CardTitle>
                <CardDescription>
                  Deploy your new project in one-click.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="first_name">First name</Label>
                      <Input id="first_name" placeholder="First name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="last_name">Last name</Label>
                      <Input id="last_name" placeholder="Last name" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" placeholder="Email address" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="framework">Service type</Label>
                      <Select>
                        <SelectTrigger id="framework">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="Custom_Software_Development">
                            Custom Software Development
                          </SelectItem>
                          <SelectItem value="Automation_and_AI">
                            Automation and AI
                          </SelectItem>
                          <SelectItem value=" Web_and_Mobile_Applications">
                            Web and Mobile Applications
                          </SelectItem>
                          <SelectItem value="Tech_and_IT_consultation">
                            Tech and IT consultation
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button>Submit</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
      <div className="w-full flex-col lg:flex-row  flex justify-around gap-5 border-t-2">
        <div className="w-auto lg:w-[40%] h-full flex justify-between mt-4">
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
                <li>Email me</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="w-auto lg:w-[40%] h-[60%]">
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

export default Footer;
