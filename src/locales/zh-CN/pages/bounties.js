(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "bounties",
    component: "index",
    rules: {
      static: {
        // 排序方式
        "Highest Bounty": "悬赏最高",
        "Most Contributors": "贡献者最多",
        "Most Tracked": "追踪最多",

        // 悬赏筛选
        "Bounty type": "悬赏类型",
        "Model Creation": "模型制作",
        "Lora Creation": "LoRA 制作",
        "Embed Creation": "嵌入模型制作",
        "Data Set Creation": "数据集制作",
        "Data Set Caption": "数据集标注",
        "Image Creation": "图片创作",
        "Video Creation": "视频创作",
        "Bounty status": "悬赏状态",
        Open: "进行中",
        Expired: "已过期",
        Awarded: "已颁奖",

        // 悬赏举报
        "Report bounty": "举报悬赏",

        // 创建悬赏
        "What are bounties?": "什么是悬赏？",
        "Use bounties to make requests of the community. For example you could request a custom model, a curated data set, or even just some cool pictures in styles you're not able to replicate, then offer compensation to the people who helped you.":
          "你可以通过悬赏向社区发布需求。例如，请人定制模型、整理数据集，或创作一些你无法复现其风格的精彩图像，并向帮助你的人提供报酬。",
        "Create a new bounty": "创建新悬赏",
        "How to Create a Bounty": "如何创建悬赏",
        Properties: "属性",
        "For example: Tom Cruise or Tom Cruise as Maverick": "例如：汤姆·克鲁斯本人，或汤姆·克鲁斯饰演的“独行侠”",
        "Is intended to produce sexual themes": "旨在生成色情主题内容",
        "The creation of bounties intended to depict an actual person is prohibited. Please revise the content of this listing to ensure no actual person is depicted out of respect for the individual.":
          "禁止创建旨在描绘真实人物的悬赏。出于对当事人的尊重，请修改此悬赏内容，确保其中不涉及任何真实人物。",

        // 悬赏内容与示例
        Type: "类型",
        "About your bounty": "悬赏说明",
        "What kind of entries are you looking for? Why did you make this? What's it for? Examples of the best case and worst case outputs from bounty entries":
          "你希望收到什么样的投稿？为什么发起这项悬赏？它将用于什么用途？请提供理想结果和不理想结果的示例。",
        "Example Images": "示例图片",
        "Please add at least 1 reference image to your bounty. This will serve as a reference point for Hunters and will also be used as your cover image.":
          "请至少为悬赏添加 1 张参考图片。该图片将供参与者参考，并用作悬赏封面。",
        "Drag & drop images here or click to browse": "将图片拖到这里，或点击浏览文件",
        "Attach up to 10 files": "最多可添加 10 个文件",
        "Accepted file types: .png, .jpeg, .webp, .mp4, .webm": "支持的文件类型：.png、.jpeg、.webp、.mp4、.webm",
        "Images cannot exceed 50 MB": "图片不得超过 50 MB",
        "Videos cannot exceed 750 MB, 4K resolution, or 245 seconds in duration":
          "视频不得超过 750 MB、4K 分辨率或 245 秒时长",
        "Not sure which type to choose? Learn more about bounties and their types by reading our":
          "不确定该选择哪种类型？请阅读我们的指南，进一步了解悬赏及其类型：",
        "Bounty Guide.": "悬赏指南",

        // 期限、奖励与附件
        Deadline: "截止日期",
        "Bounty rewards": "悬赏奖励",
        "Learn more about the rewards and Buzz system": "进一步了解奖励与 Buzz 系统：",
        "Bounty Amount": "悬赏金额",
        "Max entries per hunter": "每位参与者最多提交数",
        "Additional information": "附加信息",
        "If uploading a data set to your bounty you attest that the Images contained within adhere to our":
          "如果向悬赏上传数据集，即表示你确认其中包含的图片符合我们的",
        TOS: "服务条款",
        "Drop your files or click to select": "将文件拖到这里，或点击选择",
        "Attach up to 10 files. Each file should not exceed 100 MB. Accepted file types: .pdf, .zip, .json, .yaml, .yml, .txt":
          "最多可添加 10 个文件，每个文件不得超过 100 MB。支持的文件类型：.pdf、.zip、.json、.yaml、.yml、.txt",
        "Discard Changes": "放弃更改",
      },
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Bounties",
          text: "悬赏",
        },
      ],
    },
  });
})();
