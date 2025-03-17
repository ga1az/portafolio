import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import { pages } from "./src/sitemap";
import { SITE } from "./src/constants";

import expressiveCode from "astro-expressive-code";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: SITE,

	integrations: [
		sitemap({
			customPages: pages,
		}),
		expressiveCode({
			themes: ["dark-plus"],
		}),
	],
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),

	vite: {
		plugins: [tailwindcss()],
	},
});
