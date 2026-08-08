(function () {
  "use strict";

  const CCT = window.CCT;

  function createRuleEntry(options) {
    const entry = Object.assign(
      {
        static: {},
        regexp: [],
        selector: [],
        selectValue: [],
        ignore: [],
      },
      options.rules || {},
    );

    entry.type = options.type;
    entry.name = options.name || "global";
    entry.component = options.component || "index";

    return entry;
  }

  function registerRules(options) {
    const entry = createRuleEntry(options || {});

    if (entry.type === "common") {
      CCT.rules.common.push(entry);
      return;
    }

    if (entry.type === "layout") {
      CCT.rules.layouts[entry.name] = CCT.rules.layouts[entry.name] || [];
      CCT.rules.layouts[entry.name].push(entry);
      return;
    }

    if (entry.type === "page") {
      CCT.rules.pages[entry.name] = CCT.rules.pages[entry.name] || [];
      CCT.rules.pages[entry.name].push(entry);
    }
  }

  function mergeRules(ruleGroups) {
    const merged = {
      static: {},
      regexp: [],
      selector: [],
      selectValue: [],
      ignore: [],
    };

    ruleGroups.forEach((group) => {
      Object.assign(merged.static, group.static || {});
      merged.regexp.push(...(group.regexp || []));
      merged.selector.push(...(group.selector || []));
      merged.selectValue.push(...(group.selectValue || []));
      merged.ignore.push(...(group.ignore || []));
    });

    return merged;
  }

  function getActiveRules() {
    const page = CCT.getCurrentPage();
    const layoutRules = Object.values(CCT.rules.layouts).flat();
    const pageRules = CCT.rules.pages[page] || [];

    return mergeRules([...CCT.rules.common, ...layoutRules, ...pageRules]);
  }

  CCT.registerRules = registerRules;
  CCT.getActiveRules = getActiveRules;
})();
