(function () {
  "use strict";

  const CCT = window.CCT;
  const MENU_ID = "cct-logo-menu";
  let menuListenersReady = false;

  function getProductName() {
    return "CCT 中文增强插件";
  }

  function getNavbarLogoGroup() {
    const homeLink =
      document.querySelector('a[aria-label="Civitai home"]') ||
      document.querySelector('a[aria-label*="Civitai" i][href="/"]') ||
      document.querySelector('a[href="/"] svg[class*="Logo-module"]')?.closest("a");
    if (!homeLink) return null;

    return homeLink.closest(".flex.items-center.gap-2\\.5") || homeLink.closest(".flex.items-center") || null;
  }

  function getSupportButton() {
    const logoGroup = getNavbarLogoGroup();
    if (!logoGroup) return null;

    return (
      logoGroup.querySelector('a[href="/purchase/buzz"], a[href*="/purchase/buzz"]') ||
      Array.from(logoGroup.querySelectorAll("a, button")).find((element) => element.textContent.trim() === "Pro") ||
      null
    );
  }

  function getLogoTarget() {
    const logoGroup = getNavbarLogoGroup();
    const supportButton = getSupportButton();
    if (logoGroup && supportButton && logoGroup.contains(supportButton)) {
      return {
        container: logoGroup,
        reference: supportButton,
        mode: "after",
        sizeElement: supportButton,
      };
    }

    return null;
  }

  function placeLogo(root, target) {
    if (target.mode === "after") {
      if (root.parentElement === target.container && root.previousElementSibling === target.reference) return;

      target.container.insertBefore(root, target.reference.nextSibling);
      return;
    }

    if (root.parentElement === target.container && root.nextElementSibling === target.reference) return;

    target.container.insertBefore(root, target.reference);
  }

  function syncLogoSize(root, sizeElement) {
    const height = Math.round(sizeElement.getBoundingClientRect().height);
    if (height > 0) {
      root.style.setProperty("--cct-logo-height", `${height}px`);
    }
  }

  function iconSvg(name) {
    const icons = CCT.assets && CCT.assets.icons;
    const svg =
      (icons && icons[name]) ||
      (name === "modelVersionSwitch"
        ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>'
        : name === "translation"
          ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>'
        : "");
    const className = name === "external" ? "cct-logo-menu-external" : "cct-logo-menu-icon";
    if (!svg) return "";

    return svg
      .replace(/\sclass="[^"]*"/, "")
      .replace("<svg ", `<svg class="${className}" aria-hidden="true" `);
  }

  function updateOriginalDownloadToggle(menu) {
    const toggle = menu.querySelector(".cct-original-download-toggle");
    if (!toggle) return;

    const enabled = CCT.isOriginalDownloadEnabled && CCT.isOriginalDownloadEnabled();
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
  }

  function updateTranslationToggle(menu) {
    const toggle = menu.querySelector(".cct-translation-toggle");
    if (!toggle) return;

    const enabled = !CCT.isTranslationEnabled || CCT.isTranslationEnabled();
    const label = toggle.querySelector(".cct-translation-toggle-label");
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
    if (label) label.textContent = enabled ? "关闭汉化" : "开启汉化";
  }

  function updateQuickCollapseToggle(menu) {
    const toggle = menu.querySelector(".cct-quick-collapse-toggle");
    if (!toggle) return;

    const enabled = !CCT.isQuickCollapseEnabled || CCT.isQuickCollapseEnabled();
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
  }

  function updateModelVersionSwitchToggle(menu) {
    const toggle = menu.querySelector(".cct-model-version-switch-toggle");
    if (!toggle) return;

    const enabled = !CCT.isModelVersionSwitchEnabled || CCT.isModelVersionSwitchEnabled();
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
  }

  function updateAdBlockingToggle(menu) {
    const toggle = menu.querySelector(".cct-ad-blocking-toggle");
    if (!toggle) return;

    const enabled = !CCT.isAdBlockingEnabled || CCT.isAdBlockingEnabled();
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
  }

  function updateAdLayoutCenteredToggle(menu) {
    const toggle = menu.querySelector(".cct-ad-layout-centered-toggle");
    if (!toggle) return;

    const enabled = !CCT.isAdLayoutCenteredEnabled || CCT.isAdLayoutCenteredEnabled();
    toggle.dataset.checked = enabled ? "true" : "false";
    toggle.setAttribute("aria-checked", String(enabled));
  }

  function bindTooltip(menu) {
    const helps = Array.from(menu.querySelectorAll(".cct-logo-menu-help"));
    if (!helps.length) return;

    helps.forEach((help) => {
      const item = help.closest(".cct-logo-menu-toggle");
      const tooltip = item && item.querySelector(".cct-logo-menu-tooltip");
      if (!tooltip) return;

      let timer = null;

      function showLater(event) {
        event.stopPropagation();
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
          tooltip.dataset.open = "true";
        }, 500);
      }

      function hide(event) {
        event.stopPropagation();
        window.clearTimeout(timer);
        tooltip.dataset.open = "false";
      }

      help.addEventListener("mouseenter", showLater);
      help.addEventListener("focus", showLater);
      help.addEventListener("mouseleave", hide);
      help.addEventListener("blur", hide);
      help.addEventListener("click", (event) => event.stopPropagation());
    });
  }

  function compareVersions(a, b) {
    const left = String(a || "0").split(".").map((part) => Number.parseInt(part, 10) || 0);
    const right = String(b || "0").split(".").map((part) => Number.parseInt(part, 10) || 0);
    const length = Math.max(left.length, right.length);

    for (let index = 0; index < length; index += 1) {
      const diff = (left[index] || 0) - (right[index] || 0);
      if (diff !== 0) return diff;
    }

    return 0;
  }

  function setUpdateStatus(root, text, state) {
    const button = getMenu(root).querySelector(".cct-logo-menu-check");
    if (!button) return;

    button.textContent = text;
    button.dataset.state = state || "idle";
  }

  function setUpdateButton(root, text, mode) {
    const button = getMenu(root).querySelector(".cct-logo-menu-check");
    if (!button) return;

    button.textContent = text;
    button.dataset.mode = mode || "check";
  }

  async function fetchLatestVersion() {
    const updateUrl = CCT.meta && CCT.meta.updateUrl;
    if (!updateUrl) throw new Error("Missing update URL");

    const url = `${updateUrl}${updateUrl.includes("?") ? "&" : "?"}t=${Date.now()}`;
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Update check failed: ${response.status}`);

    const source = await response.text();
    const match = source.match(/\/\/\s*@version\s+([^\s]+)/);
    if (!match) throw new Error("Version not found");

    return match[1];
  }

  async function checkForUpdates(root) {
    const button = getMenu(root).querySelector(".cct-logo-menu-check");
    if (!button || button.dataset.loading === "true") return;

    const currentVersion = (CCT.meta && CCT.meta.version) || "0.0.0";

    if (button.dataset.mode === "open") {
      window.open(CCT.meta.updateUrl, "_blank", "noopener,noreferrer");
      return;
    }

    button.dataset.loading = "true";
    button.disabled = true;
    setUpdateStatus(root, "正在检查...", "loading");

    try {
      const latestVersion = await fetchLatestVersion();
      if (compareVersions(latestVersion, currentVersion) > 0) {
        setUpdateButton(root, `立即更新 v${latestVersion}`, "open");
        setUpdateStatus(root, `立即更新 v${latestVersion}`, "available");
        return;
      }

      setUpdateStatus(root, "已是最新版本", "latest");
    } catch (error) {
      setUpdateStatus(root, "检查失败", "error");
    } finally {
      button.dataset.loading = "false";
      button.disabled = false;
    }
  }

  function setMenuOpen(root, open) {
    const button = root.querySelector(".cct-logo-button");
    const menu = getMenu(root);
    if (!button || !menu) return;

    button.setAttribute("aria-expanded", String(open));
    clearTimeout(menu._cctCloseTimer);

    if (open) {
      positionMenu(root, menu);
      menu.hidden = false;
      requestAnimationFrame(() => {
        menu.dataset.open = "true";
      });
      return;
    }

    menu.dataset.open = "false";
    menu._cctCloseTimer = setTimeout(() => {
      if (menu.dataset.open !== "true") menu.hidden = true;
    }, 180);
  }

  function toggleMenu(root) {
    const menu = getMenu(root);
    if (!menu) return;

    setMenuOpen(root, menu.dataset.open !== "true");
  }

  function getMenu(root) {
    if (root && root._cctMenu) return root._cctMenu;
    return document.getElementById(MENU_ID);
  }

  function positionMenu(root, menu) {
    const rect = root.getBoundingClientRect();
    const spacing = 8;
    menu.style.left = `${Math.round(rect.left)}px`;
    menu.style.top = `${Math.round(rect.bottom + spacing)}px`;
  }

  function closeOtherMenus(currentRoot) {
    document.querySelectorAll(".cct-logo-root").forEach((root) => {
      if (root !== currentRoot) setMenuOpen(root, false);
    });
  }

  function bindMenuListeners() {
    if (menuListenersReady) return;
    menuListenersReady = true;

    document.addEventListener("click", (event) => {
      const root = event.target.closest && event.target.closest(".cct-logo-root");
      const menu = event.target.closest && event.target.closest(".cct-logo-menu");
      if (menu) return;

      document.querySelectorAll(".cct-logo-root").forEach((item) => {
        if (item !== root) setMenuOpen(item, false);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      document.querySelectorAll(".cct-logo-root").forEach((root) => setMenuOpen(root, false));
    });
  }

  function createLogoRoot() {
    const root = document.createElement("div");
    root.className = "cct-logo-root cct-ignore";
    root.setAttribute("aria-label", getProductName());

    const button = document.createElement("button");
    button.type = "button";
    button.className = "cct-logo-button";
    button.setAttribute("aria-haspopup", "menu");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", MENU_ID);
    button.innerHTML = CCT.assets.logoSvg;

    const menu = document.createElement("div");
    menu.id = MENU_ID;
    menu.className = "cct-logo-menu cct-ignore";
    menu.setAttribute("role", "menu");
    menu.hidden = true;
    menu.innerHTML = `
      <div class="cct-logo-menu-title">
        <span>${getProductName()}</span>
        <span class="cct-logo-menu-version">v${(CCT.meta && CCT.meta.version) || "0.0.0"}</span>
      </div>
      <div class="cct-logo-menu-divider" aria-hidden="true"></div>
      <button class="cct-logo-menu-toggle cct-translation-toggle" type="button" role="switch" aria-checked="true">
        <span class="cct-logo-menu-link-main">${iconSvg("translation")}<span class="cct-translation-toggle-label">关闭汉化</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
      </button>
      <button class="cct-logo-menu-toggle cct-ad-blocking-toggle" type="button" role="switch" aria-checked="true">
        <span class="cct-logo-menu-link-main">${iconSvg("adBlocking")}<span>屏蔽广告</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
      </button>
      <button class="cct-logo-menu-toggle cct-ad-layout-centered-toggle" type="button" role="switch" aria-checked="true">
        <span class="cct-logo-menu-link-main">${iconSvg("adLayoutCentered")}<span>修正页面布局</span><span class="cct-logo-menu-help" tabindex="0" aria-label="修正页面布局说明">${iconSvg("question")}</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
        <span class="cct-logo-menu-tooltip" role="tooltip">Civitai 的模型详情页采用双栏布局，右侧栏用于展示广告。屏蔽广告后，页面仍会保留右侧栏的占位空间，导致主要内容偏向左侧。开启此功能后，会将双栏布局调整为单栏，使主要内容恢复居中显示。</span>
      </button>
      <button class="cct-logo-menu-toggle cct-original-download-toggle" type="button" role="switch" aria-checked="false">
        <span class="cct-logo-menu-link-main">${iconSvg("download")}<span>下载原始文件</span><span class="cct-logo-menu-help" tabindex="0" aria-label="下载原始文件说明">${iconSvg("question")}</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
        <span class="cct-logo-menu-tooltip" role="tooltip">通常需要进入详情页才能保存原始图片或视频；在外层卡片直接右键保存，拿到的往往只是压缩缩略图。开启后，可在卡片上快速下载原始文件。</span>
      </button>
      <button class="cct-logo-menu-toggle cct-quick-collapse-toggle" type="button" role="switch" aria-checked="true">
        <span class="cct-logo-menu-link-main">${iconSvg("quickCollapse")}<span>快捷折叠</span><span class="cct-logo-menu-help" tabindex="0" aria-label="快捷折叠说明">${iconSvg("question")}</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
        <span class="cct-logo-menu-tooltip" role="tooltip">部分模型的介绍和更新日志很长。展开后如果想继续查看下方的示例图或评论，往往需要滚动很久才能回到原按钮位置再折叠。开启后，页面右下角会显示快捷按钮，用来快速展开或折叠介绍内容。</span>
      </button>
      <button class="cct-logo-menu-toggle cct-model-version-switch-toggle" type="button" role="switch" aria-checked="true">
        <span class="cct-logo-menu-link-main">${iconSvg("modelVersionSwitch")}<span>模型版本快速切换</span><span class="cct-logo-menu-help" tabindex="0" aria-label="模型版本快速切换说明">${iconSvg("question")}</span></span>
        <span class="cct-logo-menu-toggle-right">
          <span class="cct-logo-menu-switch" aria-hidden="true"></span>
        </span>
        <span class="cct-logo-menu-tooltip" role="tooltip">将模型版本选项卡列表改为侧边栏下拉菜单，方便快速查看和切换不同版本，解决有些模型版本过多，切换时过于麻烦的问题。</span>
      </button>
      <a class="cct-logo-menu-link" href="https://github.com/strangechiao/Civitai-Chinese-Translator/issues" target="_blank" rel="noopener noreferrer" role="menuitem">
        <span class="cct-logo-menu-link-main">${iconSvg("bug")}<span>反馈问题</span></span>
        ${iconSvg("external")}
      </a>
      <a class="cct-logo-menu-link" href="https://civitai.com/user/qoob9006" target="_blank" rel="noopener noreferrer" role="menuitem">
        <span class="cct-logo-menu-link-main">${iconSvg("contact")}<span>联系我</span></span>
        ${iconSvg("external")}
      </a>
      <button class="cct-logo-menu-check" type="button" data-mode="check">检查更新</button>
    `;

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      closeOtherMenus(root);
      toggleMenu(root);
    });

    menu.querySelector(".cct-logo-menu-check").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      checkForUpdates(root);
    });

    menu.querySelector(".cct-translation-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setTranslationEnabled || !CCT.isTranslationEnabled) return;

      CCT.setTranslationEnabled(!CCT.isTranslationEnabled());
      window.location.reload();
    });

    menu.querySelector(".cct-original-download-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setOriginalDownloadEnabled || !CCT.isOriginalDownloadEnabled) return;

      CCT.setOriginalDownloadEnabled(!CCT.isOriginalDownloadEnabled());
      updateOriginalDownloadToggle(menu);
    });

    menu.querySelector(".cct-ad-blocking-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setAdBlockingEnabled || !CCT.isAdBlockingEnabled) return;

      CCT.setAdBlockingEnabled(!CCT.isAdBlockingEnabled());
      updateAdBlockingToggle(menu);
    });

    menu.querySelector(".cct-ad-layout-centered-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setAdLayoutCenteredEnabled || !CCT.isAdLayoutCenteredEnabled) return;

      CCT.setAdLayoutCenteredEnabled(!CCT.isAdLayoutCenteredEnabled());
      updateAdLayoutCenteredToggle(menu);
    });

    menu.querySelector(".cct-quick-collapse-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setQuickCollapseEnabled || !CCT.isQuickCollapseEnabled) return;

      CCT.setQuickCollapseEnabled(!CCT.isQuickCollapseEnabled());
      updateQuickCollapseToggle(menu);
    });

    menu.querySelector(".cct-model-version-switch-toggle").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (!CCT.setModelVersionSwitchEnabled || !CCT.isModelVersionSwitchEnabled) return;

      CCT.setModelVersionSwitchEnabled(!CCT.isModelVersionSwitchEnabled());
      updateModelVersionSwitchToggle(menu);
    });

    updateTranslationToggle(menu);
    updateAdBlockingToggle(menu);
    updateAdLayoutCenteredToggle(menu);
    updateOriginalDownloadToggle(menu);
    updateQuickCollapseToggle(menu);
    updateModelVersionSwitchToggle(menu);
    bindTooltip(menu);

    root._cctMenu = menu;
    root.append(button);
    document.body.appendChild(menu);
    bindMenuListeners();

    return root;
  }

  function injectLogo() {
    if (!CCT.assets || !CCT.assets.logoSvg) return;

    const target = getLogoTarget();
    if (!target) return;

    let root = document.querySelector(".cct-logo-root");
    if (!root) {
      root = createLogoRoot();
    }

    placeLogo(root, target);
    syncLogoSize(root, target.sizeElement);
    requestAnimationFrame(() => syncLogoSize(root, target.sizeElement));
  }

  CCT.injectLogo = injectLogo;
})();
