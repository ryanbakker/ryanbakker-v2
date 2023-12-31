import Heading from "./Heading";
import ContactForm from "./ContactForm";

function ContactSection() {
  return (
    <section className="wrapper" id="contact">
      <div className="py-5 md:mr-10 flex flex-col gap-5 md:max-w-[700px]">
        <Heading title="Contact" />
        <p className="font-light">
          If you have any queries, feel free to get in touch. Use the contact
          form below or send me a message on Linkedin.
        </p>

        <ContactForm />
      </div>
    </section>
  );
}

export default ContactSection;
