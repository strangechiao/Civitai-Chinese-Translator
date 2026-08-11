(function () {
  "use strict";

  const CCT = window.CCT;

  function normalizeText(text) {
    return String(text || "")
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\u00a0/g, " ")
      .replace(/[\u200B-\u200D\u2060\uFEFF]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function foldText(text) {
    return normalizeText(text).toLocaleLowerCase("en-US");
  }

  CCT.normalizeText = normalizeText;
  CCT.foldText = foldText;
})();
