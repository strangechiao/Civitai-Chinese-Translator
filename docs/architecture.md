# [CCT] Civitai汉化&增强插件架构规范

本文档用于约定项目的翻译规则分类方式。后续新增词条、规则、页面适配时，优先遵循这里的结构。

## 核心原则

不要把所有词条都放进一个全局大词典里硬扫全站。

页面分类以网址路径为准。目录名和规则注册名应直接对应一级路径；同一一级路径下的列表页、详情页和弹窗默认归入同一个页面规则，不再按界面形态拆成不同页面。

例如：

```text
/models、/models/...       -> pages/models.js
/images、/images/...       -> pages/images.js
/videos、/videos/...       -> pages/videos.js
/3d-models、/3d-models/... -> pages/3d-models.js
/comics、/comics/...       -> pages/comics.js
/bounties、/bounties/...   -> pages/bounties.js
/challenges、其子路径      -> pages/challenges.js
/changelog、其子路径       -> pages/changelog.js
/shop、其子路径            -> pages/shop.js
/user/...                  -> pages/user.js
```

脚本应该先判断当前页面类型，再加载：

```text
通用规则 common.js + 当前页面文件 pages/<page>.js
```

每条一级网址路径对应一个页面文件。同一路径下的列表、详情、弹窗和卡片菜单都写入同一个文件。

## 目录约定

```text
src/
  core/
    app.js              启动入口、单实例保护
    normalize.js        文本标准化
    pageMatcher.js      页面识别
    registry.js         合并 common 和当前页面规则
    translator.js       DOM 翻译器

  locales/
    zh-CN/
      common.js         全站通用词条
      layout/
        header.js       页头
        footer.js       页脚
      pages/
        home.js          首页
        models.js        模型列表与详情
        images.js        图片列表与详情
        videos.js        视频列表与详情
        3d-models.js     3D 模型列表与详情
        articles.js      文章列表与详情
        comics.js        漫画列表与详情
        bounties.js      悬赏列表与详情
        challenges.js    挑战列表与详情
        changelog.js     更新日志
        shop.js          装扮商店
        user.js          用户页面

  features/
    styles.js           样式
    logoMenu.js         CCT Logo 和菜单

scripts/
  build.js              构建用户脚本
```

## 文件分类规则

### common.js

放全站通用、语义稳定的词。

适合放入 common 的例子：

```text
Save -> 保存
Cancel -> 取消
Delete -> 删除
Download -> 下载
Follow -> 关注
Unfollow -> 取消关注
Load more -> 加载更多
```

不要把页面专属文案放进 common。

## 页面文件分类规则

页面文件由一级网址路径决定，文件名与路径名保持一致。

```text
/                       -> pages/home.js
/models、/models/...     -> pages/models.js
/images、/images/...     -> pages/images.js
/videos、/videos/...     -> pages/videos.js
/3d-models、其子路径     -> pages/3d-models.js
/articles、其子路径      -> pages/articles.js
/comics、其子路径        -> pages/comics.js
/bounties、其子路径      -> pages/bounties.js
/challenges、其子路径    -> pages/challenges.js
/changelog、其子路径     -> pages/changelog.js
/shop、其子路径          -> pages/shop.js
/user/...                -> pages/user.js
```

同一路径下的列表、详情、弹窗、卡片菜单和筛选面板均放在同一个页面文件中，通过注释划分区域，不再创建只有一个 `index.js` 的目录。

## 加载规则

每次页面变化或首次加载时：

```text
1. 加载 common.js
2. 通过 pageMatcher 判断当前页面
3. 加载 pages/<page>.js
4. 合并规则后交给 translator
```

例子：

```text
模型页面加载：
common.js
pages/models.js

3D 模型页面加载：
common.js
pages/3d-models.js
```

## 页面规则结构

每个页面规则文件都使用同一注册结构：

```js
window.CCT.registerRules({
  type: "page",
  name: "models",
  component: "index",
  rules: {
    static: {},
    regexp: [],
    selector: [],
    ignore: [],
  },
});
```

### static

固定文本翻译。

```js
static: {
  "Download": "下载",
  "Suggested Resources": "推荐资源",
}
```

### regexp

动态文本翻译，适合带数字、用户名、时间、数量的句子。

```js
regexp: [
  [/^(\d+) variants? available$/i, "$1 个可用变体"],
  [/^(\d+) items?$/i, "$1 个项目"],
]
```

### selector

指定选择器翻译。适合容易误伤的短词，或只应在某个位置翻译的文本。

```js
selector: [
  [".model-header [data-action='download']", "下载"],
]
```

### ignore

当前页面额外忽略区域。翻译器不应处理这些节点。

```js
ignore: [
  "script",
  "style",
  "template",
  "#__NEXT_DATA__",
]
```

## 新增词条判断流程

新增一个未翻译文本时，按顺序判断：

1. 全站都会出现，且意思稳定吗？
   - 是：放 `common.js`
   - 否：继续

2. 只属于某个页面或功能吗？
   - 是：放对应的 `pages/<page>.js`
   - 否：继续

3. 文本里有数字、时间、用户名、模型名等变量吗？
   - 是：放 `regexp`
   - 否：继续

4. 这个英文很短，可能在别处有不同含义吗？
   - 是：优先用 `selector`
   - 否：放 `static`

## 维护原则

- 优先页面专属规则，少用全局规则。
- 页面文件严格对应一级网址路径。
- 同一路径内通过注释划分功能区域，不再拆分列表页和详情页。
- 短词慎放 common，例如 `Type`、`Model`、`Post`。
- 不直接改 React 内部数据节点。
- 不翻译 `script`、`style`、`template`、`svg`、`#__NEXT_DATA__`。
- 动态页面使用 MutationObserver，但只处理新增或变化节点。
- 用户脚本必须有单实例保护，避免改名后新旧脚本同时运行。
- 版本号由维护者手动更新，自动化修改时不要主动改版本号。
