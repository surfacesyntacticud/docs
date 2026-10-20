
import type { QuartzTransformerPlugin } from "@quartz-community/types";
import type { Element, Root } from "hast";
import { visit } from "unist-util-visit";

export const Conll: QuartzTransformerPlugin = () => {
  return {
    name: "Conll",
    htmlPlugins() {
      return [
        () => {
          return (tree: Root) => {
            visit(tree, "element", (node: Element) => {
              if (node.tagName !== "conll") return;

              const color =
                node.properties.deprecated === "yes"
                  ? "rgb(255, 187, 187)"
                  : node.properties.schema === "ud"
                    ? "rgb(216, 198, 214)"
                    : "#fdf8ed";

              const rawContent = node.children
                .filter(
                  (child): child is Extract<typeof child, { type: "text" }> =>
                    child.type === "text",
                )
                .map((child) => child.value)
                .join("")
                .trim();

              // Read highlight_arc / highlight_arcs as dependent token IDs.
              const highlightTokens = new Set<string>();

              const content = rawContent
                .split(/\r?\n/)
                .filter((line) => {
                  const match = line.match(
                    /^#\s*highlight_arcs?\s*=\s*(.+)$/i,
                  );

                  if (!match) return true;

                  for (const token of (match[1] ?? "").split(",")) {
                    const id = token.trim();

                    if (/^\d+$/.test(id)) {
                      highlightTokens.add(id);
                    }
                  }

                  return false;
                })
                .join("\n")
                .trim();

              node.tagName = "div";
              node.properties = {
                style: `background-color: ${color}; border-radius: 10px; padding: 10px; margin: 15px 0;`,
              };

              node.children = [
                {
                  type: "element",
                  tagName: "reactive-dep-tree",
                  properties: {
                    "shown-metas":
                      "lang,text_fr,text_en,pinyin,sent_id,schema",
                    "hidden-features":
                      "MISC.highlight,MISC.SpaceAfter,XPOS,MISC.AlignBegin,MISC.AlignEnd,MISC.wordform,MISC.Cxn,MISC.CxnElt",
                    interactive: true,
                    "token-spacing": "20",
                    conll: content,
                    "data-highlight-tokens": [...highlightTokens].join(","),
                  },
                  children: [],
                },
              ];
            });
          };
        },
      ];
    },

    externalResources() {
      return {
        css: [
          {
            content: "/static/css/prism.css",
            spaPreserve: true,
          },
        ],
        js: [
          {
            src: "https://unpkg.com/reactive-dep-tree/dist/reactive-dep-tree.umd.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true,
          },
          {
            src: "/static/js/prism.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true,
          },
          {
            src: "/static/js/prism_grew.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true,
          },
          {
            src: `/static/js/colored_arcs.js`,
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true,
          },
          {
            script: `document.addEventListener("nav", () => { if (window.Prism) window.Prism.highlightAll(); })`,
            loadTime: "afterDOMReady",
            contentType: "inline",
            spaPreserve: true,
          },
        ],
      };
    },
  };
};

export default Conll;
