(function () {
  "use strict";

  window.CCT.registerRules({
    type: "layout",
    name: "header",
    component: "index",
    rules: {
      static: {
        // PRO 按钮
        Pro: "专业版",
        "Unlock Premium Benefits!": "解锁高级会员权益！",
        "Join thousands of creators with exclusive perks, priority support, and advanced features.":
          "解锁专属权益、优先支持与更多高级功能，与数千名创作者一起获得更好的创作体验。",

        // 搜索栏
        // 默认的搜索框下拉菜单按钮的Models，
        // 使用selectValue的方式把“模型”覆盖在了Models上。
        Users: "用户",
        Bounties: "悬赏",
        "Search Civitai": "探索 Civitai",
        "pro-tip: quick search faster!": "小技巧：使用快捷搜索，效率更高！",
        "open the quick search without leaving your keyboard by tapping the": "无需离开键盘，只需按下",
        "key from anywhere and just start typing.": "键，即可随时打开快捷搜索并直接输入内容。",

        // Create 按钮菜单
        Generate: "生成",
        "Post Images": "发布图片",
        "Post Videos": "发布视频",
        "Upload a Model": "发布模型",
        "Generate 3D Model": "生成三维模型",
        "Train a Lora": "训练 LoRA",
        "Write an Article": "撰写文章",
        "Create a Comic": "创建漫画",
        "Create a Bounty": "创建悬赏",
        "Create a Challenge": "创建挑战",

        // Civitai Link 按钮窗口
        "Civitai Link": "连接 Civitai",
        "This feature is currently in early access and only available to Supporters.": "此功能目前处于抢先体验阶段，仅限支持者使用。",
        "Are you a supporter and seeing this message? ": "你是支持者但还是看到了这条消息？",
        "Click here": "点击这里",
        "Interact with any Stable Diffusion instance in realtime from Civitai": "在 Civitai 中实时连接并操作任意 Stable Diffusion 实例",
        "Video Demo": "视频演示",
        "Become a Supporter": "成为支持者",

        // Browsing Level 浏览级别按钮窗口 / Filters 筛选窗口
        "Browsing Level": "浏览等级",
        "Join the Knights Order": "加入骑士团",
        "Help us improve by playing!": "通过体验帮助我们改进！",
        "Select the levels of content you want to see": "选择您想查看的内容级别",
        "With mature content enabled, some content may be hidden.": "启用成人内容后，部分内容可能会被隐藏。",
        "Learn more": "了解更多",
        "Blur mature content (R+)": "模糊处理成人内容（R+）",
        Apply: "应用",
        "my filters": "我的筛选条件",
        "Hidden Tags": "隐藏标签",
        "Search tags to hide": "搜索要隐藏的标签",
        "We'll hide content with these tags throughout the site.": "我们将隐藏网站内所有带有这些标签的内容。",

        // 通知窗口
        Notifications: "通知",
        "Hide Read": "隐藏已读通知",
        "Mark all as read": "全部标记为已读",
        "All caught up! Nothing to see here": "全部看完啦！这里暂时没有新消息。",
        "Notification Settings": "通知设置",
        Announcements: "公告",
        Updates: "更新",
        Milestones: "里程碑",
        Bounties: "悬赏",
        Buzz: "Buzz",
        Referrals: "邀请",
        System: "系统",
        Others: "其他",
        "Filter by message...": "筛选消息…",

        // 聊天窗口
        Chats: "聊天",
        "Mute sounds": "关闭提示音",
        "Play sounds": "打开提示音",
        Moderation: "内容审核",
        "Enable conversation moderation": "开启 违规内容过滤",
        "Disable conversation moderation": "关闭 违规内容过滤",
        "Not connected. may not receive live messages or alerts.": "未连接。可能无法接收实时消息或提醒。",
        // New: "新聊天", (为了避免污染全局new的翻译,用selector选择器单独翻译)
        "Filter by user": "按用户筛选",
        Active: "当前",
        Pending: "待处理",
        Archived: "已归档",
        "No chats.": "空空如也",
        "New Chat": "新的聊天",
        "Select users": "选择用户",
        "Select at least 1 user above": "请至少选择一个用户",
        Cancel: "取消",
        "Start Chat": "开始聊天",
        "Beware of scam messages. Civitai staff will only message you from": "谨防诈骗信息。Civitai 工作人员只会使用",
        "red-nameplate": "红色用户名",
        "accounts and have a Civitai moderator badge next to their name (not the profile picture!). Do not click unknown links or share payment info.":
          "和 Civitai 版主徽章的账号与您联系（徽章位于用户名旁边，而非头像上！）。切勿点击未知链接或泄露付款信息。",
        "Report suspicious DMs": "举报可疑私信",
        "immediately.": "。",
        Leave: "归档",
        "Enable notifications": "启用通知",
        "Disable notifications": "关闭通知",
        "Send message": "发送消息",

        // 用户下拉菜单
        "Add Account": "添加账户",
        Logout: "登出",
        "Logout All": "登出全部",
        Back: "返回",
        "Your Profile": "个人资料",
        Training: "训练",
        "My Collections": "我的收藏夹",
        "Liked Models": "喜欢的模型",
        "Bookmarked Articles": "收藏的文章",
        "My Bounties": "我的悬赏",
        "Your Challenges": "我的挑战",
        "Buzz Dashboard": "Buzz 控制面板",
        "Creator Studio": "创作者工作室",
        "My Vault": "我的保险库",
        Leaderboard: "排行榜",
        Auctions: "拍卖",
        "Knights of New": "新骑士团",
        "Download Link App": "下载 Link App",
        "Creators You Follow": "我关注的创作者",
        "Download History": "下载历史",
        "Getting Started": "入门指南",
        "Light mode": "浅色模式",
        "Dark mode": "深色模式",
        "Account settings": "账户设置",

        // 导航栏
        Home: "首页",
        Bounties: "悬赏",
        Challenges: "挑战",
        Updates: "更新",
      },

      // 聊天窗口
      selector: [
        {
          selector: 'button[data-size="xs"] .tabler-icon-circle-plus',
          closest: "button",
          textSelector: ".mantine-Button-label",
          text: "新聊天",
        },
      ],

      // 搜索栏
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Models",
          text: "模型",
        },
      ],
    },
  });
})();
