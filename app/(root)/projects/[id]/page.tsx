import CategoryLabel from "@/components/shared/CategoryLabel";
import Collection from "@/components/shared/Collection";
import { DetailsDeleteBtn } from "@/components/shared/DetailsDeleteBtn";
import {
  getProjectById,
  getRelatedProjectsByCategory,
} from "@/lib/actions/project.actions";
import { formatDate } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import { FileEdit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

async function Projects({ params: { id }, searchParams }: SearchParamProps) {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const project = await getProjectById(id);
  const isProjectCreator = userId === project.organizer._id.toString();

  const relatedProjects = await getRelatedProjectsByCategory({
    categoryId: project.category._id,
    projectId: project._id,
    page: searchParams.page as string,
  });

  return (
    <>
      <div className="bg-slate-950">
        {/* Project Details */}
        <section className="text-white flex justify-center flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl">
            <Image
              src={project.imageUrl}
              alt="Project"
              width={1000}
              height={1000}
              className="h-full w-full object-cover object-center"
            />

            <div className="flex w-full flex-col gap-5 p-5 md:p-10">
              {isProjectCreator && (
                <div className=" flex flex-row gap-4">
                  <Link
                    href={`/projects/${project._id}/update`}
                    className="text-black bg-white py-2 px-4 rounded-md flex flex-row gap-2 items-center hover:bg-white/80 transition-all"
                  >
                    <FileEdit size={20} /> Edit
                  </Link>

                  <DetailsDeleteBtn projectId={project._id} />
                </div>
              )}

              <div className="flex flex-col gap-5">
                <CategoryLabel category={project.category.name} />
                <div>
                  <h2 className="text-3xl font-bold pb-1 uppercase">
                    {project.title}
                  </h2>
                  <p className="italic text-gray-400">
                    Published: {formatDate(project.createdAt)}
                  </p>
                </div>
              </div>

              <div className="flex flex-row gap-3 items-center">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    className="bg-indigo-700/40 w-fit py-1 px-4 rounded-md text-violet-300 font-medium hover:bg-indigo-500/40 transition-all"
                  >
                    GitHub Repo
                  </Link>
                )}

                {project.demoUrl && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    className="bg-indigo-700/40 w-fit py-1 px-4 rounded-md text-violet-300 font-medium hover:bg-indigo-500/40 transition-all"
                  >
                    Live Demo
                  </Link>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <h5 className="font-light text-white/80 text-sm">
                  Project Overview
                </h5>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Similar Projects */}
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="text-3xl font-bold text-white">Related Projects</h2>

        <Collection
          data={relatedProjects?.data}
          emptyTitle="No Projects Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Projects"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedProjects?.totalPages}
        />
      </section>
    </>
  );
}

export default Projects;
