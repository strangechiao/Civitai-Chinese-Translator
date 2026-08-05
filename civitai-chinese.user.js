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
    buzz: "积分",
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

    "buy buzz": "购买积分",
    "your profile": "个人资料",
    training: "训练",
    "my collections": "我的收藏",
    "liked models": "喜欢的模型",
    "bookmarked articles": "收藏的文章",
    "my bounties": "我的悬赏",
    "your challenges": "我的挑战",
    "buzz dashboard": "积分管理",
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

    // BUZZ菜单项
    "my buzz dashboard": "我的积分管理",
    blue: "蓝色",
    green: "绿色",
    yellow: "黄色",
    current: "当前",

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

    // Buzz 数量提示
    {
      pattern: /^blue: ([\d,]+)$/i,
      replace: "蓝色：$1",
    },
    {
      pattern: /^yellow: ([\d,]+)$/i,
      replace: "黄色：$1",
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
    const normalized = normalizeText(element.textContent);

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

  translatePage();

  const observer = new MutationObserver(() => {
    translatePage();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
    attributes: true,
    attributeFilter: ["value", "placeholder", "title", "aria-label"],
  });

  setInterval(translatePage, 1000);
})();
