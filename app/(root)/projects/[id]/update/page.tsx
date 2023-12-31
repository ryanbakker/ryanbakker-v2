import Heading from "@/components/shared/Heading";
import ProjectsForm from "@/components/shared/ProjectsForm";
import { getProjectById } from "@/lib/actions/project.actions";
import { auth } from "@clerk/nextjs";

type UpdateProjectProps = {
  params: {
    id: string;
  };
};

async function UpdateProject({ params: { id } }: UpdateProjectProps) {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;
  const project = await getProjectById(id);

  return (
    <>
      <section className="relative w-full py-4 flex items-center">
        <div className="wrapper flex h-full flex-col gap-4">
          <Heading title="Create Project" />

          <p className="max-w-[60%] font-light">
            Provide any relevant details about the project.
          </p>
        </div>

        <div className="pattern-cross pattern-gray-600 pattern-bg-white pattern-size-8 pattern-opacity-5 h-full w-full absolute -z-10 left-0 top-0 dark:pattern-bg-black" />
      </section>

      <ProjectsForm
        userId={userId}
        project={project}
        projectId={project._id}
        type="Update"
      />
    </>
  );
}

export default UpdateProject;
