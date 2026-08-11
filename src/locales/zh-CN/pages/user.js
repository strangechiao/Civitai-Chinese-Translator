(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "user",
    component: "index",
    rules: {
      static: {
        // 侧边栏
        FOLLOWERS: "关注者",
        LIKES: "获赞",
        DOWNLOADS: "下载量",
        BADGES: "徽章",

        // 自定义个人资料窗口
        "Provided URL appears to be invalid": "提供的网址似乎无效",

        // 导航栏
        Overview: "概览",
        Posts: "帖子",

        // 内容页
        "View all models": "查看所有模型",
        "View all Articles": "查看所有文章",
        "View all images": "查看所有图片",
      },
    },
  });
})();
