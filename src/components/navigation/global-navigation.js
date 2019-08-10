"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var global_navigation_1 = __importDefault(require("@atlaskit/global-navigation"));
var objects_1 = __importDefault(require("@atlaskit/icon/glyph/emoji/objects"));
var create_drawer_content_1 = __importDefault(require("./create-drawer-content"));
var Global = function () {
    var _a = react_1.useState(false), isCreateDrawer = _a[0], openCreateDrawer = _a[1];
    return (react_1.default.createElement(global_navigation_1.default, { productIcon: objects_1.default, productHref: "#", onProductClick: function () { return null; }, onCreateClick: function () { return openCreateDrawer(true); }, isCreateDrawerOpen: isCreateDrawer, createDrawerContents: function () { return react_1.default.createElement(create_drawer_content_1.default, null); }, onCreateDrawerClose: function () { return openCreateDrawer(false); }, onCreateDrawerCloseComplete: function () { return null; }, onSearchClick: function () { return null; }, onSettingsClick: function () { return null; }, loginHref: "#login" }));
};
exports.default = Global;
//# sourceMappingURL=global-navigation.js.map