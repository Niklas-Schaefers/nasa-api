import styles from "./itemDetails.module.css";
import { createElement } from "../utils/elements";

export function createItemElement({ data, links }) {
  return createElement("div", {
    className: styles.itemDetailsCard,
    children: [
      links
        ? createElement("img", {
            src: links[0]?.href,
          })
        : "",
      data ? createElement("h1", { innerText: data[0]?.title }) : "",
      data
        ? createElement("p", {
            innerText: data[0]?.description,
          })
        : "",
      // createElement("img", {
      //   src:
      //     "https://images-assets.nasa.gov/image/KSC-2012-2734/KSC-2012-2734~thumb.jpg",
      // }),
      // createElement("h1", { innerText: "MOON" }),
      // createElement("p", {
      //   innerText:
      //     "CAPE CANAVERAL, Fla. – A view of the super moon in the eastern sky over Kennedy Space Center in Florida. The full moon reached perigee, the closest point to Earth in its elliptical pattern, at 11:34 p.m. It appeared 14 percent larger and 30 percent brighter than other full moons of 2012. Photo credit: NASA/Jim Grossmann",
      // }),
    ],
  });
}
