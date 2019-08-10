"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger = function (store) { return function (next) { return function (action) {
    // eslint-disable-next-line no-console
    console.group(action.type);
    // eslint-disable-next-line no-console
    console.info("dispatching", action);
    var result = next(action);
    // eslint-disable-next-line no-console
    console.log("next state", store.getState());
    // eslint-disable-next-line no-console
    console.groupEnd();
    return result;
}; }; };
exports.default = logger;
//# sourceMappingURL=logger.js.map