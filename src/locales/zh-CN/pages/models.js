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
        "Download Selected": "下载所选文件",
        Unfollow: "取消关注",
        "processing...": "处理中……",
        Type: "类型",
        Stats: "统计",
        "Generation License Fee": "生成许可费",
        Published: "发布于",
        Hash: "哈希",
        AIR: "AIR",
        Tensors: "张量",
        "What did you think of this resource?": "你觉得这个资源怎么样？",
        "Show More": "展开",
        "Suggested Resources": "推荐资源",
        "These are resources suggested by the creator of this model. They may be related to this model or created by the same user.":
          "这些是该模型创作者推荐的资源，可能与此模型相关，也可能由同一位用户创作。",
        Discussion: "讨论",
        "Add Comment": "添加评论",
        "Load more": "加载更多",
        "Add Review": "添加评价",
      },
      regexp: [
        {
          pattern: /^(\d+)\/10 uploaded files$/i,
          replace: (match) => `${match[1]}/10 个文件已上传`,
        },
      ],
      selector: [
        {
          selector: '.mantine-Spoiler-control[aria-expanded="true"]',
          text: "收起",
        },
      ],
    },
  });
})();
