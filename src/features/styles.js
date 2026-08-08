(function () {
  "use strict";

  const CCT = window.CCT;

  CCT.styleText = `
    .cct-logo-root {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: var(--cct-logo-height, 32px);
      max-width: 160px;
      line-height: 0;
      flex: 0 0 auto;
    }

    .cct-logo-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 0;
      border: 0;
      background: transparent;
      color: inherit;
      line-height: 0;
      cursor: pointer;
    }

    .cct-logo-root svg,
    .cct-logo-root img {
      display: block;
      width: auto;
      height: 100%;
    }

    .cct-logo-menu {
      position: fixed;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-width: 220px;
      padding: 12px;
      border: 1px solid var(--mantine-color-dark-4, #373a40);
      border-radius: var(--mantine-radius-sm, 4px);
      background: var(--mantine-color-dark-6, #25262b);
      box-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.35));
      color: var(--mantine-color-gray-2, #e9ecef);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
    }

    .cct-logo-menu[hidden] {
      display: none !important;
    }

    .cct-logo-menu-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      color: var(--mantine-color-gray-1, #f1f3f5);
      font-size: var(--mantine-font-size-sm);
      font-weight: 700;
      line-height: var(--mantine-line-height-sm);
    }

    .cct-logo-menu-version {
      align-self: flex-end;
      color: var(--mantine-color-dimmed);
      font-size: var(--mantine-font-size-xs);
      font-weight: 600;
      line-height: var(--mantine-line-height-xs);
      white-space: nowrap;
    }

    .cct-logo-menu-divider {
      height: 1px;
      margin: 2px 0;
      background: var(--mantine-color-dark-4, #373a40);
    }

    .cct-logo-menu-check {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: var(--button-height-xs, 30px);
      padding-inline: var(--button-padding-x-xs, 14px);
      border: calc(0.0625rem * var(--mantine-scale)) solid transparent;
      border-radius: var(--mantine-radius-sm, 4px);
      background: var(--mantine-color-blue-light);
      color: var(--mantine-color-blue-light-color);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-xs);
      font-weight: 600;
      line-height: var(--mantine-line-height-xs);
      cursor: pointer;
    }

    .cct-logo-menu-check:hover {
      background: var(--mantine-color-blue-light-hover);
    }

    .cct-logo-menu-check:disabled {
      cursor: default;
      opacity: 0.65;
    }

    .cct-logo-menu-check[data-state="available"] {
      color: var(--mantine-color-green-text, #51cf66);
    }

    .cct-logo-menu-check[data-state="error"] {
      color: var(--mantine-color-red-text, #ff6b6b);
    }

    .cct-logo-menu-link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 6px 4px;
      border-radius: var(--mantine-radius-sm, 4px);
      color: var(--mantine-color-gray-2, #e9ecef);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      text-decoration: none;
    }

    .cct-logo-menu-link-main {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .cct-logo-menu-icon,
    .cct-logo-menu-external {
      display: block;
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex: 0 0 auto;
    }

    .cct-logo-menu-external {
      width: 14px;
      height: 14px;
      color: var(--mantine-color-dimmed);
    }

    .cct-logo-menu-link:hover {
      background: var(--mantine-color-dark-5, #2c2e33);
      color: var(--mantine-color-blue-4, #4dabf7);
      text-decoration: none;
    }

    .cct-select-value-wrapper {
      position: relative !important;
    }

    .cct-select-value-wrapper::after {
      content: attr(data-cct-text);
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
      color: currentColor;
      font-family: var(--mantine-font-family);
      font-size: var(--input-fz, var(--mantine-font-size-sm));
      font-weight: 400;
      line-height: var(--input-line-height, var(--mantine-line-height));
      -webkit-font-smoothing: var(--mantine-webkit-font-smoothing);
    }

    .cct-hidden-input-text {
      color: transparent !important;
      caret-color: transparent !important;
    }
  `;
})();
