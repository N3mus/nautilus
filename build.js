const esbuild = require("esbuild");
const package = require("./package.json");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssPlugin = require("esbuild-plugin-postcss");

const entryPoints = ["src/index.ts"];
const tsconfig = "./tsconfig.json";

const plugins = [
  postcssPlugin.default({
    plugins: [tailwindcss, autoprefixer],
  }),
];

esbuild
  .build({
    entryPoints,
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: package.main,
    format: "cjs",
    tsconfig,
    plugins,
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
    plugins,
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
