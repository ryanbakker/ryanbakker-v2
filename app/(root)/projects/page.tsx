import Heading from "@/components/shared/Heading";

function Projects() {
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

      <section className="wrapper">Project Grid</section>
    </>
  );
}

export default Projects;
