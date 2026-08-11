(function () {
  "use strict";

  const CCT = window.CCT;
  const STORAGE_KEY = "CCT_ORIGINAL_DOWNLOAD_ENABLED";

  function isOriginalDownloadEnabled() {
    return localStorage.getItem(STORAGE_KEY) !== "false";
  }

  function setOriginalDownloadEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, enabled ? "true" : "false");
    refreshOriginalDownloadButtons(document.body);
  }

  function iconSvg() {
    const icons = CCT.assets && CCT.assets.icons;
    const svg = icons && icons.originalDownload;
    if (!svg) {
      return '<svg class="cct-original-download-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v10"></path><path d="M8 10l4 4 4-4"></path><path d="M4 20h16"></path></svg>';
    }

    return svg
      .replace(/\sclass="[^"]*"/, "")
      .replace("<svg ", '<svg class="cct-original-download-icon" aria-hidden="true" ');
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
    if (parts.length < 4) return null;

    const transformIndex = parts.findIndex((part) => /^(?:original|width|height|quality|anim|transcode)=/i.test(part));
    if (transformIndex > -1) {
      parts[transformIndex] = "original=true";
    } else {
      parts.splice(parts.length - 1, 0, "original=true");
    }
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

  function downloadFile(url, fileName, onSuccess, onError) {
    if (typeof GM_download === "function") {
      try {
        GM_download({
          url,
          name: fileName,
          saveAs: false,
          onload: onSuccess,
          onerror: onError,
          ontimeout: onError,
        });
      } catch (error) {
        onError(error);
      }
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
    onSuccess();
  }

  function setButtonState(button, text, state) {
    button.querySelector(".cct-original-download-text").textContent = text;
    button.dataset.state = state || "idle";
  }

  function getActionGroup(card) {
    const moreButton = card.querySelector('button[aria-label="More options"]');
    return moreButton && moreButton.parentElement;
  }

  function findMediaCard(link) {
    let current = link.parentElement;
    let fallback = null;
    let depth = 0;

    while (current && current !== document.body && depth < 10) {
      if (getCardMedia(current)) fallback = fallback || current;
      if (getActionGroup(current)) return current;
      current = current.parentElement;
      depth += 1;
    }

    return fallback;
  }

  function createButton(card) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cct-original-download-button cct-ignore";
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
      if (button.dataset.state === "loading") return;

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
      downloadFile(
        originalUrl,
        getFileName(originalUrl, imageId),
        () => setButtonState(button, "下载", "idle"),
        () => {
          setButtonState(button, "下载失败", "error");
          window.setTimeout(() => setButtonState(button, "下载", "idle"), 2000);
        },
      );
      window.setTimeout(() => {
        if (button.dataset.state === "loading") setButtonState(button, "下载", "idle");
      }, 1600);
    });

    return button;
  }

  function injectOriginalDownloadButtons(root) {
    if (!isOriginalDownloadEnabled()) return;

    const rootElement = root && root.nodeType === Node.ELEMENT_NODE ? root : root && root.parentElement;
    const scope = rootElement && rootElement.querySelectorAll ? rootElement : document;
    const selector = 'a[href^="/images/"], a[href*="/images/"]';
    const links = rootElement && rootElement.matches(selector)
      ? [rootElement, ...scope.querySelectorAll(selector)]
      : Array.from(scope.querySelectorAll(selector));

    links.forEach((link) => {
      const card = findMediaCard(link);
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
