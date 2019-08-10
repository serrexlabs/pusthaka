"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var redux_devtools_extension_1 = require("redux-devtools-extension");
var logger_1 = __importDefault(require("./middlewares/logger"));
var reducers_1 = __importDefault(require("./reducers"));
exports.default = (function () {
    if (process.env.NODE_ENV === "development") {
        var middlewareEnhancer = redux_1.applyMiddleware(logger_1.default);
        var composedEnhancers = redux_devtools_extension_1.composeWithDevTools(middlewareEnhancer);
        return redux_1.createStore(reducers_1.default, {}, composedEnhancers);
    }
    return redux_1.createStore(reducers_1.default);
});
//# sourceMappingURL=configure-store.js.map