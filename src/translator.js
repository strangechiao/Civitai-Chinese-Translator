(function () {
  "use strict";

  const config = window.CivitaiChinese || {};
  const dictionary = config.dictionary || {};
  const textRules = config.textRules || [];
  const elementRules = config.elementRules || [];
  const injectLogoButton = config.injectLogoButton || function () {};

  function normalizeText(text) {
    return text
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

    return null;
  }

  function injectStyle() {
    if (document.getElementById("civitai-cn-style")) return;

    const style = document.createElement("style");
    style.id = "civitai-cn-style";
    style.textContent = config.styleText || "";

    document.head.appendChild(style);
  }

  function translateTextNode(node) {
    const rawText = node.nodeValue;
    const chinese = getContextualTranslation(node) || getTranslation(rawText);

    if (chinese) {
      node.nodeValue = rawText.replace(rawText.trim(), chinese);
    }
  }

  function translateAttributes(element) {
    const attrs = ["title", "aria-label", "placeholder"];

    attrs.forEach((attr) => {
      const value = element.getAttribute(attr);
      const chinese = value && getTranslation(value);

      if (chinese) {
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

      element.textContent = rule.replace(match);
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
    wrapper.dataset.civitaiCnText = chinese;
    element.classList.add("civitai-cn-hidden-input-text");
  }

  function translatePage() {
    injectStyle();
    injectLogoButton();

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;

        const tagName = parent.tagName.toLowerCase();

        if (["script", "style", "textarea"].includes(tagName)) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    });

    let node;

    while ((node = walker.nextNode())) {
      translateTextNode(node);
    }

    document.querySelectorAll("*").forEach((element) => {
      translateAttributes(element);
      translateElementRules(element);
      translateSelectDisplay(element);
    });
  }

  let translateTimer = null;

  function scheduleTranslate() {
    if (translateTimer) return;

    translateTimer = setTimeout(() => {
      translateTimer = null;
      translatePage();
    }, 100);
  }

  translatePage();

  const observer = new MutationObserver(scheduleTranslate);

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["value", "placeholder", "title", "aria-label"],
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-mantine-color-scheme", "class"],
  });
})();
