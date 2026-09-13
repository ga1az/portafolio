import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/constants";

import expressiveCode from "astro-expressive-code";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: SITE,

	integrations: [
		sitemap(),
		expressiveCode({
			themes: ["dark-plus"],
		}),
	],

	output: "static",

	// English lives at the root, Spanish under /es/. Post URLs are shared by
	// both languages (each post has its own slug), so only the hub pages —
	// home and the two archives — get a Spanish route.
	i18n: {
		defaultLocale: "en",
		locales: ["en", "es"],
		routing: { prefixDefaultLocale: false },
	},

	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),

	vite: {
		plugins: [tailwindcss()],
	},
});
