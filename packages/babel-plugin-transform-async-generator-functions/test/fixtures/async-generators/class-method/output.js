class C {
  g() {
    var _this = this;
    return babelHelpers.callAsyncGenerator(function* () {
      _this;
      yield babelHelpers.awaitAsyncGenerator(1);
      yield 2;
      return 3;
    });
  }
}
