(function () {
  "use strict";

  const CCT = window.CCT;
  const MENU_ID = "cct-logo-menu";
  let menuListenersReady = false;

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
    const icons = {
      bug: '<svg class="cct-logo-menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6.5a4 4 0 0 1 8 0V8H8V6.5Z"></path><path d="M6 8h12v6a6 6 0 0 1-12 0V8Z"></path><path d="M4 13H2"></path><path d="M22 13h-2"></path><path d="M5 19l-2 2"></path><path d="M19 19l2 2"></path><path d="M5 7 3 5"></path><path d="M19 7l2-2"></path><path d="M12 8v12"></path></svg>',
      user: '<svg class="cct-logo-menu-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"></path><path d="M4 21a8 8 0 0 1 16 0"></path></svg>',
      external: '<svg class="cct-logo-menu-external" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5"></path><path d="M19 5 10 14"></path><path d="M19 14v5H5V5h5"></path></svg>',
    };

    return icons[name] || "";
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
    if (open) positionMenu(root, menu);
    menu.hidden = !open;
  }

  function toggleMenu(root) {
    const menu = getMenu(root);
    if (!menu) return;

    setMenuOpen(root, menu.hidden);
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
    root.className = "cct-logo-root";
    root.setAttribute("aria-label", "CCT 中文增强插件");

    const button = document.createElement("button");
    button.type = "button";
    button.className = "cct-logo-button";
    button.setAttribute("aria-haspopup", "menu");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", MENU_ID);
    button.innerHTML = CCT.assets.logoSvg;

    const menu = document.createElement("div");
    menu.id = MENU_ID;
    menu.className = "cct-logo-menu";
    menu.setAttribute("role", "menu");
    menu.hidden = true;
    menu.innerHTML = `
      <div class="cct-logo-menu-title">
        <span>CCT 中文增强插件</span>
        <span class="cct-logo-menu-version">v${(CCT.meta && CCT.meta.version) || "0.0.0"}</span>
      </div>
      <div class="cct-logo-menu-divider" aria-hidden="true"></div>
      <a class="cct-logo-menu-link" href="https://github.com/strangechiao/Civitai-Chinese-Translator/issues" target="_blank" rel="noopener noreferrer" role="menuitem">
        <span class="cct-logo-menu-link-main">${iconSvg("bug")}<span>报告错误</span></span>
        ${iconSvg("external")}
      </a>
      <a class="cct-logo-menu-link" href="https://civitai.com/user/qoob9006" target="_blank" rel="noopener noreferrer" role="menuitem">
        <span class="cct-logo-menu-link-main">${iconSvg("user")}<span>联系我</span></span>
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
