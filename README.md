<div align="center">

<img src="./public/logo.svg" width="200">

<h1>CCT 中文增强插件</h1>

<p>
汉化（中文化、本地化、翻译）Civitai / Civitai.red 页面的 Tampermonkey 脚本。
</p>

<a href="https://greasyfork.org/zh-CN/scripts/590454-cct-%E4%B8%AD%E6%96%87%E5%A2%9E%E5%BC%BA%E6%8F%92%E4%BB%B6">
<img src="https://img.shields.io/greasyfork/v/xxxx">
</a>

<a href="LICENSE">
<img src="https://img.shields.io/github/license/strangechiao/civitai-chinese-translator">
</a>

<p> 持续更新中…… </p>

</div>

---

### 简介

此项目是我的 Vibe Coding 项目，主要是用来解决 Civitai 没有中文的痛点，Edge、Chrome 等浏览器自带的翻译功能都是人机翻译水平，甚至有些不该翻译的也都翻译了，包括“沉浸式翻译”浏览器扩展，也有收费、翻译边界、购买API等问题，所以 CCT 中文增强插件诞生了。

### 主要功能

- 对 Civitai 网站界面进行中文本地化翻译（不翻译模型名称、模型类型等专有名词）

- 在网站 LOGO 右侧放置了一个菜单按钮，可以快速反馈问题、更新脚本等。

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
   - 点击 [CCT 中文增强插件](https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator/main/civitai-chinese-translator.user.js) 安装用户脚本。

   - 安装后点击 Tampermonkey 图标，在下拉菜单中确认 CCT 中文增强插件已开启（正常情况下默认开启）。
   - 打开 Civitai 刷新网页或重启浏览器后，即可看到中文界面了。
