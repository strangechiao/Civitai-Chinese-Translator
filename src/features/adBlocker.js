(function () {
  "use strict";

  const CCT = window.CCT;
  const STORAGE_KEY = "CCT_AD_BLOCKING_ENABLED";
  const LAYOUT_STORAGE_KEY = "CCT_AD_LAYOUT_CENTERED_ENABLED";
  const HIDDEN_CLASS = "cct-hidden-ad";
  const AD_SELECTOR = [
    'a[href^="https://advertising.civitai.com/api/v1/engagement"]',
    'a[aria-label="visit advertiser"][href*="advertising.civitai.com"]',
    'img[alt="advertisement"]',
  ].join(",");

  function isAdBlockingEnabled() {
    return localStorage.getItem(STORAGE_KEY) !== "false";
  }

  function isAdLayoutCenteredEnabled() {
    return localStorage.getItem(LAYOUT_STORAGE_KEY) !== "false";
  }

  function signalNativeAdBlocking() {
    if (!location.hostname.endsWith("civitai.com") || !isAdBlockingEnabled()) return;

    const pageWindow = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
    const pageNavigator = pageWindow.navigator;
    if (pageNavigator.brave && typeof pageNavigator.brave.isBrave === "function") return;

    try {
      Object.defineProperty(pageNavigator, "brave", {
        configurable: true,
        value: {
          isBrave: () => Promise.resolve(true),
        },
      });
    } catch {
      // The DOM fallback rules still work when the page navigator cannot be extended.
    }
  }

  function syncAdBlockingState() {
    if (!document.documentElement) return false;
    const isUserPage = /^\/user(?:\/|$)/i.test(location.pathname);
    document.documentElement.classList.toggle("cct-site-red", location.hostname.endsWith("civitai.red"));
    document.documentElement.classList.toggle("cct-site-com", location.hostname.endsWith("civitai.com"));
    document.documentElement.classList.toggle("cct-page-user", isUserPage);
    document.documentElement.classList.toggle("cct-ad-blocking-enabled", isAdBlockingEnabled());
    document.documentElement.classList.toggle("cct-ad-layout-centered", isAdLayoutCenteredEnabled());
    return true;
  }

  function findAdSlot(element) {
    let current = element;

    while (current && current !== document.body) {
      if (current.classList.contains("box-content")) return current;
      current = current.parentElement;
    }

    return null;
  }

  function hasDirectCloseButton(element) {
    return Array.from(element.children).some((child) => child.matches && child.matches("button"));
  }

  function isAdRail(element) {
    return typeof element.className === "string" && element.className.includes("__rail");
  }

  function isVirtualizedAdItem(element) {
    return element.style.position === "absolute" && element.style.contentVisibility === "auto";
  }

  function findAdContainer(element) {
    const slot = findAdSlot(element);
    if (!slot) return null;

    let current = slot;
    let depth = 0;

    while (current && current !== document.body && depth < 4) {
      if (current !== slot && hasDirectCloseButton(current)) return current;
      if (isAdRail(current)) return current;
      if (isVirtualizedAdItem(current)) return current;
      current = current.parentElement;
      depth += 1;
    }

    return slot;
  }

  function findAdElements(root) {
    const elements = [];
    if (root instanceof Element && root.matches(AD_SELECTOR)) elements.push(root);
    if (root && root.querySelectorAll) elements.push(...root.querySelectorAll(AD_SELECTOR));
    return elements;
  }

  function applyAdBlocking(root = document.body) {
    syncAdBlockingState();
    if (!document.body) return;

    if (!isAdBlockingEnabled()) {
      document.querySelectorAll(`.${HIDDEN_CLASS}`).forEach((element) => element.classList.remove(HIDDEN_CLASS));
      return;
    }

    findAdElements(root).forEach((element) => {
      const container = findAdContainer(element);
      if (container) container.classList.add(HIDDEN_CLASS);
    });
  }

  function setAdBlockingEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, String(Boolean(enabled)));
    syncAdBlockingState();
    if (location.hostname.endsWith("civitai.com")) {
      location.reload();
      return;
    }
    applyAdBlocking(document.body);
  }

  function setAdLayoutCenteredEnabled(enabled) {
    localStorage.setItem(LAYOUT_STORAGE_KEY, String(Boolean(enabled)));
    syncAdBlockingState();
  }

  signalNativeAdBlocking();
  if (!syncAdBlockingState()) requestAnimationFrame(syncAdBlockingState);

  CCT.isAdBlockingEnabled = isAdBlockingEnabled;
  CCT.setAdBlockingEnabled = setAdBlockingEnabled;
  CCT.isAdLayoutCenteredEnabled = isAdLayoutCenteredEnabled;
  CCT.setAdLayoutCenteredEnabled = setAdLayoutCenteredEnabled;
  CCT.applyAdBlocking = applyAdBlocking;
})();
