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
  }),
);

render("app", app);
```

There is still a lot to do, but you can use it already! Check
[Pages using Kumeru on Production](#pages-using-kumeru-on-production)!

## Installation ∙ [![npm](https://img.shields.io/npm/v/kumeru?color=blue&style=flat-square)](https://www.npmjs.com/package/kumeru)

```sh
# npm
npm install kumeru
```

## Docs

- For examples you can check [`examples/`](./examples) 📂

- API Docs ▶ https://kumeru.js.org

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/intent/tweet?text=%40UltiRequiem%20) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🚀

Don't forget to start the repo ⭐

## Pages Using Kumeru on Production

Are you using Kumeru on your page? Make a pull request adding your page here!

- [Sergif](https://sergif.ultirequiem.com) - (Kumeru + Tailwind CSS + Netlify
  Functions)

## Licence

Licensed under the MIT Licence.
