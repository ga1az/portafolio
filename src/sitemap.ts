import glob from "fast-glob";
import path from "path";

import { SITE } from "./constants";

export const basePages = ["/", "/blog", "/works"];

const blogPages = (await glob("./src/content/blog/**/*.md")).map(
  (filePath) => "/blog/" + path.parse(filePath).name
);

// Site map for works?
// const worksPages = (await glob("./src/content/works/**/*.md")).map(
//   (filePath) => "/works/" + path.parse(filePath).name
// );

export const pages = [...basePages, ...blogPages].map((url) => SITE + url);
