import { AtSign, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";
import AboutText from "./AboutText";

function AboutSection() {
  return (
    <section className="relative py-2" id="about">
      <div className="max-w-7xl lg:mx-auto px-5 md:px-10 xl:px-0 w-full flex flex-col md:flex-row items-center justify-between">
        <div className="my-8 flex flex-col justify-center">
          <Heading title="About Me" />

          <div>
            <AboutText />

            <div className="flex flex-row space-x-4 pt-4 text-indigo-600">
              <Link href="https://github.com/ryanbakker">
                <Github strokeWidth={2.5} aria-label="GitHub" />
              </Link>
              <Link href="mailto:ryanbakker@outlook.co.nz">
                <AtSign strokeWidth={2.5} aria-label="Email" />
              </Link>
              <Link href="https://www.linkedin.com/in/ryan-bakker/">
                <Linkedin strokeWidth={2.2} aria-label="LinkedIn" />
              </Link>
            </div>
          </div>
        </div>

        <Image
          src="/assets/images/ryan-bakker-portrait.webp"
          alt="Ryan Bakker Portrait"
          width={200}
          height={350}
          className="rounded-md w-[450px] md:max-w-[400px]"
        />
      </div>

      <div className="pattern-cross pattern-gray-600 pattern-bg-white pattern-size-8 pattern-opacity-5 h-full w-full absolute -z-10 left-0 top-0 dark:pattern-bg-black" />
    </section>
  );
}

export default AboutSection;
