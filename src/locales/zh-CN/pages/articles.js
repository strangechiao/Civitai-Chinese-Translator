(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "articles",
    component: "index",
    rules: {
      static: {
        // 文章分类
        Story: "故事",
        Musing: "随想",
        Workflows: "工作流",
        "Generation Guide": "生成指南",
        News: "新闻",
        "Tool Guide": "工具指南",
        "Training Guide": "训练指南",
        "Resource Guide": "资源指南",
        "Comparative Study": "对比研究",
        "Data Prep": "数据准备",
        "Video Generation Guide": "视频生成指南",
        "ML Research": "机器学习研究",

        // 排序方式
        "Most Bookmarks": "收藏最多",
        "Recently Updated": "最近更新",

        // 文章卡片操作菜单
        "Report article": "举报文章",

        // 创建文章
        "Create an Article": "创建文章",
        "How to Write Articles": "如何撰写文章",
        "Save Draft": "保存草稿",
        "Your article is currently": "你的文章当前处于",
        "Categories determine what kind of article you're making. Selecting a category that's the closest match to your subject helps users find your article":
          "分类用于确定文章的内容类型。选择最贴近文章主题的分类，有助于用户找到你的文章。",
        "e.g.: How to create your own LoRA": "例如：如何创建自己的 LoRA",
        Content: "内容",
        "Click the publish button to make your article public to share with the Civitai community for comments and reactions.":
          "点击发布按钮公开文章，与 Civitai 社区分享并接收评论和互动。",
        "Maturity Level": "内容分级",
        "Your preferred rating. The final rating is the max of your choice, cover and content images, text moderation, and any actioned NSFW reports. Updates automatically when those signals change.":
          "你选择的分级仅作为偏好。最终分级将采用所选等级、封面与正文图片分级、文本审核结果以及已处理 NSFW 举报中的最高等级，并在相关信号变化时自动更新。",

        // 内容分级指南
        "Browsing Level Guide": "浏览分级指南",
        "Sexual Acts, masturbation, ejaculation, cum, vore, anal gape, extremely disturbing content":
          "性行为、自慰、射精、精液、吞食癖、肛门扩张或极度令人不适的内容",

        // 内容分级标签
        "WEAPON VIOLENCE": "武器暴力",
        "WIDE HIPS": "宽臀",
        "REVEALING CLOTHES": "暴露服装",
        DOWNBLOUSE: "低领走光",
        "CONVENIENT CENSORING": "巧妙遮挡",
        CORPSES: "尸体",
        SUGGESTIVE: "性暗示",
        "ORAL INVITATION": "口交暗示",
        PG13: "PG-13",
        SEXY: "性感",
        "HUGE BREASTS": "巨乳",
        "THICK THIGHS": "粗壮大腿",
        "SEXUAL SITUATIONS": "性暗示情境",
        "MALE NUDITY": "男性裸露",
        "OFFENSIVE CONTENT": "令人不适的内容",
        "MALE SWIMWEAR OR UNDERWEAR": "男性泳装或内衣",
        "FEMALE SWIMWEAR OR UNDERWEAR": "女性泳装或内衣",
        "PARTIAL NUDITY": "部分裸露",
        UNDRESSED: "未着装",
        "FEMALE NUDITY": "女性裸露",
        "BREASTS OUT": "乳房裸露",
        "EXPOSED FEMALE NIPPLE": "女性乳头裸露",
        "BREAST OUT": "单侧乳房裸露",
        LINGERIE: "女式内衣",
        "MALE UNDERWEAR": "男性内衣",
        "HAIR OVER BREASTS": "头发遮胸",
        "FEMALE SWIMWEAR": "女性泳装",
        "GIGANTIC BREASTS": "超大乳房",
        "NO PANTIES": "未穿内裤",
        "GRAPHIC VIOLENCE OR GORE": "血腥暴力",
        "COVERED NIPPLES": "遮挡乳头",
        "HUGE BUTT": "巨臀",
        "STRAPLESS LEOTARD": "无肩带紧身衣",
        "SITTING ON FACE": "坐脸",
        "EMACIATED BODIES": "极度消瘦的人体",
        "ONE BREAST OUT": "单侧乳房裸露",
        "FEMALE UNDERWEAR": "女性内衣",
        NUDE: "裸体",
        "GRAPHIC MALE NUDITY": "露骨男性裸露",
        "ADULT TOYS": "成人玩具",
        "ILLUSTRATED EXPLICIT NUDITY": "插画露骨裸露",
        "EXPLICIT NUDITY": "露骨裸露",
        "GRAPHIC FEMALE NUDITY": "露骨女性裸露",
        HENTAI: "色情动漫",
        FUTANARI: "扶他",
        PORN: "色情内容",
        "SEXUAL INTENT": "性意图",
        GENITALS: "生殖器",
        VORE: "吞食癖",
        SEX: "性行为",
        ORAL: "口交",
        "SEXUAL ACTIVITY": "性活动",
        ANAL: "肛交",
        BLOWJOB: "口交",
        "DILDO RIDING": "骑乘假阳具",
        CUM: "精液",

        // 封面与附件
        "Cover Image": "封面图片",
        "Suggested resolution: 850 x 400": "建议分辨率：850 × 400",
        "Drop your files or click to select": "将文件拖到这里，或点击选择",
        "Attach up to 10 files. Each file should not exceed 30 MB. Accepted file types: .pdf, .zip, .json, .yaml, .yml, .txt, .md, .py":
          "最多可添加 10 个文件，每个文件不得超过 30 MB。支持的文件类型：.pdf、.zip、.json、.yaml、.yml、.txt、.md、.py",
      },
      regexp: [
        {
          pattern: /^attach up to 10 files\. each file should not exceed 30 mb\. accepted file types:\s*(.+)$/i,
          replace: (match) => `最多可添加 10 个文件，每个文件不得超过 30 MB。支持的文件类型：${match[1]}`,
        },
      ],
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Articles",
          text: "文章",
        },
      ],
    },
  });
})();
