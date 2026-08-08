// ==UserScript==
// @name         CCT 中文增强插件
// @namespace    https://civitai.com/
// @version      0.3.1
// @description  汉化（中文化、本地化、翻译）Civitai / Civitai.red 页面的 Tampermonkey 脚本。
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/strangechiao/Civitai-Chinese-Translator
// @supportURL   https://github.com/strangechiao/Civitai-Chinese-Translator/issues
// @updateURL    https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator/main/civitai-chinese-translator.user.js
// @downloadURL  https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator/main/civitai-chinese-translator.user.js
// @icon         data:image/png;base64,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
// @iconURL      data:image/png;base64,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
// @icon64       data:image/png;base64,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
// @match        https://civitai.com/*
// @match        https://www.civitai.com/*
// @match        https://civitai.red/*
// @match        https://www.civitai.red/*
// @match        https://auth.civitai.com/*
// @grant        GM_download
// @connect      image.civitai.com
// @connect      imagecache.civitai.com
// @connect      image-b2.civitai.com
// ==/UserScript==

(function () {
  "use strict";

  window.CCT = window.CCT || {};
  window.CCT.meta = window.CCT.meta || {};
  window.CCT.meta.version = "0.3.1";
  window.CCT.meta.updateUrl = "https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator/main/civitai-chinese-translator.user.js";
  window.CCT.meta.supportUrl = "https://github.com/strangechiao/Civitai-Chinese-Translator/issues";
  window.CCT.assets = window.CCT.assets || {};
  window.CCT.assets.logoSvg = "<svg width=\"182\" height=\"103\" viewBox=\"0 0 182 103\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"152\" height=\"103\" rx=\"5\" fill=\"white\"/>\n<rect x=\"1\" y=\"1\" width=\"150\" height=\"101\" rx=\"5\" fill=\"#414141\"/>\n<rect x=\"6\" y=\"6\" width=\"140\" height=\"91\" fill=\"white\"/>\n<rect x=\"11\" y=\"11\" width=\"130\" height=\"81\" fill=\"#414141\"/>\n<rect x=\"151\" y=\"5\" width=\"4\" height=\"21\" fill=\"white\"/>\n<rect x=\"151\" y=\"6\" width=\"3\" height=\"19\" fill=\"#414141\"/>\n<rect x=\"56\" y=\"10\" width=\"82\" height=\"6\" transform=\"rotate(90 56 10)\" fill=\"white\"/>\n<rect x=\"101\" y=\"11\" width=\"82\" height=\"6\" transform=\"rotate(90 101 11)\" fill=\"white\"/>\n<path d=\"M48 87.75L42.333 92H30.666L36.333 87.75H13V79H48V87.75ZM75.5 84C81.6628 84 87.0813 87.1857 90.1992 92H60.8008C63.9187 87.1857 69.3372 84 75.5 84ZM120.5 90.666L129.25 79H138L128.25 92H112.75L103 79H111.75L120.5 90.666ZM68.8027 40.332C72.0004 39.0075 75.5194 38.6607 78.9141 39.3359C82.3087 40.0112 85.4266 41.6786 87.874 44.126L81.6875 50.3125C80.4638 49.0888 78.9044 48.2556 77.207 47.918C75.5097 47.5804 73.7502 47.7538 72.1514 48.416C70.5526 49.0783 69.186 50.1998 68.2246 51.6387C67.2631 53.0776 66.75 54.7694 66.75 56.5C66.75 58.2306 67.2631 59.9224 68.2246 61.3613C69.186 62.8002 70.5526 63.9217 72.1514 64.584C73.7502 65.2462 75.5097 65.4196 77.207 65.082C78.9044 64.7444 80.4638 63.9112 81.6875 62.6875L87.874 68.874C85.4266 71.3214 82.3087 72.9888 78.9141 73.6641C75.5194 74.3393 72.0004 73.9925 68.8027 72.668C65.6052 71.3434 62.8721 69.1004 60.9492 66.2227C59.0263 63.3448 58 59.9612 58 56.5C58 53.0388 59.0263 49.6552 60.9492 46.7773C62.8721 43.8996 65.6052 41.6566 68.8027 40.332ZM138 42.75H124.699L124.698 69H115.949V42.75H103V34H138V42.75ZM23.8027 35.332C27.0004 34.0075 30.5194 33.6607 33.9141 34.3359C37.3087 35.0112 40.4266 36.6786 42.874 39.126L36.6875 45.3125C35.4638 44.0888 33.9044 43.2556 32.207 42.918C30.5097 42.5804 28.7502 42.7538 27.1514 43.416C25.5526 44.0783 24.186 45.1998 23.2246 46.6387C22.2631 48.0776 21.75 49.7694 21.75 51.5C21.75 53.2306 22.2631 54.9224 23.2246 56.3613C24.186 57.8002 25.5526 58.9217 27.1514 59.584C28.7502 60.2462 30.5097 60.4196 32.207 60.082C33.9044 59.7444 35.4638 58.9112 36.6875 57.6875L42.874 63.874C40.4266 66.3214 37.3087 67.9888 33.9141 68.6641C30.5194 69.3393 27.0004 68.9925 23.8027 67.668C20.6052 66.3434 17.8721 64.1004 15.9492 61.2227C14.0263 58.3448 13 54.9612 13 51.5C13 48.0388 14.0263 44.6552 15.9492 41.7773C17.8721 38.8996 20.6052 36.6566 23.8027 35.332ZM66.75 29H58V11H66.75V29ZM84.25 17.333V11H93V29H84.25L70.75 11H79.5L84.25 17.333ZM48 24H40.3438L37.2676 13.0625H23.7324L20.6562 24H13L16.6562 11H44.3438L48 24ZM111.75 15.25H138V24H103V11H111.75V15.25Z\" fill=\"white\"/>\n<path d=\"M166 12C169.314 12 172 14.6863 172 18L172 73L166 73L166 12V12Z\" fill=\"white\"/>\n<rect x=\"165\" y=\"18\" width=\"1\" height=\"55\" fill=\"white\"/>\n<circle cx=\"168.5\" cy=\"84.5\" r=\"13.5\" fill=\"white\"/>\n<path d=\"M166 13C168.761 13 171 15.2386 171 18L171 73L166 73L166 13V13Z\" fill=\"#D9D9D9\"/>\n<circle cx=\"168.5\" cy=\"84.5\" r=\"12.5\" fill=\"#E03131\"/>\n<rect x=\"154\" y=\"8\" width=\"3\" height=\"15\" fill=\"white\"/>\n<rect x=\"154\" y=\"9\" width=\"2\" height=\"13\" fill=\"#D9D9D9\"/>\n<rect x=\"157\" y=\"12\" width=\"9\" height=\"7\" fill=\"white\"/>\n<rect x=\"154\" y=\"13\" width=\"12\" height=\"5\" fill=\"#D9D9D9\"/>\n<path d=\"M177.95 84.5C178.53 84.5 179.005 84.0287 178.948 83.4517C178.845 82.4325 178.594 81.4317 178.201 80.4818C177.673 79.2079 176.9 78.0504 175.925 77.0754C174.95 76.1004 173.792 75.3269 172.518 74.7993C171.568 74.4058 170.568 74.1547 169.548 74.0525C168.971 73.9946 168.5 74.4701 168.5 75.05C168.5 75.6299 168.972 76.0932 169.547 76.1655C170.291 76.2589 171.02 76.4515 171.715 76.7394C172.734 77.1616 173.66 77.7803 174.44 78.5603C175.22 79.3403 175.838 80.2663 176.261 81.2855C176.548 81.9804 176.741 82.7095 176.834 83.4527C176.907 84.0281 177.37 84.5 177.95 84.5Z\" fill=\"white\"/>\n</svg>";
  window.CCT.assets.icons = {"bug":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-bug-icon lucide-bug\"><path d=\"M12 20v-9\"/><path d=\"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z\"/><path d=\"M14.12 3.88 16 2\"/><path d=\"M21 21a4 4 0 0 0-3.81-4\"/><path d=\"M21 5a4 4 0 0 1-3.55 3.97\"/><path d=\"M22 13h-4\"/><path d=\"M3 21a4 4 0 0 1 3.81-4\"/><path d=\"M3 5a4 4 0 0 0 3.55 3.97\"/><path d=\"M6 13H2\"/><path d=\"m8 2 1.88 1.88\"/><path d=\"M9 7.13V6a3 3 0 1 1 6 0v1.13\"/></svg>","contact":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-mail-icon lucide-mail\"><path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"/><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/></svg>","download":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-folder-down-icon lucide-folder-down\"><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/><path d=\"M12 10v6\"/><path d=\"m15 13-3 3-3-3\"/></svg>","originalDownload":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-cloud-download-icon lucide-cloud-download\"><path d=\"M12 13v8l-4-4\"/><path d=\"m12 21 4-4\"/><path d=\"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284\"/></svg>","external":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right\"><path d=\"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6\"/><path d=\"m21 3-9 9\"/><path d=\"M15 3h6v6\"/></svg>","question":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-circle-question-mark-icon lucide-circle-question-mark\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/></svg>"};
})();

(function () {
  "use strict";

  window.CCT = window.CCT || {};
  window.CCT.rules = window.CCT.rules || {
    common: [],
    layouts: {},
    pages: {},
  };
})();

(function () {
  "use strict";

  const CCT = window.CCT;

  function normalizeText(text) {
    return String(text || "")
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\u00a0/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  CCT.normalizeText = normalizeText;
})();

(function () {
  "use strict";

  const CCT = window.CCT;

  function getPathname() {
    return window.location.pathname.replace(/\/+$/, "") || "/";
  }

  function getCurrentPage() {
    const pathname = getPathname();

    if (pathname === "/") return "home";
    if (/^\/models\/\d+/i.test(pathname)) return "modelDetail";
    if (/^\/images\/\d+/i.test(pathname)) return "imageDetail";
    if (/^\/user\/[^/]+/i.test(pathname)) return "userProfile";
    if (/^\/(?:buzz|buzz-dashboard|purchase\/buzz)/i.test(pathname)) return "buzz";
    if (/^\/generate/i.test(pathname)) return "generation";

    return "unknown";
  }

  CCT.getCurrentPage = getCurrentPage;
})();

(function () {
  "use strict";

  const CCT = window.CCT;

  function createRuleEntry(options) {
    const entry = Object.assign(
      {
        static: {},
        regexp: [],
        selector: [],
        selectValue: [],
        ignore: [],
      },
      options.rules || {},
    );

    entry.type = options.type;
    entry.name = options.name || "global";
    entry.component = options.component || "index";

    return entry;
  }

  function registerRules(options) {
    const entry = createRuleEntry(options || {});

    if (entry.type === "common") {
      CCT.rules.common.push(entry);
      return;
    }

    if (entry.type === "layout") {
      CCT.rules.layouts[entry.name] = CCT.rules.layouts[entry.name] || [];
      CCT.rules.layouts[entry.name].push(entry);
      return;
    }

    if (entry.type === "page") {
      CCT.rules.pages[entry.name] = CCT.rules.pages[entry.name] || [];
      CCT.rules.pages[entry.name].push(entry);
    }
  }

  function mergeRules(ruleGroups) {
    const merged = {
      static: {},
      regexp: [],
      selector: [],
      selectValue: [],
      ignore: [],
    };

    ruleGroups.forEach((group) => {
      Object.assign(merged.static, group.static || {});
      merged.regexp.push(...(group.regexp || []));
      merged.selector.push(...(group.selector || []));
      merged.selectValue.push(...(group.selectValue || []));
      merged.ignore.push(...(group.ignore || []));
    });

    return merged;
  }

  function getActiveRules() {
    const page = CCT.getCurrentPage();
    const layoutRules = Object.values(CCT.rules.layouts).flat();
    const pageRules = CCT.rules.pages[page] || [];

    return mergeRules([...CCT.rules.common, ...layoutRules, ...pageRules]);
  }

  CCT.registerRules = registerRules;
  CCT.getActiveRules = getActiveRules;
})();

(function () {
  "use strict";

  const CCT = window.CCT;

  CCT.styleText = `
    .cct-logo-root {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--cct-logo-height, 32px);
      max-width: 160px;
      line-height: 0;
      flex: 0 0 auto;
    }

    .cct-logo-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0;
      border: 0;
      background: transparent;
      color: inherit;
      line-height: 0;
      cursor: pointer;
    }

    .cct-logo-root svg,
    .cct-logo-root img {
      display: block;
      width: auto;
      height: 100%;
    }

    .cct-logo-menu {
      position: fixed;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 220px;
      padding: 12px;
      border: 1px solid #373A40;
      border-radius: var(--mantine-radius-sm, 4px);
      background: #25262B;
      box-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.35));
      color: var(--mantine-color-gray-2, #e9ecef);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-4px) scale(0.96);
      transform-origin: top left;
      transition: transform 180ms ease, opacity 180ms ease;
    }

    .cct-logo-menu[hidden] {
      display: none !important;
    }

    .cct-logo-menu[data-open="true"] {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0) scale(1);
    }

    .cct-logo-menu-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      color: var(--mantine-color-gray-1, #f1f3f5);
      font-size: var(--mantine-font-size-sm);
      font-weight: 700;
      line-height: var(--mantine-line-height-sm);
    }

    .cct-logo-menu-version {
      align-self: flex-end;
      color: #F59F00;
      font-size: var(--mantine-font-size-sm);
      font-weight: 600;
      line-height: var(--mantine-line-height-xs);
      white-space: nowrap;
    }

    .cct-logo-menu-divider {
      height: 1px;
      margin: 2px 0;
      background: var(--mantine-color-dark-4, #373a40);
    }

    .cct-logo-menu-check {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: var(--button-height-sm, calc(2.25rem * var(--mantine-scale)));
      padding-inline: var(--button-padding-x-sm, calc(1.125rem * var(--mantine-scale)));
      border: var(--button-bd, calc(0.0625rem * var(--mantine-scale)) solid transparent);
      border-color: rgba(34, 139, 230, 0.3);
      border-radius: var(--button-radius, var(--mantine-radius-default));
      background: var(--button-bg, var(--mantine-color-blue-light));
      background-color: rgba(34, 139, 230, 0.15);
      color: var(--button-color, var(--mantine-color-blue-light-color));
      font-family: var(--mantine-font-family);
      font-size: var(--button-fz, var(--mantine-font-size-sm));
      font-weight: 600;
      line-height: 1;
      text-align: center;
      vertical-align: middle;
      user-select: none;
      cursor: pointer;
    }

    .cct-logo-menu-check:hover {
      background: var(--button-hover, var(--mantine-color-blue-light-hover));
    }

    .cct-logo-menu-check:disabled {
      cursor: default;
      opacity: 0.65;
    }

    .cct-logo-menu-check[data-state="available"] {
      color: var(--mantine-color-green-text, #51cf66);
    }

    .cct-logo-menu-check[data-state="error"] {
      color: var(--mantine-color-red-text, #ff6b6b);
    }

    .cct-logo-menu-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 6px 4px;
      border-radius: var(--mantine-radius-sm, 4px);
      color: var(--mantine-color-gray-2, #e9ecef);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      text-decoration: none;
    }

    .cct-logo-menu-toggle {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      width: 100%;
      padding: 6px 4px;
      border: 0;
      border-radius: var(--mantine-radius-sm, 4px);
      background: transparent;
      color: var(--mantine-color-gray-2, #e9ecef);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      text-align: left;
      cursor: pointer;
    }

    .cct-logo-menu-toggle:hover {
      background: var(--mantine-color-dark-5, #2c2e33);
    }

    .cct-logo-menu-link-main {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .cct-logo-menu-toggle-right {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      flex: 0 0 auto;
    }

    .cct-logo-menu-help {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      color: var(--mantine-color-dimmed);
      line-height: 1;
    }

    .cct-logo-menu-help .cct-logo-menu-icon {
      width: 14px;
      height: 14px;
    }

    .cct-logo-menu-switch {
      position: relative;
      display: inline-flex;
      width: 32px;
      height: 18px;
      border-radius: 999px;
      background: var(--mantine-color-dark-4, #373a40);
      transition: background-color 120ms ease;
    }

    .cct-logo-menu-switch::after {
      content: "";
      position: absolute;
      left: 2px;
      top: 2px;
      width: 14px;
      height: 14px;
      border-radius: 999px;
      background: var(--mantine-color-gray-1, #f1f3f5);
      transition: transform 120ms ease;
    }

    .cct-logo-menu-toggle[data-checked="true"] .cct-logo-menu-switch {
      background: #2F9E44;
    }

    .cct-logo-menu-toggle[data-checked="true"] .cct-logo-menu-switch::after {
      transform: translateX(14px);
    }

    .cct-logo-menu-tooltip {
      position: absolute;
      left: calc(100% + 16px);
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      display: none;
      width: 320px;
      padding: 16px;
      border: 1px solid var(--mantine-color-blue-4, #4dabf7);
      border-radius: var(--mantine-radius-sm, 4px);
      background: var(--mantine-color-dark-6, #25262b);
      box-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.35));
      color: var(--mantine-color-gray-2, #e9ecef);
      font-size: var(--mantine-font-size-sm);
      font-weight: 400;
      line-height: 1.45;
      white-space: normal;
      pointer-events: none;
      opacity: 0;
    }

    .cct-logo-menu-tooltip[data-open="true"] {
      display: block;
      opacity: 1;
    }

    .cct-logo-menu-icon,
    .cct-logo-menu-external {
      display: block;
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex: 0 0 auto;
    }

    .cct-logo-menu-external {
      width: 14px;
      height: 14px;
      color: var(--mantine-color-dimmed);
    }

    .cct-logo-menu-link:hover {
      background: var(--mantine-color-dark-5, #2c2e33);
      text-decoration: none;
    }

    .cct-original-download-button {
      position: relative;
      z-index: 6;
      height: var(--size, 30px);
      width: var(--size, 30px);
      min-width: var(--size, 30px);
      padding: 0;
      border-width: medium;
      border-style: none;
      border-color: currentcolor;
      border-image: none;
      border: 0;
      background: transparent;
      color: var(--mantine-color-dark-6);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-xs);
      font-weight: 700;
      line-height: var(--mantine-line-height-xs);
      cursor: pointer;
    }

    .cct-original-download-button:hover .cct-original-download-label,
    .cct-original-download-button[data-state="loading"] .cct-original-download-label,
    .cct-original-download-button[data-state="error"] .cct-original-download-label {
      opacity: 1;
      transform: scaleX(1);
      pointer-events: auto;
    }

    .cct-original-download-button:hover .cct-original-download-hover,
    .cct-original-download-button[data-state="loading"] .cct-original-download-hover,
    .cct-original-download-button[data-state="error"] .cct-original-download-hover {
      opacity: 1;
    }

    .cct-original-download-button[data-state="error"] {
      color: var(--mantine-color-red-text, #ff6b6b);
    }

    .cct-original-download-label,
    .cct-original-download-icon-wrap,
    .cct-original-download-hover {
      position: absolute;
      top: 0;
      height: var(--size, 30px);
      border-radius: 999px;
      background: white;
      box-shadow: none;
      color: currentColor;
    }

    .cct-original-download-label {
      right: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: nowrap;
      flex-shrink: 0;
      min-width: calc(var(--size, 30px) * 3);
      width: auto;
      padding-left: var(--mantine-spacing-md);
      padding-right: var(--size, 30px);
      overflow: hidden;
      opacity: 0;
      transform: scaleX(0);
      transform-origin: 90% center;
      transition: transform 0.2s, opacity 0.2s;
      pointer-events: none;
      box-sizing: border-box;
    }

    .cct-original-download-text {
      display: inline-block;
      white-space: nowrap;
    }

    .cct-original-download-icon-wrap,
    .cct-original-download-hover {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--size, 30px);
      background: white;
      color: currentColor;
    }

    .cct-original-download-icon-wrap {
      z-index: 1;
      position: relative;
      right: auto;
    }

    .cct-original-download-hover {
      left: 0;
      opacity: 0;
      z-index: 2;
      transition: opacity 0.2s;
    }

    .cct-original-download-icon {
      display: block;
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.6;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex: 0 0 auto;
    }

    .cct-select-value-wrapper {
      position: relative !important;
    }

    .cct-select-value-wrapper::after {
      content: attr(data-cct-text);
      position: absolute;
      left: 12px;
      top: 50%;
      transform: translateY(-50%);
      max-width: calc(100% - 42px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      pointer-events: none;
      z-index: 2;
      color: currentColor;
      font-family: var(--mantine-font-family);
      font-size: var(--input-fz, var(--mantine-font-size-sm));
      font-weight: 400;
      line-height: var(--input-line-height, var(--mantine-line-height));
      -webkit-font-smoothing: var(--mantine-webkit-font-smoothing);
    }

    .cct-hidden-input-text {
      color: transparent !important;
      caret-color: transparent !important;
    }
  `;
})();

(function () {
  "use strict";

  const CCT = window.CCT;
  const MENU_ID = "cct-logo-menu";
  let menuListenersReady = false;

  function getNavbarLogoGroup() {
    const homeLink =
      document.querySelector('a[aria-label="Civitai home"]') ||
      document.querySelector('a[aria-label*="Civitai" i][href="/"]') ||
      document.querySelector('a[href="/"] svg[class*="Logo-module"]')?.closest("a");
    if (!homeLink) return null;

    return homeLink.closest(".flex.items-center.gap-2\\.5") || homeLink.closest(".flex.items-center") || null;
  }

  function getSupportButton() {
    const logoGroup = getNavbarLogoGroup();
    if (!logoGroup) return null;

    return (
      logoGroup.querySelector('a[href="/purchase/buzz"], a[href*="/purchase/buzz"]') ||
      Array.from(logoGroup.querySelectorAll("a, button")).find((element) => element.textContent.trim() === "Pro") ||
      null
    );
  }

  function getLogoTarget() {
    const logoGroup = getNavbarLogoGroup();
    const supportButton = getSupportButton();
    if (logoGroup && supportButton && logoGroup.contains(supportButton)) {
      return {
        container: logoGroup,
        reference: supportButton,
        mode: "after",
        sizeElement: supportButton,
      };
    }

    return null;
  }

  function placeLogo(root, target) {
    if (target.mode === "after") {
      if (root.parentElement === target.container && root.previousElementSibling === target.reference) return;

      target.container.insertBefore(root, target.reference.nextSibling);
      return;
    }

    if (root.parentElement === target.container && root.nextElementSibling === target.reference) return;

    target.container.insertBefore(root, target.reference);
  }

  function syncLogoSize(root, sizeElement) {
    const height = Math.round(sizeElement.getBoundingClientRect().height);
    if (height > 0) {
      root.style.setProperty("--cct-logo-height", `${height}px`);
    }
  }

  function iconSvg(name) {
    const icons = CCT.assets && CCT.assets.icons;
    const svg = icons && icons[name];
    const className = name === "external" ? "cct-logo-menu-external" : "cct-logo-menu-icon";
    if (!svg) return "";

    return svg
      .replace(/\sclass="[^"]*"/, "")
      .replace("<svg ", `<svg class="${className}" aria-hidden="true" `);
  }

  function updateOriginalDownloadToggle(menu) {
    const toggle = menu.querySelector(".cct-logo-menu-toggle");
    if (!toggle) return;

    const enabled = CCT.isOriginalDownloadEnabled && CCT.isOriginalDownloadEnabled();
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
  }

  function bindTooltip(menu) {
    const help = menu.querySelector(".cct-logo-menu-help");
    const tooltip = menu.querySelector(".cct-logo-menu-tooltip");
    if (!help || !tooltip) return;

    let timer = null;

    function showLater(event) {
      event.stopPropagation();
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        tooltip.dataset.open = "true";
      }, 500);
    }

    function hide(event) {
      event.stopPropagation();
      window.clearTimeout(timer);
      tooltip.dataset.open = "false";
    }

    help.addEventListener("mouseenter", showLater);
    help.addEventListener("focus", showLater);
    help.addEventListener("mouseleave", hide);
    help.addEventListener("blur", hide);
    help.addEventListener("click", (event) => event.stopPropagation());
  }

  function compareVersions(a, b) {
    const left = String(a || "0").split(".").map((part) => Number.parseInt(part, 10) || 0);
    const right = String(b || "0").split(".").map((part) => Number.parseInt(part, 10) || 0);
    const length = Math.max(left.length, right.length);

    for (let index = 0; index < length; index += 1) {
      const diff = (left[index] || 0) - (right[index] || 0);
      if (diff !== 0) return diff;
    }

    return 0;
  }

  function setUpdateStatus(root, text, state) {
    const button = getMenu(root).querySelector(".cct-logo-menu-check");
    if (!button) return;

    button.textContent = text;
    button.dataset.state = state || "idle";
  }

  function setUpdateButton(root, text, mode) {
    const button = getMenu(root).querySelector(".cct-logo-menu-check");
    if (!button) return;

    button.textContent = text;
    button.dataset.mode = mode || "check";
  }

  async function fetchLatestVersion() {
    const updateUrl = CCT.meta && CCT.meta.updateUrl;
    if (!updateUrl) throw new Error("Missing update URL");

    const url = `${updateUrl}${updateUrl.includes("?") ? "&" : "?"}t=${Date.now()}`;
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Update check failed: ${response.status}`);

    const source = await response.text();
    const match = source.match(/\/\/\s*@version\s+([^\s]+)/);
    if (!match) throw new Error("Version not found");

    return match[1];
  }

  async function checkForUpdates(root) {
    const button = getMenu(root).querySelector(".cct-logo-menu-check");
    if (!button || button.dataset.loading === "true") return;

    const currentVersion = (CCT.meta && CCT.meta.version) || "0.0.0";

    if (button.dataset.mode === "open") {
      window.open(CCT.meta.updateUrl, "_blank", "noopener,noreferrer");
      return;
    }

    button.dataset.loading = "true";
    button.disabled = true;
    setUpdateStatus(root, "正在检查...", "loading");

    try {
      const latestVersion = await fetchLatestVersion();
      if (compareVersions(latestVersion, currentVersion) > 0) {
        setUpdateButton(root, `立即更新 v${latestVersion}`, "open");
        setUpdateStatus(root, `立即更新 v${latestVersion}`, "available");
        return;
      }

      setUpdateStatus(root, "已是最新版本", "latest");
    } catch (error) {
      setUpdateStatus(root, "检查失败", "error");
    } finally {
      button.dataset.loading = "false";
      button.disabled = false;
    }
  }

  function setMenuOpen(root, open) {
    const button = root.querySelector(".cct-logo-button");
    const menu = getMenu(root);
    if (!button || !menu) return;

    button.setAttribute("aria-expanded", String(open));
    clearTimeout(menu._cctCloseTimer);

    if (open) {
      positionMenu(root, menu);
      menu.hidden = false;
      requestAnimationFrame(() => {
        menu.dataset.open = "true";
      });
      return;
    }

    menu.dataset.open = "false";
    menu._cctCloseTimer = setTimeout(() => {
      if (menu.dataset.open !== "true") menu.hidden = true;
    }, 180);
  }

  function toggleMenu(root) {
    const menu = getMenu(root);
    if (!menu) return;

    setMenuOpen(root, menu.dataset.open !== "true");
  }

  function getMenu(root) {
    if (root && root._cctMenu) return root._cctMenu;
    return document.getElementById(MENU_ID);
  }

  function positionMenu(root, menu) {
    const rect = root.getBoundingClientRect();
    const spacing = 8;
    menu.style.left = `${Math.round(rect.left)}px`;
    menu.style.top = `${Math.round(rect.bottom + spacing)}px`;
  }

  function closeOtherMenus(currentRoot) {
    document.querySelectorAll(".cct-logo-root").forEach((root) => {
      if (root !== currentRoot) setMenuOpen(root, false);
    });
  }

  function bindMenuListeners() {
    if (menuListenersReady) return;
    menuListenersReady = true;

    document.addEventListener("click", (event) => {
      const root = event.target.closest && event.target.closest(".cct-logo-root");
      const menu = event.target.closest && event.target.closest(".cct-logo-menu");
      if (menu) return;

      document.querySelectorAll(".cct-logo-root").forEach((item) => {
        if (item !== root) setMenuOpen(item, false);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      document.querySelectorAll(".cct-logo-root").forEach((root) => setMenuOpen(root, false));
    });
  }

  function createLogoRoot() {
    const root = document.createElement("div");
    root.className = "cct-logo-root";
    root.setAttribute("aria-label", "CCT 中文增强插件");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "cct-logo-button";
    button.setAttribute("aria-haspopup", "menu");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", MENU_ID);
    button.innerHTML = CCT.assets.logoSvg;

    const menu = document.createElement("div");
    menu.id = MENU_ID;
    menu.className = "cct-logo-menu";
    menu.setAttribute("role", "menu");
    menu.hidden = true;
    menu.innerHTML = `
      <div class="cct-logo-menu-title">
        <span>CCT 中文增强插件</span>
        <span class="cct-logo-menu-version">v${(CCT.meta && CCT.meta.version) || "0.0.0"}</span>
      </div>
      <div class="cct-logo-menu-divider" aria-hidden="true"></div>
      <button class="cct-logo-menu-toggle" type="button" role="switch" aria-checked="false">
        <span class="cct-logo-menu-link-main">${iconSvg("download")}<span>下载原始文件</span><span class="cct-logo-menu-help" tabindex="0" aria-label="下载原始文件说明">${iconSvg("question")}</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
        <span class="cct-logo-menu-tooltip" role="tooltip">通常需要进入详情页才能保存原始图片或视频；在外层卡片直接右键保存，拿到的往往只是压缩缩略图。开启后，可在卡片上快速下载原始文件。</span>
      </button>
      <a class="cct-logo-menu-link" href="https://github.com/strangechiao/Civitai-Chinese-Translator/issues" target="_blank" rel="noopener noreferrer" role="menuitem">
        <span class="cct-logo-menu-link-main">${iconSvg("bug")}<span>反馈问题</span></span>
        ${iconSvg("external")}
      </a>
      <a class="cct-logo-menu-link" href="https://civitai.com/user/qoob9006" target="_blank" rel="noopener noreferrer" role="menuitem">
        <span class="cct-logo-menu-link-main">${iconSvg("contact")}<span>联系我</span></span>
        ${iconSvg("external")}
      </a>
      <button class="cct-logo-menu-check" type="button" data-mode="check">检查更新</button>
    `;

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeOtherMenus(root);
      toggleMenu(root);
    });

    menu.querySelector(".cct-logo-menu-check").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      checkForUpdates(root);
    });

    menu.querySelector(".cct-logo-menu-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setOriginalDownloadEnabled || !CCT.isOriginalDownloadEnabled) return;

      CCT.setOriginalDownloadEnabled(!CCT.isOriginalDownloadEnabled());
      updateOriginalDownloadToggle(menu);
    });

    updateOriginalDownloadToggle(menu);
    bindTooltip(menu);

    root._cctMenu = menu;
    root.append(button);
    document.body.appendChild(menu);
    bindMenuListeners();

    return root;
  }

  function injectLogo() {
    if (!CCT.assets || !CCT.assets.logoSvg) return;

    const target = getLogoTarget();
    if (!target) return;

    let root = document.querySelector(".cct-logo-root");
    if (!root) {
      root = createLogoRoot();
    }

    placeLogo(root, target);
    syncLogoSize(root, target.sizeElement);
    requestAnimationFrame(() => syncLogoSize(root, target.sizeElement));
  }

  CCT.injectLogo = injectLogo;
})();

(function () {
  "use strict";

  const CCT = window.CCT;
  const STORAGE_KEY = "CCT_ORIGINAL_DOWNLOAD_ENABLED";

  function isOriginalDownloadEnabled() {
    return localStorage.getItem(STORAGE_KEY) === "true";
  }

  function setOriginalDownloadEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, enabled ? "true" : "false");
    refreshOriginalDownloadButtons(document.body);
  }

  function iconSvg() {
    const icons = CCT.assets && CCT.assets.icons;
    const svg = icons && icons.originalDownload;
    if (!svg) {
      return '<svg class="cct-original-download-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10"></path><path d="M8 10l4 4 4-4"></path><path d="M4 20h16"></path></svg>';
    }

    return svg
      .replace(/\sclass="[^"]*"/, "")
      .replace("<svg ", '<svg class="cct-original-download-icon" aria-hidden="true" ');
  }

  function arrowSvg() {
    return '<svg class="cct-original-download-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"></path><path d="M13 18l6-6"></path><path d="M13 6l6 6"></path></svg>';
  }

  function getOriginalMediaUrl(mediaUrl) {
    if (!mediaUrl) return null;

    let url;
    try {
      url = new URL(mediaUrl, location.origin);
    } catch (error) {
      return null;
    }

    if (!/(\.|-)civitai\.com$/i.test(url.hostname) && !/^image(?:cache|-b2)?\.civitai\.com$/i.test(url.hostname)) {
      return null;
    }

    const parts = url.pathname.split("/");
    if (parts.length < 5) return null;

    parts[3] = "original=true";
    url.pathname = parts.join("/");
    url.search = "";
    url.hash = "";

    return url.toString();
  }

  function getCardMedia(card) {
    return card.querySelector("img[src*='civitai.com'], video[src*='civitai.com'], video source[src*='civitai.com']");
  }

  function getImageId(card) {
    const link = card.querySelector('a[href^="/images/"], a[href*="/images/"]');
    const match = link && link.getAttribute("href").match(/\/images\/(\d+)/);
    return match ? match[1] : null;
  }

  function getFileName(originalUrl, imageId) {
    const url = new URL(originalUrl);
    const extension = url.pathname.split(".").pop() || "jpg";
    return `civitai-${imageId || "original"}.${extension}`;
  }

  function downloadFile(url, fileName) {
    if (typeof GM_download === "function") {
      GM_download({
        url,
        name: fileName,
        saveAs: false,
      });
      return;
    }

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function setButtonState(button, text, state) {
    button.querySelector(".cct-original-download-text").textContent = text;
    button.dataset.state = state || "idle";
  }

  function getActionGroup(card) {
    const moreButton = card.querySelector('button[aria-label="More options"]');
    return moreButton && moreButton.parentElement;
  }

  function createButton(card) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cct-original-download-button";
    button.title = "下载原始文件";
    button.style.setProperty("--size", "30px");
    button.innerHTML = `
      <span class="cct-original-download-label"><span class="cct-original-download-text">下载</span></span>
      <span class="cct-original-download-icon-wrap">${iconSvg()}</span>
      <span class="cct-original-download-hover">${arrowSvg()}</span>
    `;

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const media = getCardMedia(card);
      const mediaUrl = media && (media.currentSrc || media.src);
      const originalUrl = getOriginalMediaUrl(mediaUrl);
      if (!originalUrl) {
        setButtonState(button, "获取失败", "error");
        window.setTimeout(() => setButtonState(button, "下载", "idle"), 1600);
        return;
      }

      const imageId = getImageId(card);
      setButtonState(button, "开始下载", "loading");
      downloadFile(originalUrl, getFileName(originalUrl, imageId));
      window.setTimeout(() => setButtonState(button, "下载", "idle"), 1600);
    });

    return button;
  }

  function injectOriginalDownloadButtons(root) {
    if (!isOriginalDownloadEnabled()) return;

    const scope = root && root.querySelectorAll ? root : document;
    const links = Array.from(scope.querySelectorAll('a[href^="/images/"], a[href*="/images/"]'));

    links.forEach((link) => {
      const card = link.parentElement;
      if (!card || card.querySelector(".cct-original-download-button")) return;
      if (!getCardMedia(card)) return;

      const actionGroup = getActionGroup(card);
      if (actionGroup) {
        const button = createButton(card);
        actionGroup.appendChild(button);
        return;
      }

      card.appendChild(createButton(card));
    });
  }

  function removeOriginalDownloadButtons(root) {
    const scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll(".cct-original-download-button").forEach((button) => button.remove());
  }

  function refreshOriginalDownloadButtons(root) {
    if (isOriginalDownloadEnabled()) {
      injectOriginalDownloadButtons(root);
      return;
    }

    removeOriginalDownloadButtons(root);
  }

  CCT.isOriginalDownloadEnabled = isOriginalDownloadEnabled;
  CCT.setOriginalDownloadEnabled = setOriginalDownloadEnabled;
  CCT.injectOriginalDownloadButtons = injectOriginalDownloadButtons;
  CCT.refreshOriginalDownloadButtons = refreshOriginalDownloadButtons;
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "common",
    name: "global",
    component: "index",
    rules: {
      static: {},
      regexp: [],
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "layout",
    name: "header",
    component: "index",
    rules: {
      static: {
        // PRO 按钮
        Pro: "专业版",
        "Unlock Premium Benefits!": "解锁高级会员权益！",
        "Join thousands of creators with exclusive perks, priority support, and advanced features.":
          "解锁专属权益、优先支持与更多高级功能，与数千名创作者一起获得更好的创作体验。",

        // 搜索栏
        // 默认的搜索框下拉菜单按钮的Models，
        // 使用selectValue的方式把“模型”覆盖在了Models上。
        Models: "模型",
        Images: "图片",
        Articles: "文章",
        Users: "用户",
        Collections: "收藏",
        Bounties: "悬赏",
        Tools: "工具",
        Comics: "漫画",
        "Search Civitai": "探索 Civitai",
        "pro-tip: quick search faster!": "小技巧：使用快捷搜索，效率更高！",
        "open the quick search without leaving your keyboard by tapping the": "无需离开键盘，只需按下",
        "key from anywhere and just start typing.": "键，即可随时打开快捷搜索并直接输入内容。",

        // Create 按钮菜单
        Create: "创建",
        Generate: "生成",
        "Post Images": "发布图片",
        "Post Videos": "发布视频",
        "Upload a Model": "上传模型",
        "Generate 3D Model": "生成三维模型",
        "Train a Lora": "训练 LoRA",
        "Write an Article": "撰写文章",
        "Create a Comic": "创建漫画",
        "Create a Bounty": "创建悬赏",
        "Create a Challenge": "创建挑战",

        // Civitai Link 按钮窗口
        "Civitai Link": "连接 Civitai",
        "This feature is currently in early access and only available to Supporters.": "此功能目前处于抢先体验阶段，仅限支持者使用。",
        "Are you a supporter and seeing this message? ": "你是支持者但还是看到了这条消息？",
        "Click here": "点击这里",
        "Interact with any Stable Diffusion instance in realtime from Civitai": "在 Civitai 中实时连接并操作任意 Stable Diffusion 实例",
        "Video Demo": "视频演示",
        "Become a Supporter": "成为支持者",

        // Browsing Level 浏览级别按钮窗口 / Filters 筛选窗口
        "Browsing Level": "浏览等级",
        "Join the Knights Order": "加入骑士团",
        "Help us improve by playing!": "通过体验帮助我们改进！",
        "Select the levels of content you want to see": "选择您想查看的内容级别",
        "With mature content enabled, some content may be hidden.": "启用成人内容后，部分内容可能会被隐藏。",
        "Learn more": "了解更多",
        "Blur mature content (R+)": "模糊处理成人内容（R+）",
        Apply: "应用",
        "my filters": "我的筛选条件",
        "Hidden Tags": "隐藏标签",
        "Search tags to hide": "搜索要隐藏的标签",
        "We'll hide content with these tags throughout the site.": "我们将隐藏网站内所有带有这些标签的内容。",

        // 通知窗口
        Notifications: "通知",
        "Hide Read": "隐藏已读通知",
        "Mark all as read": "全部标记为已读",
        "All caught up! Nothing to see here": "全部看完啦！这里暂时没有新消息。",
        "Notification Settings": "通知设置",
        All: "全部",
        Announcements: "公告",
        Comments: "评论",
        Updates: "更新",
        Milestones: "里程碑",
        Bounties: "悬赏",
        Buzz: "Buzz",
        Referrals: "邀请",
        System: "系统",
        Others: "其他",
        "Filter by message...": "筛选消息…",

        // 聊天窗口
        Chats: "聊天",
        "Mute sounds": "关闭提示音",
        "Play sounds": "打开提示音",
        Moderation: "内容审核",
        "Enable conversation moderation": "开启 违规内容过滤",
        "Disable conversation moderation": "关闭 违规内容过滤",
        "Not connected. may not receive live messages or alerts.": "未连接。可能无法接收实时消息或提醒。",
        // New: "新聊天", (为了避免污染全局new的翻译,用selector选择器单独翻译)
        "Filter by user": "按用户筛选",
        Active: "当前",
        Pending: "待处理",
        Archived: "已归档",
        "No chats.": "空空如也",
        "New Chat": "新的聊天",
        "Select users": "选择用户",
        "Select at least 1 user above": "请至少选择一个用户",
        Cancel: "取消",
        "Start Chat": "开始聊天",
        "Beware of scam messages. Civitai staff will only message you from": "谨防诈骗信息。Civitai 工作人员只会使用",
        "red-nameplate": "红色用户名",
        "accounts and have a Civitai moderator badge next to their name (not the profile picture!). Do not click unknown links or share payment info.":
          "和 Civitai 版主徽章的账号与您联系（徽章位于用户名旁边，而非头像上！）。切勿点击未知链接或泄露付款信息。",
        "Report suspicious DMs": "举报可疑私信",
        "immediately.": "。",
        Report: "举报",
        Leave: "归档",
        "Enable notifications": "启用通知",
        "Disable notifications": "关闭通知",
        "Send message": "发送消息",

        // 导航栏
        Home: "首页",
        Models: "模型",
        Images: "图片",
        Videos: "视频",
        "3D Models": "三维模型",
        Articles: "文章",
        Comics: "漫画",
        Bounties: "悬赏",
        Challenges: "挑战",
        Updates: "更新",
        Shop: "商店",
      },

      // 聊天窗口
      selector: [
        {
          selector: 'button[data-size="xs"] .tabler-icon-circle-plus',
          closest: "button",
          textSelector: ".mantine-Button-label",
          text: "新聊天",
        },
      ],

      // 搜索栏
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Models",
          text: "模型",
        },
      ],
    },
  });
})();



(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "home",
    component: "index",
    rules: {
      static: {},
    },
  });
})();

(function () {
  "use strict";

  const CCT = window.CCT;
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
  let ignoreSelector = baseIgnore.join(",");

  function refreshRules() {
    activeRules = CCT.getActiveRules();
    staticMap = new Map();

    Object.entries(activeRules.static || {}).forEach(([source, target]) => {
      staticMap.set(CCT.normalizeText(source), target);
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

        if (rule.attr) {
          textElement.setAttribute(rule.attr, rule.text);
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

  function translateElementTree(root) {
    if (root.nodeType !== Node.ELEMENT_NODE || shouldSkipElement(root)) return;

    translateAttributes(root);
    root.querySelectorAll("*").forEach((element) => {
      if (!shouldSkipElement(element)) {
        translateAttributes(element);
      }
    });

    translateTextNodes(root);
    translateSelectorRules(root);
    translateSelectValueRules(root);
  }

  function translateRoot(root) {
    if (!root) return;

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

    function schedule(root) {
      if (root) pendingRoots.add(root);
      if (timer) return;

      timer = setTimeout(() => {
        timer = null;
        CCT.injectLogo && CCT.injectLogo();
        CCT.injectOriginalDownloadButtons && CCT.injectOriginalDownloadButtons(document.body);

        const nextPage = CCT.getCurrentPage();
        if (nextPage !== currentPage) {
          currentPage = nextPage;
          refreshRules();
          pendingRoots.clear();
          translateRoot(document.body);
          return;
        }

        const roots = Array.from(pendingRoots);
        pendingRoots.clear();
        roots.forEach(translateRoot);
      }, 100);
    }

    function start() {
      refreshRules();
      translateRoot(document.body);

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === "childList") {
            mutation.addedNodes.forEach((node) => schedule(node));
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
        attributeFilter: ["title", "aria-label", "placeholder"],
      });
    }

    return { start };
  }

  CCT.createTranslator = createTranslator;
})();

(function () {
  "use strict";

  const CCT = window.CCT;
  const instanceKey = "__CCT_TRANSLATOR_RUNNING__";

  if (window[instanceKey]) return;
  window[instanceKey] = true;

  function injectStyle() {
    if (document.getElementById("cct-style")) return;

    const style = document.createElement("style");
    style.id = "cct-style";
    style.textContent = CCT.styleText || "";
    document.head.appendChild(style);
  }

  function start() {
    if (!document.body) {
      requestAnimationFrame(start);
      return;
    }

    injectStyle();
    CCT.injectLogo && CCT.injectLogo();
    CCT.injectOriginalDownloadButtons && CCT.injectOriginalDownloadButtons(document.body);
    CCT.createTranslator().start();
  }

  start();
})();
