"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

function AboutText() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="flex flex-col md:hidden">
        <p
          className={`mt-8 font-light md:max-w-[45vw] overflow-hidden transition-transform animate-accordion-down duration-200 ${
            showMore ? "max-h-full" : "max-h-[80px]"
          } ${!showMore && "line-clamp-3"}`}
        >
          I am a developer with internship experience and a passion for website
          and app development. With two diplomas in the bank and experience with
          a professional team, I am ready to embark on my next adventure.
          <br />
          <br />
          I have strong React / Next.js and WordPress foundation skills and
          proficient experience with design tools and GitHub. I primarily focus
          on the Next.js framework, paired with Typescript and Tailwind CSS. You
          can find examples of this within my projects or my GitHub profile.
          <br />
          <br />
          In addition to technical skills, I have experience working with Agile
          and Scrum methodologies, which I used during team projects in my
          diplomas. I am excited to continue expanding my skills through
          learning and development opportunities. Currently, I am actively
          seeking out a developer role. If you have any opportunities available,
          please let me know. I would be glad to hear from you.
        </p>

        <Button
          asChild
          onClick={toggleShowMore}
          className="w-fit bg-[#EEEEEE] dark:bg-darkBlue px-0 text-black dark:text-white py-1 my-2 active:bg-transparent focus:bg-transparent focus-visible:bg-transparent cursor-pointer hover:bg-darkBlue"
        >
          {!showMore ? (
            <p className="flex flex-row items-center">
              <ChevronDown /> Show More
            </p>
          ) : (
            <p className="flex flex-row items-center">
              <ChevronUp /> Show Less
            </p>
          )}
        </Button>
      </div>

      <div className="hidden md:flex flex-col">
        <p className="mt-8 font-light md:max-w-[45vw]">
          I am a developer with internship experience and a passion for website
          and app development. With two diplomas in the bank and experience with
          a professional team, I am ready to embark on my next adventure.
          <br />
          <br />
          I have strong React / Next.js and WordPress foundation skills and
          proficient experience with design tools and GitHub. I primarily focus
          on the Next.js framework, paired with Typescript and Tailwind CSS. You
          can find examples of this within my projects or my GitHub profile.
          <br />
          <br />
          In addition to technical skills, I have experience working with Agile
          and Scrum methodologies, which I used during team projects in my
          diplomas. I am excited to continue expanding my skills through
          learning and development opportunities. Currently, I am actively
          seeking out a developer role. If you have any opportunities available,
          please let me know. I would be glad to hear from you.
        </p>
      </div>
    </>
  );
}

export default AboutText;
