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
          className={`mt-8 font-light md:max-w-[45vw] overflow-hidden transition-all animate-accordion-down ${
            showMore ? "max-h-full" : "max-h-[80px]"
          } ${!showMore && "line-clamp-3"}`}
        >
          I am a developer with internship experience and a passion for website
          and app development. With two diplomas in the bank, I will embark on
          my next venture, pursuing a bachelors degree in Software Engineering
          starting in July.
          <br />
          <br />
          I have a strong WordPress and React development foundation and gained
          experience in Adobe, Figma, and Github. Currently, I am focused on
          expanding my skillset. Learning the new Next.js 13 framework, paired
          with TypeScript and TailwindCSS. You can find examples of my work on
          my Github profile.
          <br />
          <br />
          In addition to technical skills, I have experience working with Agile
          and Scrum methodologies, which I used during team projects in my
          diplomas. I am excited to continue expanding my skills through
          learning and development opportunities.
        </p>

        <Button
          onClick={toggleShowMore}
          className="w-fit bg-transparent text-white pl-0 py-3 my-2"
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
          and app development. With two diplomas in the bank, I will embark on
          my next venture, pursuing a bachelors degree in Software Engineering
          starting in July.
          <br />
          <br />
          I have a strong WordPress and React development foundation and gained
          experience in Adobe, Figma, and Github. Currently, I am focused on
          expanding my skillset. Learning the new Next.js 13 framework, paired
          with TypeScript and TailwindCSS. You can find examples of my work on
          my Github profile.
          <br />
          <br />
          In addition to technical skills, I have experience working with Agile
          and Scrum methodologies, which I used during team projects in my
          diplomas. I am excited to continue expanding my skills through
          learning and development opportunities.
        </p>
      </div>
    </>
  );
}

export default AboutText;
