define(["exports", "foo"], function (_exports, _foo) {
  "use strict";

  _exports.__esModule = true;
  _exportStar(_foo);
  function _exportStar(mod) {
    Object.keys(mod).forEach(function (k) {
      if (["default", "__esModule"].indexOf(k) < 0 && !(k in _exports && _exports[k] === mod[k])) {
        _exports[k] = mod[k];
      }
    });
    return mod;
  }
});
