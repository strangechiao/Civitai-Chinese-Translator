(function () {
  "use strict";

  const CCT = window.CCT;
  const ROOT_CLASS = "cct-model-version-dropdown";
  const HIDDEN_CLASS = "cct-model-version-list-hidden";
  const STORAGE_KEY = "CCT_MODEL_VERSION_SWITCH_ENABLED";
  let outsideHandlerReady = false;

  function isModelVersionSwitchEnabled() {
    return localStorage.getItem(STORAGE_KEY) !== "false";
  }

  function setModelVersionSwitchEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, enabled ? "true" : "false");
    injectModelVersionDropdown();
  }

  function isModelDetailPage() {
    return CCT.getCurrentPage && CCT.getCurrentPage() === "models";
  }

  function getVersionListRoots() {
    const roots = Array.from(document.querySelectorAll('[class*="ModelVersionList"][class*="scrollContainer"]'))
      .map((scrollContainer) => scrollContainer.closest(".mantine-Group-root"))
      .filter(Boolean);

    return Array.from(new Set(roots));
  }

  function getVersionListRoot() {
    return getVersionListRoots()
      .filter((root) => getVersionOptions(root).length > 0)
      .sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top)[0] || null;
  }

  function getVersionOptions(versionListRoot) {
    return Array.from(versionListRoot.querySelectorAll('button[data-size="compact-sm"]'))
      .map((button, index) => {
        const label = button.textContent.trim().replace(/\s+/g, " ");
        if (!label) return null;

        const style = button.getAttribute("style") || "";
        const parent = button.parentElement;

        return {
          index,
          label,
          button,
          selected: style.includes("blue-filled"),
          paid: Boolean(parent && parent.querySelector(".tabler-icon-bolt")),
        };
      })
      .filter(Boolean);
  }

  function getSidebarColumn(versionListRoot) {
    const listRect = versionListRoot.getBoundingClientRect();
    const columns = Array.from(document.querySelectorAll(".mantine-Grid-col"))
      .filter((column) => !column.contains(versionListRoot))
      .map((column) => ({ column, rect: column.getBoundingClientRect() }))
      .filter(({ rect }) => {
        if (rect.width < 220 || rect.height < 80) return false;
        if (rect.bottom <= 0 || rect.right <= 0) return false;
        return rect.left > listRect.left + Math.min(160, listRect.width * 0.25);
      });

    if (!columns.length) return null;

    columns.sort((a, b) => {
      const topDistance = Math.abs(a.rect.top - listRect.top) - Math.abs(b.rect.top - listRect.top);
      if (topDistance) return topDistance;
      return b.rect.left - a.rect.left;
    });

    return columns[0].column;
  }

  function iconSvg(name) {
    const icons = CCT.assets && CCT.assets.icons;
    const svg = icons && icons[name];
    if (!svg) return "";

    return svg
      .replace(/\sclass="[^"]*"/, "")
      .replace("<svg ", '<svg class="cct-model-version-select-icon" aria-hidden="true" ');
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function createDropdown() {
    const root = document.createElement("div");
    root.className = `${ROOT_CLASS} cct-ignore`;
    root.innerHTML = `
      <button class="cct-model-version-select-trigger" type="button" aria-haspopup="listbox" aria-expanded="false">
        <span class="cct-model-version-select-current"></span>
        ${iconSvg("expand")}
      </button>
      <div class="cct-model-version-select-menu" role="listbox" hidden></div>
    `;

    root.querySelector(".cct-model-version-select-trigger").addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      setOpen(root, root.dataset.open !== "true");
    });

    root.querySelector(".cct-model-version-select-menu").addEventListener("wheel", (event) => {
      const menu = event.currentTarget;
      const atTop = menu.scrollTop <= 0;
      const atBottom = Math.ceil(menu.scrollTop + menu.clientHeight) >= menu.scrollHeight;

      if ((event.deltaY < 0 && atTop) || (event.deltaY > 0 && atBottom)) {
        event.preventDefault();
      }
    }, { passive: false });

    return root;
  }

  function setOpen(root, open) {
    const trigger = root.querySelector(".cct-model-version-select-trigger");
    const menu = root.querySelector(".cct-model-version-select-menu");

    root.dataset.open = open ? "true" : "false";
    trigger.setAttribute("aria-expanded", open ? "true" : "false");
    menu.hidden = !open;
  }

  function activateOption(root, versionListRoot, option, event) {
    event.preventDefault();
    event.stopPropagation();

    if (root.dataset.switching === "true") return;
    root.dataset.switching = "true";
    root.dataset.selectedLabel = option.label;

    setOpen(root, false);
    option.button.click();

    window.setTimeout(() => {
      root.dataset.switching = "false";
      injectModelVersionDropdown();
    }, 120);
    window.setTimeout(injectModelVersionDropdown, 360);
    window.setTimeout(injectModelVersionDropdown, 900);
  }

  function syncDropdown(root, options, versionListRoot) {
    if (root.dataset.switching === "true") return;

    const selected =
      options.find((option) => option.selected) ||
      options.find((option) => option.label === root.dataset.selectedLabel) ||
      options[0];
    const current = root.querySelector(".cct-model-version-select-current");
    const menu = root.querySelector(".cct-model-version-select-menu");
    const selectedLabel = escapeHtml(selected.label);
    const isOpen = root.dataset.open === "true";
    const currentSignature = `${selected.label}\u0000${selected.paid ? "1" : "0"}`;

    if (current.dataset.cctSignature !== currentSignature) {
      current.dataset.cctSignature = currentSignature;
      current.innerHTML = `
        <span class="cct-model-version-select-label">${selectedLabel}</span>
        ${selected.paid ? '<span class="cct-model-version-select-paid">⚡</span>' : ""}
      `;
    }

    if (isOpen) return;

    const menuSignature = options
      .map((option) => `${option.label}\u0000${option.paid ? "1" : "0"}\u0000${option.selected ? "1" : "0"}`)
      .join("\u0001");
    const previousButtons = root._cctVersionButtons;
    const sourceButtonsChanged =
      !previousButtons ||
      previousButtons.length !== options.length ||
      options.some((option, index) => previousButtons[index] !== option.button);
    if (root.dataset.cctMenuSignature === menuSignature && !sourceButtonsChanged) return;

    root.dataset.cctMenuSignature = menuSignature;
    root._cctVersionButtons = options.map((option) => option.button);
    menu.innerHTML = "";
    options.forEach((option) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "cct-model-version-select-option";
      item.setAttribute("role", "option");
      item.setAttribute("aria-selected", option.selected ? "true" : "false");
      const label = escapeHtml(option.label);
      item.innerHTML = `
        <span class="cct-model-version-select-label">${label}</span>
        ${option.paid ? '<span class="cct-model-version-select-paid">⚡</span>' : ""}
      `;

      item.addEventListener("pointerdown", (event) => activateOption(root, versionListRoot, option, event));
      item.addEventListener("click", (event) => activateOption(root, versionListRoot, option, event));

      menu.appendChild(item);
    });
  }

  function removeDropdowns() {
    document.querySelectorAll(`.${ROOT_CLASS}`).forEach((element) => element.remove());
    document.querySelectorAll(`.${HIDDEN_CLASS}`).forEach((element) => element.classList.remove(HIDDEN_CLASS));
  }

  function bindOutsideHandler() {
    if (outsideHandlerReady) return;
    outsideHandlerReady = true;

    document.addEventListener("click", (event) => {
      document.querySelectorAll(`.${ROOT_CLASS}[data-open="true"]`).forEach((root) => {
        if (!root.contains(event.target)) setOpen(root, false);
      });
    });
  }

  function injectModelVersionDropdown() {
    bindOutsideHandler();

    if (!isModelVersionSwitchEnabled() || !isModelDetailPage()) {
      removeDropdowns();
      return;
    }

    const versionListRoot = getVersionListRoot();
    if (!versionListRoot) {
      removeDropdowns();
      return;
    }

    const options = getVersionOptions(versionListRoot);
    const sidebarColumn = getSidebarColumn(versionListRoot);
    if (!options.length || !sidebarColumn) {
      versionListRoot.classList.remove(HIDDEN_CLASS);
      document.querySelectorAll(`.${ROOT_CLASS}`).forEach((element) => element.remove());
      return;
    }

    getVersionListRoots().forEach((root) => root.classList.add(HIDDEN_CLASS));

    let dropdown = sidebarColumn.querySelector(`:scope > .${ROOT_CLASS}`);
    if (!dropdown) {
      dropdown = createDropdown();
      sidebarColumn.insertBefore(dropdown, sidebarColumn.firstChild);
    }

    document.querySelectorAll(`.${ROOT_CLASS}`).forEach((element) => {
      if (element !== dropdown) element.remove();
    });

    syncDropdown(dropdown, options, versionListRoot);
  }

  CCT.injectModelVersionDropdown = injectModelVersionDropdown;
  CCT.isModelVersionSwitchEnabled = isModelVersionSwitchEnabled;
  CCT.setModelVersionSwitchEnabled = setModelVersionSwitchEnabled;
})();
