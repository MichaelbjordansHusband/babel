const path = require("path");
const { setTimeout } = require("timers/promises");

const ACTIONS = {
  GET_VERSION: "GET_VERSION",
  GET_TYPES_INFO: "GET_TYPES_INFO",
  GET_VISITOR_KEYS: "GET_VISITOR_KEYS",
  GET_TOKEN_LABELS: "GET_TOKEN_LABELS",
  MAYBE_PARSE: "MAYBE_PARSE",
  MAYBE_PARSE_SYNC: "MAYBE_PARSE_SYNC",
};

class Client {
  #send;

  constructor(send) {
    this.#send = send;
  }

  #vCache;
  getVersion() {
    return (this.#vCache ??= this.#send(ACTIONS.GET_VERSION, undefined));
  }

  #tiCache;
  getTypesInfo() {
    return (this.#tiCache ??= this.#send(ACTIONS.GET_TYPES_INFO, undefined));
  }

  #vkCache;
  getVisitorKeys() {
    return (this.#vkCache ??= this.#send(ACTIONS.GET_VISITOR_KEYS, undefined));
  }

  #tlCache;
  getTokLabels() {
    return (this.#tlCache ??= this.#send(ACTIONS.GET_TOKEN_LABELS, undefined));
  }

  maybeParse(code, options) {
    return this.#send(ACTIONS.MAYBE_PARSE, { code, options });
  }
}

// We need to run Babel in a worker for two reasons:
// 1. ESLint workers must be CJS files, and this is a problem
//    since Babel 8+ uses native ESM
// 2. ESLint parsers must run synchronously, but many steps
//    of Babel's config loading (which is done for each file)
//    can be asynchronous
// If ESLint starts supporting async parsers, we can move
// everything back to the main thread.
exports.WorkerClient = class WorkerClient extends Client {
  static #worker_threads_cache;
  static get #worker_threads() {
    return (WorkerClient.#worker_threads_cache ??= require("worker_threads"));
  }

  #worker = new WorkerClient.#worker_threads.Worker(
    path.resolve(__dirname, "../lib/worker/index.cjs"),
    { env: WorkerClient.#worker_threads.SHARE_ENV },
  );

  #signal = new Int32Array(new SharedArrayBuffer(4));

  constructor() {
    super((action, payload) => {
      this.#signal[0] = 0;
      const subChannel = new WorkerClient.#worker_threads.MessageChannel();

      function onClose() {
        throw "onClose: " + Object.keys(WorkerClient.#worker_threads.receiveMessageOnPort(
          subChannel.port2,
        ))
      }
      //this.#worker.prependOnceListener("close", onClose);
      //this.#worker.prependOnceListener('messageerror', (err) => { throw "messageerror: "+JSON.stringify(err);});

      this.#worker.postMessage(
        { signal: this.#signal, port: subChannel.port1, action, payload },
        [subChannel.port1],
      );

      Atomics.wait(this.#signal, 0, 0);
      //this.#worker.removeListener("close", onClose);
      const obj = WorkerClient.#worker_threads.receiveMessageOnPort(
        subChannel.port2,
      );
      if (!obj) {
        setTimeout(() => {
          throw "setTimeout:"+WorkerClient.#worker_threads.receiveMessageOnPort(
            subChannel.port2,
          );
        },3000)
        return;
      }
      const { message } = obj;

      if (message.error) throw Object.assign(message.error, message.errorData);
      else return message.result;
    });

    // The worker will never exit by itself. Prevent it from keeping
    // the main process alive.
    this.#worker.unref();
  }
};

if (!process.env.BABEL_8_BREAKING) {
  exports.LocalClient = class LocalClient extends Client {
    static #handleMessage;

    constructor() {
      LocalClient.#handleMessage ??= require("./worker/handle-message.cjs");

      super((action, payload) => {
        return LocalClient.#handleMessage(
          action === ACTIONS.MAYBE_PARSE ? ACTIONS.MAYBE_PARSE_SYNC : action,
          payload,
        );
      });
    }
  };
}
