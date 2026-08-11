const fs = require("fs");
const path = require("path");
const vm = require("vm");
const sourceFiles = require("./sourceFiles");

const root = path.resolve(__dirname, "..");

function normalizeText(text) {
  return String(text || "")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/\u00a0/g, " ")
    .replace(/[\u200B-\u200D\u2060\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function listJavaScriptFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listJavaScriptFiles(entryPath);
    return entry.isFile() && entry.name.endsWith(".js") ? [entryPath] : [];
  });
}

function collectRuleEntries(localeFiles, errors) {
  const entries = [];
  const context = vm.createContext({
    window: {
      CCT: {
        registerRules(options) {
          entries.push(options);
        },
      },
    },
  });

  localeFiles.forEach((file) => {
    try {
      new vm.Script(fs.readFileSync(file, "utf8"), { filename: file }).runInContext(context);
    } catch (error) {
      errors.push(`无法读取规则 ${path.relative(root, file)}：${error.message}`);
    }
  });

  return entries;
}

function findRuleConflicts(entries, types) {
  const seen = new Map();
  const conflicts = [];

  entries
    .filter((entry) => types.includes(entry.type))
    .forEach((entry) => {
      Object.entries((entry.rules && entry.rules.static) || {}).forEach(([source, target]) => {
        const key = normalizeText(source);
        const previous = seen.get(key);
        if (previous && previous.target !== target) {
          conflicts.push(`${JSON.stringify(source)}：${previous.target} / ${target}`);
          return;
        }
        seen.set(key, { target, entry });
      });
    });

  return conflicts;
}

function runAudit({ checkArtifact = true, quiet = false } = {}) {
  const errors = [];
  const warnings = [];
  const normalizedSources = new Set(sourceFiles.map((file) => file.replace(/\\/g, "/")));
  const sourceRoot = path.join(root, "src");
  const discoveredSources = listJavaScriptFiles(sourceRoot).map((file) => path.relative(root, file).replace(/\\/g, "/"));

  sourceFiles.forEach((file) => {
    const absolutePath = path.join(root, file);
    if (!fs.existsSync(absolutePath)) {
      errors.push(`构建列表中的文件不存在：${file}`);
      return;
    }

    try {
      new vm.Script(fs.readFileSync(absolutePath, "utf8"), { filename: file });
    } catch (error) {
      errors.push(`JavaScript 语法错误 ${file}：${error.message}`);
    }
  });

  discoveredSources.forEach((file) => {
    if (!normalizedSources.has(file)) errors.push(`源码尚未加入构建列表：${file}`);
  });

  const localeFiles = listJavaScriptFiles(path.join(root, "src", "locales", "zh-CN"));
  const entries = collectRuleEntries(localeFiles, errors);
  const registrations = new Set();

  entries.forEach((entry) => {
    const id = `${entry.type}:${entry.name || "global"}:${entry.component || "index"}`;
    if (registrations.has(id)) errors.push(`规则重复注册：${id}`);
    registrations.add(id);

    Object.entries((entry.rules && entry.rules.static) || {}).forEach(([source, target]) => {
      if (!normalizeText(source)) errors.push(`存在空白源词条：${id}`);
      if (!normalizeText(target)) errors.push(`存在空翻译：${id} -> ${JSON.stringify(source)}`);
    });
  });

  findRuleConflicts(entries, ["common", "layout"]).forEach((conflict) => {
    errors.push(`全局或布局词条冲突：${conflict}`);
  });

  const pageMatcherSource = fs.readFileSync(path.join(root, "src", "core", "pageMatcher.js"), "utf8");
  const matchedPages = new Set([...pageMatcherSource.matchAll(/return\s+["']([^"']+)["']/g)].map((match) => match[1]));
  const registeredPages = new Set(entries.filter((entry) => entry.type === "page").map((entry) => entry.name));

  registeredPages.forEach((page) => {
    if (!matchedPages.has(page)) errors.push(`页面规则没有对应路径识别：${page}`);
  });
  matchedPages.forEach((page) => {
    if (!["unknown", "buzz", "generate"].includes(page) && !registeredPages.has(page)) {
      errors.push(`路径识别没有对应页面规则：${page}`);
    }
  });

  const foldedRules = new Map();
  entries.forEach((entry) => {
    Object.entries((entry.rules && entry.rules.static) || {}).forEach(([source, target]) => {
      const folded = normalizeText(source).toLocaleLowerCase("en-US");
      const previous = foldedRules.get(folded);
      if (previous && previous.source !== source && previous.target !== target) {
        warnings.push(`大小写词条含义不同：${JSON.stringify(previous.source)} / ${JSON.stringify(source)}`);
      } else if (!previous) {
        foldedRules.set(folded, { source, target });
      }
    });
  });

  if (checkArtifact) {
    const buildSource = fs.readFileSync(path.join(root, "scripts", "build.js"), "utf8");
    const configuredVersion = buildSource.match(/const version = ["']([^"']+)["']/)?.[1];
    const artifactPath = path.join(root, "civitai-chinese-translator.user.js");
    const artifactVersion = fs.existsSync(artifactPath)
      ? fs.readFileSync(artifactPath, "utf8").match(/^\/\/ @version\s+(\S+)/m)?.[1]
      : null;

    if (!artifactVersion) errors.push("缺少构建产物或无法读取其版本号");
    else if (configuredVersion !== artifactVersion) {
      errors.push(`构建产物版本不一致：源码 ${configuredVersion} / 产物 ${artifactVersion}`);
    }
  }

  if (!quiet) {
    warnings.forEach((warning) => console.warn(`[警告] ${warning}`));
    if (errors.length === 0) console.log(`审计通过：${sourceFiles.length} 个源码文件，${entries.length} 组翻译规则。`);
  }

  if (errors.length > 0) {
    throw new Error(`项目审计失败：\n- ${errors.join("\n- ")}`);
  }

  return { warnings };
}

if (require.main === module) {
  try {
    runAudit();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { runAudit };
