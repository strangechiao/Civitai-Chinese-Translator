const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const version = "0.6.2";
const outputFile = "civitai-chinese-translator.user.js";
const homepageUrl = "https://github.com/strangechiao/Civitai-Chinese-Translator";
const updateUrl = `${homepageUrl.replace("https://github.com", "https://raw.githubusercontent.com")}/main/${outputFile}`;
const logoSvg = fs.readFileSync(path.join(root, "public", "logo.svg"), "utf8").trim();
const iconUrl = `data:image/png;base64,${fs.readFileSync(path.join(root, "public", "logo.png")).toString("base64")}`;
const iconFiles = {
  bug: "bug.svg",
  contact: "mail.svg",
  download: "folder-down.svg",
  originalDownload: "cloud-download.svg",
  external: "square-arrow-out-up-right.svg",
  question: "circle-question-mark.svg",
  expand: "chevron-down.svg",
  collapse: "chevron-up.svg",
  quickCollapse: "square-chart-gantt.svg",
  modelVersionSwitch: "menu.svg",
  translation: "languages.svg",
  adBlocking: "shield-ban.svg",
  adLayoutCentered: "align-center.svg",
};
const icons = Object.fromEntries(
  Object.entries(iconFiles).map(([name, file]) => [name, fs.readFileSync(path.join(root, "public", "icons", file), "utf8").trim()]),
);

const header = `// ==UserScript==
// @name         [CCT] Civitai汉化&增强插件
// @namespace    https://civitai.com/
// @version      ${version}
// @description  Civitai.com / Civitai.red 页面汉化 | 功能菜单 | 一键原图下载 | 模型描述快捷折叠 | 模型版本选项卡整合 | 广告屏蔽与页面布局修正
// @license      GPL-3.0-or-later
// @homepageURL  ${homepageUrl}
// @supportURL   ${homepageUrl}/issues
// @updateURL    ${updateUrl}
// @downloadURL  ${updateUrl}
// @icon         ${iconUrl}
// @iconURL      ${iconUrl}
// @icon64       ${iconUrl}
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
`;

const sourceFiles = [
  "src/core/namespace.js",
  "src/core/normalize.js",
  "src/core/pageMatcher.js",
  "src/core/registry.js",
  "src/features/styles.js",
  "src/features/adBlocker.js",
  "src/features/logo.js",
  "src/features/imageDownloader.js",
  "src/features/modelSidebar.js",
  "src/features/modelVersionDropdown.js",
  "src/locales/zh-CN/common.js",
  "src/locales/zh-CN/layout/header/index.js",
  "src/locales/zh-CN/layout/footer/index.js",
  "src/locales/zh-CN/pages/home/index.js",
  "src/locales/zh-CN/pages/models/index.js",
  "src/locales/zh-CN/pages/modelDetail/index.js",
  "src/locales/zh-CN/pages/userProfile/index.js",
  "src/core/translator.js",
  "src/core/app.js",
];

const assetsSource = `(function () {
  "use strict";

  window.CCT = window.CCT || {};
  window.CCT.meta = window.CCT.meta || {};
  window.CCT.meta.version = ${JSON.stringify(version)};
  window.CCT.meta.updateUrl = ${JSON.stringify(updateUrl)};
  window.CCT.meta.supportUrl = ${JSON.stringify(`${homepageUrl}/issues`)};
  window.CCT.assets = window.CCT.assets || {};
  window.CCT.assets.logoSvg = ${JSON.stringify(logoSvg)};
  window.CCT.assets.icons = ${JSON.stringify(icons)};
})();`;

const sourceBody = sourceFiles.map((file) => fs.readFileSync(path.join(root, file), "utf8").trim()).join("\n\n");
fs.writeFileSync(path.join(root, outputFile), `${header}\n${assetsSource}\n\n${sourceBody}\n`, "utf8");
