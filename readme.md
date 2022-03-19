# Kumeru

A low-level and HyperScript-like Frontend Library 🚀

```typescript
import {
  createElement,
  render,
  wrapElements,
} from "https://deno.land/x/kumeru/mod.ts";

const app = wrapElements(
  createElement("h1", "Kumeru"),
  createElement("a", "Documentation", {
    attributes: {
      href: "https://kumeru.js.org",
      target: "_blank",
    },
  }),
);

render(document.getElementById("root"), app);
```

There is still a lot to do, but you can use it already! Check
[Pages using Kumeru on Production](#pages-using-kumeru-on-production)!

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
