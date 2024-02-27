import Image from "next/image";
import Link from "next/link";
import Title from "./Title";
import { Button } from "../ui/button";
import { Github, PanelsTopLeft } from "lucide-react";

function HeroSection() {
  return (
    <section className="w-full relative pt-5">
      <div className="wrapper flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[75vh]">
          <div className="flex flex-col space-y-6 justify-center flex-1">
            <Title />
            <h2 className="uppercase sm:text-xl md:text-2xl font-extralight text-slate-600 dark:text-slate-400">
              Working under the hood of websites
            </h2>
            <p className="font-light md:text-lg">
              Experience with designing & developing SEO-friendly websites using
              Next.js & WordPress. Self-learning person & problem solver with an
              attention to detail.
            </p>
          </div>
          <div className="flex items-end justify-center my-10 md:my-10 md:justify-end">
            <div className="px-5 pt-8 rounded-xl rounded-b-xl bg-gradient-to-tr from-indigo-800 via-slate-900 to-indigo-950">
              <Image
                src="/assets/images/ryan-bakker-head.webp"
                alt="Headshot"
                width={400}
                height={400}
                className="w-[500px] md:max-w-[350px]"
                loading="eager"
              />
            </div>
          </div>

          <div className="flex flex-col items-center md:flex-row gap-4 pb-6 md:pb-10">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-800 transition-all text-white md:px-12 w-full md:w-fit text-base"
            >
              <Link
                href="/#projects"
                className="flex flex-row gap-2 items-center"
              >
                <PanelsTopLeft size={22} /> Projects
              </Link>
            </Button>
            <Button
              size="lg"
              asChild
              className="w-full md:w-fit md:px-10 text-base"
            >
              <Link
                href="https://github.com/ryanbakker"
                target="_blank"
                className="flex flex-row gap-2 items-center bg-slate-900 dark:bg-white text-indigo-900 z-[100] hover:text-indigo-600 hover:bg-indigo-50"
              >
                <Github size={22} /> GitHub
              </Link>
            </Button>
          </div>

          <div className="cross-pattern" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
