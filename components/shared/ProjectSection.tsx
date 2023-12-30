import Link from "next/link";
import { Button } from "../ui/button";
import ProjectCarousel from "./ProjectCarousel";
import Heading from "./Heading";
import Collection from "./Collection";
import { SearchParamProps } from "@/types";
import { getAllProjects } from "@/lib/actions/project.actions";

async function ProjectSection() {
  const projects = await getAllProjects({
    query: "",
    category: "",
    page: 1,
    limit: 3,
  });

  return (
    <section id="projects">
      <div className="wrapper my-8 flex flex-col gap-6">
        <Heading title="Projects" />

        <div className="my-8">
          <Collection
            data={projects?.data}
            emptyTitle="No Projects to Display"
            emptyStateSubtext="Check back later"
            collectionType="All_Projects"
            limit={3}
            page={1}
            totalPages={1}
          />
        </div>

        <div className="flex flex-row space-x-4">
          <Button
            size="lg"
            className="px-10 bg-indigo-600 hover:bg-indigo-800 transition-all text-white"
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
