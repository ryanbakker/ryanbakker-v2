import Heading from "./Heading";
import ContactForm from "./ContactForm";
import Link from "next/link";

function ContactSection() {
  return (
    <section className="wrapper mt-8" id="contact">
      <div className="py-5 md:mr-10 flex flex-col gap-5 md:max-w-[700px]">
        <Heading title="Contact" />
        <p className="font-light">
          If you have any queries, feel free to get in touch. Email me using the
          link below or send a message on{" "}
          <Link
            href="https://www.linkedin.com/in/ryan-bakker/"
            target="_blank"
            className="underline underline-offset-4 hover:text-indigo-500 transition-all"
          >
            LinkedIn
          </Link>
          .
        </p>

        <Link
          href="mailto:rmbakker2002@gmail.com"
          className=" underline underline-offset-8 hover:text-indigo-400 transition-all mt-8"
        >
          rmbakker2002@gmail.com
        </Link>
      </div>
    </section>
  );
}

export default ContactSection;
