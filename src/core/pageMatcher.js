(function () {
  "use strict";

  const CCT = window.CCT;

  function getPathname() {
    return window.location.pathname.replace(/\/+$/, "") || "/";
  }

  function getCurrentPage() {
    const pathname = getPathname();

    if (pathname === "/") return "home";
    if (/^\/models(?:\/|$)/i.test(pathname)) return "models";
    if (/^\/images(?:\/|$)/i.test(pathname)) return "images";
    if (/^\/videos(?:\/|$)/i.test(pathname)) return "videos";
    if (/^\/3d-models(?:\/|$)/i.test(pathname)) return "3d-models";
    if (/^\/articles(?:\/|$)/i.test(pathname)) return "articles";
    if (/^\/comics(?:\/|$)/i.test(pathname)) return "comics";
    if (/^\/bounties(?:\/|$)/i.test(pathname)) return "bounties";
    if (/^\/challenges(?:\/|$)/i.test(pathname)) return "challenges";
    if (/^\/changelog(?:\/|$)/i.test(pathname)) return "changelog";
    if (/^\/shop(?:\/|$)/i.test(pathname)) return "shop";
    if (/^\/posts(?:\/|$)/i.test(pathname)) return "posts";
    if (/^\/user\/[^/]+/i.test(pathname)) return "user";
    if (/^\/(?:buzz|buzz-dashboard|purchase\/buzz)/i.test(pathname)) return "buzz";
    if (/^\/generate(?:\/|$)/i.test(pathname)) return "generate";

    return "unknown";
  }

  CCT.getCurrentPage = getCurrentPage;
})();
