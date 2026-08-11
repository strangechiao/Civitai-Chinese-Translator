(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "shop",
    component: "index",
    rules: {
      static: {
        // 商店介绍
        "Civitai Cosmetic Shop": "Civitai 装扮商店",
        "Any cosmetic purchases directly contributes to Civitai": "购买任何装扮都将直接支持 Civitai",
        "Any cosmetic purchases directly contributes to Civitai 💗": "购买任何装扮都将直接支持 Civitai 💗",
        "Notify me about new items in the shop.": "商店上新时通知我。",
        "Do not notify me about new items in the shop.": "不要通知我商店上新。",
        "Discover handcrafted cosmetics from our featured creators.": "探索精选创作者精心制作的装扮。",
        "Browse a growing collection of community-created cosmetics, including profile backgrounds, badges, avatar decorations, and more. Customize your profile and showcase your style with creations from talented creators.":
          "浏览日益丰富的社区创作装扮，包括个人资料背景、徽章、头像装饰等。使用优秀创作者的作品自定义个人资料，展现你的独特风格。",
        Preview: "预览",

        // 装扮类型筛选
        "Filter by Cosmetic Types": "按装扮类型筛选",
        Badge: "徽章",
        "Name Plate": "用户名牌",
        "Content Decoration": "内容装饰",
        "Avatar Decoration": "头像装饰",
        "Profile Background": "个人资料背景",
        Sticker: "贴纸",
        Pack: "套装",

        // 拥有状态与愿望清单
        Owned: "已拥有",
        "Not Owned": "未拥有",
        Wishlist: "愿望清单",
        Wishlisted: "已加入愿望清单",

        // 链接与个人资料页面
        "Show something different to visitors on civitai.com. Anything you leave off here is shown the same on every Civitai site.":
          "你可以向 civitai.com 的访客展示不同内容。未单独设置的内容将在所有 Civitai 站点保持一致。",
        "Cover Image (civitai.com)": "封面图片（civitai.com）",
        "Leave empty to use the cover image above.": "留空则使用上方的封面图片。",
        "Different announcement on civitai.com": "在 civitai.com 使用不同的公告",
        "Different bio on civitai.com": "在 civitai.com 使用不同的个人简介",

      },
      regexp: [
        {
          pattern: /^any cosmetic purchases directly contributes to civitai(.*)$/i,
          replace: (match) => `购买任何装扮都将直接支持 Civitai${match[1]}`,
        },
      ],
    },
  });
})();
