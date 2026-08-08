(function () {
  "use strict";

  const CCT = window.CCT;

  function getPathname() {
    return window.location.pathname.replace(/\/+$/, "") || "/";
  }

  function getCurrentPage() {
    const pathname = getPathname();

    if (pathname === "/") return "home";
    if (/^\/models\/\d+/i.test(pathname)) return "modelDetail";
    if (/^\/images\/\d+/i.test(pathname)) return "imageDetail";
    if (/^\/user\/[^/]+/i.test(pathname)) return "userProfile";
    if (/^\/(?:buzz|buzz-dashboard|purchase\/buzz)/i.test(pathname)) return "buzz";
    if (/^\/generate/i.test(pathname)) return "generation";

    return "unknown";
  }

  CCT.getCurrentPage = getCurrentPage;
})();
