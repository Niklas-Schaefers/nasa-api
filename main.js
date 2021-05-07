import "./style.css";
import { createElement } from "./utils/elements";

const header = createElement("header", {
  className: "hero",
  children: [
    createElement("img", { src: "./assets/orbit.png" }),
    createElement("input", {
      className: "input",
      placeholder: "Search",
      autofocus: true,
    }),
    createElement("ul", {
      className: "menu",
      children: [
        createElement("a", {
          href: `details.html`,
          children: [createElement("li", { innerText: "Home" })],
        }),
        createElement("a", {
          href: `details.html`,
          children: [createElement("li", { innerText: "Nasa Photos" })],
        }),
        createElement("a", {
          href: `details.html`,
          children: [createElement("li", { innerText: "Contact" })],
        }),
      ],
    }),
  ],
});

const itemSection = createElement("section", {
  className: "itemSection",
});

const footer = createElement("footer", {
  className: "footer",
  innerText: "This is the footer",
});

document.querySelector("#app").append(header, itemSection, footer);
