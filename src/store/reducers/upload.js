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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UploadActions = __importStar(require("../actions/upload-actions"));
var initialState = {
    isFileWindowOpen: false,
};
function openFileWindow(state) {
    return __assign({}, state, { isFileWindowOpen: true });
}
exports.default = (function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UploadActions.OPEN_FILE_WINDOW:
            return openFileWindow(state);
        default:
            return state;
    }
});
//# sourceMappingURL=upload.js.map