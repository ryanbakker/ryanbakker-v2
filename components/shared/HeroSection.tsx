import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import Title from "./Title";

function HeroSection() {
  return (
    <section className="w-full relative pt-5">
      <div className="wrapper flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[75vh]">
          <div className="flex flex-col space-y-6 justify-center flex-1">
            <Title />
            <h2 className="uppercase text-xl md:text-2xl font-extralight text-slate-600 dark:text-slate-400">
              Working under the hood of websites
            </h2>
            <p className="font-light md:text-lg">
              Front-end Web Developer residing in Auckland, New Zealand. With
              experience designing and developing SEO-friendly websites using
              Next.js 14 and WordPress. Self-learning person, and problem
              solver, with an attention to detail.
            </p>
          </div>
          <div className="flex items-end justify-center my-10 md:my-10 md:justify-end">
            <div className="px-5 pt-8 rounded-xl bg-gradient-to-tr from-indigo-900 via-slate-900 to-slate-800">
              <Image
                src="/assets/images/ryan-bakker-head.webp"
                alt="Headshot"
                width={500}
                height={500}
                className="md:max-w-[350px]"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-4 pt-10 px-20 md:px-0">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-800 transition-all text-white md:px-12 w-full md:w-fit"
            >
              <Link href="/#projects">Projects</Link>
            </Button>
            <Button size="lg" className="w-full md:w-fit md:px-10">
              <Link href="/#contact">Get In Touch</Link>
            </Button>
          </div>

          <div className="pattern-cross pattern-indigo-700 pattern-bg-white pattern-size-8 pattern-opacity-10 h-full w-full absolute -z-10 left-0 top-0 dark:pattern-bg-black" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
