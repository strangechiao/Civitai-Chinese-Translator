(function () {
  "use strict";

  const config = window.CivitaiChinese || {};
  const logoSvgs = config.logoSvgs || {};
  const currentVersion = config.version || "0.0.0";
  const updateUrl =
    config.updateUrl ||
    "https://raw.githubusercontent.com/strangechiao/Civitai-Chinese-Translator-Userscript/main/civitai-chinese-translator.user.js";
  const updateState = {
    checking: false,
    latestVersion: null,
    error: null,
  };
  const menuItems = [
    {
      label: "提交错误",
      url: "https://github.com/strangechiao/Civitai-Chinese-Translator-Userscript/issues",
    },
    {
      label: "前往仓库",
      url: "https://github.com/strangechiao/Civitai-Chinese-Translator-Userscript",
    },
    {
      label: "联系我",
      url: "https://civitai.com/user/qoob9006",
    },
    {
      label: "特别鸣谢：@catlover1937",
      url: "https://civitai.red/user/catlover1937",
    },
  ];

  function syncLogoButtonSize(button, createButton) {
    const height = Math.round(createButton.getBoundingClientRect().height);
    if (height > 0) {
      button.style.setProperty("--civitai-cn-logo-button-size", `${height}px`);
    }
  }

  function getColorScheme() {
    const candidates = [document.documentElement, document.body].filter(Boolean);

    for (const element of candidates) {
      const scheme = element.getAttribute("data-mantine-color-scheme") || element.dataset.mantineColorScheme;
      if (scheme === "dark" || scheme === "light") {
        return scheme;
      }
    }

    if (document.documentElement.classList.contains("dark") || document.body.classList.contains("dark")) {
      return "dark";
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  }

  function getLogoSvg() {
    const scheme = getColorScheme();
    return logoSvgs[scheme] || logoSvgs.light || logoSvgs.dark || "";
  }

  function syncLogoImage(logoButton) {
    const logoImage = logoButton.querySelector("img");
    const logoSvg = getLogoSvg();
    if (!logoImage || !logoSvg) return;

    const nextSrc = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(logoSvg)}`;
    if (logoImage.src !== nextSrc) {
      logoImage.src = nextSrc;
    }
  }

  function compareVersions(left, right) {
    const leftParts = String(left)
      .split(".")
      .map((part) => Number.parseInt(part, 10) || 0);
    const rightParts = String(right)
      .split(".")
      .map((part) => Number.parseInt(part, 10) || 0);
    const length = Math.max(leftParts.length, rightParts.length);

    for (let index = 0; index < length; index += 1) {
      const leftValue = leftParts[index] || 0;
      const rightValue = rightParts[index] || 0;

      if (leftValue > rightValue) return 1;
      if (leftValue < rightValue) return -1;
    }

    return 0;
  }

  function getRemoteVersion(scriptText) {
    const match = scriptText.match(/\/\/\s*@version\s+([^\s]+)/i);
    return match && match[1];
  }

  function renderUpdateStatus(menu) {
    const status = menu.querySelector(".civitai-cn-logo-menu-update-status");
    const button = menu.querySelector(".civitai-cn-logo-menu-update-button");
    if (!status || !button) return;

    if (updateState.checking) {
      status.textContent = "正在检查更新...";
      button.textContent = "检查更新";
      button.disabled = true;
      return;
    }

    if (updateState.error) {
      status.textContent = updateState.error;
      button.textContent = "重新检查";
      button.disabled = false;
      return;
    }

    if (!updateState.latestVersion) {
      status.textContent = "";
      button.textContent = "检查更新";
      button.disabled = false;
      return;
    }

    if (compareVersions(updateState.latestVersion, currentVersion) > 0) {
      status.textContent = `发现新版本 v${updateState.latestVersion}`;
      button.textContent = "更新";
      button.disabled = false;
      return;
    }

    status.textContent = "已经是最新版本";
    button.textContent = "检查更新";
    button.disabled = false;
  }

  async function checkForUpdates(menu) {
    if (updateState.latestVersion && compareVersions(updateState.latestVersion, currentVersion) > 0) {
      window.open(updateUrl, "_blank", "noopener,noreferrer");
      return;
    }

    updateState.checking = true;
    updateState.error = null;
    renderUpdateStatus(menu);

    try {
      const response = await fetch(`${updateUrl}?t=${Date.now()}`, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const latestVersion = getRemoteVersion(await response.text());
      if (!latestVersion) {
        throw new Error("未找到远程版本号");
      }

      updateState.latestVersion = latestVersion;
    } catch (error) {
      updateState.error = "检查失败，请稍后重试";
    } finally {
      updateState.checking = false;
      renderUpdateStatus(menu);
    }
  }

  function closeLogoMenu(root) {
    if (!root) return;

    const button = root.querySelector(".civitai-cn-logo-button");
    const menu = root.querySelector(".civitai-cn-logo-menu");
    if (!button || !menu) return;

    menu.hidden = true;
    button.setAttribute("aria-expanded", "false");
  }

  function toggleLogoMenu(root) {
    const button = root.querySelector(".civitai-cn-logo-button");
    const menu = root.querySelector(".civitai-cn-logo-menu");
    if (!button || !menu) return;

    const nextOpen = menu.hidden;
    menu.hidden = !nextOpen;
    button.setAttribute("aria-expanded", String(nextOpen));
  }

  function createMenu() {
    const menu = document.createElement("div");
    menu.className = "civitai-cn-logo-menu";
    menu.id = "civitai-cn-logo-menu";
    menu.hidden = true;
    menu.setAttribute("role", "menu");

    const header = document.createElement("div");
    header.className = "civitai-cn-logo-menu-header";
    header.textContent = `CCT 中文增强插件 v${currentVersion}`;
    menu.appendChild(header);

    const updatePanel = document.createElement("div");
    updatePanel.className = "civitai-cn-logo-menu-update";

    const updateStatus = document.createElement("div");
    updateStatus.className = "civitai-cn-logo-menu-update-status";

    const updateButton = document.createElement("button");
    updateButton.type = "button";
    updateButton.className = "civitai-cn-logo-menu-update-button";
    updateButton.textContent = "检查更新";
    updateButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      checkForUpdates(menu);
    });

    updatePanel.appendChild(updateStatus);
    updatePanel.appendChild(updateButton);
    menu.appendChild(updatePanel);

    menuItems.forEach((item) => {
      const link = document.createElement("a");
      link.className = "civitai-cn-logo-menu-item";
      link.href = item.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = item.label;
      link.setAttribute("role", "menuitem");
      link.addEventListener("click", () => closeLogoMenu(menu.parentElement));

      menu.appendChild(link);
    });

    renderUpdateStatus(menu);

    return menu;
  }

  function createLogoMenuRoot() {
    const root = document.createElement("div");
    root.className = "civitai-cn-logo-menu-root";

    const logoButton = document.createElement("button");
    logoButton.type = "button";
    logoButton.className = "civitai-cn-logo-button";
    logoButton.setAttribute("aria-label", "CCT 中文增强插件");
    logoButton.setAttribute("aria-haspopup", "menu");
    logoButton.setAttribute("aria-controls", "civitai-cn-logo-menu");
    logoButton.setAttribute("aria-expanded", "false");
    logoButton.title = "CCT 中文增强插件";

    const logoImage = document.createElement("img");
    logoImage.alt = "";

    logoButton.appendChild(logoImage);
    logoButton.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleLogoMenu(root);
    });

    root.appendChild(logoButton);
    root.appendChild(createMenu());

    return root;
  }

  function getNavbarGroup() {
    const homeLogo = document.querySelector('a[aria-label="Civitai home"]');
    if (!homeLogo) return null;

    return homeLogo.closest(".flex") || homeLogo.parentElement;
  }

  function getSupportButton() {
    const navbarGroup = getNavbarGroup();
    const supportSelectors = ['a[href*="/purchase/buzz"]', 'a[href*="purchase/buzz"]'];

    for (const selector of supportSelectors) {
      const scopedButton = navbarGroup && navbarGroup.querySelector(selector);
      if (scopedButton) return scopedButton;

      const pageButton = document.querySelector(selector);
      if (pageButton) return pageButton;
    }

    if (!navbarGroup) return null;

    return Array.from(navbarGroup.querySelectorAll("a, button")).find(
      (element) => element.textContent && element.textContent.trim().toLowerCase() === "pro",
    );
  }

  function getInsertionTarget() {
    const supportButton = getSupportButton();
    if (supportButton && supportButton.parentElement) {
      return {
        container: supportButton.parentElement,
        mode: "after",
        reference: supportButton,
        sizeElement: supportButton,
      };
    }

    const createButton = document.querySelector('[data-activity="create:navbar"]');
    if (!createButton) return null;

    const createGroup = createButton.parentElement;
    const actionGroup = createGroup && createGroup.parentElement;
    if (!createGroup || !actionGroup) return null;

    return {
      container: actionGroup,
      mode: "before",
      reference: createGroup,
      sizeElement: createButton,
    };
  }

  function placeLogoRoot(root, target) {
    if (target.mode === "after") {
      if (root.parentElement === target.container && root.previousElementSibling === target.reference) {
        return;
      }

      target.container.insertBefore(root, target.reference.nextSibling);
      return;
    }

    if (root.parentElement === target.container && root.nextElementSibling === target.reference) {
      return;
    }

    target.container.insertBefore(root, target.reference);
  }

  function injectLogoButton() {
    if (!logoSvgs.dark && !logoSvgs.light) return;

    const target = getInsertionTarget();
    if (!target) return;

    document.querySelectorAll(".civitai-cn-logo-button").forEach((button) => {
      if (!button.closest(".civitai-cn-logo-menu-root")) {
        button.remove();
      }
    });

    let root = document.querySelector(".civitai-cn-logo-menu-root");
    if (!root) {
      root = createLogoMenuRoot();
    }

    placeLogoRoot(root, target);

    const logoButton = root.querySelector(".civitai-cn-logo-button");
    syncLogoImage(logoButton);
    syncLogoButtonSize(logoButton, target.sizeElement);
    requestAnimationFrame(() => syncLogoButtonSize(logoButton, target.sizeElement));
  }

  document.addEventListener("click", (event) => {
    document.querySelectorAll(".civitai-cn-logo-menu-root").forEach((root) => {
      if (!root.contains(event.target)) {
        closeLogoMenu(root);
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;

    document.querySelectorAll(".civitai-cn-logo-menu-root").forEach(closeLogoMenu);
  });

  window.CivitaiChinese = window.CivitaiChinese || {};
  window.CivitaiChinese.injectLogoButton = injectLogoButton;
})();
