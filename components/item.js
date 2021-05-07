import "./item.css";
import { createElement } from "../utils/elements";

export function createItemElements({ data, links }) {
  return createElement("div", {
    className: "itemCard",
    children: [
      links
        ? createElement("img", {
            src: links[0]?.href,
          })
        : "",
      createElement("h1", { innerText: data[0]?.title }),
      createElement("p", {
        innerText: data[0]?.description,
      }),
    ],
  });
}
