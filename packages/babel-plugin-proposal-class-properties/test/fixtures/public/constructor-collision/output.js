var foo = "bar";
var Foo = /*#__PURE__*/babelHelpers.createClass(function Foo() {
    "use strict";

    babelHelpers.classCallCheck(this, Foo);
    babelHelpers.defineProperty(this, "bar", foo);
    var _foo = "foo";
    var baz = "baz";
  });
babelHelpers.defineProperty(Foo, "bar", baz);
