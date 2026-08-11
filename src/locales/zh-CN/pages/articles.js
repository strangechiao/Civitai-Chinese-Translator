(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "articles",
    component: "index",
    rules: {
      static: {
        // 文章分类
        Story: "故事",
        Musing: "随想",
        Workflows: "工作流",
        "Generation Guide": "生成指南",
        News: "新闻",
        "Tool Guide": "工具指南",
        "Training Guide": "训练指南",
        "Resource Guide": "资源指南",
        "Comparative Study": "对比研究",
        "Data Prep": "数据准备",
        "Video Generation Guide": "视频生成指南",
        "ML Research": "机器学习研究",

        // 排序方式
        "Most Bookmarks": "收藏最多",
        "Recently Updated": "最近更新",

        // 文章卡片操作菜单
        "Report article": "举报文章",
      },
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Articles",
          text: "文章",
        },
      ],
    },
  });
})();
