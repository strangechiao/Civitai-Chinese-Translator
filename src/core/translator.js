(function () {
  "use strict";

  const CCT = window.CCT;
  const STORAGE_KEY = "CCT_TRANSLATION_ENABLED";
  const baseIgnore = [
    "script",
    "style",
    "textarea",
    "template",
    "noscript",
    "svg",
    "math",
    "code",
    "pre",
    "[type='application/json']",
    "[type='application/ld+json']",
    "#__NEXT_DATA__",
    ".cct-ignore",
  ];

  let activeRules = null;
  let staticMap = null;
  let foldedStaticMap = null;
  let ignoreSelector = baseIgnore.join(",");

  function isTranslationEnabled() {
    return localStorage.getItem(STORAGE_KEY) !== "false";
  }

  function setTranslationEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, enabled ? "true" : "false");
  }

  function refreshRules() {
    activeRules = CCT.getActiveRules();
    staticMap = new Map();
    foldedStaticMap = new Map();

    Object.entries(activeRules.static || {}).forEach(([source, target]) => {
      const normalized = CCT.normalizeText(source);
      const folded = CCT.foldText(source);
      staticMap.set(normalized, target);

      if (!foldedStaticMap.has(folded)) {
        foldedStaticMap.set(folded, target);
      } else if (foldedStaticMap.get(folded) !== target) {
        foldedStaticMap.set(folded, null);
      }
    });

    ignoreSelector = [...baseIgnore, ...(activeRules.ignore || [])].join(",");
  }

  function shouldSkipElement(element) {
    if (!element) return true;
    return Boolean(element.closest(ignoreSelector));
  }

  function shouldSkipTextNode(node) {
    return shouldSkipElement(node.parentElement);
  }

  function getTranslation(text) {
    const normalized = CCT.normalizeText(text);
    if (!normalized) return null;

    if (staticMap.has(normalized)) {
      return staticMap.get(normalized);
    }

    const folded = CCT.foldText(normalized);
    if (foldedStaticMap.has(folded) && foldedStaticMap.get(folded) !== null) {
      return foldedStaticMap.get(folded);
    }

    for (const rule of activeRules.regexp || []) {
      const match = normalized.match(rule.pattern);
      if (!match) continue;

      if (typeof rule.replace === "function") {
        return rule.replace(match, text);
      }

      return normalized.replace(rule.pattern, rule.replace);
    }

    return null;
  }

  function translateTextNode(node) {
    const rawText = node.nodeValue;
    const trimmed = rawText.trim();
    if (!trimmed) return;

    const translated = getTranslation(trimmed);
    if (!translated) return;

    const nextText = rawText.replace(trimmed, translated);
    if (nextText !== rawText) {
      node.nodeValue = nextText;
    }
  }

  function translateAttributes(element) {
    ["title", "aria-label", "placeholder"].forEach((attr) => {
      const value = element.getAttribute(attr);
      if (!value) return;

      const translated = getTranslation(value);
      if (translated && translated !== value) {
        element.setAttribute(attr, translated);
      }
    });
  }

  function translateSelectorRules(root) {
    for (const rule of activeRules.selector || []) {
      const elements = root.matches && root.matches(rule.selector)
        ? [root]
        : Array.from(root.querySelectorAll ? root.querySelectorAll(rule.selector) : []);

      elements.forEach((element) => {
        const target = rule.closest ? element.closest(rule.closest) : element;
        if (!target || shouldSkipElement(target)) return;

        const textElement = rule.textSelector ? target.querySelector(rule.textSelector) : target;
        if (!textElement) return;

        if (rule.textReplacements) {
          const walker = document.createTreeWalker(textElement, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
              return shouldSkipTextNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
            },
          });
          let textNode;

          while ((textNode = walker.nextNode())) {
            let nextText = textNode.nodeValue;
            rule.textReplacements.forEach((replacement) => {
              nextText = nextText.replace(replacement.pattern, replacement.replace);
            });
            if (nextText !== textNode.nodeValue) textNode.nodeValue = nextText;
          }
          return;
        }

        if (rule.source && CCT.normalizeText(textElement.textContent) !== CCT.normalizeText(rule.source)) {
          return;
        }

        if (rule.attr) {
          if (textElement.getAttribute(rule.attr) !== rule.text) {
            textElement.setAttribute(rule.attr, rule.text);
          }
          return;
        }

        if (textElement.children.length === 0 && textElement.textContent.trim() !== rule.text) {
          textElement.textContent = rule.text;
        }
      });
    }
  }

  function translateSelectValueRules(root) {
    for (const rule of activeRules.selectValue || []) {
      const elements = root.matches && root.matches(rule.selector)
        ? [root]
        : Array.from(root.querySelectorAll ? root.querySelectorAll(rule.selector) : []);

      elements.forEach((element) => {
        if (shouldSkipElement(element)) return;
        if (!element.value) return;

        const expectedValue = rule.value ? CCT.normalizeText(rule.value) : null;
        if (expectedValue && CCT.normalizeText(element.value) !== expectedValue) return;

        const wrapper = element.closest(".mantine-Input-wrapper") || element.parentElement;
        if (!wrapper) return;

        wrapper.classList.add("cct-select-value-wrapper");
        wrapper.dataset.cctText = rule.text;
        element.classList.add("cct-hidden-input-text");
      });
    }
  }

  function translateTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return shouldSkipTextNode(node) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      },
    });

    let node;
    while ((node = walker.nextNode())) {
      translateTextNode(node);
    }
  }

  function translateSplitTextElements(root, elements) {
    const textNodesByElement = new Map();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (shouldSkipTextNode(node) || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });
    let node;

    while ((node = walker.nextNode())) {
      let element = node.parentElement;

      while (element) {
        const textNodes = textNodesByElement.get(element) || [];
        textNodes.push(node);
        textNodesByElement.set(element, textNodes);
        if (element === root) break;
        element = element.parentElement;
      }
    }

    [...elements].reverse().forEach((element) => {
      const textNodes = textNodesByElement.get(element) || [];
      if (textNodes.length < 2) return;

      const combinedText = textNodes.map((textNode) => textNode.nodeValue.trim()).join(" ");
      const translated = getTranslation(combinedText);
      if (!translated) return;

      const firstNode = textNodes[0];
      const firstText = firstNode.nodeValue.trim();
      firstNode.nodeValue = firstNode.nodeValue.replace(firstText, translated);
      textNodes.slice(1).forEach((textNode) => {
        textNode.nodeValue = "";
      });
    });
  }

  function translateElementTree(root) {
    if (root.nodeType !== Node.ELEMENT_NODE || shouldSkipElement(root)) return;

    const elements = [root, ...root.querySelectorAll("*")];
    elements.forEach((element) => {
      if (!shouldSkipElement(element)) {
        translateAttributes(element);
      }
    });

    translateSelectorRules(root);
    translateSplitTextElements(root, elements);
    translateTextNodes(root);
    translateSelectValueRules(root);
  }

  function translateRoot(root) {
    if (!root || !isTranslationEnabled()) return;

    if (root.nodeType === Node.TEXT_NODE) {
      if (!shouldSkipTextNode(root)) {
        translateTextNode(root);
      }
      return;
    }

    translateElementTree(root);
  }

  function createTranslator() {
    const pendingRoots = new Set();
    let timer = null;
    let currentPage = CCT.getCurrentPage();

    function isIgnoredMutationNode(node) {
      const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
      return Boolean(element && element.closest(".cct-ignore"));
    }

    function schedule(root) {
      if (root) {
        const existingRoots = Array.from(pendingRoots);
        const isCovered = existingRoots.some((existing) => existing === root || (existing.contains && existing.contains(root)));

        if (!isCovered) {
          existingRoots.forEach((existing) => {
            if (root.contains && root.contains(existing)) pendingRoots.delete(existing);
          });
          pendingRoots.add(root);
        }
      }
      if (timer) return;

      timer = setTimeout(() => {
        timer = null;
        const roots = Array.from(pendingRoots);
        pendingRoots.clear();
        const nextPage = CCT.getCurrentPage();
        const pageChanged = nextPage !== currentPage;
        const featureRoots = pageChanged ? [document.body] : roots;

        featureRoots.forEach((root) => {
          CCT.applyAdBlocking && CCT.applyAdBlocking(root);
          CCT.injectOriginalDownloadButtons && CCT.injectOriginalDownloadButtons(root);
        });
        CCT.injectLogo && CCT.injectLogo();
        CCT.injectModelSidebarToggle && CCT.injectModelSidebarToggle();
        CCT.injectModelVersionDropdown && CCT.injectModelVersionDropdown();

        if (pageChanged) {
          currentPage = nextPage;
          refreshRules();
          translateRoot(document.body);
          return;
        }

        roots.forEach(translateRoot);
      }, 100);
    }

    function start() {
      refreshRules();
      translateRoot(document.body);

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (isIgnoredMutationNode(mutation.target)) return;

          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => {
              if (!isIgnoredMutationNode(node)) schedule(node);
            });
            return;
          }

          schedule(mutation.target);
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ["title", "aria-label", "placeholder", "aria-expanded"],
      });
    }

    return { start };
  }

  CCT.createTranslator = createTranslator;
  CCT.isTranslationEnabled = isTranslationEnabled;
  CCT.setTranslationEnabled = setTranslationEnabled;
})();
