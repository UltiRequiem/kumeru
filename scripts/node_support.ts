import { build } from "https://deno.land/x/dnt@0.22.0/mod.ts";

const publisher = {
  name: "Eliaz Bobadilla",
  username: "ultirequiem",
  email: "eliaz.bobadilladev@gmail.com",
  site: "https://ultirequiem.com",
};

const packageConfig = {
  name: "kumeru",
  repoName: "kumeru",
  version: "0.1.2",
  description: "Low-level HyperScript-like Frontend Library",
  keywords: ["frontend", "framework", "ui"],
  license: "MIT",
  homepage: "https://kumeru.js.org",
};

await build({
  entryPoints: ["./mod.ts"],

  outDir: "node",

  shims: {
    deno: true,
  },

  package: {
    name: packageConfig.name,
    description: packageConfig.description,
    author: `${publisher.name} <${publisher.email}> (${publisher.site})`,

    version: packageConfig.version,

    homepage: packageConfig.homepage,
    license: packageConfig.license,

    funding: {
      type: "patreon",
      url: `https://www.patreon.com/${publisher.username}`,
    },

    repository: `github:${publisher.username}/${packageConfig.repoName}`,

    bugs: {
      url:
        `https://github.com/${publisher.username}/${packageConfig.repoName}/issues`,
      email: publisher.email,
    },

    keywords: packageConfig.keywords,
  },
});

await Promise.all([
  Deno.copyFile("license", "node/license"),
  Deno.copyFile("readme.md", "node/readme.md"),
]);
