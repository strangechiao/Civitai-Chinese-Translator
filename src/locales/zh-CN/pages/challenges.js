(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "challenges",
    component: "index",
    rules: {
      static: {
        // 每日挑战说明
        "How Challenges Work": "挑战规则说明",
        "How It Works": "参与方式",
        "🎨 How It Works": "🎨 参与方式",
        "Every day, we select a new challenge featuring a specific AI model. Create images using the featured model and submit your best work to compete for prizes!":
          "每天，我们都会选出一个使用特定 AI 模型的新挑战。使用指定模型创作图片，并提交你最好的作品来赢取奖励！",
        "Winning & Rewards": "获胜与奖励",
        "🏆 Winning & Rewards": "🏆 获胜与奖励",
        "The top 3 entries are reviewed and selected by our AI judging system. Entries are ranked by a weighted score where theme relevance counts for 50%, so staying on-theme is key! Winners receive Buzz prizes and challenge points. Even if you don't win, you can earn participation rewards for submitting quality entries.":
          "排名前三的作品将由 AI 评审系统审核并选出。作品采用加权评分，其中主题相关性占 50%，因此紧扣主题非常重要！获胜者将获得 Buzz 奖励和挑战积分。即使没有获胜，提交优质作品也能获得参与奖励。",
        "Challenge Points": "挑战积分",
        "⭐ Challenge Points": "⭐ 挑战积分",
        "Earn points by participating in challenges. Top winners get the most points, but everyone who participates earns something. Climb the leaderboard and show off your skills!":
          "参与挑战即可获得积分。排名越高，获得的积分越多，但所有参与者都会有所收获。登上排行榜，展示你的实力吧！",
        "Tips for Success": "成功技巧",
        "📝 Tips for Success": "📝 成功技巧",
        "Use the featured model specified in the challenge": "使用挑战中指定的模型",
        "• Use the featured model specified in the challenge": "• 使用挑战中指定的模型",
        "Follow the theme or prompt provided": "遵循给定的主题或提示词",
        "• Follow the theme or prompt provided": "• 遵循给定的主题或提示词",
        "Submit your best work - quality over quantity": "提交你最好的作品，质量重于数量",
        "• Submit your best work - quality over quantity": "• 提交你最好的作品，质量重于数量",
        "Check back daily for new challenges": "每天回来查看新的挑战",
        "• Check back daily for new challenges": "• 每天回来查看新的挑战",

        // 挑战操作
        "Notify me": "通知我",
        "Stop notifying me": "停止通知我",
        "Previous winners": "往届获奖者",
        "Create Challenge": "创建挑战",

        // 排序与筛选
        "Highest Prize": "奖励最高",
        Status: "挑战状态",
        Current: "当前",
        Upcoming: "即将开始",
        Completed: "已结束",
        "Challenge Participation": "参与状态",
        Entered: "已参加",
        "Not Entered": "未参加",
        Won: "已获胜",
        Hosting: "我主办的",

        // 社区挑战
        "Community Challenges": "社区挑战",
        "You are all caught up": "已全部看完",
        "Consider changing your period or filters to find more": "可以尝试调整时间范围或筛选条件查看更多内容",
        "Back to the top": "返回顶部",

        // 创建挑战：基本信息
        "Basic Information": "基本信息",
        "Enter challenge title": "输入挑战标题",
        Theme: "主题",
        "1-2 word theme (e.g., 'Neon Dreams')": "用 1～2 个词概括主题（例如：“霓虹梦境”）",
        "Theme Elements": "主题元素",
        "Comma-separated visual cues for scoring. Leave empty to auto-generate from theme.":
          "用于评分的视觉要素，以逗号分隔。留空则根据主题自动生成。",
        "fluffy white textures, soft rounded shapes, pastel palette, ...":
          "蓬松的白色质感、柔和的圆润造型、粉彩配色……",
        "What is the challenge about? Provide details, rules, and any other information participants should know.":
          "这项挑战的内容是什么？请说明详细要求、规则以及参与者需要了解的其他信息。",
        "Suggested size: 1024x768 (4:3 aspect ratio)": "建议尺寸：1024×768（4:3 宽高比）",

        // 可用模型与赛程
        "Eligible Models": "可用模型",
        "Specify which models are allowed for this challenge. Entries must use at least one of the selected models (OR condition, not all). Leave empty to allow any model.":
          "指定本次挑战允许使用的模型。投稿必须至少使用一个已选模型（满足任意一个即可，并非必须全部使用）。留空则允许使用任意模型。",
        "Add Resource": "添加资源",
        "No resources selected": "未选择资源",
        "Any model allowed": "允许使用任意模型",
        Schedule: "赛程安排",
        "Times are rounded down to the hour (your local time).": "时间将向下取整至整点（按你的本地时间显示）。",
        "Starts At (local)": "开始时间（本地）",
        "Ends At (local)": "结束时间（本地）",
        "Your challenge appears in the feed as soon as it passes review.": "挑战通过审核后会立即显示在信息流中。",
        "A moderation scan runs before your challenge becomes visible.": "挑战公开显示前会先经过内容审核扫描。",

        // 报名费与奖金
        "Entry Fee & Prizes": "报名费与奖金",
        "Yellow Buzz": "黄色 Buzz",
        "Green Buzz": "绿色 Buzz",
        "Green Buzz challenges are Safe-For-Work (PG / PG-13) and run on civitai.com; Yellow Buzz Challenges run on civitai.red. Editable while scheduled.":
          "绿色 Buzz 挑战仅限适合工作场所浏览的内容（PG / PG-13），并在 civitai.com 举办；黄色 Buzz 挑战在 civitai.red 举办。挑战处于计划状态时仍可编辑。",
        "Entry fees & prizes use Yellow Buzz. Your challenge is funded by entry fees — each entry pays the entry fee; 25 Buzz per entry covers AI judging and the rest grows the prize pool. Entry fees are non-refundable once paid.":
          "报名费和奖金使用黄色 Buzz。挑战奖金由报名费提供：每份投稿都需支付报名费，其中每份投稿的 25 Buzz 用于 AI 评审，其余计入奖金池。报名费一经支付概不退还。",
        "Entry Fee": "报名费",
        "Min 50 Buzz. 25 Buzz of each entry goes to the prize pool.": "最低 50 Buzz。每份投稿中有 25 Buzz 会计入奖金池。",
        "Initial Prize (optional)": "初始奖金（可选）",
        "Buzz you seed the pool with (charged to you on creation).": "你为奖金池投入的 Buzz（创建挑战时扣除）。",
        "Prize split (must total 100%)": "奖金分配（合计必须为 100%）",
        "1st Place %": "第一名 %",
        "2nd Place %": "第二名 %",
        "3rd Place %": "第三名 %",

        // 投稿要求
        "Entry Requirements": "投稿要求",
        "Allowed Content Ratings": "允许的内容分级",
        "Select which content ratings are allowed for challenge entries.": "选择挑战投稿允许包含的内容分级。",
        "SFW ONLY": "仅限 SFW",
        "INCLUDE MATURE": "包含成人内容",
        "ALL CONTENT": "所有内容",
        Allowed: "已允许：",
        "Max Entries Per User": "每位用户最多投稿数",
        "Maximum submissions per participant": "每位参与者可提交的最大数量",
        "Max Participants (optional)": "参与人数上限（可选）",
        "Once reached, no new participants can join.": "达到上限后，新的参与者将无法加入。",

        // 评审设置
        Judging: "评审设置",
        "Assigned Judge": "指定评审",
        "Select the AI judge for this challenge.": "选择本次挑战使用的 AI 评审。",
        "Select a judge persona": "选择评审角色",
        Categories: "评分分类",
        "These categories and how they're scored are shown publicly so entrants know exactly how they'll be judged. The defaults below are a sensible starting point — adjust or replace them however you like (weights must total 100%).":
          "这些评分分类及其评分方式会公开显示，让参与者清楚了解评审标准。下方默认设置可作为合理起点，你可以自由调整或替换（权重合计必须为 100%）。",
        "Weight %": "权重 %",
        "How well the entry fits and interprets the challenge theme; higher for a clear, strong, on-theme interpretation.":
          "衡量投稿对挑战主题的契合与诠释程度；主题表达越清晰、鲜明且贴切，得分越高。",
        Wittiness: "巧思",
        "Cleverness and conceptual wit of the idea; higher for sharp, clever concepts.":
          "衡量创意的机智与构思巧妙程度；概念越敏锐、巧妙，得分越高。",
        Humor: "幽默",
        "How funny or amusing the entry is; higher for genuinely funny results.": "衡量投稿的幽默或趣味程度；真正有趣的作品得分更高。",
        Aesthetic: "美感",
        "Overall visual appeal — composition, color, lighting, and style; higher for striking, well-composed images.":
          "衡量整体视觉吸引力，包括构图、色彩、光照和风格；视觉突出且构图优秀的图片得分更高。",
        "Add category": "添加评分分类",
        "Total weight": "总权重",
        "Submit Challenge": "提交挑战",
      },
    },
  });
})();
