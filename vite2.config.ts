import { resolve } from "node:path";
import { defineConfig } from "vite";
import pkg from "./package.json";

const banner = `/*!
    war3-model v${pkg.version}
	https://github.com/4eb0da/war3-model
	Released under the MIT License.
*/`;

export default defineConfig(() => {
  return {
    base: "./",
    build: {
      outDir: resolve(import.meta.dirname, "dist"),
      rollupOptions: {
        input: resolve(import.meta.dirname, "docs/preview/preview.html"),
        output: {
          banner,
        },
      },
    },
  };
});
