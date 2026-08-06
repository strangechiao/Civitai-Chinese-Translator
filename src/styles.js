(function () {
  "use strict";

  window.CivitaiChinese = window.CivitaiChinese || {};

  window.CivitaiChinese.styleText = `
  .civitai-cn-select-wrapper {
    position: relative !important;
  }

  .civitai-cn-select-wrapper::after {
    content: attr(data-civitai-cn-text);
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    max-width: calc(100% - 42px);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    z-index: 2;
    box-sizing: border-box;
    color: var(--mantine-color-text);
    font-family: var(--mantine-font-family);
    font-size: var(--mantine-font-size-xs);
    font-weight: 400;
    line-height: var(--mantine-line-height);
    -webkit-font-smoothing: var(--mantine-webkit-font-smoothing);
  }

  .civitai-cn-hidden-input-text {
    color: transparent !important;
    caret-color: transparent !important;
  }

  .civitai-cn-logo-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height: var(--civitai-cn-logo-button-size, 38px);
    min-width: 0;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
    box-sizing: border-box;
  }

  .civitai-cn-logo-button:hover {
    background: transparent;
  }

  .civitai-cn-logo-button img {
    display: block;
    width: auto;
    height: var(--civitai-cn-logo-button-size, 38px);
  }

  .civitai-cn-logo-menu-root {
    position: relative;
    display: inline-flex;
    align-items: center;
    height: var(--civitai-cn-logo-button-size, 38px);
  }

  .civitai-cn-logo-menu {
    position: absolute;
    top: calc(100% + 8px);
    left: 0;
    z-index: 10000;
    min-width: 150px;
    padding: 4px;
    border: 1px solid var(--mantine-color-default-border, rgba(255, 255, 255, 0.12));
    border-radius: var(--mantine-radius-sm, 4px);
    background: var(--mantine-color-body, #1a1b1e);
    box-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.24));
  }

  .civitai-cn-logo-menu[hidden] {
    display: none;
  }

  .civitai-cn-logo-menu-item {
    display: block;
    width: 100%;
    padding: 8px 10px;
    border-radius: var(--mantine-radius-xs, 2px);
    color: var(--mantine-color-text, inherit);
    font-family: var(--mantine-font-family);
    font-size: var(--mantine-font-size-sm);
    line-height: var(--mantine-line-height-sm);
    text-align: left;
    text-decoration: none;
    white-space: nowrap;
    box-sizing: border-box;
  }

  .civitai-cn-logo-menu-item:hover {
    background: var(--mantine-color-gray-light-hover, rgba(128, 128, 128, 0.16));
    text-decoration: none;
  }
`;
})();
