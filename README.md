# CCT 中文增强插件

CCT 中文增强插件用于汉化 Civitai / CivitaiRed 的英文界面。

当前项目正在重新搭建架构。翻译规则采用：

```text
common 通用规则 + pages/<page>/ 页面规则 + 页面内组件规则
```

详细规范见 [docs/architecture.md](docs/architecture.md)。

## 构建

```powershell
node scripts\build.js
```

构建后会生成：

```text
civitai-chinese-translator.user.js
```
