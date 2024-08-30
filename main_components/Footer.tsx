"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { collection, addDoc } from "firebase/firestore";
import { toast } from "sonner";

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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { db } from "@/utils/Firebase";

const Footer: React.FC<NavProps> = ({ scrollToSection, refs }) => {
  const [isLoading, setIsLoading] = useState("");

  // Subscribe to me
  const subSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    name: z.string().min(2, { message: "Fullname must be more than 2 leters" }),
  });

  const sub_form = useForm<z.infer<typeof subSchema>>({
    resolver: zodResolver(subSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  const handleSub = async (values: z.infer<typeof subSchema>) => {
    setIsLoading("Sub");
    try {
      const response = await fetch("/api/brevo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values.email,
          attributes: {
            FNAME: values.name,
          },
          emailBlacklisted: false,
          smsBlacklisted: false,
          listIds: [21],
          updateEnabled: false,
          smtpBlacklistSender: ["info@faruqabdulrazaq.dev"],
        }),
      });

      if (response.ok) {
        setIsLoading("");
        toast("Contact created successfully");
      }
    } catch (error) {
      setIsLoading("");
      toast(`Error: , ${error}`);
    }
  };

  //Contact me
  const contactSchema = z.object({
    first_name: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    last_name: z.string().min(2, {
      message: "Last name must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Invalid email address" }),
    message: z.string().min(2, {
      message: "Message must be at least 2 characters.",
    }),
    service_type: z.string({ required_error: "Please select a service" }),
  });

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      service_type: "",
    },
  });
  const handleSubmit = async (values: z.infer<typeof contactSchema>) => {
    setIsLoading("Con");

    try {
      const docRef = await addDoc(collection(db, "contacts"), values);
      toast("Contact sent sucessfully");
    } catch (e) {
      toast(`Error: , ${e}`);
    }

    setIsLoading("");
  };

  return (
    <section className="flex items-center flex-col mt-10">
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handleSubmit)} className="">
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="first_name">First name</Label>
                        <FormField
                          control={form.control}
                          name="first_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="First name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="last_name">Last name</Label>
                        <FormField
                          control={form.control}
                          name="last_name"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Last name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="email">Email</Label>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Email address" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="eessage">Message</Label>
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Input placeholder="Message" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <FormField
                          control={form.control}
                          name="service_type"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Service type</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                required
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Custom_Software_Development">
                                    Custom Software Development
                                  </SelectItem>
                                  <SelectItem value="Branding">
                                    Branding
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
                                  <SelectItem value="Others">Others</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    {isLoading === "Con" ? (
                      <Button
                        className="bg-faruq_secondry mt-5 w-36 lg:w-auto"
                        disabled
                      >
                        <span className="loader"></span>
                      </Button>
                    ) : (
                      <Button className="bg-faruq_secondry mt-5">Submit</Button>
                    )}
                  </form>
                </Form>
              </CardContent>
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
              <li
                onClick={() =>
                  scrollToSection &&
                  refs?.aboutRef &&
                  scrollToSection(refs.aboutRef)
                }
                className="cursor-pointer"
              >
                About
              </li>
              <li
                onClick={() =>
                  scrollToSection &&
                  refs?.servicesRef &&
                  scrollToSection(refs?.servicesRef)
                }
                className="cursor-pointer"
              >
                Services
              </li>
              <li
                onClick={() =>
                  scrollToSection &&
                  refs?.projectsRef &&
                  scrollToSection(refs?.projectsRef)
                }
                className="cursor-pointer"
              >
                Projects
              </li>
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
              <Form {...sub_form}>
                <form
                  onSubmit={sub_form.handleSubmit(handleSub)}
                  className="flex flex-col lg:flex-row gap-3 items-start lg:items-center"
                >
                  <FormField
                    control={sub_form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={sub_form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Fullname" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {isLoading === "Sub" ? (
                    <Button
                      className="bg-faruq_primary w-36 lg:w-auto"
                      disabled
                    >
                      <span className="loader"></span>
                    </Button>
                  ) : (
                    <Button className="bg-faruq_primary" type="submit">
                      Subscribe
                    </Button>
                  )}
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <div>&copy;2024 Faruq Abdulrazaq</div>
    </section>
  );
};

export default Footer;
