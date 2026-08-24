(function () {
  "use strict";

  const CCT = window.CCT;
  const STORAGE_KEY = "CCT_FULL_SEARCH_ENABLED";
  const MATURE_LEVELS = 4 | 8 | 16;
  const SAFE_LEVELS = 1 | 2;
  const MATURE_ONLY_EXCLUDED_TAG_IDS = new Set([5351, 306619, 154326, 161829, 163032]);
  const queryStates = new Map();

  function isFullSearchEnabled() {
    return localStorage.getItem(STORAGE_KEY) === "true";
  }

  function setFullSearchEnabled(enabled) {
    localStorage.setItem(STORAGE_KEY, String(Boolean(enabled)));
    queryStates.clear();
  }

  function isRedDomain() {
    return /(^|\.)civitai\.red$/i.test(location.hostname);
  }

  function getRequestUrl(input) {
    try {
      if (typeof input === "string" || input instanceof URL) {
        return new URL(String(input), location.href);
      }
      if (input && typeof input.url === "string") return new URL(input.url, location.href);
    } catch (error) {
      return null;
    }
    return null;
  }

  function getPayloadContainer(payload) {
    if (!payload || typeof payload !== "object") return null;
    if (payload.json && typeof payload.json === "object") return payload.json;
    return payload;
  }

  function readQueryInput(url) {
    const raw = url.searchParams.get("input");
    if (!raw) return null;

    try {
      const payload = JSON.parse(raw);
      const input = getPayloadContainer(payload);
      return input ? { payload, input } : null;
    } catch (error) {
      return null;
    }
  }

  function getPageData(payload) {
    const resultData = payload && payload.result && payload.result.data;
    if (!resultData) return null;
    return getPayloadContainer(resultData);
  }

  function createQueryKey(input) {
    const copy = { ...input };
    delete copy.cursor;
    delete copy.browsingLevel;
    delete copy.disableMinor;
    if (Array.isArray(copy.excludedTagIds)) {
      copy.excludedTagIds = copy.excludedTagIds.filter(
        (id) => !MATURE_ONLY_EXCLUDED_TAG_IDS.has(Number(id)),
      );
    }
    return JSON.stringify(copy);
  }

  function createSupplementUrl(url, parsed, cursor) {
    const payload = JSON.parse(JSON.stringify(parsed.payload));
    const input = getPayloadContainer(payload);
    input.browsingLevel = SAFE_LEVELS;
    delete input.disableMinor;
    if (Array.isArray(input.excludedTagIds)) {
      input.excludedTagIds = input.excludedTagIds.filter(
        (id) => !MATURE_ONLY_EXCLUDED_TAG_IDS.has(Number(id)),
      );
    }

    if (cursor === undefined || cursor === null || cursor === "") delete input.cursor;
    else input.cursor = cursor;

    const supplementUrl = new URL(url);
    supplementUrl.searchParams.set("input", JSON.stringify(payload));
    return supplementUrl;
  }

  function createResponse(pageWindow, original, payload) {
    const headers = new pageWindow.Headers(original.headers);
    headers.delete("content-length");
    headers.delete("content-encoding");
    return new pageWindow.Response(JSON.stringify(payload), {
      status: original.status,
      statusText: original.statusText,
      headers,
    });
  }

  function splitTopLevelAnd(filter) {
    const clauses = [];
    let start = 0;
    let depth = 0;
    let quote = "";

    for (let index = 0; index < filter.length; index += 1) {
      const character = filter[index];
      if (quote) {
        if (character === quote && filter[index - 1] !== "\\") quote = "";
        continue;
      }
      if (character === '"' || character === "'") {
        quote = character;
        continue;
      }
      if (character === "(") depth += 1;
      else if (character === ")") depth = Math.max(0, depth - 1);
      else if (depth === 0 && /^\s+AND\s+/i.test(filter.slice(index))) {
        const separator = filter.slice(index).match(/^\s+AND\s+/i)[0];
        clauses.push(filter.slice(start, index).trim());
        index += separator.length - 1;
        start = index + 1;
      }
    }

    const lastClause = filter.slice(start).trim();
    if (lastClause) clauses.push(lastClause);
    return clauses;
  }

  function containsMinorRestriction(filter) {
    if (Array.isArray(filter)) return filter.some(containsMinorRestriction);
    return typeof filter === "string" && /\bminor\s*!=\s*true\b/i.test(filter);
  }

  function createCompleteSearchFilter(filter) {
    if (Array.isArray(filter)) {
      return filter
        .map(createCompleteSearchFilter)
        .filter((clause) => clause !== null && clause !== "" && (!Array.isArray(clause) || clause.length));
    }
    if (typeof filter !== "string" || !filter.trim()) return filter;
    return splitTopLevelAnd(filter)
      .filter((clause) => !/\bminor\s*!=\s*true\b/i.test(clause))
      .join(" AND ");
  }

  function isModelIndex(url, query) {
    return (
      /models/i.test(String((query && (query.indexUid || query.indexName)) || "")) ||
      /\/indexes\/[^/]*models[^/]*\/search\/?$/i.test(url.pathname)
    );
  }

  function transformSearchBody(url, body) {
    if (!body || typeof body !== "object") return null;
    const transformed = JSON.parse(JSON.stringify(body));
    let changed = false;

    const transformQuery = (query) => {
      if (!query || typeof query !== "object" || !isModelIndex(url, query)) return;
      if (!containsMinorRestriction(query.filter)) return;
      query.filter = createCompleteSearchFilter(query.filter);
      changed = true;
    };

    if (Array.isArray(transformed.queries)) transformed.queries.forEach(transformQuery);
    else transformQuery(transformed);
    return changed ? transformed : null;
  }

  function clearMinorFlags(value) {
    if (!value || typeof value !== "object") return;
    if (Object.prototype.hasOwnProperty.call(value, "minor")) value.minor = false;
    if (Array.isArray(value)) {
      value.forEach(clearMinorFlags);
      return;
    }
    Object.values(value).forEach(clearMinorFlags);
  }

  function clearModelSearchMinorFlags(url, requestBody, responsePayload) {
    if (!requestBody || !responsePayload || typeof responsePayload !== "object") return false;
    let changed = false;

    if (Array.isArray(requestBody.queries) && Array.isArray(responsePayload.results)) {
      requestBody.queries.forEach((query, index) => {
        if (!isModelIndex(url, query)) return;
        const result = responsePayload.results[index];
        if (!result || !Array.isArray(result.hits)) return;
        clearMinorFlags(result.hits);
        changed = true;
      });
      return changed;
    }

    if (isModelIndex(url, requestBody) && Array.isArray(responsePayload.hits)) {
      clearMinorFlags(responsePayload.hits);
      changed = true;
    }
    return changed;
  }

  async function readRequestJson(pageWindow, input, init) {
    try {
      if (init && typeof init.body === "string") return JSON.parse(init.body);
      if (pageWindow.Request && input instanceof pageWindow.Request) {
        return JSON.parse(await input.clone().text());
      }
    } catch (error) {
      return null;
    }
    return null;
  }

  function createRequestWithBody(pageWindow, input, init, body) {
    const serializedBody = JSON.stringify(body);
    if (pageWindow.Request && input instanceof pageWindow.Request) {
      return [new pageWindow.Request(input, { body: serializedBody }), undefined];
    }
    return [input, { ...(init || {}), body: serializedBody }];
  }

  async function fetchCompleteModelSearch(pageWindow, nativeFetch, thisArg, input, init) {
    const url = getRequestUrl(input);
    const body = await readRequestJson(pageWindow, input, init);
    const transformed = url && transformSearchBody(url, body);
    if (!transformed) return nativeFetch.call(thisArg, input, init);

    const [nextInput, nextInit] = createRequestWithBody(pageWindow, input, init, transformed);
    const response = await nativeFetch.call(thisArg, nextInput, nextInit);
    if (!response.ok) return response;

    try {
      const payload = await response.clone().json();
      if (!clearModelSearchMinorFlags(url, transformed, payload)) return response;
      return createResponse(pageWindow, response, payload);
    } catch (error) {
      return response;
    }
  }

  function installFullSearchXhrInterceptor(pageWindow) {
    const Xhr = pageWindow.XMLHttpRequest;
    if (!Xhr || !Xhr.prototype || Xhr.prototype.__CCT_FULL_SEARCH_INSTALLED__) return;

    const nativeOpen = Xhr.prototype.open;
    const nativeSend = Xhr.prototype.send;
    Xhr.prototype.__CCT_FULL_SEARCH_INSTALLED__ = true;

    Xhr.prototype.open = function cctFullSearchOpen(method, url, ...rest) {
      this.__CCT_FULL_SEARCH_URL__ = getRequestUrl(url);
      return nativeOpen.call(this, method, url, ...rest);
    };

    Xhr.prototype.send = function cctFullSearchSend(body) {
      const url = this.__CCT_FULL_SEARCH_URL__;
      const isSearchEndpoint =
        url &&
        (/\/multi-search\/?$/i.test(url.pathname) ||
          /\/indexes\/[^/]*models[^/]*\/search\/?$/i.test(url.pathname));

      if (
        isFullSearchEnabled() &&
        isRedDomain() &&
        isSearchEndpoint &&
        typeof body === "string"
      ) {
        try {
          const transformed = transformSearchBody(url, JSON.parse(body));
          if (transformed) body = JSON.stringify(transformed);
        } catch (error) {
          // Keep the original request if the payload is not JSON.
        }
      }
      return nativeSend.call(this, body);
    };
  }

  function installFullSearchInterceptor() {
    const pageWindow = typeof unsafeWindow !== "undefined" ? unsafeWindow : window;
    if (pageWindow.__CCT_FULL_SEARCH_INSTALLED__) return;
    pageWindow.__CCT_FULL_SEARCH_INSTALLED__ = true;
    installFullSearchXhrInterceptor(pageWindow);
    if (typeof pageWindow.fetch !== "function") return;

    const nativeFetch = pageWindow.fetch;
    pageWindow.fetch = async function cctFullSearchFetch(input, init) {
      const url = getRequestUrl(input);
      const isEnabled = isFullSearchEnabled() && isRedDomain() && url;
      const isSearchEndpoint =
        isEnabled &&
        (/\/multi-search\/?$/i.test(url.pathname) ||
          /\/indexes\/[^/]*models[^/]*\/search\/?$/i.test(url.pathname));

      if (isSearchEndpoint) {
        return fetchCompleteModelSearch(pageWindow, nativeFetch, this, input, init);
      }

      const shouldInspect =
        isEnabled && /\/api\/trpc\/model\.getAll(?:$|[?,])/i.test(url.pathname + url.search);
      if (!shouldInspect) return nativeFetch.call(this, input, init);

      const parsed = readQueryInput(url);
      const query = parsed && typeof parsed.input.query === "string" ? parsed.input.query.trim() : "";
      const browsingLevel = parsed ? Number(parsed.input.browsingLevel) || 0 : 0;
      if (!parsed || !query || (browsingLevel & MATURE_LEVELS) === 0) {
        return nativeFetch.call(this, input, init);
      }

      const key = createQueryKey(parsed.input);
      const isFirstPage = parsed.input.cursor === undefined || parsed.input.cursor === null;
      if (isFirstPage || !queryStates.has(key)) {
        queryStates.set(key, { nextCursor: undefined, exhausted: false, seenIds: new Set() });
      }
      const state = queryStates.get(key);
      const supplementUrl = createSupplementUrl(url, parsed, state.nextCursor);

      const originalPromise = nativeFetch.call(this, input, init);
      const supplementPromise = state.exhausted
        ? Promise.resolve(null)
        : nativeFetch.call(this, supplementUrl.toString(), init).catch(() => null);
      const [originalResponse, supplementResponse] = await Promise.all([
        originalPromise,
        supplementPromise,
      ]);
      if (!originalResponse.ok || !supplementResponse || !supplementResponse.ok) return originalResponse;

      try {
        const [originalPayload, supplementPayload] = await Promise.all([
          originalResponse.clone().json(),
          supplementResponse.json(),
        ]);
        const originalPage = getPageData(originalPayload);
        const supplementPage = getPageData(supplementPayload);
        if (
          !Array.isArray(originalPage && originalPage.items) ||
          !Array.isArray(supplementPage && supplementPage.items)
        ) {
          return originalResponse;
        }

        originalPage.items.forEach((item) => {
          if (item && item.id !== undefined) state.seenIds.add(String(item.id));
        });
        const additions = supplementPage.items.filter((item) => {
          if (!item || item.id === undefined) return false;
          const id = String(item.id);
          if (state.seenIds.has(id)) return false;
          state.seenIds.add(id);
          return true;
        });
        originalPage.items.push(...additions);
        state.nextCursor = supplementPage.nextCursor;
        state.exhausted = state.nextCursor === undefined || state.nextCursor === null;
        return createResponse(pageWindow, originalResponse, originalPayload);
      } catch (error) {
        return originalResponse;
      }
    };
  }

  CCT.isFullSearchEnabled = isFullSearchEnabled;
  CCT.setFullSearchEnabled = setFullSearchEnabled;
  installFullSearchInterceptor();
})();
