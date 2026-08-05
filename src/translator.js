(function () {
  "use strict";

  const config = window.CivitaiChinese || {};
  const dictionary = config.dictionary || {};
  const textRules = config.textRules || [];
  const elementRules = config.elementRules || [];

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
        return normalized.replace(rule.pattern, rule.replace);
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
    const chinese = getTranslation(rawText);

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
})();
