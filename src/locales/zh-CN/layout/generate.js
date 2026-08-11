(function () {
  "use strict";

  window.CCT.registerRules({
    type: "layout",
    name: "generate",
    component: "index",
    rules: {
      static: {
        // 挑战弹窗
        "Click here to see the full details, rules and prizes.": "点击此处查看完整详情、规则和奖励。",
        "by CivBot": "作者：CivBot",
        "Submit your Entry": "提交作品",
        "Accept Challenge": "接受挑战",

        // 预设菜单
        Presets: "预设",
        "View presets": "查看预设",
        "Save current values": "保存当前参数",
        "Manage presets": "管理预设",
        "Filter by ecosystem": "按生态系统筛选",
        "No presets match the selected filters.": "没有符合所选筛选条件的预设。",
        "Need help? Start the tour!": "需要帮助？开始引导！",

        // 生成队列与内容流
        Queue: "队列",
        Feed: "生成记录",
        "The queue is empty": "队列为空",
        "Try generating new images with our resources": "尝试使用我们的资源生成新图片",
        "Some new filtering options don't apply retroactively.": "部分新的筛选选项不会追溯应用于已有内容。",

        // 图片生成工作流
        "Create Image": "创建图片",
        "Generate an AI image from text": "根据文本生成 AI 图片",
        Draft: "草稿",
        "Fast generation for quick iterations": "快速生成，便于反复调整",
        "Create + Face Fix": "创建并修复面部",
        "Generate with automatic face correction": "使用自动面部修复生成图片",
        "Create + Hires Fix": "创建并高清修复",
        "Generate with upscaling for higher detail": "通过放大提升图片细节",
        "Image Variations": "生成相似图片",
        "Generate a variation of an existing image": "基于现有图片生成相似图片",
        "Image to Image": "图生图",
        "Generate or edit using reference images": "使用参考图片生成或编辑",
        "Image Face Fix": "图片面部修复",
        "Fix faces in an existing image": "修复现有图片中的面部",
        "Image Hires Fix": "图片高清修复",
        "Hires fix from an existing image": "对现有图片进行高清修复",
        Upscale: "放大",
        "Increase image resolution": "提高图片分辨率",
        "Remove Background": "移除背景",
        "Remove the background from an image": "移除图片背景",
        "Control Preprocessor": "ControlNet 预处理器",
        "Run a ControlNet preprocessor on an image (canny, openpose, depth, etc.)":
          "对图片运行 ControlNet 预处理器（canny、openpose、depth 等）",
        "Extract Metadata": "提取元数据",
        "Extract generation parameters from an image": "从图片中提取生成参数",

        // 视频、音乐与 3D 生成工作流
        "Create Video": "创建视频",
        "Generate video from text": "文生视频",
        "Image to Video": "图生视频",
        "Generate video from an image": "从图片生成视频",
        "First/Last Frame": "首尾帧",
        "Generate video from start and end images": "根据起始帧和结束帧生成视频",
        "Reference to Video": "参考图生视频",
        "Generate video using a reference image": "使用参考图片生成视频",
        "Increase video resolution": "提高视频分辨率",
        Interpolate: "插帧",
        "Smooth video by adding frames": "通过补帧使视频更流畅",
        "Edit Video": "编辑视频",
        "Edit a video with AI": "使用 AI 编辑视频",
        "Create Music": "创作音乐",
        "Generate music from text description and lyrics": "根据文本描述和歌词生成音乐",
        "Create 3D Model": "创建 3D 模型",
        "Generate a 3D model from a text prompt (PolyGen via Meshy)":
          "根据文本提示词生成 3D 模型（PolyGen via Meshy）",
        "Generate a 3D model from a source image (Meshy, Tripo, or Hunyuan3D)":
          "根据源图片生成 3D 模型（Meshy、Tripo 或 Hunyuan3D）",

        // 图片生成参数
        "Text to Image": "文生图",
        Model: "模型",
        "Models are the resources you're generating with. Using a different base model can drastically alter the style and composition of images, while adding additional resources can change the characters, concepts and objects.":
          "模型是生成时使用的核心资源。更换基础模型会显著改变图片的风格和构图，添加附加资源则可以改变角色、概念和物体。",
        "Additional Resources": "附加资源",
        Add: "添加",
        "No resources selected": "未选择资源",
        Enhance: "优化",
        "Type out what you'd like to generate in the prompt, add aspects you'd like to avoid in the negative prompt.":
          "在提示词中描述你想生成的内容，并在负面提示词中添加需要避免的元素。",
        "Aspect Ratio": "宽高比",
        "Output Settings": "输出设置",
        Standard: "标准",

        // 高级参数
        Advanced: "高级",
        "CFG Scale": "CFG 强度",
        Creative: "创意",
        Balanced: "平衡",
        Precise: "精准",
        Sampler: "采样器",
        Fast: "快速",
        Popular: "热门",
        Steps: "步数",
        High: "高",
        Seed: "种子",
        Random: "随机",
        Custom: "自定义",
        "CLIP Skip": "CLIP 跳过层数",
        "Select VAE": "选择 VAE",
        "Enhanced Compatibility": "增强兼容性",
        "We've updated our generation engine for better performance, but older prompts may look different. Turn this on to make new generations look more like your originals.":
          "我们更新了生成引擎以提升性能，但旧提示词的生成效果可能有所不同。开启此项可让新生成结果更接近原有效果。",
        ControlNets: "ControlNet",
        "Steer generation using a reference image. Add up to four control signals.":
          "使用参考图片引导生成，最多可添加四个控制信号。",
        "Add ControlNet": "添加 ControlNet",
        Breakdown: "明细",
        QTY: "数量",
        "Controls how closely the generation follows the text prompt.": "控制生成结果遵循文本提示词的程度。",
        "Each will produce a slightly (or significantly) different result.": "每个结果都会略有（或显著）不同。",
        "These provide additional color and detail improvements.": "这些资源可以进一步改善色彩和细节。",
        "Output Format": "输出格式",
        "Request Priority": "请求优先级",
        Highest: "最高",

        // 生成费用
        "Blue Buzz can't generate mature content without a membership": "未开通会员时，Blue Buzz 无法生成成人内容",
        "Pay with": "支付方式",
        "Generation Cost Breakdown": "生成费用明细",
        "BASE COST": "基础费用",
        "Base Cost": "基础费用",
        TIPS: "打赏",
        "Creator Tip": "创作者打赏",
        "Civitai Tip": "Civitai 打赏",
        Total: "合计",

        // 生成结果与详情
        "Creations are kept in the Generator for 30 days. Download or Post them to your Profile to save them!":
          "生成内容会在生成器中保留 30 天。请下载或发布到个人资料中进行保存！",
        "Show more": "显示更多",
        "Additional Details": "附加详情",
        Workflow: "工作流",
        "Output format": "输出格式",
        Ecosystem: "生态系统",
        Quantity: "数量",
        "Generate with this resource": "使用此资源生成",
        "User Buzz Update": "用户 Buzz 更新",
        "Copy Workflow ID": "复制工作流 ID",
        "Buzz Transactions": "Buzz 交易记录",

        // 生成记录筛选
        Interactions: "互动",
        Favorited: "已收藏",
        Liked: "已点赞",
        Disliked: "已点踩",
        "Generation Type": "生成类型",
        Audio: "音频",
        "All Models": "所有模型",
        "All Workflows": "所有工作流",
        "Date Range": "日期范围",
        From: "起始",
        To: "截止",
        "Start date": "开始日期",
        "End date": "结束日期",
        "Hide Failed": "隐藏失败任务",
        "Delete selected": "删除所选项",
        "Apply workflow to selected": "将工作流应用到所选项",
        "Post your generations to earn Buzz!": "发布你的生成作品以赚取 Buzz！",
        "Copy Generation Data": "复制生成数据",
        "Open in New Tab": "在新标签页中打开",

        // 新手引导
        "Getting Started with Content Generation": "内容生成入门",
        "Welcome to the content generation tool! This tour will guide you through the process.":
          "欢迎使用内容生成工具！本引导将带你了解完整的操作流程。",
        Skip: "跳过",
        Next: "下一步",
        Back: "返回",
        Done: "完成",
        "Accept the Terms": "接受条款",
        "Before generating content, you must accept the terms of service.": "生成内容前，你必须接受服务条款。",
        "Image Generation Terms": "图片生成条款",
        "By using the image generator you confirm that you have read and agree to our":
          "使用图片生成器即表示你确认已阅读并同意入门流程中展示的",
        "presented during onboarding. Failure to abide by our": "。如不遵守我们的",
        "will result in the loss of your access to the image generator. Illegal or exploitative content will be removed and reported.":
          "，你将失去图片生成器的使用权限。违法或剥削性内容将被删除并举报。",
        "I Confirm, Start Generating": "我已确认，开始生成",
        "Start Here": "从这里开始",
        "Looks like you are remixing an image. You can modify the prompt here to generate an image based on the remix.":
          "你似乎正在对图片进行 Remix。你可以在这里修改提示词，基于该 Remix 生成图片。",
        "Submit Your Prompt": "提交提示词",
        "You can submit your prompt by clicking this button and see the magic happen!":
          "点击此按钮即可提交提示词，见证奇妙效果！",
        "Your Generation Queue": "你的生成队列",
        "This is where your generated media is stored, along with all the generation details.":
          "你生成的媒体及其全部生成详情都会保存在这里。",
        "Your Generation Feed": "你的生成记录",
        "View all your generated media here in a single scrollable view.":
          "在这个可滚动视图中集中查看你生成的全部媒体。",

        // 成人内容限制提示
        "Blue Buzz can't generate mature content": "Blue Buzz 无法生成成人内容",
        "Your generation will be blocked if it produces mature results. Blue Buzz is limited to safe-for-work content only.":
          "如果生成结果包含成人内容，本次生成将被阻止。Blue Buzz 仅限生成非成人内容。",
        "Unlock mature content with a membership": "开通会员以解锁成人内容",
        "Members can generate mature content on Civitai.red. Your membership from Civitai.com carries over automatically.":
          "会员可在 Civitai.red 生成成人内容。你在 Civitai.com 的会员资格会自动同步。",
        "Become a member": "成为会员",
        "Continue anyway": "仍然继续",
      },
      regexp: [
        {
          pattern: /^(\d+) of (\d+)$/i,
          replace: "第 $1 步，共 $2 步",
        },
        {
          pattern: /^ends on (.+)$/i,
          replace: "结束时间：$1",
        },
        {
          pattern: /^join the fun and create your masterpiece with (.+)!$/i,
          replace: "加入挑战，使用 $1 创作你的杰作！",
        },
        {
          pattern: /^claim (\d+) buzz$/i,
          replace: "领取 $1 Buzz",
        },
        {
          pattern: /^(\d+)\/(\d+) slots?$/i,
          replace: "$1/$2 个槽位",
        },
        {
          pattern: /^(\d+) jobs? in queue$/i,
          replace: "队列中有 $1 个任务",
        },
        {
          pattern: /^your position in queue:\s*(\d+)$/i,
          replace: "队列位置：$1",
        },
        {
          pattern: /^estimated start time:\s*(.+)$/i,
          replace: "预计开始时间：$1",
        },
        {
          pattern: /^([\d,]+) buzz has been added to your buzz account$/i,
          replace: "$1 Buzz 已添加到你的 Buzz 账户",
        },
        {
          pattern: /^(\d+) selected$/i,
          replace: "已选择 $1 项",
        },
      ],
      selector: [
        {
          selector: "button",
          textSelector: ".mantine-Button-label",
          source: "Post",
          text: "发布",
        },
        {
          selector: "button",
          source: "Post",
          text: "发布",
        },
      ],
    },
  });
})();
