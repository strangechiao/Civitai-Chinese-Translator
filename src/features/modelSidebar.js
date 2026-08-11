(function () {
  "use strict";

  const CCT = window.CCT;
  const BUTTON_CLASS = "cct-model-spoiler-float-button";
  const STORAGE_KEY = "CCT_QUICK_COLLAPSE_ENABLED";
  let routeWatcherReady = false;

  function isQuickCollapseEnabled() {
    return localStorage.getItem(STORAGE_KEY) !== "false";
  }

  function setQuickCollapseEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, enabled ? "true" : "false");
    injectModelSidebarToggle();
  }

  function isModelDetailPage() {
    return CCT.getCurrentPage && CCT.getCurrentPage() === "models";
  }

  function getSpoilerControl() {
    const controls = Array.from(
      document.querySelectorAll('.mantine-Spoiler-root .mantine-Spoiler-control[aria-controls]')
    ).filter((button) => {
      if (button.classList.contains(BUTTON_CLASS)) return false;
      if (button.closest(".mantine-Accordion-panel")) return false;

      const region = document.getElementById(button.getAttribute("aria-controls"));
      return region && region.classList.contains("mantine-Spoiler-content");
    });

    return (
      controls.find((button) => button.closest('[class*="ModelVersionDetails"][class*="mainSection"]')) ||
      controls.find((button) => /^(show more|hide|显示更多|隐藏)$/i.test(button.textContent.trim())) ||
      controls[0]
    );
  }

  function getFloatingButtonGroup() {
    const scrollTopButton = document.querySelector('button[aria-label="Scroll to top"]');
    if (scrollTopButton && scrollTopButton.parentElement) return scrollTopButton.parentElement;

    const chatbotIcon = document.querySelector(".tabler-icon-message-chatbot");
    const chatbotButton = chatbotIcon && chatbotIcon.closest(".mantine-Button-root");
    return chatbotButton && chatbotButton.parentElement;
  }

  function iconSvg(name) {
    const icons = CCT.assets && CCT.assets.icons;
    const svg = icons && icons[name];
    if (!svg) return "";

    return svg
      .replace(/\sclass="[^"]*"/, "")
      .replace("<svg ", '<svg class="cct-model-spoiler-float-icon" aria-hidden="true" ');
  }

  function getExpanded(control) {
    return control && control.getAttribute("aria-expanded") === "true";
  }

  function syncButton(button) {
    const control = getSpoilerControl();
    const expanded = getExpanded(control);
    const state = control ? (expanded ? "expanded" : "collapsed") : "missing";
    if (button.dataset.cctState === state) return;

    const label = expanded ? "折叠" : "展开";
    const icon = expanded ? iconSvg("collapse") : iconSvg("expand");

    button.dataset.cctState = state;
    button.disabled = !control;
    button.dataset.expanded = expanded ? "true" : "false";
    button.setAttribute("aria-label", label);
    button.innerHTML = `
      <span class="cct-model-spoiler-float-inner">
        ${icon}
        <span>${control ? label : "未找到"}</span>
      </span>
    `;
  }

  function createButton() {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `${BUTTON_CLASS} cct-ignore`;

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const control = getSpoilerControl();
      if (!control) {
        syncButton(button);
        return;
      }

      control.click();
      window.setTimeout(() => syncButton(button), 80);
      window.setTimeout(() => syncButton(button), 260);
    });

    return button;
  }

  function scheduleRouteInject() {
    window.setTimeout(injectModelSidebarToggle, 0);
    window.setTimeout(injectModelSidebarToggle, 120);
    window.setTimeout(injectModelSidebarToggle, 360);
  }

  function bindRouteWatcher() {
    if (routeWatcherReady) return;
    routeWatcherReady = true;

    ["pushState", "replaceState"].forEach((method) => {
      const original = history[method];
      if (typeof original !== "function") return;

      history[method] = function () {
        const result = original.apply(this, arguments);
        scheduleRouteInject();
        return result;
      };
    });

    window.addEventListener("popstate", scheduleRouteInject);
  }

  function injectModelSidebarToggle() {
    bindRouteWatcher();

    if (!isQuickCollapseEnabled() || !isModelDetailPage()) {
      document.querySelectorAll(`.${BUTTON_CLASS}`).forEach((button) => button.remove());
      return;
    }

    const group = getFloatingButtonGroup();
    if (!group) return;

    let button = group.querySelector(`.${BUTTON_CLASS}`);
    if (!button) {
      button = createButton();
    }

    const scrollTopButton = group.querySelector('button[aria-label="Scroll to top"]');
    if (scrollTopButton && scrollTopButton.nextSibling) {
      if (button !== scrollTopButton.nextSibling) group.insertBefore(button, scrollTopButton.nextSibling);
    } else if (button.parentElement !== group) {
      group.appendChild(button);
    }

    syncButton(button);
  }

  CCT.injectModelSidebarToggle = injectModelSidebarToggle;
  CCT.isQuickCollapseEnabled = isQuickCollapseEnabled;
  CCT.setQuickCollapseEnabled = setQuickCollapseEnabled;
})();
