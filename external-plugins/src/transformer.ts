
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

              const highlightDeps = new Set<string>();

              const content =
              rawContent
                .split(/\r?\n/)
                .map((line) => {
                  const cols = line.split("\t")
                  if (cols.length === 10) {
                    const misc = cols[9] || "_"
                    const match = misc.match (/highlight_dep=([A-Za-z]+)/i)
                    if (match) {
                      highlightDeps.add (`${cols[0]}:${match[1]}`)
                      let newMisc = misc
                        .replace(/highlight_dep=([A-Za-z]+)/i, "")
                        .replace(/^\|+|\|+$/g, "")  // Remove leading/trailing pipes
                        .replace(/\|\|/, "|")
                      newMisc = newMisc || "_";
                      return (cols.slice(0,-1).concat(newMisc).join("\t"))
                    }
                  }
                  return line;
                }).join("\n");


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
                      "MISC.highlight,MISC.SpaceAfter,XPOS,MISC.AlignBegin,MISC.WordAlignmentBegin,MISC.AlignEnd,MISC.WordAlignmentEnd,MISC.wordform,MISC.Cxn,MISC.CxnElt",
                    interactive: true,
                    "token-spacing": "20",
                    conll: content,
                    "highlight-deps": [...highlightDeps].join(","),
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
