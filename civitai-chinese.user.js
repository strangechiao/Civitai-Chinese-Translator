// ==UserScript==
// @name         CCT 中文增强插件
// @namespace    https://civitai.com/
// @version      0.1.7
// @description  CCT 中文增强插件（全称：Civitai Chinese Translator），一个用于中文翻译、汉化 [Civitai](https://civitai.com/) / [CivitaiRed](https://civitai.red/) 英文界面的 Tampermonkey 用户脚本。
// @homepageURL  https://github.com/strangechiao/civitai-chinese
// @supportURL   https://github.com/strangechiao/civitai-chinese/issues
// @updateURL    https://raw.githubusercontent.com/strangechiao/civitai-chinese/main/civitai-chinese.user.js
// @downloadURL  https://raw.githubusercontent.com/strangechiao/civitai-chinese/main/civitai-chinese.user.js
// @match        https://civitai.red/*
// @match        https://www.civitai.red/*
// @match        https://civitai.com/*
// @match        https://www.civitai.com/*
// @match        https://auth.civitai.com/*
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  window.CivitaiChinese = window.CivitaiChinese || {};
  window.CivitaiChinese.logoSvgs = {
    dark: "<svg width=\"160\" height=\"101\" viewBox=\"0 0 160 101\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M150 6H155C157.761 6 160 8.23858 160 11V21C160 23.7614 157.761 26 155 26H150V6Z\" fill=\"#E03131\"/>\n<path d=\"M158.325 11.5C158.698 11.5 159.005 11.1961 158.949 10.8275C158.895 10.4679 158.797 10.1154 158.657 9.77792C158.431 9.23196 158.1 8.73588 157.682 8.31802C157.264 7.90016 156.768 7.56869 156.222 7.34254C155.885 7.20274 155.532 7.10488 155.172 7.05053C154.804 6.99482 154.5 7.30221 154.5 7.675V7.675C154.5 8.04779 154.806 8.34277 155.17 8.42205C155.353 8.46181 155.532 8.51787 155.705 8.58978C156.088 8.74808 156.435 8.98011 156.727 9.27261C157.02 9.56512 157.252 9.91237 157.41 10.2945C157.482 10.4682 157.538 10.6474 157.578 10.8302C157.657 11.1944 157.952 11.5 158.325 11.5V11.5Z\" fill=\"white\"/>\n<rect x=\"150\" y=\"5\" width=\"3\" height=\"22\" fill=\"white\"/>\n<rect width=\"150\" height=\"101\" rx=\"5\" fill=\"white\"/>\n<rect x=\"5\" y=\"5\" width=\"140\" height=\"91\" fill=\"#414141\"/>\n<rect x=\"10\" y=\"10\" width=\"130\" height=\"81\" fill=\"white\"/>\n<rect x=\"55\" y=\"9\" width=\"82\" height=\"6\" transform=\"rotate(90 55 9)\" fill=\"#414141\"/>\n<rect x=\"100\" y=\"10\" width=\"82\" height=\"6\" transform=\"rotate(90 100 10)\" fill=\"#414141\"/>\n<path d=\"M47 86.75L41.333 91H29.666L35.333 86.75H12V78H47V86.75ZM74.5 83C80.6628 83 86.0813 86.1857 89.1992 91H59.8008C62.9187 86.1857 68.3372 83 74.5 83ZM119.5 89.666L128.25 78H137L127.25 91H111.75L102 78H110.75L119.5 89.666ZM67.8027 39.332C71.0004 38.0075 74.5194 37.6607 77.9141 38.3359C81.3087 39.0112 84.4266 40.6786 86.874 43.126L80.6875 49.3125C79.4638 48.0888 77.9044 47.2556 76.207 46.918C74.5097 46.5804 72.7502 46.7538 71.1514 47.416C69.5526 48.0783 68.186 49.1998 67.2246 50.6387C66.2631 52.0776 65.75 53.7694 65.75 55.5C65.75 57.2306 66.2631 58.9224 67.2246 60.3613C68.186 61.8002 69.5526 62.9217 71.1514 63.584C72.7502 64.2462 74.5097 64.4196 76.207 64.082C77.9044 63.7444 79.4638 62.9112 80.6875 61.6875L86.874 67.874C84.4266 70.3214 81.3087 71.9888 77.9141 72.6641C74.5194 73.3393 71.0004 72.9925 67.8027 71.668C64.6052 70.3434 61.8721 68.1004 59.9492 65.2227C58.0263 62.3448 57 58.9612 57 55.5C57 52.0388 58.0263 48.6552 59.9492 45.7773C61.8721 42.8996 64.6052 40.6566 67.8027 39.332ZM137 41.75H123.699L123.698 68H114.949V41.75H102V33H137V41.75ZM22.8027 34.332C26.0004 33.0075 29.5194 32.6607 32.9141 33.3359C36.3087 34.0112 39.4266 35.6786 41.874 38.126L35.6875 44.3125C34.4638 43.0888 32.9044 42.2556 31.207 41.918C29.5097 41.5804 27.7502 41.7538 26.1514 42.416C24.5526 43.0783 23.186 44.1998 22.2246 45.6387C21.2631 47.0776 20.75 48.7694 20.75 50.5C20.75 52.2306 21.2631 53.9224 22.2246 55.3613C23.186 56.8002 24.5526 57.9217 26.1514 58.584C27.7502 59.2462 29.5097 59.4196 31.207 59.082C32.9044 58.7444 34.4638 57.9112 35.6875 56.6875L41.874 62.874C39.4266 65.3214 36.3087 66.9888 32.9141 67.6641C29.5194 68.3393 26.0004 67.9925 22.8027 66.668C19.6052 65.3434 16.8721 63.1004 14.9492 60.2227C13.0263 57.3448 12 53.9612 12 50.5C12 47.0388 13.0263 43.6552 14.9492 40.7773C16.8721 37.8996 19.6052 35.6566 22.8027 34.332ZM65.75 28H57V10H65.75V28ZM83.25 16.333V10H92V28H83.25L69.75 10H78.5L83.25 16.333ZM47 23H39.3438L36.2676 12.0625H22.7324L19.6562 23H12L15.6562 10H43.3438L47 23ZM110.75 14.25H137V23H102V10H110.75V14.25Z\" fill=\"#414141\"/>\n</svg>",
    light: "<svg width=\"160\" height=\"101\" viewBox=\"0 0 160 101\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M150 6H155C157.761 6 160 8.23858 160 11V21C160 23.7614 157.761 26 155 26H150V6Z\" fill=\"#E03131\"/>\n<path d=\"M158.325 11.5C158.698 11.5 159.005 11.1961 158.949 10.8275C158.895 10.4679 158.797 10.1154 158.657 9.77792C158.431 9.23196 158.1 8.73588 157.682 8.31802C157.264 7.90016 156.768 7.56869 156.222 7.34254C155.885 7.20274 155.532 7.10488 155.172 7.05053C154.804 6.99482 154.5 7.30221 154.5 7.675V7.675C154.5 8.04779 154.806 8.34277 155.17 8.42205C155.353 8.46181 155.532 8.51787 155.705 8.58978C156.088 8.74808 156.435 8.98011 156.727 9.27261C157.02 9.56512 157.252 9.91237 157.41 10.2945C157.482 10.4682 157.538 10.6474 157.578 10.8302C157.657 11.1944 157.952 11.5 158.325 11.5V11.5Z\" fill=\"white\"/>\n<rect x=\"150\" y=\"5\" width=\"3\" height=\"22\" fill=\"#414141\"/>\n<rect width=\"150\" height=\"101\" rx=\"5\" fill=\"#414141\"/>\n<rect x=\"5\" y=\"5\" width=\"140\" height=\"91\" fill=\"white\"/>\n<rect x=\"10\" y=\"10\" width=\"130\" height=\"81\" fill=\"#414141\"/>\n<rect x=\"55\" y=\"9\" width=\"82\" height=\"6\" transform=\"rotate(90 55 9)\" fill=\"white\"/>\n<rect x=\"100\" y=\"10\" width=\"82\" height=\"6\" transform=\"rotate(90 100 10)\" fill=\"white\"/>\n<path d=\"M47 86.75L41.333 91H29.666L35.333 86.75H12V78H47V86.75ZM74.5 83C80.6628 83 86.0813 86.1857 89.1992 91H59.8008C62.9187 86.1857 68.3372 83 74.5 83ZM119.5 89.666L128.25 78H137L127.25 91H111.75L102 78H110.75L119.5 89.666ZM67.8027 39.332C71.0004 38.0075 74.5194 37.6607 77.9141 38.3359C81.3087 39.0112 84.4266 40.6786 86.874 43.126L80.6875 49.3125C79.4638 48.0888 77.9044 47.2556 76.207 46.918C74.5097 46.5804 72.7502 46.7538 71.1514 47.416C69.5526 48.0783 68.186 49.1998 67.2246 50.6387C66.2631 52.0776 65.75 53.7694 65.75 55.5C65.75 57.2306 66.2631 58.9224 67.2246 60.3613C68.186 61.8002 69.5526 62.9217 71.1514 63.584C72.7502 64.2462 74.5097 64.4196 76.207 64.082C77.9044 63.7444 79.4638 62.9112 80.6875 61.6875L86.874 67.874C84.4266 70.3214 81.3087 71.9888 77.9141 72.6641C74.5194 73.3393 71.0004 72.9925 67.8027 71.668C64.6052 70.3434 61.8721 68.1004 59.9492 65.2227C58.0263 62.3448 57 58.9612 57 55.5C57 52.0388 58.0263 48.6552 59.9492 45.7773C61.8721 42.8996 64.6052 40.6566 67.8027 39.332ZM137 41.75H123.699L123.698 68H114.949V41.75H102V33H137V41.75ZM22.8027 34.332C26.0004 33.0075 29.5194 32.6607 32.9141 33.3359C36.3087 34.0112 39.4266 35.6786 41.874 38.126L35.6875 44.3125C34.4638 43.0888 32.9044 42.2556 31.207 41.918C29.5097 41.5804 27.7502 41.7538 26.1514 42.416C24.5526 43.0783 23.186 44.1998 22.2246 45.6387C21.2631 47.0776 20.75 48.7694 20.75 50.5C20.75 52.2306 21.2631 53.9224 22.2246 55.3613C23.186 56.8002 24.5526 57.9217 26.1514 58.584C27.7502 59.2462 29.5097 59.4196 31.207 59.082C32.9044 58.7444 34.4638 57.9112 35.6875 56.6875L41.874 62.874C39.4266 65.3214 36.3087 66.9888 32.9141 67.6641C29.5194 68.3393 26.0004 67.9925 22.8027 66.668C19.6052 65.3434 16.8721 63.1004 14.9492 60.2227C13.0263 57.3448 12 53.9612 12 50.5C12 47.0388 13.0263 43.6552 14.9492 40.7773C16.8721 37.8996 19.6052 35.6566 22.8027 34.332ZM65.75 28H57V10H65.75V28ZM83.25 16.333V10H92V28H83.25L69.75 10H78.5L83.25 16.333ZM47 23H39.3438L36.2676 12.0625H22.7324L19.6562 23H12L15.6562 10H43.3438L47 23ZM110.75 14.25H137V23H102V10H110.75V14.25Z\" fill=\"white\"/>\n</svg>",
  };
})();

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
    buzz: "Buzz",
    system: "系统",
    others: "其他",
    "filter by message...": "按消息筛选...",
    "hide read": "隐藏已读通知",
    "mark all as read": "全部标记为已读",
    "notification settings": "通知设置",
    "all caught up! nothing to see here": "已查看全部通知，没有新的内容",

    // 聊天按钮
    chats: "聊天",
    "mute sounds": "关闭提示音",
    "play sounds": "打开提示音",
    moderation: "内容审核",
    "enable conversation moderation": "开启 违规内容过滤",
    "disable conversation moderation": "关闭 违规内容过滤",
    "not connected. may not receive live messages or alerts.": "未连接。可能无法接收实时消息或提醒。",
    "filter by user": "按用户筛选",
    active: "当前",
    pending: "待处理",
    archived: "已归档",
    joined: "已加入",
    "[deleted]": "[已删除]",
    "Chat Terms": "聊天规则",
    "beware of scam messages. civitai staff will only message you from": "请注意诈骗消息。Civitai 工作人员只会通过",
    "red-nameplate": "红色铭牌",
    "accounts and have a civitai moderator badge next to their name (not the profile picture!). do not click unknown links or share payment info.":
      "账号联系你，并且他们的名字旁边会有 Civitai 管理员徽章（不是头像上的徽章！）。不要点击未知链接或分享付款信息。",
    "report suspicious dms": "举报可疑私信",
    "immediately.": "。",
    "Chats are inspected by automated systems, and moderators have full access to chat logs. Discussion of illegal activities, or the sharing of illegal image content, harassment of other users, or unwanted solicitation will not be tolerated and may result in account suspension or deletion.":
      "聊天记录由自动系统审核，版主拥有完整的聊天记录访问权限。讨论非法活动、分享非法图片内容、骚扰其他用户或进行不必要的招揽行为均不被容忍，违者可能导致账号被暂停或删除。",

    "got it": "知道了",
    "select at least 1 user above": "请至少选择一个用户",
    "new chat": "新聊天",
    "select users": "选择用户",
    cancel: "取消",
    "start chat": "开始聊天",
    "enable notifications": "启用通知",
    "disable notifications": "关闭通知",
    report: "举报",
    leave: "归档",
    "report chat": "举报聊天",
    "needs moderator review": "需要版主审核",
    spam: "垃圾信息",
    reason: "原因",
    "potential security concern": "潜在安全问题",
    "content that should be reviewed": "需要审核的内容",
    "incorrect or misrepresented content": "错误或误导性内容",
    "other concern": "其他问题",
    "comment (optional)": "备注（可选）",
    submit: "提交",
    "anything that helps moderators triage (link, account behavior, repeated posts, etc.)":
      "请提供任何有助于版主判断的信息（例如链接、账号行为、重复发布等）",
    "really leave this chat?": "确定要归档此聊天吗？",
    "you can rejoin at any time from the archived tab.": "你可以随时从“已归档”标签页重新加入。",
    confirm: "确认",
    "send message": "发送消息",
    "search sticker": "搜索贴纸",
    "you don't own any stickers yet. grab some in the shop.": "你还没有贴纸。去商店买一些吧。",
    "no chats.": "暂无聊天",

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

    "buy buzz": "购买Buzz",
    "your profile": "个人资料",
    training: "训练",
    "my collections": "我的收藏",
    "liked models": "喜欢的模型",
    "bookmarked articles": "收藏的文章",
    "my bounties": "我的悬赏",
    "your challenges": "我的挑战",
    "buzz dashboard": "Buzz管理",
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
    new: "新增",
    "account settings": "账户设置",

    // 邀请返利
    "earn free membership perks": "赚取免费会员权益",
    "share your code. every paid membership month from a friend earns you tokens you can spend on membership perks, plus 10% blue buzz back on their buzz purchases.":
      "分享你的邀请码。好友每支付一个月会员，你都能获得可用于会员权益的 Tokens，并且还能从他们的 Buzz 购买中获得 10% 蓝色 Buzz 返利。",
    "open referrals": "打开邀请返利",

    // 获取 Buzz
    "top up your buzz balance any time.": "随时为你的 Buzz 余额充值。",
    "buy buzz with your favorite crypto. sent to your personalized deposit address.":
      "使用你喜欢的加密货币购买 Buzz。款项会发送到你的专属充值地址。",
    "view challenges": "查看挑战",
    "enter themed contests. generate using the featured model, ai picks the winners.":
      "参加主题比赛。使用指定模型生成作品，由 AI 评选获胜者。",
    "view bounties": "查看悬赏",
    "earn buzz by completing creative requests from other users, or post your own.":
      "完成其他用户的创作请求来赚取 Buzz，或发布你自己的悬赏。",
    "buzz beggars board": "Buzz 讨赏榜",
    "post your images to get tipped buzz by the community and featured on the homepage":
      "发布你的图片，获得社区 Buzz 打赏，并有机会展示在首页。",
    "visit board": "查看榜单",
    "get paid": "获得收益",
    "banking phase": "入库阶段",
    "generating a lot of buzz? bank it to earn cash!": "生成了很多 Buzz？存入后即可赚取现金！",
    "how does this work?": "这是如何运作的？",
    "this is an estimated value based on the assumption that a portion of all buzz earned by creators will be banked. the amount you receive depends on the total buzz banked by all creators at the end of the month. if you’re not happy with your estimated payout, you can withdraw your buzz during the 3-day extraction phase at the end of the month.":
      "这是基于一项假设得出的估算值：创作者获得的所有 Buzz 中会有一部分被存入。你最终收到的金额取决于月底所有创作者存入的 Buzz 总量。如果你对预计收益不满意，可以在月底为期 3 天的提取阶段取回你的 Buzz。",
    "this is an estimated value based on the assumption that a portion of all buzz earned by creators will be banked. the amount you receive depends on the total buzz banked by all creators at the end of the month. if you're not happy with your estimated payout, you can withdraw your buzz during the 3-day extraction phase at the end of the month.":
      "这是基于一项假设得出的估算值：创作者获得的所有 Buzz 中会有一部分被存入。你最终收到的金额取决于月底所有创作者存入的 Buzz 总量。如果你对预计收益不满意，可以在月底为期 3 天的提取阶段取回你的 Buzz。",
    close: "关闭",
    "join the creator program": "加入创作者计划",
    "program requirements": "计划要求",
    "have a creator score higher than 40k": "创作者评分高于 40k",
    "creator score": "创作者评分",
    "be a civitai green member": "成为 Civitai 绿色会员",
    "become a civitai member now!": "立即成为 Civitai 会员！",
    "compensation pool": "补偿池",
    "current banked": "当前已存入",
    "current banked buzz": "当前已存入 Buzz",
    "how is this determined?": "这是如何计算的？",
    "redeem your code": "兑换你的代码",
    "enter your unique code to instantly receive rewards": "输入你的专属代码，即可立即领取奖励",
    "buzz-code-here": "在此输入 Buzz 代码",
    redeem: "兑换",
    "case-insensitive • spaces auto-removed • instant processing": "不区分大小写 • 自动移除空格 • 即时处理",
    "all redemptions are final and non-refundable.": "所有兑换一经完成，不可撤销且不可退款。",
    "purchased codes": "已购买的代码",
    "no codes yet": "暂无代码",
    "redeem a code above to see it here": "在上方兑换代码后会显示在这里",

    // 我的Buzz管理
    "my buzz dashboard": "我的Buzz管理",
    blue: "蓝色",
    green: "绿色",
    yellow: "黄色",
    current: "当前",
    "need more yellow buzz?": "需要更多黄色 Buzz？",
    "top up now to keep creating and exploring": "立即充值，继续创作和探索",
    "top up": "充值",
    "yellow gained": "获得的黄色 Buzz",
    "yellow spent": "消耗的黄色 Buzz",
    "blue gained": "获得的蓝色 Buzz",
    "blue spent": "消耗的蓝色 Buzz",
    "green gained": "获得的绿色 Buzz",
    "green spent": "消耗的绿色 Buzz",
    "free buzz earned from viewing ads or completing daily challenges.": "通过观看广告或完成每日任务获得的免费Buzz。",
    generation: "生成内容",
    "24h": "24小时",
    "7d": "7天",
    weekly: "每周",
    "12m": "12个月",
    "all times are utc": "所有时间均为 UTC 时间",
    recent: "最近的",
    transactions: "交易",
    "view all": "查看全部",
    "view image": "查看图片",
    "show more": "显示更多",
    "transaction history": "交易历史",
    from: "从",
    to: "到",
    type: "类型",
    "select a type": "选择类型",
    "export csv": "导出 CSV",
    reward: "奖励",
    tip: "打赏",
    refund: "退款",
    purchase: "购买",
    bounty: "悬赏",
    sell: "出售",
    compensation: "补偿",
    donation: "捐赠",
    bid: "出价",
    redeemable: "可兑换",
    "ways to earn": "赚取",
    "ways to earn blue buzz": "赚取蓝色 Buzz 的方式",
    "earn 4x blue buzz with a membership": "开通会员赚取 4 倍蓝色 Buzz",
    "with a membership": "开通会员",
    "for each unique reaction you give": "每给出一次不重复的反应",
    "for feedback given on the generator": "在生成器中提供反馈",
    "for first 3 people that you follow each day": "每天关注的前 3 个人",
    "by claiming it daily in the image generator": "每天在图片生成器中领取",
    "for the first image post you make each day": "每天发布的第一张图片",
    "for each time a user collects your content": "每当有用户收藏你的内容",
    "for each user that reacts to anything you created in the last 30 days": "每有用户对你近 30 天内创作的内容作出反应",
    "for each user that posts an image to your model": "每有用户向你的模型发布图片",
    "for each report you make that is accepted": "每提交一个被采纳的举报",
    "generation buzz earned": "生成内容获得的 Buzz",
    "top earning resources": "收益最高的资源",
    "search your resources": "搜索你的资源",
    "no earning resources yet": "暂无收益资源",
    "earnings can take up to 24 hours to appear": "收益最多可能需要 24 小时才会显示",
    "if you react to the same thing multiple times, you will not get more rewards.": "如果你对同一个内容多次作出反应，将不会获得更多奖励。",
    "if you unfollow and follow the same person, you will not get this reward again.": "如果你取消关注后又关注同一个人，将不会再次获得此奖励。",
    "when a user loves your content, they can add it to one of their collections. you'll be rewarded each time this happens.":
      "当用户喜欢你的内容时，可以将其添加到自己的收藏中。每次发生这种情况，你都会获得奖励。",
    "daily buzz rewards reset at midnight utc": "每日 Buzz 奖励会在 UTC 时间午夜重置",
    "resets in": "重置倒计时",
    day: "天",
    month: "月",
    "no transactions yet.": "暂无交易记录",
    "no results found": "未找到结果",
    "try adjusting your search or filters to find what you're looking for": "尝试调整搜索条件或筛选条件，以找到您想要的内容。",

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

(function () {
  "use strict";

  window.CivitaiChinese = window.CivitaiChinese || {};

  const textRules = [
    {
      pattern: /^signed in as (.+)\. log in below to add another account\.$/i,
      replace: "已登录为 $1。请在下方登录以添加另一个账户。",
    },
    {
      pattern: /^oh,\s*no!\s*you are still seeing this\.\.\.\s*please check your subscription status and try again\.$/i,
      replace: "糟糕，您仍然能看到此内容…请检查您的订阅状态并重试。",
    },

    // 月份年份
    {
      pattern: /^(january|february|march|april|may|june|july|august|september|october|november|december) (\d{4})$/i,
      replace(match, monthName, year) {
        const months = {
          january: "1月",
          february: "2月",
          march: "3月",
          april: "4月",
          may: "5月",
          june: "6月",
          july: "7月",
          august: "8月",
          september: "9月",
          october: "10月",
          november: "11月",
          december: "12月",
        };

        return `${year}年${months[monthName.toLowerCase()]}`;
      },
    },
    // 配额单位
    {
      pattern: /^([\d,]+) \/ day$/i,
      replace: "$1 / 天",
    },
    {
      pattern: /^([\d,]+) \/ month$/i,
      replace: "$1 / 月",
    },
    // Buzz 生成收益
    {
      pattern: /^no (blue|蓝色|yellow|黄色|green|绿色) buzz earned this month$/i,
      replace(match) {
        const colors = {
          blue: "蓝色",
          蓝色: "蓝色",
          yellow: "黄色",
          黄色: "黄色",
          green: "绿色",
          绿色: "绿色",
        };

        return `本月没有获得${colors[match[1]]} Buzz`;
      },
    },
    {
      pattern: /^you didn't earn any (blue|蓝色|yellow|黄色|green|绿色) buzz from generations in this period\. pick another month with the selector above to see your earnings\.$/i,
      replace(match) {
        const colors = {
          blue: "蓝色",
          蓝色: "蓝色",
          yellow: "黄色",
          黄色: "黄色",
          green: "绿色",
          绿色: "绿色",
        };

        return `你在此期间没有通过生成内容获得任何${colors[match[1]]} Buzz。请使用上方选择器切换到其他月份查看收益。`;
      },
    },
    {
      pattern: /^get (blue|蓝色|yellow|黄色|green|绿色) buzz$/i,
      replace(match, colorName) {
        const colors = {
          blue: "蓝色",
          蓝色: "蓝色",
          yellow: "黄色",
          黄色: "黄色",
          green: "绿色",
          绿色: "绿色",
        };

        return `获取${colors[colorName]} Buzz`;
      },
    },
    {
      pattern: /^multiple ways to get (blue|蓝色|yellow|黄色|green|绿色) buzz and power your creativity$/i,
      replace(match, colorName) {
        const colors = {
          blue: "蓝色",
          蓝色: "蓝色",
          yellow: "黄色",
          黄色: "黄色",
          green: "绿色",
          绿色: "绿色",
        };

        return `通过多种方式获取${colors[colorName]} Buzz，助力你的创作`;
      },
    },
    {
      pattern: /^your ([\d,.]+[km]?) could be worth \$([\d,.]+)!?$/i,
      replace(match, buzzAmount, cashAmount) {
        return `你的 ${buzzAmount} Buzz 可能价值 $${cashAmount}！`;
      },
    },
    {
      pattern: /^your current creator score is ([\d,.]+[km]?)\.?$/i,
      replace: "你当前的创作者评分是 $1。",
    },
    // Buzz 任务时间
    {
      pattern: /^resets in (\d+)h (\d+)m$/i,
      replace: "$1小时$2分钟后重置",
    },
    {
      pattern: /^resets in (\d+)h$/i,
      replace: "$1小时后重置",
    },
    {
      pattern: /^resets in (\d+)m$/i,
      replace: "$1分钟后重置",
    },
    // Buzz 数量提示
    {
      pattern: /^blue: ([\d,]+)$/i,
      replace: "蓝色：$1",
    },
    {
      pattern: /^yellow: ([\d,]+)$/i,
      replace: "黄色：$1",
    },
    {
      pattern: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)-(\d{1,2})$/i,
      replace(match, monthName, day) {
        const months = {
          jan: "1月",
          feb: "2月",
          mar: "3月",
          apr: "4月",
          may: "5月",
          jun: "6月",
          jul: "7月",
          aug: "8月",
          sep: "9月",
          oct: "10月",
          nov: "11月",
          dec: "12月",
        };

        return `${months[monthName.toLowerCase()]}${day.padStart(2, "0")}日`;
      },
    },
    // 中文月份 + 日期，例如：七月 1, 2026
    {
      pattern: /^(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec|一月|二月|三月|四月|五月|六月|七月|八月|九月|十月|十一月|十二月) (\d{1,2}), (\d{4})$/i,
      replace(match, monthName, day, year) {
        const months = {
          january: "01",
          february: "02",
          march: "03",
          april: "04",
          may: "05",
          june: "06",
          july: "07",
          august: "08",
          september: "09",
          october: "10",
          november: "11",
          december: "12",
          jan: "01",
          feb: "02",
          mar: "03",
          apr: "04",
          jun: "06",
          jul: "07",
          aug: "08",
          sep: "09",
          oct: "10",
          nov: "11",
          dec: "12",
          一月: "01",
          二月: "02",
          三月: "03",
          四月: "04",
          五月: "05",
          六月: "06",
          七月: "07",
          八月: "08",
          九月: "09",
          十月: "10",
          十一月: "11",
          十二月: "12",
        };
        const paddedDay = String(day).padStart(2, "0");

        return `${year}年${months[monthName.toLowerCase()] || months[monthName]}月${paddedDay}日`;
      },
    },
    // 交易历史
    {
      pattern: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec) (\d{1,2}), (\d{4})$/i,
      replace(match, monthName, day, year) {
        const months = {
          jan: "01",
          feb: "02",
          mar: "03",
          apr: "04",
          may: "05",
          jun: "06",
          jul: "07",
          aug: "08",
          sep: "09",
          oct: "10",
          nov: "11",
          dec: "12",
        };
        const paddedDay = String(day).padStart(2, "0");

        return `${year}年${months[monthName.toLowerCase()]}月${paddedDay}日`;
      },
    },
    {
      pattern: /^buzz reward: a image that you posted was liked by someone else$/i,
      replace: "Buzz奖励：你发布的一张图片被其他人点赞",
    },
    {
      pattern: /^buzz reward: a image that you posted was collected by someone else$/i,
      replace: "Buzz奖励：你发布的一张图片被其他人收藏",
    },
    // Buzz 交易记录
    
    {
      pattern: /^buzz reward: you made your first post of the day$/i,
      replace: "Buzz奖励：你发布了当天的第一篇内容",
    },
    {
      pattern: /^buzz reward: for encouraging others to post content$/i,
      replace: "Buzz奖励：鼓励他人发布内容",
    },
    {
      pattern: /^buzz reward: content that you posted was liked by someone else$/i,
      replace: "Buzz奖励：你发布的内容被其他人点赞",
    },
    {
      pattern: /^buzz reward: content that you posted was collected by someone else$/i,
      replace: "Buzz奖励：你发布的内容被其他人收藏",
    },
    // 聊天内容
    {
      pattern: /^(.+) joined$/i,
      replace: "$1 已加入",
    },
    {
      pattern: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec) (\d{1,2}), (\d{4}) (\d{1,2}):(\d{2}):(\d{2}) ([ap]m)$/i,
      replace(match, monthName, day, year, hour, minute, second, period) {
        const months = {
          jan: "01",
          feb: "02",
          mar: "03",
          apr: "04",
          may: "05",
          jun: "06",
          jul: "07",
          aug: "08",
          sep: "09",
          oct: "10",
          nov: "11",
          dec: "12",
        };
        const chinesePeriod = period === "am" ? "上午" : "下午";
        const paddedDay = String(day).padStart(2, "0");
        const paddedHour = String(hour).padStart(2, "0");

        return `${year}年${months[monthName.toLowerCase()]}月${paddedDay}日 ${paddedHour}:${minute}:${second} ${chinesePeriod}`;
      },
    },
    // 通知内容
    {
      pattern: /^the (.+) model has a new version: (.+)$/i,
      replace: "$1 模型有新版本：$2",
    },
    {
      pattern: /^you received a tip of (\d+) (.+) buzz from @?(.+) on one of your images!$/i,
      replace: "你收到 @$3 的 $1 个 $2 Buzz 图片打赏！",
    },
    {
      pattern: /^gain early access on model: (.+)$/i,
      replace: "获得模型抢先体验：$1",
    },
    {
      pattern: /^your avatar has been blocked\.$/i,
      replace: "你的头像已被屏蔽。",
    },
    {
      pattern: /^your image using (.+) has received (\d+) reactions?$/i,
      replace: "你使用 $1 生成的图片收到了 $2 个反应",
    },
    {
      pattern: /^(.+) has followed you!$/i,
      replace: "$1 关注了你！",
    },
    {
      pattern: /^(.+) released a new checkpoint: (.+)$/i,
      replace: "$1 发布了新的 Checkpoint：$2",
    },
    {
      pattern: /^(.+) released a new wildcards?: (.+)$/i,
      replace: "$1 发布了新的通配符：$2",
    },
    {
      pattern: /^(.+) released a new workflows?: (.+)$/i,
      replace: "$1 发布了新的工作流：$2",
    },
    {
      pattern: /^(.+) released a new lora: (.+)$/i,
      replace: "$1 发布了新的 LoRA：$2",
    },
    {
      pattern: /^(.+) published a new musing article: "(.+)"$/i,
      replace: "$1 发布了新的随笔文章：“$2”",
    },
    {
      pattern: /^(.+) published a new generation guide article: "(.+)"$/i,
      replace: "$1 发布了新的生成指南文章：“$2”",
    },
    {
      pattern: /^(.+) published a new announcement article: "(.+)"$/i,
      replace: "$1 发布了新的公告文章：“$2”",
    },
    {
      pattern: /^(.+) published a new story article: "(.+)"$/i,
      replace: "$1 发布了新的故事文章：“$2”",
    },
    {
      pattern: /^(.+) responded to the comment thread on the (.+) model$/i,
      replace: "$1 回复了 $2 模型的评论串",
    },
    {
      pattern: /^(.+) commented on your image posted to the (.+) model$/i,
      replace: "$1 评论了你发布到 $2 模型的图片",
    },
    {
      pattern: /^(.+) responded to a article thread you're in$/i,
      replace: "$1 回复了你参与的文章讨论串",
    },
    {
      pattern: /^(.+) mentioned you in a comment on (.+)$/i,
      replace: "$1 在 $2 的评论中提到了你",
    },
    {
      pattern: /^(.+) replied to a image comment you made$/i,
      replace: "$1 回复了你发表的图片评论",
    },
    {
      pattern: /^an hour ago$/i,
      replace: "1 小时前",
    },
    {
      pattern: /^(\d+) hours? ago$/i,
      replace: "$1 小时前",
    },
    {
      pattern: /^a day ago$/i,
      replace: "1 天前",
    },
    {
      pattern: /^a month ago$/i,
      replace: "1 个月前",
    },
    {
      pattern: /^a year ago$/i,
      replace: "1 年前",
    },
    {
      pattern: /^(\d+) years? ago$/i,
      replace: "$1 年前",
    },
    {
      pattern: /^(\d+) months? ago$/i,
      replace: "$1 个月前",
    },
    {
      pattern: /^(\d+) days? ago$/i,
      replace: "$1 天前",
    },
  ];

  const elementRules = [
    {
      pattern: /^no (blue|蓝色|yellow|黄色|green|绿色) buzz earned this month$/i,
      replace(match) {
        const colors = {
          blue: "蓝色",
          蓝色: "蓝色",
          yellow: "黄色",
          黄色: "黄色",
          green: "绿色",
          绿色: "绿色",
        };

        return `本月没有获得${colors[match[1]]} Buzz`;
      },
    },
    {
      pattern: /^you didn't earn any (blue|蓝色|yellow|黄色|green|绿色) buzz from generations in this period\. pick another month with the selector above to see your earnings\.$/i,
      replace(match) {
        const colors = {
          blue: "蓝色",
          蓝色: "蓝色",
          yellow: "黄色",
          黄色: "黄色",
          green: "绿色",
          绿色: "绿色",
        };

        return `你在此期间没有通过生成内容获得任何${colors[match[1]]} Buzz。请使用上方选择器切换到其他月份查看收益。`;
      },
    },
    {
      pattern: /^([\d,]+) \/ (day|天)$/i,
      replace(match) {
        return `${match[1]} / 天`;
      },
    },
    {
      pattern: /^([\d,]+) \/ (month|月)$/i,
      replace(match) {
        return `${match[1]} / 月`;
      },
    },
    {
      pattern: /^ways to earn (blue|蓝色|yellow|黄色|green|绿色) buzz$/i,
      replace(match) {
        const colors = {
          blue: "蓝色",
          蓝色: "蓝色",
          yellow: "黄色",
          黄色: "黄色",
          green: "绿色",
          绿色: "绿色",
        };

        return `赚取${colors[match[1]]} Buzz 的方式`;
      },
    },
    {
      pattern: /^earn (\d+)x (blue|蓝色|yellow|黄色|green|绿色) buzz with a membership$/i,
      replace(match) {
        const colors = {
          blue: "蓝色",
          蓝色: "蓝色",
          yellow: "黄色",
          黄色: "黄色",
          green: "绿色",
          绿色: "绿色",
        };

        return `开通会员赚取 ${match[1]} 倍${colors[match[2]]} Buzz`;
      },
    },
    {
      pattern: /^resets in (\d+)h (\d+)m$/i,
      replace(match) {
        return `${match[1]}小时${match[2]}分钟后重置`;
      },
    },
    {
      pattern: /^resets in (\d+)h$/i,
      replace(match) {
        return `${match[1]}小时后重置`;
      },
    },
    {
      pattern: /^resets in (\d+)m$/i,
      replace(match) {
        return `${match[1]}分钟后重置`;
      },
    },
    {
      pattern: /^signed in as (.+)\. log in below to add another account\.$/i,
      replace(match) {
        return `已登录为 ${match[1]}。请在下方登录以添加另一个账户。`;
      },
    },
  ];

  window.CivitaiChinese.textRules = textRules;
  window.CivitaiChinese.elementRules = elementRules;
})();

(function () {
  "use strict";

  window.CivitaiChinese = window.CivitaiChinese || {};

  window.CivitaiChinese.styleText = `
  .civitai-cn-select-wrapper {
    position: relative !important;
  }

  .civitai-cn-select-wrapper::after {
    content: attr(data-civitai-cn-text);
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    max-width: calc(100% - 42px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    z-index: 2;
    box-sizing: border-box;
    color: var(--mantine-color-text);
    font-family: var(--mantine-font-family);
    font-size: var(--mantine-font-size-xs);
    font-weight: 400;
    line-height: var(--mantine-line-height);
    -webkit-font-smoothing: var(--mantine-webkit-font-smoothing);
  }

  .civitai-cn-hidden-input-text {
    color: transparent !important;
    caret-color: transparent !important;
  }

  .civitai-cn-logo-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: var(--civitai-cn-logo-button-size, 38px);
    min-width: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    box-sizing: border-box;
  }

  .civitai-cn-logo-button:hover {
    background: transparent;
  }

  .civitai-cn-logo-button img {
    display: block;
    width: auto;
    height: var(--civitai-cn-logo-button-size, 38px);
  }

  .civitai-cn-logo-menu-root {
    position: relative;
    display: inline-flex;
    align-items: center;
    height: var(--civitai-cn-logo-button-size, 38px);
  }

  .civitai-cn-logo-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    z-index: 10000;
    min-width: 150px;
    padding: 4px;
    border: 1px solid var(--mantine-color-default-border, rgba(255, 255, 255, 0.12));
    border-radius: var(--mantine-radius-sm, 4px);
    background: var(--mantine-color-body, #1a1b1e);
    box-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.24));
  }

  .civitai-cn-logo-menu[hidden] {
    display: none;
  }

  .civitai-cn-logo-menu-item {
    display: block;
    width: 100%;
    padding: 8px 10px;
    border-radius: var(--mantine-radius-xs, 2px);
    color: var(--mantine-color-text, inherit);
    font-family: var(--mantine-font-family);
    font-size: var(--mantine-font-size-sm);
    line-height: var(--mantine-line-height-sm);
    text-align: left;
    text-decoration: none;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .civitai-cn-logo-menu-item:hover {
    background: var(--mantine-color-gray-light-hover, rgba(128, 128, 128, 0.16));
    text-decoration: none;
  }
`;
})();

(function () {
  "use strict";

  const config = window.CivitaiChinese || {};
  const logoSvgs = config.logoSvgs || {};
  const menuItems = [
    {
      label: "提交错误",
      url: "https://github.com/strangechiao/Civitai-Chinese-Translator-Userscript/issues",
    },
    {
      label: "前往仓库",
      url: "https://github.com/strangechiao/Civitai-Chinese-Translator-Userscript",
    },
    {
      label: "联系我",
      url: "https://civitai.com/user/qoob9006",
    },
    {
      label: "特别鸣谢：@catlover1937",
      url: "https://civitai.red/user/catlover1937",
    },
  ];

  function syncLogoButtonSize(button, createButton) {
    const height = Math.round(createButton.getBoundingClientRect().height);
    if (height > 0) {
      button.style.setProperty("--civitai-cn-logo-button-size", `${height}px`);
    }
  }

  function getColorScheme() {
    const candidates = [document.documentElement, document.body].filter(Boolean);

    for (const element of candidates) {
      const scheme = element.getAttribute("data-mantine-color-scheme") || element.dataset.mantineColorScheme;
      if (scheme === "dark" || scheme === "light") {
        return scheme;
      }
    }

    if (document.documentElement.classList.contains("dark") || document.body.classList.contains("dark")) {
      return "dark";
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  }

  function getLogoSvg() {
    const scheme = getColorScheme();
    return logoSvgs[scheme] || logoSvgs.light || logoSvgs.dark || "";
  }

  function syncLogoImage(logoButton) {
    const logoImage = logoButton.querySelector("img");
    const logoSvg = getLogoSvg();
    if (!logoImage || !logoSvg) return;

    const nextSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`;
    if (logoImage.src !== nextSrc) {
      logoImage.src = nextSrc;
    }
  }

  function closeLogoMenu(root) {
    if (!root) return;

    const button = root.querySelector(".civitai-cn-logo-button");
    const menu = root.querySelector(".civitai-cn-logo-menu");
    if (!button || !menu) return;

    menu.hidden = true;
    button.setAttribute("aria-expanded", "false");
  }

  function toggleLogoMenu(root) {
    const button = root.querySelector(".civitai-cn-logo-button");
    const menu = root.querySelector(".civitai-cn-logo-menu");
    if (!button || !menu) return;

    const nextOpen = menu.hidden;
    menu.hidden = !nextOpen;
    button.setAttribute("aria-expanded", String(nextOpen));
  }

  function createMenu() {
    const menu = document.createElement("div");
    menu.className = "civitai-cn-logo-menu";
    menu.id = "civitai-cn-logo-menu";
    menu.hidden = true;
    menu.setAttribute("role", "menu");

    menuItems.forEach((item) => {
      const link = document.createElement("a");
      link.className = "civitai-cn-logo-menu-item";
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = item.label;
      link.setAttribute("role", "menuitem");
      link.addEventListener("click", () => closeLogoMenu(menu.parentElement));

      menu.appendChild(link);
    });

    return menu;
  }

  function createLogoMenuRoot() {
    const root = document.createElement("div");
    root.className = "civitai-cn-logo-menu-root";

    const logoButton = document.createElement("button");
    logoButton.type = "button";
    logoButton.className = "civitai-cn-logo-button";
    logoButton.setAttribute("aria-label", "CCT 中文增强插件");
    logoButton.setAttribute("aria-haspopup", "menu");
    logoButton.setAttribute("aria-controls", "civitai-cn-logo-menu");
    logoButton.setAttribute("aria-expanded", "false");
    logoButton.title = "CCT 中文增强插件";

    const logoImage = document.createElement("img");
    logoImage.alt = "";

    logoButton.appendChild(logoImage);
    logoButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleLogoMenu(root);
    });

    root.appendChild(logoButton);
    root.appendChild(createMenu());

    return root;
  }

  function injectLogoButton() {
    if (!logoSvgs.dark && !logoSvgs.light) return;

    const createButton = document.querySelector('[data-activity="create:navbar"]');
    if (!createButton) return;

    const createGroup = createButton.parentElement;
    const actionGroup = createGroup && createGroup.parentElement;
    if (!createGroup || !actionGroup) return;

    const legacyLogoButton = actionGroup.querySelector(":scope > .civitai-cn-logo-button");
    if (legacyLogoButton) {
      legacyLogoButton.remove();
    }

    let root = actionGroup.querySelector(":scope > .civitai-cn-logo-menu-root");
    if (!root) {
      root = createLogoMenuRoot();
    }

    if (root.parentElement !== actionGroup || root.nextElementSibling !== createGroup) {
      actionGroup.insertBefore(root, createGroup);
    }

    const logoButton = root.querySelector(".civitai-cn-logo-button");
    syncLogoImage(logoButton);
    syncLogoButtonSize(logoButton, createButton);
    requestAnimationFrame(() => syncLogoButtonSize(logoButton, createButton));
  }

  document.addEventListener("click", (event) => {
    document.querySelectorAll(".civitai-cn-logo-menu-root").forEach((root) => {
      if (!root.contains(event.target)) {
        closeLogoMenu(root);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    document.querySelectorAll(".civitai-cn-logo-menu-root").forEach(closeLogoMenu);
  });

  window.CivitaiChinese = window.CivitaiChinese || {};
  window.CivitaiChinese.injectLogoButton = injectLogoButton;
})();

(function () {
  "use strict";

  const config = window.CivitaiChinese || {};
  const dictionary = config.dictionary || {};
  const textRules = config.textRules || [];
  const elementRules = config.elementRules || [];
  const injectLogoButton = config.injectLogoButton || function () {};

  function normalizeText(text) {
    return text
      .replace(/\s+/g, " ")
      .replace(/\u00a0/g, " ")
      .trim()
      .toLowerCase();
  }

  function getTranslation(text) {
    const normalized = normalizeText(text);

    if (dictionary[normalized]) {
      return dictionary[normalized];
    }

    for (const rule of textRules) {
      if (rule.pattern.test(normalized)) {
        const trimmed = text.trim();
        const translated = trimmed.replace(rule.pattern, rule.replace);

        return translated === trimmed ? normalized.replace(rule.pattern, rule.replace) : translated;
      }
    }

    return null;
  }

  function hasAncestorText(node, patterns) {
    let element = node.parentElement;
    let depth = 0;

    while (element && depth < 4) {
      const normalized = normalizeText(element.textContent);

      if (patterns.some((pattern) => pattern.test(normalized))) {
        return true;
      }

      element = element.parentElement;
      depth += 1;
    }

    return false;
  }

  function getContextualTranslation(node) {
    const normalized = normalizeText(node.nodeValue);
    const colorBuzzPattern = /^(get|获取) (blue|蓝色|yellow|黄色|green|绿色) buzz$/i;
    const colorBuzzDescriptionPattern =
      /^(multiple ways to get|通过多种方式获取) (blue|蓝色|yellow|黄色|green|绿色) buzz (and power your creativity|，助力你的创作)$/i;
    const creatorProgramValuePattern =
      /^(your|你的) [\d,.]+[km]? (could be worth|buzz 可能价值) \$[\d,.]+!?$/i;
    const creatorScorePattern =
      /^(your current|你当前的) (creator score|创作者评分) (is|是) [\d,.]+[km]?\.?$/i;
    const bankingPhasePattern = /^(banking|入库) (phase|阶段)$/i;

    if (normalized === "get" && hasAncestorText(node, [colorBuzzPattern])) {
      return "获取";
    }

    if (hasAncestorText(node, [colorBuzzDescriptionPattern])) {
      if (normalized === "multiple ways to get") {
        return "通过多种方式获取";
      }

      if (normalized === "buzz and power your creativity") {
        return "Buzz，助力你的创作";
      }

      if (normalized === "and power your creativity") {
        return "，助力你的创作";
      }
    }

    if (hasAncestorText(node, [creatorProgramValuePattern])) {
      if (normalized === "your") {
        return "你的";
      }

      if (normalized === "could be worth") {
        return "Buzz 可能价值";
      }
    }

    if (hasAncestorText(node, [creatorScorePattern])) {
      if (normalized === "your current") {
        return "你当前的";
      }

      const scoreMatch = normalized.match(/^is ([\d,.]+[km]?)\.?$/i);
      if (scoreMatch) {
        return `是 ${scoreMatch[1]}。`;
      }
    }

    if (hasAncestorText(node, [bankingPhasePattern])) {
      if (normalized === "banking") {
        return "入库";
      }

      if (normalized === "phase") {
        return "阶段";
      }
    }

    return null;
  }

  function injectStyle() {
    if (document.getElementById("civitai-cn-style")) return;

    const style = document.createElement("style");
    style.id = "civitai-cn-style";
    style.textContent = config.styleText || "";

    document.head.appendChild(style);
  }

  function translateTextNode(node) {
    const rawText = node.nodeValue;
    const chinese = getContextualTranslation(node) || getTranslation(rawText);

    if (chinese) {
      node.nodeValue = rawText.replace(rawText.trim(), chinese);
    }
  }

  function translateAttributes(element) {
    const attrs = ["title", "aria-label", "placeholder"];

    attrs.forEach((attr) => {
      const value = element.getAttribute(attr);
      const chinese = value && getTranslation(value);

      if (chinese) {
        element.setAttribute(attr, chinese);
      }
    });
  }

  function translateElementRules(element) {
    const rawText = element.textContent;
    const normalized = normalizeText(rawText);

    for (const rule of elementRules) {
      const match = normalized.match(rule.pattern);
      if (!match) continue;

      const hasMatchingChild = Array.from(element.children).some((child) =>
        rule.pattern.test(normalizeText(child.textContent)),
      );

      if (hasMatchingChild) return;

      element.textContent = rule.replace(match);
      return;
    }
  }

  function translateSelectDisplay(element) {
    if (element.tagName !== "INPUT") return;
    if (!element.readOnly) return;
    if (!element.value) return;

    const chinese = getTranslation(element.value);
    if (!chinese) return;

    const wrapper = element.closest(".mantine-Input-wrapper");
    if (!wrapper) return;

    wrapper.classList.add("civitai-cn-select-wrapper");
    wrapper.dataset.civitaiCnText = chinese;
    element.classList.add("civitai-cn-hidden-input-text");
  }

  function translatePage() {
    injectStyle();
    injectLogoButton();

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;

        const tagName = parent.tagName.toLowerCase();

        if (["script", "style", "textarea"].includes(tagName)) {
          return NodeFilter.FILTER_REJECT;
        }

        return NodeFilter.FILTER_ACCEPT;
      },
    });

    let node;

    while ((node = walker.nextNode())) {
      translateTextNode(node);
    }

    document.querySelectorAll("*").forEach((element) => {
      translateAttributes(element);
      translateElementRules(element);
      translateSelectDisplay(element);
    });
  }

  let translateTimer = null;

  function scheduleTranslate() {
    if (translateTimer) return;

    translateTimer = setTimeout(() => {
      translateTimer = null;
      translatePage();
    }, 100);
  }

  translatePage();

  const observer = new MutationObserver(scheduleTranslate);

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["value", "placeholder", "title", "aria-label"],
  });

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-mantine-color-scheme", "class"],
  });
})();
