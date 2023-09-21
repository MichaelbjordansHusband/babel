function fn() {
  return babelHelpers.callAsync(function* () {
    yield 0;
    try {
      var _stack = [];
      const x = babelHelpers.using(_stack, y, true);
      yield 1;
    } catch (_) {
      var _error = _;
      var _hasError = true;
    } finally {
      yield babelHelpers.dispose(_stack, _error, _hasError);
    }
  }, this, arguments);
}
