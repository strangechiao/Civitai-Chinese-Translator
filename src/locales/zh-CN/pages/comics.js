(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "comics",
    component: "index",
    rules: {
      static: {
        // 漫画分类
        Adventure: "冒险",
        Comedy: "喜剧",
        Drama: "剧情",
        Horror: "恐怖",
        Mystery: "悬疑",
        Romance: "爱情",
        "Sci Fi": "科幻",
        "Slice of Life": "日常",
        Thriller: "惊悚",

        // 浏览范围与排序
        "Followed Comics": "已关注的漫画",
        "Most Followed": "关注最多",
        "Most Chapters": "章节最多",
        Today: "今天",
        "This Week": "本周",
        "This Month": "本月",
        "This Year": "今年",

        // 漫画卡片与举报窗口
        "Report comic": "举报漫画",
        "Report comic Project": "举报漫画项目",
      },
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Comics",
          text: "漫画",
        },
      ],
    },
  });
})();
