import "./style.css";
import styles from "./details.module.css";
import { createElement } from "./utils/elements";
import { getItem } from "./utils/api";
import { createItemElement } from "./components/itemDetails";

const params = new URLSearchParams(location.search);
const itemId = params.get("id");

// console.log(itemId);

const value = getItem(itemId).then((response) => {
  console.log(response);
  const itemDetails = createItemElement(response[0]);
  itemSection.append(itemDetails);
});

console.log(value);

const itemSection = createElement("section", {
  className: styles.section,
});

document.querySelector("#app").append(itemSection);
