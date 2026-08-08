# CCT 中文增强插件架构规范

本文档用于约定项目的翻译规则分类方式。后续新增词条、规则、页面适配时，优先遵循这里的结构。

## 核心原则

不要把所有词条都放进一个全局大词典里硬扫全站。

脚本应该先判断当前页面类型，再加载：

```text
通用规则 common + 当前页面目录 pages/<page>/*
```

分类采用“页面作为第一层，页面内组件作为第二层”的方式。这样既能根据 URL 判断页面，又能像维护 Vue 组件一样维护每块 UI 的翻译。

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
      pages/
        modelDetail/
          index.js          模型详情页基础文案
          actions.js        操作按钮区
          downloadPanel.js  下载面板
          airInfo.js        AIR 说明
          reviews.js        评价区
          gallery.js        图库区
          comments.js       评论区

        imageDetail/
          index.js          图片详情页基础文案
          actions.js        操作按钮区
          generationData.js 生成数据面板
          comments.js       评论区

        userProfile/
          index.js          个人资料页基础文案
          showcase.js       展示区
          badges.js         徽章区
          collections.js    收藏集区

        buzz/
          index.js          Buzz 页面基础文案
          balance.js        余额面板
          transactions.js   交易记录
          banking.js        入库/收益面板

        generation/
          index.js          生成器基础文案

        settings/
          index.js          设置页基础文案

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

## 页面与组件分类规则

### 第一层：页面

页面目录由 URL 或页面特征决定。

例子：

```text
/models/...        -> pages/modelDetail/
/images/...        -> pages/imageDetail/
/user/...          -> pages/userProfile/
/buzz-dashboard    -> pages/buzz/
```

脚本运行时先判断当前页面，再只加载该页面目录下的规则。

### 第二层：页面内组件

页面目录内部按 UI 区块拆文件。不要把一个页面所有文案都堆进 `index.js`。

`index.js` 只放该页面的基础文案和不容易归属到具体区块的内容。

### pages/modelDetail/

模型详情页相关文案。

例子：

```text
index.js          页面基础文案
actions.js        Like / Follow / Add to collection / Download
downloadPanel.js 3 variants available / Tensors / Shape / Precision
airInfo.js        What is an AIR? / ecosystem / type / source / id
reviews.js        Reviews / Very Positive / Add review
gallery.js        Gallery / Add post
comments.js       Add comment / Load more
```

### pages/imageDetail/

图片详情页相关文案。

例子：

```text
index.js          页面基础文案
actions.js        Add to showcase / Save / Delete
generationData.js Prompt / Generation data / Resources used / COPY ALL
comments.js       Discussion / Add comment / Load more
```

### pages/userProfile/

个人资料页相关文案。

例子：

```text
index.js       页面基础文案
showcase.js    Showcase / Showcase stats
badges.js      Badges / Featured badge / Hidden badges
collections.js Collections / Favorite models
```

## 加载规则

每次页面变化或首次加载时：

```text
1. 加载 common.js
2. 通过 pageMatcher 判断当前页面
3. 加载 pages/<page>/index.js
4. 加载 pages/<page>/ 下的组件规则
5. 合并规则后交给 translator
```

例子：

```text
模型详情页加载：
common.js
pages/modelDetail/index.js
pages/modelDetail/actions.js
pages/modelDetail/downloadPanel.js
pages/modelDetail/airInfo.js
pages/modelDetail/reviews.js
pages/modelDetail/gallery.js
pages/modelDetail/comments.js

图片详情页加载：
common.js
pages/imageDetail/index.js
pages/imageDetail/actions.js
pages/imageDetail/generationData.js
pages/imageDetail/comments.js
```

## 页面规则结构

每个页面或组件规则文件都使用同一结构：

```js
export default {
  static: {},
  regexp: [],
  selector: [],
  ignore: [],
};
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
   - 是：放对应 `pages/<page>/` 目录下的组件文件
   - 否：继续

3. 文本里有数字、时间、用户名、模型名等变量吗？
   - 是：放 `regexp`
   - 否：继续

4. 这个英文很短，可能在别处有不同含义吗？
   - 是：优先用 `selector`
   - 否：放 `static`

## 维护原则

- 优先页面专属规则，少用全局规则。
- 页面是第一层分类，页面内组件是第二层分类。
- `index.js` 不要无限变大，能归到组件文件的就放组件文件。
- 短词慎放 common，例如 `Type`、`Model`、`Post`。
- 不直接改 React 内部数据节点。
- 不翻译 `script`、`style`、`template`、`svg`、`#__NEXT_DATA__`。
- 动态页面使用 MutationObserver，但只处理新增或变化节点。
- 用户脚本必须有单实例保护，避免改名后新旧脚本同时运行。
- 版本号由维护者手动更新，自动化修改时不要主动改版本号。
