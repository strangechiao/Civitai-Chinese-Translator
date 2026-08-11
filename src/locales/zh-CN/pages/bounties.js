(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "bounties",
    component: "index",
    rules: {
      static: {
        // 排序方式
        "Highest Bounty": "悬赏最高",
        "Most Contributors": "贡献者最多",
        "Most Tracked": "追踪最多",

        // 悬赏筛选
        "Bounty type": "悬赏类型",
        "Model Creation": "模型制作",
        "Lora Creation": "LoRA 制作",
        "Embed Creation": "嵌入模型制作",
        "Data Set Creation": "数据集制作",
        "Data Set Caption": "数据集标注",
        "Image Creation": "图片创作",
        "Video Creation": "视频创作",
        "Bounty status": "悬赏状态",
        Open: "进行中",
        Expired: "已过期",
        Awarded: "已颁奖",

        // 悬赏举报
        "Report bounty": "举报悬赏",
      },
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Bounties",
          text: "悬赏",
        },
      ],
    },
  });
})();
