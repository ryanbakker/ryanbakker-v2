import { AtSign, Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";

function AboutSection() {
  return (
    <section className="relative py-2" id="about">
      <div className="max-w-7xl lg:mx-auto px-5 md:px-10 xl:px-0 w-full flex flex-col md:flex-row justify-between items-center">
        <div className="my-8 flex flex-col justify-center">
          <Heading title="About Me" />

          <div>
            <p className="my-8 font-light md:max-w-[45vw]">
              I am a developer with internship experience and a passion for
              website and app development. With two diplomas in the bank, I will
              embark on my next venture, pursuing a bachelors degree in Software
              Engineering starting in July.
              <br />
              <br />
              I have a strong WordPress and React development foundation and
              gained experience in Adobe, Figma, and Github. Currently, I am
              focused on expanding my skillset. Learning the new Next.js 13
              framework, paired with TypeScript and TailwindCSS. You can find
              examples of my work on my Github profile.
              <br />
              <br />
              In addition to technical skills, I have experience working with
              Agile and Scrum methodologies, which I used during team projects
              in my diplomas. I am excited to continue expanding my skills
              through learning and development opportunities.
            </p>

            <div className="flex flex-row space-x-4 pt-4 text-indigo-600">
              <Link href="https://github.com/ryanbakker">
                <Github strokeWidth={2.5} aria-label="GitHub Profile" />
              </Link>
              <Link href="mailto:ryanbakker@outlook.co.nz">
                <AtSign strokeWidth={2.5} aria-label="Email Me" />
              </Link>
              <Link href="https://www.linkedin.com/in/ryan-bakker/">
                <Linkedin
                  strokeWidth={2.2}
                  aria-aria-label="LinkedIn Profile"
                />
              </Link>
            </div>
          </div>
        </div>

        <Image
          src="/assets/images/ryan-bakker-portrait.webp"
          alt="Ryan Bakker Portrait"
          width={450}
          height={600}
          className="rounded-md md:max-w-[400px]"
        />
      </div>

      <div className="pattern-cross pattern-gray-600 pattern-bg-white pattern-size-8 pattern-opacity-5 h-full w-full absolute -z-10 left-0 top-0 dark:pattern-bg-black" />
    </section>
  );
}

export default AboutSection;
