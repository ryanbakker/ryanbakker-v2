import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";
import AboutText from "./AboutText";
import { AtSign, Github, Linkedin } from "lucide-react";

function AboutSection() {
  return (
    <section className="relative py-2" id="about">
      <div className="max-w-7xl lg:mx-auto px-5 md:px-10 xl:px-0 w-full flex flex-col md:flex-row items-center justify-between">
        <div className="my-8 flex flex-col justify-center">
          <Heading title="About Me" />

          <div>
            <AboutText />

            <div className="flex flex-row space-x-4 pt-8 text-indigo-600">
              <Link
                href="https://github.com/ryanbakker"
                className="hover:text-indigo-400 transition-all"
              >
                <Github strokeWidth={2.5} aria-label="GitHub" />
              </Link>
              <Link
                href="mailto:ryanbakker@outlook.co.nz"
                className="hover:text-indigo-400 transition-all"
              >
                <AtSign strokeWidth={2.5} aria-label="Email" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ryan-bakker/"
                className="hover:text-indigo-400 transition-all"
              >
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
          className="rounded-md w-[450px] md:max-w-[400px] shadow-xl"
        />
      </div>

      <div className="cross-pattern" />
    </section>
  );
}

export default AboutSection;
