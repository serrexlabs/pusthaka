import React from "react";
import { expect } from "chai";
import { mount } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import sinon from "sinon";
import CreateDrawerContent from "./create-drawer-content";
import * as UploadActions from "../../store/actions/upload-actions";

const mockStore = configureMockStore();

describe("<CreateDrawerContent />", (): void => {
  const sandbox = sinon.createSandbox();
  let component: any;
  let openWindowStub: any;

  beforeEach(() => {
    // NOTE: doing mount cause unwanted rendering, the recommended way is shallow rendering
    component = mount(
      <Provider store={mockStore()}>
        <CreateDrawerContent />
      </Provider>,
    );
    openWindowStub = sandbox.stub(UploadActions, "openWindow").returns({
      type: "OPEN_WINDOW_MOCK_TYPE",
    });
  });

  afterEach((): void => {
    sandbox.restore();
  });

  it("will dispatch an open window action", (): void => {
    component.find("#upload-book-button").simulate("click");
    expect(openWindowStub.callCount).to.equal(1);
  });
});
