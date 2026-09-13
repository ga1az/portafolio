import {
  siGo,
  siGooglemaps,
  siGrafana,
  siNextdotjs,
  siRabbitmq,
  siReact,
  siTurso,
  siTypescript,
} from "simple-icons";
import type { ImageMetadata } from "astro";
import favicon from "../../public/favicon.png";
import superset from "../assets/tiles/superset.png";
import striker from "../assets/tiles/striker.png";

/**
 * The little app-icon tile shown next to every project and post.
 *
 * Content picks a tile with `icon: "<key>"` in frontmatter. Brand marks come
 * from simple-icons (a 24x24 path); the two marks it does not ship (Oracle,
 * and our own snippet braces) are drawn inline in Tile.astro; the two raster
 * favicons go through <Image>, so a 1600px source ships as a 96px WebP.
 *
 * `bg` is the tile background, `fg` the mark color. White marks on the brand
 * color read best on the dark page; the light-background tiles (Google Maps,
 * Next.js) keep their brand mark color instead.
 */
export type Tile =
  | { kind: "path"; bg: string; fg: string; path: string; title: string }
  | { kind: "braces" | "oracle"; bg: string; fg: string; title: string }
  /** `outline`: a dark favicon would vanish against the page without a hairline. */
  | { kind: "image"; bg: string; src: ImageMetadata; title: string; outline?: boolean };

export const TILES: Record<string, Tile> = {
  go: { kind: "path", bg: "#00ADD8", fg: "#FFFFFF", path: siGo.path, title: siGo.title },
  react: { kind: "path", bg: "#61DAFB", fg: "#0B1F2A", path: siReact.path, title: siReact.title },
  googlemaps: { kind: "path", bg: "#F5F5F0", fg: "#4285F4", path: siGooglemaps.path, title: siGooglemaps.title },
  turso: { kind: "path", bg: "#4FF8D2", fg: "#0B2B2A", path: siTurso.path, title: siTurso.title },
  grafana: { kind: "path", bg: "#F46800", fg: "#FFFFFF", path: siGrafana.path, title: siGrafana.title },
  typescript: { kind: "path", bg: "#3178C6", fg: "#FFFFFF", path: siTypescript.path, title: siTypescript.title },
  rabbitmq: { kind: "path", bg: "#FF6600", fg: "#FFFFFF", path: siRabbitmq.path, title: siRabbitmq.title },
  nextjs: { kind: "path", bg: "#F5F5F0", fg: "#000000", path: siNextdotjs.path, title: siNextdotjs.title },

  snippet: { kind: "braces", bg: "#6D5DFC", fg: "#FFFFFF", title: "Snippet Manager" },
  oracle: { kind: "oracle", bg: "#C74634", fg: "#FFFFFF", title: "Oracle Cloud" },

  portfolio: { kind: "image", bg: "#2FB2C8", src: favicon, title: "ga1az.com" },
  superset: { kind: "image", bg: "#1C1C1C", src: superset, title: "Superset", outline: true },
  striker: { kind: "image", bg: "#0B0C10", src: striker, title: "Striker", outline: true },
};
