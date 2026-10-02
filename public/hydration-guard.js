(() => {
  const isInjected = (name) => name === "bis_skin_checked" || name === "bis_register" || /^__processed_[a-f0-9-]+__$/.test(name);
  const clean = (element) => {
    for (const attribute of Array.from(element.attributes)) {
      if (isInjected(attribute.name)) element.removeAttribute(attribute.name);
    }
  };
  const cleanTree = (node) => {
    if (!(node instanceof Element)) return;
    clean(node);
    node.querySelectorAll("*").forEach(clean);
  };
  cleanTree(document.documentElement);
  const observer = new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === "attributes") {
        if (isInjected(record.attributeName || "")) clean(record.target);
      } else record.addedNodes.forEach(cleanTree);
    }
  });
  observer.observe(document.documentElement, { subtree: true, childList: true, attributes: true });
  // Stop as soon as the app mounts; no permanent document-wide observer.
  window.__stopPortfolioHydrationGuard = () => {
    observer.disconnect();
    delete window.__stopPortfolioHydrationGuard;
  };
  setTimeout(() => window.__stopPortfolioHydrationGuard?.(), 10000);
})();
