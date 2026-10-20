
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
            script: `
(() => {
  const watched = new WeakMap();

  function highlightTree(tree) {
    const root = tree.shadowRoot;
    if (!root) return;

    const svg = root.querySelector("svg.svg-tree");

    if (!svg) {
      if (!watched.has(tree)) {
        const observer = new MutationObserver(() => {
          highlightTree(tree);
        });

        observer.observe(root, {
          childList: true,
          subtree: true,
        });

        watched.set(tree, observer);
      }

      return;
    }

    const requested = new Set(
      (tree.getAttribute("data-highlight-tokens") || "")
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean),
    );

    const curves = svg.querySelectorAll("path.curve");
    const arrows = svg.querySelectorAll("path.arrowhead");

    // Remove highlighting left by a previous render.
    curves.forEach((curve) => {
      curve.style.removeProperty("stroke");
      curve.style.removeProperty("stroke-width");
    });

    arrows.forEach((arrow) => {
      arrow.style.removeProperty("fill");
      arrow.style.removeProperty("stroke");
    });

    if (requested.size === 0) return;

    const conll = tree.getAttribute("conll") || "";
    const dependencies = [];

    for (const line of conll.split(/\\r?\\n/)) {
      if (!line.trim() || line.startsWith("#")) continue;

      const fields = line.trim().split(/\\s+/);
      const id = fields[0];
      const head = fields[6];

      // Keep every integer token, including root tokens (HEAD = 0).
      // Ignore multiword tokens and empty nodes.
      if (!/^\\d+$/.test(id) || !/^\\d+$/.test(head)) continue;

      dependencies.push({ dependent: id, head });
    }

    dependencies.forEach(({ dependent, head }, tokenIndex) => {
      if (!requested.has(dependent)) return;

      // Curves follow token order, including root arcs.
      const curve = curves[tokenIndex];
      const arrow = arrows[tokenIndex];

      console.log(
        "Arc sélectionné :",
        head === "0" ? "racine -> " + dependent : head + " -> " + dependent,
      );

      if (curve) {
        curve.style.setProperty("stroke", "red", "important");
        curve.style.setProperty("stroke-width", "2.5", "important");
      }

      if (arrow) {
        arrow.style.setProperty("fill", "red", "important");
        arrow.style.setProperty("stroke", "red", "important");
      }
    });
  }

  function scan() {
    document
      .querySelectorAll("reactive-dep-tree")
      .forEach(highlightTree);
  }

  const observer = new MutationObserver(scan);

  function start() {
    if (document.documentElement) {
      observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
      });
    }

    scan();
  }

  document.addEventListener("nav", scan);
  start();
})();
`,
            loadTime: "afterDOMReady",
            contentType: "inline",
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
