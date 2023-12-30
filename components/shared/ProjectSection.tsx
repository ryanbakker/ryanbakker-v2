import Link from "next/link";
import { Button } from "../ui/button";
import ProjectCarousel from "./ProjectCarousel";
import Heading from "./Heading";

function ProjectSection() {
  return (
    <section id="projects">
      <div className="wrapper my-8 flex flex-col gap-6">
        <Heading title="Projects" />

        <ProjectCarousel />
        <div className="flex flex-row space-x-4">
          <Button
            size="lg"
            className="px-10 bg-indigo-600 hover:bg-indigo-800 transition-all"
          >
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button size="lg" className="px-10">
            <Link href="https://github.com/ryanbakker?tab=repositories">
              GitHub Repos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
