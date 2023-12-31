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
          contact form below or send me a message on{" "}
          <Link
            href="https://www.linkedin.com/in/ryan-bakker/"
            target="_blank"
            className="underline underline-offset-4 hover:text-indigo-500 transition-all"
          >
            LinkedIn
          </Link>
          .
        </p>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
