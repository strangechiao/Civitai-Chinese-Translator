const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const version = "0.5.1";
const homepageUrl = "https://github.com/strangechiao/Civitai-Chinese-Translator";
const rawBaseUrl = `${homepageUrl.replace("https://github.com", "https://raw.githubusercontent.com")}/main`;
const editions = [
  {
    id: "standard",
    outputFile: "civitai-chinese-translator.user.js",
    name: "CCT 中文增强插件",
    namespace: "https://civitai.com/",
    description:
      "为 Civitai.com 提供汉化、中文化、本地化与界面翻译，并加入原始图片/视频快捷下载、模型介绍快捷展开/折叠、模型版本快速切换等增强功能的 Tampermonkey 用户脚本。",
    matches: ["https://civitai.com/*", "https://www.civitai.com/*", "https://auth.civitai.com/*"],
  },
  {
    id: "r18",
    outputFile: "civitai-chinese-translator-r18.user.js",
    name: "CCT 中文增强插件 RED",
    namespace: "https://civitai.red/",
    description:
      "为 Civitai.red 提供汉化、中文化、本地化与界面翻译，并加入原始图片/视频快捷下载、模型介绍快捷展开/折叠、模型版本快速切换等增强功能的 Tampermonkey 用户脚本。",
    matches: ["https://civitai.red/*", "https://www.civitai.red/*"],
  },
];
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
};
const icons = Object.fromEntries(
  Object.entries(iconFiles).map(([name, file]) => [name, fs.readFileSync(path.join(root, "public", "icons", file), "utf8").trim()]),
);

function createHeader(edition, updateUrl) {
  const matchLines = edition.matches.map((url) => `// @match        ${url}`).join("\n");

  return `// ==UserScript==
// @name         ${edition.name}
// @namespace    ${edition.namespace}
// @version      ${version}
// @description  ${edition.description}
// @license      GPL-3.0-or-later
// @homepageURL  ${homepageUrl}
// @supportURL   ${homepageUrl}/issues
// @updateURL    ${updateUrl}
// @downloadURL  ${updateUrl}
// @icon         ${iconUrl}
// @iconURL      ${iconUrl}
// @icon64       ${iconUrl}
${matchLines}
// @grant        GM_download
// @connect      image.civitai.com
// @connect      imagecache.civitai.com
// @connect      image-b2.civitai.com
// ==/UserScript==
`;
}

const sourceFiles = [
  "src/core/namespace.js",
  "src/core/normalize.js",
  "src/core/pageMatcher.js",
  "src/core/registry.js",
  "src/features/styles.js",
  "src/features/logo.js",
  "src/features/imageDownloader.js",
  "src/features/modelSidebar.js",
  "src/features/modelVersionDropdown.js",
  "src/locales/zh-CN/common.js",
  "src/locales/zh-CN/layout/header/index.js",
  "src/locales/zh-CN/layout/footer/index.js",
  "src/locales/zh-CN/pages/home/index.js",
  "src/core/translator.js",
  "src/core/app.js",
];

function createAssetsSource(edition, updateUrl) {
  return `(function () {
  "use strict";

  window.CCT = window.CCT || {};
  window.CCT.meta = window.CCT.meta || {};
  window.CCT.meta.version = ${JSON.stringify(version)};
  window.CCT.meta.edition = ${JSON.stringify(edition.id)};
  window.CCT.meta.updateUrl = ${JSON.stringify(updateUrl)};
  window.CCT.meta.supportUrl = ${JSON.stringify(`${homepageUrl}/issues`)};
  window.CCT.assets = window.CCT.assets || {};
  window.CCT.assets.logoSvg = ${JSON.stringify(logoSvg)};
  window.CCT.assets.icons = ${JSON.stringify(icons)};
})();`;
}

const sourceBody = sourceFiles.map((file) => fs.readFileSync(path.join(root, file), "utf8").trim()).join("\n\n");

editions.forEach((edition) => {
  const updateUrl = `${rawBaseUrl}/${edition.outputFile}`;
  const header = createHeader(edition, updateUrl);
  const assetsSource = createAssetsSource(edition, updateUrl);
  fs.writeFileSync(path.join(root, edition.outputFile), `${header}\n${assetsSource}\n\n${sourceBody}\n`, "utf8");
});
