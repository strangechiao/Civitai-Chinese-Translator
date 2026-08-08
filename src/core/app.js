(function () {
  "use strict";

  const CCT = window.CCT;
  const instanceKey = "__CCT_TRANSLATOR_RUNNING__";

  if (window[instanceKey]) return;
  window[instanceKey] = true;

  function injectStyle() {
    if (document.getElementById("cct-style")) return;

    const style = document.createElement("style");
    style.id = "cct-style";
    style.textContent = CCT.styleText || "";
    document.head.appendChild(style);
  }

  function start() {
    if (!document.body) {
      requestAnimationFrame(start);
      return;
    }

    injectStyle();
    CCT.injectLogo && CCT.injectLogo();
    CCT.injectOriginalDownloadButtons && CCT.injectOriginalDownloadButtons(document.body);
    CCT.injectModelSidebarToggle && CCT.injectModelSidebarToggle();
    CCT.createTranslator().start();
  }

  start();
})();
