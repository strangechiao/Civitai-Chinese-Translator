<div align="center">

<img src="./public/logo.svg" width="200">

<h1>CCT 中文增强插件</h1>

<p>
为 Civitai.com 与 Civitai.red 提供汉化、中文化、本地化与界面翻译，并加入原始图片/视频快捷下载、模型介绍快捷展开/折叠、模型版本快速切换等增强功能的 Tampermonkey 用户脚本。
</p>

<a href="https://greasyfork.org/zh-CN/scripts/590454-cct-%E4%B8%AD%E6%96%87%E5%A2%9E%E5%BC%BA%E6%8F%92%E4%BB%B6">
<img src="https://img.shields.io/greasyfork/v/xxxx">
</a>

<a href="LICENSE">
<img src="https://img.shields.io/github/license/strangechiao/civitai-chinese-translator">
</a>

---

<p> 持续更新，逐步完善中… </p>

</div>

---

### 简介

此项目是我的 Vibe Coding 项目，主要是用来解决 Civitai 没有中文的痛点，Edge、Chrome 等浏览器自带的翻译功能都是人机翻译水平，甚至有些不该翻译的也都翻译了，包括“沉浸式翻译”浏览器扩展，也有收费、翻译边界、购买API等问题，所以 CCT 中文增强插件诞生了。

### 主要功能

- 对 Civitai 网站界面进行中文本地化翻译（不翻译模型名称、模型类型等专有名词）

  [观看汉化展示](./public/videos/汉化展示.webm)

- 在网站 LOGO 右侧放置了一个菜单按钮，可以快速反馈问题、更新脚本等。

  [观看设置菜单展示](./public/videos/设置菜单展示.webm)

- 快捷下载原始图片/视频，在不进入详情页的情况下，直接点击下载图标就可以下载原图/原视频。（功能默认关闭）

  [观看下载原始文件展示](./public/videos/下载原始文件展示.webm)

- 快捷展开/折叠模型介绍。部分模型的介绍和更新日志很长，展开后如果想继续查看下方的示例图或评论，往往需要滚动很久才能回到原按钮位置再折叠。开启后，页面右下角会显示快捷按钮，用来快速展开或折叠介绍内容。（功能默认开启）

  [观看快捷折叠模型介绍展示](./public/videos/快捷折叠模型介绍展示.webm)

- 模型版本快速切换。将模型版本选项卡列表改为侧边栏下拉菜单，方便快速查看和切换不同版本，解决部分模型版本过多、切换操作不便的问题。（功能默认开启）

  [观看模型版本快速切换展示](./public/videos/模型版本快速切换展示.webm)

### 安装指南

1. 安装浏览器扩展（以 Chrome 为例）：
   - 前往 [Tampermonkey 官网](https://www.tampermonkey.net/) 下载扩展。

   - 进入首页后现在页面的上面找到浏览器选项卡，选择你使用的浏览器。
     <img src="./public/images/截图1.png">

   - 在页面下方找到下载，点“去商店”后进入对应的浏览器商店安装 Tampermonkey 扩展。
     <img src="./public/images/截图2.png">

2. 配置浏览器
   - Chromium 内核的浏览器需要打开“**允许运行用户脚本**”（如Chrome、Edge等）[查看教程](https://www.tampermonkey.net/faq.php?q=Q209#Q209)。
     <img src="./public/images/截图3.png">

3. 安装脚本
   - 点击 [CCT 中文增强插件](https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator/main/civitai-chinese-translator.user.js) 安装用户脚本，同时支持 Civitai.com 与 Civitai.red。

   - 安装后点击 Tampermonkey 图标，在下拉菜单中确认 CCT 中文增强插件已开启（正常情况下默认开启）。
   - 打开 Civitai 刷新网页或重启浏览器后，即可看到中文界面了。
