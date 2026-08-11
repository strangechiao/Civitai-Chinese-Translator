(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "models",
    component: "index",
    rules: {
      static: {
        // 模型分类导航
        Character: "角色",
        Style: "风格",
        Concept: "概念",
        Background: "背景",
        Poses: "姿势",
        Tool: "工具",
        Assets: "素材",
        Vehicle: "载具",
        Buildings: "建筑",
        Objects: "物体",

        // 排序方式
        "Highest Rated": "评分最高",
        "Most Images": "图片最多",

        // 筛选面板
        "Model status": "模型状态",
        "On-site Generation": "支持站内生成",
        Featured: "精选",
        "Model types": "模型类型",
        "Checkpoint type": "Checkpoint 类型",
        Trained: "训练",
        Merge: "合并",
        "File format": "文件格式",

        // Models 页面图片卡片操作菜单
        "Report resource": "举报资源",

        // Models 页面：屏蔽用户确认窗口
        "Block User": "屏蔽用户",
        "Are you sure you want to block this user? Once a user is blocked, you won't see their content again and they won't see yours.":
          "确定要屏蔽该用户吗？屏蔽后，你将无法再看到该用户的内容，对方也无法看到你的内容。",
        "Yes, block the user": "是，屏蔽该用户",

        // Models 页面：举报模型与举报图片窗口
        "Report model": "举报模型",
        "Claim imported model": "认领已导入的模型",
        "This uses my art": "此模型使用了我的作品",

        // Models 页面：举报表单字段
        Email: "邮箱",
        Phone: "电话",

        // Models 页面：作品被模型使用申诉
        "If you believe that this model may have been trained using your art, please complete the form below for review. A review of the claim will only be opened if this is placed by the original artist.":
          "如果你认为该模型可能使用了你的作品进行训练，请填写以下表单以供审核。仅当申诉由原创作者本人提交时，我们才会受理。",
        "We will contact you at this address to verify the legitimacy of your claim":
          "我们将通过此邮箱联系你，以核实申诉的真实性",
        "Images for comparison": "用于对比的图片",
        "Drag images here or click to select files": "将图片拖放到此处，或点击选择文件",
        "Attach up to 10 files, each file should not exceed 50 MB":
          "最多可上传 10 个文件，每个文件不得超过 50 MB",
        "Are you interested in having an official model of your art style created and attributed to you?":
          "你是否有兴趣创建一个以你的艺术风格为基础，并注明归属于你的官方模型？",
        "You would receive 70% of any proceeds made from the use of your model on Civitai.":
          "你将获得该模型在 Civitai 上产生收益的 70%。",
        "I'm interested": "我感兴趣",
        "Not at this time": "暂时不考虑",

        // Models 页面：添加到模型收藏夹窗口
        "Add to Model Collection": "将模型添加到收藏夹",
        "Favorite Models": "收藏的模型",

        // 模型详情页
        "Updated:": "更新于：",
        Like: "点赞",
        "Add To Vault": "添加到保险库",
        "Stop getting notifications for this model": "停止接收此模型的通知",
        "Get notifications for this model": "接收此模型的通知",
        "Add to collection": "添加到收藏夹",
        "Bid to feature this model": "竞价推广此模型",
        // 部分菜单项会把 Hide 和后半句拆成不同的文本节点。
        "this model": "此模型",
        "content with these tags": "带有这些标签的内容",
        SafeTensor: "SafeTensor",
        Unfollow: "取消关注",
        "processing...": "处理中……",
        Type: "类型",
        Stats: "统计",
        "Generation License Fee": "生成许可费",
        Published: "发布于",
        Hash: "哈希",
        AIR: "AIR",
        Tensors: "张量",
        "Show More": "展开",
        "Suggested Resources": "推荐资源",
        "These are resources suggested by the creator of this model. They may be related to this model or created by the same user.":
          "这些是该模型创作者推荐的资源，可能与此模型相关，也可能由同一位用户创作。",
        Discussion: "讨论",
        "Add Comment": "添加评论",
        "Load more": "加载更多",
        "Add Review": "添加评价",

        // 抢先体验与捐赠支持
        "The creator of this": "此",
        "has set this version to": "的创作者已将该版本设为",
        "and as such it is only available for people who purchase it. This":
          "，因此该版本仅供购买者使用。此",
        "will be available for free in": "将在",
        here: "查看文章",
        "here.": "查看文章",
        "Notify me when it's available.": "开放时通知我",
        "Support this model": "支持此模型",
        "The creator of this Checkpoint has set a donation goal! You can donate to make this resource available to everyone before the end of Early Access.":
          "此 Checkpoint 的创作者设定了捐赠目标！你可以通过捐赠，让所有人在抢先体验结束前使用此资源。",
        "The creator of this Checkpoint has set a donation goal! You can donate to make this resource available to everyone before the end of":
          "此 Checkpoint 的创作者设定了捐赠目标！你可以通过捐赠，让此资源提前向所有人开放。当前阶段：",
        "Donation Goal": "捐赠目标",
        Donate: "捐赠",

        // 创建与发布模型
        "Publish a Model": "发布模型",
        "Use a template": "使用模板",
        "Create your model": "创建模型",
        "Add version": "添加版本",
        "Upload files": "上传文件",
        "Create a post": "创建帖子",
        "Selecting the closest match helps users find your resource.":
          "选择最匹配的分类，有助于用户找到你的资源。",
        "Search or create tags for your model": "搜索或创建模型标签",
        "How to Upload a Model": "如何上传模型",

        // 模型模板
        "Your models": "你的模型",
        "Copy settings only": "仅复制设置",
        "Leaves out the template's description and tags": "不复制模板的描述和标签",
        "Search your models...": "搜索你的模型……",

        // 模型描述与展示收藏夹
        "Tell us what your model does": "请介绍你的模型用途",
        "What does your model do? What's it for? What is your model good at? What should it be used for? What is your resource bad at? How should it not be used?":
          "你的模型能做什么？它适合哪些用途？擅长什么？应该如何使用？有哪些不足？哪些用途不适合使用？",
        "Showcase Collection": "展示收藏夹",
        "Select the collection this model belongs to": "选择此模型所属的收藏夹",
        "Click here to select a collection": "点击选择收藏夹",
        "Creator Controls: metric privacy": "创作者控制：统计数据隐私",
        "Hide these public stats on this model's page and cards. Requires an active Creator Program membership — these only apply while your membership is active.":
          "隐藏此模型详情页和卡片上的公开统计数据。此功能需要有效的创作者计划会员资格，且仅在会员有效期间生效。",
        "Hide tipped / earned Buzz": "隐藏获赠或赚取的 Buzz",
        "Hide download count": "隐藏下载次数",
        "Hide generation count": "隐藏生成次数",

        // 选择展示收藏夹
        "Select Model Showcase Collection": "选择模型展示收藏夹",
        "Search...": "搜索……",
        "No collections found": "未找到收藏夹",
        "It looks like we couldn't find any matching your query.": "未找到与你的搜索条件匹配的收藏夹。",

        // 使用许可与内容声明
        "When using this model, I give permission for users to:": "使用此模型时，我允许用户：",
        "Use without crediting me": "无需注明我的署名即可使用",
        "Share merges of this model": "分享此模型的合并版本",
        "Use different permissions on merges": "为合并版本设置不同许可",
        "Learn more about how licensing works by reading our": "阅读我们的许可指南，详细了解许可规则：",
        "Licensing Guide.": "许可指南",
        "Commercial Use": "商业用途",
        "Select all permissions you would like to apply to your model.": "选择要应用于此模型的所有许可权限。",
        "Sell generated images": "出售生成的图片",
        "Use on Civitai generation service": "用于 Civitai 生成服务",
        "Use on other generation services": "用于其他生成服务",
        "Sell this model or merges": "出售此模型或其合并版本",
        "This resource:": "此资源：",
        "Depicts an actual person": "描绘真实人物",
        "This model was trained on real imagery of a living, or deceased, person, or depicts a character portrayed by a real-life actor or actress. E.g. Tom Cruise or Tom Cruise as Maverick.":
          "此模型使用在世或已故真实人物的影像进行训练，或者描绘由真人演员扮演的角色。例如：汤姆·克鲁斯本人，或汤姆·克鲁斯饰演的“独行侠”。",
        Yes: "是",
        No: "否",
        "Is intended to produce mature themes": "旨在生成成人主题内容",
        "Intended to depict a minor character": "旨在描绘未成年角色",
        "Cannot be used for NSFW generation": "不可用于生成 NSFW 内容",
        "I acknowledge that I have reviewed the choices above, selected the appropriate option, and understand that my account may be at risk if the selection is found to be incorrect.":
          "我确认已查看上述选项并作出适当选择，也理解如果选择有误，我的账号可能面临风险。",

        // 站内 LoRA 训练
        "Create your LoRA": "创建 LoRA",
        "Add training data": "添加训练数据",
        "Review and Submit": "审核并提交",
        "Choose your media type": "选择媒体类型",
        "Choose your LoRA type": "选择 LoRA 类型",
        "A specific person or character, realistic or anime": "特定人物或角色，可以是真实风格或动漫风格",
        "A time period, art style, or general look and feel": "特定时代、艺术风格或整体视觉效果",
        "Objects, clothing, anatomy, poses, etc.": "物体、服装、人体结构、姿势等",
        Effect: "特效",
        "Animations or video effects": "动画或视频特效",
        "How to Use the On-site LoRA Trainer": "如何使用站内 LoRA 训练器",
        "Temporarily disabled - check back soon!": "暂时不可用，请稍后再来查看！",
      },
      regexp: [
        {
          pattern: /^Collection\s*-\s*(\d+)\s+items?$/i,
          replace: (match) => `收藏夹 - ${match[1]} 项`,
        },
        {
          pattern: /^(\d+)\/10 uploaded files$/i,
          replace: (match) => `${match[1]}/10 个文件已上传`,
        },
      ],
      selector: [
        {
          selector: '[role="alert"] [id$="-body"] p',
          textReplacements: [
            {
              pattern: /\s+or once the donation goal is met\. If you want to know more, check out our article\s*$/i,
              replace: " 后免费开放，或在达成捐赠目标后免费开放。如需了解更多，请阅读我们的相关文章：",
            },
          ],
        },
        {
          selector: '.mantine-Spoiler-control[aria-expanded="true"]',
          text: "收起",
        },
      ],
    },
  });
})();
