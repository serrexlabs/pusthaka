"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var chai_1 = require("chai");
var enzyme_1 = require("enzyme");
var redux_mock_store_1 = __importDefault(require("redux-mock-store"));
var react_redux_1 = require("react-redux");
var sinon_1 = __importDefault(require("sinon"));
var create_drawer_content_1 = __importDefault(require("./create-drawer-content"));
var UploadActions = __importStar(require("../../store/actions/upload-actions"));
var mockStore = redux_mock_store_1.default();
describe("<CreateDrawerContent />", function () {
    var sandbox = sinon_1.default.createSandbox();
    var component;
    var openWindowStub;
    beforeEach(function () {
        // NOTE: doing mount cause unwanted rendering, the recommended way is shallow rendering
        component = enzyme_1.mount(react_1.default.createElement(react_redux_1.Provider, { store: mockStore() },
            react_1.default.createElement(create_drawer_content_1.default, null)));
        openWindowStub = sandbox.stub(UploadActions, "openWindow").returns({
            type: "OPEN_WINDOW_MOCK_TYPE",
        });
    });
    afterEach(function () {
        sandbox.restore();
    });
    it("will dispatch an open window action", function () {
        component.find("#upload-book-button").simulate("click");
        chai_1.expect(openWindowStub.callCount).to.equal(1);
    });
});
//# sourceMappingURL=create-drawer-content.spec.js.map