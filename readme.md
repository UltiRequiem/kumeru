# Kumeru

A low-level HyperScript-like Frontend Library 🚀

```
import { render, createElement, wrapElements } from "kumeru";

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
```

There is still a lot to do, but you can use it already! Check
[Pages using Kumeru on Production](#pages-using-kumeru-on-production)!

## Docs

[![Netlify Status](https://api.netlify.com/api/v1/badges/1690f536-142e-41ff-8520-2c34149bc7a3/deploy-status)](https://app.netlify.com/sites/kumeru/deploys)

Auto generated documentation using [TypeDoc](https://typedoc.org) 💕

For examples you can check [`examples/`](./examples) 📂

https://kumeru.ultirequiem.com

All the codebase has lot of comments, pull request adding even more useful ones
are welcome!

## Pages Using Kumeru on Production

- [Sergif](https://sergif.ultirequiem.com/) -
  [Source](https://github.com/UltiRequiem/sergif) - Accompaniment: Tailwind CSS
  and Netlify Functions

## Licence

Kumeru is licensed under the MIT Licence.
