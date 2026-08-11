(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "posts",
    component: "index",
    rules: {
      static: {
        // 创建帖子与上传说明
        "Create Image Post": "创建图片帖子",
        "Create Video Post": "创建视频帖子",
        "There may be a short delay before your uploaded media appears in the Model Gallery and Feeds. Please allow a few minutes for your media to become visible after posting.":
          "上传的媒体可能需要稍等片刻才会显示在模型图库和动态中。发布后请等待几分钟，媒体才会变为可见。",
        "Our site is mostly used for sharing AI generated content. You can start generating content using our onsite generator or train your model using your own content by using our onsite trainer.":
          "本站主要用于分享 AI 生成内容。你可以使用站内生成器创作内容，也可以使用自己的内容通过站内训练器训练模型。",
        "Our site is mostly used for sharing AI generated content. You can start generating content using our":
          "本站主要用于分享 AI 生成内容。你可以使用我们的",
        "onsite generator": "站内生成器",
        "or train your model using your own content by using our": "创作内容，也可以使用自己的内容通过我们的",
        "onsite trainer": "站内训练器",
        "Drag images here or click to select files": "将图片拖到这里，或点击选择文件",
        "Attach up to 20 files": "最多可添加 20 个文件",
        "Videos cannot exceed 750 MB, 4K resolution, or 04 minutes (245 seconds) in duration":
          "视频大小不得超过 750 MB，分辨率不得超过 4K，时长不得超过 04 分钟（245 秒）",
        "Accepted file types: .png, .jpeg, .webp, .mp4, .webm":
          "支持的文件类型：.png、.jpeg、.webp、.mp4、.webm",
        "Import from Generator": "从生成器导入",
        Thumbnail: "缩略图",
        SELECT: "选择",
        "Thumbnail will be auto generated.": "系统将自动生成缩略图。",
        "The thumbnail is the image that represents your post. It is the first thing viewers see when they come across your post.":
          "缩略图是代表你帖子的图片，也是其他用户看到该帖子时最先注意到的内容。",

        // 帖子编辑
        "Add a title...": "添加标题……",
        Tag: "标签",
        "Add a description...": "添加描述……",
        "Your post is currently hidden": "你的帖子当前处于隐藏状态",
        Your: "你的",
        Post: "帖子",
        "is currently": "当前处于",
        Hidden: "隐藏状态",
        SAVED: "已保存",
        Publish: "发布",
        "Delete Post": "删除帖子",
        "Edit Post": "编辑帖子",
        "Add to Showcase": "添加到展示",
        "Add Content Decoration": "添加内容装饰",
        Edit: "编辑",
        Resources: "资源",
        "Models, LoRAs, embeddings or other Stable Diffusion or Flux specific resources used to create this image.":
          "用于创作此图片的模型、LoRA、嵌入或其他 Stable Diffusion 或 Flux 专用资源。",
        RESOURCE: "资源",
        "Traditional or generative AI programs, platforms or websites used to create this image.":
          "用于创作此图片的传统或生成式 AI 程序、平台或网站。",
        TOOL: "工具",
        TECHNIQUE: "生成方式",
        Guidance: "引导",

        // 资源评价与媒体操作
        "RESOURCE REVIEWS": "资源评价",
        "What did you think of the resources you used?": "你觉得所使用的资源怎么样？",
        "Take a moment to rate the resources you used in this post by clicking the thumbs below and optionally leaving a comment about the resource.":
          "请花一点时间评价这篇帖子中使用的资源。点击下方的赞或踩，还可以选择留下对该资源的评论。",
        "Edit details": "编辑详情",
        "Schedule Publish": "定时发布",
        "Manually add a resource.": "手动添加资源。",
        "If you can't find the one you're looking for, it's either not uploaded here, or is being filtered out to match your already selected resources.":
          "如果找不到你想要的资源，可能是它尚未上传到本站，或因当前筛选条件及已选资源而未显示。",
        "Edit image": "编辑图片",
        "Delete image": "删除图片",
        "Posting to": "发布到",
        "Select a resource to ensure that all uploaded images receive correct resource attribution":
          "请选择一个资源，确保所有上传的图片都能正确标注资源归属",

        // 资源选择窗口
        "We weren't able to detect any resources used in the creation of this image. You can add them manually using the + Resource button.":
          "未能检测到创作此图片时使用的任何资源。你可以使用“+ 资源”按钮手动添加。",
        "Select resource(s)": "选择资源",
        "Search models": "搜索模型",
        "Resource types": "资源类型",
        FEATURED: "精选",
        RECENT: "最近使用",
        LIKED: "已点赞",
        MINE: "我的",
        Relevance: "相关性",
        Popularity: "热门程度",
        "Couldn't load models": "无法加载模型",
        "Something went wrong on our end — your models are still there. Try again in a moment.":
          "服务器出现了问题，你的模型仍然安全保留。请稍后重试。",
        Retry: "重试",

        // 资源分类标签（页面使用全大写文本）
        CHARACTER: "角色",
        STYLE: "风格",
        CONCEPT: "概念",
        CLOTHING: "服装",
        "BASE MODEL": "基础模型",
        BACKGROUND: "背景",
        POSES: "姿势",
        ASSETS: "素材",
        VEHICLE: "载具",
        BUILDINGS: "建筑",
        OBJECTS: "物体",
        ANIMAL: "动物",
        ACTION: "动作",

        // 资源兼容性与高级模式
        "Advanced Mode": "高级模式",
        "Allow unrestricted mixing of additional resources and base models.":
          "允许不受限制地混合使用附加资源和基础模型。",
        "Model Compatibility": "模型兼容性",
        "Some resources work well together, while others may produce unexpected or lower-quality results.":
          "有些资源可以很好地配合使用，而另一些资源可能会产生意外结果或降低生成质量。",
        "Enabling Advanced Mode lets you freely combine resources, but:":
          "启用高级模式后，你可以自由组合资源，但请注意：",
        "Results may vary, and quality is not guaranteed.": "生成结果可能有所不同，且无法保证质量。",
        "Refunds won't be given for poor results caused by incompatible resources.":
          "因资源不兼容而导致生成结果不佳时，不予退款。",

        // 发布政策
      },
      selector: [
        {
          selector: '[role="dialog"] *',
          source: "Select resource(s)",
          text: "选择资源",
        },
        {
          selector: 'input[placeholder="Search models"]',
          attr: "placeholder",
          text: "搜索模型",
        },
      ],
    },
  });
})();
