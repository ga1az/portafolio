/**
 * Every string the site chrome renders, in both languages.
 *
 * Post and project bodies are NOT here — they live in src/content and carry
 * their own `language` in frontmatter. This file only covers the frame around
 * them: navigation, the home intro, archive headings, labels.
 *
 * `en` defines the key set; `es` is type-checked against it, so a missing
 * translation fails `astro check` instead of leaking English into /es/.
 */
export const LANGUAGES = ["en", "es"] as const;
export type Lang = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Lang = "en";

const en = {
  "site.description": "Sergio Galaz's personal website",

  // How this language names itself: the switch on the *other* language's
  // pages shows it ("español" on an English page, "english" on a Spanish one).
  "lang.name": "english",
  "lang.readIn": "Read in English",

  "nav.home": "Home",
  "nav.works": "Works",
  "nav.blog": "Blog",

  "home.hello": "Hello,",
  "home.name": "I'm Sergio.",
  "home.bio":
    "I'm a software developer and open-source enthusiast with experience in fullstack development.",
  // The second paragraph carries two inline links, so it is split around them.
  "home.freeTime.before":
    "In my free time, I enjoy working on personal projects and sharing my learnings on my ",
  "home.freeTime.blog": "blog",
  "home.freeTime.between": ". You can check out my ",
  "home.freeTime.works": "portfolio",
  "home.freeTime.after": " to see my recent work.",

  // Status line under the name: "<pin> Santiago, Chile · <clock> · ● building <Striker>".
  "home.status.location": "Santiago, Chile",
  "home.status.building": "building",
  // Tagline on the Striker hover card, in that site's own words.
  "home.preview.building": "AI sales platform for commercial teams",

  // The hover cards on the two inline links above.
  "home.preview.posts": "Latest posts",
  "home.preview.postsCount": "{n} posts",
  "home.preview.readAll": "Read all",
  "home.preview.works": "Recent work",
  "home.preview.worksCount": "{n} projects",

  // Year band on the archive. The link points at the other language's
  // archive, and its label names that language — kept from the original.
  "blog.otherArchive": "spanish reads",
  "works.title": "Works",

  "notFound.title": "Page not found",
  "notFound.body": "The link may be broken, or the page may have moved.",
  "notFound.home": "Back home",
} as const;

export type UIKey = keyof typeof en;

const es: Record<UIKey, string> = {
  "site.description": "Sitio personal de Sergio Galaz",

  "lang.name": "español",
  "lang.readIn": "Leer en español",

  "nav.home": "Inicio",
  "nav.works": "Proyectos",
  "nav.blog": "Blog",

  "home.hello": "Hola,",
  "home.name": "soy Sergio.",
  "home.bio":
    "Soy desarrollador de software y entusiasta del open source, con experiencia en desarrollo fullstack.",
  "home.freeTime.before":
    "En mi tiempo libre trabajo en proyectos personales y comparto lo que aprendo en mi ",
  "home.freeTime.blog": "blog",
  "home.freeTime.between": ". Puedes revisar mi ",
  "home.freeTime.works": "portafolio",
  "home.freeTime.after": " para ver mi trabajo reciente.",

  "home.status.location": "Santiago, Chile",
  "home.status.building": "construyendo",
  "home.preview.building": "Plataforma de ventas con agentes de IA",

  "home.preview.posts": "Últimos posts",
  "home.preview.postsCount": "{n} posts",
  "home.preview.readAll": "Ver todos",
  "home.preview.works": "Trabajo reciente",
  "home.preview.worksCount": "{n} proyectos",

  "blog.otherArchive": "english reads",
  "works.title": "Proyectos",

  "notFound.title": "Página no encontrada",
  "notFound.body": "El link puede estar roto o la página se movió.",
  "notFound.home": "Volver al inicio",
};

export const ui: Record<Lang, Record<UIKey, string>> = { en, es };
