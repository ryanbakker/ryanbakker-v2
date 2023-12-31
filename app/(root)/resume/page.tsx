import Heading from "@/components/shared/Heading";

function Resume() {
  return (
    <>
      <section className="relative w-full py-4 flex items-center">
        <div className="wrapper flex h-full flex-col gap-4">
          <Heading title="Resume" />

          <p className="font-light">
            Feel free to get in touch if you have any queries about my resume or
            projects.
          </p>
        </div>

        <div className="cross-pattern" />
      </section>
      <section className="wrapper">
        <embed
          src="/assets/resumes/BakkerRyanCVLight_1.pdf"
          type="application/pdf"
          width="100%"
          height="800"
          className="rounded-xl border border-indigo-900 p-2"
        />
      </section>
    </>
  );
}

export default Resume;
