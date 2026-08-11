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
        Status: "服务状态",
        "Known Issues": "已知问题",
        Education: "教育",
        Support: "支持",
      },
      selector: [
        {
          selector: 'a[href*="privacy" i]',
          source: "Privacy",
          text: "隐私政策",
        },
      ],
    },
  });
})();
