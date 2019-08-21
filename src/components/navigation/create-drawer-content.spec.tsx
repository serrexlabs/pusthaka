import React from "react";
import { expect } from "chai";
import { shallow } from "enzyme";
import sinon from "sinon";
import CreateDrawerContent from "./create-drawer-content";
import { event } from "../../core/event";

describe("<CreateDrawerContent />", (): void => {
  const sandbox = sinon.createSandbox();
  let component: any;

  beforeEach(() => {
    sandbox.stub(event, "dispatch");
    component = shallow(<CreateDrawerContent />);
  });

  afterEach((): void => {
    sandbox.restore();
  });

  it("will dispatch a OPEN_FILE_WINDOW_REQUESTED even", (): void => {
    component.find("#upload-book-button").simulate("click");
    // @ts-ignore
    expect(event.dispatch.callCount).to.equal(1);
    // @ts-ignore
    expect(event.dispatch.firstCall.args).to.deep.equal(["@@upload/OPEN_FILE_WINDOW_REQUESTED"]);
  });
});
