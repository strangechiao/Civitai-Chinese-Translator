// ==UserScript==
// @name         [CCT] Civitai汉化&增强插件
// @namespace    https://civitai.com/
// @version      1.0.5
// @description  Civitai.com / Civitai.red 页面汉化 | 功能菜单 | 一键原图下载 | 模型描述快捷折叠 | 模型版本选项卡整合 | 广告屏蔽与页面布局修正
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
// @run-at       document-start
// @grant        GM_download
// @grant        unsafeWindow
// @connect      image.civitai.com
// @connect      imagecache.civitai.com
// @connect      image-b2.civitai.com
// ==/UserScript==

(function () {
  "use strict";

  window.CCT = window.CCT || {};
  window.CCT.meta = window.CCT.meta || {};
  window.CCT.meta.version = "1.0.5";
  window.CCT.meta.updateUrl = "https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator/main/civitai-chinese-translator.user.js";
  window.CCT.meta.supportUrl = "https://github.com/strangechiao/Civitai-Chinese-Translator/issues";
  window.CCT.assets = window.CCT.assets || {};
  window.CCT.assets.logoSvg = "<svg width=\"182\" height=\"103\" viewBox=\"0 0 182 103\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"152\" height=\"103\" rx=\"5\" fill=\"white\"/>\n<rect x=\"1\" y=\"1\" width=\"150\" height=\"101\" rx=\"5\" fill=\"#414141\"/>\n<rect x=\"6\" y=\"6\" width=\"140\" height=\"91\" fill=\"white\"/>\n<rect x=\"11\" y=\"11\" width=\"130\" height=\"81\" fill=\"#414141\"/>\n<rect x=\"151\" y=\"5\" width=\"4\" height=\"21\" fill=\"white\"/>\n<rect x=\"151\" y=\"6\" width=\"3\" height=\"19\" fill=\"#414141\"/>\n<rect x=\"56\" y=\"10\" width=\"82\" height=\"6\" transform=\"rotate(90 56 10)\" fill=\"white\"/>\n<rect x=\"101\" y=\"11\" width=\"82\" height=\"6\" transform=\"rotate(90 101 11)\" fill=\"white\"/>\n<path d=\"M48 87.75L42.333 92H30.666L36.333 87.75H13V79H48V87.75ZM75.5 84C81.6628 84 87.0813 87.1857 90.1992 92H60.8008C63.9187 87.1857 69.3372 84 75.5 84ZM120.5 90.666L129.25 79H138L128.25 92H112.75L103 79H111.75L120.5 90.666ZM68.8027 40.332C72.0004 39.0075 75.5194 38.6607 78.9141 39.3359C82.3087 40.0112 85.4266 41.6786 87.874 44.126L81.6875 50.3125C80.4638 49.0888 78.9044 48.2556 77.207 47.918C75.5097 47.5804 73.7502 47.7538 72.1514 48.416C70.5526 49.0783 69.186 50.1998 68.2246 51.6387C67.2631 53.0776 66.75 54.7694 66.75 56.5C66.75 58.2306 67.2631 59.9224 68.2246 61.3613C69.186 62.8002 70.5526 63.9217 72.1514 64.584C73.7502 65.2462 75.5097 65.4196 77.207 65.082C78.9044 64.7444 80.4638 63.9112 81.6875 62.6875L87.874 68.874C85.4266 71.3214 82.3087 72.9888 78.9141 73.6641C75.5194 74.3393 72.0004 73.9925 68.8027 72.668C65.6052 71.3434 62.8721 69.1004 60.9492 66.2227C59.0263 63.3448 58 59.9612 58 56.5C58 53.0388 59.0263 49.6552 60.9492 46.7773C62.8721 43.8996 65.6052 41.6566 68.8027 40.332ZM138 42.75H124.699L124.698 69H115.949V42.75H103V34H138V42.75ZM23.8027 35.332C27.0004 34.0075 30.5194 33.6607 33.9141 34.3359C37.3087 35.0112 40.4266 36.6786 42.874 39.126L36.6875 45.3125C35.4638 44.0888 33.9044 43.2556 32.207 42.918C30.5097 42.5804 28.7502 42.7538 27.1514 43.416C25.5526 44.0783 24.186 45.1998 23.2246 46.6387C22.2631 48.0776 21.75 49.7694 21.75 51.5C21.75 53.2306 22.2631 54.9224 23.2246 56.3613C24.186 57.8002 25.5526 58.9217 27.1514 59.584C28.7502 60.2462 30.5097 60.4196 32.207 60.082C33.9044 59.7444 35.4638 58.9112 36.6875 57.6875L42.874 63.874C40.4266 66.3214 37.3087 67.9888 33.9141 68.6641C30.5194 69.3393 27.0004 68.9925 23.8027 67.668C20.6052 66.3434 17.8721 64.1004 15.9492 61.2227C14.0263 58.3448 13 54.9612 13 51.5C13 48.0388 14.0263 44.6552 15.9492 41.7773C17.8721 38.8996 20.6052 36.6566 23.8027 35.332ZM66.75 29H58V11H66.75V29ZM84.25 17.333V11H93V29H84.25L70.75 11H79.5L84.25 17.333ZM48 24H40.3438L37.2676 13.0625H23.7324L20.6562 24H13L16.6562 11H44.3438L48 24ZM111.75 15.25H138V24H103V11H111.75V15.25Z\" fill=\"white\"/>\n<path d=\"M166 12C169.314 12 172 14.6863 172 18L172 73L166 73L166 12V12Z\" fill=\"white\"/>\n<rect x=\"165\" y=\"18\" width=\"1\" height=\"55\" fill=\"white\"/>\n<circle cx=\"168.5\" cy=\"84.5\" r=\"13.5\" fill=\"white\"/>\n<path d=\"M166 13C168.761 13 171 15.2386 171 18L171 73L166 73L166 13V13Z\" fill=\"#D9D9D9\"/>\n<circle cx=\"168.5\" cy=\"84.5\" r=\"12.5\" fill=\"#E03131\"/>\n<rect x=\"154\" y=\"8\" width=\"3\" height=\"15\" fill=\"white\"/>\n<rect x=\"154\" y=\"9\" width=\"2\" height=\"13\" fill=\"#D9D9D9\"/>\n<rect x=\"157\" y=\"12\" width=\"9\" height=\"7\" fill=\"white\"/>\n<rect x=\"154\" y=\"13\" width=\"12\" height=\"5\" fill=\"#D9D9D9\"/>\n<path d=\"M177.95 84.5C178.53 84.5 179.005 84.0287 178.948 83.4517C178.845 82.4325 178.594 81.4317 178.201 80.4818C177.673 79.2079 176.9 78.0504 175.925 77.0754C174.95 76.1004 173.792 75.3269 172.518 74.7993C171.568 74.4058 170.568 74.1547 169.548 74.0525C168.971 73.9946 168.5 74.4701 168.5 75.05C168.5 75.6299 168.972 76.0932 169.547 76.1655C170.291 76.2589 171.02 76.4515 171.715 76.7394C172.734 77.1616 173.66 77.7803 174.44 78.5603C175.22 79.3403 175.838 80.2663 176.261 81.2855C176.548 81.9804 176.741 82.7095 176.834 83.4527C176.907 84.0281 177.37 84.5 177.95 84.5Z\" fill=\"white\"/>\n</svg>";
  window.CCT.assets.icons = {"bug":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-bug-icon lucide-bug\"><path d=\"M12 20v-9\"/><path d=\"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z\"/><path d=\"M14.12 3.88 16 2\"/><path d=\"M21 21a4 4 0 0 0-3.81-4\"/><path d=\"M21 5a4 4 0 0 1-3.55 3.97\"/><path d=\"M22 13h-4\"/><path d=\"M3 21a4 4 0 0 1 3.81-4\"/><path d=\"M3 5a4 4 0 0 0 3.55 3.97\"/><path d=\"M6 13H2\"/><path d=\"m8 2 1.88 1.88\"/><path d=\"M9 7.13V6a3 3 0 1 1 6 0v1.13\"/></svg>","contact":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-mail-icon lucide-mail\"><path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"/><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/></svg>","download":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-folder-down-icon lucide-folder-down\"><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/><path d=\"M12 10v6\"/><path d=\"m15 13-3 3-3-3\"/></svg>","originalDownload":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-cloud-download-icon lucide-cloud-download\"><path d=\"M12 13v8l-4-4\"/><path d=\"m12 21 4-4\"/><path d=\"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284\"/></svg>","external":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right\"><path d=\"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6\"/><path d=\"m21 3-9 9\"/><path d=\"M15 3h6v6\"/></svg>","question":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-circle-question-mark-icon lucide-circle-question-mark\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/></svg>","expand":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-chevron-down-icon lucide-chevron-down\"><path d=\"m6 9 6 6 6-6\"/></svg>","collapse":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-chevron-up-icon lucide-chevron-up\"><path d=\"m18 15-6-6-6 6\"/></svg>","quickCollapse":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-square-chart-gantt-icon lucide-square-chart-gantt\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 8h7\"/><path d=\"M8 12h6\"/><path d=\"M11 16h5\"/></svg>","modelVersionSwitch":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-menu-icon lucide-menu\"><path d=\"M4 5h16\"/><path d=\"M4 12h16\"/><path d=\"M4 19h16\"/></svg>","translation":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-languages-icon lucide-languages\"><path d=\"m5 8 6 6\"/><path d=\"m4 14 6-6 2-3\"/><path d=\"M2 5h12\"/><path d=\"M7 2h1\"/><path d=\"m22 22-5-10-5 10\"/><path d=\"M14 18h6\"/></svg>","adBlocking":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <path d=\"M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8\"/>\n  <path d=\"m4 4 16 16\"/>\n</svg>","adLayoutCentered":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <path d=\"M17 5H7\"/>\n  <path d=\"M19 9H5\"/>\n  <path d=\"M17 13H7\"/>\n  <path d=\"M19 17H5\"/>\n  <path d=\"M14 21h-4\"/>\n</svg>"};
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
      .replace(/[\u200B-\u200D\u2060\uFEFF]/g, "")
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
    if (/^\/models(?:\/|$)/i.test(pathname)) return "models";
    if (/^\/images(?:\/|$)/i.test(pathname)) return "images";
    if (pathname === "/videos") return "videos";
    if (/^\/3d-models(?:\/|$)/i.test(pathname)) return "3d-models";
    if (/^\/articles(?:\/|$)/i.test(pathname)) return "articles";
    if (/^\/comics(?:\/|$)/i.test(pathname)) return "comics";
    if (/^\/bounties(?:\/|$)/i.test(pathname)) return "bounties";
    if (/^\/challenges(?:\/|$)/i.test(pathname)) return "challenges";
    if (/^\/changelog(?:\/|$)/i.test(pathname)) return "changelog";
    if (/^\/shop(?:\/|$)/i.test(pathname)) return "shop";
    if (/^\/posts(?:\/|$)/i.test(pathname)) return "posts";
    if (/^\/user\/[^/]+/i.test(pathname)) return "user";
    if (/^\/(?:buzz|buzz-dashboard|purchase\/buzz)/i.test(pathname)) return "buzz";
    if (/^\/generate(?:\/|$)/i.test(pathname)) return "generate";

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
    .cct-hidden-ad {
      display: none !important;
    }

    html.cct-ad-blocking-enabled .box-content:has(a[href^="https://advertising.civitai.com/api/v1/engagement"]),
    html.cct-ad-blocking-enabled [style*="min-height"]:has(a[href^="https://advertising.civitai.com/api/v1/engagement"]),
    html.cct-ad-blocking-enabled [class*="__rail"]:has(a[href^="https://advertising.civitai.com/api/v1/engagement"]),
    html.cct-ad-blocking-enabled [style*="content-visibility"]:has(a[href^="https://advertising.civitai.com/api/v1/engagement"]) {
      display: none !important;
    }

    html.cct-site-red.cct-ad-blocking-enabled .box-content:has(> div[id]:empty),
    html.cct-site-red.cct-ad-blocking-enabled [style*="min-height"]:has(.box-content > div[id]:empty),
    html.cct-site-red.cct-ad-blocking-enabled [class*="__rail"]:has(.box-content > div[id]:empty),
    html.cct-site-red.cct-ad-blocking-enabled [style*="content-visibility"]:has(.box-content > div[id]:empty) {
      display: none !important;
    }

    html.cct-site-red.cct-ad-blocking-enabled div.relative.box-content.flex.flex-col.items-center.justify-center.gap-2.bg-gray-1.py-3[style*="min-height: 250px"] {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled div.relative.flex.justify-center.border-t[style*="min-height: 90px"] {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled div.relative.box-content.flex.flex-col.items-center.justify-center.gap-2.py-3[style*="min-height: 250px"] {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled [class*="__rail"]:has(> div.relative.box-content.flex.flex-col.items-center.justify-center.gap-2[style*="min-height: 600px"]) {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled [class*="__rail"]:empty {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled div.relative.box-content.flex.flex-col.items-center.justify-center.gap-2[style*="min-height: 280px"] {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled div.relative.flex.overflow-hidden.flex-col.mx-auto.min-w-80.justify-between:has(a[href="/pricing"]) {
      display: none !important;
    }

    html.cct-ad-blocking-enabled div:has(> div[class~="@container"]:only-child > div[class*="MasonryContainer"][class*="__queries"]:only-child:empty) {
      display: none !important;
    }

    html.cct-ad-blocking-enabled.cct-ad-layout-centered [class*="__mainRegion"][class*="__withRail"] {
      grid-template-columns: minmax(0, 1fr) !important;
    }

    html.cct-ad-blocking-enabled.cct-ad-layout-centered [class*="__mainRegion"][class*="__withRail"] > [class*="__contentCol"] {
      width: 100% !important;
      margin-inline: auto !important;
    }

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
      --cct-menu-bg: #25262B;
      --cct-menu-border: #373A40;
      --cct-menu-text: #E9ECEF;
      --cct-menu-title: #F1F3F5;
      --cct-menu-muted: var(--mantine-color-dimmed);
      --cct-menu-divider: #373A40;
      --cct-menu-hover: #2C2E33;
      --cct-menu-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.35));
      position: fixed;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 280px;
      max-width: calc(100vw - 16px);
      padding: 12px;
      border: 1px solid var(--cct-menu-border);
      border-radius: var(--mantine-radius-sm, 4px);
      background: var(--cct-menu-bg);
      box-shadow: var(--cct-menu-shadow);
      color: var(--cct-menu-text);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-4px) scale(0.96);
      transform-origin: top left;
      transition: transform 180ms ease, opacity 180ms ease;
    }

    :root[data-mantine-color-scheme="light"] .cct-logo-menu,
    [data-mantine-color-scheme="light"] .cct-logo-menu {
      --cct-menu-bg: #FFFFFF;
      --cct-menu-border: #DEE2E6;
      --cct-menu-text: #343A40;
      --cct-menu-title: #212529;
      --cct-menu-muted: #868E96;
      --cct-menu-divider: #E9ECEF;
      --cct-menu-hover: #F1F3F5;
      --cct-menu-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.12));
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
      color: var(--cct-menu-title);
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
      background: var(--cct-menu-divider);
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
      color: var(--cct-menu-text);
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
      color: var(--cct-menu-text);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      text-align: left;
      cursor: pointer;
    }

    .cct-logo-menu-toggle:hover {
      background: var(--cct-menu-hover);
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
      color: var(--cct-menu-muted);
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
      background: var(--cct-menu-divider);
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
      border: 1px solid var(--cct-menu-border);
      border-radius: var(--mantine-radius-sm, 4px);
      background: var(--cct-menu-bg);
      box-shadow: var(--cct-menu-shadow);
      color: var(--cct-menu-text);
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
      color: var(--cct-menu-muted);
    }

    .cct-logo-menu-link:hover {
      background: var(--cct-menu-hover);
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

    .cct-model-spoiler-float-button {
      position: relative;
      z-index: 30;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      min-width: max-content;
      height: var(--button-height-sm, calc(2.25rem * var(--mantine-scale)));
      padding-inline: var(--mantine-spacing-xs);
      border: var(--button-bd, calc(0.0625rem * var(--mantine-scale)) solid transparent);
      border-radius: var(--button-radius, var(--mantine-radius-default));
      background: var(--mantine-color-blue-filled);
      color: var(--mantine-color-white);
      font-family: var(--mantine-font-family);
      font-size: var(--button-fz, var(--mantine-font-size-sm));
      font-weight: 600;
      line-height: 1;
      text-align: center;
      user-select: none;
      pointer-events: auto;
      cursor: pointer;
      transition-property: transform;
      transition-timing-function: cubic-bezier(.4, 0, .2, 1);
      transition-duration: .15s;
    }

    .cct-model-spoiler-float-button * {
      pointer-events: none;
    }

    .cct-model-spoiler-float-button:hover {
      background: var(--mantine-color-blue-filled-hover);
    }

    .cct-model-spoiler-float-button:active {
      transform: translateY(1px);
    }

    .cct-model-spoiler-float-button:disabled {
      cursor: default;
      opacity: 0.65;
    }

    .cct-model-spoiler-float-inner {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }

    .cct-model-spoiler-float-icon {
      display: block;
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex: 0 0 auto;
    }

    .cct-model-version-list-hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      clip-path: inset(50%) !important;
    }

    .cct-model-version-dropdown {
      position: relative;
      z-index: 20;
      width: 100%;
      margin-bottom: var(--mantine-spacing-md);
      font-family: var(--mantine-font-family);
    }

    .cct-model-version-select-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--mantine-spacing-xs);
      width: 100%;
      height: var(--input-height-sm, calc(2.25rem * var(--mantine-scale)));
      padding-inline: var(--mantine-spacing-sm);
      border: calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-dark-4, #373A40);
      border-radius: var(--mantine-radius-sm, calc(0.25rem * var(--mantine-scale)));
      background: var(--mantine-color-dark-6, #25262B);
      color: var(--mantine-color-gray-3, #DEE2E6);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      text-align: left;
      cursor: pointer;
    }

    .cct-model-version-select-trigger:hover {
      background: var(--mantine-color-dark-5, #2C2E33);
    }

    .cct-model-version-select-trigger * {
      pointer-events: none;
    }

    .cct-model-version-dropdown[data-open="true"] .cct-model-version-select-trigger {
      border-color: var(--mantine-color-blue-filled, #228BE6);
    }

    .cct-model-version-dropdown[data-open="true"] .cct-model-version-select-icon {
      transform: rotate(180deg);
    }

    .cct-model-version-select-current,
    .cct-model-version-select-option {
      display: flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }

    .cct-model-version-select-current {
      flex: 1 1 auto;
    }

    .cct-model-version-select-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .cct-model-version-select-paid {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      border-radius: var(--mantine-radius-xs, calc(0.125rem * var(--mantine-scale)));
      background: var(--mantine-color-yellow-5, #FCC419);
      color: var(--mantine-color-dark-9, #101113);
      flex: 0 0 auto;
      font-family: Arial, sans-serif;
      font-size: 12px;
      font-weight: 700;
      line-height: 1;
    }

    .cct-model-version-select-icon {
      display: block;
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex: 0 0 auto;
      color: var(--mantine-color-dimmed);
      transition: transform 120ms ease;
    }

    .cct-model-version-select-menu {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% + 4px);
      z-index: 1000;
      max-height: 320px;
      overflow: auto;
      overscroll-behavior: contain;
      padding: 4px;
      border: calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-dark-4, #373A40);
      border-radius: var(--mantine-radius-sm, calc(0.25rem * var(--mantine-scale)));
      background: var(--mantine-color-dark-6, #25262B);
      box-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.35));
    }

    .cct-model-version-select-option {
      width: 100%;
      min-height: 32px;
      padding: 6px 8px;
      border: 0;
      border-radius: var(--mantine-radius-sm, calc(0.25rem * var(--mantine-scale)));
      background: transparent;
      color: var(--mantine-color-gray-3, #DEE2E6);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      text-align: left;
      cursor: pointer;
    }

    .cct-model-version-select-option:hover {
      background: var(--mantine-color-dark-5, #2C2E33);
    }

    .cct-model-version-select-option[aria-selected="true"] {
      background: var(--mantine-color-blue-filled, #228BE6);
      color: var(--mantine-color-white, #FFFFFF);
    }

    :root[data-mantine-color-scheme="light"] .cct-model-version-select-trigger,
    [data-mantine-color-scheme="light"] .cct-model-version-select-trigger {
      border-color: var(--mantine-color-gray-4, #CED4DA);
      background: var(--mantine-color-white, #FFFFFF);
      color: var(--mantine-color-gray-8, #343A40);
    }

    :root[data-mantine-color-scheme="light"] .cct-model-version-select-trigger:hover,
    [data-mantine-color-scheme="light"] .cct-model-version-select-trigger:hover {
      background: var(--mantine-color-gray-0, #F8F9FA);
    }

    :root[data-mantine-color-scheme="light"] .cct-model-version-select-menu,
    [data-mantine-color-scheme="light"] .cct-model-version-select-menu {
      border-color: var(--mantine-color-gray-4, #CED4DA);
      background: var(--mantine-color-white, #FFFFFF);
      box-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.12));
    }

    :root[data-mantine-color-scheme="light"] .cct-model-version-select-option,
    [data-mantine-color-scheme="light"] .cct-model-version-select-option {
      color: var(--mantine-color-gray-8, #343A40);
    }

    :root[data-mantine-color-scheme="light"] .cct-model-version-select-option:hover,
    [data-mantine-color-scheme="light"] .cct-model-version-select-option:hover {
      background: var(--mantine-color-gray-0, #F8F9FA);
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
  const STORAGE_KEY = "CCT_AD_BLOCKING_ENABLED";
  const LAYOUT_STORAGE_KEY = "CCT_AD_LAYOUT_CENTERED_ENABLED";
  const HIDDEN_CLASS = "cct-hidden-ad";
  const AD_SELECTOR = [
    'a[href^="https://advertising.civitai.com/api/v1/engagement"]',
    'a[aria-label="visit advertiser"][href*="advertising.civitai.com"]',
    'img[alt="advertisement"]',
  ].join(",");

  function isAdBlockingEnabled() {
    return localStorage.getItem(STORAGE_KEY) !== "false";
  }

  function isAdLayoutCenteredEnabled() {
    return localStorage.getItem(LAYOUT_STORAGE_KEY) !== "false";
  }

  function signalNativeAdBlocking() {
    if (!location.hostname.endsWith("civitai.com") || !isAdBlockingEnabled()) return;

    const pageWindow = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
    const pageNavigator = pageWindow.navigator;
    if (pageNavigator.brave && typeof pageNavigator.brave.isBrave === "function") return;

    try {
      Object.defineProperty(pageNavigator, "brave", {
        configurable: true,
        value: {
          isBrave: () => Promise.resolve(true),
        },
      });
    } catch {
      // The DOM fallback rules still work when the page navigator cannot be extended.
    }
  }

  function syncAdBlockingState() {
    if (!document.documentElement) return false;
    document.documentElement.classList.toggle("cct-site-red", location.hostname.endsWith("civitai.red"));
    document.documentElement.classList.toggle("cct-site-com", location.hostname.endsWith("civitai.com"));
    document.documentElement.classList.toggle("cct-ad-blocking-enabled", isAdBlockingEnabled());
    document.documentElement.classList.toggle("cct-ad-layout-centered", isAdLayoutCenteredEnabled());
    return true;
  }

  function findAdSlot(element) {
    let current = element;

    while (current && current !== document.body) {
      if (current.classList.contains("box-content")) return current;
      current = current.parentElement;
    }

    return null;
  }

  function hasDirectCloseButton(element) {
    return Array.from(element.children).some((child) => child.matches && child.matches("button"));
  }

  function isAdRail(element) {
    return typeof element.className === "string" && element.className.includes("__rail");
  }

  function isVirtualizedAdItem(element) {
    return element.style.position === "absolute" && element.style.contentVisibility === "auto";
  }

  function findAdContainer(element) {
    const slot = findAdSlot(element);
    if (!slot) return null;

    let current = slot;
    let depth = 0;

    while (current && current !== document.body && depth < 4) {
      if (current !== slot && hasDirectCloseButton(current)) return current;
      if (isAdRail(current)) return current;
      if (isVirtualizedAdItem(current)) return current;
      current = current.parentElement;
      depth += 1;
    }

    return slot;
  }

  function findAdElements(root) {
    const elements = [];
    if (root instanceof Element && root.matches(AD_SELECTOR)) elements.push(root);
    if (root && root.querySelectorAll) elements.push(...root.querySelectorAll(AD_SELECTOR));
    return elements;
  }

  function applyAdBlocking(root = document.body) {
    syncAdBlockingState();
    if (!document.body) return;

    if (!isAdBlockingEnabled()) {
      document.querySelectorAll(`.${HIDDEN_CLASS}`).forEach((element) => element.classList.remove(HIDDEN_CLASS));
      return;
    }

    findAdElements(root).forEach((element) => {
      const container = findAdContainer(element);
      if (container) container.classList.add(HIDDEN_CLASS);
    });
  }

  function setAdBlockingEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, String(Boolean(enabled)));
    syncAdBlockingState();
    if (location.hostname.endsWith("civitai.com")) {
      location.reload();
      return;
    }
    applyAdBlocking(document.body);
  }

  function setAdLayoutCenteredEnabled(enabled) {
    localStorage.setItem(LAYOUT_STORAGE_KEY, String(Boolean(enabled)));
    syncAdBlockingState();
  }

  signalNativeAdBlocking();
  if (!syncAdBlockingState()) requestAnimationFrame(syncAdBlockingState);

  CCT.isAdBlockingEnabled = isAdBlockingEnabled;
  CCT.setAdBlockingEnabled = setAdBlockingEnabled;
  CCT.isAdLayoutCenteredEnabled = isAdLayoutCenteredEnabled;
  CCT.setAdLayoutCenteredEnabled = setAdLayoutCenteredEnabled;
  CCT.applyAdBlocking = applyAdBlocking;
})();

(function () {
  "use strict";

  const CCT = window.CCT;
  const MENU_ID = "cct-logo-menu";
  let menuListenersReady = false;

  function getProductName() {
    return "[CCT] Civitai汉化&增强插件";
  }

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
    const svg =
      (icons && icons[name]) ||
      (name === "modelVersionSwitch"
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>'
        : name === "translation"
          ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>'
        : "");
    const className = name === "external" ? "cct-logo-menu-external" : "cct-logo-menu-icon";
    if (!svg) return "";

    return svg
      .replace(/\sclass="[^"]*"/, "")
      .replace("<svg ", `<svg class="${className}" aria-hidden="true" `);
  }

  function updateOriginalDownloadToggle(menu) {
    const toggle = menu.querySelector(".cct-original-download-toggle");
    if (!toggle) return;

    const enabled = CCT.isOriginalDownloadEnabled && CCT.isOriginalDownloadEnabled();
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
  }

  function updateTranslationToggle(menu) {
    const toggle = menu.querySelector(".cct-translation-toggle");
    if (!toggle) return;

    const enabled = !CCT.isTranslationEnabled || CCT.isTranslationEnabled();
    const label = toggle.querySelector(".cct-translation-toggle-label");
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
    if (label) label.textContent = enabled ? "关闭汉化" : "开启汉化";
  }

  function updateQuickCollapseToggle(menu) {
    const toggle = menu.querySelector(".cct-quick-collapse-toggle");
    if (!toggle) return;

    const enabled = !CCT.isQuickCollapseEnabled || CCT.isQuickCollapseEnabled();
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
  }

  function updateModelVersionSwitchToggle(menu) {
    const toggle = menu.querySelector(".cct-model-version-switch-toggle");
    if (!toggle) return;

    const enabled = !CCT.isModelVersionSwitchEnabled || CCT.isModelVersionSwitchEnabled();
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
  }

  function updateAdBlockingToggle(menu) {
    const toggle = menu.querySelector(".cct-ad-blocking-toggle");
    if (!toggle) return;

    const enabled = !CCT.isAdBlockingEnabled || CCT.isAdBlockingEnabled();
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
  }

  function updateAdLayoutCenteredToggle(menu) {
    const toggle = menu.querySelector(".cct-ad-layout-centered-toggle");
    if (!toggle) return;

    const enabled = !CCT.isAdLayoutCenteredEnabled || CCT.isAdLayoutCenteredEnabled();
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
  }

  function bindTooltip(menu) {
    const helps = Array.from(menu.querySelectorAll(".cct-logo-menu-help"));
    if (!helps.length) return;

    helps.forEach((help) => {
      const item = help.closest(".cct-logo-menu-toggle");
      const tooltip = item && item.querySelector(".cct-logo-menu-tooltip");
      if (!tooltip) return;

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
    });
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
    root.className = "cct-logo-root cct-ignore";
    root.setAttribute("aria-label", getProductName());

    const button = document.createElement("button");
    button.type = "button";
    button.className = "cct-logo-button";
    button.setAttribute("aria-haspopup", "menu");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", MENU_ID);
    button.innerHTML = CCT.assets.logoSvg;

    const menu = document.createElement("div");
    menu.id = MENU_ID;
    menu.className = "cct-logo-menu cct-ignore";
    menu.setAttribute("role", "menu");
    menu.hidden = true;
    menu.innerHTML = `
      <div class="cct-logo-menu-title">
        <span>${getProductName()}</span>
        <span class="cct-logo-menu-version">v${(CCT.meta && CCT.meta.version) || "0.0.0"}</span>
      </div>
      <div class="cct-logo-menu-divider" aria-hidden="true"></div>
      <button class="cct-logo-menu-toggle cct-translation-toggle" type="button" role="switch" aria-checked="true">
        <span class="cct-logo-menu-link-main">${iconSvg("translation")}<span class="cct-translation-toggle-label">关闭汉化</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
      </button>
      <button class="cct-logo-menu-toggle cct-original-download-toggle" type="button" role="switch" aria-checked="false">
        <span class="cct-logo-menu-link-main">${iconSvg("download")}<span>下载原始文件</span><span class="cct-logo-menu-help" tabindex="0" aria-label="下载原始文件说明">${iconSvg("question")}</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
        <span class="cct-logo-menu-tooltip" role="tooltip">通常需要进入详情页才能保存原始图片或视频；在外层卡片直接右键保存，拿到的往往只是压缩缩略图。开启后，可在卡片上快速下载原始文件。</span>
      </button>
      <button class="cct-logo-menu-toggle cct-quick-collapse-toggle" type="button" role="switch" aria-checked="true">
        <span class="cct-logo-menu-link-main">${iconSvg("quickCollapse")}<span>快捷折叠</span><span class="cct-logo-menu-help" tabindex="0" aria-label="快捷折叠说明">${iconSvg("question")}</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
        <span class="cct-logo-menu-tooltip" role="tooltip">部分模型的介绍和更新日志很长。展开后如果想继续查看下方的示例图或评论，往往需要滚动很久才能回到原按钮位置再折叠。开启后，页面右下角会显示快捷按钮，用来快速展开或折叠介绍内容。</span>
      </button>
      <button class="cct-logo-menu-toggle cct-model-version-switch-toggle" type="button" role="switch" aria-checked="true">
        <span class="cct-logo-menu-link-main">${iconSvg("modelVersionSwitch")}<span>模型版本快速切换</span><span class="cct-logo-menu-help" tabindex="0" aria-label="模型版本快速切换说明">${iconSvg("question")}</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
        <span class="cct-logo-menu-tooltip" role="tooltip">将模型版本选项卡列表改为侧边栏下拉菜单，方便快速查看和切换不同版本，解决有些模型版本过多，切换时过于麻烦的问题。</span>
      </button>
      <button class="cct-logo-menu-toggle cct-ad-blocking-toggle" type="button" role="switch" aria-checked="true">
        <span class="cct-logo-menu-link-main">${iconSvg("adBlocking")}<span>屏蔽广告</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
      </button>
      <button class="cct-logo-menu-toggle cct-ad-layout-centered-toggle" type="button" role="switch" aria-checked="true">
        <span class="cct-logo-menu-link-main">${iconSvg("adLayoutCentered")}<span>修正页面布局</span><span class="cct-logo-menu-help" tabindex="0" aria-label="修正页面布局说明">${iconSvg("question")}</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
        <span class="cct-logo-menu-tooltip" role="tooltip">Civitai 的模型详情页采用双栏布局，右侧栏用于展示广告。屏蔽广告后，页面仍会保留右侧栏的占位空间，导致主要内容偏向左侧。开启此功能后，会将双栏布局调整为单栏，使主要内容恢复居中显示。</span>
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

    menu.querySelector(".cct-translation-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setTranslationEnabled || !CCT.isTranslationEnabled) return;

      CCT.setTranslationEnabled(!CCT.isTranslationEnabled());
      window.location.reload();
    });

    menu.querySelector(".cct-original-download-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setOriginalDownloadEnabled || !CCT.isOriginalDownloadEnabled) return;

      CCT.setOriginalDownloadEnabled(!CCT.isOriginalDownloadEnabled());
      updateOriginalDownloadToggle(menu);
    });

    menu.querySelector(".cct-ad-blocking-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setAdBlockingEnabled || !CCT.isAdBlockingEnabled) return;

      CCT.setAdBlockingEnabled(!CCT.isAdBlockingEnabled());
      updateAdBlockingToggle(menu);
    });

    menu.querySelector(".cct-ad-layout-centered-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setAdLayoutCenteredEnabled || !CCT.isAdLayoutCenteredEnabled) return;

      CCT.setAdLayoutCenteredEnabled(!CCT.isAdLayoutCenteredEnabled());
      updateAdLayoutCenteredToggle(menu);
    });

    menu.querySelector(".cct-quick-collapse-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setQuickCollapseEnabled || !CCT.isQuickCollapseEnabled) return;

      CCT.setQuickCollapseEnabled(!CCT.isQuickCollapseEnabled());
      updateQuickCollapseToggle(menu);
    });

    menu.querySelector(".cct-model-version-switch-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setModelVersionSwitchEnabled || !CCT.isModelVersionSwitchEnabled) return;

      CCT.setModelVersionSwitchEnabled(!CCT.isModelVersionSwitchEnabled());
      updateModelVersionSwitchToggle(menu);
    });

    updateTranslationToggle(menu);
    updateAdBlockingToggle(menu);
    updateAdLayoutCenteredToggle(menu);
    updateOriginalDownloadToggle(menu);
    updateQuickCollapseToggle(menu);
    updateModelVersionSwitchToggle(menu);
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
    return localStorage.getItem(STORAGE_KEY) !== "false";
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
    button.className = "cct-original-download-button cct-ignore";
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

    const rootElement = root && root.nodeType === Node.ELEMENT_NODE ? root : root && root.parentElement;
    const scope = rootElement && rootElement.querySelectorAll ? rootElement : document;
    const selector = 'a[href^="/images/"], a[href*="/images/"]';
    const links = rootElement && rootElement.matches(selector)
      ? [rootElement, ...scope.querySelectorAll(selector)]
      : Array.from(scope.querySelectorAll(selector));

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

  const CCT = window.CCT;
  const BUTTON_CLASS = "cct-model-spoiler-float-button";
  const STORAGE_KEY = "CCT_QUICK_COLLAPSE_ENABLED";
  let routeWatcherReady = false;

  function isQuickCollapseEnabled() {
    return localStorage.getItem(STORAGE_KEY) !== "false";
  }

  function setQuickCollapseEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, enabled ? "true" : "false");
    injectModelSidebarToggle();
  }

  function isModelDetailPage() {
    return CCT.getCurrentPage && CCT.getCurrentPage() === "models";
  }

  function getSpoilerControl() {
    const controls = Array.from(
      document.querySelectorAll('.mantine-Spoiler-root .mantine-Spoiler-control[aria-controls]')
    ).filter((button) => {
      if (button.classList.contains(BUTTON_CLASS)) return false;
      if (button.closest(".mantine-Accordion-panel")) return false;

      const region = document.getElementById(button.getAttribute("aria-controls"));
      return region && region.classList.contains("mantine-Spoiler-content");
    });

    return (
      controls.find((button) => button.closest('[class*="ModelVersionDetails"][class*="mainSection"]')) ||
      controls.find((button) => /^(show more|hide|显示更多|隐藏)$/i.test(button.textContent.trim())) ||
      controls[0]
    );
  }

  function getFloatingButtonGroup() {
    const scrollTopButton = document.querySelector('button[aria-label="Scroll to top"]');
    if (scrollTopButton && scrollTopButton.parentElement) return scrollTopButton.parentElement;

    const chatbotIcon = document.querySelector(".tabler-icon-message-chatbot");
    const chatbotButton = chatbotIcon && chatbotIcon.closest(".mantine-Button-root");
    return chatbotButton && chatbotButton.parentElement;
  }

  function iconSvg(name) {
    const icons = CCT.assets && CCT.assets.icons;
    const svg = icons && icons[name];
    if (!svg) return "";

    return svg
      .replace(/\sclass="[^"]*"/, "")
      .replace("<svg ", '<svg class="cct-model-spoiler-float-icon" aria-hidden="true" ');
  }

  function getExpanded(control) {
    return control && control.getAttribute("aria-expanded") === "true";
  }

  function syncButton(button) {
    const control = getSpoilerControl();
    const expanded = getExpanded(control);
    const state = control ? (expanded ? "expanded" : "collapsed") : "missing";
    if (button.dataset.cctState === state) return;

    const label = expanded ? "折叠" : "展开";
    const icon = expanded ? iconSvg("collapse") : iconSvg("expand");

    button.dataset.cctState = state;
    button.disabled = !control;
    button.dataset.expanded = expanded ? "true" : "false";
    button.setAttribute("aria-label", label);
    button.innerHTML = `
      <span class="cct-model-spoiler-float-inner">
        ${icon}
        <span>${control ? label : "未找到"}</span>
      </span>
    `;
  }

  function createButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `${BUTTON_CLASS} cct-ignore`;

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const control = getSpoilerControl();
      if (!control) {
        syncButton(button);
        return;
      }

      control.click();
      window.setTimeout(() => syncButton(button), 80);
      window.setTimeout(() => syncButton(button), 260);
    });

    return button;
  }

  function scheduleRouteInject() {
    window.setTimeout(injectModelSidebarToggle, 0);
    window.setTimeout(injectModelSidebarToggle, 120);
    window.setTimeout(injectModelSidebarToggle, 360);
  }

  function bindRouteWatcher() {
    if (routeWatcherReady) return;
    routeWatcherReady = true;

    ["pushState", "replaceState"].forEach((method) => {
      const original = history[method];
      if (typeof original !== "function") return;

      history[method] = function () {
        const result = original.apply(this, arguments);
        scheduleRouteInject();
        return result;
      };
    });

    window.addEventListener("popstate", scheduleRouteInject);
  }

  function injectModelSidebarToggle() {
    bindRouteWatcher();

    if (!isQuickCollapseEnabled() || !isModelDetailPage()) {
      document.querySelectorAll(`.${BUTTON_CLASS}`).forEach((button) => button.remove());
      return;
    }

    const group = getFloatingButtonGroup();
    if (!group) return;

    let button = group.querySelector(`.${BUTTON_CLASS}`);
    if (!button) {
      button = createButton();
    }

    const scrollTopButton = group.querySelector('button[aria-label="Scroll to top"]');
    if (scrollTopButton && scrollTopButton.nextSibling) {
      if (button !== scrollTopButton.nextSibling) group.insertBefore(button, scrollTopButton.nextSibling);
    } else if (button.parentElement !== group) {
      group.appendChild(button);
    }

    syncButton(button);
  }

  CCT.injectModelSidebarToggle = injectModelSidebarToggle;
  CCT.isQuickCollapseEnabled = isQuickCollapseEnabled;
  CCT.setQuickCollapseEnabled = setQuickCollapseEnabled;
})();

(function () {
  "use strict";

  const CCT = window.CCT;
  const ROOT_CLASS = "cct-model-version-dropdown";
  const HIDDEN_CLASS = "cct-model-version-list-hidden";
  const STORAGE_KEY = "CCT_MODEL_VERSION_SWITCH_ENABLED";
  let outsideHandlerReady = false;

  function isModelVersionSwitchEnabled() {
    return localStorage.getItem(STORAGE_KEY) !== "false";
  }

  function setModelVersionSwitchEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, enabled ? "true" : "false");
    injectModelVersionDropdown();
  }

  function isModelDetailPage() {
    return CCT.getCurrentPage && CCT.getCurrentPage() === "models";
  }

  function getVersionListRoots() {
    const roots = Array.from(document.querySelectorAll('[class*="ModelVersionList"][class*="scrollContainer"]'))
      .map((scrollContainer) => scrollContainer.closest(".mantine-Group-root"))
      .filter(Boolean);

    return Array.from(new Set(roots));
  }

  function getVersionListRoot() {
    return getVersionListRoots()
      .filter((root) => getVersionOptions(root).length > 0)
      .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0] || null;
  }

  function getVersionOptions(versionListRoot) {
    return Array.from(versionListRoot.querySelectorAll('button[data-size="compact-sm"]'))
      .map((button, index) => {
        const label = button.textContent.trim().replace(/\s+/g, " ");
        if (!label) return null;

        const style = button.getAttribute("style") || "";
        const parent = button.parentElement;

        return {
          index,
          label,
          button,
          selected: style.includes("blue-filled"),
          paid: Boolean(parent && parent.querySelector(".tabler-icon-bolt")),
        };
      })
      .filter(Boolean);
  }

  function getSidebarColumn(versionListRoot) {
    const listRect = versionListRoot.getBoundingClientRect();
    const columns = Array.from(document.querySelectorAll(".mantine-Grid-col"))
      .filter((column) => !column.contains(versionListRoot))
      .map((column) => ({ column, rect: column.getBoundingClientRect() }))
      .filter(({ rect }) => {
        if (rect.width < 220 || rect.height < 80) return false;
        if (rect.bottom <= 0 || rect.right <= 0) return false;
        return rect.left > listRect.left + Math.min(160, listRect.width * 0.25);
      });

    if (!columns.length) return null;

    columns.sort((a, b) => {
      const topDistance = Math.abs(a.rect.top - listRect.top) - Math.abs(b.rect.top - listRect.top);
      if (topDistance) return topDistance;
      return b.rect.left - a.rect.left;
    });

    return columns[0].column;
  }

  function iconSvg(name) {
    const icons = CCT.assets && CCT.assets.icons;
    const svg = icons && icons[name];
    if (!svg) return "";

    return svg
      .replace(/\sclass="[^"]*"/, "")
      .replace("<svg ", '<svg class="cct-model-version-select-icon" aria-hidden="true" ');
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function createDropdown() {
    const root = document.createElement("div");
    root.className = `${ROOT_CLASS} cct-ignore`;
    root.innerHTML = `
      <button class="cct-model-version-select-trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
        <span class="cct-model-version-select-current"></span>
        ${iconSvg("expand")}
      </button>
      <div class="cct-model-version-select-menu" role="listbox" hidden></div>
    `;

    root.querySelector(".cct-model-version-select-trigger").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setOpen(root, root.dataset.open !== "true");
    });

    root.querySelector(".cct-model-version-select-menu").addEventListener("wheel", (event) => {
      const menu = event.currentTarget;
      const atTop = menu.scrollTop <= 0;
      const atBottom = Math.ceil(menu.scrollTop + menu.clientHeight) >= menu.scrollHeight;

      if ((event.deltaY < 0 && atTop) || (event.deltaY > 0 && atBottom)) {
        event.preventDefault();
      }
    }, { passive: false });

    return root;
  }

  function setOpen(root, open) {
    const trigger = root.querySelector(".cct-model-version-select-trigger");
    const menu = root.querySelector(".cct-model-version-select-menu");

    root.dataset.open = open ? "true" : "false";
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    menu.hidden = !open;
  }

  function activateOption(root, versionListRoot, option, event) {
    event.preventDefault();
    event.stopPropagation();

    if (root.dataset.switching === "true") return;
    root.dataset.switching = "true";
    root.dataset.selectedLabel = option.label;

    setOpen(root, false);
    option.button.click();

    window.setTimeout(() => {
      root.dataset.switching = "false";
      injectModelVersionDropdown();
    }, 120);
    window.setTimeout(injectModelVersionDropdown, 360);
    window.setTimeout(injectModelVersionDropdown, 900);
  }

  function syncDropdown(root, options, versionListRoot) {
    if (root.dataset.switching === "true") return;

    const selected =
      options.find((option) => option.selected) ||
      options.find((option) => option.label === root.dataset.selectedLabel) ||
      options[0];
    const current = root.querySelector(".cct-model-version-select-current");
    const menu = root.querySelector(".cct-model-version-select-menu");
    const selectedLabel = escapeHtml(selected.label);
    const isOpen = root.dataset.open === "true";
    const currentSignature = `${selected.label}\u0000${selected.paid ? "1" : "0"}`;

    if (current.dataset.cctSignature !== currentSignature) {
      current.dataset.cctSignature = currentSignature;
      current.innerHTML = `
        <span class="cct-model-version-select-label">${selectedLabel}</span>
        ${selected.paid ? '<span class="cct-model-version-select-paid" aria-label="Early Access">&#9889;&#65038;</span>' : ""}
      `;
    }

    if (isOpen) return;

    const menuSignature = options
      .map((option) => `${option.label}\u0000${option.paid ? "1" : "0"}\u0000${option.selected ? "1" : "0"}`)
      .join("\u0001");
    const previousButtons = root._cctVersionButtons;
    const sourceButtonsChanged =
      !previousButtons ||
      previousButtons.length !== options.length ||
      options.some((option, index) => previousButtons[index] !== option.button);
    if (root.dataset.cctMenuSignature === menuSignature && !sourceButtonsChanged) return;

    root.dataset.cctMenuSignature = menuSignature;
    root._cctVersionButtons = options.map((option) => option.button);
    menu.innerHTML = "";
    options.forEach((option) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "cct-model-version-select-option";
      item.setAttribute("role", "option");
      item.setAttribute("aria-selected", option.selected ? "true" : "false");
      const label = escapeHtml(option.label);
      item.innerHTML = `
        <span class="cct-model-version-select-label">${label}</span>
        ${option.paid ? '<span class="cct-model-version-select-paid" aria-label="Early Access">&#9889;&#65038;</span>' : ""}
      `;

      item.addEventListener("pointerdown", (event) => activateOption(root, versionListRoot, option, event));
      item.addEventListener("click", (event) => activateOption(root, versionListRoot, option, event));

      menu.appendChild(item);
    });
  }

  function removeDropdowns() {
    document.querySelectorAll(`.${ROOT_CLASS}`).forEach((element) => element.remove());
    document.querySelectorAll(`.${HIDDEN_CLASS}`).forEach((element) => element.classList.remove(HIDDEN_CLASS));
  }

  function bindOutsideHandler() {
    if (outsideHandlerReady) return;
    outsideHandlerReady = true;

    document.addEventListener("click", (event) => {
      document.querySelectorAll(`.${ROOT_CLASS}[data-open="true"]`).forEach((root) => {
        if (!root.contains(event.target)) setOpen(root, false);
      });
    });
  }

  function injectModelVersionDropdown() {
    bindOutsideHandler();

    if (!isModelVersionSwitchEnabled() || !isModelDetailPage()) {
      removeDropdowns();
      return;
    }

    const versionListRoot = getVersionListRoot();
    if (!versionListRoot) {
      removeDropdowns();
      return;
    }

    const options = getVersionOptions(versionListRoot);
    const sidebarColumn = getSidebarColumn(versionListRoot);
    if (!options.length || !sidebarColumn) {
      versionListRoot.classList.remove(HIDDEN_CLASS);
      document.querySelectorAll(`.${ROOT_CLASS}`).forEach((element) => element.remove());
      return;
    }

    getVersionListRoots().forEach((root) => root.classList.add(HIDDEN_CLASS));

    let dropdown = sidebarColumn.querySelector(`:scope > .${ROOT_CLASS}`);
    if (!dropdown) {
      dropdown = createDropdown();
      sidebarColumn.insertBefore(dropdown, sidebarColumn.firstChild);
    }

    document.querySelectorAll(`.${ROOT_CLASS}`).forEach((element) => {
      if (element !== dropdown) element.remove();
    });

    syncDropdown(dropdown, options, versionListRoot);
  }

  CCT.injectModelVersionDropdown = injectModelVersionDropdown;
  CCT.isModelVersionSwitchEnabled = isModelVersionSwitchEnabled;
  CCT.setModelVersionSwitchEnabled = setModelVersionSwitchEnabled;
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "common",
    name: "global",
    component: "index",
    rules: {
      static: {
        // 在多个页面中含义一致的通用词条
        "3D Models": "三维模型",
        "Add to Image Collection": "将图片添加到收藏夹",
        "Adult Products": "成人用品",
        "Action": "动作",
        "All": "全部",
        "All Base Models": "所有基础模型",
        "All Time": "全部时间",
        "Animal": "动物",
        "Announcement": "公告",
        "Anime": "动漫",
        "Anyone can see this collection": "任何人都可以查看此收藏夹",
        "Anything that helps moderators triage (link, account behavior, repeated posts, etc.)":
          "任何有助于版主进行初步判断的信息（链接、账号行为、重复发帖等）",
        "Apply filters": "应用筛选",
        "Architecture": "建筑",
        "Articles": "文章",
        "Astronomy": "天文",
        "Back to selection": "返回选择",
        "Base Model": "基础模型",
        "Block": "屏蔽",
        "Block this user": "屏蔽该用户",
        "Be the first to leave a comment...": "来发表第一条评论吧……",
        "Cannot be empty": "不能为空",
        "Car": "汽车",
        "Cartoon": "卡通",
        "Cat": "猫",
        "Category": "分类",
        "Child abuse and exploitation": "虐待和剥削儿童",
        "Clear all filters": "清除所有筛选条件",
        Close: "关闭",
        "City": "城市",
        "Clothing": "服装",
        "Collections": "收藏夹",
        "Comics": "漫画",
        "Comment": "备注",
        "Comment (optional)": "备注（可选）",
        "content from this user": "该用户的内容",
        "Content that should be reviewed": "应当接受审核的内容",
        "Create": "创建",
        "Created with...": "请选择……",
        "Creators": "创作者",
        "Customize profile": "自定义个人资料",
        "Day": "天",
        "Daily challenges": "每日挑战",
        "Daily Challenges": "每日挑战",
        "Deceased Bodies": "尸体",
        "Deceptive content": "欺骗性内容",
        "Depiction of a real-person likeness": "描绘真实人物形象",
        "Description": "描述",
        "Disturbing": "令人不适的内容",
        "Dog": "狗",
        "Dragon": "龙",
        "e.g., Video Game Characters": "例如：电子游戏角色",
        "e.g.: My favorite video game characters": "例如：我最喜欢的电子游戏角色",
        "e.g.: Video Game Characters": "例如：电子游戏角色",
        "Early Access": "抢先体验",
        "Ending Soon": "即将结束",
        "Emaciated Figures": "极度消瘦的人物",
        "Everyone": "所有人",
        "Explicit Adult Content": "露骨成人内容",
        "Explicit Female Nudity": "明确女性裸露",
        "Explicit Male Nudity": "明确男性裸露",
        "Explosions": "爆炸",
        "Extremist Content": "极端主义内容",
        "False impersonation": "虚假冒充",
        "Fantasy": "奇幻",
        "Female Swimwear/Underwear": "女性泳装或内衣",
        "Filters": "筛选",
        "Followed": "已关注",
        "Food": "美食",
        "Game Character": "游戏角色",
        "Graphic violence": "血腥暴力",
        "Hanging": "上吊",
        "Hate Symbols": "仇恨标志",
        "Hidden": "隐藏内容",
        "Hide": "隐藏",
        "Hide content from this user": "隐藏该用户的内容",
        "Hide content with these tags": "隐藏带有这些标签的内容",
        "Hide this image": "隐藏此图片",
        "Hide this model": "隐藏此模型",
        "Illustrated Nudity": "插画裸露",
        "image to collection": "图片到收藏夹",
        "Images": "图片",
        "Incorrect or misrepresented content": "内容错误或表述不实",
        "Intense Violence/Gore": "强烈暴力或血腥内容",
        "Made On-site": "站内制作",
        "Male Swimwear/Underwear": "男性泳装或内衣",
        "Mature Content": "成人内容",
        "Metadata only": "仅含元数据",
        "Models": "模型",
        "Modifiers": "附加条件",
        "Month": "月",
        "Most Collected": "收藏最多",
        "Most Comments": "评论最多",
        "Most Downloaded": "下载最多",
        "Most Discussed": "讨论最多",
        "Most Entries": "投稿最多",
        "Most Liked": "获赞最多",
        "Most Reactions": "互动最多",
        "Name": "名称",
        "Name of the person or any additional information related to them": "当事人姓名或与其相关的其他补充信息",
        "Nazi-related Content": "纳粹相关内容",
        "Needs Moderator Review": "需要版主审核",
        "New & Upcoming": "最新与即将发布",
        "New collection": "新建收藏夹",
        "Newest": "最新",
        "Nudity": "裸露",
        "Offensive Gestures": "冒犯性手势",
        "Oldest": "最早",
        "Only people with the link can see this collection": "只有拥有链接的人可以查看此收藏夹",
        "Only you and contributors for this collection can see this": "只有你和该收藏夹的贡献者可以查看此收藏夹",
        "Other concern": "其他问题",
        "Originals Only": "仅原创",
        "Outdoors": "户外",
        "Partial Nudity": "部分裸露",
        "Photorealistic depiction of a minor": "未成年人的照片级真实描绘",
        "Physical Violence": "肢体暴力",
        "Photography": "摄影",
        "Photorealistic": "照片级写实",
        "Potential security concern": "潜在安全问题",
        "Post Apocalyptic": "末日后",
        "Privacy": "隐私设置",
        "Private": "私密",
        "Prohibited concepts": "违禁内容",
        "Public": "公开",
        "Publish": "发布",
        "Reason": "原因",
        "Report": "举报",
        "Report image": "举报图片",
        "Reset": "重置",
        "Robot": "机器人",
        "Sale of illegal substances": "销售非法物质",
        "Save": "保存",
        "Save image to collection": "将图片保存到收藏夹",
        "Scheduled": "定时发布",
        "Sci-Fi": "科幻",
        "Select all that apply": "选择所有适用项",
        "Select all": "全选",
        "Select a category": "选择分类",
        "Delete": "删除",
        "Download Selected": "下载所选文件",
        "Image": "图片",
        "Video": "视频",
        "Self-harm": "自残",
        "Sexual Acts": "性行为",
        "Sexual Situations": "性暗示情境",
        "Sexy Attire": "性感服饰",
        "Shop": "商店",
        "Spam": "垃圾内容",
        "Sports Car": "跑车",
        "Submit": "提交",
        "Suggestive Content": "性暗示内容",
        "Tags": "标签",
        "This collection contains mature content": "此收藏夹包含成人内容",
        "Techniques": "生成方式",
        "this image": "此图片",
        "this user": "该用户",
        "Time period": "时间范围",
        "Tools": "工具",
        "Transportation": "交通工具",
        "TOS Violation": "违反服务条款",
        "Unlisted": "不公开",
        "Videos": "视频",
        "View Post": "查看帖子",
        "Violation": "违规类型",
        "Violence": "暴力",
        "Visually Disturbing": "引起强烈不适的内容",
        "Weapon-related Violence": "武器相关暴力",
        "Week": "周",
        "What did you think of this resource?": "你觉得这个资源怎么样？",
        "White Supremacist Content": "白人至上主义内容",
        "Year": "年",
        "You don't have any image collections yet.": "你还没有任何图片收藏夹。",
        "Your collections": "你的收藏夹",
        "By posting to Civitai you agree to our Content Policies.": "发布到 Civitai 即表示你同意我们的内容政策。",
        "By posting to Civitai you agree to our": "发布到 Civitai 即表示你同意我们的",
        "Content Policies": "内容政策",
        "Illegal or exploitative content will be removed and reported.": "违法或剥削性内容将被删除并举报。",
        "Hide challenge entries": "隐藏挑战赛作品",
        "Landscape": "风景",
        "Modern Art": "现代艺术",
        "Add Post": "添加帖子",
        "Copied": "已复制",
        "Copy Url": "复制链接",
        "Copy link": "复制链接",
        "Comments": "评论",
        "Details": "详情",
        "Download": "下载",
        "Follow": "关注",
        "Gallery": "图库",
        "License:": "许可证：",
        "No results found": "未找到结果",
        "No reviews yet": "暂无评价",
        "Other": "其他",
        "MESSAGE:": "消息：",
        "Reviews": "评价",
        "Send": "发送",
        "Send Chat": "发送至聊天",
        "Share": "分享",
        // 用户页与商店共用的个人资料编辑窗口
        "Profile": "个人资料",
        "Prompt": "提示词",
        "Preview": "预览",
        "Negative prompt": "负面提示词",
        "Save Changes": "保存更改",
        "Edit avatar": "编辑头像",
        "Drop image here, should not exceed 50 MB": "将图片拖到这里，大小不得超过 50 MB",
        "Showcase Stats": "展示统计数据",
        "Followers": "关注者",
        "Likes": "获赞",
        "Uploads": "上传数",
        "Downloads": "下载量",
        "Generations": "生成数",
        "Reactions": "互动数",
        "Avatar decoration": "头像装饰",
        "You don't have any avatar decorations yet": "你还没有任何头像装饰",
        "Creator Card Backgrounds": "创作者卡片背景",
        "You don't have any profile backgrounds yet": "你还没有任何个人资料背景",
        "Show badges on profile": "在个人资料中显示徽章",
        "Featured Badge": "精选徽章",
        "Highlighted badges": "高亮徽章",
        "Pin badges to the top of your profile's badge list.": "将徽章置顶显示在个人资料的徽章列表中。",
        "Hidden badges": "隐藏的徽章",
        "Hidden badges won't be shown on your profile.": "隐藏的徽章不会显示在个人资料中。",

        // 用户名牌与展示排行榜
        "Nameplates": "用户名牌",
        "Nameplates change the appearance of your username. They can include special colors or effects. You can earn nameplates by being a subscriber or earning trophies on the site.":
          "用户名牌会改变用户名的外观，可包含特殊颜色或效果。你可以通过订阅会员或在站内赢得奖杯来获取用户名牌。",
        "Nameplate Style": "用户名牌样式",
        "Select style": "选择样式",
        "Your earned nameplate styles will apppear here": "你已获得的用户名牌样式将显示在这里",
        "Your earned nameplate styles will appear here": "你已获得的用户名牌样式将显示在这里",
        "Showcase Leaderboard": "展示排行榜",
        "Choose which leaderboard badge to display on your profile card": "选择要在个人资料卡片上显示的排行榜徽章",
        "Select a leaderboard": "选择排行榜",
        "Creators (90 days)": "创作者（90 天）",
        "Creators (mature)": "创作者（成人）",
        "New creators": "新晋创作者",
        "Buzz daddies": "Buzz 大亨",
        "Top generators": "顶尖生成者",
        "Top trainers": "顶尖训练师",
        "Cosmetic collectors": "装扮收藏家",
        "Creators (z-image)": "创作者（z-image）",
        "Creators (flux)": "创作者（flux）",
        "Creators (sdxl)": "创作者（sdxl）",
        "Creators (pony)": "创作者（pony）",
        "Creators (krea 2)": "创作者（krea 2）",
        "Creators (anima)": "创作者（anima）",
        "Guardians": "守护者",
        "Writers": "作家",
        "Comedians": "喜剧达人",
        "Master generators": "生成大师",
        "Master generators (mature)": "生成大师（成人）",
        "New master generators": "新晋生成大师",
        "Base model creators": "基础模型创作者",
        "Style creators": "风格创作者",
        "Clothing creators": "服装创作者",
        "Character creators": "角色创作者",
        "Architecture creators": "建筑创作者",
        "Background creators": "背景创作者",
        "Poses creators": "姿势创作者",
        "Concept creators": "概念创作者",
        "Vehicle creators": "载具创作者",
        "Asset creators": "素材创作者",
        "Tool creators": "工具创作者",
        "Knights of new order": "新作骑士团",

        // 个人资料链接与页面版块
        "Links": "链接",
        "Social Links": "社交链接",
        "Add new link": "添加新链接",
        "Sponsorship Links": "赞助链接",
        "Profile Page": "个人资料页面",
        "Cover Image": "封面图片",
        "Suggested resolution: 1600x400px": "建议分辨率：1600×400 像素",
        "Have something you want to share with people visiting your profile? Put it here and we'll display it at the top of your page":
          "有想和个人资料访客分享的内容吗？写在这里，我们会将其显示在页面顶部。",
        "Bio": "个人简介",
        "Location": "所在地",
        "Page sections": "页面版块",
        "Drag diferent sections on your profile in order of your preference": "按照你的偏好拖动个人资料中的不同版块进行排序",
        "Drag different sections on your profile in order of your preference": "按照你的偏好拖动个人资料中的不同版块进行排序",
        "Showcase": "展示",
        "Most popular models": "最受欢迎的模型",
        "Most popular articles": "最受欢迎的文章",
        "Images overview": "图片概览",
        "Models overview": "模型概览",
        "Recent reviews": "最近评价",
        "Showcase Items": "展示项目",
        "Select up to 32 items to showcase on your profile. You do this via the \"Add to showcase\" button on models and images":
          "最多选择 32 个项目展示在个人资料中。你可以通过模型和图片上的“添加到展示”按钮进行选择。",
        "You have not selected any items to showcase.": "你还没有选择任何展示项目。",
        "Try adjusting your search or filters to find what you're looking for":
          "请尝试调整搜索条件或筛选器，以找到你想要的内容",
      },
      regexp: [
        {
          pattern: /^drag dif+erent sections on your profile in order of your preference$/i,
          replace: "按照你的偏好拖动个人资料中的不同版块进行排序",
        },
      ],
      selector: [
        {
          selector: '[role="dialog"] *',
          source: "Privacy",
          text: "隐私设置",
        },
      ],
      selectValue: [
        {
          selector: '[role="dialog"] input[readonly]',
          value: "Private",
          text: "私密",
        },
      ],
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
        Users: "用户",
        Bounties: "悬赏",
        "Search Civitai": "探索 Civitai",
        "pro-tip: quick search faster!": "小技巧：使用快捷搜索，效率更高！",
        "open the quick search without leaving your keyboard by tapping the": "无需离开键盘，只需按下",
        "key from anywhere and just start typing.": "键，即可随时打开快捷搜索并直接输入内容。",

        // Create 按钮菜单
        Generate: "生成",
        "Post Images": "发布图片",
        "Post Videos": "发布视频",
        "Upload a Model": "发布模型",
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
        Announcements: "公告",
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
        Leave: "归档",
        "Enable notifications": "启用通知",
        "Disable notifications": "关闭通知",
        "Send message": "发送消息",

        // 用户下拉菜单
        "Add Account": "添加账户",
        Logout: "登出",
        "Logout All": "登出全部",
        Back: "返回",
        "Your Profile": "个人资料",
        Training: "训练",
        "My Collections": "我的收藏夹",
        "Liked Models": "喜欢的模型",
        "Bookmarked Articles": "收藏的文章",
        "My Bounties": "我的悬赏",
        "Your Challenges": "我的挑战",
        "Buzz Dashboard": "Buzz 控制面板",
        "Creator Studio": "创作者工作室",
        "My Vault": "我的保险库",
        Leaderboard: "排行榜",
        Auctions: "拍卖",
        "Knights of New": "新骑士团",
        "Download Link App": "下载 Link App",
        "Creators You Follow": "我关注的创作者",
        "Download History": "下载历史",
        "Getting Started": "入门指南",
        "Light mode": "浅色模式",
        "Dark mode": "深色模式",
        "Account settings": "账户设置",

        // 导航栏
        Home: "首页",
        Bounties: "悬赏",
        Challenges: "挑战",
        Updates: "更新",
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
    type: "layout",
    name: "footer",
    component: "index",
    rules: {
      static: {
        "Terms of Service": "服务条款",
        Safety: "安全",
        API: "API",
        Status: "服务状态",
        "Known Issues": "已知问题",
        Education: "教育",
        Support: "支持",
      },
      selector: [
        {
          selector: 'a[href*="privacy" i]',
          source: "Privacy",
          text: "隐私政策",
        },
      ],
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "layout",
    name: "generate",
    component: "index",
    rules: {
      static: {
        // 挑战弹窗
        "Click here to see the full details, rules and prizes.": "点击此处查看完整详情、规则和奖励。",
        "by CivBot": "作者：CivBot",
        "Submit your Entry": "提交作品",
        "Accept Challenge": "接受挑战",

        // 预设菜单
        Presets: "预设",
        "View presets": "查看预设",
        "Save current values": "保存当前参数",
        "Manage presets": "管理预设",
        "Filter by ecosystem": "按生态系统筛选",
        "No presets match the selected filters.": "没有符合所选筛选条件的预设。",
        "Need help? Start the tour!": "需要帮助？开始引导！",

        // 生成队列与内容流
        Queue: "队列",
        Feed: "生成记录",
        "The queue is empty": "队列为空",
        "Try generating new images with our resources": "尝试使用我们的资源生成新图片",
        "Some new filtering options don't apply retroactively.": "部分新的筛选选项不会追溯应用于已有内容。",

        // 图片生成工作流
        "Create Image": "创建图片",
        "Generate an AI image from text": "根据文本生成 AI 图片",
        Draft: "草稿",
        "Fast generation for quick iterations": "快速生成，便于反复调整",
        "Create + Face Fix": "创建并修复面部",
        "Generate with automatic face correction": "使用自动面部修复生成图片",
        "Create + Hires Fix": "创建并高清修复",
        "Generate with upscaling for higher detail": "通过放大提升图片细节",
        "Image Variations": "生成相似图片",
        "Generate a variation of an existing image": "基于现有图片生成相似图片",
        "Image to Image": "图生图",
        "Generate or edit using reference images": "使用参考图片生成或编辑",
        "Image Face Fix": "图片面部修复",
        "Fix faces in an existing image": "修复现有图片中的面部",
        "Image Hires Fix": "图片高清修复",
        "Hires fix from an existing image": "对现有图片进行高清修复",
        Upscale: "放大",
        "Increase image resolution": "提高图片分辨率",
        "Remove Background": "移除背景",
        "Remove the background from an image": "移除图片背景",
        "Control Preprocessor": "ControlNet 预处理器",
        "Run a ControlNet preprocessor on an image (canny, openpose, depth, etc.)":
          "对图片运行 ControlNet 预处理器（canny、openpose、depth 等）",
        "Extract Metadata": "提取元数据",
        "Extract generation parameters from an image": "从图片中提取生成参数",

        // 视频、音乐与 3D 生成工作流
        "Create Video": "创建视频",
        "Generate video from text": "文生视频",
        "Image to Video": "图生视频",
        "Generate video from an image": "从图片生成视频",
        "First/Last Frame": "首尾帧",
        "Generate video from start and end images": "根据起始帧和结束帧生成视频",
        "Reference to Video": "参考图生视频",
        "Generate video using a reference image": "使用参考图片生成视频",
        "Increase video resolution": "提高视频分辨率",
        Interpolate: "插帧",
        "Smooth video by adding frames": "通过补帧使视频更流畅",
        "Edit Video": "编辑视频",
        "Edit a video with AI": "使用 AI 编辑视频",
        "Create Music": "创作音乐",
        "Generate music from text description and lyrics": "根据文本描述和歌词生成音乐",
        "Create 3D Model": "创建 3D 模型",
        "Generate a 3D model from a text prompt (PolyGen via Meshy)":
          "根据文本提示词生成 3D 模型（PolyGen via Meshy）",
        "Generate a 3D model from a source image (Meshy, Tripo, or Hunyuan3D)":
          "根据源图片生成 3D 模型（Meshy、Tripo 或 Hunyuan3D）",

        // 图片生成参数
        "Text to Image": "文生图",
        Model: "模型",
        "Models are the resources you're generating with. Using a different base model can drastically alter the style and composition of images, while adding additional resources can change the characters, concepts and objects.":
          "模型是生成时使用的核心资源。更换基础模型会显著改变图片的风格和构图，添加附加资源则可以改变角色、概念和物体。",
        "Additional Resources": "附加资源",
        Add: "添加",
        "No resources selected": "未选择资源",
        Enhance: "优化",
        "Type out what you'd like to generate in the prompt, add aspects you'd like to avoid in the negative prompt.":
          "在提示词中描述你想生成的内容，并在负面提示词中添加需要避免的元素。",
        "Aspect Ratio": "宽高比",
        "Output Settings": "输出设置",
        Standard: "标准",

        // 高级参数
        Advanced: "高级",
        "CFG Scale": "CFG 强度",
        Creative: "创意",
        Balanced: "平衡",
        Precise: "精准",
        Sampler: "采样器",
        Fast: "快速",
        Popular: "热门",
        Steps: "步数",
        High: "高",
        Seed: "种子",
        Random: "随机",
        Custom: "自定义",
        "CLIP Skip": "CLIP 跳过层数",
        "Select VAE": "选择 VAE",
        "Enhanced Compatibility": "增强兼容性",
        "We've updated our generation engine for better performance, but older prompts may look different. Turn this on to make new generations look more like your originals.":
          "我们更新了生成引擎以提升性能，但旧提示词的生成效果可能有所不同。开启此项可让新生成结果更接近原有效果。",
        ControlNets: "ControlNet",
        "Steer generation using a reference image. Add up to four control signals.":
          "使用参考图片引导生成，最多可添加四个控制信号。",
        "Add ControlNet": "添加 ControlNet",
        Breakdown: "明细",
        QTY: "数量",
        "Controls how closely the generation follows the text prompt.": "控制生成结果遵循文本提示词的程度。",
        "Each will produce a slightly (or significantly) different result.": "每个结果都会略有（或显著）不同。",
        "These provide additional color and detail improvements.": "这些资源可以进一步改善色彩和细节。",
        "Output Format": "输出格式",
        "Request Priority": "请求优先级",
        Highest: "最高",

        // 生成费用
        "Blue Buzz can't generate mature content without a membership": "未开通会员时，Blue Buzz 无法生成成人内容",
        "Pay with": "支付方式",
        "Generation Cost Breakdown": "生成费用明细",
        "BASE COST": "基础费用",
        "Base Cost": "基础费用",
        TIPS: "打赏",
        "Creator Tip": "创作者打赏",
        "Civitai Tip": "Civitai 打赏",
        Total: "合计",

        // 生成结果与详情
        "Creations are kept in the Generator for 30 days. Download or Post them to your Profile to save them!":
          "生成内容会在生成器中保留 30 天。请下载或发布到个人资料中进行保存！",
        "Show more": "显示更多",
        "Additional Details": "附加详情",
        Workflow: "工作流",
        "Output format": "输出格式",
        Ecosystem: "生态系统",
        Quantity: "数量",
        "Generate with this resource": "使用此资源生成",
        "User Buzz Update": "用户 Buzz 更新",
        "Copy Workflow ID": "复制工作流 ID",
        "Buzz Transactions": "Buzz 交易记录",

        // 生成记录筛选
        Interactions: "互动",
        Favorited: "已收藏",
        Liked: "已点赞",
        Disliked: "已点踩",
        "Generation Type": "生成类型",
        Audio: "音频",
        "All Models": "所有模型",
        "All Workflows": "所有工作流",
        "Date Range": "日期范围",
        From: "起始",
        To: "截止",
        "Start date": "开始日期",
        "End date": "结束日期",
        Status: "任务状态",
        "Hide Failed": "隐藏失败任务",
        "Delete selected": "删除所选项",
        "Apply workflow to selected": "将工作流应用到所选项",
        "Post your generations to earn Buzz!": "发布你的生成作品以赚取 Buzz！",
        "Copy Generation Data": "复制生成数据",
        "Open in New Tab": "在新标签页中打开",

        // 新手引导
        "Getting Started with Content Generation": "内容生成入门",
        "Welcome to the content generation tool! This tour will guide you through the process.":
          "欢迎使用内容生成工具！本引导将带你了解完整的操作流程。",
        Skip: "跳过",
        Next: "下一步",
        Back: "返回",
        Done: "完成",
        "Accept the Terms": "接受条款",
        "Before generating content, you must accept the terms of service.": "生成内容前，你必须接受服务条款。",
        "Image Generation Terms": "图片生成条款",
        "By using the image generator you confirm that you have read and agree to our":
          "使用图片生成器即表示你确认已阅读并同意入门流程中展示的",
        "presented during onboarding. Failure to abide by our": "。如不遵守我们的",
        "will result in the loss of your access to the image generator. Illegal or exploitative content will be removed and reported.":
          "，你将失去图片生成器的使用权限。违法或剥削性内容将被删除并举报。",
        "I Confirm, Start Generating": "我已确认，开始生成",
        "Start Here": "从这里开始",
        "Looks like you are remixing an image. You can modify the prompt here to generate an image based on the remix.":
          "你似乎正在对图片进行 Remix。你可以在这里修改提示词，基于该 Remix 生成图片。",
        "Submit Your Prompt": "提交提示词",
        "You can submit your prompt by clicking this button and see the magic happen!":
          "点击此按钮即可提交提示词，见证奇妙效果！",
        "Your Generation Queue": "你的生成队列",
        "This is where your generated media is stored, along with all the generation details.":
          "你生成的媒体及其全部生成详情都会保存在这里。",
        "Your Generation Feed": "你的生成记录",
        "View all your generated media here in a single scrollable view.":
          "在这个可滚动视图中集中查看你生成的全部媒体。",

        // 成人内容限制提示
        "Blue Buzz can't generate mature content": "Blue Buzz 无法生成成人内容",
        "Your generation will be blocked if it produces mature results. Blue Buzz is limited to safe-for-work content only.":
          "如果生成结果包含成人内容，本次生成将被阻止。Blue Buzz 仅限生成非成人内容。",
        "Unlock mature content with a membership": "开通会员以解锁成人内容",
        "Members can generate mature content on Civitai.red. Your membership from Civitai.com carries over automatically.":
          "会员可在 Civitai.red 生成成人内容。你在 Civitai.com 的会员资格会自动同步。",
        "Become a member": "成为会员",
        "Continue anyway": "仍然继续",
      },
      regexp: [
        {
          pattern: /^(\d+) of (\d+)$/i,
          replace: "第 $1 步，共 $2 步",
        },
        {
          pattern: /^ends on (.+)$/i,
          replace: "结束时间：$1",
        },
        {
          pattern: /^join the fun and create your masterpiece with (.+)!$/i,
          replace: "加入挑战，使用 $1 创作你的杰作！",
        },
        {
          pattern: /^claim (\d+) buzz$/i,
          replace: "领取 $1 Buzz",
        },
        {
          pattern: /^(\d+)\/(\d+) slots?$/i,
          replace: "$1/$2 个槽位",
        },
        {
          pattern: /^(\d+) jobs? in queue$/i,
          replace: "队列中有 $1 个任务",
        },
        {
          pattern: /^your position in queue:\s*(\d+)$/i,
          replace: "队列位置：$1",
        },
        {
          pattern: /^estimated start time:\s*(.+)$/i,
          replace: "预计开始时间：$1",
        },
        {
          pattern: /^([\d,]+) buzz has been added to your buzz account$/i,
          replace: "$1 Buzz 已添加到你的 Buzz 账户",
        },
        {
          pattern: /^(\d+) selected$/i,
          replace: "已选择 $1 项",
        },
      ],
      selector: [
        {
          selector: "button",
          textSelector: ".mantine-Button-label",
          source: "Post",
          text: "发布",
        },
        {
          selector: "button",
          source: "Post",
          text: "发布",
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
      static: {
        // 首页设置按钮
        "Manage Home Page": "管理首页",
        "Expect frequent changes.": "此功能可能会频繁调整。",
        "Civitai Home Blocks": "Civitai 首页模块",
        "All home blocks selected": "已选择全部首页模块",
        "All civitai home blocks are already selected.": "所有 Civitai 首页模块均已选择。",
        "Your Home": "你的首页",
        "No home blocks selected": "未选择任何首页模块",
        "By leaving this empty you will end up with our default recommended home page setup.": "如果将此留空，则会使用我们默认推荐的主页设置。",

        // 首页内容
        "Featured Images": "精选图片",
        "All sorts of cool pictures created by our community, from simple shapes to detailed landscapes or human faces. A virtual canvas where you can unleash your creativity or get inspired.":
          "社区创作的各种精彩图片，从简单图形到细腻风景或人物面孔应有尽有。在这片虚拟画布上，你可以尽情发挥创意，也可以从中获取灵感。",
        "Explore all images": "浏览所有图片",
        "Featured Models": "精选模型",
        "A list of all featured models on the site.": "网站上的所有精选模型。",
        "Explore all models": "浏览所有模型",
        "View auctions": "查看拍卖",
        "New & Upcoming Creators": "新晋创作者",
        "Popular work from creators who just got started": "新晋创作者的热门作品",
        "Browse their work": "浏览他们的作品",
        "New & Upcoming Model Creators": "新晋模型创作者",
        "Popular models from creators who just got started": "新晋创作者的热门模型",
        "Browse their models": "浏览他们的模型",
        "Buzz Beggars Board": "Buzz 悬赏榜",
        "Featured Collections": "精选收藏夹",
        "Ran out of Buzz while playing? Or want to be generous? Jump in.": "玩着玩着 Buzz 用完了？或者想慷慨解囊？快来参与吧。",
        "Beg or Give": "求助或赠送",
        "Curated Collection by": "精选收藏夹，来自",
        "Highly creative": "极具创意",
        "View Collection": "查看收藏夹",
        "Top Creators": "顶尖创作者",
        "View more": "查看更多",
      },
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "models",
    component: "index",
    rules: {
      static: {
        // 模型分类导航
        Character: "角色",
        Style: "风格",
        Concept: "概念",
        Background: "背景",
        Poses: "姿势",
        Tool: "工具",
        Assets: "素材",
        Vehicle: "载具",
        Buildings: "建筑",
        Objects: "物体",

        // 排序方式
        "Highest Rated": "评分最高",
        "Most Images": "图片最多",

        // 筛选面板
        "Model status": "模型状态",
        "On-site Generation": "支持站内生成",
        Featured: "精选",
        "Model types": "模型类型",
        "Checkpoint type": "Checkpoint 类型",
        Trained: "训练",
        Merge: "合并",
        "File format": "文件格式",

        // Models 页面图片卡片操作菜单
        "Report resource": "举报资源",

        // Models 页面：屏蔽用户确认窗口
        "Block User": "屏蔽用户",
        "Are you sure you want to block this user? Once a user is blocked, you won't see their content again and they won't see yours.":
          "确定要屏蔽该用户吗？屏蔽后，你将无法再看到该用户的内容，对方也无法看到你的内容。",
        "Yes, block the user": "是，屏蔽该用户",

        // Models 页面：举报模型与举报图片窗口
        "Report model": "举报模型",
        "Claim imported model": "认领已导入的模型",
        "This uses my art": "此模型使用了我的作品",

        // Models 页面：举报表单字段
        Email: "邮箱",
        Phone: "电话",

        // Models 页面：作品被模型使用申诉
        "If you believe that this model may have been trained using your art, please complete the form below for review. A review of the claim will only be opened if this is placed by the original artist.":
          "如果你认为该模型可能使用了你的作品进行训练，请填写以下表单以供审核。仅当申诉由原创作者本人提交时，我们才会受理。",
        "We will contact you at this address to verify the legitimacy of your claim":
          "我们将通过此邮箱联系你，以核实申诉的真实性",
        "Images for comparison": "用于对比的图片",
        "Drag images here or click to select files": "将图片拖放到此处，或点击选择文件",
        "Attach up to 10 files, each file should not exceed 50 MB":
          "最多可上传 10 个文件，每个文件不得超过 50 MB",
        "Are you interested in having an official model of your art style created and attributed to you?":
          "你是否有兴趣创建一个以你的艺术风格为基础，并注明归属于你的官方模型？",
        "You would receive 70% of any proceeds made from the use of your model on Civitai.":
          "你将获得该模型在 Civitai 上产生收益的 70%。",
        "I'm interested": "我感兴趣",
        "Not at this time": "暂时不考虑",

        // Models 页面：添加到模型收藏夹窗口
        "Add to Model Collection": "将模型添加到收藏夹",
        "Favorite Models": "收藏的模型",

        // 模型详情页
        "Updated:": "更新于：",
        Like: "点赞",
        "Add To Vault": "添加到保险库",
        "Stop getting notifications for this model": "停止接收此模型的通知",
        "Get notifications for this model": "接收此模型的通知",
        "Add to collection": "添加到收藏夹",
        "Bid to feature this model": "竞价推广此模型",
        // 部分菜单项会把 Hide 和后半句拆成不同的文本节点。
        "this model": "此模型",
        "content with these tags": "带有这些标签的内容",
        SafeTensor: "SafeTensor",
        Unfollow: "取消关注",
        "processing...": "处理中……",
        Type: "类型",
        Stats: "统计",
        "Generation License Fee": "生成许可费",
        Published: "发布于",
        Hash: "哈希",
        AIR: "AIR",
        Tensors: "张量",
        "Show More": "展开",
        "Suggested Resources": "推荐资源",
        "These are resources suggested by the creator of this model. They may be related to this model or created by the same user.":
          "这些是该模型创作者推荐的资源，可能与此模型相关，也可能由同一位用户创作。",
        Discussion: "讨论",
        "Add Comment": "添加评论",
        "Load more": "加载更多",
        "Add Review": "添加评价",

        // 抢先体验与捐赠支持
        "The creator of this": "此",
        "has set this version to": "的创作者已将该版本设为",
        "and as such it is only available for people who purchase it. This":
          "，因此该版本仅供购买者使用。此",
        "will be available for free in": "将在",
        here: "查看文章",
        "here.": "查看文章",
        "Notify me when it's available.": "开放时通知我",
        "Support this model": "支持此模型",
        "The creator of this Checkpoint has set a donation goal! You can donate to make this resource available to everyone before the end of Early Access.":
          "此 Checkpoint 的创作者设定了捐赠目标！你可以通过捐赠，让所有人在抢先体验结束前使用此资源。",
        "The creator of this Checkpoint has set a donation goal! You can donate to make this resource available to everyone before the end of":
          "此 Checkpoint 的创作者设定了捐赠目标！你可以通过捐赠，让此资源提前向所有人开放。当前阶段：",
        "Donation Goal": "捐赠目标",
        Donate: "捐赠",

        // 创建与发布模型
        "Publish a Model": "发布模型",
        "Use a template": "使用模板",
        "Create your model": "创建模型",
        "Add version": "添加版本",
        "Upload files": "上传文件",
        "Create a post": "创建帖子",
        "Selecting the closest match helps users find your resource.":
          "选择最匹配的分类，有助于用户找到你的资源。",
        "Search or create tags for your model": "搜索或创建模型标签",
        "How to Upload a Model": "如何上传模型",

        // 模型模板
        "Your models": "你的模型",
        "Copy settings only": "仅复制设置",
        "Leaves out the template's description and tags": "不复制模板的描述和标签",
        "Search your models...": "搜索你的模型……",

        // 模型描述与展示收藏夹
        "Tell us what your model does": "请介绍你的模型用途",
        "What does your model do? What's it for? What is your model good at? What should it be used for? What is your resource bad at? How should it not be used?":
          "你的模型能做什么？它适合哪些用途？擅长什么？应该如何使用？有哪些不足？哪些用途不适合使用？",
        "Showcase Collection": "展示收藏夹",
        "Select the collection this model belongs to": "选择此模型所属的收藏夹",
        "Click here to select a collection": "点击选择收藏夹",
        "Creator Controls: metric privacy": "创作者控制：统计数据隐私",
        "Hide these public stats on this model's page and cards. Requires an active Creator Program membership — these only apply while your membership is active.":
          "隐藏此模型详情页和卡片上的公开统计数据。此功能需要有效的创作者计划会员资格，且仅在会员有效期间生效。",
        "Hide tipped / earned Buzz": "隐藏获赠或赚取的 Buzz",
        "Hide download count": "隐藏下载次数",
        "Hide generation count": "隐藏生成次数",

        // 选择展示收藏夹
        "Select Model Showcase Collection": "选择模型展示收藏夹",
        "Search...": "搜索……",
        "No collections found": "未找到收藏夹",
        "It looks like we couldn't find any matching your query.": "未找到与你的搜索条件匹配的收藏夹。",

        // 使用许可与内容声明
        "When using this model, I give permission for users to:": "使用此模型时，我允许用户：",
        "Use without crediting me": "无需注明我的署名即可使用",
        "Share merges of this model": "分享此模型的合并版本",
        "Use different permissions on merges": "为合并版本设置不同许可",
        "Learn more about how licensing works by reading our": "阅读我们的许可指南，详细了解许可规则：",
        "Licensing Guide.": "许可指南",
        "Commercial Use": "商业用途",
        "Select all permissions you would like to apply to your model.": "选择要应用于此模型的所有许可权限。",
        "Sell generated images": "出售生成的图片",
        "Use on Civitai generation service": "用于 Civitai 生成服务",
        "Use on other generation services": "用于其他生成服务",
        "Sell this model or merges": "出售此模型或其合并版本",
        "This resource:": "此资源：",
        "Depicts an actual person": "描绘真实人物",
        "This model was trained on real imagery of a living, or deceased, person, or depicts a character portrayed by a real-life actor or actress. E.g. Tom Cruise or Tom Cruise as Maverick.":
          "此模型使用在世或已故真实人物的影像进行训练，或者描绘由真人演员扮演的角色。例如：汤姆·克鲁斯本人，或汤姆·克鲁斯饰演的“独行侠”。",
        Yes: "是",
        No: "否",
        "Is intended to produce mature themes": "旨在生成成人主题内容",
        "Intended to depict a minor character": "旨在描绘未成年角色",
        "Cannot be used for NSFW generation": "不可用于生成 NSFW 内容",
        "I acknowledge that I have reviewed the choices above, selected the appropriate option, and understand that my account may be at risk if the selection is found to be incorrect.":
          "我确认已查看上述选项并作出适当选择，也理解如果选择有误，我的账号可能面临风险。",

        // 站内 LoRA 训练
        "Create your LoRA": "创建 LoRA",
        "Add training data": "添加训练数据",
        "Review and Submit": "审核并提交",
        "Choose your media type": "选择媒体类型",
        "Choose your LoRA type": "选择 LoRA 类型",
        "A specific person or character, realistic or anime": "特定人物或角色，可以是真实风格或动漫风格",
        "A time period, art style, or general look and feel": "特定时代、艺术风格或整体视觉效果",
        "Objects, clothing, anatomy, poses, etc.": "物体、服装、人体结构、姿势等",
        Effect: "特效",
        "Animations or video effects": "动画或视频特效",
        "How to Use the On-site LoRA Trainer": "如何使用站内 LoRA 训练器",
        "Temporarily disabled - check back soon!": "暂时不可用，请稍后再来查看！",
      },
      regexp: [
        {
          pattern: /^Collection\s*-\s*(\d+)\s+items?$/i,
          replace: (match) => `收藏夹 - ${match[1]} 项`,
        },
        {
          pattern: /^(\d+)\/10 uploaded files$/i,
          replace: (match) => `${match[1]}/10 个文件已上传`,
        },
      ],
      selector: [
        {
          selector: '[role="alert"] [id$="-body"] p',
          textReplacements: [
            {
              pattern: /\s+or once the donation goal is met\. If you want to know more, check out our article\s*$/i,
              replace: " 后免费开放，或在达成捐赠目标后免费开放。如需了解更多，请阅读我们的相关文章：",
            },
          ],
        },
        {
          selector: '.mantine-Spoiler-control[aria-expanded="true"]',
          text: "收起",
        },
      ],
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "images",
    component: "index",
    rules: {
      static: {
        // 图片详情信息
        Process: "生成过程",
        "Generation data": "生成数据",
        "Resources used": "使用的资源",
        "Other metadata": "其他元数据",
        "COPY ALL": "全部复制",
        TAG: "标签",
        TIP: "打赏",
        TIPPING: "打赏中",

        // 评论区
        Discussion: "讨论",
        Reply: "回复",
        "Type your comment...": "输入你的评论……",
        "Type your comment…": "输入你的评论……",
        "Load More Comments": "加载更多评论",
      },
      regexp: [
        {
          pattern: /^show (\d+) more$/i,
          replace: "再显示 $1 项",
        },
        {
          pattern: /^cfg\s*scale:\s*(.+)$/i,
          replace: "CFG 强度：$1",
        },
        {
          pattern: /^steps:\s*(.+)$/i,
          replace: "步数：$1",
        },
        {
          pattern: /^sampler:\s*(.+)$/i,
          replace: "采样器：$1",
        },
        {
          pattern: /^seed:\s*(.+)$/i,
          replace: "种子：$1",
        },
      ],
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Images",
          text: "图片",
        },
      ],
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "videos",
    component: "index",
    rules: {
      static: {},
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Videos",
          text: "视频",
        },
      ],
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "3d-models",
    component: "index",
    rules: {
      static: {
        // 3D 模型卡片与预览操作
        "Hide this 3D model": "隐藏此 3D 模型",
        "this 3D model": "此 3D 模型",
        "Preview in-line": "页面内预览",
        "Open model page": "打开模型页面",
        Plain: "纯色",
        Studio: "影棚",
        Light: "明亮",
        Transparent: "透明",
        "Reset View": "重置视角",
        "Reset the camera to the initial fitted view.": "将相机重置为初始适配视角。",
        "Generate with this image": "使用此图片生成",
        "Capture the current view and send it to the generator as an img2img reference.":
          "捕获当前视图，并将其作为图生图参考发送到生成器。",
        "No files yet": "暂无文件",
        "The 3D files for this model are still being processed.": "此模型的 3D 文件仍在处理中。",

        // 3D 模型详情
        "Write a review": "撰写评价",
        Prompt: "提示词",
        Topology: "拓扑结构",
        "Target polycount": "目标多边形数量",
        Symmetry: "对称方式",
        auto: "自动",
        "PBR materials": "PBR 材质",
        Seed: "种子",
        Animation: "动画",
        triangle: "三角面",
        Yes: "是",
        No: "否",
        "All Rights Reserved": "保留所有权利",

        // 评论

        // 图库筛选
        "Media type": "媒体类型",
        Resources: "资源",
        "Hide manually-added": "隐藏手动添加的内容",
        "Hide auto-detected": "隐藏自动检测的内容",
      },
      regexp: [
        {
          pattern: /^Loading 3D model(?:\.{3}|…)?$/i,
          replace: "正在加载 3D 模型……",
        },
        {
          pattern: /^Download \(([^)]+)\)$/i,
          replace: (match) => `下载（${match[1]}）`,
        },
      ],
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "3D Models",
          text: "3D 模型",
        },
      ],
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "articles",
    component: "index",
    rules: {
      static: {
        // 文章分类
        Story: "故事",
        Musing: "随想",
        Workflows: "工作流",
        "Generation Guide": "生成指南",
        News: "新闻",
        "Tool Guide": "工具指南",
        "Training Guide": "训练指南",
        "Resource Guide": "资源指南",
        "Comparative Study": "对比研究",
        "Data Prep": "数据准备",
        "Video Generation Guide": "视频生成指南",
        "ML Research": "机器学习研究",

        // 排序方式
        "Most Bookmarks": "收藏最多",
        "Recently Updated": "最近更新",

        // 文章卡片操作菜单
        "Report article": "举报文章",

        // 创建文章
        "Create an Article": "创建文章",
        "How to Write Articles": "如何撰写文章",
        "Save Draft": "保存草稿",
        "Your article is currently": "你的文章当前处于",
        "Categories determine what kind of article you're making. Selecting a category that's the closest match to your subject helps users find your article":
          "分类用于确定文章的内容类型。选择最贴近文章主题的分类，有助于用户找到你的文章。",
        "Tags are how users filter content on the site. It's important to correctly tag your content so it can be found by interested users":
          "标签是用户在网站上筛选内容的依据。请为内容添加准确的标签，以便感兴趣的用户能够找到它。",
        Title: "标题",
        "e.g.: How to create your own LoRA": "例如：如何创建自己的 LoRA",
        Content: "内容",
        "Click the publish button to make your article public to share with the Civitai community for comments and reactions.":
          "点击发布按钮公开文章，与 Civitai 社区分享并接收评论和互动。",
        "Maturity Level": "内容分级",
        "Your preferred rating. The final rating is the max of your choice, cover and content images, text moderation, and any actioned NSFW reports. Updates automatically when those signals change.":
          "你选择的分级仅作为偏好。最终分级将采用所选等级、封面与正文图片分级、文本审核结果以及已处理 NSFW 举报中的最高等级，并在相关信号变化时自动更新。",

        // 内容分级指南
        "Browsing Level Guide": "浏览分级指南",
        "Safe for work. No naughty stuff": "适合工作场所浏览，不含不宜内容",
        "Revealing clothing, small bulges, subtle nipple outline, posing/sexualized bare chested men, light gore, violence":
          "暴露服装、轻微凸起、隐约可见的乳头轮廓、带有性暗示姿势的裸胸男性、轻度血腥或暴力内容",
        "Adult themes and situations, partial nudity, bikinis, big bulges, sexual situations, graphic violence":
          "成人主题和情境、部分裸露、比基尼、明显凸起、性暗示情境或血腥暴力",
        "Graphic nudity, genitalia, adult objects, or settings": "露骨裸露、生殖器、成人用品或成人场景",
        "Sexual Acts, masturbation, ejaculation, cum, vore, anal gape, extremely disturbing content":
          "性行为、自慰、射精、精液、吞食癖、肛门扩张或极度令人不适的内容",

        // 内容分级标签
        "WEAPON VIOLENCE": "武器暴力",
        "WIDE HIPS": "宽臀",
        "REVEALING CLOTHES": "暴露服装",
        DOWNBLOUSE: "低领走光",
        "CONVENIENT CENSORING": "巧妙遮挡",
        CORPSES: "尸体",
        SUGGESTIVE: "性暗示",
        "ORAL INVITATION": "口交暗示",
        PG13: "PG-13",
        SEXY: "性感",
        "HUGE BREASTS": "巨乳",
        "THICK THIGHS": "粗壮大腿",
        "SEXUAL SITUATIONS": "性暗示情境",
        "MALE NUDITY": "男性裸露",
        "OFFENSIVE CONTENT": "令人不适的内容",
        "MALE SWIMWEAR OR UNDERWEAR": "男性泳装或内衣",
        "FEMALE SWIMWEAR OR UNDERWEAR": "女性泳装或内衣",
        "PARTIAL NUDITY": "部分裸露",
        UNDRESSED: "未着装",
        "FEMALE NUDITY": "女性裸露",
        "BREASTS OUT": "乳房裸露",
        "EXPOSED FEMALE NIPPLE": "女性乳头裸露",
        "BREAST OUT": "单侧乳房裸露",
        LINGERIE: "女式内衣",
        "MALE UNDERWEAR": "男性内衣",
        "HAIR OVER BREASTS": "头发遮胸",
        "FEMALE SWIMWEAR": "女性泳装",
        "GIGANTIC BREASTS": "超大乳房",
        "NO PANTIES": "未穿内裤",
        "GRAPHIC VIOLENCE OR GORE": "血腥暴力",
        "COVERED NIPPLES": "遮挡乳头",
        "HUGE BUTT": "巨臀",
        "STRAPLESS LEOTARD": "无肩带紧身衣",
        "SITTING ON FACE": "坐脸",
        "EMACIATED BODIES": "极度消瘦的人体",
        "ONE BREAST OUT": "单侧乳房裸露",
        "FEMALE UNDERWEAR": "女性内衣",
        NUDE: "裸体",
        "GRAPHIC MALE NUDITY": "露骨男性裸露",
        "ADULT TOYS": "成人玩具",
        "ILLUSTRATED EXPLICIT NUDITY": "插画露骨裸露",
        "EXPLICIT NUDITY": "露骨裸露",
        "GRAPHIC FEMALE NUDITY": "露骨女性裸露",
        HENTAI: "色情动漫",
        FUTANARI: "扶他",
        PORN: "色情内容",
        "SEXUAL INTENT": "性意图",
        GENITALS: "生殖器",
        VORE: "吞食癖",
        SEX: "性行为",
        ORAL: "口交",
        "SEXUAL ACTIVITY": "性活动",
        ANAL: "肛交",
        BLOWJOB: "口交",
        "DILDO RIDING": "骑乘假阳具",
        CUM: "精液",

        // 封面与附件
        "Cover Image": "封面图片",
        "Suggested resolution: 850 x 400": "建议分辨率：850 × 400",
        Attachments: "附件",
        "Drop your files or click to select": "将文件拖到这里，或点击选择",
        "Attach up to 10 files. Each file should not exceed 30 MB. Accepted file types: .pdf, .zip, .json, .yaml, .yml, .txt, .md, .py":
          "最多可添加 10 个文件，每个文件不得超过 30 MB。支持的文件类型：.pdf、.zip、.json、.yaml、.yml、.txt、.md、.py",
      },
      regexp: [
        {
          pattern: /^attach up to 10 files\. each file should not exceed 30 mb\. accepted file types:\s*(.+)$/i,
          replace: (match) => `最多可添加 10 个文件，每个文件不得超过 30 MB。支持的文件类型：${match[1]}`,
        },
        {
          pattern: /^(\d+)\/10 uploaded files$/i,
          replace: (match) => `${match[1]}/10 个文件已上传`,
        },
      ],
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Articles",
          text: "文章",
        },
      ],
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "comics",
    component: "index",
    rules: {
      static: {
        // 漫画分类
        Adventure: "冒险",
        Comedy: "喜剧",
        Drama: "剧情",
        Horror: "恐怖",
        Mystery: "悬疑",
        Romance: "爱情",
        "Sci Fi": "科幻",
        "Slice of Life": "日常",
        Thriller: "惊悚",

        // 浏览范围与排序
        "Followed Comics": "已关注的漫画",
        "Most Followed": "关注最多",
        "Most Chapters": "章节最多",
        Today: "今天",
        "This Week": "本周",
        "This Month": "本月",
        "This Year": "今年",

        // 漫画卡片与举报窗口
        "Report comic": "举报漫画",
        "Report comic Project": "举报漫画项目",

        // 创建漫画项目
        "Create Comic Project": "创建漫画项目",
        "Give your project a name and optionally pick a genre. The description is shown on the comic overview page and helps readers discover your work.":
          "为项目命名，并可选择一个题材。简介会显示在漫画概览页，帮助读者发现你的作品。",
        "Project name": "项目名称",
        "My Comic": "我的漫画",
        Genre: "题材",
        "What is your comic about? Set the stage for your readers...":
          "你的漫画讲述了什么？为读者展开故事的序幕……",

        // 漫画预览
        "READER PREVIEW": "读者预览",
        "CARD PREVIEW": "卡片预览",
        "Untitled Comic": "未命名漫画",
        "Start Reading": "开始阅读",
        CHAPTERS: "章节",

        // 项目图片
        "Upload a wide hero banner for the comic overview page and a portrait cover for browse cards. Both are optional and can be changed later.":
          "为漫画概览页上传一张宽幅主视觉横幅，并为浏览卡片上传一张竖版封面。两者均为可选项，之后也可以更改。",
        "Hero Banner": "主视觉横幅",
        Cover: "封面",
        "16:9 banner": "16:9 横幅",
        "Pick from generator": "从生成器选择",

        // 保存状态与创建操作
        "Your comic is saved as a": "你的漫画已保存为",
        "and will appear on your profile's Comics page. It stays private to you until you publish a chapter.":
          "，并会显示在你个人资料的漫画页面中。在发布章节前，只有你自己可以查看。",
        "Create Project": "创建项目",
      },
      regexp: [
        {
          pattern: /^by\s+(.+)$/i,
          replace: "作者：$1",
        },
        {
          pattern: /^(\d+)\s+chapters?$/i,
          replace: "$1 章",
        },
        {
          pattern: /^(\d+)\s+panels?$/i,
          replace: "$1 格",
        },
        {
          pattern: /^chapter\s+(\d+)$/i,
          replace: "第 $1 章",
        },
        {
          pattern: /^ch\.\s*(\d+)$/i,
          replace: "第 $1 章",
        },
      ],
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Comics",
          text: "漫画",
        },
      ],
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "bounties",
    component: "index",
    rules: {
      static: {
        // 排序方式
        "Highest Bounty": "悬赏最高",
        "Most Contributors": "贡献者最多",
        "Most Tracked": "追踪最多",

        // 悬赏筛选
        "Bounty type": "悬赏类型",
        "Model Creation": "模型制作",
        "Lora Creation": "LoRA 制作",
        "Embed Creation": "嵌入模型制作",
        "Data Set Creation": "数据集制作",
        "Data Set Caption": "数据集标注",
        "Image Creation": "图片创作",
        "Video Creation": "视频创作",
        "Bounty status": "悬赏状态",
        Open: "进行中",
        Expired: "已过期",
        Awarded: "已颁奖",

        // 悬赏举报
        "Report bounty": "举报悬赏",
      },
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Bounties",
          text: "悬赏",
        },
      ],
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "challenges",
    component: "index",
    rules: {
      static: {
        // 每日挑战说明
        "How Challenges Work": "挑战规则说明",
        "How It Works": "参与方式",
        "🎨 How It Works": "🎨 参与方式",
        "Every day, we select a new challenge featuring a specific AI model. Create images using the featured model and submit your best work to compete for prizes!":
          "每天，我们都会选出一个使用特定 AI 模型的新挑战。使用指定模型创作图片，并提交你最好的作品来赢取奖励！",
        "Winning & Rewards": "获胜与奖励",
        "🏆 Winning & Rewards": "🏆 获胜与奖励",
        "The top 3 entries are reviewed and selected by our AI judging system. Entries are ranked by a weighted score where theme relevance counts for 50%, so staying on-theme is key! Winners receive Buzz prizes and challenge points. Even if you don't win, you can earn participation rewards for submitting quality entries.":
          "排名前三的作品将由 AI 评审系统审核并选出。作品采用加权评分，其中主题相关性占 50%，因此紧扣主题非常重要！获胜者将获得 Buzz 奖励和挑战积分。即使没有获胜，提交优质作品也能获得参与奖励。",
        "Challenge Points": "挑战积分",
        "⭐ Challenge Points": "⭐ 挑战积分",
        "Earn points by participating in challenges. Top winners get the most points, but everyone who participates earns something. Climb the leaderboard and show off your skills!":
          "参与挑战即可获得积分。排名越高，获得的积分越多，但所有参与者都会有所收获。登上排行榜，展示你的实力吧！",
        "Tips for Success": "成功技巧",
        "📝 Tips for Success": "📝 成功技巧",
        "Use the featured model specified in the challenge": "使用挑战中指定的模型",
        "• Use the featured model specified in the challenge": "• 使用挑战中指定的模型",
        "Follow the theme or prompt provided": "遵循给定的主题或提示词",
        "• Follow the theme or prompt provided": "• 遵循给定的主题或提示词",
        "Submit your best work - quality over quantity": "提交你最好的作品，质量重于数量",
        "• Submit your best work - quality over quantity": "• 提交你最好的作品，质量重于数量",
        "Check back daily for new challenges": "每天回来查看新的挑战",
        "• Check back daily for new challenges": "• 每天回来查看新的挑战",

        // 挑战操作
        "Notify me": "通知我",
        "Stop notifying me": "停止通知我",
        "Previous winners": "往届获奖者",
        "Create Challenge": "创建挑战",

        // 排序与筛选
        "Highest Prize": "奖励最高",
        Status: "挑战状态",
        Current: "当前",
        Upcoming: "即将开始",
        Completed: "已结束",
        "Challenge Participation": "参与状态",
        Entered: "已参加",
        "Not Entered": "未参加",
        Won: "已获胜",
        Hosting: "我主办的",

        // 社区挑战
        "Community Challenges": "社区挑战",
        "You are all caught up": "已全部看完",
        "Consider changing your period or filters to find more": "可以尝试调整时间范围或筛选条件查看更多内容",
        "Back to the top": "返回顶部",
      },
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "changelog",
    component: "index",
    rules: {
      static: {
        // 搜索与更新类型
        "Search titles and content...": "搜索标题和内容……",
        Types: "类型",
        Feature: "新功能",
        Bugfix: "问题修复",
        Policy: "政策",
        Update: "更新",
        Incident: "事件",

        // 标签与日期筛选
        "Select tags...": "选择标签……",
        Crypto: "加密货币",
        Changelog: "更新日志",
        Outage: "服务中断",
        Resolved: "已解决",
        Bug: "问题",
        "Image & Video Feeds": "图片与视频信息流",
        Ingestion: "数据导入",
        Ratings: "评级",
        Generation: "生成",
        "Image Rating": "图片评级",
        "LoRA Training": "LoRA 训练",
        Membership: "会员",
        "Image Delivery": "图片分发",
        "Pricing Change": "价格调整",
        Infrastructure: "基础设施",
        "Video Generation": "视频生成",
        "Replication Lag": "数据同步延迟",
        "Maintenance Mode": "维护模式",
        "Creator Compensation": "创作者补偿",
        "Creator Program": "创作者计划",
        "Posts Feed": "帖子信息流",
        "Front-End": "前端",
        "Scheduled Maintenance": "计划维护",
        Downloads: "下载",
        "Unresponsive Pages": "页面无响应",
        "Gift Cards": "礼品卡",
        Before: "早于",
        After: "晚于",
        "Choose a date...": "选择日期……",
      },
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "shop",
    component: "index",
    rules: {
      static: {
        // 商店介绍
        "Civitai Cosmetic Shop": "Civitai 装扮商店",
        "Any cosmetic purchases directly contributes to Civitai": "购买任何装扮都将直接支持 Civitai",
        "Any cosmetic purchases directly contributes to Civitai 💗": "购买任何装扮都将直接支持 Civitai 💗",
        "Notify me about new items in the shop.": "商店上新时通知我。",
        "Do not notify me about new items in the shop.": "不要通知我商店上新。",
        "Discover handcrafted cosmetics from our featured creators.": "探索精选创作者精心制作的装扮。",
        "Browse a growing collection of community-created cosmetics, including profile backgrounds, badges, avatar decorations, and more. Customize your profile and showcase your style with creations from talented creators.":
          "浏览日益丰富的社区创作装扮，包括个人资料背景、徽章、头像装饰等。使用优秀创作者的作品自定义个人资料，展现你的独特风格。",

        // 装扮类型筛选
        "Filter by Cosmetic Types": "按装扮类型筛选",
        Badge: "徽章",
        "Name Plate": "用户名牌",
        "Content Decoration": "内容装饰",
        "Avatar Decoration": "头像装饰",
        "Profile Background": "个人资料背景",
        Sticker: "贴纸",
        Pack: "套装",

        // 拥有状态与愿望清单
        Owned: "已拥有",
        "Not Owned": "未拥有",
        Wishlist: "愿望清单",
        Wishlisted: "已加入愿望清单",

        // 链接与个人资料页面
        "Show something different to visitors on civitai.com. Anything you leave off here is shown the same on every Civitai site.":
          "你可以向 civitai.com 的访客展示不同内容。未单独设置的内容将在所有 Civitai 站点保持一致。",
        "Cover Image (civitai.com)": "封面图片（civitai.com）",
        "Leave empty to use the cover image above.": "留空则使用上方的封面图片。",
        "Different announcement on civitai.com": "在 civitai.com 使用不同的公告",
        "Different bio on civitai.com": "在 civitai.com 使用不同的个人简介",

      },
      regexp: [
        {
          pattern: /^any cosmetic purchases directly contributes to civitai(.*)$/i,
          replace: (match) => `购买任何装扮都将直接支持 Civitai${match[1]}`,
        },
      ],
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "posts",
    component: "index",
    rules: {
      static: {
        // 创建帖子与上传说明
        "Create Image Post": "创建图片帖子",
        "Create Video Post": "创建视频帖子",
        "There may be a short delay before your uploaded media appears in the Model Gallery and Feeds. Please allow a few minutes for your media to become visible after posting.":
          "上传的媒体可能需要稍等片刻才会显示在模型图库和动态中。发布后请等待几分钟，媒体才会变为可见。",
        "Our site is mostly used for sharing AI generated content. You can start generating content using our onsite generator or train your model using your own content by using our onsite trainer.":
          "本站主要用于分享 AI 生成内容。你可以使用站内生成器创作内容，也可以使用自己的内容通过站内训练器训练模型。",
        "Our site is mostly used for sharing AI generated content. You can start generating content using our":
          "本站主要用于分享 AI 生成内容。你可以使用我们的",
        "onsite generator": "站内生成器",
        "or train your model using your own content by using our": "创作内容，也可以使用自己的内容通过我们的",
        "onsite trainer": "站内训练器",
        "Drag images here or click to select files": "将图片拖到这里，或点击选择文件",
        "Attach up to 20 files": "最多可添加 20 个文件",
        "Videos cannot exceed 750 MB, 4K resolution, or 04 minutes (245 seconds) in duration":
          "视频大小不得超过 750 MB，分辨率不得超过 4K，时长不得超过 04 分钟（245 秒）",
        "Accepted file types: .png, .jpeg, .webp, .mp4, .webm":
          "支持的文件类型：.png、.jpeg、.webp、.mp4、.webm",
        "Import from Generator": "从生成器导入",
        Thumbnail: "缩略图",
        SELECT: "选择",
        "Thumbnail will be auto generated.": "系统将自动生成缩略图。",
        "The thumbnail is the image that represents your post. It is the first thing viewers see when they come across your post.":
          "缩略图是代表你帖子的图片，也是其他用户看到该帖子时最先注意到的内容。",

        // 帖子编辑
        "Add a title...": "添加标题……",
        Tag: "标签",
        "Add a description...": "添加描述……",
        "Your post is currently hidden": "你的帖子当前处于隐藏状态",
        Your: "你的",
        Post: "帖子",
        "is currently": "当前处于",
        Hidden: "隐藏状态",
        SAVED: "已保存",
        "Delete Post": "删除帖子",
        "Edit Post": "编辑帖子",
        "Add to Showcase": "添加到展示",
        "Add Content Decoration": "添加内容装饰",
        Edit: "编辑",
        Resources: "资源",
        "Models, LoRAs, embeddings or other Stable Diffusion or Flux specific resources used to create this image.":
          "用于创作此图片的模型、LoRA、嵌入或其他 Stable Diffusion 或 Flux 专用资源。",
        RESOURCE: "资源",
        "Traditional or generative AI programs, platforms or websites used to create this image.":
          "用于创作此图片的传统或生成式 AI 程序、平台或网站。",
        TOOL: "工具",
        TECHNIQUE: "生成方式",
        Guidance: "引导",

        // 资源评价与媒体操作
        "RESOURCE REVIEWS": "资源评价",
        "What did you think of the resources you used?": "你觉得所使用的资源怎么样？",
        "Take a moment to rate the resources you used in this post by clicking the thumbs below and optionally leaving a comment about the resource.":
          "请花一点时间评价这篇帖子中使用的资源。点击下方的赞或踩，还可以选择留下对该资源的评论。",
        "Edit details": "编辑详情",
        "Schedule Publish": "定时发布",
        "Manually add a resource.": "手动添加资源。",
        "If you can't find the one you're looking for, it's either not uploaded here, or is being filtered out to match your already selected resources.":
          "如果找不到你想要的资源，可能是它尚未上传到本站，或因当前筛选条件及已选资源而未显示。",
        "Edit image": "编辑图片",
        "Delete image": "删除图片",
        "Posting to": "发布到",
        "Select a resource to ensure that all uploaded images receive correct resource attribution":
          "请选择一个资源，确保所有上传的图片都能正确标注资源归属",

        // 资源选择窗口
        "We weren't able to detect any resources used in the creation of this image. You can add them manually using the + Resource button.":
          "未能检测到创作此图片时使用的任何资源。你可以使用“+ 资源”按钮手动添加。",
        "Select resource(s)": "选择资源",
        "Search models": "搜索模型",
        "Resource types": "资源类型",
        FEATURED: "精选",
        RECENT: "最近使用",
        LIKED: "已点赞",
        MINE: "我的",
        Relevance: "相关性",
        Popularity: "热门程度",
        "Couldn't load models": "无法加载模型",
        "Something went wrong on our end — your models are still there. Try again in a moment.":
          "服务器出现了问题，你的模型仍然安全保留。请稍后重试。",
        Retry: "重试",

        // 资源分类标签（页面使用全大写文本）
        CHARACTER: "角色",
        STYLE: "风格",
        CONCEPT: "概念",
        CLOTHING: "服装",
        "BASE MODEL": "基础模型",
        BACKGROUND: "背景",
        POSES: "姿势",
        ASSETS: "素材",
        VEHICLE: "载具",
        BUILDINGS: "建筑",
        OBJECTS: "物体",
        ANIMAL: "动物",
        ACTION: "动作",

        // 资源兼容性与高级模式
        "Advanced Mode": "高级模式",
        "Allow unrestricted mixing of additional resources and base models.":
          "允许不受限制地混合使用附加资源和基础模型。",
        "Model Compatibility": "模型兼容性",
        "Some resources work well together, while others may produce unexpected or lower-quality results.":
          "有些资源可以很好地配合使用，而另一些资源可能会产生意外结果或降低生成质量。",
        "Enabling Advanced Mode lets you freely combine resources, but:":
          "启用高级模式后，你可以自由组合资源，但请注意：",
        "Results may vary, and quality is not guaranteed.": "生成结果可能有所不同，且无法保证质量。",
        "Refunds won't be given for poor results caused by incompatible resources.":
          "因资源不兼容而导致生成结果不佳时，不予退款。",

        // 发布政策
      },
      selector: [
        {
          selector: '[role="dialog"] *',
          source: "Select resource(s)",
          text: "选择资源",
        },
        {
          selector: 'input[placeholder="Search models"]',
          attr: "placeholder",
          text: "搜索模型",
        },
      ],
    },
  });
})();

(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "user",
    component: "index",
    rules: {
      static: {
        // 侧边栏
        FOLLOWERS: "关注者",
        LIKES: "获赞",
        DOWNLOADS: "下载量",
        BADGES: "徽章",

        // 自定义个人资料窗口
        "Provided URL appears to be invalid": "提供的网址似乎无效",

        // 导航栏
        Overview: "概览",
        Posts: "帖子",

        // 内容页
        "View all models": "查看所有模型",
        "View all Articles": "查看所有文章",
        "View all images": "查看所有图片",
      },
    },
  });
})();

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

  function translateSplitTextElements(root) {
    const elements = [root, ...Array.from(root.querySelectorAll ? root.querySelectorAll("*") : [])].reverse();

    elements.forEach((element) => {
      if (shouldSkipElement(element)) return;

      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
          if (shouldSkipTextNode(node) || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        },
      });
      const textNodes = [];
      let node;

      while ((node = walker.nextNode())) textNodes.push(node);
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

    translateAttributes(root);
    root.querySelectorAll("*").forEach((element) => {
      if (!shouldSkipElement(element)) {
        translateAttributes(element);
      }
    });

    translateSelectorRules(root);
    translateSplitTextElements(root);
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
      if (root) pendingRoots.add(root);
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

(function () {
  "use strict";

  const CCT = window.CCT;
  const instanceKey = "__CCT_TRANSLATOR_RUNNING__";

  if (window[instanceKey]) return;
  window[instanceKey] = true;

  function injectStyle() {
    if (document.getElementById("cct-style")) return true;

    const target = document.head || document.documentElement;
    if (!target) return false;

    const style = document.createElement("style");
    style.id = "cct-style";
    style.textContent = CCT.styleText || "";
    target.appendChild(style);
    return true;
  }

  function start() {
    if (!injectStyle()) {
      requestAnimationFrame(start);
      return;
    }

    if (!document.body) {
      requestAnimationFrame(start);
      return;
    }

    CCT.applyAdBlocking && CCT.applyAdBlocking(document.body);
    CCT.injectLogo && CCT.injectLogo();
    CCT.injectOriginalDownloadButtons && CCT.injectOriginalDownloadButtons(document.body);
    CCT.injectModelSidebarToggle && CCT.injectModelSidebarToggle();
    CCT.injectModelVersionDropdown && CCT.injectModelVersionDropdown();
    CCT.createTranslator().start();
  }

  start();
})();
