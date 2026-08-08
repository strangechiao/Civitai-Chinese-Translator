(function () {
  "use strict";

  const CCT = window.CCT;
  const STORAGE_KEY = "CCT_ORIGINAL_DOWNLOAD_ENABLED";

  function isOriginalDownloadEnabled() {
    return localStorage.getItem(STORAGE_KEY) === "true";
  }

  function setOriginalDownloadEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, enabled ? "true" : "false");
    refreshOriginalDownloadButtons(document.body);
  }

  function iconSvg() {
    return '<svg class="cct-original-download-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10"></path><path d="M8 10l4 4 4-4"></path><path d="M4 20h16"></path></svg>';
  }

  function arrowSvg() {
    return '<svg class="cct-original-download-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"></path><path d="M13 18l6-6"></path><path d="M13 6l6 6"></path></svg>';
  }

  function getOriginalMediaUrl(mediaUrl) {
    if (!mediaUrl) return null;

    let url;
    try {
      url = new URL(mediaUrl, location.origin);
    } catch (error) {
      return null;
    }

    if (!/(\.|-)civitai\.com$/i.test(url.hostname) && !/^image(?:cache|-b2)?\.civitai\.com$/i.test(url.hostname)) {
      return null;
    }

    const parts = url.pathname.split("/");
    if (parts.length < 5) return null;

    parts[3] = "original=true";
    url.pathname = parts.join("/");
    url.search = "";
    url.hash = "";

    return url.toString();
  }

  function getCardMedia(card) {
    return card.querySelector("img[src*='civitai.com'], video[src*='civitai.com'], video source[src*='civitai.com']");
  }

  function getImageId(card) {
    const link = card.querySelector('a[href^="/images/"], a[href*="/images/"]');
    const match = link && link.getAttribute("href").match(/\/images\/(\d+)/);
    return match ? match[1] : null;
  }

  function getFileName(originalUrl, imageId) {
    const url = new URL(originalUrl);
    const extension = url.pathname.split(".").pop() || "jpg";
    return `civitai-${imageId || "original"}.${extension}`;
  }

  function downloadFile(url, fileName) {
    if (typeof GM_download === "function") {
      GM_download({
        url,
        name: fileName,
        saveAs: false,
      });
      return;
    }

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  function setButtonState(button, text, state) {
    button.querySelector(".cct-original-download-text").textContent = text;
    button.dataset.state = state || "idle";
  }

  function getActionGroup(card) {
    const moreButton = card.querySelector('button[aria-label="More options"]');
    return moreButton && moreButton.parentElement;
  }

  function createButton(card) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cct-original-download-button";
    button.title = "下载原始文件";
    button.style.setProperty("--size", "30px");
    button.innerHTML = `
      <span class="cct-original-download-label"><span class="cct-original-download-text">下载</span></span>
      <span class="cct-original-download-icon-wrap">${iconSvg()}</span>
      <span class="cct-original-download-hover">${arrowSvg()}</span>
    `;

    button.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();

      const media = getCardMedia(card);
      const mediaUrl = media && (media.currentSrc || media.src);
      const originalUrl = getOriginalMediaUrl(mediaUrl);
      if (!originalUrl) {
        setButtonState(button, "获取失败", "error");
        window.setTimeout(() => setButtonState(button, "下载", "idle"), 1600);
        return;
      }

      const imageId = getImageId(card);
      setButtonState(button, "开始下载", "loading");
      downloadFile(originalUrl, getFileName(originalUrl, imageId));
      window.setTimeout(() => setButtonState(button, "下载", "idle"), 1600);
    });

    return button;
  }

  function injectOriginalDownloadButtons(root) {
    if (!isOriginalDownloadEnabled()) return;

    const scope = root && root.querySelectorAll ? root : document;
    const links = Array.from(scope.querySelectorAll('a[href^="/images/"], a[href*="/images/"]'));

    links.forEach((link) => {
      const card = link.parentElement;
      if (!card || card.querySelector(".cct-original-download-button")) return;
      if (!getCardMedia(card)) return;

      const actionGroup = getActionGroup(card);
      if (actionGroup) {
        const button = createButton(card);
        actionGroup.appendChild(button);
        return;
      }

      card.appendChild(createButton(card));
    });
  }

  function removeOriginalDownloadButtons(root) {
    const scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll(".cct-original-download-button").forEach((button) => button.remove());
  }

  function refreshOriginalDownloadButtons(root) {
    if (isOriginalDownloadEnabled()) {
      injectOriginalDownloadButtons(root);
      return;
    }

    removeOriginalDownloadButtons(root);
  }

  CCT.isOriginalDownloadEnabled = isOriginalDownloadEnabled;
  CCT.setOriginalDownloadEnabled = setOriginalDownloadEnabled;
  CCT.injectOriginalDownloadButtons = injectOriginalDownloadButtons;
  CCT.refreshOriginalDownloadButtons = refreshOriginalDownloadButtons;
})();
