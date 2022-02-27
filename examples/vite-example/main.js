import { createElement, render, wrapElements } from "kumeru";

import "./style.css";

const app = wrapElements(
  createElement("h1", "Hello Vite!"),
  createElement("a", "Documentation", {
    attributes: {
      href: "https://vitejs.dev/guide/features.html",
      target: "_blank",
    },
  })
);

render("app", app);
