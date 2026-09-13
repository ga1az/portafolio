import { DEFAULT_LANG, ui, type Lang, type UIKey } from "./ui";

/** The other half of the EN/ES pair. */
export const otherLang = (lang: Lang): Lang => (lang === "en" ? "es" : "en");

export const useTranslations = (lang: Lang) => (key: UIKey) => ui[lang][key];

/**
 * Prefixes a site path with the locale segment. English is the default
 * locale and lives at the root, so "/works" stays "/works" and only Spanish
 * becomes "/es/works". Mirrors `i18n.routing.prefixDefaultLocale: false`.
 */
export function localizePath(lang: Lang, path: string): string {
  if (lang === DEFAULT_LANG) return path;
  return path === "/" ? `/${lang}/` : `/${lang}${path}`;
}

/**
 * True when `href` is the section the visitor is in, in either language.
 * "/es/blog/" and "/blog/some-post" are both the writing section.
 */
export function isActivePath(currentPath: string, href: string): boolean {
  const section = (path: string) =>
    path
      .replace(/^\/(en|es)(?=\/|$)/, "")
      .split("/")
      .filter(Boolean)[0] ?? "";
  return section(currentPath) === section(href);
}

/** BCP 47 tag for Intl and <html lang>; Open Graph wants the underscore form. */
export const LOCALE: Record<Lang, { tag: string; og: string }> = {
  en: { tag: "en-US", og: "en_US" },
  es: { tag: "es-ES", og: "es_ES" },
};

export const formatDate = (date: Date, lang: Lang) =>
  new Intl.DateTimeFormat(LOCALE[lang].tag, { dateStyle: "full" }).format(date);

type Translatable = { id: string; data: { date: Date; language: Lang } };

/**
 * Posts exist as EN/ES pairs with no explicit key linking them: a pair shares
 * an identical `date` in frontmatter (the Timeline relies on the same
 * convention). Returns the counterpart, or undefined for a single-language post.
 */
export function findTranslation<T extends Translatable>(entry: T, all: T[]) {
  return all.find(
    (candidate) =>
      candidate.id !== entry.id &&
      candidate.data.language !== entry.data.language &&
      candidate.data.date.getTime() === entry.data.date.getTime()
  );
}
