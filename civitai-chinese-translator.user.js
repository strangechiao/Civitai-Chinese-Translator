// ==UserScript==
// @name         CCT 中文增强插件
// @namespace    https://civitai.com/
// @version      0.5.2
// @description  为 Civitai.com 与 Civitai.red 提供汉化、中文化、本地化与界面翻译，并加入原始图片/视频快捷下载、模型介绍快捷展开/折叠、模型版本快速切换等增强功能的 Tampermonkey 用户脚本。
// @license      GPL-3.0-or-later
// @homepageURL  https://github.com/strangechiao/Civitai-Chinese-Translator
// @supportURL   https://github.com/strangechiao/Civitai-Chinese-Translator/issues
// @updateURL    https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator/main/civitai-chinese-translator.user.js
// @downloadURL  https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator/main/civitai-chinese-translator.user.js
// @icon         data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAACYCAYAAAAYwiAhAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAACIxJREFUeAHtnS901EoUxmffQSJw4MFTD4KHAYUBA4LWUAEKDLLloKgAAwgqXotAAboYDu8c8MWDB4cA3Zdv6ZS0b5NM5t9msr/fOSFdutlNky937p25c8cYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDKY2B/29vYuVLu1aluqthMGwI8P1bY1mUy29WIqsEpc69VubXd312xvb5svX76YX79+GYA+nD171ly6dMlcvnxZLx9UIlufVOJaqV78s7W1ZV6+fGkAQrl586ZZWVnRj3//Vf2zvLOzg7ggGtKSWsOKNQnswrt37wxATORqVSxJYObz588GICZfv37V7sSxpje8f//eALhy8eLFQ69//vw53f9lABKCwCApCAySgsAgKcf6vPmoIyeuXr1q7ty5Y3Kh8Hc/BD5EU1Biz7kraFG/zb179w5eHz9+3Lx48cKcOnWq8Zhv376Z1dXVA4dWPHnyZNqj3UbXOfmecy76BIDBFuz8+fMmJ103LxYSzd27dw+J5ygS3/LysoFmelmwo+gpb7vhGiHY2NgwfZFFlGWcxdLS0vR72258LL5//z61lm0WWucpS/bmzRsD/yfIgnVZk0+fPhkf9ocZvL83JhLO69evW98jK9bWlC4yQRasq3n0HSHoOk5WzFe8PmhsTX9rk4hkUR8/fjz1x3Jy5syZqc+XA7kLPgQJrM2SyAr5NmM6TsdLSLNQSsizZ89MLqw/trm5ORXTLObhj3W5KEPAu4nU09PWLIRamDYrpgt7+vRpkxPrj7Uhfyz3eQ0db4F1PTldflQXXcc3WbeUuPhjTRZuUfEWWJv/pahqfzTdG1mwtib23LlzZh7IH9PfB254Cayr7Q+1Xpa2ZlZN9DyshUv/GPzBS2BdzWOs/LI2oc7DD7O4+GPwGy+BdXVP5LBgLueREhd/DBJYMM1I0hMeA9td0cS8/DAL/lg3Xv1gN27cMLmYx2CuKy79YyHMSi4oDdJ1AsEfaweBRQB/rBkEFgn8sdkgsEjQPzaboMHuksjhMMsfu3LlioE/YMEgKQgMkoLAICkIDJKSxclX7paGdZSgqCyIkydPHvxOjrHCew0xaewx1jjmGBhSfRDfICmZwDR0ogxPbW3DKBKbNo1v2hk6ysZQ7zj9SuUTXWCuwmpCVk6b8u6bJtlCOUT1wSQMzYbW5IcYg7/6nFevXjElrGCiCUy+VddUex+saJlMUSZRmkiJS/MCU6Uw63MVJITm+feBwCQOwQLTDUgpLpGrAjaBSXyCBTYGcRGYpCNIYD41GZRtoKdce91MNT9N5BCXtcCxfEddEwlNmbih1syn6e2aL6rrrqY9F94C6ztV3q4iMmvGkW1q6pM4cogrle9oAxOl74T4jT7p4l2dsxJXzjR0b4G5iktPzKNHj1pnCEl02vTkq1SSskNLFZdlHoHJEPEWmEvRDZuE53qRtSDEx48fk6+TNKbAZOh49YOpnXfxWVQBp+8TnGMRLsSVDy8L5jIfUZZoiEvUjCEwKQkvgbVdYMsQS0qOITApDS+B1Xu1mxji+kelByYl4iWwriYmZz9LH0oOTEolSUbrEKdulR6YlEoSgQ2xyl/JgUnJeAmsawhkiPlbpQYmpeMlsK4mZIjVj0sNTEoniQUTQ1tipdTApHS8BCZfpQubsFcK1JRIg5fAuipAW+7fv9871Xle/hvlx9PgHUW6OMS6aVrqRJ2RLsji2UkjsSkxMBkDQQJzsWISmSzZw4cPG5Ph9P8Sot6j90tgsUVWYmAyBrzTdSQuicxVCLJO1ifTzbYDx4ruZjVP9nNjpR+7BiZDrglbIkEdrRKYT1qw/DJZC+3bfJ+YlmyMgUkJBAksR1W/WCIbY2BSAsFDRZojmENkTSvg9qG0wGQMRBmLlE+VUmRdCzK4UlpgMgaiFT+RyG7dujW96DGbDPl4Em+M1UNKC0zGQNRsColAq4AoszMU3Ux9jkQba2kaUVJgMgaSpOsos/P69etmZ2en9820wtLx+pzYuVYlBSZjIFkBOlmdjY2N6c968tXU2GWY602oLSKivVKUc2Q02MBEzXmqISIJzDbJi0yWEpo2f31I2MAklchiBSZ9GdoCWgtdBNgGJrEr4ujz9LmLPqtbLHyV6RICk5JZmKVkulBAoXx8+U6uE0QsEpamrcnfYgLIYRBYjSEHJqWCwBoYYmBSIqz0AUlBYJAUBAZJQWCQFC8nfwyLNJXA7du3zbVr1xp/r+6R1dXVoI5iW0+2bTRDXTDPnz83PmDBBkzXQvMSRUi1Rpfj9f0h6UcIbMC4ZH70LapXp6vao/3+kM5jBDZw1PnbZUHsIhJ9cDlGw16hQ14IrAA0BCU/qI0+tWddrJ6+7+3btyYUevIbsFPY7FDRvBfDkj+merBNIrL+lJz+tiY1h99VB4HVGPJiWNYf2tzcbDw3a5lUpbGJHH5XHZpIYw5mBWnxU5/FVO1CWPb4VIT6Y7n8rjpeFixlk6AmyfUGx8irH/JiWLOQPybr2dY/pnNQ013//px+Vx0vgaWo32CtSNdqYRY7nS2EoS+G1URffyy331VnEE2kvSGuobaetNCs0RyLYSnfP8VS0H37x3L7XXXmLjCJynWtb12Ip0+fToctQi5GjsWwhBVZitoVrv6Yvj+331VnbgLTxdcKGdpcbrSdSBHDR8ghLkvocE4bLv1jXTXPUvhddSZ7FbMGjIc0oA3Dp0lDdFNAUhAYJAWBQVIQGCRl2tGqCOdon8qYM0UhH7JgP1J0BsJiY0dkJLBdallBbPZr3H6QwB5IbYgMYmEH/Cu2Jvq36mtdq3brKv6hbR51raBs5MdrfFfi2h89WJ9MJg8m9g2VyFaqnczYBQPgx49qk3WSuP41AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwm/8AiL8fChhIKskAAAAASUVORK5CYII=
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
  window.CCT.meta.version = "0.5.2";
  window.CCT.meta.updateUrl = "https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator/main/civitai-chinese-translator.user.js";
  window.CCT.meta.supportUrl = "https://github.com/strangechiao/Civitai-Chinese-Translator/issues";
  window.CCT.assets = window.CCT.assets || {};
  window.CCT.assets.logoSvg = "<svg width=\"182\" height=\"103\" viewBox=\"0 0 182 103\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<rect width=\"152\" height=\"103\" rx=\"5\" fill=\"white\"/>\n<rect x=\"1\" y=\"1\" width=\"150\" height=\"101\" rx=\"5\" fill=\"#414141\"/>\n<rect x=\"6\" y=\"6\" width=\"140\" height=\"91\" fill=\"white\"/>\n<rect x=\"11\" y=\"11\" width=\"130\" height=\"81\" fill=\"#414141\"/>\n<rect x=\"151\" y=\"5\" width=\"4\" height=\"21\" fill=\"white\"/>\n<rect x=\"151\" y=\"6\" width=\"3\" height=\"19\" fill=\"#414141\"/>\n<rect x=\"56\" y=\"10\" width=\"82\" height=\"6\" transform=\"rotate(90 56 10)\" fill=\"white\"/>\n<rect x=\"101\" y=\"11\" width=\"82\" height=\"6\" transform=\"rotate(90 101 11)\" fill=\"white\"/>\n<path d=\"M48 87.75L42.333 92H30.666L36.333 87.75H13V79H48V87.75ZM75.5 84C81.6628 84 87.0813 87.1857 90.1992 92H60.8008C63.9187 87.1857 69.3372 84 75.5 84ZM120.5 90.666L129.25 79H138L128.25 92H112.75L103 79H111.75L120.5 90.666ZM68.8027 40.332C72.0004 39.0075 75.5194 38.6607 78.9141 39.3359C82.3087 40.0112 85.4266 41.6786 87.874 44.126L81.6875 50.3125C80.4638 49.0888 78.9044 48.2556 77.207 47.918C75.5097 47.5804 73.7502 47.7538 72.1514 48.416C70.5526 49.0783 69.186 50.1998 68.2246 51.6387C67.2631 53.0776 66.75 54.7694 66.75 56.5C66.75 58.2306 67.2631 59.9224 68.2246 61.3613C69.186 62.8002 70.5526 63.9217 72.1514 64.584C73.7502 65.2462 75.5097 65.4196 77.207 65.082C78.9044 64.7444 80.4638 63.9112 81.6875 62.6875L87.874 68.874C85.4266 71.3214 82.3087 72.9888 78.9141 73.6641C75.5194 74.3393 72.0004 73.9925 68.8027 72.668C65.6052 71.3434 62.8721 69.1004 60.9492 66.2227C59.0263 63.3448 58 59.9612 58 56.5C58 53.0388 59.0263 49.6552 60.9492 46.7773C62.8721 43.8996 65.6052 41.6566 68.8027 40.332ZM138 42.75H124.699L124.698 69H115.949V42.75H103V34H138V42.75ZM23.8027 35.332C27.0004 34.0075 30.5194 33.6607 33.9141 34.3359C37.3087 35.0112 40.4266 36.6786 42.874 39.126L36.6875 45.3125C35.4638 44.0888 33.9044 43.2556 32.207 42.918C30.5097 42.5804 28.7502 42.7538 27.1514 43.416C25.5526 44.0783 24.186 45.1998 23.2246 46.6387C22.2631 48.0776 21.75 49.7694 21.75 51.5C21.75 53.2306 22.2631 54.9224 23.2246 56.3613C24.186 57.8002 25.5526 58.9217 27.1514 59.584C28.7502 60.2462 30.5097 60.4196 32.207 60.082C33.9044 59.7444 35.4638 58.9112 36.6875 57.6875L42.874 63.874C40.4266 66.3214 37.3087 67.9888 33.9141 68.6641C30.5194 69.3393 27.0004 68.9925 23.8027 67.668C20.6052 66.3434 17.8721 64.1004 15.9492 61.2227C14.0263 58.3448 13 54.9612 13 51.5C13 48.0388 14.0263 44.6552 15.9492 41.7773C17.8721 38.8996 20.6052 36.6566 23.8027 35.332ZM66.75 29H58V11H66.75V29ZM84.25 17.333V11H93V29H84.25L70.75 11H79.5L84.25 17.333ZM48 24H40.3438L37.2676 13.0625H23.7324L20.6562 24H13L16.6562 11H44.3438L48 24ZM111.75 15.25H138V24H103V11H111.75V15.25Z\" fill=\"white\"/>\n<path d=\"M166 12C169.314 12 172 14.6863 172 18L172 73L166 73L166 12V12Z\" fill=\"white\"/>\n<rect x=\"165\" y=\"18\" width=\"1\" height=\"55\" fill=\"white\"/>\n<circle cx=\"168.5\" cy=\"84.5\" r=\"13.5\" fill=\"white\"/>\n<path d=\"M166 13C168.761 13 171 15.2386 171 18L171 73L166 73L166 13V13Z\" fill=\"#D9D9D9\"/>\n<circle cx=\"168.5\" cy=\"84.5\" r=\"12.5\" fill=\"#E03131\"/>\n<rect x=\"154\" y=\"8\" width=\"3\" height=\"15\" fill=\"white\"/>\n<rect x=\"154\" y=\"9\" width=\"2\" height=\"13\" fill=\"#D9D9D9\"/>\n<rect x=\"157\" y=\"12\" width=\"9\" height=\"7\" fill=\"white\"/>\n<rect x=\"154\" y=\"13\" width=\"12\" height=\"5\" fill=\"#D9D9D9\"/>\n<path d=\"M177.95 84.5C178.53 84.5 179.005 84.0287 178.948 83.4517C178.845 82.4325 178.594 81.4317 178.201 80.4818C177.673 79.2079 176.9 78.0504 175.925 77.0754C174.95 76.1004 173.792 75.3269 172.518 74.7993C171.568 74.4058 170.568 74.1547 169.548 74.0525C168.971 73.9946 168.5 74.4701 168.5 75.05C168.5 75.6299 168.972 76.0932 169.547 76.1655C170.291 76.2589 171.02 76.4515 171.715 76.7394C172.734 77.1616 173.66 77.7803 174.44 78.5603C175.22 79.3403 175.838 80.2663 176.261 81.2855C176.548 81.9804 176.741 82.7095 176.834 83.4527C176.907 84.0281 177.37 84.5 177.95 84.5Z\" fill=\"white\"/>\n</svg>";
  window.CCT.assets.icons = {"bug":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-bug-icon lucide-bug\"><path d=\"M12 20v-9\"/><path d=\"M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z\"/><path d=\"M14.12 3.88 16 2\"/><path d=\"M21 21a4 4 0 0 0-3.81-4\"/><path d=\"M21 5a4 4 0 0 1-3.55 3.97\"/><path d=\"M22 13h-4\"/><path d=\"M3 21a4 4 0 0 1 3.81-4\"/><path d=\"M3 5a4 4 0 0 0 3.55 3.97\"/><path d=\"M6 13H2\"/><path d=\"m8 2 1.88 1.88\"/><path d=\"M9 7.13V6a3 3 0 1 1 6 0v1.13\"/></svg>","contact":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-mail-icon lucide-mail\"><path d=\"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7\"/><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"/></svg>","download":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-folder-down-icon lucide-folder-down\"><path d=\"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z\"/><path d=\"M12 10v6\"/><path d=\"m15 13-3 3-3-3\"/></svg>","originalDownload":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-cloud-download-icon lucide-cloud-download\"><path d=\"M12 13v8l-4-4\"/><path d=\"m12 21 4-4\"/><path d=\"M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284\"/></svg>","external":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right\"><path d=\"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6\"/><path d=\"m21 3-9 9\"/><path d=\"M15 3h6v6\"/></svg>","question":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-circle-question-mark-icon lucide-circle-question-mark\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3\"/><path d=\"M12 17h.01\"/></svg>","expand":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-chevron-down-icon lucide-chevron-down\"><path d=\"m6 9 6 6 6-6\"/></svg>","collapse":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-chevron-up-icon lucide-chevron-up\"><path d=\"m18 15-6-6-6 6\"/></svg>","quickCollapse":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-square-chart-gantt-icon lucide-square-chart-gantt\"><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M9 8h7\"/><path d=\"M8 12h6\"/><path d=\"M11 16h5\"/></svg>","modelVersionSwitch":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-menu-icon lucide-menu\"><path d=\"M4 5h16\"/><path d=\"M4 12h16\"/><path d=\"M4 19h16\"/></svg>","translation":"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-languages-icon lucide-languages\"><path d=\"m5 8 6 6\"/><path d=\"m4 14 6-6 2-3\"/><path d=\"M2 5h12\"/><path d=\"M7 2h1\"/><path d=\"m22 22-5-10-5 10\"/><path d=\"M14 18h6\"/></svg>"};
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
      color: var(--mantine-color-yellow-6, #FAB005);
      flex: 0 0 auto;
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
  const MENU_ID = "cct-logo-menu";
  let menuListenersReady = false;

  function getProductName() {
    return "CCT 中文增强插件";
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
    root.className = "cct-logo-root";
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
    menu.className = "cct-logo-menu";
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
    return CCT.getCurrentPage && CCT.getCurrentPage() === "modelDetail";
  }

  function getSpoilerControl() {
    const controls = Array.from(
      document.querySelectorAll('.mantine-Spoiler-root[data-has-spoiler="true"] .mantine-Spoiler-control, button[aria-controls][aria-expanded]')
    ).filter((button) => !button.classList.contains(BUTTON_CLASS));

    const exactTextControl = controls.find((button) => /^(show more|show more|hide|显示更多|隐藏)$/i.test(button.textContent.trim()));
    if (exactTextControl) return exactTextControl;

    return controls.find((button) => {
      const region = document.getElementById(button.getAttribute("aria-controls"));
      return region && region.classList.contains("mantine-Spoiler-content");
    });
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
    const label = expanded ? "折叠" : "展开";
    const icon = expanded ? iconSvg("collapse") : iconSvg("expand");

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
    button.className = BUTTON_CLASS;

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
    return CCT.getCurrentPage && CCT.getCurrentPage() === "modelDetail";
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

    current.innerHTML = `
      <span class="cct-model-version-select-label">${selectedLabel}</span>
      ${selected.paid ? '<span class="cct-model-version-select-paid">⚡</span>' : ""}
    `;

    if (isOpen) return;

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
        ${option.paid ? '<span class="cct-model-version-select-paid">⚡</span>' : ""}
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

        // 用户下拉菜单
        "Add Account": "添加账户",
        Logout: "登出",
        "Logout All": "登出全部",
        Back: "返回",
        "Your Profile": "个人资料",
        Training: "训练",
        "My Collections": "我的收藏集",
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
        "Download Link App": "下载链接应用",
        "Creators You Follow": "我关注的创作者",
        "Download History": "下载历史",
        "Getting Started": "入门指南",
        "Light mode": "浅色模式",
        "Dark mode": "深色模式",
        "Account settings": "账户设置",

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
    type: "layout",
    name: "footer",
    component: "index",
    rules: {
      static: {
        "Terms of Service": "服务条款",
        Privacy: "隐私政策",
        Safety: "安全",
        API: "API",
        Status: "服务状态",
        "Known Issues": "已知问题",
        Education: "教育",
        Creators: "创作者",
        Support: "支持",
      },
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
        "Buzz Beggars Board": "Buzz 讨赏榜",
        "Ran out of Buzz while playing? Or want to be generous? Jump in.": "玩着玩着 Buzz 用完了？或者想慷慨解囊？快来参与吧。",
        "Beg or Give": "求助或赠送",
        "Curated Collection by": "精选收藏集，来自",
        "Highly creative": "极具创意",
        "View Collection": "查看收藏集",
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
    name: "userProfile",
    component: "index",
    rules: {
      static: {
        // 侧边栏
        "Customize profile": "自定义个人资料",
        FOLLOWERS: "关注者",
        LIKES: "获赞",
        DOWNLOADS: "下载量",
        BADGES: "徽章",

        // 自定义个人资料窗口
        Profile: "个人资料",
        "Save Changes": "保存更改",
        "Edit avatar": "编辑头像",
        "Drop image here, should not exceed 50 MB": "将图片拖到这里，大小不得超过 50 MB",
        "Showcase Stats": "展示统计数据",
        Followers: "关注者",
        Likes: "获赞",
        Uploads: "上传数",
        Downloads: "下载量",
        Generations: "生成数",
        Reactions: "互动数",
        "Avatar decoration": "头像装饰",
        "You don't have any avatar decorations yet": "你还没有任何头像装饰",
        "Creator Card Backgrounds": "创作者卡片背景",
        "You don’t have any profile backgrounds yet": "你还没有个人资料背景",
        "Show badges on profile": "在个人资料中显示徽章",
        "Featured Badge": "精选徽章",
        "Highlighted badges": "高亮徽章",
        "Pin badges to the top of your profile's badge list.": "将徽章置顶显示在个人资料的徽章列表中。",
        "Hidden badges": "隐藏的徽章",
        "Hidden badges won't be shown on your profile.": "隐藏的徽章不会显示在个人资料中。",
        "Nameplate Style": "用户名样式",
        Nameplates: "用户名样式",
        "Nameplates change the appearance of your username. They can include special colors or effects. You can earn nameplates by being a subscriber or earning trophies on the site.":
          "用户名样式会改变用户名的外观，可包含特殊颜色或效果。你可以通过订阅会员或在站内赢得奖杯来获取用户名样式。",
        "Select style": "选择样式",
        "Your earned nameplate styles will apppear here": "你已获得的用户名样式将显示在这里",
        "Showcase Leaderboard": "展示排行榜",
        "Choose which leaderboard badge to display on your profile card": "选择要在个人资料卡片上显示的排行榜徽章",
        "Select a leaderboard": "选择排行榜",

        Creators: "创作者",
        "Creators (90 days)": "创作者（90 天）",
        "Creators (mature)": "创作者（成人）",
        "New creators": "新晋创作者",
        "Daily challenges": "每日挑战",
        "Buzz daddies": "Buzz 大亨",
        "Top generators": "顶尖生成者",
        "Top trainers": "顶尖训练师",
        "Cosmetic collectors": "装饰品收藏家",
        "Creators (z-image)": "创作者（z-image）",
        "Creators (flux)": "创作者（flux）",
        "Creators (sdxl)": "创作者（sdxl）",
        "Creators (pony)": "创作者（pony）",
        "Creators (krea 2)": "创作者（krea 2）",
        "Creators (anima)": "创作者（anima）",
        Guardians: "守护者",
        Writers: "作家",
        Comedians: "喜剧达人",
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

        Links: "链接",
        "Social Links": "社交链接",
        "Add new link": "添加新链接",
        "Provided URL appears to be invalid": "提供的网址似乎无效",
        "Sponsorship Links": "赞助链接",
        "Profile Page": "个人资料页面",
        "Cover Image": "封面图片",
        "Suggested resolution: 1600x400px": "建议分辨率：1600×400 像素",
        Announcement: "公告",
        "Have something you want to share with people visiting your profile? Put it here and we'll display it at the top of your page":
          "有想和个人资料访客分享的内容吗？写在这里，我们会将其显示在页面顶部。",
        Bio: "个人简介",
        Location: "所在地",
        "Page sections": "页面版块",
        "Drag diferent sections on your profile in order of your preference": "按照你的偏好拖动个人资料中的不同版块进行排序",
        Showcase: "展示",
        "Images overview": "图片概览",
        "Models overview": "模型概览",
        "Recent reviews": "最近评价",
        "Showcase Items": "展示项目",
        "Select up to 32 items to showcase on your profile. You do this via the \"Add to showcase\" button on models and images":
          "最多选择 32 个项目展示在个人资料中。你可以通过模型和图片上的“添加到展示”按钮进行选择。",
        "You have not selected any items to showcase.": "你还没有选择任何展示项目。",

        // 导航栏
        Overview: "概览",
        Models: "模型",
        Posts: "帖子",
        Images: "图片",
        Videos: "视频",
        "3D Models": "三维模型",
        Articles: "文章",
        Comics: "漫画",
        Collections: "收藏集",
        Shop: "商店",

        // 内容页
        "Most popular models": "最受欢迎的模型",
        "View all models": "查看所有模型",
        "Most popular articles": "最受欢迎的文章",
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

    function schedule(root) {
      if (root) pendingRoots.add(root);
      if (timer) return;

      timer = setTimeout(() => {
        timer = null;
        CCT.injectLogo && CCT.injectLogo();
        CCT.injectOriginalDownloadButtons && CCT.injectOriginalDownloadButtons(document.body);
        CCT.injectModelSidebarToggle && CCT.injectModelSidebarToggle();
        CCT.injectModelVersionDropdown && CCT.injectModelVersionDropdown();

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
    CCT.injectModelSidebarToggle && CCT.injectModelSidebarToggle();
    CCT.injectModelVersionDropdown && CCT.injectModelVersionDropdown();
    CCT.createTranslator().start();
  }

  start();
})();
