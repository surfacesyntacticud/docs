// node_modules/unist-util-is/lib/index.js
var convert = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(test) {
    if (test === null || test === void 0) {
      return ok;
    }
    if (typeof test === "function") {
      return castFactory(test);
    }
    if (typeof test === "object") {
      return Array.isArray(test) ? anyFactory(test) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        propertiesFactory(
          /** @type {Props} */
          test
        )
      );
    }
    if (typeof test === "string") {
      return typeFactory(test);
    }
    throw new Error("Expected function, string, or object as test");
  })
);
function anyFactory(tests) {
  const checks = [];
  let index = -1;
  while (++index < tests.length) {
    checks[index] = convert(tests[index]);
  }
  return castFactory(any);
  function any(...parameters) {
    let index2 = -1;
    while (++index2 < checks.length) {
      if (checks[index2].apply(this, parameters)) return true;
    }
    return false;
  }
}
function propertiesFactory(check) {
  const checkAsRecord = (
    /** @type {Record<string, unknown>} */
    check
  );
  return castFactory(all);
  function all(node) {
    const nodeAsRecord = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      node
    );
    let key;
    for (key in check) {
      if (nodeAsRecord[key] !== checkAsRecord[key]) return false;
    }
    return true;
  }
}
function typeFactory(check) {
  return castFactory(type);
  function type(node) {
    return node && node.type === check;
  }
}
function castFactory(testFunction) {
  return check;
  function check(value, index, parent) {
    return Boolean(
      looksLikeANode(value) && testFunction.call(
        this,
        value,
        typeof index === "number" ? index : void 0,
        parent || void 0
      )
    );
  }
}
function ok() {
  return true;
}
function looksLikeANode(value) {
  return value !== null && typeof value === "object" && "type" in value;
}

// node_modules/unist-util-visit-parents/lib/color.node.js
function color(d) {
  return "\x1B[33m" + d + "\x1B[39m";
}

// node_modules/unist-util-visit-parents/lib/index.js
var empty = [];
var CONTINUE = true;
var EXIT = false;
var SKIP = "skip";
function visitParents(tree, test, visitor, reverse) {
  let check;
  if (typeof test === "function" && typeof visitor !== "function") {
    reverse = visitor;
    visitor = test;
  } else {
    check = test;
  }
  const is2 = convert(check);
  const step = reverse ? -1 : 1;
  factory(tree, void 0, [])();
  function factory(node, index, parents) {
    const value = (
      /** @type {Record<string, unknown>} */
      node && typeof node === "object" ? node : {}
    );
    if (typeof value.type === "string") {
      const name = (
        // `hast`
        typeof value.tagName === "string" ? value.tagName : (
          // `xast`
          typeof value.name === "string" ? value.name : void 0
        )
      );
      Object.defineProperty(visit2, "name", {
        value: "node (" + color(node.type + (name ? "<" + name + ">" : "")) + ")"
      });
    }
    return visit2;
    function visit2() {
      let result = empty;
      let subresult;
      let offset;
      let grandparents;
      if (!test || is2(node, index, parents[parents.length - 1] || void 0)) {
        result = toResult(visitor(node, parents));
        if (result[0] === EXIT) {
          return result;
        }
      }
      if ("children" in node && node.children) {
        const nodeAsParent = (
          /** @type {UnistParent} */
          node
        );
        if (nodeAsParent.children && result[0] !== SKIP) {
          offset = (reverse ? nodeAsParent.children.length : -1) + step;
          grandparents = parents.concat(nodeAsParent);
          while (offset > -1 && offset < nodeAsParent.children.length) {
            const child = nodeAsParent.children[offset];
            subresult = factory(child, offset, grandparents)();
            if (subresult[0] === EXIT) {
              return subresult;
            }
            offset = typeof subresult[1] === "number" ? subresult[1] : offset + step;
          }
        }
      }
      return result;
    }
  }
}
function toResult(value) {
  if (Array.isArray(value)) {
    return value;
  }
  if (typeof value === "number") {
    return [CONTINUE, value];
  }
  return value === null || value === void 0 ? empty : [value];
}

// node_modules/unist-util-visit/lib/index.js
function visit(tree, testOrVisitor, visitorOrReverse, maybeReverse) {
  let reverse;
  let test;
  let visitor;
  {
    test = testOrVisitor;
    visitor = visitorOrReverse;
    reverse = maybeReverse;
  }
  visitParents(tree, test, overload, reverse);
  function overload(node, parents) {
    const parent = parents[parents.length - 1];
    const index = parent ? parent.children.indexOf(node) : void 0;
    return visitor(node, index, parent);
  }
}

// src/transformer.ts
var Conll = () => {
  return {
    name: "Conll",
    htmlPlugins() {
      return [
        () => {
          return (tree) => {
            visit(tree, "element", (node) => {
              if (node.tagName !== "conll") return;
              const color2 = node.properties.deprecated === "yes" ? "rgb(255, 187, 187)" : node.properties.schema === "ud" ? "rgb(216, 198, 214)" : "#fdf8ed";
              const rawContent = node.children.filter(
                (child) => child.type === "text"
              ).map((child) => child.value).join("").trim();
              const highlightTokens = /* @__PURE__ */ new Set();
              const content = rawContent.split(/\r?\n/).filter((line) => {
                const match = line.match(
                  /^#\s*highlight_arcs?\s*=\s*(.+)$/i
                );
                if (!match) return true;
                for (const token of (match[1] ?? "").split(",")) {
                  const id = token.trim();
                  if (/^\d+$/.test(id)) {
                    highlightTokens.add(id);
                  }
                }
                return false;
              }).join("\n").trim();
              node.tagName = "div";
              node.properties = {
                style: `background-color: ${color2}; border-radius: 10px; padding: 10px; margin: 15px 0;`
              };
              node.children = [
                {
                  type: "element",
                  tagName: "reactive-dep-tree",
                  properties: {
                    "shown-metas": "lang,text_fr,text_en,pinyin,sent_id,schema",
                    "hidden-features": "MISC.highlight,MISC.SpaceAfter,XPOS,MISC.AlignBegin,MISC.AlignEnd,MISC.wordform,MISC.Cxn,MISC.CxnElt",
                    interactive: true,
                    "token-spacing": "20",
                    conll: content,
                    "data-highlight-tokens": [...highlightTokens].join(",")
                  },
                  children: []
                }
              ];
            });
          };
        }
      ];
    },
    externalResources() {
      return {
        css: [
          {
            content: "/static/css/prism.css",
            spaPreserve: true
          }
        ],
        js: [
          {
            src: "https://unpkg.com/reactive-dep-tree/dist/reactive-dep-tree.umd.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true
          },
          {
            src: "/static/js/prism.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true
          },
          {
            src: "/static/js/prism_grew.js",
            loadTime: "afterDOMReady",
            contentType: "external",
            spaPreserve: true
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
        "Arc s\xE9lectionn\xE9 :",
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
            spaPreserve: true
          },
          {
            script: `document.addEventListener("nav", () => { if (window.Prism) window.Prism.highlightAll(); })`,
            loadTime: "afterDOMReady",
            contentType: "inline",
            spaPreserve: true
          }
        ]
      };
    }
  };
};

export { Conll };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map