import { defineHastPlugin } from "satteri";
import type { Element, ElementContent, Properties } from "hast";

function isBlankText(node: ElementContent) {
  return node.type === "text" && !node.value.trim();
}

/** Wrap `![alt](src "caption")` as `<figure><img><figcaption>`. */
export function titledFigures() {
  return defineHastPlugin({
    name: "titled-figures",
    element: {
      filter: ["p"],
      visit(node) {
        const kids = node.children.filter((child) => !isBlankText(child));
        if (kids.length !== 1) return;
        const img = kids[0];
        if (img.type !== "element" || img.tagName !== "img") return;
        const title = img.properties.title;
        if (typeof title !== "string" || !title) return;

        const { title: _dropped, ...rest } = img.properties;
        const figure: Element = {
          type: "element",
          tagName: "figure",
          properties: {},
          children: [
            { ...img, properties: rest as Properties },
            {
              type: "element",
              tagName: "figcaption",
              properties: {},
              children: [{ type: "text", value: title }],
            },
          ],
        };
        return figure;
      },
    },
  });
}
