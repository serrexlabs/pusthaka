import { expect } from "chai";
import { ServiceManager } from "./service-manager";

describe("ServiceManager", (): void => {
  beforeEach(() => {});

  afterEach((): void => {});

  it("will resolve same instance (singleton object)", (): void => {
    const instance1 = ServiceManager.getInstance();
    instance1.register("fakeService", () => "fake service resolved");
    const instance2 = ServiceManager.getInstance();
    const fakeService = instance2.get("fakeService");

    expect(instance1).to.deep.equal(instance2);
    expect(fakeService).to.deep.equal("fake service resolved");
  });
});
