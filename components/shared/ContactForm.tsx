"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { CheckCircle, Send } from "lucide-react";

export default function ContactForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "test_key");
    // formData.append("access_key", "bac56c50-4316-41c2-940e-b91021f9fb0d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      setFormSubmitted(true);
    }
  }

  return (
    <>
      {formSubmitted ? (
        <div className="bg-indigo-950 rounded-lg">
          <div className="flex flex-col items-center p-20 gap-5">
            <div className="flex flex-col items-center gap-2">
              <CheckCircle size={80} className="text-green-500" />
              <h5 className="text-green-500">Success!</h5>
            </div>
            <p>I will get back to you as soon as possible.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="name"
            className="contact-input"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            className="contact-input"
            placeholder="Email"
          />
          <textarea
            name="message"
            className="contact-textarea resize-none min-h-48"
            placeholder="Message"
          ></textarea>
          <Button
            type="submit"
            className="w-full md:w-fit px-10 bg-indigo-600 text-white hover:bg-indigo-800 flex flex-row items-center gap-2"
          >
            Submit Form <Send size={15} />
          </Button>
        </form>
      )}
    </>
  );
}
