import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/constants";
import { satteri } from "@astrojs/markdown-satteri";
import satteriCallouts from "satteri-callouts";
import { titledFigures } from "./src/libs/titled-figures";

import expressiveCode from "astro-expressive-code";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: SITE,

	markdown: {
		processor: satteri({
			hastPlugins: [
				satteriCallouts({ theme: "github" }),
				titledFigures(),
			],
		}),
	},

	image: {
		layout: "constrained",
		responsiveStyles: false,
	},

	integrations: [
		sitemap(),
		expressiveCode({
			themes: ["dark-plus"],
			useDarkModeMediaQuery: false,
			styleOverrides: {
				borderRadius: "0.75rem",
				borderWidth: "1px",
				borderColor: "rgba(238, 238, 226, 0.14)",
				codeBackground: "#111111",
				codeForeground: "#EEEEE2",
				frames: {
					shadowColor: "transparent",
					frameBoxShadowCssValue: "none",
					editorBackground: "#111111",
					editorTabBarBackground: "#111111",
					editorActiveTabBackground: "#111111",
					editorActiveTabForeground: "#EEEEE2",
					editorActiveTabIndicatorTopColor: "transparent",
					editorActiveTabIndicatorBottomColor: "transparent",
					terminalBackground: "#111111",
					terminalTitlebarBackground: "#111111",
					terminalTitlebarForeground: "#EEEEE2",
				},
			},
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
