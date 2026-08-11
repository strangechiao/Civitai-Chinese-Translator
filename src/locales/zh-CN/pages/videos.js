(function () {
  "use strict";

  window.CCT.registerRules({
    type: "page",
    name: "videos",
    component: "index",
    rules: {
      static: {},
      selectValue: [
        {
          selector: 'input[readonly][aria-label="Search category"]',
          value: "Videos",
          text: "视频",
        },
      ],
    },
  });
})();
