import type { UIKey } from "./i18n/ui";

export const SITE = "https://ga1az.com";
export const HEADER_IMAGE = SITE + "/header.png";
export const SITE_NAME = "Sergio Galaz";
export const TWITTER_ACCOUNT = "@ga1az";

/** Header links. `href` is the English path; localizePath() adds /es. */
export const NAV: readonly { key: UIKey; href: string }[] = [
  { key: "nav.home", href: "/" },
  { key: "nav.blog", href: "/blog" },
  { key: "nav.works", href: "/works" },
];

/**
 * What the home intro says I am building right now. External, so it lives
 * here rather than in the work collection; the tile key points at tiles.ts.
 */
export const BUILDING = {
  name: "Striker",
  icon: "striker",
  href: { en: "https://striker.tyrell.so/en", es: "https://striker.tyrell.so/es" },
} as const;
