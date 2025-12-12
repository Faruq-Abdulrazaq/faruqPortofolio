// app/blogs/page.tsx
"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ArrowBigRightDashIcon } from "lucide-react";
import Link from "next/link";
import { Footer, Main_footer } from "@/main_components";

const Blogs = () => {
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="w-full">
      <div className="w-full flex flex-wap justify-between  items-center p-4">
        <div className="flex-shrink-0">
          <Image
            className="ml-auto lg:ml-20"
            src="/faruq_logo_main.png"
            alt="faruq logo"
            width={150}
            height={150}
          />
        </div>
        <div className="hidden lg:flex items-center justify-end gap-5">
          <Button variant="outline">Home</Button>
          <Button className="bg-faruq_secondry mr-5">Contact me</Button>
        </div>
      </div>
      <header className="flex flex-col gap-3 p-10 ml-auto lg:ml-24">
        <h3 className="text-faruq_secondry text-[25px]">Blogs</h3>
        <h1 className="text-[40px]">News, Updates and more</h1>
        <h4 className="text-[20px]">Stay up to date with tech</h4>
      </header>
      <section className="flex justify-center flex-col">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex lg:ml-28 ml-auto p-4 gap-3"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Search blog" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <div className="m-20 ml-32 flex flex-wrap gap-12">
          <div className="border w-96 h-[650px] flex flex-col gap-2">
            <Image
              src="/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
              alt="blog_image"
              width={400}
              height={150}
            />
            <div className="m-5 flex gap-3 flex-col">
              <p className="text-[15px] text-faruq_secondry">20 minus ago</p>
              <h2 className="font-bold text-[20px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, aliquid hic quisquam fuga, sit voluptates deserunt est
              </h2>
              <h2 className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, aliquid hic quisquam fuga, sit voluptates deserunt est
                incidunt harum sed vero? Ex eum deserunt natus dolorem pariatur
                repellendus repudiandae laborum?
              </h2>
              <Link href="/blogs" className="flex gap-1 text-faruq_primary">
                Read more
                <ArrowBigRightDashIcon />
              </Link>
            </div>
          </div>
          <div className="border w-96 h-[650px] flex flex-col gap-2">
            <Image
              src="/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
              alt="blog_image"
              width={400}
              height={150}
            />
            <div className="m-5 flex gap-3 flex-col">
              <p className="text-[15px] text-faruq_secondry">20 minus ago</p>
              <h2 className="font-bold text-[20px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, aliquid hic quisquam fuga, sit voluptates deserunt est
              </h2>
              <h2 className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, aliquid hic quisquam fuga, sit voluptates deserunt est
                incidunt harum sed vero? Ex eum deserunt natus dolorem pariatur
                repellendus repudiandae laborum?
              </h2>
              <Link href="/blogs" className="flex gap-1 text-faruq_primary">
                Read more
                <ArrowBigRightDashIcon />
              </Link>
            </div>
          </div>
          <div className="border w-96 h-[650px] flex flex-col gap-2">
            <Image
              src="/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
              alt="blog_image"
              width={400}
              height={150}
            />
            <div className="m-5 flex gap-3 flex-col">
              <p className="text-[15px] text-faruq_secondry">20 minus ago</p>
              <h2 className="font-bold text-[20px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, aliquid hic quisquam fuga, sit voluptates deserunt est
              </h2>
              <h2 className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, aliquid hic quisquam fuga, sit voluptates deserunt est
                incidunt harum sed vero? Ex eum deserunt natus dolorem pariatur
                repellendus repudiandae laborum?
              </h2>
              <Link href="/blogs" className="flex gap-1 text-faruq_primary">
                Read more
                <ArrowBigRightDashIcon />
              </Link>
            </div>
          </div>
          <div className="border w-96 h-[650px] flex flex-col gap-2">
            <Image
              src="/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
              alt="blog_image"
              width={400}
              height={150}
            />
            <div className="m-5 flex gap-3 flex-col">
              <p className="text-[15px] text-faruq_secondry">20 minus ago</p>
              <h2 className="font-bold text-[20px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, aliquid hic quisquam fuga, sit voluptates deserunt est
              </h2>
              <h2 className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Nesciunt, aliquid hic quisquam fuga, sit voluptates deserunt est
                incidunt harum sed vero? Ex eum deserunt natus dolorem pariatur
                repellendus repudiandae laborum?
              </h2>
              <Link href="/blogs" className="flex gap-1 text-faruq_primary">
                Read more
                <ArrowBigRightDashIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Main_footer />
    </div>
  );
};

export default Blogs;
