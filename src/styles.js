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
`;
})();
