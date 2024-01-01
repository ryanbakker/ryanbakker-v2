"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

function ProjectDescription({ description }: { description: string }) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <div className="flex flex-col md:hidden">
        <p
          className={`md:max-w-[45vw] overflow-hidden transition-transform animate-accordion-down leading-relaxed duration-200 ${
            showMore ? "max-h-full" : "max-h-[80px]"
          } ${!showMore && "line-clamp-2"}`}
        >
          {description}
        </p>

        <Button
          onClick={toggleShowMore}
          className="w-fit bg-slate-950 px-0 text-white py-1 my-2 active:bg-transparent focus:bg-transparent focus-visible:bg-transparent cursor-pointer hover:bg-slate-950"
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
        <p className="leading-relaxed">{description}</p>
      </div>
    </>
  );
}

export default ProjectDescription;
