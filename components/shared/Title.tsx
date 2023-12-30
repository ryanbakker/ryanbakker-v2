"use client";

import { useEffect } from "react";

const Title = () => {
  useEffect(() => {
    const headline = document.getElementById("typewriter");

    if (headline) {
      const text = headline.innerHTML;
      const lines = text.split("\n");
      headline.innerHTML = "";

      setTimeout(() => {
        lines.forEach((line, i) => {
          const lineElement = document.createElement("span");
          headline.appendChild(lineElement);

          line.split("").forEach((letter, j) => {
            setTimeout(() => {
              lineElement.innerHTML += letter;
            }, 90 * j);
          });

          if (i < lines.length - 1) {
            headline.appendChild(document.createElement("br"));
          }
        });
      }, 1500);

      setTimeout(() => {
        headline.classList.add("hide-cursor");
      }, 5500);
    }
  }, []);

  return (
    <h1 className="title text-indigo-950 dark:text-white !font-semibold">
      Hi I&apos;m Ryan, <br /> A{" "}
      <span
        className="title_span after:border-r-purple-500 dark:after:border-r-white"
        id="typewriter"
      >
        Web Developer
      </span>
    </h1>
  );
};

export default Title;
