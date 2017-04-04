System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Handler;
    return {
        setters: [],
        execute: function () {
            Handler = (function () {
                function Handler(_event, _callback) {
                    this._event = _event;
                    this._callback = _callback;
                }
                Object.defineProperty(Handler.prototype, "event", {
                    get: function () {
                        return this._event;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Handler.prototype, "callback", {
                    get: function () {
                        return this._callback;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Handler;
            }());
            exports_1("Handler", Handler);
        }
    };
});
