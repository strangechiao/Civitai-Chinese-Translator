const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const outputFile = "civitai-chinese-translator.user.js";
const version = "0.2.0";
const homepageUrl = "https://github.com/strangechiao/Civitai-Chinese-Translator";
const updateUrl = `${homepageUrl.replace("https://github.com", "https://raw.githubusercontent.com")}/main/${outputFile}`;
const logoSvg = fs.readFileSync(path.join(root, "public", "logo.svg"), "utf8").trim();
const iconUrl = `data:image/png;base64,${fs.readFileSync(path.join(root, "public", "logo.png")).toString("base64")}`;

const header = `// ==UserScript==
// @name         CCT 中文增强插件
// @namespace    https://civitai.com/
// @version      ${version}
// @description  Civitai / CivitaiRed 中文增强与界面汉化用户脚本
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
// @grant        none
// ==/UserScript==
`;

const sourceFiles = [
  "src/core/namespace.js",
  "src/core/normalize.js",
  "src/core/pageMatcher.js",
  "src/core/registry.js",
  "src/features/styles.js",
  "src/features/logo.js",
  "src/locales/zh-CN/common.js",
  "src/locales/zh-CN/layout/header/index.js",
  "src/locales/zh-CN/layout/footer/index.js",
  "src/locales/zh-CN/pages/home/index.js",
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
})();`;

const body = [assetsSource, ...sourceFiles.map((file) => fs.readFileSync(path.join(root, file), "utf8").trim())].join(
  "\n\n",
);

fs.writeFileSync(path.join(root, outputFile), `${header}\n${body}\n`, "utf8");
