"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var upload_1 = __importDefault(require("./upload"));
var appReducer = redux_1.combineReducers({
    upload: upload_1.default,
});
exports.default = (function (state, action) {
    return appReducer(state, action);
});
//# sourceMappingURL=index.js.map