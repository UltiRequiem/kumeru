# Kumeru

A fully-typed, low-level, and HyperScript-like Frontend Library 🚀

```javascript
import { createElement, render, wrapElements } from "kumeru";

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

## Installation ∙ [![npm](https://img.shields.io/npm/v/kumeru?color=blue&style=flat-square)](https://www.npmjs.com/package/kumeru)

```console
# npm
npm install kumery

# yarn
yarn add kumeru

# pnpm
pnpm add kumeru
```

## Docs

Auto generated documentation using [TypeDoc](https://typedoc.org) 💕

For examples you can check [`examples/`](./examples) 📂

https://kumeru.ultirequiem.com

## Pages Using Kumeru on Production

Are you using Kumeru on your page? Make a pull request adding your page here!

- [Sergif](https://sergif.ultirequiem.com/) - (Kumeru + Tailwind CSS + Netlify Functions)

## Licence

Licensed under the MIT Licence.
