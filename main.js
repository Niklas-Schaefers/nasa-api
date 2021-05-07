import "./style.css";
import { createElement } from "./utils/elements";
import { getItems, removeChildren } from "./utils/api";
import { debounce } from "./utils/timer";
import { createItemElements } from "./components/item";

const header = createElement("header", {
  className: "hero",
  children: [
    createElement("img", { src: "./assets/orbit.png" }),
    createElement("input", {
      className: "input",
      placeholder: "Search",
      autofocus: true,
      oninput: debounce((event) => {
        removeChildren(itemsSection);
        const search = event.target.value;
        getItems(search).then((items) => {
          console.log(items);
          const itemElements = items.map(createItemElements);
          itemsSection.append(...itemElements);
        });
      }, 300),
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

const itemsSection = createElement("section", {
  className: "itemSection",
});

const footer = createElement("footer", {
  className: "footer",
  innerText: "This is the footer",
});

fetch(`https://images-api.nasa.gov/search?keywords=moon`)
  .then((response) => response.json())
  .then((data) => console.log(data));

document.querySelector("#app").append(header, itemsSection, footer);
