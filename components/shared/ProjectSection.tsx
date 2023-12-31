import Link from "next/link";
import Heading from "./Heading";
import Collection from "./Collection";
import { Button } from "../ui/button";
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

        <div className="flex flex-col md:flex-row gap-4 md:px-0 items-center">
          <Button
            size="lg"
            className="px-10 bg-indigo-600 hover:bg-indigo-800 transition-all text-white w-full md:w-fit"
          >
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button size="lg" className="px-10 w-full md:w-fit">
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
