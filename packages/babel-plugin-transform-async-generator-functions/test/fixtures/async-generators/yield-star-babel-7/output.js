function g() {
  return babelHelpers.callAsyncGenerator(function* () {
    yield* babelHelpers.asyncGeneratorDelegate(babelHelpers.asyncIterator([1, 2, 3]), babelHelpers.awaitAsyncGenerator);
    yield* babelHelpers.asyncGeneratorDelegate(babelHelpers.asyncIterator(iterable), babelHelpers.awaitAsyncGenerator);
  }, this, arguments);
}
