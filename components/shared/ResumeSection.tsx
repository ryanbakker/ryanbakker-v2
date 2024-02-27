import Link from "next/link";
import { Button } from "../ui/button";
import { FileText, Github } from "lucide-react";

function ResumeSection() {
  return (
    <section className="relative bg-gradient-to-tr from-indigo-900 to-indigo-700 py-8 mt-8">
      <div className="wrapper p-5 rounded-lg flex flex-col lg:flex-row justify-between z-50 ">
        <div>
          <div className="relative opacity-100 z-[300]">
            <span className="absolute bottom-0 text-6xl opacity-20 font-bold uppercase text-gray-500 dark:opacity-20">
              Resume
            </span>
            <h3 className="text-4xl font-semibold uppercase text-white z-[200] opacity-100">
              Resume
            </h3>
          </div>
          <p className="mt-5 text-white mr-10">
            Check out my resume for my education and experience, or my projects
            on GitHub.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:gap-5 relative">
          <Button asChild size="lg">
            <Link
              href="/resume"
              className="flex gap-2 mt-6 w-full md:w-fit bg-slate-900 dark:bg-white text-indigo-900 z-[100] hover:text-indigo-600 hover:bg-indigo-50"
              target="_blank"
            >
              <FileText /> Go To Resume
            </Link>
          </Button>
          <Button asChild size="lg">
            <Link
              href="/resume"
              className="flex gap-2 mt-6 w-full md:w-fit bg-slate-900 dark:bg-white text-indigo-900 z-[100] hover:text-indigo-600 hover:bg-indigo-50"
              target="_blank"
            >
              <Github /> GitHub Profile
            </Link>
          </Button>
        </div>
      </div>

      <div className="absolute w-full h-full top-0 left-0 pattern-cross pattern-indigo-500 pattern-bg-black pattern-size-8 pattern-opacity-10" />
    </section>
  );
}

export default ResumeSection;
