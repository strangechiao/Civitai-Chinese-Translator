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

        // 创建漫画项目
        "Create Comic Project": "创建漫画项目",
        "Give your project a name and optionally pick a genre. The description is shown on the comic overview page and helps readers discover your work.":
          "为项目命名，并可选择一个题材。简介会显示在漫画概览页，帮助读者发现你的作品。",
        "Project name": "项目名称",
        "My Comic": "我的漫画",
        Genre: "题材",
        "What is your comic about? Set the stage for your readers...":
          "你的漫画讲述了什么？为读者展开故事的序幕……",

        // 漫画预览
        "READER PREVIEW": "读者预览",
        "CARD PREVIEW": "卡片预览",
        "Untitled Comic": "未命名漫画",
        "Start Reading": "开始阅读",
        CHAPTERS: "章节",

        // 项目图片
        "Upload a wide hero banner for the comic overview page and a portrait cover for browse cards. Both are optional and can be changed later.":
          "为漫画概览页上传一张宽幅主视觉横幅，并为浏览卡片上传一张竖版封面。两者均为可选项，之后也可以更改。",
        "Hero Banner": "主视觉横幅",
        Cover: "封面",
        "16:9 banner": "16:9 横幅",
        "Pick from generator": "从生成器选择",

        // 保存状态与创建操作
        "Your comic is saved as a": "你的漫画已保存为",
        "and will appear on your profile's Comics page. It stays private to you until you publish a chapter.":
          "，并会显示在你个人资料的漫画页面中。在发布章节前，只有你自己可以查看。",
        "Create Project": "创建项目",
      },
      regexp: [
        {
          pattern: /^by\s+(.+)$/i,
          replace: "作者：$1",
        },
        {
          pattern: /^(\d+)\s+chapters?$/i,
          replace: "$1 章",
        },
        {
          pattern: /^(\d+)\s+panels?$/i,
          replace: "$1 格",
        },
        {
          pattern: /^chapter\s+(\d+)$/i,
          replace: "第 $1 章",
        },
        {
          pattern: /^ch\.\s*(\d+)$/i,
          replace: "第 $1 章",
        },
      ],
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
