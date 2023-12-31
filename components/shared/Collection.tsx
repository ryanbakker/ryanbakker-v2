import Card from "./Card";
import Pagination from "./Pagination";
import { IProject } from "@/lib/database/models/project.model";

type CollectionProps = {
  data: IProject[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: "Projects_Organized" | "My_Tickets" | "All_Projects";
};

function Collection({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((project) => {
              return (
                <li key={project._id} className="flex justify-center">
                  <Card project={project} />
                </li>
              );
            })}
          </ul>

          {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className="flex items-center justify-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-lg bg-indigo-900 text-white py-28 text-center">
          <h3 className="font-semibold text-xl">{emptyTitle}</h3>
          <p className="text-slate-200">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
}

export default Collection;
