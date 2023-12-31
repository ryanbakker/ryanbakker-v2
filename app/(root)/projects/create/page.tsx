import Heading from "@/components/shared/Heading";
import ProjectsForm from "@/components/shared/ProjectsForm";
import { auth } from "@clerk/nextjs";

function CreateProject() {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  return (
    <>
      <section className="relative w-full py-4 flex items-center">
        <div className="wrapper flex h-full flex-col gap-4">
          <Heading title="Create Project" />

          <p className="max-w-[60%] font-light">
            Provide any relevant details about the project.
          </p>
        </div>

        <div className="cross-pattern" />
      </section>

      <ProjectsForm userId={userId} type="Create" />
    </>
  );
}

export default CreateProject;
