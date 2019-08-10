"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var router_1 = require("@reach/router");
var App_1 = __importDefault(require("./App"));
var home_page_1 = __importDefault(require("./pages/home-page"));
var collection_page_1 = __importDefault(require("./pages/collection-page"));
var source = router_1.createMemorySource("home");
var history = router_1.createHistory(source);
function MainRouter() {
    return (react_1.default.createElement(router_1.LocationProvider, { history: history },
        react_1.default.createElement(App_1.default, null,
            react_1.default.createElement(router_1.Router, null,
                react_1.default.createElement(home_page_1.default, { path: "home" }),
                react_1.default.createElement(collection_page_1.default, { path: "dashboard" })))));
}
exports.default = MainRouter;
//# sourceMappingURL=Router.js.map