(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "3d-models",
    component: "index",
    rules: {
      static: {
        // 3D 模型卡片与预览操作
        "Hide this 3D model": "隐藏此 3D 模型",
        "this 3D model": "此 3D 模型",
        "Preview in-line": "页面内预览",
        "Open model page": "打开模型页面",
        Plain: "纯色",
        Studio: "影棚",
        Light: "明亮",
        Transparent: "透明",
        "Reset View": "重置视角",
        "Reset the camera to the initial fitted view.": "将相机重置为初始适配视角。",
        "Generate with this image": "使用此图片生成",
        "Capture the current view and send it to the generator as an img2img reference.":
          "捕获当前视图，并将其作为图生图参考发送到生成器。",
        "No files yet": "暂无文件",
        "The 3D files for this model are still being processed.": "此模型的 3D 文件仍在处理中。",

        // 3D 模型详情
        "Write a review": "撰写评价",
        Prompt: "提示词",
        Topology: "拓扑结构",
        "Target polycount": "目标多边形数量",
        Symmetry: "对称方式",
        auto: "自动",
        "PBR materials": "PBR 材质",
        Seed: "种子",
        Animation: "动画",
        triangle: "三角面",
        Yes: "是",
        No: "否",
        "All Rights Reserved": "保留所有权利",

        // 评论

        // 图库筛选
        "Media type": "媒体类型",
        Resources: "资源",
        "Hide manually-added": "隐藏手动添加的内容",
        "Hide auto-detected": "隐藏自动检测的内容",
      },
      regexp: [
        {
          pattern: /^Loading 3D model(?:\.{3}|…)?$/i,
          replace: "正在加载 3D 模型……",
        },
        {
          pattern: /^Download \(([^)]+)\)$/i,
          replace: (match) => `下载（${match[1]}）`,
        },
      ],
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "3D Models",
          text: "3D 模型",
        },
      ],
    },
  });
})();
