const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const header = `// ==UserScript==
// @name         CCT 中文增强插件
// @namespace    https://civitai.com/
// @version      0.1.7
// @description  CCT 中文增强插件（全称：Civitai Chinese Translator），一个用于中文翻译、汉化 [Civitai](https://civitai.com/) / [CivitaiRed](https://civitai.red/) 英文界面的 Tampermonkey 用户脚本。
// @homepageURL  https://github.com/strangechiao/Civitai-Chinese-Translator-Userscript
// @supportURL   https://github.com/strangechiao/Civitai-Chinese-Translator-Userscript/issues
// @updateURL    https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator-Userscript/main/civitai-chinese.user.js
// @downloadURL  https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator-Userscript/main/civitai-chinese.user.js
// @match        https://civitai.red/*
// @match        https://www.civitai.red/*
// @match        https://civitai.com/*
// @match        https://www.civitai.com/*
// @match        https://auth.civitai.com/*
// @grant        none
// ==/UserScript==
`;

const sourceFiles = ["src/dictionary.js", "src/rules.js", "src/styles.js", "src/logoButton.js", "src/translator.js"];

const logoSvgDark = fs.readFileSync(path.join(root, "public", "cct-logo-dark.svg"), "utf8").trim();
const logoSvgLight = fs.readFileSync(path.join(root, "public", "cct-logo-light.svg"), "utf8").trim();
const logoSource = `(function () {
  "use strict";

  window.CivitaiChinese = window.CivitaiChinese || {};
  window.CivitaiChinese.logoSvgs = {
    dark: ${JSON.stringify(logoSvgDark)},
    light: ${JSON.stringify(logoSvgLight)},
  };
})();`;

const body = [logoSource, ...sourceFiles.map((file) => fs.readFileSync(path.join(root, file), "utf8").trim())].join("\n\n");

fs.writeFileSync(path.join(root, "civitai-chinese.user.js"), `${header}\n${body}\n`, "utf8");
