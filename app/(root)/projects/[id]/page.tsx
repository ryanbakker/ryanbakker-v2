import CategoryLabelLink from "@/components/shared/CategoryLabelLink";
import Collection from "@/components/shared/Collection";
import Heading from "@/components/shared/Heading";
import ProjectDescription from "@/components/shared/ProjectDescription";
import Image from "next/image";
import Link from "next/link";
import { DetailsDeleteBtn } from "@/components/shared/DetailsDeleteBtn";
import {
  getProjectById,
  getRelatedProjectsByCategory,
} from "@/lib/actions/project.actions";
import { formatDate } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import { FileEdit, Github } from "lucide-react";
import { Link as LinkIcon } from "lucide-react";

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
            <div className="relative">
              <Image
                src={project.imageUrl}
                alt="Project"
                width={750}
                height={750}
                className="h-full w-full object-cover object-center"
              />
              <div className="vingette" />
            </div>

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

              <div className="flex flex-col gap-8">
                <CategoryLabelLink category={project.category.name} />
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold pb-1 uppercase">
                    {project.title}
                  </h2>
                  <p className="italic text-gray-400 text-sm">
                    Published: {formatDate(project.createdAt)}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex flex-row gap-3 items-center">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="bg-indigo-500/40 w-fit py-1 px-4 rounded-md text-violet-300 hover:bg-indigo-500/60 transition-all flex flex-row gap-2 items-center"
                    >
                      <Github size={18} /> GitHub Repo
                    </Link>
                  )}

                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      className="bg-indigo-500/40 w-fit py-1 px-4 rounded-md text-violet-300 hover:bg-indigo-500/60 transition-all flex flex-row gap-2 items-center"
                    >
                      <LinkIcon size={18} /> Live Demo
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2 pb-4 pt-2">
                <h5 className="font-extralight text-white/70 text-sm">
                  Project Overview
                </h5>
                <ProjectDescription description={project.description} />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Similar Projects */}
      <section className="relative py-14">
        <div className="wrapper py-8 flex flex-col gap-8 md:gap-12">
          <h3 className="text-3xl md:text-4xl font-semibold uppercase text-indigo-500">
            Related Projects
          </h3>

          <Collection
            data={relatedProjects?.data}
            emptyTitle="No Projects Found"
            emptyStateSubtext="Come back later"
            collectionType="All_Projects"
            limit={3}
            page={1}
            totalPages={1} // Disables pagination
          />
        </div>
        <div className="cross-pattern" />
      </section>
    </>
  );
}

export default Projects;
