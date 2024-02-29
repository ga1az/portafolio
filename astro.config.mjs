import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";
import { pages } from "./src/sitemap";
import { SITE } from "./src/constants";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [tailwind(), sitemap({ customPages: pages })],
});
