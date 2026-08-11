(function () {
  "use strict";

  const CCT = window.CCT;

  CCT.styleText = `
    .cct-hidden-ad {
      display: none !important;
    }

    html.cct-ad-blocking-enabled .box-content:has(a[href^="https://advertising.civitai.com/api/v1/engagement"]),
    html.cct-ad-blocking-enabled [style*="min-height"]:has(a[href^="https://advertising.civitai.com/api/v1/engagement"]),
    html.cct-ad-blocking-enabled [class*="__rail"]:has(a[href^="https://advertising.civitai.com/api/v1/engagement"]),
    html.cct-ad-blocking-enabled [style*="content-visibility"]:has(a[href^="https://advertising.civitai.com/api/v1/engagement"]) {
      display: none !important;
    }

    html.cct-site-red.cct-ad-blocking-enabled .box-content:has(> div[id]:empty),
    html.cct-site-red.cct-ad-blocking-enabled [style*="min-height"]:has(.box-content > div[id]:empty),
    html.cct-site-red.cct-ad-blocking-enabled [class*="__rail"]:has(.box-content > div[id]:empty),
    html.cct-site-red.cct-ad-blocking-enabled [style*="content-visibility"]:has(.box-content > div[id]:empty) {
      display: none !important;
    }

    html.cct-site-red.cct-ad-blocking-enabled div.relative.box-content.flex.flex-col.items-center.justify-center.gap-2.bg-gray-1.py-3[style*="min-height: 250px"] {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled div.relative.flex.justify-center.border-t[style*="min-height: 90px"] {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled div.relative.box-content.flex.flex-col.items-center.justify-center.gap-2.py-3[style*="min-height: 250px"] {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled [class*="__rail"]:has(> div.relative.box-content.flex.flex-col.items-center.justify-center.gap-2[style*="min-height: 600px"]) {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled [class*="__rail"]:empty {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled div.relative.box-content.flex.flex-col.items-center.justify-center.gap-2[style*="min-height: 280px"] {
      display: none !important;
    }

    html.cct-site-com.cct-ad-blocking-enabled div.relative.flex.overflow-hidden.flex-col.mx-auto.min-w-80.justify-between:has(a[href="/pricing"]) {
      display: none !important;
    }

    html.cct-ad-blocking-enabled div:has(> div[class~="@container"]:only-child > div[class*="MasonryContainer"][class*="__queries"]:only-child:empty) {
      display: none !important;
    }

    html.cct-ad-blocking-enabled.cct-ad-layout-centered [class*="__mainRegion"][class*="__withRail"] {
      grid-template-columns: minmax(0, 1fr) !important;
    }

    html.cct-ad-blocking-enabled.cct-ad-layout-centered [class*="__mainRegion"][class*="__withRail"] > [class*="__contentCol"] {
      width: 100% !important;
      margin-inline: auto !important;
    }

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
      --cct-menu-bg: #25262B;
      --cct-menu-border: #373A40;
      --cct-menu-text: #E9ECEF;
      --cct-menu-title: #F1F3F5;
      --cct-menu-muted: var(--mantine-color-dimmed);
      --cct-menu-divider: #373A40;
      --cct-menu-hover: #2C2E33;
      --cct-menu-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.35));
      position: fixed;
      z-index: 10000;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 280px;
      max-width: calc(100vw - 16px);
      padding: 12px;
      border: 1px solid var(--cct-menu-border);
      border-radius: var(--mantine-radius-sm, 4px);
      background: var(--cct-menu-bg);
      box-shadow: var(--cct-menu-shadow);
      color: var(--cct-menu-text);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      opacity: 0;
      pointer-events: none;
      transform: translateY(-4px) scale(0.96);
      transform-origin: top left;
      transition: transform 180ms ease, opacity 180ms ease;
    }

    :root[data-mantine-color-scheme="light"] .cct-logo-menu,
    [data-mantine-color-scheme="light"] .cct-logo-menu {
      --cct-menu-bg: #FFFFFF;
      --cct-menu-border: #DEE2E6;
      --cct-menu-text: #343A40;
      --cct-menu-title: #212529;
      --cct-menu-muted: #868E96;
      --cct-menu-divider: #E9ECEF;
      --cct-menu-hover: #F1F3F5;
      --cct-menu-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.12));
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
      color: var(--cct-menu-title);
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
      background: var(--cct-menu-divider);
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
      color: var(--cct-menu-text);
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
      color: var(--cct-menu-text);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      text-align: left;
      cursor: pointer;
    }

    .cct-logo-menu-toggle:hover {
      background: var(--cct-menu-hover);
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
      color: var(--cct-menu-muted);
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
      background: var(--cct-menu-divider);
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
      border: 1px solid var(--cct-menu-border);
      border-radius: var(--mantine-radius-sm, 4px);
      background: var(--cct-menu-bg);
      box-shadow: var(--cct-menu-shadow);
      color: var(--cct-menu-text);
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
      color: var(--cct-menu-muted);
    }

    .cct-logo-menu-link:hover {
      background: var(--cct-menu-hover);
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

    .cct-model-spoiler-float-button {
      position: relative;
      z-index: 30;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      min-width: max-content;
      height: var(--button-height-sm, calc(2.25rem * var(--mantine-scale)));
      padding-inline: var(--mantine-spacing-xs);
      border: var(--button-bd, calc(0.0625rem * var(--mantine-scale)) solid transparent);
      border-radius: var(--button-radius, var(--mantine-radius-default));
      background: var(--mantine-color-blue-filled);
      color: var(--mantine-color-white);
      font-family: var(--mantine-font-family);
      font-size: var(--button-fz, var(--mantine-font-size-sm));
      font-weight: 600;
      line-height: 1;
      text-align: center;
      user-select: none;
      pointer-events: auto;
      cursor: pointer;
      transition-property: transform;
      transition-timing-function: cubic-bezier(.4, 0, .2, 1);
      transition-duration: .15s;
    }

    .cct-model-spoiler-float-button * {
      pointer-events: none;
    }

    .cct-model-spoiler-float-button:hover {
      background: var(--mantine-color-blue-filled-hover);
    }

    .cct-model-spoiler-float-button:active {
      transform: translateY(1px);
    }

    .cct-model-spoiler-float-button:disabled {
      cursor: default;
      opacity: 0.65;
    }

    .cct-model-spoiler-float-inner {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
    }

    .cct-model-spoiler-float-icon {
      display: block;
      width: 20px;
      height: 20px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2.5;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex: 0 0 auto;
    }

    .cct-model-version-list-hidden {
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
      clip-path: inset(50%) !important;
    }

    .cct-model-version-dropdown {
      position: relative;
      z-index: 20;
      width: 100%;
      margin-bottom: var(--mantine-spacing-md);
      font-family: var(--mantine-font-family);
    }

    .cct-model-version-select-trigger {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--mantine-spacing-xs);
      width: 100%;
      height: var(--input-height-sm, calc(2.25rem * var(--mantine-scale)));
      padding-inline: var(--mantine-spacing-sm);
      border: calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-dark-4, #373A40);
      border-radius: var(--mantine-radius-sm, calc(0.25rem * var(--mantine-scale)));
      background: var(--mantine-color-dark-6, #25262B);
      color: var(--mantine-color-gray-3, #DEE2E6);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      text-align: left;
      cursor: pointer;
    }

    .cct-model-version-select-trigger:hover {
      background: var(--mantine-color-dark-5, #2C2E33);
    }

    .cct-model-version-select-trigger * {
      pointer-events: none;
    }

    .cct-model-version-dropdown[data-open="true"] .cct-model-version-select-trigger {
      border-color: var(--mantine-color-blue-filled, #228BE6);
    }

    .cct-model-version-dropdown[data-open="true"] .cct-model-version-select-icon {
      transform: rotate(180deg);
    }

    .cct-model-version-select-current,
    .cct-model-version-select-option {
      display: flex;
      align-items: center;
      gap: 6px;
      min-width: 0;
    }

    .cct-model-version-select-current {
      flex: 1 1 auto;
    }

    .cct-model-version-select-label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .cct-model-version-select-paid {
      color: var(--mantine-color-yellow-6, #FAB005);
      flex: 0 0 auto;
      line-height: 1;
    }

    .cct-model-version-select-icon {
      display: block;
      width: 16px;
      height: 16px;
      fill: none;
      stroke: currentColor;
      stroke-width: 2;
      stroke-linecap: round;
      stroke-linejoin: round;
      flex: 0 0 auto;
      color: var(--mantine-color-dimmed);
      transition: transform 120ms ease;
    }

    .cct-model-version-select-menu {
      position: absolute;
      left: 0;
      right: 0;
      top: calc(100% + 4px);
      z-index: 1000;
      max-height: 320px;
      overflow: auto;
      overscroll-behavior: contain;
      padding: 4px;
      border: calc(0.0625rem * var(--mantine-scale)) solid var(--mantine-color-dark-4, #373A40);
      border-radius: var(--mantine-radius-sm, calc(0.25rem * var(--mantine-scale)));
      background: var(--mantine-color-dark-6, #25262B);
      box-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.35));
    }

    .cct-model-version-select-option {
      width: 100%;
      min-height: 32px;
      padding: 6px 8px;
      border: 0;
      border-radius: var(--mantine-radius-sm, calc(0.25rem * var(--mantine-scale)));
      background: transparent;
      color: var(--mantine-color-gray-3, #DEE2E6);
      font-family: var(--mantine-font-family);
      font-size: var(--mantine-font-size-sm);
      line-height: var(--mantine-line-height-sm);
      text-align: left;
      cursor: pointer;
    }

    .cct-model-version-select-option:hover {
      background: var(--mantine-color-dark-5, #2C2E33);
    }

    .cct-model-version-select-option[aria-selected="true"] {
      background: var(--mantine-color-blue-filled, #228BE6);
      color: var(--mantine-color-white, #FFFFFF);
    }

    :root[data-mantine-color-scheme="light"] .cct-model-version-select-trigger,
    [data-mantine-color-scheme="light"] .cct-model-version-select-trigger {
      border-color: var(--mantine-color-gray-4, #CED4DA);
      background: var(--mantine-color-white, #FFFFFF);
      color: var(--mantine-color-gray-8, #343A40);
    }

    :root[data-mantine-color-scheme="light"] .cct-model-version-select-trigger:hover,
    [data-mantine-color-scheme="light"] .cct-model-version-select-trigger:hover {
      background: var(--mantine-color-gray-0, #F8F9FA);
    }

    :root[data-mantine-color-scheme="light"] .cct-model-version-select-menu,
    [data-mantine-color-scheme="light"] .cct-model-version-select-menu {
      border-color: var(--mantine-color-gray-4, #CED4DA);
      background: var(--mantine-color-white, #FFFFFF);
      box-shadow: var(--mantine-shadow-md, 0 8px 24px rgba(0, 0, 0, 0.12));
    }

    :root[data-mantine-color-scheme="light"] .cct-model-version-select-option,
    [data-mantine-color-scheme="light"] .cct-model-version-select-option {
      color: var(--mantine-color-gray-8, #343A40);
    }

    :root[data-mantine-color-scheme="light"] .cct-model-version-select-option:hover,
    [data-mantine-color-scheme="light"] .cct-model-version-select-option:hover {
      background: var(--mantine-color-gray-0, #F8F9FA);
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
