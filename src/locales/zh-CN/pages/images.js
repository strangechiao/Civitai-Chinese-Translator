(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "images",
    component: "index",
    rules: {
      static: {
        // 图片详情信息
        Process: "生成过程",
        "Generation data": "生成数据",
        "Resources used": "使用的资源",
        Remix: "再创作",
        Prompt: "提示词",
        "Negative prompt": "负面提示词",
        "Other metadata": "其他元数据",
        "COPY ALL": "全部复制",
        TAG: "标签",
        TIP: "打赏",
        TIPPING: "打赏中",

        // 评论区
        Discussion: "讨论",
        Reply: "回复",
        "Type your comment...": "输入你的评论……",
        "Type your comment…": "输入你的评论……",
        "Load More Comments": "加载更多评论",
      },
      regexp: [
        {
          pattern: /^show (\d+) more$/i,
          replace: "再显示 $1 项",
        },
        {
          pattern: /^cfg\s*scale:\s*(.+)$/i,
          replace: "CFG 强度：$1",
        },
        {
          pattern: /^steps:\s*(.+)$/i,
          replace: "步数：$1",
        },
        {
          pattern: /^sampler:\s*(.+)$/i,
          replace: "采样器：$1",
        },
        {
          pattern: /^seed:\s*(.+)$/i,
          replace: "种子：$1",
        },
      ],
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Images",
          text: "图片",
        },
      ],
    },
  });
})();
