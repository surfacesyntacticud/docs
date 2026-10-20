
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