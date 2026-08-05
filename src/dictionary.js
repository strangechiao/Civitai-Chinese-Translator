(function () {
  "use strict";

  window.CivitaiChinese = window.CivitaiChinese || {};

const dictionary = {
    // 搜索栏
    "search civitai": "在 CivitAI 中搜索",
    users: "用户",
    collections: "收藏",
    tools: "工具",

    // 创建按钮
    create: "创建",
    generate: "生成",
    "post images": "发布图片",
    "post videos": "发布视频",
    "upload a model": "上传模型",
    "generate 3d model": "上传 3D 模型",
    "train a lora": "训练 LoRA 模型",
    "write an article": "写一篇文章",
    "create a comic": "创建漫画",
    "create a bounty": "创建赏金",
    "create a challenge": "创建挑战",

    // civitai link 按钮
    "civitai link": "连接 Civitai",
    "this feature is currently in early access and only available to supporters.": "此功能目前处于抢先体验阶段，仅供支持者使用。",
    "are you a supporter and seeing this message?": "如果你是支持者但仍看到此消息？",
    "click here": "点击这里",
    "interact with any stable diffusion instance in realtime from civitai": "通过 Civitai 与任何 Stable Diffusion 实时交互",
    "video demo": "视频演示",
    "become a supporter": "成为支持者",
    "refreshing your account data...": "正在刷新您的账户数据…",
    "oh, no! you are still seeing this...": "糟糕，您仍然能看到此内容…",
    "please check your subscription status and try again.": "请检查您的订阅状态并重试。",
    "oh, no! you are still seeing this... please check your subscription status and try again.":
      "糟糕，您仍然能看到此内容…请检查您的订阅状态并重试。",
    "refreshing account data...": "正在刷新账户数据...",
    "fetching fresh data for your account": "正在获取您的账户的最新数据",

    // 浏览级别按钮
    "browsing level": "浏览级别",
    "select the levels of content you want to see": "选择你想查看的内容级别",
    "join the knights order": "加入骑士团",
    "with mature content enabled, some content may be hidden.": "启用成人内容后，部分内容可能仍会被隐藏。",
    "learn more": "了解更多",
    "blur mature content (r+)": "模糊成人内容（R+）",
    apply: "应用",
    "my filters": "我的筛选器",
    "hidden tags": "隐藏标签",
    "search tags to hide": "搜索要隐藏的标签",
    "we'll hide content with these tags throughout the site.": "我们会在整个网站中隐藏带有这些标签的内容。",

    // 通知按钮
    notifications: "通知",
    all: "全部",
    announcements: "公告",
    comments: "评论",
    milestones: "里程碑",
    buzz: "Buzz积分",
    system: "系统",
    others: "其他",
    "filter by message...": "按消息筛选...",
    "hide read": "隐藏已读通知",
    "mark all as read": "全部标记为已读",
    "notification settings": "通知设置",
    "all caught up! nothing to see here": "已查看全部通知，没有新的内容",

    // 登录按钮与下拉菜单
    "sign in": "登录",
    leaderboard: "排行榜",
    auctions: "拍卖",
    "download link app": "下载应用程序",
    "sign in/sign up": "登录/注册",
    "light mode": "浅色模式",
    "dark mode": "深色模式",

    // 个人信息
    back: "返回",
    "add account": "添加账户",
    logout: "退出登录",
    "logout all": "退出所有账户",

    "buy buzz": "购买 Buzz积分",
    "your profile": "个人资料",
    training: "训练",
    "my collections": "我的收藏",
    "liked models": "喜欢的模型",
    "bookmarked articles": "收藏的文章",
    "my bounties": "我的悬赏",
    "your challenges": "我的挑战",
    "buzz dashboard": "Buzz积分面板",
    "creator studio": "创作者工作室",
    "my vault": "我的保险库",
    referrals: "邀请返利",
    leaderboard: "排行榜",
    auctions: "拍卖",
    "knights of new": "新品骑士团",
    "download app": "下载应用程序",
    "creators you follow": "关注的创作者",
    "download history": "下载历史",
    "getting started": "入门指南",
    new: "新",
    "account settings": "账户设置",

    // 登录界面
    "sign up or log in": "注册或登录",
    "or continue with email": "或继续通过邮箱登录",
    "enter your email": "输入你的邮箱地址",
    "email me a login link": "通过邮箱登录",
    "verify to continue": "验证后继续",
    "verifying…": "正在验证…",
    "couldn't verify you automatically. complete this quick check to continue.": "无法自动验证您的身份。请完成此快速验证以继续。",
    "check your email": "查看你的邮箱",
    "for a special login link.": "用于邮箱登录的链接。",
    "sending…": "发送中…",

    // 导航栏
    home: "首页",
    models: "模型",
    images: "图片",
    videos: "视频",
    "3d models": "3D 模型",
    articles: "文章",
    comics: "漫画",
    bounties: "悬赏",
    challenges: "挑战",
    updates: "更新",
    shop: "商店",
    more: "更多",
    "manage home page": "管理首页",

    // 首页图片区
    "featured images": "特色图片",
    "all sorts of cool pictures created by our community, from simple shapes to detailed landscapes or human faces. a virtual canvas where you can unleash your creativity or get inspired.":
      "我们社区创作了各种各样的精彩图片，从简单的图形到精细的风景画或人物肖像，应有尽有。这是一个虚拟画布，您可以在这里尽情挥洒创意，或汲取灵感。",
    "explore all images": "查看所有图片",
  };

  window.CivitaiChinese.dictionary = dictionary;
})();
