(function () {
  "use strict";

  const config = window.CivitaiChinese || {};
  const dictionary = config.dictionary || {};
  const textRules = config.textRules || [];
  const elementRules = config.elementRules || [];
  const injectLogoButton = config.injectLogoButton || function () {};
  const skippedSelector = [
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
  ].join(",");

  function normalizeText(text) {
    return text
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\s+/g, " ")
      .replace(/\u00a0/g, " ")
      .trim()
      .toLowerCase();
  }

  function getTranslation(text) {
    const normalized = normalizeText(text);

    if (dictionary[normalized]) {
      return dictionary[normalized];
    }

    for (const rule of textRules) {
      if (rule.pattern.test(normalized)) {
        const trimmed = text.trim();
        const translated = trimmed.replace(rule.pattern, rule.replace);

        return translated === trimmed ? normalized.replace(rule.pattern, rule.replace) : translated;
      }
    }

    return null;
  }

  function hasAncestorText(node, patterns) {
    let element = node.parentElement;
    let depth = 0;

    while (element && depth < 4) {
      const normalized = normalizeText(element.textContent);

      if (patterns.some((pattern) => pattern.test(normalized))) {
        return true;
      }

      element = element.parentElement;
      depth += 1;
    }

    return false;
  }

  function getContextualTranslation(node) {
    const normalized = normalizeText(node.nodeValue);
    const colorBuzzPattern = /^(get|获取) (blue|蓝色|yellow|黄色|green|绿色) buzz$/i;
    const colorBuzzDescriptionPattern =
      /^(multiple ways to get|通过多种方式获取) (blue|蓝色|yellow|黄色|green|绿色) buzz (and power your creativity|，助力你的创作)$/i;
    const creatorProgramValuePattern =
      /^(your|你的) [\d,.]+[km]? (could be worth|buzz 可能价值) \$[\d,.]+!?$/i;
    const creatorScorePattern =
      /^(your current|你当前的) (creator score|创作者评分) (is|是) [\d,.]+[km]?\.?$/i;
    const bankingPhasePattern = /^(banking|入库) (phase|阶段)$/i;
    const saveImageToCollectionPattern =
      /^(save|保存) (image|图片) (to|到) (collection|收藏集)$/i;
    const addToModelCollectionPattern = /^(add to|添加到) (model|模型) (collection|收藏集)$/i;

    if (normalized === "get" && hasAncestorText(node, [colorBuzzPattern])) {
      return "获取";
    }

    if (hasAncestorText(node, [colorBuzzDescriptionPattern])) {
      if (normalized === "multiple ways to get") {
        return "通过多种方式获取";
      }

      if (normalized === "buzz and power your creativity") {
        return "Buzz，助力你的创作";
      }

      if (normalized === "and power your creativity") {
        return "，助力你的创作";
      }
    }

    if (hasAncestorText(node, [creatorProgramValuePattern])) {
      if (normalized === "your") {
        return "你的";
      }

      if (normalized === "could be worth") {
        return "Buzz 可能价值";
      }
    }

    if (hasAncestorText(node, [creatorScorePattern])) {
      if (normalized === "your current") {
        return "你当前的";
      }

      const scoreMatch = normalized.match(/^is ([\d,.]+[km]?)\.?$/i);
      if (scoreMatch) {
        return `是 ${scoreMatch[1]}。`;
      }
    }

    if (hasAncestorText(node, [bankingPhasePattern])) {
      if (normalized === "banking") {
        return "入库";
      }

      if (normalized === "phase") {
        return "阶段";
      }
    }

    if (hasAncestorText(node, [saveImageToCollectionPattern])) {
      if (normalized === "image") {
        return "图片";
      }

      if (normalized === "to") {
        return "到";
      }

      if (normalized === "image to") {
        return "图片到";
      }

      if (normalized === "image to collection") {
        return "图片到收藏集";
      }
    }

    if (hasAncestorText(node, [addToModelCollectionPattern])) {
      if (normalized === "add to") {
        return "添加到";
      }

      if (normalized === "model") {
        return "模型";
      }

      if (normalized === "model collection") {
        return "模型收藏集";
      }
    }

    return null;
  }

  function injectStyle() {
    if (document.getElementById("civitai-cn-style")) return;

    const style = document.createElement("style");
    style.id = "civitai-cn-style";
    style.textContent = config.styleText || "";

    document.head.appendChild(style);
  }

  function shouldSkipElement(element) {
    if (!element) return true;

    return Boolean(element.closest(skippedSelector));
  }

  function shouldSkipTextNode(node) {
    return shouldSkipElement(node.parentElement);
  }

  function translateTextNode(node) {
    const rawText = node.nodeValue;
    const chinese = getContextualTranslation(node) || getTranslation(rawText);

    if (chinese) {
      const nextText = rawText.replace(rawText.trim(), chinese);

      if (nextText !== rawText) {
        node.nodeValue = nextText;
      }
    }
  }

  function translateAttributes(element) {
    const attrs = ["title", "aria-label", "placeholder"];

    attrs.forEach((attr) => {
      const value = element.getAttribute(attr);
      const chinese = value && getTranslation(value);

      if (chinese && chinese !== value) {
        element.setAttribute(attr, chinese);
      }
    });
  }

  function translateElementRules(element) {
    const rawText = element.textContent;
    const normalized = normalizeText(rawText);

    for (const rule of elementRules) {
      const match = normalized.match(rule.pattern);
      if (!match) continue;

      const hasMatchingChild = Array.from(element.children).some((child) =>
        rule.pattern.test(normalizeText(child.textContent)),
      );

      if (hasMatchingChild) return;

      const nextText = rule.replace(match);

      if (nextText !== rawText) {
        element.textContent = nextText;
      }

      return;
    }
  }

  function translateSelectDisplay(element) {
    if (element.tagName !== "INPUT") return;
    if (!element.readOnly) return;
    if (!element.value) return;

    const chinese = getTranslation(element.value);
    if (!chinese) return;

    const wrapper = element.closest(".mantine-Input-wrapper");
    if (!wrapper) return;

    wrapper.classList.add("civitai-cn-select-wrapper");
    if (wrapper.dataset.civitaiCnText !== chinese) {
      wrapper.dataset.civitaiCnText = chinese;
    }
    element.classList.add("civitai-cn-hidden-input-text");
  }

  function translateTextNodes(root) {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        if (shouldSkipTextNode(node)) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    });

    let node;

    while ((node = walker.nextNode())) {
      translateTextNode(node);
    }
  }

  function translateElement(element) {
    if (shouldSkipElement(element)) return;

    translateAttributes(element);
    translateElementRules(element);
    translateSelectDisplay(element);
  }

  function translateElementTree(root) {
    if (shouldSkipElement(root)) return;

    translateElement(root);
    root.querySelectorAll("*").forEach(translateElement);
  }

  function translateRoot(root) {
    if (!root) return;

    if (root.nodeType === Node.TEXT_NODE) {
      if (!shouldSkipTextNode(root)) {
        translateTextNode(root);
      }

      return;
    }

    if (root.nodeType !== Node.ELEMENT_NODE) return;
    if (shouldSkipElement(root)) return;

    translateTextNodes(root);
    translateElementTree(root);
  }

  function translatePage() {
    injectStyle();
    injectLogoButton();
    translateRoot(document.body);
  }

  const pendingRoots = new Set();
  let translateTimer = null;

  function queueTranslateRoot(root) {
    if (!root) return;

    if (root.nodeType === Node.DOCUMENT_NODE) {
      pendingRoots.add(document.body);
      return;
    }

    if (root.nodeType === Node.TEXT_NODE && shouldSkipTextNode(root)) return;
    if (root.nodeType === Node.ELEMENT_NODE && shouldSkipElement(root)) return;

    pendingRoots.add(root);
  }

  function scheduleTranslate() {
    if (translateTimer) return;

    translateTimer = setTimeout(() => {
      translateTimer = null;

      injectStyle();
      injectLogoButton();

      const roots = Array.from(pendingRoots);
      pendingRoots.clear();
      roots.forEach(translateRoot);
    }, 100);
  }

  translatePage();

  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach(queueTranslateRoot);
        continue;
      }

      queueTranslateRoot(mutation.target);
    }

    scheduleTranslate();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["value", "placeholder", "title", "aria-label"],
  });

  const themeObserver = new MutationObserver(scheduleTranslate);

  themeObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-mantine-color-scheme", "class"],
  });
})();
