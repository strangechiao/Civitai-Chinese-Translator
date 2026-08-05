# Civitai 汉化插件

这是一个用于汉化 Civitai / civitai.red 的 Tampermonkey 用户脚本。

## 文件结构

- `civitai-chinese.user.js`：最终给 Tampermonkey 使用的成品脚本。
- `src/dictionary.js`：固定文本词典，例如按钮、菜单、标题。
- `src/rules.js`：带变量的正则翻译规则，例如通知、时间。
- `src/styles.js`：脚本注入到网页里的样式。
- `src/translator.js`：扫描页面、替换文字、监听动态加载的主逻辑。
- `scripts/build.js`：把 `src/` 里的源码合并成 `civitai-chinese.user.js`。

## 修改流程

1. 固定英文翻译：改 `src/dictionary.js`。
2. 通知这类句式翻译：改 `src/rules.js`。
3. 下拉框覆盖文字样式：改 `src/styles.js`。
4. 改完后运行：

```bash
node scripts/build.js
```

5. 把生成后的 `civitai-chinese.user.js` 复制到 Tampermonkey。
## GitHub Raw 更新

脚本发布到 GitHub 后，可以用这个 Raw 地址安装：

```txt
https://raw.githubusercontent.com/strangechiao/civitai-chinese/main/civitai-chinese.user.js
```

Tampermonkey 会根据脚本头里的 `@updateURL` 和 `@downloadURL` 检查更新。

注意：每次想让 Tampermonkey 识别到新版本，都要修改 `scripts/build.js` 里的 `@version`，然后重新运行：

```bash
node scripts/build.js
```

再把生成后的 `civitai-chinese.user.js` 推送到 GitHub。

