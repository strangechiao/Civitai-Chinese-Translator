(function () {
  "use strict";

  const CCT = window.CCT;
  const instanceKey = "__CCT_TRANSLATOR_RUNNING__";

  if (window[instanceKey]) return;
  window[instanceKey] = true;

  function injectStyle() {
    if (document.getElementById("cct-style")) return true;

    const target = document.head || document.documentElement;
    if (!target) return false;

    const style = document.createElement("style");
    style.id = "cct-style";
    style.textContent = CCT.styleText || "";
    target.appendChild(style);
    return true;
  }

  function start() {
    if (!injectStyle()) {
      requestAnimationFrame(start);
      return;
    }

    if (!document.body) {
      requestAnimationFrame(start);
      return;
    }

    CCT.applyAdBlocking && CCT.applyAdBlocking(document.body);
    CCT.injectLogo && CCT.injectLogo();
    CCT.injectOriginalDownloadButtons && CCT.injectOriginalDownloadButtons(document.body);
    CCT.injectModelSidebarToggle && CCT.injectModelSidebarToggle();
    CCT.injectModelVersionDropdown && CCT.injectModelVersionDropdown();
    CCT.createTranslator().start();
  }

  start();
})();
