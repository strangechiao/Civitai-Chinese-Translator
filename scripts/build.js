const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

const header = `// ==UserScript==
// @name         Civitai 汉化插件
// @namespace    https://civitai.red/
// @version      0.1.5
// @description  把 civitai 页面上的常见英文翻译成中文
// @homepageURL  https://github.com/strangechiao/civitai-chinese
// @supportURL   https://github.com/strangechiao/civitai-chinese/issues
// @updateURL    https://raw.githubusercontent.com/strangechiao/civitai-chinese/main/civitai-chinese.user.js
// @downloadURL  https://raw.githubusercontent.com/strangechiao/civitai-chinese/main/civitai-chinese.user.js
// @match        https://civitai.red/*
// @match        https://www.civitai.red/*
// @match        https://civitai.com/*
// @match        https://www.civitai.com/*
// @match        https://auth.civitai.com/*
// @grant        none
// ==/UserScript==
`;

const sourceFiles = ["src/dictionary.js", "src/rules.js", "src/styles.js", "src/translator.js"];

const body = sourceFiles.map((file) => fs.readFileSync(path.join(root, file), "utf8").trim()).join("\n\n");

fs.writeFileSync(path.join(root, "civitai-chinese.user.js"), `${header}\n${body}\n`, "utf8");
