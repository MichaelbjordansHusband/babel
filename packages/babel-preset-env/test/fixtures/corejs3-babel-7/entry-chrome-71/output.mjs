import "core-js/modules/es.array.reduce.js";
import "core-js/modules/es.array.reduce-right.js";
import "core-js/modules/es.array.unscopables.flat.js";
import "core-js/modules/es.array.unscopables.flat-map.js";
import "core-js/modules/es.math.hypot.js";
import "core-js/modules/es.object.from-entries.js";
import "core-js/modules/es.regexp.flags.js";
import "core-js/modules/es.typed-array.set.js";
import "core-js/modules/es.typed-array.sort.js";
import "core-js/modules/web.immediate.js";
const foo = {
    a: true
  };
const bar = {
    ...foo,
    b: false
  };
async function baz() {
  for await (const x of someAsyncThing()) {
    console.log(x);
  }
}
