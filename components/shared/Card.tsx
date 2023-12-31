import { IProject } from "@/lib/database/models/project.model";
import { auth } from "@clerk/nextjs";
import { ArrowUpRight, FileEdit } from "lucide-react";
import Link from "next/link";
import { DeleteConfirmation } from "./DeleteConfirmation";
import CategoryLabel from "./CategoryLabel";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

type CardProps = {
  project: IProject;
};

function Card({ project }: CardProps) {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isProjectCreator = userId === project.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[300px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-gradient-to-tr from-indigo-950 to-indigo-900 shadow-md transition-all hover:shadow-2xl md:min-h-[438px] cursor-pointer ">
      <Link
        href={`/projects/${project._id}`}
        className="overflow-hidden max-h-[250px] flex items-center w-full justify-center shadow-md"
      >
        <Image
          src={project.imageUrl}
          alt={project.title}
          width={200}
          height={100}
          className="w-full"
        />
      </Link>

      {isProjectCreator && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
          <Link
            href={`/projects/${project._id}/update`}
            className="text-black hover:text-black/50 transition-all"
          >
            <FileEdit size={20} />
          </Link>

          <DeleteConfirmation projectId={project._id} />
        </div>
      )}

      <div className="flex flex-col justify-between gap-3 p-5 md:gap-4">
        <div className="flex flex-col gap-3 h-full">
          <Link
            href={`/projects/${project._id}`}
            className="flex flex-col justify-between min-h-[130px]"
          >
            <CategoryLabel category={project.category.name} />
            <div className="h-full flex flex-col justify-end gap-5">
              <p className="line-clamp-2 text-white text-2xl font-bold">
                {project.title}
              </p>
              <p className="line-clamp-2 text-white/70 font-light text-sm">
                Published: {formatDate(project.createdAt)}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
