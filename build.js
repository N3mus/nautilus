const esbuild = require("esbuild");
const package = require("./package.json");

const entryPoints = ["src/index.ts"];
const tsconfig = "./tsconfig.json";

esbuild
  .build({
    entryPoints,
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: package.main,
    format: "cjs",
    tsconfig,
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints,
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: package.module,
    format: "esm",
    tsconfig,
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    entryPoints,
    bundle: true,
    outdir: "dist/types",
    tsconfig,
    metafile: true,
    external: ["react", "react-dom"],
  })
  .catch(() => process.exit(1));
