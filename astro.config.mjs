import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import { SITE } from "./src/config.mjs";

export default defineConfig({
  site: SITE.domain,
  integrations: [tailwind()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img", "svgo"],
    },
  },
});
