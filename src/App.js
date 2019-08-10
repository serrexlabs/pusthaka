"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var page_1 = __importDefault(require("@atlaskit/page"));
var router_1 = require("@reach/router");
var navigation_1 = require("./components/navigation");
function App(props) {
    return (react_1.default.createElement(page_1.default, { navigation: react_1.default.createElement(navigation_1.Nav, null) },
        react_1.default.createElement("nav", null,
            react_1.default.createElement(router_1.Link, { to: "home" }, "Home"),
            react_1.default.createElement(router_1.Link, { to: "dashboard" }, "Dashboard")),
        props.children));
}
exports.default = App;
//# sourceMappingURL=App.js.map