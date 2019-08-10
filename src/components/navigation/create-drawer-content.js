"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_redux_1 = require("react-redux");
var React = __importStar(require("react"));
var upload_actions_1 = require("../../store/actions/upload-actions");
var CreateDrawerContent = function () {
    var dispatch = react_redux_1.useDispatch();
    return (React.createElement("div", null,
        React.createElement("h1", null, "Create"),
        React.createElement("button", { id: "upload-book-button", type: "button", onClick: function () { return dispatch(upload_actions_1.openWindow()); } }, "Upload book"),
        React.createElement("button", { type: "button" }, " Create collection")));
};
exports.default = CreateDrawerContent;
//# sourceMappingURL=create-drawer-content.js.map