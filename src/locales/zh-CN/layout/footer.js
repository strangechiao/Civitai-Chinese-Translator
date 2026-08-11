(function () {
  "use strict";

  window.CCT.registerRules({
    type: "layout",
    name: "footer",
    component: "index",
    rules: {
      static: {
        "Terms of Service": "服务条款",
        Safety: "安全",
        API: "API",
        "Known Issues": "已知问题",
        Education: "教育",
        Support: "支持",
      },
      selector: [
        {
          selector: 'a[href*="status.civitai" i], a[href*="/status" i]',
          source: "Status",
          text: "服务状态",
        },
        {
          selector: 'a[href*="privacy" i]',
          source: "Privacy",
          text: "隐私政策",
        },
      ],
    },
  });
})();
