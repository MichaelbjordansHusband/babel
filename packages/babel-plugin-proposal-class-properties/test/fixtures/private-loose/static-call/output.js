var _foo = /*#__PURE__*/babelHelpers.classPrivateFieldLooseKey("foo");
var Foo = /*#__PURE__*/function () {
    "use strict";

    function Foo() {
      babelHelpers.classCallCheck(this, Foo);
    }
    babelHelpers.createClass(Foo, [{
      key: "test",
      value: function test(x) {
        return babelHelpers.classPrivateFieldLooseBase(Foo, _foo)[_foo](x);
      }
    }]);
    return Foo;
  }();
Object.defineProperty(Foo, _foo, {
  writable: true,
  value: function (x) {
    return x;
  }
});
