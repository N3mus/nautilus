const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");
const package = require("./package.json");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssPlugin = require("esbuild-plugin-postcss");

const publicDir = path.resolve(__dirname, "public");
const outDir = path.resolve(__dirname, "dist");

const entryPoints = ["src/index.ts"];
const tsconfig = "./tsconfig.json";

const copyPublicPlugin = {
  name: "copy-public-folder",
  setup(build) {
    build.onStart(() => {
      if (!fs.existsSync(publicDir)) {
        console.log("No public folder found.");
        return;
      }

      const copyRecursiveSync = (src, dest) => {
        const stats = fs.statSync(src);
        if (stats.isDirectory()) {
          fs.mkdirSync(dest, { recursive: true });
          fs.readdirSync(src).forEach((child) => {
            copyRecursiveSync(path.join(src, child), path.join(dest, child));
          });
        } else {
          fs.copyFileSync(src, dest);
        }
      };

      // Copy the public folder to the output directo
      console.log("Public folder copied to dist.");
    });
  },
};

const plugins = [
  postcssPlugin.default({
    plugins: [tailwindcss, autoprefixer],
  }),
  copyPublicPlugin,
];

const loader = {
  ".ttf": "file",
};

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
    loader,
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
    loader,
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
    loader,
  })
  .catch(() => process.exit(1));
