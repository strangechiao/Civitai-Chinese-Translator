// ==UserScript==
// @name         Civitai 中文汉化插件
// @namespace    https://civitai.com/
// @version      0.1.4
// @description  为 Civitai 提供中文界面翻译
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

    // 我的Buzz管理
    "my buzz dashboard": "我的Buzz管理",
    blue: "蓝色",
    green: "绿色",
    yellow: "黄色",
    current: "当前",
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

    // 交易历史
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
    "when a user loves your content, they can add it to one of their collections. you'll be rewarded each time this happens.": "当用户喜欢你的内容时，可以将其添加到自己的收藏中。每次发生这种情况，你都会获得奖励。",
    "daily buzz rewards reset at midnight utc": "每日 Buzz 奖励会在 UTC 时间午夜重置",
    "resets in": "重置倒计时",
    day: "天",
    month: "月",

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

        return `${year}年${months[monthName]}`;
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

        return `${year}年${months[monthName]}月${paddedDay}日`;
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

        return `${year}年${months[monthName]}月${paddedDay}日 ${paddedHour}:${minute}:${second} ${chinesePeriod}`;
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
`;
})();

(function () {
  "use strict";

  const config = window.CivitaiChinese || {};
  const dictionary = config.dictionary || {};
  const textRules = config.textRules || [];
  const elementRules = config.elementRules || [];

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
        return normalized.replace(rule.pattern, rule.replace);
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
    const chinese = getTranslation(rawText);

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
})();
