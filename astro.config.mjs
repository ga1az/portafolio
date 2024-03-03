import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import sitemap from "@astrojs/sitemap";
import { pages } from "./src/sitemap";
import { SITE } from "./src/constants";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    tailwind(),
    sitemap({
      customPages: pages,
    }),
    expressiveCode({
      themes: ["dark-plus"],
    }),
  ],
  output: "hybrid",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
