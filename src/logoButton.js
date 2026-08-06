(function () {
  "use strict";

  const config = window.CivitaiChinese || {};
  const logoSvgs = config.logoSvgs || {};
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

  function injectLogoButton() {
    if (!logoSvgs.dark && !logoSvgs.light) return;

    const createButton = document.querySelector('[data-activity="create:navbar"]');
    if (!createButton) return;

    const createGroup = createButton.parentElement;
    const actionGroup = createGroup && createGroup.parentElement;
    if (!createGroup || !actionGroup) return;

    const legacyLogoButton = actionGroup.querySelector(":scope > .civitai-cn-logo-button");
    if (legacyLogoButton) {
      legacyLogoButton.remove();
    }

    let root = actionGroup.querySelector(":scope > .civitai-cn-logo-menu-root");
    if (!root) {
      root = createLogoMenuRoot();
    }

    if (root.parentElement !== actionGroup || root.nextElementSibling !== createGroup) {
      actionGroup.insertBefore(root, createGroup);
    }

    const logoButton = root.querySelector(".civitai-cn-logo-button");
    syncLogoImage(logoButton);
    syncLogoButtonSize(logoButton, createButton);
    requestAnimationFrame(() => syncLogoButtonSize(logoButton, createButton));
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
