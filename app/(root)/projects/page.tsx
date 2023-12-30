import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Heading from "@/components/shared/Heading";
import Search from "@/components/shared/Search";
import { getAllProjects } from "@/lib/actions/project.actions";
import { SearchParamProps } from "@/types";

async function Projects({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const projects = await getAllProjects({
    query: searchText,
    category,
    page: page,
    limit: 6,
  });

  return (
    <>
      <section className="relative w-full py-4 flex items-center">
        <div className="wrapper flex h-full flex-col gap-4">
          <Heading title="Projects" />

          <p className="max-w-[60%] font-light">
            View a selection of my projects, a couple of which contributed to my
            diplomas. Most projects are built using Next.js, with the rest using
            WordPress or bare HTML code. Some projects contain links to GitHub
            repos or even the live build on Vercel. If you have any queries,
            feel free to get in touch using the contact section. Or view my
            GitHub profile here.
          </p>
        </div>

        <div className="pattern-cross pattern-gray-600 pattern-bg-white pattern-size-8 pattern-opacity-5 h-full w-full absolute -z-10 left-0 top-0 dark:pattern-bg-black" />
      </section>

      <section className="wrapper mb-20">
        <div className="flex w-full flex-col gap-5 md:flex-row items-center pb-12">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={projects?.data}
          emptyTitle="No Projects to Display"
          emptyStateSubtext="Check back later"
          collectionType="All_Projects"
          limit={6}
          page={page}
          totalPages={projects?.totalPages}
        />
      </section>
    </>
  );
}

export default Projects;
