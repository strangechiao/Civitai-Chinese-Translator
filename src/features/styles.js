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
      border: 1px solid #373A40;
      border-radius: var(--mantine-radius-sm, 4px);
      background: #25262B;
      box-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.35));
      color: var(--mantine-color-gray-2, #e9ecef);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-4px) scale(0.96);
      transform-origin: top left;
      transition: transform 180ms ease, opacity 180ms ease;
    }

    .cct-logo-menu[hidden] {
      display: none !important;
    }

    .cct-logo-menu[data-open="true"] {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0) scale(1);
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
      color: #F59F00;
      font-size: var(--mantine-font-size-sm);
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
      height: var(--button-height-sm, calc(2.25rem * var(--mantine-scale)));
      padding-inline: var(--button-padding-x-sm, calc(1.125rem * var(--mantine-scale)));
      border: var(--button-bd, calc(0.0625rem * var(--mantine-scale)) solid transparent);
      border-color: rgba(34, 139, 230, 0.3);
      border-radius: var(--button-radius, var(--mantine-radius-default));
      background: var(--button-bg, var(--mantine-color-blue-light));
      background-color: rgba(34, 139, 230, 0.15);
      color: var(--button-color, var(--mantine-color-blue-light-color));
      font-family: var(--mantine-font-family);
      font-size: var(--button-fz, var(--mantine-font-size-sm));
      font-weight: 600;
      line-height: 1;
      text-align: center;
      vertical-align: middle;
      user-select: none;
      cursor: pointer;
    }

    .cct-logo-menu-check:hover {
      background: var(--button-hover, var(--mantine-color-blue-light-hover));
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

    .cct-logo-menu-toggle {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      width: 100%;
      padding: 6px 4px;
      border: 0;
      border-radius: var(--mantine-radius-sm, 4px);
      background: transparent;
      color: var(--mantine-color-gray-2, #e9ecef);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      text-align: left;
      cursor: pointer;
    }

    .cct-logo-menu-toggle:hover {
      background: var(--mantine-color-dark-5, #2c2e33);
    }

    .cct-logo-menu-link-main {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      min-width: 0;
    }

    .cct-logo-menu-toggle-right {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      flex: 0 0 auto;
    }

    .cct-logo-menu-help {
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 14px;
      height: 14px;
      color: var(--mantine-color-dimmed);
      line-height: 1;
    }

    .cct-logo-menu-help .cct-logo-menu-icon {
      width: 14px;
      height: 14px;
    }

    .cct-logo-menu-switch {
      position: relative;
      display: inline-flex;
      width: 32px;
      height: 18px;
      border-radius: 999px;
      background: var(--mantine-color-dark-4, #373a40);
      transition: background-color 120ms ease;
    }

    .cct-logo-menu-switch::after {
      content: "";
      position: absolute;
      left: 2px;
      top: 2px;
      width: 14px;
      height: 14px;
      border-radius: 999px;
      background: var(--mantine-color-gray-1, #f1f3f5);
      transition: transform 120ms ease;
    }

    .cct-logo-menu-toggle[data-checked="true"] .cct-logo-menu-switch {
      background: #2F9E44;
    }

    .cct-logo-menu-toggle[data-checked="true"] .cct-logo-menu-switch::after {
      transform: translateX(14px);
    }

    .cct-logo-menu-tooltip {
      position: absolute;
      left: calc(100% + 16px);
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      display: none;
      width: 320px;
      padding: 16px;
      border: 1px solid var(--mantine-color-blue-4, #4dabf7);
      border-radius: var(--mantine-radius-sm, 4px);
      background: var(--mantine-color-dark-6, #25262b);
      box-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.35));
      color: var(--mantine-color-gray-2, #e9ecef);
      font-size: var(--mantine-font-size-sm);
      font-weight: 400;
      line-height: 1.45;
      white-space: normal;
      pointer-events: none;
      opacity: 0;
    }

    .cct-logo-menu-tooltip[data-open="true"] {
      display: block;
      opacity: 1;
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
      text-decoration: none;
    }

    .cct-original-download-button {
      position: relative;
      z-index: 6;
      height: var(--size, 30px);
      width: var(--size, 30px);
      min-width: var(--size, 30px);
      padding: 0;
      border-width: medium;
      border-style: none;
      border-color: currentcolor;
      border-image: none;
      border: 0;
      background: transparent;
      color: var(--mantine-color-dark-6);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-xs);
      font-weight: 700;
      line-height: var(--mantine-line-height-xs);
      cursor: pointer;
    }

    .cct-original-download-button:hover .cct-original-download-label,
    .cct-original-download-button[data-state="loading"] .cct-original-download-label,
    .cct-original-download-button[data-state="error"] .cct-original-download-label {
      opacity: 1;
      transform: scaleX(1);
      pointer-events: auto;
    }

    .cct-original-download-button:hover .cct-original-download-hover,
    .cct-original-download-button[data-state="loading"] .cct-original-download-hover,
    .cct-original-download-button[data-state="error"] .cct-original-download-hover {
      opacity: 1;
    }

    .cct-original-download-button[data-state="error"] {
      color: var(--mantine-color-red-text, #ff6b6b);
    }

    .cct-original-download-label,
    .cct-original-download-icon-wrap,
    .cct-original-download-hover {
      position: absolute;
      top: 0;
      height: var(--size, 30px);
      border-radius: 999px;
      background: white;
      box-shadow: none;
      color: currentColor;
    }

    .cct-original-download-label {
      right: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: nowrap;
      flex-shrink: 0;
      min-width: calc(var(--size, 30px) * 3);
      width: auto;
      padding-left: var(--mantine-spacing-md);
      padding-right: var(--size, 30px);
      overflow: hidden;
      opacity: 0;
      transform: scaleX(0);
      transform-origin: 90% center;
      transition: transform 0.2s, opacity 0.2s;
      pointer-events: none;
      box-sizing: border-box;
    }

    .cct-original-download-text {
      display: inline-block;
      white-space: nowrap;
    }

    .cct-original-download-icon-wrap,
    .cct-original-download-hover {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: var(--size, 30px);
      background: white;
      color: currentColor;
    }

    .cct-original-download-icon-wrap {
      z-index: 1;
      position: relative;
      right: auto;
    }

    .cct-original-download-hover {
      left: 0;
      opacity: 0;
      z-index: 2;
      transition: opacity 0.2s;
    }

    .cct-original-download-icon {
      display: block;
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.6;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex: 0 0 auto;
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
