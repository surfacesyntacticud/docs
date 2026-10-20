
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
    
    const colored_arcs = {};
    const highlight_arcs = tree.getAttribute("highlight-deps")
    if (highlight_arcs) {
      const pairs = highlight_arcs.split(',');
      pairs.forEach(pair => {
        const [key, color] = pair.split(':');
        colored_arcs[parseInt(key)] = color;
      });
    }
    const curves = svg.querySelectorAll("path.curve");
    const arrows = svg.querySelectorAll("path.arrowhead");

    const conll = tree.getAttribute("conll") || "";
    const dependencies = [];

    for (const line of conll.split(/\r?\n/)) {
      if (!line.trim() || line.startsWith("#")) continue;

      const fields = line.trim().split(/\s+/);
      const id = fields[0];
      const head = fields[6];

      // Keep every integer token, including root tokens (HEAD = 0).
      // Ignore multiword tokens and empty nodes.
      if (!/^\d+$/.test(id) || !/^\d+$/.test(head)) continue;

      dependencies.push({ dependent: id, head });
    }

    dependencies.forEach(({ dependent, head }, tokenIndex) => {
      if (!(dependent in colored_arcs)) return;
      const color = colored_arcs[dependent];

      // Curves follow token order, including root arcs.
      const curve = curves[tokenIndex];
      const arrow = arrows[tokenIndex];

      if (curve) {
        curve.style.setProperty("stroke", color);
        curve.style.setProperty("stroke-width", "2");
      }

      if (arrow) {
        arrow.style.setProperty("fill", color);
        arrow.style.setProperty("stroke", color);
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