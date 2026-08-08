(function () {
  "use strict";

  const CCT = window.CCT;

  function normalizeText(text) {
    return String(text || "")
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/\u00a0/g, " ")
      .replace(/\s+/g, " ")
      .trim()
      .toLowerCase();
  }

  CCT.normalizeText = normalizeText;
})();
