"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.namespace2 = exports.namespace1 = void 0;
function namespace1() {
  const data = babelHelpers.interopRequireWildcard(require("white"));
  namespace1 = function () {
    return data;
  };
  return data;
}
_defineGetter(exports, "namespace1", function () {
  return namespace1();
});
var namespace2 = babelHelpers.interopRequireWildcard(require("black"));
exports.namespace2 = namespace2;
function _defineGetter(obj, prop, fn) {
  Object.defineProperty(obj, prop, {
    enumerable: true,
    get: fn
  });
}
