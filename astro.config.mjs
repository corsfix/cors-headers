// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://corsfix.com/cors-headers",
  vite: {
    plugins: [tailwindcss()],
  },

  base: "/cors-headers",
  trailingSlash: "never",

  build: {
    format: "file",
  },

  integrations: [sitemap()],
});
