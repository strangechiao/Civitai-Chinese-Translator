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
    {
      pattern: /^get (blue|蓝色|yellow|黄色|green|绿色) buzz$/i,
      replace(match, colorName) {
        const colors = {
          blue: "蓝色",
          蓝色: "蓝色",
          yellow: "黄色",
          黄色: "黄色",
          green: "绿色",
          绿色: "绿色",
        };

        return `获取${colors[colorName]} Buzz`;
      },
    },
    {
      pattern: /^multiple ways to get (blue|蓝色|yellow|黄色|green|绿色) buzz and power your creativity$/i,
      replace(match, colorName) {
        const colors = {
          blue: "蓝色",
          蓝色: "蓝色",
          yellow: "黄色",
          黄色: "黄色",
          green: "绿色",
          绿色: "绿色",
        };

        return `通过多种方式获取${colors[colorName]} Buzz，助力你的创作`;
      },
    },
    {
      pattern: /^your ([\d,.]+[km]?) could be worth \$([\d,.]+)!?$/i,
      replace(match, buzzAmount, cashAmount) {
        return `你的 ${buzzAmount} Buzz 可能价值 $${cashAmount}！`;
      },
    },
    {
      pattern: /^your current creator score is ([\d,.]+[km]?)\.?$/i,
      replace: "你当前的创作者评分是 $1。",
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























