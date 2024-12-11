"use strict";
(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // src/components/Button/Button.tsx
  var import_jsx_runtime = __require("react/jsx-runtime");
  function Button(props) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "bg-red-500", ...props });
  }
  var Button_default = Button;
})();
