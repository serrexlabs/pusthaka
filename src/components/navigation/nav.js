"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var navigation_next_1 = require("@atlaskit/navigation-next");
var theme_1 = require("../../theme");
var global_navigation_1 = __importDefault(require("./global-navigation"));
// @TODO move into separate component
exports.default = (function () { return (react_1.default.createElement(navigation_next_1.NavigationProvider, null,
    react_1.default.createElement(navigation_next_1.ThemeProvider, { theme: function (theme) { return (__assign({}, theme, { mode: theme_1.navTheme })); } },
        react_1.default.createElement(navigation_next_1.LayoutManager, { globalNavigation: function () { return react_1.default.createElement(global_navigation_1.default, null); }, productNavigation: function () { return null; }, containerNavigation: function () { return null; } })))); });
//# sourceMappingURL=nav.js.map